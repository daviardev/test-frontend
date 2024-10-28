import { IoClose } from 'react-icons/io5'

export default function Details ({ open, onClose, children }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
      >
        <div
          onClick={e => e.stopPropagation()}
          className={`bg-white rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
        >
          <button
            onClick={onClose}
            className='absolute top-2 right-2 p-1 text-red-300 bg-white shadow-xl rounded-full hover:bg-gray-50 hover:text-red-500'
          >
            <IoClose size={24} />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}
