const contentCard = [
  {
    title: 'Digital Marketing Perfomance',
    description: 'We are the strategic partner of companies, helping them to meet their business objectives.'
  },
  {
    title: 'Automation, AI & Machine Learning in every campaign',
    description: 'State-of-the-art technology available to our clients to optimize their digital resources.'
  },
  {
    title: 'Cutting-edge reporting system',
    description: 'State-of-the-art reporting technology connected to multiple data sources. Real-time data visualization for better decision making.'
  }
]

export default function TextInfo () {
  return (
    <>
      <div className='z-50 grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
        {
        contentCard.map((content, index) => (
          <div
            key={index}
            className='p-8 space-y-3 border-[4px] border-white transition-shadow ease-in duration-75 hover:shadow-xl hover:border-button cursor-pointer'
          >
            <h3 className='text-2xl text-button capitalize font-extrabold'>
              {content.title}
            </h3>

            <p className='text-description'>
              {content.description}
            </p>
          </div>
        ))
       }
      </div>
    </>
  )
}
