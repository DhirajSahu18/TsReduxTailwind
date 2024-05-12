import React from 'react'
import Navbar from '../features/common/Navbar'
import { Event } from '../features/Events/components/Event'
import AdminEventDetPage from './AdminEventDetPage'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <AdminEventDetPage/>
      {/* <Event/> */}
    </div>
  )
}
