export type Note = {
    id: number
    slug: string
    title: string
    lastUpdated: string
    flight: FlightInfo
    accomodation: AccomodationInfo
}

type FlightInfo = {
    url: string | undefined
    price: number
    departFrom: string
    departDate: string
    arriveTo: string
    arriveDate: string
    returnDepartDate: string | undefined
    returnArriveDate: string | undefined
}

type AccomodationInfo = {
    url: string | undefined
    location: string
    price: number
    guests: number
    checkInDate: string
    checkOutDate: string
}