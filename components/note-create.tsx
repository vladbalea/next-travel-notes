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
    const [errorMsg, setErrorMsg] = useState<{
        title: string | undefined
        flyFrom: string | undefined
        flyTo: string | undefined
        departDate: string | undefined
        arriveDate: string | undefined
        flightPrice: string | undefined
    }>({
        title: undefined,
        flyFrom: undefined,
        flyTo: undefined,
        departDate: undefined,
        arriveDate: undefined,
        flightPrice: undefined,
    })
    const [title, setTitle] = useState<string | undefined>(undefined)
    const [flyFrom, setFlyFrom] = useState<string | undefined>(undefined)
    const [flyTo, setFlyTo] = useState<string | undefined>(undefined)
    const [departDate, setDepartDate] = useState<Date | undefined>(undefined)
    const [arriveDate, setArriveDate] = useState<Date | undefined>(undefined)
    const [flightPrice, setFlightPrice] = useState<number | undefined>(undefined)

    function handleTitleChange(event: React.FormEvent<HTMLInputElement>) {
        setTitle((event.target as HTMLInputElement).value)
        setErrorMsg(prevState => ({ ...prevState, title: undefined }))
    }
    function handleFlyFromSelect(currentValue: string) {
        setFlyFrom(currentValue === flyFrom ? undefined : currentValue)
        setErrorMsg(prevState => ({ ...prevState, flyFrom: undefined }))
    }
    function handleFlyToSelect(currentValue: string) {
        setFlyTo(currentValue === flyTo ? undefined : currentValue)
        setErrorMsg(prevState => ({ ...prevState, flyTo: undefined }))
    }
    function handleDepartDateSelect(currentValue: React.SetStateAction<Date | undefined>) {
        setDepartDate(currentValue)
        setErrorMsg(prevState => ({ ...prevState, departDate: undefined }))
    }
    function handleArriveDateSelect(currentValue: React.SetStateAction<Date | undefined>) {
        setArriveDate(currentValue)
        setErrorMsg(prevState => ({ ...prevState, arriveDate: undefined }))
    }
    function handleFlightPriceChange(event: React.FormEvent<HTMLInputElement>) {
        setFlightPrice(parseInt((event.target as HTMLInputElement).value))
        setErrorMsg(prevState => ({ ...prevState, flightPrice: undefined }))
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        let incompleteFields = false

        if (!title) {
            setErrorMsg(prevState => ({ ...prevState, title: "" }))
            incompleteFields = true
        } else if (title.length > 48) {
            setErrorMsg(prevState => ({ ...prevState, title: "The title must be below 48 characters" }))
            incompleteFields = true
        }
        if (!flyFrom) {
            setErrorMsg(prevState => ({ ...prevState, flyFrom: "" }))
            incompleteFields = true
        }
        if (!flyTo) {
            setErrorMsg(prevState => ({ ...prevState, flyTo: "" }))
            incompleteFields = true
        }
        if (!departDate) {
            setErrorMsg(prevState => ({ ...prevState, departDate: "" }))
            incompleteFields = true
        }
        if (!arriveDate) {
            setErrorMsg(prevState => ({ ...prevState, arriveDate: "" }))
            incompleteFields = true
        }
        if (flightPrice === undefined) {
            setErrorMsg(prevState => ({ ...prevState, flightPrice: "" }))
            incompleteFields = true
        } else if (flightPrice < 0) {
            setErrorMsg(prevState => ({ ...prevState, flightPrice: "The flight price must be greater than 0" }))
            incompleteFields = true
        }
        if (incompleteFields) {
            return
        }
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
                            <div>
                                <Label htmlFor="title" className="text-right w-32">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="My new trip"
                                    value={title && title}
                                    onChange={handleTitleChange}
                                    className={errorMsg.title != undefined ? "border-red-500" : ""}
                                />
                                {errorMsg.title && <div className="text-red-500 text-sm mt-1">{errorMsg.title}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flyFrom" className="text-right w-32">Fly from</Label>
                                <PopoverCountryCommandInput
                                    id="flyFrom"
                                    placeholder="France"
                                    flyLocation={flyFrom}
                                    onSelect={handleFlyFromSelect}
                                    errorMsg={errorMsg.flyFrom}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flyTo" className="text-right w-32">Fly to</Label>
                                <PopoverCountryCommandInput
                                    id="flyTo"
                                    placeholder="Egypt"
                                    flyLocation={flyTo}
                                    onSelect={handleFlyToSelect}
                                    errorMsg={errorMsg.flyTo}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="departDate" className="text-right w-32">Depart date</Label>
                                <PopoverCalendarInput
                                    id="departDate"
                                    date={departDate}
                                    onSelect={handleDepartDateSelect}
                                    errorMsg={errorMsg.departDate}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="arriveDate" className="text-right w-32">Arrive date</Label>
                                <PopoverCalendarInput
                                    id="arriveDate"
                                    date={arriveDate}
                                    onSelect={handleArriveDateSelect}
                                    errorMsg={errorMsg.arriveDate}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flightPrice" className="text-right w-32">Flight price</Label>
                                <Input
                                    type="number"
                                    id="flightPrice"
                                    placeholder="90"
                                    value={flightPrice}
                                    onChange={handleFlightPriceChange}
                                    className={errorMsg.flightPrice != undefined ? "border-red-500" : ""}
                                />
                                {errorMsg.flightPrice && <div className="text-red-500 text-sm mt-1">{errorMsg.flightPrice}</div>}
                            </div>
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
        errorMsg,
    }: {
        id: string
        date: Date | undefined
        onSelect: any
        errorMsg: string | undefined
    }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    value={date ? date.toUTCString() : "Pick a date"}
                    className={cn("text-left", errorMsg != undefined && "border-red-500")}
                />
            </PopoverTrigger>
            {errorMsg && <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
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
        errorMsg,
    }: {
        id: string
        placeholder: string
        flyLocation: string | undefined
        onSelect: any
        errorMsg: string | undefined
    }) {
    const [open, setOpen] = useState(false)
    const country = Countries.find((country) => country.name.toLowerCase() === flyLocation)

    function handleSelect(currentValue: string) {
        onSelect(currentValue)
        setOpen(false)
    }
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    placeholder={placeholder}
                    value={flyLocation ? country?.name : "Select a country"}
                    className={cn("text-left", errorMsg != undefined && "border-red-500")}
                />
            </PopoverTrigger>
            {errorMsg && <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                    {
                        Countries.map((country) => (
                            <CommandItem key={country.code} onSelect={handleSelect}>{country.name}</CommandItem>
                        ))
                    }
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}