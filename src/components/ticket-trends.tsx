import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

const trendData = [
  { date: "01/10", created: 12, resolved: 8, pending: 4 },
  { date: "01/11", created: 15, resolved: 11, pending: 8 },
  { date: "01/12", created: 9, resolved: 13, pending: 4 },
  { date: "01/13", created: 18, resolved: 14, pending: 8 },
  { date: "01/14", created: 14, resolved: 16, pending: 6 },
  { date: "01/15", created: 11, resolved: 12, pending: 5 },
  { date: "01/16", created: 16, resolved: 10, pending: 11 }
]

const weeklyComparison = {
  thisWeek: 95,
  lastWeek: 88,
  change: 7.9
}

export function TicketTrends() {
  const isPositiveTrend = weeklyComparison.change > 0

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              티켓 동향
            </CardTitle>
            <CardDescription>최근 7일간 티켓 생성 및 해결 추이</CardDescription>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              {isPositiveTrend ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
              <span className={`text-sm font-medium ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
                {isPositiveTrend ? '+' : ''}{weeklyComparison.change}%
              </span>
            </div>
            <div className="text-xs text-muted-foreground">전주 대비</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 주요 지표 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">{weeklyComparison.thisWeek}</div>
              <div className="text-xs text-muted-foreground">이번주 총 티켓</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">
                {trendData.reduce((sum, day) => sum + day.resolved, 0)}
              </div>
              <div className="text-xs text-muted-foreground">해결된 티켓</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-orange-600">
                {trendData[trendData.length - 1].pending}
              </div>
              <div className="text-xs text-muted-foreground">대기중 티켓</div>
            </div>
          </div>

          {/* 차트 */}
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={11}
                  tick={{ fontSize: 11 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={11}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="created"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                  name="생성"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stackId="2"
                  stroke="#10b981"
                  fill="#10b981" 
                  fillOpacity={0.6}
                  name="해결"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* 범례 */}
          <div className="flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-blue-500" />
              <span>생성된 티켓</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-green-500" />
              <span>해결된 티켓</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}