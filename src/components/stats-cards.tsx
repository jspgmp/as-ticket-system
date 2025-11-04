import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const stats = [
  {
    title: "열린 티켓",
    value: "247",
    change: "+12%",
    trend: "up",
    description: "지난주 대비"
  },
  {
    title: "오늘 해결됨",
    value: "43",
    change: "+8%",
    trend: "up",
    description: "어제 대비"
  },
  {
    title: "평균 응답 시간",
    value: "2.4시간",
    change: "-15%",
    trend: "down",
    description: "지난주 대비"
  },
  {
    title: "고객 만족도",
    value: "94%",
    change: "0%",
    trend: "neutral",
    description: "지난달 대비"
  }
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">{stat.title}</CardTitle>
            {stat.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600" />}
            {stat.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600" />}
            {stat.trend === "neutral" && <Minus className="h-4 w-4 text-gray-600" />}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={`${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                {stat.change}
              </span>
              {" "}{stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}