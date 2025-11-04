import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Separator } from "./ui/separator"
import { ArrowLeft, Save, Plus, Paperclip, User, Package, CreditCard, Truck } from "lucide-react"
import { useState } from "react"

interface NewTicketProps {
  onNavigateBack: () => void
  onSave: () => void
}

export function NewTicket({ onNavigateBack, onSave }: NewTicketProps) {
  const [formData, setFormData] = useState({
    module: 'as',
    helpTopic: '',
    title: '',
    priority: 'normal',
    assignee: '',
    sla: 'standard',
    dueDate: '',
    department: 'service',
    customerName: '',
    customerPhone: '',
    productName: '',
    purchaseDate: '',
    store: '',
    serialNumber: '',
    problemDescription: '',
    repairCost: '',
    paymentStatus: 'pending',
    quoteDate: '',
    paymentDate: '',
    paymentMethod: '',
    deliveryStatus: 'customer-pickup'
  })

  const handleSave = () => {
    // 여기서 실제로는 서버에 데이터를 저장하겠지만, 지금은 시뮬레이션
    console.log('새 티켓 저장:', formData)
    onSave()
  }

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
          <h1>새 티켓 생성</h1>
          <p className="text-muted-foreground">새로운 고객 서비스 티켓을 등록하세요</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onNavigateBack}>
            취소
          </Button>
          <Button onClick={handleSave}>
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
              <CardTitle className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                티켓 기본 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="module">모듈</Label>
                  <Select value={formData.module} onValueChange={(value) => setFormData({...formData, module: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="as">A/S</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="helpTopic">헬프토픽</Label>
                  <Select value={formData.helpTopic} onValueChange={(value) => setFormData({...formData, helpTopic: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="헬프토픽 선택" />
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
                <Label htmlFor="title">제목</Label>
                <Input 
                  id="title"
                  placeholder="티켓 제목을 입력하세요"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">우선순위</Label>
                  <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
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
                  <Label htmlFor="assignee">담당자</Label>
                  <Select value={formData.assignee} onValueChange={(value) => setFormData({...formData, assignee: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="담당자 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="park">박기사</SelectItem>
                      <SelectItem value="kim">김기사</SelectItem>
                      <SelectItem value="lee">이기사</SelectItem>
                      <SelectItem value="jung">정기사</SelectItem>
                      <SelectItem value="hong">홍기사</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sla">SLA 플랜</Label>
                  <Select value={formData.sla} onValueChange={(value) => setFormData({...formData, sla: value})}>
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
                  <Label htmlFor="dueDate">기한</Label>
                  <Input 
                    id="dueDate"
                    type="date" 
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">부서</Label>
                <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
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

          {/* 고객 접수 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-4 w-4" />
                고객 접수 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">고객명</Label>
                  <Input 
                    id="customerName"
                    placeholder="고객명을 입력하세요"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customerPhone">고객 연락처</Label>
                  <Input 
                    id="customerPhone"
                    placeholder="연락처를 입력하세요"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">제품명/모델명</Label>
                  <Input 
                    id="productName"
                    placeholder="제품명/모델명을 입력하세요"
                    value={formData.productName}
                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purchaseDate">구매일자</Label>
                  <Input 
                    id="purchaseDate"
                    type="date" 
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({...formData, purchaseDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store">구매처</Label>
                  <Input 
                    id="store"
                    placeholder="구매처를 입력하세요"
                    value={formData.store}
                    onChange={(e) => setFormData({...formData, store: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="serialNumber">시리얼 넘버</Label>
                  <Input 
                    id="serialNumber"
                    placeholder="시리얼 넘버를 입력하세요"
                    value={formData.serialNumber}
                    onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemDescription">문제 설명</Label>
                <Textarea 
                  id="problemDescription"
                  placeholder="문제에 대해 자세히 설명해주세요"
                  rows={4}
                  value={formData.problemDescription}
                  onChange={(e) => setFormData({...formData, problemDescription: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label>첨부 파일</Label>
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
                  <Paperclip className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500 mb-2">파일을 드래그하거나 클릭하여 업로드</p>
                  <p className="text-xs text-gray-400 mb-3">최대 10MB, 이미지, 동영상, PDF 파일</p>
                  <Button variant="outline" size="sm">
                    파일 선택
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* A/S 비용 및 결제 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                A/S 비용 및 결제 정보 (선택사항)
              </CardTitle>
              <CardDescription>
                견적 완료 후 입력 가능한 정보입니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="repairCost">수리비용</Label>
                    <Input 
                      id="repairCost"
                      placeholder="예: 120,000원"
                      value={formData.repairCost}
                      onChange={(e) => setFormData({...formData, repairCost: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentStatus">결제상태</Label>
                    <Select value={formData.paymentStatus} onValueChange={(value) => setFormData({...formData, paymentStatus: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">결제 대기</SelectItem>
                        <SelectItem value="paid">결제 완료</SelectItem>
                        <SelectItem value="cancelled">결제 취소</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quoteDate">견적일</Label>
                    <Input 
                      id="quoteDate"
                      type="date" 
                      value={formData.quoteDate}
                      onChange={(e) => setFormData({...formData, quoteDate: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentDate">결제일</Label>
                    <Input 
                      id="paymentDate"
                      type="date" 
                      value={formData.paymentDate}
                      onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">결제방법</Label>
                    <Select value={formData.paymentMethod} onValueChange={(value) => setFormData({...formData, paymentMethod: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">신용카드</SelectItem>
                        <SelectItem value="bank">계좌이체</SelectItem>
                        <SelectItem value="cash">현금</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 접수 및 배송 관리 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                접수 및 배송 관리
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryStatus">접수 진행 상황</Label>
                <Select value={formData.deliveryStatus} onValueChange={(value) => setFormData({...formData, deliveryStatus: value})}>
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
            </CardContent>
          </Card>
        </div>

        {/* 오른쪽: 도움말 및 안내 */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>티켓 작성 가이드</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <h4 className="font-medium">필수 정보</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 헬프토픽 선택</li>
                  <li>• 티켓 제목</li>
                  <li>• 고객명 및 연락처</li>
                  <li>• 제품 정보</li>
                  <li>• 문제 설명</li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="text-sm space-y-2">
                <h4 className="font-medium">권장 사항</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 문제 상황 사진 첨부</li>
                  <li>• 구매 영수증 첨부</li>
                  <li>• 정확한 시리얼 넘버 확인</li>
                  <li>• 상세한 문제 설명 작성</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>A/S 진행 절차</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">1</div>
                  <span>고객 접수</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">2</div>
                  <span>제품 수거</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">3</div>
                  <span>문제 진단</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">4</div>
                  <span>견적 승인</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">5</div>
                  <span>수리 진행</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs">6</div>
                  <span>제품 발송</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}