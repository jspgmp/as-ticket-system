import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const tickets = [
  {
    id: "#TK-001",
    customer: {
      name: "김지영",
      email: "jiyoung.kim@example.com",
      avatar: "김"
    },
    subject: "모바일 앱 로그인 문제",
    priority: "높음",
    status: "열림",
    assignee: "이민수",
    created: "2시간 전"
  },
  {
    id: "#TK-002",
    customer: {
      name: "박철수",
      email: "chulsoo.park@example.com",
      avatar: "박"
    },
    subject: "구독 요금 문의",
    priority: "보통",
    status: "진행 중",
    assignee: "정유진",
    created: "4시간 전"
  },
  {
    id: "#TK-003",
    customer: {
      name: "최수연",
      email: "suyeon.choi@example.com",
      avatar: "최"
    },
    subject: "대시보드 기능 요청",
    priority: "낮음",
    status: "열림",
    assignee: "배정 대기",
    created: "6시간 전"
  },
  {
    id: "#TK-004",
    customer: {
      name: "한동훈",
      email: "donghoon.han@example.com",
      avatar: "한"
    },
    subject: "비밀번호 재설정 오류",
    priority: "높음",
    status: "해결됨",
    assignee: "이민수",
    created: "1일 전"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "높음": return "destructive"
    case "보통": return "default"
    case "낮음": return "secondary"
    default: return "default"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "열림": return "destructive"
    case "진행 중": return "default"
    case "해결됨": return "secondary"
    default: return "default"
  }
}

export function RecentTickets({ onViewAllTickets }: { onViewAllTickets: () => void }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>최근 티켓</CardTitle>
            <CardDescription>최신 고객 지원 요청</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={onViewAllTickets}>
            모든 티켓 보기
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>고객</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>우선순위</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>담당자</TableHead>
              <TableHead>생성일</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{ticket.customer.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{ticket.customer.name}</div>
                      <div className="text-sm text-muted-foreground">{ticket.customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{ticket.id}</div>
                    <div className="text-sm text-muted-foreground">{ticket.subject}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                </TableCell>
                <TableCell>{ticket.assignee}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{ticket.created}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">보기</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}