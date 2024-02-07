import { useState } from "react";
import Logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNoteCreate(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    };

    setNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={Logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreate={onNoteCreate} />
        {notes.map((note) => {
          return <NoteCard note={note} key={note.id} />;
        })}
      </div>
    </div>
  );
}
