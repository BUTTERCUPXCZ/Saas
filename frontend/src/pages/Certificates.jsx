import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Award, Download, Share2, Calendar, Star, ExternalLink } from 'lucide-react'

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('earned')

  const earnedCertificates = [
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'John Smith',
      issueDate: '2025-08-15',
      completionDate: '2025-08-14',
      score: 95,
      credentialId: 'RC-2025-001234',
      skills: ['React', 'JSX', 'Components', 'State Management'],
      hours: 25,
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'HTML & CSS Mastery',
      instructor: 'Sarah Wilson',
      issueDate: '2025-08-10',
      completionDate: '2025-08-09',
      score: 92,
      credentialId: 'HC-2025-005678',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox'],
      hours: 20,
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Git Version Control',
      instructor: 'Mike Johnson',
      issueDate: '2025-08-05',
      completionDate: '2025-08-04',
      score: 88,
      credentialId: 'GV-2025-009012',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      hours: 15,
      image: '/api/placeholder/400/300'
    }
  ]

  const upcomingCertificates = [
    {
      course: 'JavaScript Advanced',
      progress: 75,
      estimatedCompletion: '2025-08-25',
      requiredScore: 80,
      currentScore: 85
    },
    {
      course: 'Node.js Backend Development',
      progress: 30,
      estimatedCompletion: '2025-09-10',
      requiredScore: 80,
      currentScore: null
    }
  ]

  const handleDownload = (certificate) => {
    // In a real app, this would generate and download the certificate
    console.log('Downloading certificate for:', certificate.title)
  }

  const handleShare = (certificate) => {
    // In a real app, this would open sharing options
    console.log('Sharing certificate:', certificate.title)
  }

  const handleVerify = (credentialId) => {
    // In a real app, this would open verification page
    console.log('Verifying credential:', credentialId)
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Certificates</h2>
          <p className="text-muted-foreground">
            View and manage your earned certificates and track progress toward new ones
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <h3 className="font-medium">Certificates Earned</h3>
            </div>
            <p className="text-2xl font-bold">{earnedCertificates.length}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Total Learning Hours</h3>
            <p className="text-2xl font-bold">
              {earnedCertificates.reduce((sum, cert) => sum + cert.hours, 0)}
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Average Score</h3>
            <p className="text-2xl font-bold">
              {Math.round(earnedCertificates.reduce((sum, cert) => sum + cert.score, 0) / earnedCertificates.length)}%
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">In Progress</h3>
            <p className="text-2xl font-bold">{upcomingCertificates.length}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('earned')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'earned'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Earned Certificates ({earnedCertificates.length})
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              In Progress ({upcomingCertificates.length})
            </button>
          </nav>
        </div>

        {/* Earned Certificates Tab */}
        {activeTab === 'earned' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {earnedCertificates.map((certificate) => (
              <div key={certificate.id} className="rounded-lg border overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-2" />
                      <h3 className="font-bold text-lg">{certificate.title}</h3>
                      <p className="text-sm opacity-90">Certificate of Completion</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-semibold">{certificate.title}</h4>
                    <p className="text-sm text-muted-foreground">by {certificate.instructor}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Earned {certificate.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{certificate.score}%</span>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="font-medium mb-1">Skills Covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {certificate.credentialId}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownload(certificate)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                    <button
                      onClick={() => handleShare(certificate)}
                      className="flex items-center justify-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 text-sm"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                    <button
                      onClick={() => handleVerify(certificate.credentialId)}
                      className="flex items-center justify-center gap-2 px-3 py-2 border rounded hover:bg-gray-50 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* In Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-4">
            {upcomingCertificates.map((course, index) => (
              <div key={index} className="rounded-lg border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{course.course}</h3>
                  <span className="text-sm text-muted-foreground">
                    Est. completion: {course.estimatedCompletion}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span>Required Score: {course.requiredScore}%</span>
                    {course.currentScore && (
                      <span className="text-green-600">
                        Current Score: {course.currentScore}%
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                      Continue Learning
                    </button>
                    {course.currentScore && course.currentScore >= course.requiredScore && (
                      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                        Take Final Exam
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Certificates
