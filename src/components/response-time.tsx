import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Clock, Target, Zap, Timer } from "lucide-react"

const responseTimeData = {
  averageFirstResponse: "2.4시간",
  averageResolution: "18.6시간", 
  slaCompliance: 92,
  targetFirstResponse: "4시간",
  targetResolution: "24시간",
  fastestResponse: "12분",
  slowestResponse: "6.2시간"
}

const performanceByPriority = [
  {
    priority: "긴급",
    avgResponse: "18분",
    slaTarget: "1시간",
    compliance: 98,
    color: "bg-red-500"
  },
  {
    priority: "높음", 
    avgResponse: "1.8시간",
    slaTarget: "4시간",
    compliance: 95,
    color: "bg-orange-500"
  },
  {
    priority: "보통",
    avgResponse: "3.2시간", 
    slaTarget: "8시간",
    compliance: 88,
    color: "bg-blue-500"
  },
  {
    priority: "낮음",
    avgResponse: "6.1시간",
    slaTarget: "24시간", 
    compliance: 85,
    color: "bg-gray-500"
  }
]

const getComplianceColor = (compliance: number) => {
  if (compliance >= 95) return "text-green-600"
  if (compliance >= 85) return "text-yellow-600"
  return "text-red-600"
}

const getComplianceText = (compliance: number) => {
  if (compliance >= 95) return "우수"
  if (compliance >= 85) return "양호"
  return "개선필요"
}

export function ResponseTime() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          응답시간 분석
        </CardTitle>
        <CardDescription>고객 대응 속도 및 SLA 준수율</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* 주요 응답시간 지표 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-3 w-3" />
                평균 최초 응답
              </div>
              <div className="text-xl font-semibold">{responseTimeData.averageFirstResponse}</div>
              <div className="text-xs text-muted-foreground">
                목표: {responseTimeData.targetFirstResponse}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-3 w-3" />
                평균 해결시간
              </div>
              <div className="text-xl font-semibold">{responseTimeData.averageResolution}</div>
              <div className="text-xs text-muted-foreground">
                목표: {responseTimeData.targetResolution}
              </div>
            </div>
          </div>

          {/* SLA 준수율 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-medium">전체 SLA 준수율</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">{responseTimeData.slaCompliance}%</span>
                <Badge variant="secondary" className="text-xs">
                  {getComplianceText(responseTimeData.slaCompliance)}
                </Badge>
              </div>
            </div>
            <Progress value={responseTimeData.slaCompliance} className="h-2" />
          </div>

          {/* 우선순위별 성과 */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">우선순위별 응답시간</h4>
            <div className="space-y-3">
              {performanceByPriority.map((item) => (
                <div key={item.priority} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span>{item.priority}</span>
                      <span className="text-muted-foreground">({item.avgResponse})</span>
                    </div>
                    <span className={`font-medium ${getComplianceColor(item.compliance)}`}>
                      {item.compliance}%
                    </span>
                  </div>
                  <Progress value={item.compliance} className="h-1.5" />
                  <div className="text-xs text-muted-foreground">
                    목표: {item.slaTarget}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 응답시간 범위 */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t">
            <div className="text-center">
              <div className="text-sm text-green-600 font-medium">{responseTimeData.fastestResponse}</div>
              <div className="text-xs text-muted-foreground">최단 응답</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-red-600 font-medium">{responseTimeData.slowestResponse}</div>
              <div className="text-xs text-muted-foreground">최장 응답</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}