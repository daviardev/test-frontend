'use client'

import Link from 'next/link'

import { signOut, useSession } from 'next-auth/react'

import { redirect } from 'next/navigation'

export default function Navbar () {
  const { data: session } = useSession()

  const logout = async () => {
    await signOut()
    redirect('/')
  }

  const links = [
    {
      href: '/',
      title: 'Home'
    },
    {
      href: '#content_1',
      title: 'Founders'
    },
    {
      href: '#content_2',
      title: 'Services'
    }
  ]

  return (
    <>
      <header>
        <nav className='top-0 w-full absolute z-50'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center space-x-3 rtl:space-x-reverse' />
            <div>
              <ul className='text-base flex flex-row space-x-8 rtl:space-x-reverse'>
                <li>
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className='hover:underline mx-3'
                    >
                      {link.title}
                    </Link>
                  ))}
                </li>
                <li>
                  {
                    session
                      ? (
                        <Link
                          onClick={logout}
                          href='#'
                          className='font-bold text-white bg-button py-1.5 px-2.5 rounded-md hover:bg-hoverBlue transition-colors ease-in duration-100'
                        >
                          Logout
                        </Link>
                        )
                      : (
                        <Link
                          href='/signin'
                          className='font-bold text-white bg-button py-1.5 px-2.5 rounded-md hover:bg-hoverBlue transition-colors ease-in duration-100'
                        >
                          Login
                        </Link>
                        )
}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
