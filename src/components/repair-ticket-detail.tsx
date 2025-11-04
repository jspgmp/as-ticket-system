import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Separator } from "./ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ArrowLeft, Edit, Save, Wrench, User, Package, Clock, CheckCircle, AlertCircle, Camera } from "lucide-react"

interface RepairTicketDetailProps {
  ticketId: string
  onNavigateBack: () => void
}

// 핵심 수리 데이터 구조
interface RepairCoreData {
  // 진단 정보 (핵심)
  symptoms: string[]           // 현재 구현: 드롭다운 선택
  rootCause: string           // 현재 구현: 텍스트 입력
  diagnosisTime: number       // 현재 구현: 시간 추적 (분)

  // 작업 시간 추적 (핵심)
  workSteps: {
    stepName: string          // "분해", "진단", "부품교체", "조립", "테스트"
    startTime: string         // 현재 구현: datetime picker
    endTime: string           // 현재 구현: datetime picker
    duration: number          // 자동 계산: endTime - startTime
    notes: string             // 현재 구현: 텍스트 영역
  }[]

  // 사용 부품 (핵심)
  partsUsed: {
    partNumber: string        // 현재 구현: 입력 필드
    partName: string         // 현재 구현: 입력 필드
    quantity: number         // 현재 구현: 숫자 입력
    unitCost: number         // 현재 구현: 금액 입력
    totalCost: number        // 자동 계산: quantity * unitCost
  }[]

  // 품질 지표 (핵심)
  qualityMetrics: {
    firstTimeFixRate: boolean     // 현재 구현: 체크박스
    customerSatisfaction: number  // 현재 구현: 별점 (1-5)
    warrantyPeriod: number       // 현재 구현: 일수 입력
  }
}

// 향후 확장 필드 (주석으로 구현 예시 포함)
/*
interface RepairExtendedData {
  // 1. 기술자 역량 추적 - 교육 및 배치 최적화에 활용
  technicianPerformance: {
    skillLevel: number              // 1-5, 자동 계산: 성공률 + 속도 + 품질
    certifications: string[]        // ["ABKO 인증", "키보드 전문가"], 드롭다운
    specializations: string[]       // 자동 태깅: 자주 수리하는 제품군
    // 활용예시: 복잡한 수리는 숙련도 높은 기사에게 자동 배정
  }

  // 2. 예방 정비 데이터 - 고객 서비스 향상에 활용
  preventiveMaintenance: {
    recommendedInterval: number     // 자동 계산: 동일 제품 고장 패턴 분석
    criticalComponents: string[]    // AI 분석: 자주 교체되는 부품 목록
    maintenanceTips: string[]      // 템플릿 생성: 고객에게 발송할 관리 팁
    // 활용예시: 보증 만료 전 고객에게 점검 알림 자동 발송
  }

  // 3. 비용 최적화 - 수익성 분석에 활용
  costAnalysis: {
    laborCost: number              // 자동 계산: 시간 * 시급
    overheadCost: number          // 자동 적용: 임대료, 도구 감가상각비 등
    profitMargin: number          // 실시간 계산: (청구액 - 총비용) / 청구액
    // 활용예시: 수익성 낮은 수리 유형 파악, 가격 정책 조정
  }

  // 4. 재고 최적화 - 공급망 관리에 활용
  inventoryOptimization: {
    usageFrequency: number        // 자동 집계: 월간 사용 빈도
    leadTime: number             // 공급업체 연동: 평균 조달 시간
    seasonalPattern: string      // AI 분석: 계절별 수요 패턴
    // 활용예시: 부족 예상 부품 자동 주문, 과재고 알림
  }

  // 5. 학습 및 개선 - 지식베이스 구축에 활용
  knowledgeAccumulation: {
    troubleshootingSteps: string[]  // 성공한 수리 과정 자동 저장
    commonFailurePatterns: string[] // AI 패턴 인식: 유사 고장 유형 분류
    improvementSuggestions: string[] // 기사 입력: 프로세스 개선 아이디어
    // 활용예시: 신입 기사 교육 자료 자동 생성, FAQ 업데이트
  }
}
*/

