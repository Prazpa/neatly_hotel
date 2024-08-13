import Sidebar from '@/components/admin/Sidebar'
import Booktable from '@/components/Booking/booktable'
import React from 'react'

function Bookingpage() {
  return (
    <div className='w-full flex gap-[50px]'>
      <Sidebar />
      <div className='w-[900px] flex items-center content-center'>
        <Booktable />
      </div>
  </div>
  )
}

export default Bookingpage