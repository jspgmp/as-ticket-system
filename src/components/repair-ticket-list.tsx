import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowLeft, Search, Filter, Wrench, Clock, User, Package } from "lucide-react"
import { Input } from "./ui/input"

interface RepairTicketListProps {
  onTicketClick: (ticketId: string) => void
  onNavigateBack: () => void
}

const repairTicketsData = [
  {
    id: "R-2024-001",
    title: "ABKO K561 키보드 스위치 교체",
    customer: "김철수",
    module: "수리",
    priority: "높음",
    status: "수리중",
    assignedTechnician: "김영수",
    technicianArea: "키보드 전문",
    created: "2024-01-16",
    estimatedCompletion: "2024-01-18",
    productType: "키보드",
    repairType: "스위치 교체"
  },
  {
    id: "R-2024-002",
    title: "ABKO A800 마우스 센서 수리",
    customer: "이영희",
    module: "수리",
    priority: "보통",
    status: "대기중",
    assignedTechnician: "이민호",
    technicianArea: "마우스 전문",
    created: "2024-01-15",
    estimatedCompletion: "2024-01-19",
    productType: "마우스",
    repairType: "센서 교체"
  },
  {
    id: "R-2024-003",
    title: "ABKO 모니터 백라이트 수리",
    customer: "장민호",
    module: "수리",
    priority: "긴급",
    status: "완료",
    assignedTechnician: "박수진",
    technicianArea: "모니터 전문",
    created: "2024-01-14",
    estimatedCompletion: "2024-01-17",
    productType: "모니터",
    repairType: "백라이트 교체"
  },
  {
    id: "R-2024-004",
    title: "ABKO 헤드셋 마이크 수리",
    customer: "박철민",
    module: "수리",
    priority: "보통",
    status: "진단중",
    assignedTechnician: "최동욱",
    technicianArea: "종합 수리",
    created: "2024-01-17",
    estimatedCompletion: "2024-01-20",
    productType: "헤드셋",
    repairType: "마이크 수리"
  },
  {
    id: "R-2024-005",
    title: "ABKO 게이밍 키보드 LED 불량",
    customer: "정수민",
    module: "수리",
    priority: "낮음",
    status: "수리중",
    assignedTechnician: "김영수",
    technicianArea: "키보드 전문",
    created: "2024-01-16",
    estimatedCompletion: "2024-01-21",
    productType: "키보드",
    repairType: "LED 교체"
  }
]

const priorityColors = {
  "긴급": "destructive",
  "높음": "default",
  "보통": "secondary",
  "낮음": "outline"
} as const

const statusColors = {
  "대기중": "outline",
  "진단중": "secondary",
  "수리중": "default",
  "완료": "secondary",
  "보류": "destructive"
} as const

const productTypeColors = {
  "키보드": "default",
  "마우스": "secondary",
  "모니터": "outline",
  "헤드셋": "destructive"
} as const

export function RepairTicketList({ onTicketClick, onNavigateBack }: RepairTicketListProps) {
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
          <h1>티켓 목록 (수리)</h1>
          <p className="text-muted-foreground">
            할당받은 수리 작업을 확인하고 관리하세요
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-600 text-white rounded-md">
            <Wrench className="h-4 w-4" />
            <span className="font-medium">수리 모듈</span>
          </div>
        </div>
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

      {/* 요약 카드 */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">전체 수리 작업</p>
                <p className="text-2xl font-bold">{repairTicketsData.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Wrench className="h-4 w-4 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">수리중</p>
                <p className="text-2xl font-bold">{repairTicketsData.filter(t => t.status === "수리중").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Package className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">대기중</p>
                <p className="text-2xl font-bold">{repairTicketsData.filter(t => t.status === "대기중").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-4 w-4 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">완료</p>
                <p className="text-2xl font-bold">{repairTicketsData.filter(t => t.status === "완료").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 수리 티켓 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>수리 작업 목록</CardTitle>
          <CardDescription>총 {repairTicketsData.length}건의 수리 작업</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {repairTicketsData.map((ticket) => (
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
                    <Badge variant={productTypeColors[ticket.productType as keyof typeof productTypeColors]}>
                      {ticket.productType}
                    </Badge>
                  </div>
                  <h3 className="font-medium">{ticket.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {ticket.customer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wrench className="h-3 w-3" />
                      {ticket.assignedTechnician} ({ticket.technicianArea})
                    </span>
                    <span className="flex items-center gap-1">
                      <Package className="h-3 w-3" />
                      {ticket.repairType}
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-sm text-muted-foreground">생성일</div>
                  <div className="text-sm font-medium">{ticket.created}</div>
                  <div className="text-sm text-muted-foreground">예상 완료일</div>
                  <div className="text-sm font-medium">{ticket.estimatedCompletion}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}