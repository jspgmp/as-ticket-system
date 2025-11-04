import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { ArrowLeft, Search, Filter, Plus, Phone, Mail, MapPin, Calendar, Eye } from "lucide-react"
import { Input } from "./ui/input"

interface CustomerListProps {
  onNavigateBack: () => void
  onCustomerClick: (customerId: string) => void
}

const customerData = [
  {
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
    status: "활성"
  },
  {
    id: "CUST-002",
    name: "이영희",
    email: "younghee.lee@email.com",
    phone: "010-2345-6789",
    address: "서울시 서초구 강남대로 456",
    avatar: "이",
    customerType: "일반",
    registrationDate: "2023-08-22",
    lastContact: "2024-01-14",
    totalTickets: 5,
    activeTickets: 1,
    totalPurchases: 1,
    totalSpent: "1,200,000원",
    status: "활성"
  },
  {
    id: "CUST-003",
    name: "장민호",
    email: "minho.jang@email.com",
    phone: "010-3456-7890",
    address: "경기도 성남시 분당구 정자로 789",
    avatar: "장",
    customerType: "일반",
    registrationDate: "2022-12-10",
    lastContact: "2024-01-13",
    totalTickets: 12,
    activeTickets: 1,
    totalPurchases: 3,
    totalSpent: "4,800,000원",
    status: "활성"
  },
  {
    id: "CUST-004",
    name: "박수진",
    email: "sujin.park@email.com",
    phone: "010-4567-8901",
    address: "서울시 마포구 홍대로 321",
    avatar: "박",
    customerType: "VIP",
    registrationDate: "2021-03-28",
    lastContact: "2024-01-12",
    totalTickets: 15,
    activeTickets: 1,
    totalPurchases: 5,
    totalSpent: "8,900,000원",
    status: "활성"
  },
  {
    id: "CUST-005",
    name: "최동욱",
    email: "dongwook.choi@email.com",
    phone: "010-5678-9012",
    address: "서울시 종로구 종로 654",
    avatar: "최",
    customerType: "일반",
    registrationDate: "2023-11-05",
    lastContact: "2024-01-11",
    totalTickets: 3,
    activeTickets: 0,
    totalPurchases: 1,
    totalSpent: "950,000원",
    status: "활성"
  },
  {
    id: "CUST-006",
    name: "윤성호",
    email: "sungho.yoon@email.com",
    phone: "010-6789-0123",
    address: "인천시 연수구 송도대로 987",
    avatar: "윤",
    customerType: "일반",
    registrationDate: "2024-01-02",
    lastContact: "2024-01-10",
    totalTickets: 1,
    activeTickets: 1,
    totalPurchases: 1,
    totalSpent: "780,000원",
    status: "신규"
  }
]

const getCustomerTypeColor = (type: string) => {
  switch (type) {
    case "VIP": return "destructive"
    case "프리미엄": return "default"
    case "일반": return "secondary"
    default: return "outline"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "활성": return "default"
    case "신규": return "secondary"
    case "비활성": return "destructive"
    default: return "outline"
  }
}

export function CustomerList({ onNavigateBack, onCustomerClick }: CustomerListProps) {
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
          <h1>고객 목록</h1>
          <p className="text-muted-foreground">
            등록된 고객 정보와 구매 이력을 관리하세요
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          새 고객 등록
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="고객 검색..." className="pl-10" />
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
                <p className="text-sm text-muted-foreground">전체 고객</p>
                <p className="text-2xl font-bold">{customerData.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">{customerData.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">VIP 고객</p>
                <p className="text-2xl font-bold">{customerData.filter(c => c.customerType === "VIP").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm font-bold">★</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">진행중 티켓</p>
                <p className="text-2xl font-bold">{customerData.reduce((sum, c) => sum + c.activeTickets, 0)}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">{customerData.reduce((sum, c) => sum + c.activeTickets, 0)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">신규 고객</p>
                <p className="text-2xl font-bold">{customerData.filter(c => c.status === "신규").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">N</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 고객 목록 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>고객 목록</CardTitle>
          <CardDescription>전체 {customerData.length}명의 고객</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>고객 정보</TableHead>
                <TableHead>고객 유형</TableHead>
                <TableHead>연락처 & 주소</TableHead>
                <TableHead>티켓 현황</TableHead>
                <TableHead>구매 정보</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => onCustomerClick(customer.id)}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{customer.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-muted-foreground">{customer.id}</div>
                        <div className="text-xs text-muted-foreground">가입: {customer.registrationDate}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant={getCustomerTypeColor(customer.customerType)}>{customer.customerType}</Badge>
                      <div className="text-xs text-muted-foreground">마지막 연락: {customer.lastContact}</div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        <span>{customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{customer.email}</span>
                      </div>
                      <div className="flex items-start gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{customer.address}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">전체: </span>
                        <span>{customer.totalTickets}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">진행중: </span>
                        <span className="text-orange-600">{customer.activeTickets}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">구매: </span>
                        <span>{customer.totalPurchases}회</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">총액: </span>
                        <span className="text-green-600">{customer.totalSpent}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(customer.status)}>{customer.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          onCustomerClick(customer.id)
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}