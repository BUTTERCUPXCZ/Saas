import React from 'react'
import { Layout } from '../components/Layout'
import { BookOpen, Clock, Users } from 'lucide-react'

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Learn the basics of React including components, state, and props",
      students: 45,
      duration: "8 weeks",
      status: "Active",
      progress: 75
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts and patterns",
      students: 32,
      duration: "10 weeks", 
      status: "Active",
      progress: 60
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js and Express",
      students: 28,
      duration: "12 weeks",
      status: "Draft",
      progress: 0
    }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Courses</h2>
          <p className="text-muted-foreground">
            Manage your courses and track student engagement
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="rounded-lg border p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    course.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <BookOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <p className="text-sm text-muted-foreground">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              {course.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 pt-2">
                <button className="flex-1 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                  Edit Course
                </button>
                <button className="rounded-md border px-3 py-2 text-sm hover:bg-accent">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default MyCourses
