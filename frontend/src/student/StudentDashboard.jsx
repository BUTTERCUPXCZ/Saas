import React from 'react'
import { Layout } from '../components/Layout'

const StudentDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome to your learning dashboard. Continue your courses and track your progress.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Enrolled Courses</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Completed</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">In Progress</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="mb-4 font-semibold">Continue Learning</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <h4 className="font-medium">React Fundamentals</h4>
                <p className="text-sm text-muted-foreground">Progress: 75%</p>
              </div>
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                Continue
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <h4 className="font-medium">JavaScript Advanced</h4>
                <p className="text-sm text-muted-foreground">Progress: 45%</p>
              </div>
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default StudentDashboard