import React from 'react';
import TableComponent from '../components/TableComponent';
import { Outlet } from "react-router-dom";
import Filters from '../components/Filters';

const Crypto = () => {
  return (
    <section className='w-[80%] h-full flex flex-col mt-16 mb-24 relative'>
      <Filters />
      <TableComponent />
      <Outlet />
    </section>
  )
}

export default Crypto;