import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRACKER_PATH = path.join(__dirname, 'data', 'applications.md');
const PORT = 3001;

// --- Markdown parser ---

function parseApplications() {
  try {
    const raw = fs.readFileSync(TRACKER_PATH, 'utf-8');
    const lines = raw.split('\n');

    const dataLines = lines.filter(line => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('|')) return false;
      // Skip separator rows (only dashes, pipes, spaces)
      if (/^\|[\s\-|]+\|$/.test(trimmed)) return false;
      // Skip header row
      const cells = trimmed.split('|').map(c => c.trim()).filter(Boolean);
      if (cells[0] === '#') return false;
      return true;
    });

    return dataLines.map(line => {
      const cells = line.split('|').map(c => c.trim()).filter(Boolean);
      // columns: id, date, company, role, score, status, pdf, report, notes
      const [id, date, company, role, scoreRaw, status, pdfRaw, reportRaw, ...notesParts] = cells;

      // Parse score: "4.1/5" → 4.1
      const scoreNum = parseFloat((scoreRaw || '0').split('/')[0]) || 0;

      // Parse PDF: ✅ or ❌
      const hasPdf = (pdfRaw || '').includes('✅');

      // Parse report link: [011](reports/011-...) → { text, url }
      const reportMatch = (reportRaw || '').match(/\[([^\]]+)\]\(([^)]+)\)/);
      const reportText = reportMatch ? reportMatch[1] : '';
      const reportUrl = reportMatch ? reportMatch[2] : '';

      // Notes: rejoin if split by pipes in content
      const notes = notesParts.join(' | ').trim() || (reportRaw && !reportMatch ? reportRaw : '');

      return {
        id: parseInt(id) || 0,
        date: date || '',
        company: company || '',
        role: role || '',
        score: scoreNum,
        scoreRaw: scoreRaw || '',
        status: status || '',
        hasPdf,
        reportText,
        reportUrl,
        notes,
      };
    }).sort((a, b) => b.score - a.score);
  } catch (err) {
    console.error('Error parsing tracker:', err.message);
    return [];
  }
}

// --- SSE clients ---

const clients = new Set();

function broadcast() {
  for (const res of clients) {
    try {
      res.write('data: refresh\n\n');
    } catch {
      clients.delete(res);
    }
  }
}

// --- File watcher ---

let watchDebounce = null;
fs.watch(TRACKER_PATH, () => {
  clearTimeout(watchDebounce);
  watchDebounce = setTimeout(() => {
    console.log('[tracker] applications.md changed — broadcasting refresh');
    broadcast();
  }, 150);
});

// --- HTTP server ---

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.method === 'GET' && req.url === '/api/applications') {
    const data = parseApplications();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));

  } else if (req.method === 'GET' && req.url === '/api/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('data: connected\n\n');
    clients.add(res);

    req.on('close', () => {
      clients.delete(res);
    });

  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`[tracker-server] API running on http://localhost:${PORT}`);
});
