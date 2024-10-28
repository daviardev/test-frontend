import Image from 'next/image'

import Input from '../Input'

import Modal from '@/components/Layout/Modal'

export default function Sale () {
  return (
    <Modal>
      <header className='flex items-center mb-6'>
        <Image
          src='/images/resource_7.png'
          alt='resource 7'
          width={60}
          height={60}
          className='w-10 h-14 mr-2'
        />
        <h1 className='text-title font-extrabold text-3xl'>New Sale</h1>
      </header>

      <hr className='mb-8 mx-11 border-[1.8px] border-[#ceddedff]' />

      <section>
        <h2 className='text-lg font-semibold text-title mb-4'>Document</h2>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
          <div className='sm:col-span-4'>
            <Input label='Client' placeholder='Enter client' className='w-full' />
          </div>
          <div className='sm:col-span-1 flex items-end'>
            <button className='bg-button text-white px-4 py-2 w-full sm:w-auto'>+</button>
          </div>
          <div className='sm:col-span-4'>
            <Input label='Branch Office' placeholder='Enter branch office' className='w-full' />
          </div>
          <div className='sm:col-span-3'>
            <Input label='Currency' placeholder='Enter currency' className='w-full' />
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-lg font-semibold text-title mb-4'>Details</h2>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4'>
          <div className='sm:col-span-4'>
            <Input label='Name' placeholder='Enter name' className='w-full' />
          </div>
          <div className='sm:col-span-2'>
            <Input label='Quantity' placeholder='Qty' type='number' className='w-full' />
          </div>
          <div className='sm:col-span-2'>
            <Input label='Price' placeholder='Price' type='number' className='w-full' />
          </div>
          <div className='sm:col-span-2'>
            <Input label='Subtotal' placeholder='Subtotal' type='number' className='w-full' />
          </div>
          <div className='sm:col-span-2 flex items-end'>
            <button className='bg-button text-white px-4 py-2 w-full sm:w-auto'>×</button>
          </div>
        </div>
        <button className='bg-button text-white px-4 py-2 w-full sm:w-auto'>Add</button>
      </section>

      <section className='flex justify-end items-center space-x-4 sm:space-x-0 sm:flex-col sm:items-start sm:space-y-4'>
        <div className='flex-1 text-right sm:text-left'>
          <label className='text-sm font-semibold text-description mr-2'>Total:</label>
          <input
            type='text'
            placeholder='Total'
            className='border border-gray-300 px-3 py-2 w-24 sm:w-full focus:outline-none focus:ring focus:ring-blue-300'
            readOnly
          />
        </div>
        <button className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Save</button>
      </section>

    </Modal>
  )
}
