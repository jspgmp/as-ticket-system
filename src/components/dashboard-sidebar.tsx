import {
  Home,
  Ticket,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  UserCheck,
  List,
  Plus,
  Archive,
  BookOpen,
  FileQuestion,
  FileText,
  Building2,
  ChevronsUpDown,
  ChevronsDownUp,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { Button } from "./ui/button";

const menuStructure = [
  {
    title: "대시보드",
    icon: Home,
    isActive: true,
    isCollapsible: true,
    subItems: [
      { title: "대시보드 현황", icon: BarChart3 },
      { title: "직원목록", icon: UserCheck },
    ],
  },
  {
    title: "고객",
    icon: Users,
    isCollapsible: true,
    subItems: [
      { title: "고객목록", icon: Users },
      { title: "조직", icon: Building2 },
    ],
  },
  {
    title: "태스크",
    icon: List,
    isCollapsible: true,
    subItems: [
      { title: "태스크 목록", icon: List },
      { title: "태스크 생성", icon: Plus },
    ],
  },
  {
    title: "티켓",
    icon: Ticket,
    isCollapsible: true,
    subItems: [
      { title: "티켓 목록(A/S)", icon: Archive },
      { title: "티켓 목록(수리)", icon: Wrench },
      { title: "내티켓(할당된)", icon: UserCheck },
      { title: "티켓 검색", icon: Search },
      { title: "새 티켓", icon: Plus },
    ],
  },
  {
    title: "Knowledgebase",
    icon: BookOpen,
    isCollapsible: true,
    subItems: [
      { title: "자주묻는질문(직원용)", icon: FileQuestion },
      { title: "답변 템플릿", icon: FileText },
    ],
  },
  {
    title: "분석",
    icon: BarChart3,
    isCollapsible: false,
  },
  {
    title: "실시간 채팅",
    icon: MessageSquare,
    isCollapsible: false,
  },
];

const supportItems = [
  {
    title: "알림",
    icon: Bell,
  },
  {
    title: "도움말 센터",
    icon: HelpCircle,
  },
  {
    title: "설정",
    icon: Settings,
  },
];

export function DashboardSidebar({
  onNavigateToTicketList,
  onNavigateToNewTicket,
  onNavigateToStaffList,
  onNavigateToCustomerList,
  onNavigateToTaskList,
  onNavigateToRepairTicketList
}: {
  onNavigateToTicketList: () => void;
  onNavigateToNewTicket: () => void;
  onNavigateToStaffList: () => void;
  onNavigateToCustomerList: () => void;
  onNavigateToTaskList: () => void;
  onNavigateToRepairTicketList: () => void;
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["대시보드"]);

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const expandAll = () => {
    const allCollapsibleItems = menuStructure
      .filter(item => item.isCollapsible)
      .map(item => item.title);
    setExpandedItems(allCollapsibleItems);
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  const handleSubItemClick = (subItemTitle: string) => {
    if (subItemTitle === "티켓 목록(A/S)") {
      onNavigateToTicketList();
    } else if (subItemTitle === "티켓 목록(수리)") {
      onNavigateToRepairTicketList();
    } else if (subItemTitle === "새 티켓") {
      onNavigateToNewTicket();
    } else if (subItemTitle === "직원목록") {
      onNavigateToStaffList();
    } else if (subItemTitle === "고객목록") {
      onNavigateToCustomerList();
    } else if (subItemTitle === "태스크 목록") {
      onNavigateToTaskList();
    }
  };

  return (
    <Sidebar className="w-64">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-2 py-1">
            <SidebarGroupLabel>고객 서비스</SidebarGroupLabel>
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={expandAll}
                className="h-6 w-6 p-0"
                title="모든 메뉴 펼치기"
              >
                <ChevronsDownUp className="h-3 w-3" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={collapseAll}
                className="h-6 w-6 p-0"
                title="모든 메뉴 닫기"
              >
                <ChevronsUpDown className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuStructure.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.isCollapsible ? (
                    <>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        onClick={() => toggleExpand(item.title)}
                        className="w-full justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        {expandedItems.includes(item.title) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </SidebarMenuButton>
                      {expandedItems.includes(item.title) &&
                        item.subItems && (
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem
                                key={subItem.title}
                              >
                                <SidebarMenuSubButton
                                  onClick={() => handleSubItemClick(subItem.title)}
                                >
                                  <subItem.icon className="h-4 w-4" />
                                  <span>{subItem.title}</span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        )}
                    </>
                  ) : (
                    <SidebarMenuButton isActive={item.isActive}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>지원</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}