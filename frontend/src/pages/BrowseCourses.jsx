import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Search, Filter, Star, Clock, Users, DollarSign } from 'lucide-react'

const BrowseCourses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')

  const categories = [
    'All', 'Web Development', 'Data Science', 'Mobile Development', 
    'UI/UX Design', 'DevOps', 'Machine Learning', 'Cybersecurity'
  ]

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'John Smith',
      rating: 4.8,
      students: 15420,
      duration: '40 hours',
      price: 79.99,
      image: '/api/placeholder/300/200',
      category: 'Web Development',
      level: 'Beginner to Advanced'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 8950,
      duration: '35 hours',
      price: 89.99,
      image: '/api/placeholder/300/200',
      category: 'Data Science',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'Mobile App Development with Flutter',
      instructor: 'Mike Chen',
      rating: 4.7,
      students: 6780,
      duration: '50 hours',
      price: 99.99,
      image: '/api/placeholder/300/200',
      category: 'Mobile Development',
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Wilson',
      rating: 4.8,
      students: 12300,
      duration: '30 hours',
      price: 69.99,
      image: '/api/placeholder/300/200',
      category: 'UI/UX Design',
      level: 'Beginner to Advanced'
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           course.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesPrice = priceFilter === 'all' ||
                        (priceFilter === 'free' && course.price === 0) ||
                        (priceFilter === 'paid' && course.price > 0)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Browse Courses</h2>
          <p className="text-muted-foreground">
            Discover new courses to expand your knowledge and skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {course.level}
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-bold">${course.price}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default BrowseCourses
