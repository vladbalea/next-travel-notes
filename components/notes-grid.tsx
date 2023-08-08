import { Note } from "@/types/types"
import NoteCard from "@/components/note-card"
import NoteCreate from "@/components/note-create"

export default function NotesGrid(props: { notes: Note[] }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <NoteCreate className="my-auto" />
            {
                props.notes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                ))
            }
        </div>
    )
}