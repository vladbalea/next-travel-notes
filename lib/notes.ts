import { Note } from "@/types/types"

export const Notes: Note[] = [
    {
        id: 1,
        slug: "pula",
        title: "Pula",
        lastUpdated: "2023-07-07T11:00:41.517Z",
        flight: {
            url: undefined,
            price: 40,
            departFrom: "Romania",
            departDate: "2023-08-14T13:00:00.0Z",
            arriveTo: "England",
            arriveDate: "2023-08-14T15:00:00.0Z",
            returnDepartDate: "2023-08-16T18:00:00.0Z",
            returnArriveDate: "2023-08-16T21:00:00.0Z",
        },
        accomodation: {
            url: undefined,
            location: "London",
            price: 150,
            guests: 1,
            checkInDate: "2023-08-14T16:00:00.0Z",
            checkOutDate: "2023-08-16T17:00:00.0Z",
        }
    },
    {
        id: 2,
        slug: "jecmaneala-dot-com",
        title: "Jecmaneala dot com",
        lastUpdated: "2023-07-07T11:41:41.517Z",
        flight: {
            url: undefined,
            price: 40,
            departFrom: "Romania",
            departDate: "2023-08-14T13:00:00.0Z",
            arriveTo: "England",
            arriveDate: "2023-08-14T15:00:00.0Z",
            returnDepartDate: "2023-08-16T18:00:00.0Z",
            returnArriveDate: "2023-08-16T21:00:00.0Z",
        },
        accomodation: {
            url: undefined,
            location: "London",
            price: 150,
            guests: 2,
            checkInDate: "2023-08-14T16:00:00.0Z",
            checkOutDate: "2023-08-16T17:00:00.0Z",
        }
    },
    {
        id: 3,
        slug: "jecmaneala-dot-com",
        title: "Jecmaneala dot com",
        lastUpdated: "2023-07-07T11:41:41.517Z",
        flight: {
            url: undefined,
            price: 40,
            departFrom: "Romania",
            departDate: "2023-08-14T13:00:00.0Z",
            arriveTo: "England",
            arriveDate: "2023-08-14T15:00:00.0Z",
            returnDepartDate: "2023-08-16T18:00:00.0Z",
            returnArriveDate: "2023-08-16T21:00:00.0Z",
        },
        accomodation: {
            url: undefined,
            location: "London",
            price: 150,
            guests: 2,
            checkInDate: "2023-08-14T16:00:00.0Z",
            checkOutDate: "2023-08-16T17:00:00.0Z",
        }
    },
    {
        id: 4,
        slug: "jecmaneala-dot-com",
        title: "Jecmaneala dot com",
        lastUpdated: "2023-07-07T11:41:41.517Z",
        flight: {
            url: undefined,
            price: 40,
            departFrom: "Romania",
            departDate: "2023-08-14T13:00:00.0Z",
            arriveTo: "England",
            arriveDate: "2023-08-14T15:00:00.0Z",
            returnDepartDate: "2023-08-16T18:00:00.0Z",
            returnArriveDate: "2023-08-16T21:00:00.0Z",
        },
        accomodation: {
            url: undefined,
            location: "London",
            price: 150,
            guests: 2,
            checkInDate: "2023-08-14T16:00:00.0Z",
            checkOutDate: "2023-08-16T17:00:00.0Z",
        }
    },
    {
        id: 5,
        slug: "jecmaneala-dot-com",
        title: "Jecmaneala dot com",
        lastUpdated: "2023-07-07T11:41:41.517Z",
        flight: {
            url: undefined,
            price: 40,
            departFrom: "Romania",
            departDate: "2023-08-14T13:00:00.0Z",
            arriveTo: "England",
            arriveDate: "2023-08-14T15:00:00.0Z",
            returnDepartDate: "2023-08-16T18:00:00.0Z",
            returnArriveDate: "2023-08-16T21:00:00.0Z",
        },
        accomodation: {
            url: undefined,
            location: "London",
            price: 150,
            guests: 2,
            checkInDate: "2023-08-14T16:00:00.0Z",
            checkOutDate: "2023-08-16T17:00:00.0Z",
        }
    },
]

export function getNoteBySlug(slug: string): Note | undefined {
    const note = Notes.find((note) => note.slug === slug)
    if (!note) {
        return undefined
    }
    return note
}