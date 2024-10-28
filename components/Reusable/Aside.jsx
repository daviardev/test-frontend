import { icons } from '@/app/constants/aside-dashboard'

import { useDashboard } from '@/context/DashboardProvider'

export default function Aside () {
  const { activateComponent, setActivateComponent } = useDashboard()
  return (
    <>
      <aside className='w-16 bg-button h-screen fixed top-0 left-0 text-white z-50'>
        <nav className='flex flex-col items-center py-12 space-y-4'>
          {icons.map((icon, index) => (
            <button
              key={index}
              onClick={() => setActivateComponent(icon.path.replace('/', ''))}
              className={`inline-flex items-center text-xl justify-center gap-2 h-14 w-full ${activateComponent === icon.path.replace('/', '') ? 'bg-hoverBlue' : ''}`}
            >
              {icon.icon}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
