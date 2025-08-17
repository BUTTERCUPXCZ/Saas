import React from 'react'
import { Layout } from '../components/Layout'

const InstructorDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Instructor Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome to your instructor dashboard. Manage your courses and track student progress.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Total Courses</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Active Students</h3>
            <p className="text-2xl font-bold">248</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Course Completion</h3>
            <p className="text-2xl font-bold">87%</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Revenue</h3>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="mb-4 font-semibold">Recent Activity</h3>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">New student enrolled in "React Fundamentals"</p>
            <p className="text-sm text-muted-foreground">Course "Advanced JavaScript" completed by 5 students</p>
            <p className="text-sm text-muted-foreground">Payment received from "Web Development Bootcamp"</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InstructorDashboard