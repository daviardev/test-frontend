import Link from 'next/link'

export default function Button ({ children }) {
  return (
    <Link
      href='/signin'
      className='
        uppercase
        py-2.5
        w-28
        text-base
        text-white
        bg-button
        font-extrabold
        text-center
        hover:bg-hoverBlue
        transition-colors
        ease-in
        duration-100
      '
    >
      {children}
    </Link>
  )
}
