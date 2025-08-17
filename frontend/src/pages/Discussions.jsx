import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { MessageCircle, Send, Search, Filter, ThumbsUp, Reply, BookOpen, Users, Clock } from 'lucide-react'

const Discussions = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('all')
  const [newQuestion, setNewQuestion] = useState('')
  const [showAskQuestion, setShowAskQuestion] = useState(false)

  const courses = [
    'All Courses',
    'React Fundamentals',
    'JavaScript Advanced',
    'Python for Data Science',
    'Full Stack Web Development',
    'AWS Cloud Practitioner'
  ]

  const discussions = [
    {
      id: 1,
      title: 'How to handle state management in large React applications?',
      author: 'Sarah Wilson',
      course: 'React Fundamentals',
      timestamp: '2 hours ago',
      replies: 15,
      likes: 23,
      isAnswered: true,
      tags: ['React', 'State Management', 'Redux'],
      preview: 'I\'m working on a large React app and struggling with state management. What are the best practices for...',
      type: 'question'
    },
    {
      id: 2,
      title: 'Great explanation of closures in the latest lesson!',
      author: 'Mike Chen',
      course: 'JavaScript Advanced',
      timestamp: '4 hours ago',
      replies: 8,
      likes: 31,
      isAnswered: false,
      tags: ['JavaScript', 'Closures'],
      preview: 'The instructor\'s explanation of closures really helped me understand this concept. Here\'s a practical example...',
      type: 'discussion'
    },
    {
      id: 3,
      title: 'Error with pandas DataFrame - IndexError',
      author: 'Emma Rodriguez',
      course: 'Python for Data Science',
      timestamp: '6 hours ago',
      replies: 12,
      likes: 7,
      isAnswered: true,
      tags: ['Python', 'Pandas', 'Error'],
      preview: 'I\'m getting an IndexError when trying to access DataFrame columns. Here\'s my code and the error message...',
      type: 'question'
    },
    {
      id: 4,
      title: 'Best practices for API design in Express.js',
      author: 'John Martinez',
      course: 'Full Stack Web Development',
      timestamp: '1 day ago',
      replies: 25,
      likes: 45,
      isAnswered: false,
      tags: ['Express.js', 'API', 'Best Practices'],
      preview: 'What are the current best practices for designing RESTful APIs in Express.js? I\'m particularly interested in...',
      type: 'discussion'
    },
    {
      id: 5,
      title: 'AWS EC2 instance keeps terminating unexpectedly',
      author: 'Lisa Zhang',
      course: 'AWS Cloud Practitioner',
      timestamp: '1 day ago',
      replies: 6,
      likes: 12,
      isAnswered: false,
      tags: ['AWS', 'EC2', 'Troubleshooting'],
      preview: 'My EC2 instance keeps terminating after a few hours. I\'ve checked the logs but can\'t find the issue...',
      type: 'question'
    }
  ]

  const trendingTopics = [
    { name: 'React Hooks', count: 45 },
    { name: 'AWS Lambda', count: 32 },
    { name: 'Python Pandas', count: 28 },
    { name: 'JavaScript ES6', count: 24 },
    { name: 'CSS Grid', count: 19 }
  ]

  const myStats = {
    questionsAsked: 12,
    answersGiven: 28,
    helpfulVotes: 156,
    reputation: 450
  }

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCourse = selectedCourse === 'all' || 
                         discussion.course.toLowerCase() === selectedCourse.toLowerCase()
    
    const matchesTab = activeTab === 'all' ||
                      (activeTab === 'questions' && discussion.type === 'question') ||
                      (activeTab === 'discussions' && discussion.type === 'discussion') ||
                      (activeTab === 'answered' && discussion.isAnswered) ||
                      (activeTab === 'unanswered' && !discussion.isAnswered)
    
    return matchesSearch && matchesCourse && matchesTab
  })

  const handleAskQuestion = (e) => {
    e.preventDefault()
    console.log('Asking question:', newQuestion)
    setNewQuestion('')
    setShowAskQuestion(false)
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Discussions</h2>
            <p className="text-muted-foreground">
              Ask questions, share knowledge, and connect with fellow learners
            </p>
          </div>
          <button
            onClick={() => setShowAskQuestion(!showAskQuestion)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Ask Question
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Questions Asked</h3>
            <p className="text-2xl font-bold">{myStats.questionsAsked}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Answers Given</h3>
            <p className="text-2xl font-bold">{myStats.answersGiven}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Helpful Votes</h3>
            <p className="text-2xl font-bold">{myStats.helpfulVotes}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Reputation</h3>
            <p className="text-2xl font-bold text-blue-600">{myStats.reputation}</p>
          </div>
        </div>

        {/* Ask Question Form */}
        {showAskQuestion && (
          <div className="rounded-lg border p-6 bg-gray-50">
            <h3 className="font-semibold mb-4">Ask a Question</h3>
            <form onSubmit={handleAskQuestion} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Course</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {courses.slice(1).map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Question Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's your question?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Question Details</label>
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Provide more details about your question..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add tags (e.g., react, javascript, css)"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Post Question
                </button>
                <button
                  type="button"
                  onClick={() => setShowAskQuestion(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {courses.map(course => (
                  <option key={course} value={course.toLowerCase() === 'all courses' ? 'all' : course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Tabs */}
            <div className="border-b">
              <nav className="-mb-px flex space-x-8">
                {[
                  { key: 'all', label: 'All', count: discussions.length },
                  { key: 'questions', label: 'Questions', count: discussions.filter(d => d.type === 'question').length },
                  { key: 'discussions', label: 'Discussions', count: discussions.filter(d => d.type === 'discussion').length },
                  { key: 'answered', label: 'Answered', count: discussions.filter(d => d.isAnswered).length },
                  { key: 'unanswered', label: 'Unanswered', count: discussions.filter(d => !d.isAnswered).length }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </nav>
            </div>

            {/* Discussion List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="rounded-lg border p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{discussion.title}</h3>
                        {discussion.isAnswered && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                            Answered
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded text-xs ${
                          discussion.type === 'question' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {discussion.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <BookOpen className="h-4 w-4" />
                        <span>{discussion.course}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{discussion.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{discussion.preview}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Reply className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Discussion →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or start a new discussion.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-3">Trending Topics</h3>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                      #{topic.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm">
                  📚 Browse by Course
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm">
                  🏆 Top Contributors
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm">
                  📋 Discussion Guidelines
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm">
                  🔔 Notification Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Discussions
