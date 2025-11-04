import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { ArrowLeft, Search, Filter, Plus, Calendar, Clock, User, CheckCircle2, AlertCircle, Circle } from "lucide-react"
import { Input } from "./ui/input"
import { Progress } from "./ui/progress"

interface TaskListProps {
  onNavigateBack: () => void
}

const taskData = [
  {
    id: "TASK-001",
    title: "월별 서비스 보고서 작성",
    description: "1월 A/S 서비스 현황 보고서 작성 및 분석",
    assignee: "박기사",
    assigneeAvatar: "박",
    category: "보고서",
    priority: "높음",
    status: "진행중",
    progress: 75,
    dueDate: "2024-01-20",
    createdDate: "2024-01-10",
    estimatedHours: 8,
    spentHours: 6
  },
  {
    id: "TASK-002",
    title: "고객 만족도 조사 실시",
    description: "최근 3개월 A/S 완료 고객 대상 만족도 조사",
    assignee: "김기사",
    assigneeAvatar: "김",
    category: "조사", 
    priority: "보통",
    status: "대기",
    progress: 0,
    dueDate: "2024-01-25",
    createdDate: "2024-01-12",
    estimatedHours: 12,
    spentHours: 0
  },
  {
    id: "TASK-003",
    title: "신규 기사 교육 프로그램 개발",
    description: "신입 기사를 위한 체계적인 교육 과정 설계",
    assignee: "이기사",
    assigneeAvatar: "이",
    category: "교육",
    priority: "높음",
    status: "완료",
    progress: 100,
    dueDate: "2024-01-15",
    createdDate: "2024-01-05",
    estimatedHours: 20,
    spentHours: 18
  },
  {
    id: "TASK-004",
    title: "장비 점검 및 정비",
    description: "서비스센터 내 모든 장비 점검 및 정기 정비",
    assignee: "정기사",
    assigneeAvatar: "정",
    category: "정비",
    priority: "긴급",
    status: "진행중",
    progress: 30,
    dueDate: "2024-01-18",
    createdDate: "2024-01-08",
    estimatedHours: 16,
    spentHours: 5
  },
  {
    id: "TASK-005",
    title: "고객 데이터베이스 정리",
    description: "중복 고객 정보 정리 및 데이터 정확성 검증",
    assignee: "홍기사",
    assigneeAvatar: "홍",
    category: "데이터",
    priority: "낮음",
    status: "보류",
    progress: 10,
    dueDate: "2024-01-30",
    createdDate: "2024-01-14",
    estimatedHours: 10,
    spentHours: 1
  },
  {
    id: "TASK-006",
    title: "부품 재고 관리 시스템 업데이트",
    description: "부품 재고 추적 및 자동 주문 시스템 개선",
    assignee: "강기사",
    assigneeAvatar: "강",
    category: "시스템",
    priority: "보통",
    status: "검토",
    progress: 50,
    dueDate: "2024-01-22",
    createdDate: "2024-01-09",
    estimatedHours: 15,
    spentHours: 7
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "긴급": return "destructive"
    case "높음": return "secondary"
    case "보통": return "outline"
    case "낮음": return "outline"
    default: return "outline"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "완료": return "default" 
    case "진행중": return "secondary"
    case "대기": return "outline"
    case "보류": return "destructive"
    case "검토": return "outline"
    default: return "outline"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "완료": return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "진행중": return <Circle className="h-4 w-4 text-blue-600" />
    case "대기": return <Clock className="h-4 w-4 text-yellow-600" />
    case "보류": return <AlertCircle className="h-4 w-4 text-red-600" />
    case "검토": return <Circle className="h-4 w-4 text-purple-600" />
    default: return <Circle className="h-4 w-4 text-gray-600" />
  }
}

export function TaskList({ onNavigateBack }: TaskListProps) {
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
          <h1>태스크 목록</h1>
          <p className="text-muted-foreground">
            팀의 업무와 프로젝트 진행 상황을 관리하세요
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          새 태스크 생성
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="태스크 검색..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          필터
        </Button>
      </div>

      {/* 요약 카드 */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">전체 태스크</p>
                <p className="text-2xl font-bold">{taskData.length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">{taskData.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">진행중</p>
                <p className="text-2xl font-bold">{taskData.filter(t => t.status === "진행중").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Circle className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">완료</p>
                <p className="text-2xl font-bold">{taskData.filter(t => t.status === "완료").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">긴급</p>
                <p className="text-2xl font-bold">{taskData.filter(t => t.priority === "긴급").length}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">평균 진행률</p>
                <p className="text-2xl font-bold">{Math.round(taskData.reduce((sum, t) => sum + t.progress, 0) / taskData.length)}%</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-sm font-bold">%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 태스크 목록 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>태스크 목록</CardTitle>
          <CardDescription>전체 {taskData.length}개의 태스크</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>태스크 정보</TableHead>
                <TableHead>담당자</TableHead>
                <TableHead>우선순위</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>진행률</TableHead>
                <TableHead>시간</TableHead>
                <TableHead>기한</TableHead>
                <TableHead>작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taskData.map((task) => (
                <TableRow key={task.id} className="hover:bg-muted/50">
                  <TableCell className="max-w-xs">
                    <div className="space-y-1">
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-2">{task.description}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{task.id}</span>
                        <Badge variant="outline" className="text-xs">{task.category}</Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{task.assigneeAvatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{task.assignee}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(task.status)}
                      <Badge variant={getStatusColor(task.status)}>{task.status}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2 min-w-24">
                      <div className="flex items-center justify-between text-sm">
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-muted-foreground">소요: </span>
                        <span>{task.spentHours}h</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">예상: </span>
                        <span>{task.estimatedHours}h</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{task.dueDate}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">생성: {task.createdDate}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <User className="h-4 w-4" />
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