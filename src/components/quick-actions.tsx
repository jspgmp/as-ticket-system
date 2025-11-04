import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MessageSquare, Users, FileText, Settings, Phone, Mail } from "lucide-react"

const quickActions = [
  {
    title: "실시간 채팅 시작",
    description: "채팅 세션 시작",
    icon: MessageSquare,
    color: "bg-blue-500"
  },
  {
    title: "고객 조회",
    description: "고객 정보 찾기",
    icon: Users,
    color: "bg-green-500"
  },
  {
    title: "리포트 생성",
    description: "분석 보고서 생성",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    title: "시스템 상태",
    description: "서비스 상태 확인",
    icon: Settings,
    color: "bg-orange-500"
  },
  {
    title: "콜 대기열",
    description: "대기 중인 통화 보기",
    icon: Phone,
    color: "bg-red-500"
  },
  {
    title: "이메일 템플릿",
    description: "응답 템플릿 관리",
    icon: Mail,
    color: "bg-indigo-500"
  }
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>빠른 작업</CardTitle>
        <CardDescription>자주 사용하는 도구 및 바로가기</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Button key={action.title} variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}