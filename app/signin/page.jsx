'use client'

import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import Input from '@/components/Reusable/Input'

export default function SignIn () {
  const { data: session, status } = useSession() // eslint-disable-line no-unused-vars
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  if (status === 'loading') {
    toast.loading('loading')
  }

  if (status === 'authenticated') {
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      callbackUrl: '/dashboard',
      username,
      password
    })

    if (result?.error) {
      toast.error("Wron't credentials!")
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-auto flex w-full flex-col justify-center px-5 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6'>
        <div className='my-auto flex flex-col w-[350px] mx-auto mt-[130px] max-w-[450px]'>
          <h1 className='text-5xl font-extrabold text-title'>Sign In</h1>
          <p className='mb-2.5 mt-2.5 font-normal text-description'>
            Enter your email and password to sign in!
          </p>
          <div className='relative my-2'>
            <div className='relative flex items-center py-1'>
              <div className='grow border-t border-zinc-200' />
            </div>
          </div>
          <form onSubmit={handleSubmit} className='mb-4 text-title'>
            <div className='grid gap-2'>
              <div className='grid gap-1'>
                <label htmlFor='username'>Username</label>
                <Input
                  id='username'
                  type='text'
                  name='username'
                  value={username}
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <Input
                  id='password'
                  type='password'
                  name='password'
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className='whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-button text-primary-foreground hover:bg-hoverBlue mt-2 flex w-full items-center justify-center rounded-lg px-4 py-4 text-xs font-extrabold text-white uppercase'
                type='submit'
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
