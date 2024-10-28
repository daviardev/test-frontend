import Image from 'next/image'

const image = [
  {
    src: '/images/leaders/AlbertoQuiroga.png',
    description: 'Fundador de Norte Digital LATAM, Ingeniero Comercial, MBA y Magister en Conducta del Consumidor, con amplia expertiz en marketing digital.',
    name: 'Alberto Quiroga',
    position: 'Founder',
    branchOffice: 'Norte Digital Latam'
  },
  {
    src: '/images/leaders/JoseMiguel.png',
    description: 'CEO de Norte Digital LATAM y Co-founder de ND Sales Solutions. Ingeniero Comercial MBA PUC. Más de 20 años de experiencia en ventas y marketing digital.',
    name: 'José Miguel Marín',
    position: 'CEO',
    branchOffice: 'Norte Digital Latam'
  },
  {
    src: '/images/leaders/HenrySilva.png',
    description: 'Co-Fundador de Norte Digital Perú. Con +10 años de experiencia en SEO y tecnologías que ayudan a empresas, a posicionarse en el mundo digital.',
    name: 'Henry Silva',
    position: 'Founder',
    branchOffice: 'Norte Digital Perú'
  },
  {
    src: '/images/leaders/CristobalMedina.png',
    description: 'Ingeniero Comercial y Máster en Dirección Financiera, con 20 años de experiencia en gerencias de administración y finanzas de diferentes industrias.',
    name: 'Cristobal Molina',
    position: 'CFO',
    branchOffice: 'Norte Digital Latam'
  }
]

function Card ({ src, description, name, position, branchOffice }) {
  return (
    <div className='flex flex-col items-center my-0 mx-auto w-full group relative'>
      <div className='relative w-full'>
        <Image
          src={src}
          alt={name}
          width={672}
          height={600}
          className='h-auto w-auto bg-center bg-cover'
        />

        <div className='absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <h3 className='text-base font-semibold text-center' title={description}>
            {description}
          </h3>
        </div>
      </div>

      <p className='font-bold text-lg text-blue-500 mt-4 mx-0 mb-2'>{name}</p>
      <p className='font-normal text-sm text-gray-600 mb-0'>{position}</p>
      <p className='font-normal text-sm text-gray-800 mb-0'>{branchOffice}</p>
    </div>
  )
}

export default function RenderCard () {
  return (
    <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-12'>
        {image.map((image, index) => (
          <Card
            key={index}
            src={image.src}
            description={image.description}
            name={image.name}
            position={image.position}
            branchOffice={image.branchOffice}
          />
        ))}
      </div>
    </div>
  )
}
