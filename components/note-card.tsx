import { parseISO, differenceInDays } from "date-fns"

import { Note } from "@/types/types"
import Date from "./date"
import NoteInfo from "./note-info"
import NoteInfoDialogClose from "./note-info-dialog-close"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Euro,
    PlaneTakeoff,
    MapPin,
    Clock3,
} from "lucide-react"

export default function NoteCard(props: Note) {
    const nightsCount = differenceInDays(parseISO(props.accomodation.checkOutDate), parseISO(props.accomodation.checkInDate))
    return (
        <Card className="w-full h-max md:w-[350px]">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>Last updated on <Date dateISO={props.lastUpdated} /></CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
                <div><MapPin size={15} className="inline" /> {props.accomodation.location}</div>
                <div><Clock3 size={15} className="inline" /> {nightsCount} nights</div>
                <div><PlaneTakeoff size={15} className="inline" /> <Date dateISO={props.flight.departDate} /></div>
                <div><Euro size={15} className="inline" /> {props.flight.price + (props.accomodation.price / props.accomodation.guests)} EUR {props.accomodation.guests > 1 && "/ person"}</div>
            </CardContent>
            <CardFooter className="gap-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full">View</Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%] overflow-y-scroll max-h-[85vh] rounded-lg sm:overflow-auto">
                        <NoteInfo note={props} />
                        <NoteInfoDialogClose />
                    </DialogContent>
                </Dialog>
                <AlertDialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary">More</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-10">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                            </AlertDialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent className="w-[90%]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>This action cannot be undone. This will permanently delete your travel note.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button variant="destructive" asChild>
                                <AlertDialogAction>Delete</AlertDialogAction>
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
    )
}