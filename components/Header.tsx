import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import BasicMenu from './BasicMenu';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { logout } = useAuth()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'} py-2 md:py-4 lg:py-6`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://about.netflix.com/images/logo.png" width={100} height={100} className="cursor-pointer object-contain"
            />
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">News & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
            <BasicMenu/>
        </div> 

        <div className="flex items-center space-x-4 text-sm font-light">
            <MagnifyingGlassIcon className="h-6 w-6 hidden sm:inline"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" className="h-6 w-6 rounded cursor-pointer"/>
            </Link>
        </div>
    </header>
  )
}

export default Header