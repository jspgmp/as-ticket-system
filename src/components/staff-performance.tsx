import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const staffPerformanceData = [
  {
    id: "EMP-001",
    name: "박기사",
    avatar: "박",
    activeTickets: 8,
    completedToday: 3,
    completedWeek: 15,
    completedMonth: 45,
    avgRating: 4.8,
    efficiency: 92,
    status: "활성"
  },
  {
    id: "EMP-002", 
    name: "김기사",
    avatar: "김",
    activeTickets: 6,
    completedToday: 2,
    completedWeek: 12,
    completedMonth: 38,
    avgRating: 4.6,
    efficiency: 88,
    status: "활성"
  },
  {
    id: "EMP-003",
    name: "이기사", 
    avatar: "이",
    activeTickets: 12,
    completedToday: 4,
    completedWeek: 18,
    completedMonth: 52,
    avgRating: 4.9,
    efficiency: 95,
    status: "활성"
  },
  {
    id: "EMP-004",
    name: "정기사",
    avatar: "정",
    activeTickets: 4,
    completedToday: 1,
    completedWeek: 8,
    completedMonth: 22,
    avgRating: 4.4,
    efficiency: 78,
    status: "활성"
  },
  {
    id: "EMP-005",
    name: "홍기사",
    avatar: "홍",
    activeTickets: 0,
    completedToday: 0,
    completedWeek: 0,
    completedMonth: 15,
    avgRating: 4.7,
    efficiency: 85,
    status: "휴가"
  }
]

const chartData = staffPerformanceData
  .filter(staff => staff.status === "활성")
  .map(staff => ({
    name: staff.name,
    active: staff.activeTickets,
    completed: staff.completedWeek,
    efficiency: staff.efficiency
  }))

const pieData = [
  { name: "진행중", value: staffPerformanceData.reduce((sum, s) => sum + s.activeTickets, 0), color: "#f97316" },
  { name: "완료 (이번주)", value: staffPerformanceData.reduce((sum, s) => sum + s.completedWeek, 0), color: "#10b981" }
]

const COLORS = ["#f97316", "#10b981"]

export function StaffPerformance() {
  const totalActiveTickets = staffPerformanceData.reduce((sum, s) => sum + s.activeTickets, 0)
  const totalCompletedToday = staffPerformanceData.reduce((sum, s) => sum + s.completedToday, 0)
  const avgEfficiency = Math.round(staffPerformanceData.reduce((sum, s) => sum + s.efficiency, 0) / staffPerformanceData.length)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>직원별 티켓 처리 현황</CardTitle>
          <CardDescription>실시간 업무 처리 상황 및 성과 지표</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 요약 통계 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{totalActiveTickets}</div>
              <div className="text-sm text-muted-foreground">진행중</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{totalCompletedToday}</div>
              <div className="text-sm text-muted-foreground">오늘 완료</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{avgEfficiency}%</div>
              <div className="text-sm text-muted-foreground">평균 효율</div>
            </div>
          </div>

          {/* 직원별 상세 현황 */}
          <div className="space-y-4">
            <h4 className="font-medium">직원별 현황</h4>
            <div className="space-y-3">
              {staffPerformanceData.map((staff) => (
                <div key={staff.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-sm">{staff.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{staff.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {staff.status === "활성" ? `진행중 ${staff.activeTickets}건` : staff.status}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{staff.completedToday}건</div>
                      <div className="text-xs text-muted-foreground">오늘</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">★{staff.avgRating}</div>
                      <div className="text-xs text-muted-foreground">평점</div>
                    </div>
                    <div className="w-16">
                      <div className="text-xs text-muted-foreground mb-1">{staff.efficiency}%</div>
                      <Progress value={staff.efficiency} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 차트 영역 */}
          <div className="space-y-4">
            <h4 className="font-medium">주간 처리 현황</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar 
                    dataKey="active" 
                    fill="#f97316" 
                    name="진행중"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="completed" 
                    fill="#10b981" 
                    name="완료"
                    radius={[2, 2, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 원형 차트 */}
          <div className="space-y-4">
            <h4 className="font-medium">티켓 분포</h4>
            <div className="flex items-center justify-between">
              <div className="h-32 w-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={20}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 ml-4 space-y-2">
                {pieData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}건</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}