import { parseISO, format, isValid } from "date-fns"
import { cn } from "@/lib/utils"

interface DateProps {
    dateISO: string
    className?: string | undefined
    addTime?: boolean
}

export default function Date({ dateISO, className = undefined, addTime = false }: DateProps) {
    const date = parseISO(dateISO)
    if (!isValid(date)) {
        return <>NaN</>
    }
    return (
        <time dateTime={dateISO} className={cn(className && className)}>
            {format(date, cn("LLLL d, yyyy", addTime && "HH:mm"))}
        </time> 
    )
}