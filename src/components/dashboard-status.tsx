import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"
import {
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  MessageSquare,
  UserCheck,
  Timer,
  Target,
  Award,
  Activity,
  Calendar
} from "lucide-react"

const systemStatus = [
  {
    title: "시스템 상태",
    status: "정상",
    color: "bg-green-500",
    icon: CheckCircle
  },
  {
    title: "데이터베이스",
    status: "정상",
    color: "bg-green-500",
    icon: CheckCircle
  },
  {
    title: "API 서버",
    status: "정상",
    color: "bg-green-500",
    icon: CheckCircle
  },
  {
    title: "채팅 서비스",
    status: "지연",
    color: "bg-yellow-500",
    icon: AlertTriangle
  }
]

const performanceMetrics = [
  {
    title: "서버 응답 시간",
    value: "245ms",
    target: "< 500ms",
    percentage: 51,
    status: "good"
  },
  {
    title: "시스템 가동률",
    value: "99.9%",
    target: "> 99.5%",
    percentage: 99.9,
    status: "excellent"
  },
  {
    title: "메모리 사용률",
    value: "67%",
    target: "< 80%",
    percentage: 67,
    status: "good"
  },
  {
    title: "디스크 사용률",
    value: "43%",
    target: "< 90%",
    percentage: 43,
    status: "excellent"
  }
]

const teamStatus = [
  {
    name: "고객지원팀 A",
    onlineAgents: 8,
    totalAgents: 10,
    activeChats: 23,
    avgResponseTime: "2.1분"
  },
  {
    name: "고객지원팀 B",
    onlineAgents: 6,
    totalAgents: 8,
    activeChats: 18,
    avgResponseTime: "3.2분"
  },
  {
    name: "기술지원팀",
    onlineAgents: 4,
    totalAgents: 5,
    activeChats: 9,
    avgResponseTime: "5.8분"
  }
]

const realtimeStats = [
  {
    title: "현재 활성 티켓",
    value: "247",
    icon: Activity,
    color: "text-blue-600"
  },
  {
    title: "온라인 상담원",
    value: "18",
    icon: UserCheck,
    color: "text-green-600"
  },
  {
    title: "실시간 채팅",
    value: "50",
    icon: MessageSquare,
    color: "text-purple-600"
  },
  {
    title: "대기 중인 티켓",
    value: "12",
    icon: Timer,
    color: "text-orange-600"
  }
]

export function DashboardStatus() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">대시보드 현황</h1>
          <p className="text-muted-foreground">
            시스템 상태, 팀 현황 및 실시간 메트릭 모니터링
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>마지막 업데이트: {new Date().toLocaleString('ko-KR')}</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {realtimeStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              시스템 상태
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemStatus.map((item) => (
              <div key={item.title} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="font-medium">{item.title}</span>
                </div>
                <Badge variant={item.status === "정상" ? "default" : "secondary"}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              성능 메트릭
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceMetrics.map((metric) => (
              <div key={metric.title} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{metric.title}</span>
                  <span className="text-muted-foreground">{metric.target}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={metric.percentage} className="flex-1" />
                  <span className="text-sm font-medium w-16">{metric.value}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            팀 현황
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamStatus.map((team, index) => (
              <div key={team.name}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
                  <div>
                    <h4 className="font-medium">{team.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {team.onlineAgents}/{team.totalAgents} 온라인
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      {team.onlineAgents}명 활성
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">
                      {team.activeChats}개 채팅
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">
                      평균 {team.avgResponseTime}
                    </span>
                  </div>
                </div>
                {index < teamStatus.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">티켓 처리 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">신규</span>
                <span className="font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">진행중</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">대기중</span>
                <span className="font-medium">44</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">완료</span>
                <span className="font-medium">289</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">고객 만족도</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">94%</div>
                <p className="text-sm text-muted-foreground">전체 평균</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>매우 만족</span>
                  <span>68%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>만족</span>
                  <span>26%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>보통</span>
                  <span>4%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>불만족</span>
                  <span>2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">오늘의 성과</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-600" />
                <span className="text-sm">해결된 티켓: 43개</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm">응답시간 개선: 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span className="text-sm">목표 달성률: 87%</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                <span className="text-sm">신규 고객: 12명</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}