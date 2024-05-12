import React from 'react'
import { AdminAcc } from '../features/Admin/components/AdminAcc'
import AdminEvents from '../features/Admin/components/AdminEvents'

export default function AdminAccPage() {
  return (
    <div>
        <h1 className="text-5xl font-bold text-center my-8">Account Details</h1>
      <AdminAcc/>
      <AdminEvents/>
    </div>
  )
}
