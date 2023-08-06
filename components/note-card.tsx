import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NoteCard(props: {
    slug: string,
    title: string,
    lastUpdated: string,
    totalPrice: number,
}) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>Last updated on {props.lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>Primul travel note cu doar {props.totalPrice} EUR</div>
            </CardContent>
            <CardFooter className="gap-1">
                <Button className="w-full" asChild>
                    <Link href={`/note/${props.slug}`}>View</Link>
                </Button>
                <Button variant="secondary">Edit</Button>
            </CardFooter>
        </Card>
    )
}