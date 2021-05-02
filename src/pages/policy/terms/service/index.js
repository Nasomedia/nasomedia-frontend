import {
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  ListItem,
  UnorderedList,
  OrderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { PolicyLayout } from "../../../../layout/PolicyLayout";

export default function TermsService({ text }) {
  return (
    <PolicyLayout title={"서비스 이용약관"}>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </PolicyLayout>
  );
}

export async function getStaticProps() {
  const text = `<pre style="white-space: pre-wrap">
  제 1조 목적
  이 약관은 나소미디어 (이하 “나소미디어”)에서 제공하는 나소미디어 및 나소미디어에서 제공하는 제반 서비스(이하 "서비스")에 접속과 사용자에 의해서 업로드 및 다운로드 되어 표시되는 모든 정보, 텍스트, 이미지 및 기타 자료를 이용하는 이용자(이하 "회원")와 서비스 이용에 관한 권리 및 의무와 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
  
  제 2조 약관의 게시와 효력, 개정
  1. 나소미디어는 서비스의 가입 과정에 본 약관을 게시합니다.
  2. 나소미디어는 관련법에 위배되지 않는 범위에서 본 약관을 변경할 수 있습니다.
  3. 회원은 나소미디어가 전항에 따라 변경하는 약관에 동의하지 않을 권리가 있으며, 이 경우 회원은 나소미디어에서 제공하는 서비스 이용 중단 및 탈퇴 의사를 표시하고 서비스 이용 종료를 요청할 수 있습니다. 다만, 나소미디어가 회원에게 변경된 약관의 내용을 통보하면서 회원에게 "7일 이내 의사 표시를 하지 않을 경우 의사 표시가 표명된 것으로 본다는 뜻"을 명확히 통지하였음에도 불구하고, 거부의 의사표시를 하지 아니한 경우 회원이 변경된 약관에 동의하는 것으로 봅니다.
  
  제 3조 약관의 해석과 예외 준칙
  1. 나소미디어는 제공하는 개별 서비스에 대해서 별도의 이용약관 및 정책을 둘 수 있으며, 해당 내용이 이 약관과 상충할 경우 개별 서비스의 이용약관을 우선하여 적용합니다.
  2. 본 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
  
  제 4조 용어의 정의
  1. 서비스: 개인용 컴퓨터 (PC), TV, 휴대형 단말기, 전기통신설비 등 포함 각종 유무선 장치와 같이 구현되는 단말기와 상관없이 회원이 이용할 수 있는 나소미디어 및 나소미디어 관련 제반 서비스를 의미합니다. 제반 서비스에는 개발자 및 서비스 제공자가 나소미디어 Open Application Programming Interface 서비스와 이를 이용하여 개발한 API 응용 애플리케이션 또는 웹서비스도 포함됩니다.
  2. 회원: 나소미디어와 서비스 이용계약을 체결하고 나소미디어가 제공하는 서비스를 이용하는 모든 사용자를 의미합니다.
  3. 아이디: 회원의 식별 및 서비스 이용을 위하여 회원이 선정하고 나소미디어가 부여한 문자 및 숫자의 조합을 의미합니다.
  4. 비밀번호: 회원의 개인 정보 및 확인을 위해서 회원이 정한 문자 또는 숫자의 조합을 의미합니다.
  5. 도메인: 회원의 서비스 이용을 위하여 회원이 신청하여 나소미디어가 부여한 고유한 인터넷 주소를 의미합니다. 나소미디어는 제공하는 제반 서비스를 위해서 서비스에 따라 별도의 도메인 주소를 추가적으로 제공합니다.
  6. 게시물: 회원이 서비스를 이용함에 있어 회원이 서비스에 게시한 문자, 문서, 그림, 음성, 링크, 파일 혹은 이들의 조합으로 이루어진 정보 등 모든 정보나 자료를 의미합니다.
  7. 유료서비스: 나소미디어가 유료로 제공하는 각종 온라인디지털콘텐츠 및 제반 서비스를 의미합니다. 
  8. 포인트: 나소미디어의 유료 콘텐츠를 이용하기 위해 회원이 구입하는 사이버 머니를 말합니다.
  
  제 5조 이용계약의 체결
  1. 이용계약은 회원이 나소미디어 서비스 및 제반 서비스에서 제공하는 회원 가입 페이지에서 서비스 이용약관에 동의한 후 이용신청을 하고 신청한 내용에 대해서 나소미디어가 승낙함으로써 체결됩니다.
  2. 나소미디어는 이용약관에 동의한 후 이용신청한 사용자에 대해서 원칙적으로 접수 순서에 따라 서비스 이용을 승낙함을 원칙으로 합니다. 다만 업무 수행상 또는 기술상 지장이 있을 경우 일정시간 가입승인을 유보할 수 있습니다.
  3. 나소미디어는 다음 각 호에 해당하는 신청에 대해서 승낙하지 않거나 사후에 이용계약을 해지할 수 있습니다.
  - 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
  - 제3자의 전자우편 주소를 이용하여 신청한 경우
  - 허위의 정보를 기재하거나, 나소미디어가 필수적으로 입력을 요청한 부분을 기재하지 않은 경우
  - 부정한 용도로 서비스를 사용하고자 하는 경우
  - 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우
  - 나소미디어의 정책에 적합하지 않는 회원으로 판단되는 경우나 서비스 제공이 곤란한 경우
  - 회원의 이용 목적이나 서비스 이용 방법이 나소미디어의 재산권이나 영업권을 침해하거나 침해할 우려가 있는 경우
  - 비정상적인 방법을 통하여 아이디 및 도메인을 대량으로 생성하는 행위
  4. 나소미디어는 회원에 대해 나소미디어정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
  5. 회원은 나소미디어에 언제든지 회원 탈퇴를 요청하여 이용계약을 해지할 수 있습니다.
  6. 회원은 회원 가입 시 기재한 개인정보의 내용에 변경이 발생한 경우, 즉시 변경사항을 정정하여 기재하여야 합니다. 변경의 지체로 인하여 발생한 회원의 손해에 대해 나소미디어는 책임을 지지 않습니다.
  7. 나소미디어는 관련 법률 및 나소미디어의 개인정보취급방침에서 정한 바에 따라 회원에게 요청하는 회원정보 및 기타정보 항목을 추가, 삭제 등 변경하여 수집 및 이용할 수 있습니다.
  
  제 6조 개인정보보호 의무
  1. 나소미디어는 정보통신망법 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 나소미디어의 개인정보취급방침이 적용됩니다. 다만, 나소미디어의 공식 사이트 이외의 링크된 사이트에서는 나소미디어의 개인정보취급방침이 적용되지 않습니다.
  2. 나소미디어는 서비스를 중단하거나 회원이 개인정보 제공 동의를 철회한 경우에는 신속하게 회원의 개인정보를 파기합니다. 단, 전자상거래 등에서의 소비자 보호에 관한 법률 등 관련 법률에서 정하는 바에 따라 일정 정보는 보관할 수 있습니다.
  3. 나소미디어는 서비스 개선 및 회원 대상의 서비스 소개 등의 목적으로 회원의 동의 하에 관계 법령에서 정하는 바에 따라 추가적인 개인정보를 수집할 수 있습니다.
  4. 나소미디어는 법률에 특별한 규정이 있는 경우를 제외하고는 회원의 별도 동의 없이 회원의 계정정보를 포함한 일체의 개인정보를 제3자에게 공개하거나 제공하지 아니합니다.
  5. 나소미디어는 향후 제공하는 서비스에서 회원의 편의를 위해서 회원의 계정 정보를 사용할 수 있도록 링크 및 기타 방법을 제공할 수 있습니다.
  
  제 7조 회원의 아이디 및 비밀번호
  1. 회원은 아이디와 비빌번호에 관해서 관리책임이 있습니다.
  2. 회원은 아이디 및 비멀번호를 제3자가 이용하도록 제공하여서는 안됩니다.
  3. 나소미디어는 회원이 아이디 및 비밀번호를 소홀히 관리하여 발생하는 서비스 이용상의 손해 또는 나소미디어의 고의 또는 중대한 과실이 없는 제3자의 부정이용 등으로 인한 손해에 대해 책임을 지지 않습니다.
  4. 회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 나소미디어에 통지하고 나소미디어의 안내에 따라야 합니다.
  
  제 8조 나소미디어의 의무
  1. 나소미디어는 계속적이고 안정적인 서비스의 제공을 위하여 최선을 다하여 노력합니다.
  2. 나소미디어는 회원이 안전하게 서비스를 이용할 수 있도록 현재 인터넷 보안기술의 발전수준과 나소미디어가 제공하는 서비스의 성격에 적합한 보안시스템을 갖추고 운영해야 합니다.
  3. 나소미디어는 서비스를 이용하는 회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우를 이를 처리하여야하 합니다. 이때 처리과정에 대해서 고객에게 메일 및 게시판 등의 방법으로 전달합니다.
  4. 나소미디어는 정보통신망 이용촉진 및 정보보호에 관한 법률, 통신비밀보호법, 전기통신사업법 등 서비스의 운영, 유지와 관련 있는 법규를 준수합니다.
  
  제 9조 회원의 의무
  1. 회원은 다음 각호에 해당하는 행위를 해서는 안됩니다.
  - 이용 신청 또는 회원정보 변경 시 허위내용 등록
  - 타인의 정보 도용
  - 나소미디어의 운영자, 임직원, 나소미디어를 사칭하거나 관련 정보를 도용
  - 나소미디어가 게시한 정보의 변경
  - 나소미디어와 기타 제3자의 저작권, 영업비밀, 특허권 등 지적재산권에 대한 침해
  - 나소미디어와 다른 회원 및 기타 제3자를 희롱하거나, 위협하거나 명예를 손상시키는 행위
  - 외설, 폭력적인 메시지, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위
  - 해킹을 통해서 다른 사용자의 정보를 취득하는 행위
  - 기타 현행 법령에 위반되는 불법적인 행위
  - 나소미디어의 서면허가를 받은 경우를 제외하고 나소미디어가 제공하는 소프트웨어의 일부를 복사, 수정, 배포, 판매 또는 대여가 불가능하고 역설계하거나 소스 코드의 추출을 시도하는 등 나소미디어의 서비스를 복제, 분해하거나 기타 변형하는 행위
  - 나소미디어의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위
  - 자동 접속 프로그램등을 사용하는 등 정상적인 용법과 다른 방법으로 라프텔 서비스를 이용하여 나소미디어의 서버에 부하를 일으켜 나소미디어의 정상적인 활동을 방해하는 행위
  2. 나소미디어는 회원이 전항에서 금지한 행위를 하는 경우, 위반 행위의 경중에 따라 서비스의 이용정지/계약의 해지 등 서비스 이용 제한, 수사 기관에의 고발 조치 등 합당한 조치를 취할 수 있습니다.
  3. 회원은 나소미디어의 명시적 사전 동의가 없는 한 서비스의 이용권한 및 기타 이용계약상의 지위를 제3자에게 양도, 증여, 대여할 수 없으며 이를 담보로 제공할 수 없습니다.
  4. 회원은 관계법, 이 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 나소미디어가 통지하는 사항 등을 준수하여야 하며, 기타 나소미디어의 업무에 방해되는 행위를 하여서는 안 됩니다.
  5. 회원은 나소미디어의 사전 허락 없이 나소미디어가 정한 이용 목적과 방법에 반하여 영업/광고활동 등을 할 수 없고, 회원의 서비스 이용이 나소미디어의 재산권, 영업권 또는 비즈니스 모델을 침해하여서는 안됩니다.
  
  제 10조 서비스 이용의 기술적 요구사항
  나소미디어는 서비스를 공급하면서 아래의 &lt;서비스 이용 필수 사양&gt;이 충족되어야 정상적인 서비스 이용이 가능하며, 회원이 아래의 필수 사양을 충족하지 못하여 서비스 이용이 제한되더라도 회원은 이를 이유로 나소미디어에 이의를 제기할 수 없습니다. 
  &lt;서비스 이용 필수 사양&gt;
  1. 컴퓨터(PC)&nbsp;
  - 운영체제(OS) : Windows , OSX , Linux 등 웹브라우저 이용이 가능한 OS
  - 웹브라우저 : Internet Explorer 10.0이상, Chrome , Safari , Firefox 웹 브라우저
  2. 모바일 단말기 (Smart Phone, 태블렛 PC)
  - 지원단말기 : 안드로이드, 아이폰 (iOS 10이상), 아이패드, 갤럭시탭 
  - 지원 어플리케이션 :  라프텔 (구글플레이, 앱스토어에서 검색하여 설치)
  
  제 11조 서비스의 제공 및 변경
  1. 나소미디어의 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다
  2. 나소미디어는 회원에게 아래와 같은 서비스를 제공합니다.
  - 나소미디어 및 나소미디어 통합계정 서비스
  - 기타 나소미디어가 추가 개발하거나 다른 나소미디어와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스
  3. 나소미디어는 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 나소미디어는 회원에게 공지사항 게시판 및 메일 등의 방법으로 통지합니다. 다만, 나소미디어가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
  4. 나소미디어는 회원과 별도로 서면 계약을 체결하여 나소미디어 서비스 및 제반 서비스의 브랜드 특성을 이용할 수 있는 명시적인 권리를 부여하지 아니하는 한, 회원에게 나소미디어 또는 서비스의 상호, 상표, 서비스표, 로고, 도메인 네임 및 기타 식별력 있는 브랜드 특성을 이용할 수 있는 권리를 부여하지 않습니다.
  5. 나소미디어가 제공하는 서비스의 형태와 기능, 디자인 등 필요한 경우 수시로 변경되거나, 중단될 수 있습니다. 나소미디어는 이 경우 개별적인 변경에 대해서 회원에게 사전 통지하지 않습니다. 다만, 회원에게 불리한 것으로 판단되는 경우 전자우편으로 통하여 이를 공지합니다.
  6. 전항에 의해서 제공되는 서비스가 변경 및 중단될 경우 서비스에 대해서는 회원에게 별도로 보상하지 않습니다.
  7. 나소미디어가 제공하는 유료서비스는 대한민국에서만 이용 가능합니다. 
  8. 나소미디어내의 콘텐츠가 저작권자와의 계약 종료 등으로 그 내용이 변경되는 경우에는 장차 체결되는 계약에 의해 제공할 컨텐츠의 내용을 변경할 수 있습니다. 이 경우에는 변경된 콘텐츠의 내용 및 제공 일자를 명시하여 현재 콘텐츠의 내용을 게시한 곳에 즉시 공지합니다.
  
  제 12조 광고의 게제
  1. 나소미디어는 서비스 운영과 관련하여 회원정보, 고객이 입력한 정보를 활용하여 광고를 게재할 수 있습니다. 회원은 서비스 이용 시 노출되는 맞춤 광고 게재에 대해 동의합니다.
  2. 나소미디어는 서비스상에 게재되어 있거나 서비스를 통한 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래를 함으로써 발생하는 손실과 손해에 대해 책임을 지지 않습니다.
  
  제 13조 전자우편을 통한 정보의 제공
  1. 나소미디어는 회원이 서비스 이용에 필요하다고 인정되는 다양한 정보를 회원이 제공한 전자우편 주소로 제공할 수 있습니다.
  2. 나소미디어는 서비스 운영을 위해 회원정보를 활용하여 영리목적의 광고성 전자우편을 전송할 수 있습니다. 회원이 이를 원하지 않는 경우에는 언제든지 서비스 홈페이지 또는 서비스 내부 설정페이지 등을 통하여 수신거부를 할 수 있습니다.
  3. 나소미디어는 다음 각호에 해당하는 경우 회원의 동의여부와 상관없이 전자우편으로 발송할 수 있습니다.
  - 이용 신청에서 입력한 전자우편 주소의 소유를 확인하기 위해서 인증메일을 발송하는 경우
  - 회원의 정보가 변경되어 확인하기 위해서 인증메일을 발송하는 경우
  - 기타 서비스를 제공함에 있어 회원이 반드시 알아야 하는 중대한 정보라고 나소미디어가 판단하는 경우
  
  제 14조 서비스 이용의 제한
  1. 나소미디어는 천재지변이나 국가비상사태, 해결이 곤란한 기술적 결함 또는 서비스 운영의 심각한 변화 등 불가항력적인 경우가 발생 또는 발생이 예상될 때는 서비스의 전부 또는 일부를 예고 없이 제한하거나 중지할 수 있습니다.
  2. 서비스를 이용하게 됨으로써 서비스 영역에서 발생하는 회원 사이의 문제에 대해 나소미디어는 책임을 지지 않습니다.
  3. 회원의 관리 소홀로 인하여 ID 및 비밀번호의 유출로 인해 회원에게 서비스 이용상의 손해가 발생하거나 제3자에 의한 부정이용 등으로 회원의 의무조항을 위반한 경우 ID및 해당 도메인의 이용이 제한될 수 있습니다.
  4. 나소미디어가 본 약관 제9조의 위반 행위를 조사하는 과정에서 당해 회원 ID및 도메인이 특정 위반행위에 직접적으로 관련되어 있는 경우 등 다른 회원의 권익 보호 및 서비스의 질서유지를 위해 불가피할 경우에는 해당 ID 및 도메인의 이용을 일시적으로 정지할 수 있습니다. 이에 대해 회원은 서비스 홈페이지 또는 전자 우편 등을 통해 이의신청을 할 수 있습니다.
  
  제 15조 게시물의 권리와 책임
  1. 회원이 서비스 내에 작성한 텍스트, 이미지, 동영상, 링크 등의 기타 정보(이하 "게시물")에 대한 책임 및 권리는 게시물을 등록한 회원에게 있습니다.
  2. 나소미디어는 회원이 작성한 컨텐츠에 대해서 감시 및 관리할 수 없으며 이에 대해서 책임지지 않습니다. 나소미디어는 회원이 등록하는 게시물의 신뢰성, 진실성, 정확성 등에 대해서 책임지지 않으며 보증하지 않습니다
  3. 서비스에 대한 저작권 및 지적재산권, 나소미디어가 작성한 게시물의 저작권은 나소미디어에 귀속됩니다. 단, 회원이 단독 또는 공동으로 작성한 게시물 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.
  4. 회원은 자신이 서비스 내에 게시한 게시물을 나소미디어가 국내ㆍ외에서 다음 목적으로 사용하는 것을 허락합니다. 
  - 서비스(제3자가 운영하는 사이트 또는 미디어의 일정 영역 내에 입점하여 서비스가 제공되는 경우를 포함합니다)내에서 게시물을 사용하기 위하여 게시물의 크기를 변환하거나 단순화하는 등의 방식으로 수정하는 것
  - 나소미디어에서 운영하는 다른 사이트 또는 다른 나소미디어가 운영하는 사이트에 게시물을 복제ㆍ전송ㆍ전시하는 것
  - 나소미디어의 서비스를 홍보하기 위한 목적으로 미디어, 통신사 등에게 게시물의 내용을 보도, 방영하게 하는 것. 단, 이 경우 나소미디어는 회원의 개별 동의없이 미디어, 통신사 등에게 게시물 또는 회원정보를 제공하지 않습니다.
  5. 회원이 회원탈퇴를 한 경우에는 본인 도메인에 기록된 저작물 일체는 삭제됩니다. 단, 저작물이 공동 저작을 통해 작성된 경우에는 공동 저작자의 도메인에 해당 게시물이 남을 수 있고, 제3자에 의하여 보관되거나 무단복제 등을 통하여 복제됨으로써 해당 저작물이 삭제되지 않고 재 게시된 경우에 대하여 나소미디어는 책임을 지지 않습니다. 또한, 본 약관 및 관계 법령을 위반한 회원의 경우 다른 회원을 보호하고, 법원, 수사기관 또는 관련 기관의 요청에 따른 증거자료로 활용하기 위해 회원탈퇴 후에도 관계 법령이 허용하는 한도에서 회원의 아이디 및 회원정보를 보관할 수 있습니다.
  6. 회원의 게시물 또는 저작물이 나소미디어 또는 제3자의 저작권 등 지적재산권을 침해함으로써 발생하는 민∙형사상의 책임은 전적으로 회원이 부담하여야 합니다.
  
  제 16조 게시물의 관리
  1. 회원의 게시물이 정보통신망법 및 저작권법등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 나소미디어는 관련법에 따라 조치를 취하여야 합니다.
  2. 나소미디어는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 본 약관 및 기타 나소미디어 정책, 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.
  3. 회원이 비공개로 설정한 게시물에 대해서는 나소미디어를 포함한 다른 사람이 열람할 수 없습니다. 단, 법원, 수사기관이나 기타 행정기관으로부터 정보제공을 요청 받은 경우나 기타 법률에 의해 요구되는 경우에는 나소미디어를 포함한 다른 사람이 해당 게시물을 열람할 수 있습니다.
  
  제 17조 서비스 이용의 중지 및 해지
  1. 회원은 나소미디어에 언제든지 회원 탈퇴를 요청할 수 있으며, 나소미디어는 이와 같은 요청을 받았을 경우, 나소미디어가 별도로 고지한 방법에 따라 신속하게 처리합니다.
  2. 회원이 서비스의 이용중지를 원하는 경우에는 나소미디어가 제공하는 서비스 페이지 또는 전자우편 등의 방법으로 나소미디어에 중지신청을 할 수 있습니다. 나소미디어는 이와 같은 요청을 받았을 경우, 나소미디어가 별도로 고지한 방법에 따라 신속하게 처리합니다.
  3. 나소미디어는 회원이 본 약관 제9조의 이용자의 의무를 위반한 경우 및 서비스의 정상적인 운영을 방해한 경우에는 사전 통보 후 회원 자격을 제한, 이용계약을 해지하거나 또는 기간을 정하여 서비스의 이용을 중지할 수 있습니다.
  4. 나소미디어는 전항에도 불구하고, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다.
  5. 나소미디어는 회원이 계속해서 3개월 이상 로그인하지 않는 경우, 회원정보의 보호 및 운영의 효율성을 위해 이용을 제한할 수 있습니다.
  6. 회원은 본 조에 따른 이용제한 등에 대해 나소미디어가 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고 나소미디어가 인정하는 경우 나소미디어는 즉시 서비스의 이용을 재개합니다.
  
  제 18조 주문 및 결제
  1. 회원은 나소미디어가 제공하는 절차에 의하여 재화, 콘텐츠 구매를 신청할 수 있으며, 아래 사항을 각 재화 및 콘텐츠 또는 관련 게시물에 표시합니다.
  2. 재화, 콘텐츠의 명칭, 종류, 내용, 가격, 연령 제한
  3. 회원은 나소미디어에서 정하고 있는 방법으로 유료서비스의 결제가 가능합니다. 단, 미성년 회원의 결제는 원
  칙적으로 보호자(법정대리인)의 명의 또는 동의 하에 이루어져야 하고, 보호자(법정대리인)는 본인 동의
  없이 체결된 자녀(미성년자)의 계약을 취소할 수 있습니다.
  
  제 19조 청약의 철회
  1. 나소미디어와 포인트 이용에 관한 계약을 체결한 회원은 7일 이내에 충전한 포인트에 한해서 청약을 철회를 할 수 있습니다.
  2. 회원은 다음 각 호의 어느 하나에 해당하는 경우에는 나소미디어의 의사에 반하여 제 1항에 따라 청약철회 등을 할 수 없습니다.
  - 회원이 포인트의 일부분을 사용하여 콘텐츠를 구매한 경우
  - 이벤트를 통하여 받은 포인트 등 직접 충전하지 않은 경우
  - 충전 후 7일 이상 지난 경우
  3. 나소미디어는 청약철회 등이 불가능한 경우에는 그 사실을 회원이 쉽게 알 수 있도록 안내하여 청약철회 등의 권리 행사가 방해 받지 아니하도록 조치하여야합니다.
  4.소비자는 제 1항 및 제 2항에도 불구하고 포인트의 내용이 표시 광고의 내용과 다르거나 계약내용과 다르게 이행된 경우에는 그 포인트를 공급받은 날로부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회를 할 수 있습니다. 회원은 나소미디어의 고객센터를 통해 청약철회를 신청할 수 있습니다.
  
  제 20조 청약 철회의 효과 및 환불
  1. 나소미디어의 귀책사유로 회원이 유료서비스를 이용할 수 없게 된 경우, 나소미디어는 나소미디어의 귀책범위 내에서 환불하거나 결제를 취소합니다. 단, 무상으로 지급된 포인트는 환불대상에서 제외됩니다.
  2. 회원이 청약철회 또는 환불을 한 경우 나소미디어는 포인트를 회수 또는 삭제하고, 포인트를 회수 또는 삭제한 날로부터 3영업일 이내에 지급받은 대금과 동일한 방법으로 이를 환급합니다. 동일한 방법으로 환급이 불가능할 때에는 나소미디어가 사전에 고지한 방법으로 환불 처리합니다. 
  3. 이 경우 나소미디어가 회원에게 환급을 지연한 때에는 그 지연기간에 대하여 전자상거래 등에서의 소비자 보호에 관현 법률 및 시행령에서 정하는 이율을 곱하여 산정한 지연이자를 지급합니다.
  
  제 21조 과오금
  1. 나소미디어는 과오금이 발생한 경우 회원이 결제한 방법과 동일한 방법으로 환불하며, 동일한 방법으로 환불이 불가능할 때에는 이를 사전에 고지합니다.
  2. 나소미디어의 책임이 있는 사유로 과오금이 발생한 경우에는 과오금 전액을 환불하며, 회원의 책임이 있는 사유로 과오금이 발생한 경우, 나소미디어가 과오금을 환불하는데 소요되는 비용은 합리적인 범위 내에서 회원이 부담하여야합니다.
  3. 나소미디어는 회원이 과오금을 주장하여 환불을 요구하는 경우, 정당하게 유료서비스 요금이 부과되었음을 입증하면 환불을 거부할 수 있습니다.
  4. 나소미디어는 과오금의 환불절차를 콘텐츠 이용자보호지침에 따라 처리합니다.
  제 22조 책임제한
  1. 나소미디어는 회원의 약관, 서비스 이용 방법 및 이용 기준을 준수하지 않는 등 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
  2. 나소미디어는 서비스를 통하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 보증하지 않습니다.
  3. 나소미디어는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
  4. 나소미디어는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.
  5. 나소미디어는 천재지변, 전쟁, 기간통신사업자의 서비스 중지, 제3자가 제공하는 오픈아이디의 인증 장애, 해결이 곤란한 기술적 결함 기타 불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
  6. 나소미디어는 사전에 공지된 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 서비스가 중지되거나 장애가 발생한 경우에 대하서는 책임이 면제됩니다.
  7. 회원은 자신의 결정에 의하여 나소미디어의 서비스를 사용하여 특정 프로그램이나 정보 등을 다운받거나 접근함으로써 입게 되는 컴퓨터 시스템상의 손해나 데이터, 정보의 상실에 대한 책임을 집니다.
  8. 나소미디어는 기간통신사업자가 전기통신서비스를 중지하거나 정상적으로 제공하지 아니하여 손해가 발생한 경우에는 책임이 면제됩니다.
  9. 회원의 컴퓨터 오류, 신상정보 및 전자우편 주소의 부정확한 기재, 비밀번호 관리의 소홀 등 회원의 귀책사유로 인해 손해가 발생한 경우 나소미디어는 책임을 지지 않습니다.
  10. 나소미디어는 회원의 컴퓨터 환경이나 나소미디어의 관리 범위에 있지 아니한 보안 문제로 인하여 발생하는 제반 문제 또는 현재의 보안기술 수준으로 방어가 곤란한 네트워크 해킹 등 나소미디어의 귀책사유 없이 발생하는 문제에 대해서 책임을 지지 않습니다.
  11. 나소미디어는 서비스가 제공한 내용에 대한 중요 정보의 정확성, 내용, 완전성, 적법성, 신뢰성 등에 대하여 보증하거나 책임을 지지 않으며, 사이트의 삭제, 저장실패, 잘못된 인도, 정보에 대한 제공에 대한 궁극적인 책임을 지지 않습니다. 또한, 나소미디어는 회원이 서비스 내 또는 웹사이트상에 게시 또는 전송한 정보, 자료, 사실의 신뢰도, 정확성, 완결성, 품질 등 내용에 대해서는 책임을 지지 않습니다.
  12. 나소미디어는 회원 상호간 또는 회원과 제 3자 상호 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다.
  13. 나소미디어는 회원이 서비스를 이용하여 기대하는 효용을 얻지 못한 것에 대하여 책임을 지지 않으며 서비스에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
  14. 나소미디어는 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 할 의무가 없으며, 그 결과에 대한 책임을 지지 않습니다.
  
  제 23조 준거법 및 재판관할
  1. 나소미디어와 회원 간 제기된 소송에는 대한민국법을 준거법으로 합니다.
  2. 나소미디어와 회원간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소합니다.
  
  부칙
  1. 본 약관은 2020년 8월 일부터 적용됩니다.
  </pre>`;
  return {
    props: {
      text: text,
    },
  };
}
