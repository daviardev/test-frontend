import Image from 'next/image'

import Button from '@/components/Reusable/Button'
import Title from '@/components/Reusable/Title'

const image = [
  {
    src: '/images/resource_3.png',
    alt: 'Resource 3'
  }
]

export default function Main () {
  return (
    <>
      <div
        className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col text-title'
      >
        {
          image.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={880}
              height={720}
              className='xl:h-[720px] lg:w-auto xl:w-[880px] h-full w-full right-0 relative lg:absolute'
            />
          ))
        }

        <section className='z-30'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='
              lg:flex-grow
              lg:w-1/2
              lg:pr-24
              md:pr-16
              flex
              flex-col
              md:items-start
              md:text-left
              mb-16
              md:mb-0
              items-center
              text-center
              relative
            '
            >
              <Title
                title={'Units\nbusiness units\ncomplementary'}
                description='Our different business units focus on the technological evolution of your company.'
                multiline
              />
              <Button>login</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
