import { GoHome } from 'react-icons/go'
import { FaUsers } from 'react-icons/fa'
import { CiBoxes } from 'react-icons/ci'
import { GiSellCard } from 'react-icons/gi'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'

export const icons = [
  {
    icon: <GoHome />,
    path: '/sale'
  },
  {
    icon: <FaUsers />,
    path: '/client'
  },
  {
    icon: <CiBoxes />,
    path: 'products'
  },
  {
    icon: <GiSellCard />,
    path: 'sellers'
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    path: '/provider'
  }
]
