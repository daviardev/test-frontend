import Image from 'next/image'

import TextInfo from '@/components/Cards/TextInfo'
import Title from '@/components/Reusable/Title'

const image = [
  {
    src: '/images/resource_6.png',
    alt: 'Resource 6'
  }
]

export default function Third ({ description = 'We develop and implement digital strategies with analytical background.' }) {
  return (
    <section id='content_2' className='relative overflow-hidden h-full flex flex-col px-12 py-10 mx-auto'>
      {
          image.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={880}
              height={960}
              className='w-full h-full absolute left-0 right-0'
            />
          ))
        }
      <Title
        title='Our technology'
        multiline
        right
      />
      <p className='
        w-full
        max-w-sm
        self-end
        sm:text-right
        leading-relaxed
        mb-12
        relative
        text-description
        text-center
        max-sm:self-center
      '
      >
        {description}
      </p>

      <TextInfo />
    </section>
  )
}
