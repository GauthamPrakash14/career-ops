import { useEffect, useState, useCallback } from 'react';
import { Application } from './types';
import { JobTable } from './components/JobTable';

type LiveStatus = 'connecting' | 'live' | 'disconnected';

export default function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liveStatus, setLiveStatus] = useState<LiveStatus>('connecting');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchApplications = useCallback(async () => {
    try {
      const res = await fetch('/api/applications');
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data: Application[] = await res.json();
      setApplications(data);
      setError(null);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load applications');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  useEffect(() => {
    const es = new EventSource('/api/events');
    es.onopen = () => setLiveStatus('live');
    es.onmessage = (e) => {
      if (e.data === 'refresh') fetchApplications();
    };
    es.onerror = () => {
      setLiveStatus('disconnected');
      es.close();
      setTimeout(() => setLiveStatus('connecting'), 3000);
    };
    return () => es.close();
  }, [fetchApplications]);

  const applied = applications.filter(a => a.status.toLowerCase() === 'applied').length;
  const toApply = applications.filter(a => a.status.toLowerCase() === 'evaluated').length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Job Tracker</h1>
            <p className="text-slate-400 text-sm mt-1">Gautham Prakash — career-ops pipeline</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{applications.length}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{applied}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Applied</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{toApply}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">To Apply</div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${
                  liveStatus === 'live' ? 'bg-emerald-400 animate-pulse'
                  : liveStatus === 'connecting' ? 'bg-amber-400 animate-pulse'
                  : 'bg-red-500'
                }`} />
                <span className="text-xs text-slate-500">
                  {liveStatus === 'live' ? 'Live' : liveStatus === 'connecting' ? 'Connecting…' : 'Disconnected'}
                </span>
              </div>
              {lastUpdated && (
                <span className="text-xs text-slate-600">Updated {lastUpdated.toLocaleTimeString()}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> 4.0+ Apply</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> 3.5–3.9 Consider</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> &lt;3.5 Skip</span>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading…</div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400 mb-2">{error}</p>
            <p className="text-slate-500 text-sm">Make sure tracker-server is running on port 3001.</p>
          </div>
        ) : (
          <JobTable applications={applications} />
        )}
      </div>
    </div>
  );
}