export function RepairTicketDetail({ ticketId, onNavigateBack }: RepairTicketDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onNavigateBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          수리 티켓 목록으로 돌아가기
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1>수리 티켓 상세 - R-2024-001</h1>
          <p className="text-muted-foreground">ABKO K561 키보드 스위치 교체</p>
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
        {/* 왼쪽: 수리 작업 정보 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 수리 모듈 시작 */}
          <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50/30 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-orange-600 text-black rounded-md">
                <Wrench className="h-4 w-4" />
                <span className="font-bold text-xl">수리 모듈</span>
              </div>
              <div className="text-sm text-orange-600">수리 작업 프로세스</div>
            </div>

            {/* 수리 기본 정보 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <Package className="h-4 w-4" />
                  수리 작업 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 티켓 ID</Label>
                    <Input defaultValue="R-2024-001" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>원본 A/S 티켓</Label>
                    <Input defaultValue="T-2024-001" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>제품명</Label>
                    <Input defaultValue="ABKO K561 교체축 유무선 기계식 키보드" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>시리얼 넘버</Label>
                    <Input defaultValue="K561-24031501-BL" readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 유형</Label>
                    <Input defaultValue="스위치 교체" />
                  </div>
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
                </div>

                <div className="space-y-2">
                  <Label>고객 요청사항</Label>
                  <Textarea
                    defaultValue="W키와 S키 스위치가 간헐적으로 인식되지 않습니다. 스위치 교체 및 키보드 전체 청소를 요청합니다."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 진단 정보 (핵심 데이터) */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <AlertCircle className="h-4 w-4" />
                  진단 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>증상 (다중 선택 가능)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">키 인식 불량</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">스위치 소음</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">간헐적 오작동</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">물리적 손상</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>고장 원인</Label>
                    <Select defaultValue="switch-wear">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="switch-wear">스위치 마모</SelectItem>
                        <SelectItem value="dust-contamination">먼지 오염</SelectItem>
                        <SelectItem value="liquid-damage">액체 손상</SelectItem>
                        <SelectItem value="circuit-failure">회로 불량</SelectItem>
                        <SelectItem value="physical-damage">물리적 손상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>진단 소요 시간 (분)</Label>
                    <Input type="number" defaultValue="15" placeholder="진단에 걸린 시간" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>진단 상세 내용</Label>
                  <Textarea
                    defaultValue="W키와 S키의 Cherry MX Red 스위치에서 접촉 불량 확인. 스위치 내부 접점 마모로 인한 간헐적 인식 불량. 교체 필요."
                    rows={3}
                    placeholder="진단 과정과 결과를 상세히 기록하세요"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 담당 기사 정보 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <User className="h-4 w-4" />
                  담당 기사 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600 text-sm">기사명: </span>
                      <span className="font-medium">김영수</span>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">전문분야: </span>
                      <span className="font-medium">키보드/스위치 수리</span>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">연락처: </span>
                      <span className="font-medium">010-9876-5432</span>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">경력: </span>
                      <span className="font-medium">5년 (완료 1,250건)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>작업 시작일</Label>
                    <Input type="date" defaultValue="2024-01-16" />
                  </div>
                  <div className="space-y-2">
                    <Label>예상 완료일</Label>
                    <Input type="date" defaultValue="2024-01-18" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 작업 시간 추적 (핵심 데이터) */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <Clock className="h-4 w-4" />
                  작업 단계별 시간 추적
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {/* 분해 단계 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        1. 분해
                      </h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">완료</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <Label className="text-xs">시작 시간</Label>
                        <Input type="datetime-local" defaultValue="2024-01-16T09:00" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">종료 시간</Label>
                        <Input type="datetime-local" defaultValue="2024-01-16T09:20" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">소요 시간</Label>
                        <Input defaultValue="20분" readOnly className="h-8 bg-gray-50" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs">작업 메모</Label>
                      <Textarea defaultValue="키캡 분리 후 스위치 플레이트 분해 완료" rows={2} className="text-sm" />
                    </div>
                  </div>

                  {/* 진단 단계 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        2. 진단
                      </h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">완료</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <Label className="text-xs">시작 시간</Label>
                        <Input type="datetime-local" defaultValue="2024-01-16T09:20" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">종료 시간</Label>
                        <Input type="datetime-local" defaultValue="2024-01-16T09:35" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">소요 시간</Label>
                        <Input defaultValue="15분" readOnly className="h-8 bg-gray-50" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs">작업 메모</Label>
                      <Textarea defaultValue="W키, S키 스위치 접촉 불량 확인. Cherry MX Red 스위치 교체 필요" rows={2} className="text-sm" />
                    </div>
                  </div>

                  {/* 부품교체 단계 */}
                  <div className="border rounded-lg p-4 space-y-3 bg-blue-50">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        3. 부품교체
                      </h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">진행중</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <Label className="text-xs">시작 시간</Label>
                        <Input type="datetime-local" defaultValue="2024-01-16T09:35" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">종료 시간</Label>
                        <Input type="datetime-local" className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">소요 시간</Label>
                        <Input defaultValue="진행중..." readOnly className="h-8 bg-gray-50" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs">작업 메모</Label>
                      <Textarea placeholder="부품교체 작업 내용을 기록하세요" rows={2} className="text-sm" />
                    </div>
                  </div>

                  {/* 조립 단계 */}
                  <div className="border rounded-lg p-4 space-y-3 opacity-60">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        4. 조립
                      </h4>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">대기</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <Label className="text-xs">시작 시간</Label>
                        <Input type="datetime-local" disabled className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">종료 시간</Label>
                        <Input type="datetime-local" disabled className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">소요 시간</Label>
                        <Input defaultValue="예상 15분" readOnly className="h-8 bg-gray-50" />
                      </div>
                    </div>
                  </div>

                  {/* 테스트 단계 */}
                  <div className="border rounded-lg p-4 space-y-3 opacity-60">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-gray-400" />
                        5. 테스트
                      </h4>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">대기</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <Label className="text-xs">시작 시간</Label>
                        <Input type="datetime-local" disabled className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">종료 시간</Label>
                        <Input type="datetime-local" disabled className="h-8" />
                      </div>
                      <div>
                        <Label className="text-xs">소요 시간</Label>
                        <Input defaultValue="예상 10분" readOnly className="h-8 bg-gray-50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 총 작업 시간 요약 */}
                <Separator />
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">총 소요 시간</span>
                      <p className="font-medium">35분 (진행중)</p>
                    </div>
                    <div>
                      <span className="text-gray-600">예상 완료 시간</span>
                      <p className="font-medium">60분</p>
                    </div>
                    <div>
                      <span className="text-gray-600">진행률</span>
                      <p className="font-medium">60%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 수리 부품 및 비용 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <Wrench className="h-4 w-4" />
                  사용 부품 및 비용
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">교체 부품 목록</span>
                    <Button variant="outline" size="sm">부품 추가</Button>
                  </div>

                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="font-medium text-left py-2">부품번호</th>
                        <th className="font-medium text-left py-2">부품명</th>
                        <th className="font-medium text-left py-2">수량</th>
                        <th className="font-medium text-left py-2">단가</th>
                        <th className="font-medium text-left py-2">소계</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="py-2">
                          <Input defaultValue="SW-JIXIAN-RED" className="h-7 text-xs" />
                        </td>
                        <td className="py-2">
                          <Input defaultValue="JIXIAN 적축 스위치" className="h-7 text-xs" />
                        </td>
                        <td className="py-2">
                          <Input type="number" defaultValue="2" className="h-7 text-xs w-16" />
                        </td>
                        <td className="py-2">
                          <Input type="number" defaultValue="9000" className="h-7 text-xs w-20" />
                        </td>
                        <td className="py-2">
                          <Input defaultValue="18,000원" readOnly className="h-7 text-xs w-20 bg-gray-100" />
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="py-2">
                          <Input placeholder="부품번호" className="h-7 text-xs" />
                        </td>
                        <td className="py-2">
                          <Input placeholder="부품명" className="h-7 text-xs" />
                        </td>
                        <td className="py-2">
                          <Input type="number" placeholder="수량" className="h-7 text-xs w-16" />
                        </td>
                        <td className="py-2">
                          <Input type="number" placeholder="단가" className="h-7 text-xs w-20" />
                        </td>
                        <td className="py-2">
                          <Input placeholder="자동계산" readOnly className="h-7 text-xs w-20 bg-gray-100" />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>부품비 총액:</span>
                      <span className="font-medium">18,000원</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>작업비:</span>
                      <span className="font-medium">25,000원</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>수리 총 비용:</span>
                      <span>43,000원</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 수리 기록 및 사진 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-semibold">
                  <Camera className="h-4 w-4" />
                  수리 기록 및 사진
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>수리 과정 메모</Label>
                  <Textarea
                    placeholder="수리 과정에서 발견한 문제점이나 특이사항을 기록하세요..."
                    rows={4}
                    defaultValue="- W키와 S키 스위치 완전 불량 확인&#10;- 기존 스위치 제거 완료&#10;- 새 JIXIAN 적축 스위치로 교체 진행중&#10;- 키보드 내부 먼지 제거 필요"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>수리 전 사진</Label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center h-32">
                      <Camera className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">수리 전 상태 사진</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        사진 업로드
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>수리 후 사진</Label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center h-32">
                      <Camera className="h-6 w-6 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">수리 완료 사진</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        사진 업로드
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* 수리 모듈 끝 */}
        </div>

        {/* 오른쪽: 작업 로그 및 빠른 액션 */}
        <div className="space-y-6">
          {/* 품질 지표 (핵심 데이터) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <CheckCircle className="h-4 w-4" />
                품질 지표
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <Label className="text-sm">첫 번째 수리 성공</Label>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">고객 만족도</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className={`text-lg ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-600">보증 기간</Label>
                    <Input type="number" defaultValue="90" className="h-8 text-sm" />
                    <span className="text-xs text-gray-500">일</span>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-600">재작업 필요</Label>
                    <Select defaultValue="no">
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">아니오</SelectItem>
                        <SelectItem value="yes">예</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                {/* 향후 확장 필드 예시 (주석) */}
                {/*
                <div className="text-xs text-gray-500 space-y-1">
                  <p>📊 확장 가능한 품질 지표:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• 수리 난이도 (1-5): 자동 계산 기반</li>
                    <li>• 부품 불량률: 동일 부품 재고장 추적</li>
                    <li>• 기술자 숙련도: 작업 시간 + 품질 종합</li>
                    <li>• 예방 정비 권장: AI 기반 예측</li>
                  </ul>
                </div>
                */}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4" />
                작업 로그
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="work-log" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="work-log">작업 기록</TabsTrigger>
                  <TabsTrigger value="communication">소통 기록</TabsTrigger>
                </TabsList>

                <TabsContent value="work-log" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>새 작업 기록 작성</Label>
                      <Textarea placeholder="작업 진행사항을 기록하세요..." rows={3} />
                      <Button size="sm">작업 기록 추가</Button>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">김영수</span>
                          <span className="text-xs text-muted-foreground">2024-01-16 15:30</span>
                        </div>
                        <p className="text-sm">스위치 교체 작업 진행중. W키 스위치 교체 완료.</p>
                        <Badge variant="secondary" className="mt-1">진행</Badge>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">김영수</span>
                          <span className="text-xs text-muted-foreground">2024-01-16 14:00</span>
                        </div>
                        <p className="text-sm">키보드 분해 및 문제 진단 완료. 스위치 2개 교체 필요.</p>
                        <Badge variant="secondary" className="mt-1">완료</Badge>
                      </div>

                      <div className="border-l-4 border-gray-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">시스템</span>
                          <span className="text-xs text-muted-foreground">2024-01-16 09:00</span>
                        </div>
                        <p className="text-sm">수리 작업이 시작되었습니다.</p>
                        <Badge variant="outline" className="mt-1">시스템</Badge>
                      </div>
                    </div>

                    {/* 향후 확장 필드 예시 (주석) */}
                    {/*
                    <Separator className="my-4" />
                    <div className="text-xs text-gray-500 space-y-2">
                      <p>🚀 확장 가능한 작업 로그 기능:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• 자동 시간 추적: 각 단계별 실시간 타이머</li>
                        <li>• AI 패턴 분석: 유사 고장 해결책 자동 제안</li>
                        <li>• 음성 메모: 작업 중 핸즈프리 기록</li>
                        <li>• 실시간 협업: 다른 기술자와 실시간 상담</li>
                        <li>• 스마트 알림: 예상 지연 시 자동 고객 통지</li>
                        <li>• 학습 데이터: 신입 기술자 교육 자료 자동 생성</li>
                      </ul>
                    </div>
                    */}
                  </div>
                </TabsContent>

                <TabsContent value="communication" className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">고객 문의</span>
                        <span className="text-xs text-muted-foreground">2024-01-16 12:00</span>
                      </div>
                      <p className="text-sm">수리 진행상황 문의 (김철수)</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">기사 답변</span>
                        <span className="text-xs text-muted-foreground">2024-01-16 12:15</span>
                      </div>
                      <p className="text-sm">오늘 중 스위치 교체 완료 예정입니다.</p>
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
                상태 업데이트
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                고객 연락
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                부품 주문
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Camera className="h-4 w-4 mr-2" />
                사진 업로드
              </Button>
              <Button className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                수리 완료
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

/*
=== 수리 데이터 활용 방안 및 확장 로드맵 ===

📊 1단계: 핵심 데이터 수집 (현재 구현됨)
- 진단 정보: 증상, 근본원인, 진단시간
- 작업 추적: 단계별 시작/종료 시간, 작업 메모
- 부품 관리: 부품번호, 수량, 단가, 자동 계산
- 품질 지표: 첫수리성공, 고객만족도, 보증기간

📈 2단계: 분석 및 최적화 (6개월 후)
- 수리 시간 예측 모델: 과거 데이터 기반 ML 예측
- 기술자 성과 분석: 속도, 품질, 고객만족도 종합 평가
- 부품 재고 최적화: 사용 빈도 분석으로 적정 재고 산출
- 가격 정책 최적화: 수익성 분석 기반 요금 조정

🚀 3단계: 지능형 시스템 (1년 후)
- AI 진단 보조: 증상 입력 시 원인 및 해결방안 자동 제안
- 예방 정비 프로그램: 고장 패턴 분석으로 사전 점검 알림
- 실시간 협업: 복잡한 수리 시 전문가 원격 지원
- 자동화된 고객 소통: 진행상황 자동 업데이트, SMS/이메일 발송

🎯 활용 예시:
1. 교육 프로그램: 신입 기술자 커리큘럼을 실제 데이터 기반 설계
2. 품질 관리: 재작업률 높은 기술자 대상 추가 교육 시행
3. 수익성 개선: 손해 발생 수리 유형 파악, 가격 정책 수정
4. 고객 만족: 만족도 낮은 원인 분석, 서비스 프로세스 개선
5. 예측 분석: 부품별 교체 주기 예측, 예방 정비 프로그램 운영

💡 데이터 드리븐 의사결정 사례:
- "키보드 수리 평균 시간이 60분인데, 김기사는 35분 → 김기사 노하우 전파"
- "적축 스위치 불량률이 5% → 공급업체 교체 검토"
- "모니터 수리 후 재방문률 15% → 테스트 프로세스 강화"
- "고객 만족도 4.0 미만 기술자 → 소통 교육 진행"
*/