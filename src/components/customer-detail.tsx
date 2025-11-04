import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Edit, MessageSquare, ShoppingBag, Ticket, User, Clock } from "lucide-react"

interface CustomerDetailProps {
  customerId: string
  onNavigateBack: () => void
}

const dummyCustomer = {
  id: "CUST-001",
  name: "김철수",
  email: "chulsoo.kim@email.com",
  phone: "010-1234-5678",
  address: "서울시 강남구 테헤란로 123",
  avatar: "김",
  customerType: "프리미엄",
  registrationDate: "2023-05-15",
  lastContact: "2024-01-15",
  totalTickets: 8,
  activeTickets: 2,
  totalPurchases: 2,
  totalSpent: "3,500,000원",
  status: "활성",
  birthDate: "1985-03-22",
  company: "테크 솔루션즈",
  position: "개발팀장",
  preferredLanguage: "한국어",
  timezone: "KST",
  notes: "기술적 문의가 많은 고객, 신속한 대응 필요"
}

const recentTickets = [
  {
    id: "TICK-0011",
    title: "제품 결함 신고",
    status: "진행중",
    priority: "높음",
    createdDate: "2024-01-15",
    assignedTo: "이담당",
    category: "기술지원"
  },
  {
    id: "TICK-0008",
    title: "기능 개선 요청",
    status: "진행중",
    priority: "보통",
    createdDate: "2024-01-10",
    assignedTo: "박지원",
    category: "기능개선"
  },
  {
    id: "TICK-0005",
    title: "계정 로그인 문제",
    status: "완료",
    priority: "높음",
    createdDate: "2024-01-08",
    assignedTo: "김지수",
    category: "계정문제"
  },
  {
    id: "TICK-0003",
    title: "사용법 문의",
    status: "완료",
    priority: "낮음",
    createdDate: "2024-01-05",
    assignedTo: "이담당",
    category: "일반문의"
  }
]

const purchaseHistory = [
  {
    id: "ORDER-001",
    product: "프리미엄 라이센스",
    amount: "2,500,000원",
    date: "2023-12-20",
    status: "완료",
    paymentMethod: "법인카드"
  },
  {
    id: "ORDER-002",
    product: "확장 모듈",
    amount: "1,000,000원",
    date: "2023-06-15",
    status: "완료",
    paymentMethod: "계좌이체"
  }
]

const communications = [
  {
    id: "COMM-001",
    type: "이메일",
    subject: "제품 업데이트 안내",
    date: "2024-01-15 14:30",
    direction: "발신",
    staff: "이담당"
  },
  {
    id: "COMM-002",
    type: "전화",
    subject: "기술 지원 요청",
    date: "2024-01-14 10:15",
    direction: "수신",
    staff: "박지원"
  },
  {
    id: "COMM-003",
    type: "채팅",
    subject: "라이센스 갱신 문의",
    date: "2024-01-12 16:45",
    direction: "수신",
    staff: "김지수"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "진행중": return "default"
    case "완료": return "secondary"
    case "취소": return "destructive"
    default: return "outline"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "높음": return "destructive"
    case "보통": return "default"
    case "낮음": return "secondary"
    default: return "outline"
  }
}

const getCustomerTypeColor = (type: string) => {
  switch (type) {
    case "VIP": return "destructive"
    case "프리미엄": return "default"
    case "일반": return "secondary"
    default: return "outline"
  }
}

