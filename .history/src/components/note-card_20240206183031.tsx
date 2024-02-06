import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note: { date, content } }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-300">
          {date.toISOString()}
        </span>

        <p className="text-sm leading-6 text-slate-400">{content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 ng-black/50 fixed" />
          <Dialog.Content className="z-10 fixed left-1/2 top-1/2 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2">
            OII
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
