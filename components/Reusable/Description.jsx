export default function Description ({ description, right = false }) {
  return (
    <p className={`
        w-full
        max-w-80
        sm:text-left
        leading-relaxed
        my-4
        relative
        text-description
        text-center
      ${
        right
        ? 'self-end text-right'
        : ''
      }`}
    >
      {description}
    </p>
  )
}
