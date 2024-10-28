import React, { createContext, useContext, useState } from 'react'

const DashboardContext = createContext()

export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }) => {
  const [activateComponent, setActivateComponent] = useState('sale')

  return (
    <DashboardContext.Provider value={{ activateComponent, setActivateComponent }}>
      {children}
    </DashboardContext.Provider>
  )
}
