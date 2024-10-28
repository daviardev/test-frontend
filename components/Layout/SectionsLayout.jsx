export default function SectionsLayout ({ children, id = '' }) {
  return (
    <div
      id={id}
      className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col text-title'
    >
      <section className='container mx-auto flex px-8 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow w-full lg:w-1/2 lg:pr-32 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center relative'>
          {children}
        </div>
      </section>
    </div>
  )
}
