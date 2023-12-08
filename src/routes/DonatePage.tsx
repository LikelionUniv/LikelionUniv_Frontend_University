import React from 'react';
import { Outlet } from 'react-router-dom';
import '../components/LoadScript'

const DonatePage = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default DonatePage
