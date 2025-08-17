import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
 const [open, setOpen] = useState(false)
 const { user, logout} = useAuth();
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to={'/'}>
               <span className='text-2xl font-bold text-gray-800'>SynCode</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-6 justify-end">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
       
             {!user ? (
                <>
                <Link to={'/login'} className="cursor-pointer px-6 py-2 mt-2 bg-black hover:bg-gray-800 transition text-white font-bold rounded-full text-sm">
                    Login
                </Link>
                <Link to={'/register'} className="cursor-pointer px-6 py-2 mt-2 bg-white border border-gray-900 hover:bg-gray-800 transition text-gray-900 font-bold rounded-full text-sm">
                    Sign up
                </Link>
                </>
             ): (
                 // Simple Dropdown Example
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-4 py-2 rounded-full">
                    {user.name || 'Account'} ▼
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
             )}     
    

            </div>

            <Link onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </Link>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <Link to={'/login'} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </Link>
                <Link to={'/register'} className="cursor-pointer px-6 py-2 mt-2 border-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Sign up
                </Link>
            </div>

        </nav>
    )
}

export default Navbar