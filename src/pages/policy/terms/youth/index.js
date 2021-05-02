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

export default function TermsYouth({ text }) {
  return (
    <PolicyLayout title={"청소년 보호 정책"}>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </PolicyLayout>
  );
}

export async function getStaticProps() {
  const text = `<pre style="white-space: pre-wrap">
    나소미디어(이하 나소미디어라 합니다)는 불건전한 유해매체들로부터 청소년을 보호하기 위하여, [청소년보호법], [정보통신망 이용촉진 및 정보보호 등에 관한 법률] 등에 근거하여 청소년보호책임자를 지정하고 청소년보호정책을 시행하고 있습니다.

1. 유해정보에 대한 청소년접근제한 및 관리조치
나소미디어는 정보통신윤리위원회 심의규정 및 청소년유해매체물 기준에 따라, 19세 미만의 청소년들이 유해정보에 접근할 수 없도록 별도의 인증장치를 마련하고 있으며, 동시에 청소년유해매체물 표시를 통해 청소년유해정보가 노출되지 않도록 사전예방조치를 강구하고 있습니다.

2. 유해정보로부터의 청소년보호를 위한 업무 담당자 교육
회사는 정보통신업무 종사자를 대상으로 청소년 보호와 관련된 법령 및 제재기준, 유해정보 발견시 대처방법, 위반사항 처리방법 등을 교육하고 있습니다.

3. 유해정보로 인한 피해상담 및 고충처리
나소미디어는 청소년 유해매체물의 유통으로 인한 피해신고 및 처리를 위하여 신고센터를 통한 신고를 접수 받고 있으며, 청소년 유해매체물 신고센터 메일주소는 ‘청소년보호정책’에 명시되어 언제든지 확인 할 수 있습니다.
청소년 유해매체물로 확인되는 경우 매체물 등록자에게 경고조치 또는 위법성을 검토하여 삭제 등의 조치를 취합니다.

4. 개인정보 보호책임자 및 담당자
회사는 아래와 같이 청소년보호책임자 및 청소년보호담당자를 지정하여 청소년보호를 위해 최선을 다하고 있습니다.

[청소년보호 책임자]
이 름 : XXX
소 속 : 담당부서
전화번호 : 000-000-000
메 일 : nasonasomedia@gmail.com

[청소년보호 담당자]
이 름 : XXX
소 속 : 담당부서
전화번호 : 000-000-000
메 일 : nasonasomedia@gmail.com
    </pre>`;
  return {
    props: {
      text: text,
    },
  };
}
