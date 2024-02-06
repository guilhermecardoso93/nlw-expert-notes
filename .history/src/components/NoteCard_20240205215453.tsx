export function NoteCard() {
  return (
      <div className="rounded-md bg-slate-700 p-5 space-y-6">
        <span className="text-sm font-medium text-slate-200">
          Adicionar Nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em audio ue será convertida para texto automaticamente.
        </p>
      </div>
  );
}
