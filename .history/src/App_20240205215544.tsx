import Logo from "./assets/logo-nlw-expert.svg";
import { NoteCard } from "./components/NoteCard";

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
        <NoteCard />
      </div>
    </div>
  );
}
