"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Countries } from "@/lib/countries"

import {
    Card,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"

import { FilePlus } from "lucide-react"

export default function NoteCreate({ className = undefined }: { className?: string | undefined }) {
    const [title, setTitle] = useState<string | undefined>(undefined)
    const [flyFrom, setFlyFrom] = useState<string | undefined>(undefined)
    const [flyTo, setFlyTo] = useState<string | undefined>(undefined)
    const [departDate, setDepartDate] = useState<Date | undefined>(undefined)
    const [arriveDate, setArriveDate] = useState<Date | undefined>(undefined)
    const [flightPrice, setFlightPrice] = useState<number | undefined>(undefined)

    function handleTitleChange(event: React.FormEvent<HTMLInputElement>) {
        setTitle((event.target as HTMLInputElement).value)
    }
    function handleFlyFromSelect(currentValue: string) {
        setFlyFrom(currentValue === flyFrom ? undefined : currentValue)
    }
    function handleFlyToSelect(currentValue: string) {
        setFlyTo(currentValue === flyTo ? undefined : currentValue)
    }
    function handleFlightPriceChange(event: React.FormEvent<HTMLInputElement>) {
        setFlightPrice(parseInt((event.target as HTMLInputElement).value))
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        alert(`Title: ${title}\nFly from: ${flyFrom}\nFly to: ${flyTo}\nDepart date: ${departDate?.toUTCString()}\nArrive date: ${arriveDate?.toUTCString()}\nFlight price: ${flightPrice} EUR`)
    }
    return (
        <Card className={cn("w-full h-max md:w-[350px] bg-black text-white", className && className)}>
            <CardHeader>
                <CardTitle>Create note <FilePlus className="inline"/></CardTitle>
                <CardDescription>Create a new travel note to make your plan easier</CardDescription>
            </CardHeader>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary" className="w-full">Create new note</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a new note</DialogTitle>
                            <DialogDescription>Create a new travel note to make your plan easier</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <Label htmlFor="title" className="text-right w-32">Title</Label>
                            <Input
                                id="title"
                                placeholder="My new trip"
                                value={title && title}
                                onChange={handleTitleChange}
                                required
                            />
                            <Label htmlFor="flyFrom" className="text-right w-32">Fly from</Label>
                            <PopoverCountryCommandInput
                                id="flyFrom"
                                placeholder="France"
                                flyLocation={flyFrom}
                                onSelect={handleFlyFromSelect}
                            />
                            <Label htmlFor="flyTo" className="text-right w-32">Fly to</Label>
                            <PopoverCountryCommandInput
                                id="flyTo"
                                placeholder="Egypt"
                                flyLocation={flyTo}
                                onSelect={handleFlyToSelect}
                            />
                            <Label htmlFor="departDate" className="text-right w-32">Depart date</Label>
                            <PopoverCalendarInput
                                id="departDate"
                                date={departDate}
                                onSelect={setDepartDate}
                            />
                            <Label htmlFor="arriveDate" className="text-right w-32">Arrive date</Label>
                            <PopoverCalendarInput
                                id="arriveDate"
                                date={arriveDate}
                                onSelect={setArriveDate}
                            />
                            <Label htmlFor="flightPrice" className="text-right w-32">Flight price</Label>
                            <Input
                                type="number"
                                id="flightPrice"
                                placeholder="90"
                                value={flightPrice}
                                onChange={handleFlightPriceChange}
                                min="0"
                                required
                            />
                            <DialogFooter className="mt-5">
                                <Button type="button" variant="outline">Cancel</Button>
                                <Button type="submit">Create</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}

function PopoverCalendarInput({
        id,
        date,
        onSelect,
    }: {
        id: string
        date: Date | undefined
        onSelect: any
    }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    value={date ? date.toUTCString() : "Pick a date"}
                    className="text-left"
                />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelect}
                    className="rounded-md border"
                />
            </PopoverContent>
        </Popover>
    )
}

function PopoverCountryCommandInput({
        id,
        placeholder,
        flyLocation,
        onSelect,
    }: {
        id: string
        placeholder: string
        flyLocation: string | undefined
        onSelect: any
    }) {
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    placeholder={placeholder}
                    value={flyLocation ? Countries.find((country) => country.name.toLowerCase() === flyLocation)?.name : "Select a country"}
                    required
                    className="text-left"
                />
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                    {
                        Countries.map((country) => (
                            <CommandItem key={country.code} onSelect={onSelect}>{country.name}</CommandItem>
                        ))
                    }
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}