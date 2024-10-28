export default function Login ({ children }) {
  return (
    <button
      className='whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-button text-primary-foreground hover:bg-hoverBlue mt-2 flex w-full items-center justify-center rounded-lg px-4 py-4 text-xs font-extrabold text-white uppercase'
      type='submit'
    >
      {children}
    </button>
  )
}
