interface Props {
  status: string;
}

export function StatusBadge({ status }: Props) {
  const s = status.toLowerCase();
  let colours = 'bg-slate-700 text-slate-300';

  if (s === 'applied') colours = 'bg-emerald-900/60 text-emerald-300 ring-1 ring-emerald-700';
  else if (s === 'evaluated') colours = 'bg-amber-900/60 text-amber-300 ring-1 ring-amber-700';
  else if (s === 'interview') colours = 'bg-blue-900/60 text-blue-300 ring-1 ring-blue-700';
  else if (s === 'offer') colours = 'bg-purple-900/60 text-purple-300 ring-1 ring-purple-700';
  else if (s === 'rejected') colours = 'bg-red-900/60 text-red-400 ring-1 ring-red-800';
  else if (s === 'skip' || s === 'discarded') colours = 'bg-slate-800 text-slate-500 ring-1 ring-slate-700';
  else if (s === 'responded') colours = 'bg-cyan-900/60 text-cyan-300 ring-1 ring-cyan-700';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colours}`}>
      {status}
    </span>
  );
}
