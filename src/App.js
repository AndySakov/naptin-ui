import React from 'react'
import { Outlet } from 'react-router-dom'
// import PageWrapper from './components/layout/PageWrapper'

const App = () => {
  return (
    // TODO: Add authentication and authorization logic here
    <>
      <Outlet />
    </>
  );
}

export default App