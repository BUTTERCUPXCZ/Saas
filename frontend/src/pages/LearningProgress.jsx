import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { BarChart3, Clock, Trophy, Target, TrendingUp, Calendar } from 'lucide-react'

const LearningProgress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const overallStats = {
    totalHours: 125,
    coursesCompleted: 3,
    coursesInProgress: 2,
    averageScore: 87,
    streak: 12,
    certificates: 3
  }

  const progressData = [
    {
      course: 'React Fundamentals',
      progress: 75,
      timeSpent: 25,
      lastActivity: '2 hours ago',
      status: 'In Progress',
      nextLesson: 'Advanced Hooks'
    },
    {
      course: 'JavaScript Advanced',
      progress: 45,
      timeSpent: 18,
      lastActivity: '1 day ago',
      status: 'In Progress',
      nextLesson: 'Async/Await Patterns'
    },
    {
      course: 'HTML & CSS Basics',
      progress: 100,
      timeSpent: 20,
      lastActivity: '3 days ago',
      status: 'Completed',
      completedDate: '2025-08-14'
    },
    {
      course: 'Git Version Control',
      progress: 100,
      timeSpent: 15,
      lastActivity: '1 week ago',
      status: 'Completed',
      completedDate: '2025-08-10'
    }
  ]

  const weeklyActivity = [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 2 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 1 }
  ]

  const achievements = [
    { name: 'First Course Complete', icon: '🎓', earned: true },
    { name: 'Week Streak', icon: '🔥', earned: true },
    { name: 'Quick Learner', icon: '⚡', earned: true },
    { name: 'Perfect Score', icon: '💯', earned: false },
    { name: 'Course Marathon', icon: '🏃', earned: false }
  ]

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Learning Progress</h2>
          <p className="text-muted-foreground">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <h3 className="font-medium text-sm">Total Hours</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.totalHours}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-green-500" />
              <h3 className="font-medium text-sm">Completed</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.coursesCompleted}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <h3 className="font-medium text-sm">In Progress</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.coursesInProgress}</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-500" />
              <h3 className="font-medium text-sm">Avg Score</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.averageScore}%</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-red-500" />
              <h3 className="font-medium text-sm">Streak</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.streak} days</p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-500" />
              <h3 className="font-medium text-sm">Certificates</h3>
            </div>
            <p className="text-2xl font-bold">{overallStats.certificates}</p>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-4">Weekly Activity</h3>
          <div className="flex items-end justify-between h-32 gap-2">
            {weeklyActivity.map((day, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="bg-blue-500 rounded-t w-full mb-2"
                  style={{ height: `${(day.hours / 4) * 100}%` }}
                ></div>
                <span className="text-xs text-muted-foreground">{day.day}</span>
                <span className="text-xs font-medium">{day.hours}h</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Progress */}
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-4">Course Progress</h3>
          <div className="space-y-4">
            {progressData.map((course, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{course.course}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    course.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {course.timeSpent}h spent
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Last activity: {course.lastActivity}</span>
                  {course.status === 'In Progress' ? (
                    <span>Next: {course.nextLesson}</span>
                  ) : (
                    <span>Completed: {course.completedDate}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-4">Achievements</h3>
          <div className="grid gap-4 md:grid-cols-5">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`border rounded-lg p-4 text-center ${
                  achievement.earned 
                    ? 'border-yellow-200 bg-yellow-50' 
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <p className="text-sm font-medium">{achievement.name}</p>
                {achievement.earned && (
                  <p className="text-xs text-green-600 mt-1">Earned!</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LearningProgress
