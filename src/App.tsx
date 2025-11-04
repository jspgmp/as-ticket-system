import { SidebarProvider } from "./components/ui/sidebar"
import { DashboardSidebar } from "./components/dashboard-sidebar"
import { DashboardHeader } from "./components/dashboard-header"
import { StatsCards } from "./components/stats-cards"
import { RecentTickets } from "./components/recent-tickets"
import { AnalyticsChart } from "./components/analytics-chart"
import { StaffPerformance } from "./components/staff-performance"
import { TicketTrends } from "./components/ticket-trends"
import { ResponseTime } from "./components/response-time"
import { TicketList } from "./components/ticket-list"
import { TicketDetail } from "./components/ticket-detail"
import { NewTicket } from "./components/new-ticket"
import { StaffList } from "./components/staff-list"
import { CustomerList } from "./components/customer-list"
import { CustomerDetail } from "./components/customer-detail"
import { TaskList } from "./components/task-list"
import { RepairTicketList } from "./components/repair-ticket-list"
import { RepairTicketDetail } from "./components/repair-ticket-detail"
import { useState } from "react"

export default function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'ticket-list' | 'ticket-detail' | 'new-ticket' | 'staff-list' | 'customer-list' | 'customer-detail' | 'task-list' | 'repair-ticket-list' | 'repair-ticket-detail'>('dashboard')
  const [selectedTicketId, setSelectedTicketId] = useState<string>('')
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('')
  const [selectedRepairTicketId, setSelectedRepairTicketId] = useState<string>('')

  const handleTicketClick = (ticketId: string) => {
    setSelectedTicketId(ticketId)
    setCurrentPage('ticket-detail')
  }

  const handleNavigateToTicketList = () => {
    setCurrentPage('ticket-list')
  }

  const handleNavigateToNewTicket = () => {
    setCurrentPage('new-ticket')
  }

  const handleNavigateToStaffList = () => {
    setCurrentPage('staff-list')
  }

  const handleNavigateToCustomerList = () => {
    setCurrentPage('customer-list')
  }

  const handleCustomerClick = (customerId: string) => {
    setSelectedCustomerId(customerId)
    setCurrentPage('customer-detail')
  }

  const handleNavigateToTaskList = () => {
    setCurrentPage('task-list')
  }

  const handleNavigateToDashboard = () => {
    setCurrentPage('dashboard')
  }

  const handleRepairTicketClick = (ticketId: string) => {
    setSelectedRepairTicketId(ticketId)
    setCurrentPage('repair-ticket-detail')
  }

  const handleNavigateToRepairTicketList = () => {
    setCurrentPage('repair-ticket-list')
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'ticket-list':
        return <TicketList onTicketClick={handleTicketClick} onNavigateBack={handleNavigateToDashboard} onCreateTicket={handleNavigateToNewTicket} />
      case 'ticket-detail':
        return <TicketDetail ticketId={selectedTicketId} onNavigateBack={() => setCurrentPage('ticket-list')} />
      case 'new-ticket':
        return <NewTicket onNavigateBack={() => setCurrentPage('ticket-list')} onSave={() => setCurrentPage('ticket-list')} />
      case 'staff-list':
        return <StaffList onNavigateBack={handleNavigateToDashboard} />
      case 'customer-list':
        return <CustomerList onNavigateBack={handleNavigateToDashboard} onCustomerClick={handleCustomerClick} />
      case 'customer-detail':
        return <CustomerDetail customerId={selectedCustomerId} onNavigateBack={() => setCurrentPage('customer-list')} />
      case 'task-list':
        return <TaskList onNavigateBack={handleNavigateToDashboard} />
      case 'repair-ticket-list':
        return <RepairTicketList onTicketClick={handleRepairTicketClick} onNavigateBack={handleNavigateToDashboard} />
      case 'repair-ticket-detail':
        return <RepairTicketDetail ticketId={selectedRepairTicketId} onNavigateBack={() => setCurrentPage('repair-ticket-list')} />
      default:
        return (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h1>고객 서비스 대시보드</h1>
                <p className="text-muted-foreground">
                  티켓 모니터링, 성과 추적 및 고객 지원 관리
                </p>
              </div>
            </div>
            
            <StatsCards />
            
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <RecentTickets onViewAllTickets={handleNavigateToTicketList} />
                <div className="grid gap-6 md:grid-cols-2">
                  <TicketTrends />
                  <ResponseTime />
                </div>
              </div>
              <div>
                <StaffPerformance />
              </div>
            </div>
            
            <AnalyticsChart />
          </>
        )
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar
          onNavigateToTicketList={handleNavigateToTicketList}
          onNavigateToNewTicket={handleNavigateToNewTicket}
          onNavigateToStaffList={handleNavigateToStaffList}
          onNavigateToCustomerList={handleNavigateToCustomerList}
          onNavigateToTaskList={handleNavigateToTaskList}
          onNavigateToRepairTicketList={handleNavigateToRepairTicketList}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}