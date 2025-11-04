import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { ArrowLeft, Search, Filter, Plus, Phone, Mail, Calendar, Settings } from "lucide-react"
import { Input } from "./ui/input"

interface StaffListProps {
  onNavigateBack: () => void
}

const staffData = [
  {
    id: "EMP-001",
    name: "박기사",
    role: "시니어 기사",
    department: "서비스센터",
    email: "park@company.com",
    phone: "010-1234-5678",
    avatar: "박",
    status: "활성",
    joinDate: "2020-03-15",
    speciality: "세탁기, 건조기",
    activeTickets: 8,
    completedTickets: 245,
    avgRating: 4.8
  },
  {
    id: "EMP-002",
    name: "김기사",
    role: "기사",
    department: "서비스센터",
    email: "kim@company.com",
    phone: "010-2345-6789",
    avatar: "김",
    status: "활성",
    joinDate: "2021-07-20",
    speciality: "냉장고, 에어컨",
    activeTickets: 6,
    completedTickets: 189,
    avgRating: 4.6
  },
  {
    id: "EMP-003",
    name: "이기사",
    role: "기사",
    department: "서비스센터",
    email: "lee@company.com",
    phone: "010-3456-7890",
    avatar: "이",
    status: "활성",
    joinDate: "2019-11-10",
    speciality: "전자제품 전반",
    activeTickets: 12,
    completedTickets: 320,
    avgRating: 4.9
  },
  {
    id: "EMP-004",
    name: "정기사",
    role: "주니어 기사",
    department: "서비스센터",
    email: "jung@company.com",
    phone: "010-4567-8901",
    avatar: "정",
    status: "활성",
    joinDate: "2023-01-25",
    speciality: "소형가전",
    activeTickets: 4,
    completedTickets: 87,
    avgRating: 4.4
  },
  {
    id: "EMP-005",
    name: "홍기사",
    role: "기사",
    department: "서비스센터",
    email: "hong@company.com",
    phone: "010-5678-9012",
    avatar: "홍",
    status: "휴가",
    joinDate: "2022-05-08",
    speciality: "주방가전",
    activeTickets: 0,
    completedTickets: 156,
    avgRating: 4.7
  },
  {
    id: "EMP-006",
    name: "강기사",
    role: "기사",
    department: "서비스센터",
    email: "kang@company.com",
    phone: "010-6789-0123",
    avatar: "강",
    status: "활성",
    joinDate: "2021-12-03",
    speciality: "음향기기",
    activeTickets: 7,
    completedTickets: 203,
    avgRating: 4.5
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "활성": return "default"
    case "휴가": return "secondary"
    case "비활성": return "destructive"
    default: return "outline"
  }
}

const getRoleColor = (role: string) => {
  switch (role) {
    case "시니어 기사": return "default"
    case "기사": return "secondary"
    case "주니어 기사": return "outline"
    default: return "outline"
  }
}

export function StaffList({ onNavigateBack }: StaffListProps) {
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
          <h1>직원 목록</h1>
          <p className="text-muted-foreground">
            서비스센터 직원들의 정보와 업무 현황을 관리하세요
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          새 직원 등록
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="직원 검색..." className="pl-10" />
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
                <p className="text-sm text-muted-foreground">전체 직원</p>
                <p className="text-2xl font-bold">{staffData.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">{staffData.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">활성 직원</p>
                <p className="text-2xl font-bold">{staffData.filter(s => s.status === "활성").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">{staffData.filter(s => s.status === "활성").length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">진행중 티켓</p>
                <p className="text-2xl font-bold">{staffData.reduce((sum, s) => sum + s.activeTickets, 0)}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 text-sm font-bold">{staffData.reduce((sum, s) => sum + s.activeTickets, 0)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">평균 평점</p>
                <p className="text-2xl font-bold">{(staffData.reduce((sum, s) => sum + s.avgRating, 0) / staffData.length).toFixed(1)}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-bold">★</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 직원 목록 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>직원 목록</CardTitle>
          <CardDescription>전체 {staffData.length}명의 직원</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>직원 정보</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>전문 분야</TableHead>
                <TableHead>티켓 현황</TableHead>
                <TableHead>평점</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>연락처</TableHead>
                <TableHead>작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((staff) => (
                <TableRow key={staff.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{staff.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{staff.name}</div>
                        <div className="text-sm text-muted-foreground">{staff.id}</div>
                        <div className="text-xs text-muted-foreground">입사: {staff.joinDate}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant={getRoleColor(staff.role)}>{staff.role}</Badge>
                      <div className="text-sm text-muted-foreground">{staff.department}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{staff.speciality}</div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">진행중: </span>
                        <span className="text-orange-600">{staff.activeTickets}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">완료: </span>
                        <span className="text-green-600">{staff.completedTickets}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{staff.avgRating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(staff.status)}>{staff.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        <span>{staff.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        <span>{staff.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
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