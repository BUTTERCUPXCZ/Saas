import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Heart, Star, Clock, Users, DollarSign, Trash2, ExternalLink } from 'lucide-react'

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Advanced Python Programming',
      instructor: 'Dr. Maria Garcia',
      rating: 4.9,
      students: 12500,
      duration: '45 hours',
      price: 99.99,
      originalPrice: 149.99,
      image: '/api/placeholder/300/200',
      category: 'Programming',
      level: 'Advanced',
      addedDate: '2025-08-10',
      onSale: true,
      discount: 33
    },
    {
      id: 2,
      title: 'Machine Learning with TensorFlow',
      instructor: 'Alex Chen',
      rating: 4.8,
      students: 8750,
      duration: '60 hours',
      price: 129.99,
      originalPrice: 129.99,
      image: '/api/placeholder/300/200',
      category: 'Data Science',
      level: 'Intermediate',
      addedDate: '2025-08-08',
      onSale: false,
      discount: 0
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner Bootcamp',
      instructor: 'Sarah Kumar',
      rating: 4.7,
      students: 15200,
      duration: '35 hours',
      price: 79.99,
      originalPrice: 99.99,
      image: '/api/placeholder/300/200',
      category: 'Cloud Computing',
      level: 'Beginner',
      addedDate: '2025-08-05',
      onSale: true,
      discount: 20
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      instructor: 'John Martinez',
      rating: 4.9,
      students: 20100,
      duration: '80 hours',
      price: 149.99,
      originalPrice: 199.99,
      image: '/api/placeholder/300/200',
      category: 'Web Development',
      level: 'Beginner to Advanced',
      addedDate: '2025-08-03',
      onSale: true,
      discount: 25
    }
  ])

  const [sortBy, setSortBy] = useState('dateAdded')

  const removeFromWishlist = (courseId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== courseId))
  }

  const enrollInCourse = (course) => {
    // In a real app, this would handle enrollment
    console.log('Enrolling in:', course.title)
  }

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case 'dateAdded':
        return new Date(b.addedDate) - new Date(a.addedDate)
      case 'price':
        return a.price - b.price
      case 'rating':
        return b.rating - a.rating
      case 'popularity':
        return b.students - a.students
      default:
        return 0
    }
  })

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0)
  const totalSavings = wishlistItems.reduce((sum, item) => 
    sum + (item.originalPrice - item.price), 0
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Wishlist</h2>
          <p className="text-muted-foreground">
            Keep track of courses you're interested in and get notified of price drops
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Total Items</h3>
            <p className="text-2xl font-bold">{wishlistItems.length}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Total Value</h3>
            <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Potential Savings</h3>
            <p className="text-2xl font-bold text-green-600">${totalSavings.toFixed(2)}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">On Sale</h3>
            <p className="text-2xl font-bold text-orange-600">
              {wishlistItems.filter(item => item.onSale).length}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="dateAdded">Date Added</option>
              <option value="price">Price (Low to High)</option>
              <option value="rating">Rating (High to Low)</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          
          {wishlistItems.length > 0 && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Enroll in All (${totalValue.toFixed(2)})
            </button>
          )}
        </div>

        {/* Wishlist Items */}
        {sortedItems.length > 0 ? (
          <div className="space-y-4">
            {sortedItems.map((course) => (
              <div key={course.id} className="rounded-lg border p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Course Image */}
                  <div className="w-full md:w-48 aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    {course.onSale && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        {course.discount}% OFF
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {course.level}
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                      <p className="text-muted-foreground">by {course.instructor}</p>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm mt-1">
                        {course.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Added to wishlist on {new Date(course.addedDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex flex-col justify-between items-end gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-xl font-bold">${course.price}</span>
                      </div>
                      {course.onSale && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => enrollInCourse(course)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap"
                      >
                        Enroll Now
                      </button>
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.open(`/course/${course.id}`, '_blank')}
                          className="p-2 border rounded-lg hover:bg-gray-50"
                          title="View Course"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromWishlist(course.id)}
                          className="p-2 border rounded-lg hover:bg-red-50 text-red-600"
                          title="Remove from Wishlist"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">
              Browse courses and add them to your wishlist to keep track of what interests you.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Browse Courses
            </button>
          </div>
        )}

        {/* Price Drop Notifications */}
        {wishlistItems.some(item => item.onSale) && (
          <div className="rounded-lg bg-orange-50 border border-orange-200 p-4">
            <h3 className="font-medium text-orange-800 mb-2">🎉 Price Drop Alert!</h3>
            <p className="text-orange-700 text-sm">
              {wishlistItems.filter(item => item.onSale).length} course(s) in your wishlist are currently on sale. 
              Don't miss out on these limited-time offers!
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Wishlist
