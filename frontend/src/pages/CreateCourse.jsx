import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    duration: '',
    price: '',
    category: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Course data:', courseData)
    // Add course creation logic here
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Create New Course</h2>
          <p className="text-muted-foreground">
            Create a new course to share your knowledge with students
          </p>
        </div>

        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Course Title
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Enter course title"
                value={courseData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe what students will learn in this course"
                value={courseData.description}
                onChange={handleInputChange}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="duration" className="text-sm font-medium">
                  Duration (weeks)
                </label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  placeholder="8"
                  value={courseData.duration}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium">
                  Price ($)
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="99.99"
                  value={courseData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={courseData.category}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select a category</option>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="marketing">Marketing</option>
                <option value="personal-development">Personal Development</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Create Course
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCourse
