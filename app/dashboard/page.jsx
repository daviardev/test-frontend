'use client'

import Aside from '@/components/Reusable/Aside'

import { useDashboard } from '@/context/DashboardProvider'

import Client from '@/components/Dashboard/Clients/Client'
import Sale from '@/components/Dashboard/Sales/Sale'
import Seller from '@/components/Dashboard/Sellers/Seller'
import Product from '@/components/Dashboard/Products/Product'
import Provider from '@/components/Dashboard/Providers/Provider'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard () {
  const { data: session, status } = useSession() // eslint-disable-line no-unused-vars
  const router = useRouter()

  const { activateComponent } = useDashboard()

  const renderComponents = () => {
    switch (activateComponent) {
      case 'sale':
        return <Sale />
      case 'client':
        return <Client />
      case 'products':
        return <Product />
      case 'sellers':
        return <Seller />
      case 'provider':
        return <Provider />
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div>Cargando...</div>
  }

  if (status === 'unauthenticated') {
    return null
  }

  return (
    <>
      <div className='flex h-screen flex-wrap'>
        <Aside />
        <main className='flex-1 p-8 mx-auto'>
          {renderComponents()}
        </main>
      </div>
    </>
  )
}
