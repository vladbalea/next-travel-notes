export default function NotePage({ params }: { params: { slug: string } }) {
    return (
        <div>Note page {params.slug}</div>
    )
}