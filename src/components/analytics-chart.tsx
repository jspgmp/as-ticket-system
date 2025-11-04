import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts"

const ticketTrendData = [
  { month: "1월", opened: 45, resolved: 42 },
  { month: "2월", opened: 52, resolved: 48 },
  { month: "3월", opened: 61, resolved: 58 },
  { month: "4월", opened: 58, resolved: 55 },
  { month: "5월", opened: 67, resolved: 63 },
  { month: "6월", opened: 71, resolved: 69 },
]

const responseTimeData = [
  { day: "월", avgHours: 2.1 },
  { day: "화", avgHours: 1.8 },
  { day: "수", avgHours: 2.3 },
  { day: "목", avgHours: 1.9 },
  { day: "금", avgHours: 2.5 },
  { day: "토", avgHours: 3.1 },
  { day: "일", avgHours: 2.8 },
]

const chartConfig = {
  opened: {
    label: "등록됨",
    color: "#3b82f6",
  },
  resolved: {
    label: "해결됨",
    color: "#10b981",
  },
  avgHours: {
    label: "평균 시간",
    color: "#8b5cf6",
  },
} satisfies ChartConfig

export function AnalyticsChart() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>티켓 동향</CardTitle>
          <CardDescription>월별 등록 대 해결 티켓</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart
              data={ticketTrendData}
              margin={{
                left: 12,
                right: 12,
                top: 12,
                bottom: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="opened"
                type="monotone"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="resolved"
                type="monotone"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>응답 시간</CardTitle>
          <CardDescription>요일별 평균 응답 시간</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <BarChart
              data={responseTimeData}
              margin={{
                left: 12,
                right: 12,
                top: 12,
                bottom: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="avgHours" fill="#8b5cf6" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}