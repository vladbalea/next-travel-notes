import { Note } from "@/types/types"
import NoteCard from "@/components/note-card"

export default function NotesGrid(props: { notes: Note[] }) {
    return (
        <>
            {
                props.notes.length > 0
                ?
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    props.notes.map((note) => (
                        <NoteCard key={note.id} {...note} />
                    ))
                }
                </div>
                :
                <div>No notes!</div>
            }
        </>
    )
}