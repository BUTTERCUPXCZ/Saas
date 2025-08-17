import React from 'react'
import { Layout } from '../components/Layout'
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react'

const Analytics = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      changeType: "positive",
      icon: DollarSign
    },
    {
      title: "Active Students",
      value: "2,350",
      change: "+15.2%",
      changeType: "positive",
      icon: Users
    },
    {
      title: "Course Completions",
      value: "1,234",
      change: "+12.5%",
      changeType: "positive",
      icon: TrendingUp
    },
    {
      title: "Avg. Course Rating",
      value: "4.8",
      change: "+0.2",
      changeType: "positive",
      icon: BarChart3
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Track your course performance and student engagement
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="rounded-lg border p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-xs ${
                    stat.changeType === 'positive' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Top Performing Courses</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">React Fundamentals</p>
                  <p className="text-sm text-muted-foreground">245 enrollments</p>
                </div>
                <span className="text-green-600 text-sm font-medium">+23%</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Advanced JavaScript</p>
                  <p className="text-sm text-muted-foreground">189 enrollments</p>
                </div>
                <span className="text-green-600 text-sm font-medium">+18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Node.js Backend</p>
                  <p className="text-sm text-muted-foreground">156 enrollments</p>
                </div>
                <span className="text-green-600 text-sm font-medium">+12%</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm">New student enrolled in React Fundamentals</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm">Course completed: Advanced JavaScript</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm">Payment received: $99.99</p>
                  <p className="text-xs text-muted-foreground">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Analytics
