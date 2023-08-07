import { parseISO, differenceInDays, intervalToDuration } from "date-fns"

import Date from "@/components/date"
import { Note } from "@/types/types"

import { Button } from "@/components/ui/button"

import {
    Euro,
    PlaneTakeoff,
    PlaneLanding,
    MapPin,
    Clock3,
    ArrowRight,
    ArrowLeft,
    ExternalLink,
    Calendar,
    LogIn,
    LogOut,
} from "lucide-react"

export default function NoteInfo(props: { note: Note }) {
    const { note } = props
    const nightsCount = differenceInDays(parseISO(note.accomodation.checkOutDate), parseISO(note.accomodation.checkInDate))
    const firstFlightDuration = intervalToDuration({ start: parseISO(note.flight.departDate), end: parseISO(note.flight.arriveDate) })
    const secondFlightDuration = (note.flight.returnDepartDate && note.flight.returnArriveDate) ? intervalToDuration({ start: parseISO(note.flight.returnDepartDate), end: parseISO(note.flight.returnArriveDate) }) : undefined
    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                {note.title}
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                <div>
                    <MapPin size={15} className="inline" /> {note.accomodation.location}
                </div>
                <div>
                    <Clock3 size={15} className="inline" /> {nightsCount} nights
                </div>
                <div>
                    <PlaneTakeoff size={15} className="inline" /> <Date dateISO={note.flight.departDate} />
                </div>
                <div>
                    <Euro size={15} className="inline" /> {note.flight.price + (note.accomodation.price / note.accomodation.guests)} EUR {note.accomodation.guests > 1 && "/ person"}
                </div>
            </p>
            <h3 className="mt-6 mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">Flight info</h3>
            <ul>
                <li><Euro size={15} className="inline" /> {note.flight.price} EUR</li>
                <li><ArrowRight size={15} className="inline" /> <Date dateISO={note.flight.departDate} addTime={true} /> from {note.flight.departFrom} to {note.flight.arriveTo} (fly for {firstFlightDuration.hours}h {firstFlightDuration.minutes}m)</li>
                {
                    (note.flight.returnDepartDate && note.flight.returnArriveDate) &&
                    <li><ArrowLeft size={15} className="inline" /> <Date dateISO={note.flight.returnDepartDate} addTime={true} /> from {note.flight.arriveTo} to {note.flight.departFrom} (fly for {secondFlightDuration ? secondFlightDuration.hours : "NaN"}h {secondFlightDuration ? secondFlightDuration.minutes : "NaN"}m)</li>
                }
            </ul>
            {
                note.flight.url &&
                <Button variant="outline" asChild className="mt-3">
                    <a href={note.flight.url}>
                        Book flight <ExternalLink size={16} className="ml-1" />
                    </a>
                </Button>
            }
            <h3 className="mt-6 mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">Accomodation info</h3>
            <ul>
                <li><Euro size={15} className="inline" /> {note.accomodation.price} EUR {note.accomodation.guests > 1 && `(${note.accomodation.price / note.accomodation.guests} EUR / person)`}</li>
                <li><MapPin size={15} className="inline" /> {note.accomodation.location}</li>
                <li><Calendar size={15} className="inline" /> <Date dateISO={note.accomodation.checkInDate} /></li>
                <li><Clock3 size={15} className="inline" /> {nightsCount} nights</li>
            </ul>
            {
                note.accomodation.url &&
                <Button variant="outline" asChild className="mt-3">
                    <a href={note.accomodation.url}>
                        Book room <ExternalLink size={16} className="ml-1" />
                    </a>
                </Button>
            }
            <h3 className="mt-6 mb-3 scroll-m-20 text-2xl font-semibold tracking-tight">Chronology</h3>
            <ul>
                <li><PlaneTakeoff size={15} className="inline" /> Depart at <Date dateISO={note.flight.departDate} addTime={true} /> from {note.flight.departFrom}</li>
                <li><PlaneLanding size={15} className="inline" /> Arrive at <Date dateISO={note.flight.arriveDate} addTime={true} /> in {note.flight.arriveTo}</li>
                <li><LogIn size={15} className="inline" /> Check in at <Date dateISO={note.accomodation.checkInDate} addTime={true} /> in {note.accomodation.location}</li>
                <li><LogOut size={15} className="inline" /> Check out at <Date dateISO={note.accomodation.checkOutDate} addTime={true} /></li>
                {
                    (note.flight.returnDepartDate && note.flight.returnArriveDate) &&
                    <>
                        <li><PlaneTakeoff size={15} className="inline" /> Depart at <Date dateISO={note.flight.returnDepartDate} addTime={true} /> from {note.flight.arriveTo}</li>
                        <li><PlaneLanding size={15} className="inline" /> Arrive at <Date dateISO={note.flight.returnArriveDate} addTime={true} /> in {note.flight.departFrom}</li>
                    </>
                }
            </ul>
        </div>
    )
}