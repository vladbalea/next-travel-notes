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
import { Close as DialogClose } from "@radix-ui/react-dialog"

import { FilePlus } from "lucide-react"

type NoteForm = {
    title: {
        value: string | undefined
        errorMsg: string | undefined
    }
    flyFrom: {
        value: string | undefined
        errorMsg: string | undefined
    }
    flyTo: {
        value: string | undefined
        errorMsg: string | undefined
    }
    departDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    arriveDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    returnDepartDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    returnArriveDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    flightPrice: {
        value: number | undefined
        errorMsg: string | undefined
    }
    flightUrl: {
        value: string | undefined
        errorMsg: string | undefined
    }
    housingLocation: {
        value: string | undefined
        errorMsg: string | undefined
    }
    housingPrice: {
        value: number | undefined
        errorMsg: string | undefined
    }
    housingGuests: {
        value: number | undefined
        errorMsg: string | undefined
    }
    housingCheckInDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    housingCheckOutDate: {
        value: Date | undefined
        errorMsg: string | undefined
    }
    housingUrl: {
        value: string | undefined
        errorMsg: string | undefined
    }
}

export default function NoteCreate({ className = undefined }: { className?: string | undefined }) {
    const [inputs, setInputs] = useState<NoteForm>({
        title: {
            value: undefined,
            errorMsg: undefined,
        },
        flyFrom: {
            value: undefined,
            errorMsg: undefined,
        },
        flyTo: {
            value: undefined,
            errorMsg: undefined,
        },
        departDate: {
            value: undefined,
            errorMsg: undefined,
        },
        arriveDate: {
            value: undefined,
            errorMsg: undefined,
        },
        returnDepartDate: {
            value: undefined,
            errorMsg: undefined,
        },
        returnArriveDate: {
            value: undefined,
            errorMsg: undefined,
        },
        flightPrice: {
            value: undefined,
            errorMsg: undefined,
        },
        flightUrl: {
            value: undefined,
            errorMsg: undefined,
        },
        housingLocation: {
            value: undefined,
            errorMsg: undefined,
        },
        housingPrice: {
            value: undefined,
            errorMsg: undefined,
        },
        housingGuests: {
            value: undefined,
            errorMsg: undefined,
        },
        housingCheckInDate: {
            value: undefined,
            errorMsg: undefined,
        },
        housingCheckOutDate: {
            value: undefined,
            errorMsg: undefined,
        },
        housingUrl: {
            value: undefined,
            errorMsg: undefined,
        },
    })
    function isThereAnyFieldError() {
        for (const property in inputs) {
            if (inputs.hasOwnProperty(property)) {
                if (inputs[property as keyof NoteForm].errorMsg !== undefined) {
                    return true
                }
            }
        }
        return false
    }
    function handleTitleChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            title: {
                value: (event.target as HTMLInputElement).value,
                errorMsg: undefined
            }
        }))
    }
    function handleFlyFromSelect(currentValue: string) {
        setInputs(values => ({
            ...values,
            flyFrom: {
                value: currentValue === inputs.flyFrom.value ? undefined : currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleFlyToSelect(currentValue: string) {
        setInputs(values => ({
            ...values,
            flyTo: {
                value: currentValue === inputs.flyTo.value ? undefined : currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleDepartDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            departDate: {
                value: currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleArriveDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            arriveDate: {
                value: currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleReturnDepartDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            returnDepartDate: {
                value: currentValue,
                errorMsg: undefined
            },
            returnArriveDate: {
                ...values.returnArriveDate,
                errorMsg: undefined
            }
        }))
    }
    function handleReturnArriveDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            returnArriveDate: {
                value: currentValue,
                errorMsg: undefined
            },
            returnDepartDate: {
                ...values.returnDepartDate,
                errorMsg: undefined
            }
        }))
    }
    function handleFlightPriceChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            flightPrice: {
                value: parseInt((event.target as HTMLInputElement).value),
                errorMsg: undefined
            }
        }))
    }
    function handleFlightUrlChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            flightUrl: {
                value: (event.target as HTMLInputElement).value,
                errorMsg: undefined
            }
        }))
    }
    function handleHousingLocationSelect(currentValue: string) {
        setInputs(values => ({
            ...values,
            housingLocation: {
                value: currentValue === inputs.housingLocation.value ? undefined : currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleHousingPriceChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            housingPrice: {
                value: parseInt((event.target as HTMLInputElement).value),
                errorMsg: undefined
            }
        }))
    }
    function handleHousingGuestsChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            housingGuests: {
                value: parseInt((event.target as HTMLInputElement).value),
                errorMsg: undefined
            }
        }))
    }
    function handleHousingCheckInDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            housingCheckInDate: {
                value: currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleHousingCheckOutDateSelect(currentValue: Date | undefined) {
        setInputs(values => ({
            ...values,
            housingCheckOutDate: {
                value: currentValue,
                errorMsg: undefined
            }
        }))
    }
    function handleHousingUrlChange(event: React.FormEvent<HTMLInputElement>) {
        setInputs(values => ({
            ...values,
            housingUrl: {
                value: (event.target as HTMLInputElement).value,
                errorMsg: undefined
            }
        }))
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let incompleteFields = false

        if (!inputs.title.value) {
            setInputs(values => ({...values, title: {...values.title, errorMsg: ""}}))
            incompleteFields = true
        } else if (inputs.title.value.length > 48) {
            setInputs(values => ({...values, title: {...values.title, errorMsg: "The title must be below 48 characters"}}))
            incompleteFields = true
        }
        if (!inputs.flyFrom.value) {
            setInputs(values => ({...values, flyFrom: {...values.flyFrom, errorMsg: ""}}))
            incompleteFields = true
        }
        if (!inputs.flyTo.value) {
            setInputs(values => ({...values, flyTo: {...values.flyTo, errorMsg: ""}}))
            incompleteFields = true
        }
        if (!inputs.departDate.value) {
            setInputs(values => ({...values, departDate: {...values.departDate, errorMsg: ""}}))
            incompleteFields = true
        }
        if (!inputs.arriveDate.value) {
            setInputs(values => ({...values, arriveDate: {...values.arriveDate, errorMsg: ""}}))
            incompleteFields = true
        }
        if (inputs.returnDepartDate.value && !inputs.returnArriveDate.value) {
            setInputs(values => ({...values, returnArriveDate: {...values.returnArriveDate, errorMsg: ""}}))
            incompleteFields = true
        } else if (!inputs.returnDepartDate.value && inputs.returnArriveDate.value) {
            setInputs(values => ({...values, returnDepartDate: {...values.returnDepartDate, errorMsg: ""}}))
            incompleteFields = true
        }
        if (inputs.flightPrice.value === undefined) {
            setInputs(values => ({...values, flightPrice: {...values.flightPrice, errorMsg: ""}}))
            incompleteFields = true
        } else if (inputs.flightPrice.value < 0) {
            setInputs(values => ({...values, flightPrice: {...values.flightPrice, errorMsg: "The flight price must be greater than 0"}}))
            incompleteFields = true
        }
        if (!inputs.housingLocation.value) {
            setInputs(values => ({...values, housingLocation: {...values.housingLocation, errorMsg: ""}}))
            incompleteFields = true
        }
        if (inputs.housingPrice.value === undefined) {
            setInputs(values => ({...values, housingPrice: {...values.housingPrice, errorMsg: ""}}))
            incompleteFields = true
        } else if (inputs.housingPrice.value < 0) {
            setInputs(values => ({...values, housingPrice: {...values.housingPrice, errorMsg: "The housing price must be greater than 0"}}))
            incompleteFields = true
        }
        if (inputs.housingGuests.value === undefined) {
            setInputs(values => ({...values, housingGuests: {...values.housingGuests, errorMsg: ""}}))
            incompleteFields = true
        } else if (inputs.housingGuests.value < 0) {
            setInputs(values => ({...values, housingGuests: {...values.housingGuests, errorMsg: "The housing guests number must be greater than 0"}}))
            incompleteFields = true
        }
        if (!inputs.housingCheckInDate.value) {
            setInputs(values => ({...values, housingCheckInDate: {...values.housingCheckInDate, errorMsg: ""}}))
            incompleteFields = true
        }
        if (!inputs.housingCheckOutDate.value) {
            setInputs(values => ({...values, housingCheckOutDate: {...values.housingCheckOutDate, errorMsg: ""}}))
            incompleteFields = true
        }
        if (incompleteFields) {
            return
        }
        alert(`
        Title: ${inputs.title.value}
        Fly from: ${inputs.flyFrom.value}
        Fly to: ${inputs.flyTo.value}
        Depart date: ${inputs.departDate.value?.toUTCString()}
        Arrive date: ${inputs.arriveDate.value?.toUTCString()}
        Return depart date: ${inputs.returnDepartDate.value?.toUTCString()}
        Return arrive date: ${inputs.returnArriveDate.value?.toUTCString()}
        Flight price: ${inputs.flightPrice.value} EUR
        Flight URL: ${inputs.flightUrl.value}
        Housing location: ${inputs.housingLocation.value}
        Housing price: ${inputs.housingPrice.value}
        Housing guests number: ${inputs.housingGuests.value}
        Housing check in date: ${inputs.housingCheckInDate.value?.toUTCString()}
        Housing check out date: ${inputs.housingCheckOutDate.value?.toUTCString()}
        Housing URL: ${inputs.housingUrl.value}
        `)
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
                    <DialogContent className="w-[90%] overflow-y-scroll max-h-[85vh] rounded-lg">
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
                                    value={inputs.title.value && inputs.title.value}
                                    onChange={handleTitleChange}
                                    className={inputs.title.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.title.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.title.errorMsg}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flyFrom" className="text-right w-32">Fly from</Label>
                                <PopoverCountryCommandInput
                                    id="flyFrom"
                                    placeholder="France"
                                    flyLocation={inputs.flyFrom.value}
                                    onSelect={handleFlyFromSelect}
                                    errorMsg={inputs.flyFrom.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flyTo" className="text-right w-32">Fly to</Label>
                                <PopoverCountryCommandInput
                                    id="flyTo"
                                    placeholder="Egypt"
                                    flyLocation={inputs.flyTo.value}
                                    onSelect={handleFlyToSelect}
                                    errorMsg={inputs.flyTo.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="departDate" className="text-right w-32">Depart date</Label>
                                <PopoverCalendarInput
                                    id="departDate"
                                    date={inputs.departDate.value}
                                    onSelect={handleDepartDateSelect}
                                    errorMsg={inputs.departDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="arriveDate" className="text-right w-32">Arrive date</Label>
                                <PopoverCalendarInput
                                    id="arriveDate"
                                    date={inputs.arriveDate.value}
                                    onSelect={handleArriveDateSelect}
                                    errorMsg={inputs.arriveDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="returnDepartDate" className="text-right w-32">Return depart date</Label>
                                <PopoverCalendarInput
                                    id="returnDepartDate"
                                    date={inputs.returnDepartDate.value}
                                    onSelect={handleReturnDepartDateSelect}
                                    errorMsg={inputs.returnDepartDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="returnArriveDate" className="text-right w-32">Return arrive date</Label>
                                <PopoverCalendarInput
                                    id="returnArriveDate"
                                    date={inputs.returnArriveDate.value}
                                    onSelect={handleReturnArriveDateSelect}
                                    errorMsg={inputs.returnArriveDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flightPrice" className="text-right w-32">Flight price</Label>
                                <Input
                                    type="number"
                                    id="flightPrice"
                                    placeholder="90"
                                    value={inputs.flightPrice.value}
                                    onChange={handleFlightPriceChange}
                                    className={inputs.flightPrice.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.flightPrice.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.flightPrice.errorMsg}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="flightUrl" className="text-right w-32">Flight link</Label>
                                <Input
                                    id="flightUrl"
                                    placeholder="URL to the flight site"
                                    value={inputs.flightUrl.value}
                                    onChange={handleFlightUrlChange}
                                    className={inputs.flightUrl.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.flightUrl.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.flightUrl.errorMsg}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingLocation" className="text-right w-32">Housing location</Label>
                                <PopoverCountryCommandInput
                                    id="housingLocation"
                                    placeholder="Egypt"
                                    flyLocation={inputs.housingLocation.value}
                                    onSelect={handleHousingLocationSelect}
                                    errorMsg={inputs.housingLocation.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingPrice" className="text-right w-32">Housing price</Label>
                                <Input
                                    type="number"
                                    id="housingPrice"
                                    placeholder="150"
                                    value={inputs.housingPrice.value}
                                    onChange={handleHousingPriceChange}
                                    className={inputs.housingPrice.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.housingPrice.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.housingPrice.errorMsg}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingGuests" className="text-right w-32">Guests number</Label>
                                <Input
                                    type="number"
                                    id="housingGuests"
                                    placeholder="2"
                                    value={inputs.housingGuests.value}
                                    onChange={handleHousingGuestsChange}
                                    className={inputs.housingGuests.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.housingGuests.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.housingGuests.errorMsg}</div>}
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingCheckInDate" className="text-right w-32">Housing check in date</Label>
                                <PopoverCalendarInput
                                    id="housingCheckInDate"
                                    date={inputs.housingCheckInDate.value}
                                    onSelect={handleHousingCheckInDateSelect}
                                    errorMsg={inputs.housingCheckInDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingCheckOutDate" className="text-right w-32">Housing check out date</Label>
                                <PopoverCalendarInput
                                    id="housingCheckOutDate"
                                    date={inputs.housingCheckOutDate.value}
                                    onSelect={handleHousingCheckOutDateSelect}
                                    errorMsg={inputs.housingCheckOutDate.errorMsg}
                                />
                            </div>
                            <div className="mt-1">
                                <Label htmlFor="housingUrl" className="text-right w-32">Housing link</Label>
                                <Input
                                    id="housingUrl"
                                    placeholder="URL to the housing site"
                                    value={inputs.housingUrl.value}
                                    onChange={handleHousingUrlChange}
                                    className={inputs.housingUrl.errorMsg != undefined ? "border-red-500" : ""}
                                />
                                {inputs.housingUrl.errorMsg && <div className="text-red-500 text-sm mt-1">{inputs.housingUrl.errorMsg}</div>}
                            </div>
                            {isThereAnyFieldError() && <div className="text-red-500 text-sm mt-3 -mb-3">Complete all the fields above</div>}
                            <DialogFooter className="mt-5 gap-2 sm:gap-0">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">Cancel</Button>
                                </DialogClose>
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
    const [open, setOpen] = useState(false)

    function handleSelect(currentValue: Date | undefined) {
        onSelect(currentValue)
        setOpen(false)
    }
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    value={date ? date.toUTCString() : "Pick a date"}
                    className={cn("text-left", errorMsg !== undefined && "border-red-500", !date && "text-slate-500")}
                />
            </PopoverTrigger>
            {errorMsg && <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
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
        <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger asChild>
                <Input
                    id={id}
                    placeholder={placeholder}
                    value={flyLocation ? country?.name : "Select a country"}
                    className={cn("text-left", errorMsg != undefined && "border-red-500", !flyLocation && "text-slate-500")}
                />
            </PopoverTrigger>
            {errorMsg && <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className="overflow-y-scroll h-80">
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