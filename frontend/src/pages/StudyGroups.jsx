import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Users, Plus, Search, MessageCircle, Calendar, Clock, BookOpen, UserPlus } from 'lucide-react'

const StudyGroups = () => {
  const [activeTab, setActiveTab] = useState('joined')
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  const joinedGroups = [
    {
      id: 1,
      name: 'React Fundamentals Study Group',
      course: 'React Fundamentals',
      members: 12,
      maxMembers: 15,
      nextSession: '2025-08-18 19:00',
      description: 'Weekly study sessions to master React concepts together',
      isActive: true,
      role: 'member',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'JavaScript Deep Dive',
      course: 'JavaScript Advanced',
      members: 8,
      maxMembers: 10,
      nextSession: '2025-08-20 18:30',
      description: 'Advanced JavaScript concepts and problem-solving',
      isActive: true,
      role: 'moderator',
      lastActivity: '1 day ago'
    }
  ]

  const availableGroups = [
    {
      id: 3,
      name: 'Python Beginners Circle',
      course: 'Python for Data Science',
      members: 6,
      maxMembers: 12,
      nextSession: '2025-08-19 20:00',
      description: 'Perfect for those starting their Python journey',
      isActive: true,
      tags: ['Beginner', 'Python', 'Data Science']
    },
    {
      id: 4,
      name: 'Full Stack Warriors',
      course: 'Full Stack Web Development',
      members: 15,
      maxMembers: 20,
      nextSession: '2025-08-21 19:30',
      description: 'Build real projects together while learning full stack development',
      isActive: true,
      tags: ['Full Stack', 'Projects', 'Collaboration']
    },
    {
      id: 5,
      name: 'AWS Certification Prep',
      course: 'AWS Cloud Practitioner',
      members: 10,
      maxMembers: 15,
      nextSession: '2025-08-22 18:00',
      description: 'Prepare for AWS certification exams together',
      isActive: true,
      tags: ['AWS', 'Certification', 'Cloud']
    }
  ]

  const [newGroup, setNewGroup] = useState({
    name: '',
    course: '',
    description: '',
    maxMembers: 10,
    schedule: '',
    tags: ''
  })

  const handleJoinGroup = (groupId) => {
    console.log('Joining group:', groupId)
  }

  const handleLeaveGroup = (groupId) => {
    console.log('Leaving group:', groupId)
  }

  const handleCreateGroup = (e) => {
    e.preventDefault()
    console.log('Creating group:', newGroup)
    setShowCreateForm(false)
    setNewGroup({
      name: '',
      course: '',
      description: '',
      maxMembers: 10,
      schedule: '',
      tags: ''
    })
  }

  const filteredAvailableGroups = availableGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Study Groups</h2>
            <p className="text-muted-foreground">
              Join study groups to learn collaboratively and stay motivated
            </p>
          </div>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Create Group
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">Groups Joined</h3>
            </div>
            <p className="text-2xl font-bold">{joinedGroups.length}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Total Members</h3>
            <p className="text-2xl font-bold">
              {joinedGroups.reduce((sum, group) => sum + group.members, 0)}
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Next Session</h3>
            <p className="text-lg font-bold">Today 7PM</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Study Hours</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
        </div>

        {/* Create Group Form */}
        {showCreateForm && (
          <div className="rounded-lg border p-6 bg-gray-50">
            <h3 className="font-semibold mb-4">Create New Study Group</h3>
            <form onSubmit={handleCreateGroup} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Group Name</label>
                  <input
                    type="text"
                    value={newGroup.name}
                    onChange={(e) => setNewGroup({...newGroup, name: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter group name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Course</label>
                  <select
                    value={newGroup.course}
                    onChange={(e) => setNewGroup({...newGroup, course: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="React Fundamentals">React Fundamentals</option>
                    <option value="JavaScript Advanced">JavaScript Advanced</option>
                    <option value="Python for Data Science">Python for Data Science</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={newGroup.description}
                  onChange={(e) => setNewGroup({...newGroup, description: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Describe your study group"
                  required
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Max Members</label>
                  <input
                    type="number"
                    value={newGroup.maxMembers}
                    onChange={(e) => setNewGroup({...newGroup, maxMembers: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="2"
                    max="50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Schedule</label>
                  <input
                    type="text"
                    value={newGroup.schedule}
                    onChange={(e) => setNewGroup({...newGroup, schedule: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Mondays 7PM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tags</label>
                  <input
                    type="text"
                    value={newGroup.tags}
                    onChange={(e) => setNewGroup({...newGroup, tags: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Beginner, Advanced, Projects"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Group
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tabs */}
        <div className="border-b">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('joined')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'joined'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Groups ({joinedGroups.length})
            </button>
            <button
              onClick={() => setActiveTab('available')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'available'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Available Groups ({availableGroups.length})
            </button>
          </nav>
        </div>

        {/* Search for available groups */}
        {activeTab === 'available' && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search study groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Joined Groups */}
        {activeTab === 'joined' && (
          <div className="space-y-4">
            {joinedGroups.map((group) => (
              <div key={group.id} className="rounded-lg border p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      {group.role === 'moderator' && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                          Moderator
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{group.course}</p>
                  </div>
                  <button
                    onClick={() => handleLeaveGroup(group.id)}
                    className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50 text-sm"
                  >
                    Leave Group
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">{group.description}</p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>{group.members}/{group.maxMembers} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>Next: {new Date(group.nextSession).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{new Date(group.nextSession).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-gray-400" />
                    <span>Last activity: {group.lastActivity}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Join Session
                  </button>
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                    View Chat
                  </button>
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Available Groups */}
        {activeTab === 'available' && (
          <div className="space-y-4">
            {filteredAvailableGroups.map((group) => (
              <div key={group.id} className="rounded-lg border p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{group.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{group.course}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJoinGroup(group.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <UserPlus className="h-4 w-4" />
                    Join Group
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">{group.description}</p>
                
                {group.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{group.members}/{group.maxMembers} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Next: {new Date(group.nextSession).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(group.nextSession).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredAvailableGroups.length === 0 && activeTab === 'available' && searchTerm && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No groups found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or create a new study group.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default StudyGroups
