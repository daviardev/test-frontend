export default function Input ({ label, type }) {
  return (
    <div className='flex flex-col space-y-1'>
      {label && <label className='text-sm font-semibold text-description'>{label}</label>}
      <input
        type={type}
        name={label}
        id={label}
        className='border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-button'
      />
    </div>
  )
}
