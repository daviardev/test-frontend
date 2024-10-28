import Description from './Description'

export default function Title ({ title, description, multiline = false, right = false }) {
  return (
    <>
      <h2 className={`
          text-4xl
          sm:text-6xl
          w-full
          relative
          xl:mt-28
          md:mt-0
          mt-4
          font-extrabold
          ${
            right
            ? 'sm:text-right text-center'
            : ''
          }`}
      >
        {
          multiline
            ? title.split('\n').map((line, index) => (
              <span
                key={index}
              >
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))
            : title
}
      </h2>

      <Description
        description={description}
      />
    </>
  )
}
