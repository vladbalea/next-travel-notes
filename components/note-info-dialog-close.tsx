"use client"

import { Close as DialogClose } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"

export default function NoteInfoDialogClose() {
    return (
        <DialogClose asChild>
            <Button className="mt-1 w-32 mr-0 ml-auto sm:hidden">Close</Button>
        </DialogClose>
    )
}