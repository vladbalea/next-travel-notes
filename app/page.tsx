import NotesGrid from "@/components/notes-grid"
import { Notes } from "@/lib/notes"

export default function Home() {
    return (
        <div className="md:w-max">
            <NotesGrid notes={Notes} />
        </div>
    )
}
