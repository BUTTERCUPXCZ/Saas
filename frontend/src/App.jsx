import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './student/StudentDashboard';
import InstructorDashboard from './instructor/InstructorDashboard';
import MyCourses from './pages/MyCourses';
import CreateCourse from './pages/CreateCourse';
import Analytics from './pages/Analytics';
import ProfileSettings from './pages/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoutes';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';



function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path={'/'} element={<LandingPage />}></Route>
         
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/register'} element={<Register />}></Route>

        <Route 
        path={'/student-dashboard'} 
        element={
        <ProtectedRoute>
          <StudentDashboard />
        </ProtectedRoute>
        }>
        </Route>
        <Route 
        path={'/instructor-dashboard'} 
        element={
          <ProtectedRoute>
            <InstructorDashboard />
          </ProtectedRoute>
        }>
        </Route>
        <Route 
        path={'/my-courses'} 
        element={
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        }>
        </Route>
        <Route 
        path={'/create-course'} 
        element={
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        }>
        </Route>
        <Route 
        path={'/analytics'} 
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }>
        </Route>
        <Route 
        path={'/profile-settings'} 
        element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App
