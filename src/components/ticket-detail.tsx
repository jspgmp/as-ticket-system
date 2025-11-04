import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Separator } from "./ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Checkbox } from "./ui/checkbox"
import { ArrowLeft, Edit, Save, Plus, Paperclip, Clock, User, Package, CreditCard, Truck, Calculator, CheckCircle, Settings, Wrench } from "lucide-react"

interface TicketDetailProps {
  ticketId: string
  onNavigateBack: () => void
}

export function TicketDetail({ ticketId, onNavigateBack }: TicketDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onNavigateBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          티켓 목록으로 돌아가기
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1>티켓 상세 - T-2024-001</h1>
          <p className="text-muted-foreground">ABKO K561 키보드 스위치 불량</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            편집
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            저장
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 왼쪽: 티켓 정보 및 A/S 상세 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 티켓 기본 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Package className="h-4 w-4" />
                티켓 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>모듈</Label>
                  <Select defaultValue="as">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="as">A/S</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>헬프토픽</Label>
                  <Select defaultValue="as-request">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="problem-report">문제 보고</SelectItem>
                      <SelectItem value="simple-inquiry">단순 문의</SelectItem>
                      <SelectItem value="parts-request">부품 요청</SelectItem>
                      <SelectItem value="as-request">AS요청</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>제목</Label>
                <Input defaultValue="ABKO K561 키보드 스위치 불량" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>우선순위</Label>
                  <Select defaultValue="high">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">긴급</SelectItem>
                      <SelectItem value="high">높음</SelectItem>
                      <SelectItem value="normal">보통</SelectItem>
                      <SelectItem value="low">낮음</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>담당자</Label>
                  <Select defaultValue="park">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="park">박기사</SelectItem>
                      <SelectItem value="kim">김기사</SelectItem>
                      <SelectItem value="lee">이기사</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>생성자</Label>
                  <Input defaultValue="김철수 (고객)" readOnly />
                </div>
                <div className="space-y-2">
                  <Label>참조자</Label>
                  <Input placeholder="참조자 추가..." />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>SLA 플랜</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="premium">프리미엄 (24시간)</SelectItem>
                      <SelectItem value="standard">표준 (72시간)</SelectItem>
                      <SelectItem value="basic">기본 (1주일)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>기한</Label>
                  <Input type="date" defaultValue="2024-01-20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>부서</Label>
                <Select defaultValue="service">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">서비스센터</SelectItem>
                    <SelectItem value="sales">영업팀</SelectItem>
                    <SelectItem value="technical">기술팀</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* A/S 모듈 시작 */}
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50/30 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-black rounded-md">
                <Wrench className="h-4 w-4" />
                <span className="font-bold text-xl">A/S 모듈  </span>
              </div>
              <div className="text-sm text-blue-600">접수부터 배송완료까지의 전체 A/S 프로세스</div>
            </div>

            {/* 고객 접수 정보 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <User className="h-4 w-4" />
                  고객 접수 정보
                </CardTitle>
              </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>고객명</Label>
                  <Input defaultValue="김철수" />
                </div>
                <div className="space-y-2">
                  <Label>고객 연락처</Label>
                  <Input defaultValue="010-1234-5678" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>문제 설명</Label>
                <Textarea
                  defaultValue="ABKO K561 키보드의 W키와 S키 스위치가 간헐적으로 인식되지 않습니다. 게임 플레이 중 심각한 불편을 겪고 있으며, 특히 FPS 게임에서 이동이 제대로 되지 않아 사용이 어려운 상황입니다."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>첨부 파일</Label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                  <Paperclip className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">파일을 드래그하거나 클릭하여 업로드</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    파일 선택
                  </Button>
                </div>
              </div>
            </CardContent>
            </Card>

            {/* 제품 정보 */}
            <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Package className="h-4 w-4" />
                제품 정보
              </CardTitle>
              <CardDescription>접수된 제품들의 상세 정보 - 비용을 부과할 제품을 선택하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h4>등록된 제품</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4" />
                    <span>선택한 제품: 2개</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    수리 담당자 지정
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calculator className="h-4 w-4 mr-2" />
                    선택 제품 비용 계산
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    제품 추가
                  </Button>
                </div>
              </div>

              {/* 첫 번째 제품 */}
              <div className="border rounded-lg p-4 space-y-4 relative">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked className="mt-1" />
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">제품 #1</Badge>
                      <Badge variant="secondary">주 제품</Badge>
                      <Badge variant="destructive">비용 부과됨</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>제품명/모델명</Label>
                    <Input defaultValue="ABKO K561 교체축 유무선 기계식 키보드" />
                  </div>
                  <div className="space-y-2">
                    <Label>카테고리</Label>
                    <Select defaultValue="keyboard">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="keyboard">키보드</SelectItem>
                        <SelectItem value="mouse">마우스</SelectItem>
                        <SelectItem value="monitor">모니터</SelectItem>
                        <SelectItem value="headset">헤드셋</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>구매일자</Label>
                    <Input type="date" defaultValue="2024-03-15" />
                  </div>
                  <div className="space-y-2">
                    <Label>구매처</Label>
                    <Input defaultValue="컴퓨존 용산점" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>시리얼 넘버</Label>
                    <Input defaultValue="K561-24031501-BL" />
                  </div>
                  <div className="space-y-2">
                    <Label>보증 상태</Label>
                    <Select defaultValue="warranty">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warranty">보증 기간 내</SelectItem>
                        <SelectItem value="expired">보증 만료</SelectItem>
                        <SelectItem value="extended">연장 보증</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>보증 만료일</Label>
                    <Input type="date" defaultValue="2026-03-15" />
                  </div>
                  <div className="space-y-2">
                    <Label>제품 상태</Label>
                    <Select defaultValue="defective">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">정상</SelectItem>
                        <SelectItem value="defective">결함</SelectItem>
                        <SelectItem value="damaged">손상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 요청 사항</Label>
                    <Input defaultValue="키보드 스위치 불량" />
                  </div>
                  <div className="space-y-2">
                    <Label>고객 요청 사항</Label>
                    <Input defaultValue="스위치 교체 및 청소" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>접수일자</Label>
                    <Input type="date" defaultValue="2024-03-15" />
                  </div>
                  <div className="space-y-2">
                    <Label>예상 수리 완료일</Label>
                    <Input type="date" defaultValue="2024-03-20" />
                  </div>
                </div>

                {/* 수리 담당기사 할당 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 담당기사</Label>
                    <Select defaultValue="technician-kim">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technician-kim">김영수 (키보드 전문)</SelectItem>
                        <SelectItem value="technician-lee">이민호 (마우스 전문)</SelectItem>
                        <SelectItem value="technician-park">박수진 (모니터 전문)</SelectItem>
                        <SelectItem value="technician-choi">최동욱 (종합 수리)</SelectItem>
                        <SelectItem value="unassigned">미배정</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>수리 우선순위</Label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">긴급</SelectItem>
                        <SelectItem value="high">높음</SelectItem>
                        <SelectItem value="normal">보통</SelectItem>
                        <SelectItem value="low">낮음</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 담당기사 정보 표시 */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800">담당기사 정보</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">기사명: </span>
                      <span className="font-medium">김영수</span>
                    </div>
                    <div>
                      <span className="text-gray-600">전문분야: </span>
                      <span className="font-medium">키보드/스위치 수리</span>
                    </div>
                    <div>
                      <span className="text-gray-600">연락처: </span>
                      <span className="font-medium">010-9876-5432</span>
                    </div>
                    <div>
                      <span className="text-gray-600">경력: </span>
                      <span className="font-medium">5년 (수리 완료 1,250건)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* 두 번째 제품 (예시) */}
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Checkbox defaultChecked className="mt-1" />
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">제품 #2</Badge>
                      <Badge variant="secondary">추가 제품</Badge>
                      <Badge variant="destructive">비용 부과됨</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>제품명/모델명</Label>
                    <Input defaultValue="ABKO A800 게이밍 마우스" />
                  </div>
                  <div className="space-y-2">
                    <Label>카테고리</Label>
                    <Select defaultValue="mouse">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mouse">마우스</SelectItem>
                        <SelectItem value="keyboard">키보드</SelectItem>
                        <SelectItem value="monitor">모니터</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>구매일자</Label>
                    <Input type="date" defaultValue="2024-02-20" />
                  </div>
                  <div className="space-y-2">
                    <Label>보증 상태</Label>
                    <Select defaultValue="warranty">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warranty">보증 기간 내</SelectItem>
                        <SelectItem value="expired">보증 만료</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 수리 담당기사 할당 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 담당기사</Label>
                    <Select defaultValue="technician-lee">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technician-kim">김영수 (키보드 전문)</SelectItem>
                        <SelectItem value="technician-lee">이민호 (마우스 전문)</SelectItem>
                        <SelectItem value="technician-park">박수진 (모니터 전문)</SelectItem>
                        <SelectItem value="technician-choi">최동욱 (종합 수리)</SelectItem>
                        <SelectItem value="unassigned">미배정</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>수리 우선순위</Label>
                    <Select defaultValue="normal">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">긴급</SelectItem>
                        <SelectItem value="high">높음</SelectItem>
                        <SelectItem value="normal">보통</SelectItem>
                        <SelectItem value="low">낮음</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* 담당기사 정보 표시 */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-800">담당기사 정보</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">기사명: </span>
                      <span className="font-medium">이민호</span>
                    </div>
                    <div>
                      <span className="text-gray-600">전문분야: </span>
                      <span className="font-medium">마우스/센서 수리</span>
                    </div>
                    <div>
                      <span className="text-gray-600">연락처: </span>
                      <span className="font-medium">010-8765-4321</span>
                    </div>
                    <div>
                      <span className="text-gray-600">경력: </span>
                      <span className="font-medium">3년 (수리 완료 890건)</span>
                    </div>
                  </div>
                </div>
              </div>

                {/* 세 번째 제품 (비용 부과 안됨) */}
              <div className="border rounded-lg p-4 space-y-4 opacity-60">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Checkbox className="mt-1" />
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">제품 #3</Badge>
                      <Badge variant="outline">모니터</Badge>
                      <Badge variant="secondary">비용 미부과</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>제품명/모델명</Label>
                    <Input defaultValue="ABKO AVC27F165D 커브드 게이밍 모니터" />
                  </div>
                  <div className="space-y-2">
                    <Label>카테고리</Label>
                    <Select defaultValue="monitor">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monitor">모니터</SelectItem>
                        <SelectItem value="keyboard">키보드</SelectItem>
                        <SelectItem value="mouse">마우스</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>구매일자</Label>
                    <Input type="date" defaultValue="2023-01-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>보증 상태</Label>
                    <Select defaultValue="expired">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="warranty">보증 기간 내</SelectItem>
                        <SelectItem value="expired">보증 만료</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>

            {/* A/S 비용 관리 */}
            <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Calculator className="h-4 w-4" />
                A/S 비용 관리
              </CardTitle>
              <CardDescription>선택된 제품들에 대한 비용을 설정하고 관리합니다</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 선택된 제품 목록 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">비용 부과 대상 제품</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      제품 선택
                    </Button>
                  </div>
                </div>

                {/* 선택된 제품 1 */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">제품 #1</Badge>
                      <span className="font-medium">ABKO K561 교체축 유무선 기계식 키보드</span>
                      <Badge variant="secondary">주 제품</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        제거
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>진단비</Label>
                      <Input defaultValue="15,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>수리비</Label>
                      <Input defaultValue="25,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>부품비 (스위치교체)</Label>
                      <Input defaultValue="18,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>배송비</Label>
                      <Input defaultValue="5,000" type="number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>할인율 (%)</Label>
                      <Input defaultValue="0" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>할인 금액</Label>
                      <Input defaultValue="0" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>제품별 총액</Label>
                      <Input defaultValue="63,000" readOnly className="font-medium bg-muted" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>결제 상태</Label>
                      <Select defaultValue="pending">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">결제 대기</SelectItem>
                          <SelectItem value="paid">결제 완료</SelectItem>
                          <SelectItem value="partial">부분 결제</SelectItem>
                          <SelectItem value="cancelled">결제 취소</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>결제 방법</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">신용카드</SelectItem>
                          <SelectItem value="bank">계좌이체</SelectItem>
                          <SelectItem value="cash">현금</SelectItem>
                          <SelectItem value="installment">할부</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* 선택된 제품 2 */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">제품 #2</Badge>
                      <span className="font-medium">ABKO A800 게이밍 마우스</span>
                      <Badge variant="secondary">추가 제품</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        제거
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>진단비</Label>
                      <Input defaultValue="10,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>수리비</Label>
                      <Input defaultValue="20,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>부품비 (센서교체)</Label>
                      <Input defaultValue="15,000" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>배송비</Label>
                      <Input defaultValue="5,000" type="number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>할인율 (%)</Label>
                      <Input defaultValue="0" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>할인 금액</Label>
                      <Input defaultValue="0" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label>제품별 총액</Label>
                      <Input defaultValue="50,000" readOnly className="font-medium bg-muted" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>결제 상태</Label>
                      <Select defaultValue="paid">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">결제 대기</SelectItem>
                          <SelectItem value="paid">결제 완료</SelectItem>
                          <SelectItem value="partial">부분 결제</SelectItem>
                          <SelectItem value="cancelled">결제 취소</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>결제 방법</Label>
                      <Select defaultValue="card">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">신용카드</SelectItem>
                          <SelectItem value="bank">계좌이체</SelectItem>
                          <SelectItem value="cash">현금</SelectItem>
                          <SelectItem value="installment">할부</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                    ✓ 2024-01-17 14:30에 신용카드로 결제 완료 (승인번호: 87654321)
                  </div>
                </div>
              </div>

              {/* 전체 비용 요약 */}
              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">전체 비용 요약</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>총 비용 (할인 전)</span>
                      <span>113,000원</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>총 할인 금액</span>
                      <span className="text-red-600">-0원</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>최종 청구 금액</span>
                      <span className="text-lg">113,000원</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>결제 완료</span>
                      <span className="text-green-600">50,000원</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>결제 대기</span>
                      <span className="text-orange-600">63,000원</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>미수금</span>
                      <span className="text-lg text-orange-600">63,000원</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1">
                    <CreditCard className="h-4 w-4 mr-2" />
                    미수금 결제 진행
                  </Button>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    부분 결제
                  </Button>
                  <Button variant="outline">
                    견적서 출력
                  </Button>
                </div>
              </div>
            </CardContent>
            </Card>

            {/* 접수 및 배송 관리 */}
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Truck className="h-4 w-4" />
                접수 및 배송 관리
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>접수 진행 상황</Label>
                <Select defaultValue="customer-pickup">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-pickup">고객택배접수</SelectItem>
                    <SelectItem value="center-pickup">센터택배접수</SelectItem>
                    <SelectItem value="quote">견적중</SelectItem>
                    <SelectItem value="settlement">정산중</SelectItem>
                    <SelectItem value="repair">수리중</SelectItem>
                    <SelectItem value="delivery-wait">발송대기중</SelectItem>
                    <SelectItem value="delivery">발송중</SelectItem>
                    <SelectItem value="delivered">배달완료</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>송장번호</Label>
                  <div className="flex gap-2">
                    <Input placeholder="송장번호 입력" />
                    <Button variant="outline">발급</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>발송일시</Label>
                  <Input type="datetime-local" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>배송 상태 업데이트</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">상태 업데이트</Button>
                  <Button variant="outline" size="sm">이력 조회</Button>
                </div>
              </div>
            </CardContent>
            </Card>
          </div>
          {/* A/S 모듈 끝 */}
        </div>

        {/* 오른쪽: 코멘트 및 이력 */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4" />
                상태 및 이력
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="comments" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="comments">코멘트</TabsTrigger>
                  <TabsTrigger value="history">변경 이력</TabsTrigger>
                </TabsList>
                
                <TabsContent value="comments" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>새 코멘트 작성</Label>
                      <Textarea placeholder="코멘트를 입력하세요..." rows={3} />
                      <div className="flex gap-2">
                        <Button size="sm">내부 코멘트</Button>
                        <Button variant="outline" size="sm">외부 코멘트</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">박기사</span>
                          <span className="text-xs text-muted-foreground">2024-01-16 14:30</span>
                        </div>
                        <p className="text-sm">고객 제품 확인 완료. 베어링 교체 필요함.</p>
                        <Badge variant="secondary" className="mt-1">내부</Badge>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">시스템</span>
                          <span className="text-xs text-muted-foreground">2024-01-15 10:00</span>
                        </div>
                        <p className="text-sm">티켓이 생성되었습니다.</p>
                        <Badge variant="outline" className="mt-1">시스템</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">우선순위 변경</span>
                        <span className="text-xs text-muted-foreground">2024-01-16 09:15</span>
                      </div>
                      <p className="text-sm">보통 → 높음 (박기사)</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">담당자 지정</span>
                        <span className="text-xs text-muted-foreground">2024-01-15 14:20</span>
                      </div>
                      <p className="text-sm">미지정 → 박기사 (관리자)</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">티켓 생성</span>
                        <span className="text-xs text-muted-foreground">2024-01-15 10:00</span>
                      </div>
                      <p className="text-sm">티켓이 생성되었습니다 (김철수)</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>빠른 액션</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Edit className="h-4 w-4 mr-2" />
                우선순위 변경
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                티켓 담당자 변경
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                상태 업데이트
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Paperclip className="h-4 w-4 mr-2" />
                파일 첨부
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}