import Logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt="Logotipo NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque por suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-800" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6 overflow-hidden relative">
        <div className="rounded-md bg-slate-700 p-5 space-y-6">
          <span className="text-sm font-medium text-slate-200">
            Adicionar Nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em audio ue será convertida para texto
            automaticamente.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-6 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">
            A dois dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em audio ue será convertida para texto
            automaticamente.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-6 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">
            A três dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em audio ue será convertida para texto
            automaticamente.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      </div>
    </div>
  );
}
