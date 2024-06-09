import React from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import Link from 'next/link'

const Sidebar = () => {
    return (
        <>
            <Command className='max-h-full bg--transparent'>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandItem className='text-white py-4 text-md px-8'>
                        <Link href='/dashboard'>Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/manage-users">Manage Users</Link>
                    </CommandItem>
                    <CommandItem>
                        <Link href="/payment-gateways" >Payment Gateways</Link>
                    </CommandItem>
                </CommandList>
            </Command>
        </>
    )
}

export default Sidebar
