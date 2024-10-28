import Image from 'next/image'

import Modal from '@/components/Layout/Modal'
import Input from '../Input'

export default function Product () {
  return (
    <Modal>
      <header className='flex items-center mb-6'>
        <Image
          src='/images/product.png'
          alt='resource product'
          width={60}
          height={60}
          className='w-12 h-14 mr-2'
        />
        <h1 className='text-title font-extrabold text-3xl'>New Product</h1>
      </header>

      <hr className='mb-8 mx-11 border-[1.8px] border-[#ceddedff]' />

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
          <div className='sm:col-span-6'>
            <Input label='Name' type='text' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Price' type='number' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Quantity' className='w-full' />
          </div>
          <div className='sm:col-span-6'>
            <Input label='Branch office' className='w-full' />
          </div>
        </div>
      </section>

      <section className='flex justify-between items-center space-x-4 mt-6'>
        <button className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Products</button>
        <button className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Save</button>
      </section>
    </Modal>
  )
}
