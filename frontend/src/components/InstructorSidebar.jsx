import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  BookOpen,
  BarChart3,
  Plus,
  Settings,
  User,
  LayoutDashboard,
  Users,
  DollarSign,
  MessageSquare,
  FileText,
  TrendingUp,
  Calendar
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

// Instructor menu items with icons and labels
const instructorItems = [
  {
    title: "Dashboard",
    url: "/instructor-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    url: "/my-courses",
    icon: BookOpen,
  },
  {
    title: "Create Course",
    url: "/create-course",
    icon: Plus,
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Revenue",
    url: "/revenue",
    icon: DollarSign,
  },
  {
    title: "Performance",
    url: "/performance",
    icon: TrendingUp,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: Calendar,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/instructor-settings",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/profile-settings",
    icon: User,
  },
]

export function InstructorSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">
            Instructor Portal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {instructorItems.map((item) => (
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