export function CustomerDetail({ customerId, onNavigateBack }: CustomerDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onNavigateBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          고객 목록으로 돌아가기
        </Button>
      </div>

      {/* 고객 기본 정보 헤더 */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">{dummyCustomer.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold">{dummyCustomer.name}</h1>
                  <Badge variant={getCustomerTypeColor(dummyCustomer.customerType)}>
                    {dummyCustomer.customerType}
                  </Badge>
                  <Badge variant="outline">{dummyCustomer.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {dummyCustomer.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      가입: {dummyCustomer.registrationDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      마지막 접촉: {dummyCustomer.lastContact}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>{dummyCustomer.phone}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>{dummyCustomer.email}</span>
                  </div>
                  <div className="flex items-start gap-1 text-sm">
                    <MapPin className="h-4 w-4 mt-0.5" />
                    <span>{dummyCustomer.address}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                정보 수정
              </Button>
              <Button size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                연락하기
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 요약 통계 */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">총 티켓</p>
                <p className="text-2xl font-bold">{dummyCustomer.totalTickets}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Ticket className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">진행중 티켓</p>
                <p className="text-2xl font-bold text-orange-600">{dummyCustomer.activeTickets}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Clock className="h-4 w-4 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">총 구매</p>
                <p className="text-2xl font-bold">{dummyCustomer.totalPurchases}회</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <ShoppingBag className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">총 구매액</p>
                <p className="text-2xl font-bold text-green-600">{dummyCustomer.totalSpent}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">₩</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 탭 섹션 */}
      <Tabs defaultValue="details" className="space-y-4">
        <TabsList className="grid w-full md:grid-cols-4">
          <TabsTrigger value="details">상세 정보</TabsTrigger>
          <TabsTrigger value="tickets">티켓 이력</TabsTrigger>
          <TabsTrigger value="purchases">구매 이력</TabsTrigger>
          <TabsTrigger value="communications">소통 이력</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>개인 정보</CardTitle>
                <CardDescription>고객의 기본 정보</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">생년월일</p>
                    <p className="text-sm">{dummyCustomer.birthDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">회사</p>
                    <p className="text-sm">{dummyCustomer.company}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">직책</p>
                    <p className="text-sm">{dummyCustomer.position}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">선호 언어</p>
                    <p className="text-sm">{dummyCustomer.preferredLanguage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">시간대</p>
                    <p className="text-sm">{dummyCustomer.timezone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>고객 메모</CardTitle>
                <CardDescription>고객 관련 중요 정보</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{dummyCustomer.notes}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>티켓 이력</CardTitle>
              <CardDescription>고객이 생성한 모든 티켓</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>티켓 ID</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>우선순위</TableHead>
                    <TableHead>담당자</TableHead>
                    <TableHead>분류</TableHead>
                    <TableHead>생성일</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      </TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                      <TableCell>{ticket.category}</TableCell>
                      <TableCell>{ticket.createdDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>구매 이력</CardTitle>
              <CardDescription>고객의 모든 구매 내역</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>주문 ID</TableHead>
                    <TableHead>제품</TableHead>
                    <TableHead>금액</TableHead>
                    <TableHead>결제 방법</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>주문일</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseHistory.map((purchase) => (
                    <TableRow key={purchase.id}>
                      <TableCell className="font-medium">{purchase.id}</TableCell>
                      <TableCell>{purchase.product}</TableCell>
                      <TableCell className="text-green-600 font-medium">{purchase.amount}</TableCell>
                      <TableCell>{purchase.paymentMethod}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{purchase.status}</Badge>
                      </TableCell>
                      <TableCell>{purchase.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>소통 이력</CardTitle>
              <CardDescription>고객과의 모든 대화 기록</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>유형</TableHead>
                    <TableHead>제목/내용</TableHead>
                    <TableHead>방향</TableHead>
                    <TableHead>담당자</TableHead>
                    <TableHead>일시</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {communications.map((comm) => (
                    <TableRow key={comm.id}>
                      <TableCell>
                        <Badge variant="outline">{comm.type}</Badge>
                      </TableCell>
                      <TableCell>{comm.subject}</TableCell>
                      <TableCell>
                        <Badge variant={comm.direction === "발신" ? "default" : "secondary"}>
                          {comm.direction}
                        </Badge>
                      </TableCell>
                      <TableCell>{comm.staff}</TableCell>
                      <TableCell>{comm.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}