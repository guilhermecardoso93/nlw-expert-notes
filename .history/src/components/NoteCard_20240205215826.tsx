export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-6 overflow-hidden relative hover:ring-2">
      <span className="text-sm font-medium text-slate-300">A três dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em audio ue será convertida para texto automaticamente.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
}
