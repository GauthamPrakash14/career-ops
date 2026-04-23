import { Application } from '../types';
import { StatusBadge } from './StatusBadge';

interface Props {
  applications: Application[];
}

function ScoreDot({ score }: { score: number }) {
  let colour = 'bg-red-500';
  if (score >= 4.0) colour = 'bg-emerald-400';
  else if (score >= 3.5) colour = 'bg-amber-400';

  return (
    <span className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colour}`} />
      <span className="font-mono text-sm text-slate-200">{score.toFixed(1)}</span>
    </span>
  );
}

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n) + '…' : str;
}

export function JobTable({ applications }: Props) {
  if (applications.length === 0) {
    return (
      <div className="text-center py-20 text-slate-500">
        No applications found. Start evaluating jobs with career-ops.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/60">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-slate-700/60 bg-slate-800/80">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 w-10">#</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 w-28">Date</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Company</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Role</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 w-20">Score</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 w-28">Status</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 w-12 text-center">CV</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/40">
          {applications.map((app) => (
            <tr key={app.id} className="hover:bg-slate-700/30 transition-colors duration-100">
              <td className="px-4 py-3 text-slate-500 font-mono text-xs">{app.id}</td>
              <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">{app.date}</td>
              <td className="px-4 py-3">
                <span className="font-semibold text-slate-100">{app.company}</span>
              </td>
              <td className="px-4 py-3 text-slate-300 max-w-[200px]">
                <span title={app.role}>{truncate(app.role, 40)}</span>
              </td>
              <td className="px-4 py-3">
                <ScoreDot score={app.score} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={app.status} />
              </td>
              <td className="px-4 py-3 text-center text-base">
                {app.hasPdf ? '✅' : '❌'}
              </td>
              <td className="px-4 py-3 text-slate-400 text-xs max-w-[280px]">
                <span title={app.notes}>{truncate(app.notes, 65)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
