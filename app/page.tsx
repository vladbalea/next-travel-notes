import NoteCard from "@/components/note-card"

export default function Home() {
    return (
        <main>
            <NoteCard
                slug="test-note-page"
                title="Primul travel note"
                lastUpdated="January 13, 2023"
                totalPrice={456}
            />
        </main>
    )
}
