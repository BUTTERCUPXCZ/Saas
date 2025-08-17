import React from "react"
import { useAuth } from "@/context/AuthContext"
import { StudentSidebar } from "./StudentSidebar"
import { InstructorSidebar } from "./InstructorSidebar"

export function AppSidebar() {
  const { user } = useAuth()

  // If no user is logged in, don't render any sidebar
  if (!user) {
    return null
  }

  // Render the appropriate sidebar based on user role
  if (user.role === 'STUDENT') {
    return <StudentSidebar />
  } else if (user.role === 'INSTRUCTOR') {
    return <InstructorSidebar />
  }

  // Fallback to instructor sidebar for unknown roles
  return <InstructorSidebar />
}
