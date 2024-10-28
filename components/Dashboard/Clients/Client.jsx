import Image from 'next/image'

import Modal from '@/components/Layout/Modal'

export default function Client () {
  return (
    <Modal>
      <header className='mb-6 flex items-center'>
        <Image
          src='/images/client.png'
          alt='resource 7'
          width={60}
          height={60}
          className='w-14 h-14 mr-2'
        />
        <h1 className='text-title font-extrabold text-3xl'>
          New Client
        </h1>
      </header>
    </Modal>
  )
}
