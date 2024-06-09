import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-slate-800 py-4 px-3">
        <img className='w-48' src="https://viserlab.com/assets/images/logoIcon/logo.png" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>VI</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href='/profile-setting'>Profile Setting</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/change-password'>Change Password</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/logout'>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default Header
