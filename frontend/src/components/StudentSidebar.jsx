import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  BookOpen,
  BarChart3,
  User,
  LayoutDashboard,
  GraduationCap,
  Search,
  Heart,
  Award,
  MessageCircle
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Student menu items with icons and labels
const studentItems = [
  {
    title: "Dashboard",
    url: "/student-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Courses",
    url: "/browse-courses",
    icon: Search,
  },
  {
    title: "My Courses",
    url: "/my-courses",
    icon: BookOpen,
  },
  {
    title: "Learning Progress",
    url: "/learning-progress",
    icon: BarChart3,
  },
  {
    title: "Certificates",
    url: "/certificates",
    icon: Award,
  },
  {
    title: "Wishlist",
    url: "/wishlist",
    icon: Heart,
  },
  {
    title: "Study Groups",
    url: "/study-groups",
    icon: GraduationCap,
  },
  {
    title: "Discussions",
    url: "/discussions",
    icon: MessageCircle,
  },
  {
    title: "Profile Settings",
    url: "/profile-settings",
    icon: User,
  },
]

export function StudentSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">
            Student Portal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="w-full justify-start gap-2 px-2 py-2 text-left text-sm"
                  >
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
