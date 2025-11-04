import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowLeft, Search, Filter, Plus } from "lucide-react"
import { Input } from "./ui/input"

interface TicketListProps {
  onTicketClick: (ticketId: string) => void
  onNavigateBack: () => void
  onCreateTicket: () => void
}

const ticketsData = [
  {
    id: "T-2024-001",
    title: "ABKO K561 키보드 스위치 불량",
    customer: "김철수",
    module: "A/S",
    helpTopic: "AS요청",
    priority: "높음",
    status: "접수중",
    assignee: "박기사",
    created: "2024-01-15",
    dueDate: "2024-01-20"
  },
  {
    id: "T-2024-002",
    title: "ABKO A800 마우스 센서 오류",
    customer: "이영희",
    module: "A/S",
    helpTopic: "문제 보고",
    priority: "긴급",
    status: "수리중",
    assignee: "정기사",
    created: "2024-01-14",
    dueDate: "2024-01-19"
  },
  {
    id: "T-2024-003",
    title: "ABKO 모니터 화면 깜빡임",
    customer: "장민호",
    module: "A/S",
    helpTopic: "부품 요청",
    priority: "보통",
    status: "견적중",
    assignee: "김기사",
    created: "2024-01-13",
    dueDate: "2024-01-25"
  },
  {
    id: "T-2024-004",
    title: "건조기 작동 불량",
    customer: "박수진",
    module: "A/S",
    helpTopic: "AS요청",
    priority: "높음",
    status: "발송대기중",
    assignee: "이기사",
    created: "2024-01-12",
    dueDate: "2024-01-22"
  },
  {
    id: "T-2024-005",
    title: "식기세척기 배수 문제",
    customer: "최동욱",
    module: "A/S", 
    helpTopic: "문제 보고",
    priority: "보통",
    status: "배달완료",
    assignee: "홍기사",
    created: "2024-01-11",
    dueDate: "2024-01-21"
  },
  {
    id: "T-2024-006",
    title: "전자레인지 터치패드 오작동",
    customer: "윤성호",
    module: "A/S",
    helpTopic: "단순 문의",
    priority: "낮음",
    status: "접수중",
    assignee: "강기사",
    created: "2024-01-10",
    dueDate: "2024-01-30"
  }
]

const priorityColors = {
  긴급: "destructive",
  높음: "secondary",
  보통: "outline",
  낮음: "outline"
} as const

const statusColors = {
  접수중: "secondary",
  견적중: "outline", 
  수리중: "default",
  발송대기중: "secondary",
  발송중: "default",
  배달완료: "default"
} as const

export function TicketList({ onTicketClick, onNavigateBack, onCreateTicket }: TicketListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onNavigateBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          대시보드로 돌아가기
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1>티켓 목록 (A/S)</h1>
          <p className="text-muted-foreground">
            A/S 접수된 모든 고객 서비스 티켓을 확인하고 관리하세요
          </p>
        </div>
        <Button onClick={onCreateTicket}>
          <Plus className="h-4 w-4 mr-2" />
          새 티켓
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="티켓 검색..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          필터
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>전체 티켓</CardTitle>
          <CardDescription>총 {ticketsData.length}건의 티켓</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticketsData.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                onClick={() => onTicketClick(ticket.id)}
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{ticket.id}</span>
                    <Badge variant={priorityColors[ticket.priority as keyof typeof priorityColors]}>
                      {ticket.priority}
                    </Badge>
                    <Badge variant={statusColors[ticket.status as keyof typeof statusColors]}>
                      {ticket.status}
                    </Badge>
                  </div>
                  <h3 className="font-medium">{ticket.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>고객: {ticket.customer}</span>
                    <span>담당자: {ticket.assignee}</span>
                    <span>생성일: {ticket.created}</span>
                    <span>기한: {ticket.dueDate}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{ticket.helpTopic}</div>
                  <div className="text-sm font-medium">{ticket.module}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}