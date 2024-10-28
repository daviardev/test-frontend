import Image from 'next/image'

import Modal from '@/components/Layout/Modal'
import Input from '../Input'

export default function Seller () {
  return (
    <Modal>
      <header className='flex items-center mb-6'>
        <Image
          src='/images/seller.png'
          alt='resource seller'
          width={60}
          height={60}
          className='w-14 h-14 mr-2'
        />
        <h1 className='text-title font-extrabold text-3xl'>New Seller</h1>
      </header>

      <hr className='mb-8 mx-11 border-[1.8px] border-[#ceddedff]' />

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
          <div className='sm:col-span-6'>
            <Input label='RUT' type='text' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='First Name' type='number' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Last Name' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Address' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Phone' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Date of Birth' className='w-full' />
          </div>
          <div className='sm:col-span-12'>
            <Input label='Email' className='w-full' />
          </div>
        </div>
      </section>

      <section className='flex justify-between items-center space-x-4 mt-6'>
        <button className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Sellers</button>
        <button className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Save</button>
      </section>
    </Modal>
  )
}
