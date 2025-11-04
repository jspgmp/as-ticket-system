import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell, Search, Plus, Filter } from "lucide-react"
import { SidebarTrigger } from "./ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      
      <div className="flex flex-1 items-center gap-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="티켓, 고객 검색..."
              className="pl-8"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            새 티켓
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            필터
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
            3
          </span>
        </Button>
        
        <Avatar className="h-8 w-8">
          <AvatarFallback>CS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}