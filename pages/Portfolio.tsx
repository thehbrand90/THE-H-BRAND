import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import { ArrowUpRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

export interface PortfolioItem {
  id: number;
  title: string;
  year: string;
  py: string;
  image: string;
  category: string;
  // Detail fields (Optional)
  description?: string;
  meta?: { label: string; value: string }[];
  images?: string[];
}

export const mockProjects: PortfolioItem[] = [
  {
    id: 26,
    title: '수완지구 대방노블랜드 1단지',
    year: '2026',
    py: '34PY',
    image: '/media/projects/p26-sw_dbmain-1600.webp',
    category: '30PY',
    description: "아이보리와 라이트 그레이 톤을 중심으로 면과 선을 정돈해, 밝고 차분한 개방감을 담아낸 34평형 프로젝트입니다. 현관부터 이어지는 긴 수납 벽과 절제된 라인 조명은 공간의 흐름을 매끄럽게 연결하고, 생활에 필요한 기능은 최대한 단정한 형태 안에 담았습니다. 주방은 화이트 톤의 아일랜드와 은은한 스톤 패턴 벽면을 조화시켜 미니멀한 인상 속에서도 깊이와 고급스러움을 더했습니다. 장식보다 비례와 수납, 빛의 균형에 집중해 실제 생활이 편안한 정제된 주거 공간으로 완성했습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "34py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db001.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db002.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db003.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db004.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db005.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db006.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db007.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db008.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db009.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db010.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db011.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db012.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db013.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db014.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db015.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db016.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db017.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db018.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db019.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db020.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db021.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db022.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db023.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db024.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db025.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db026.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db027.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db028.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db029.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db030.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db031.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db032.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db033.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db034.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db035.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db036.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db037.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db038.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db039.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db040.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db041.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db042.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db043.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db044.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db045.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db046.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_db047.webp"
    ]
  },
  {
    id: 25,
    title: '수완 해솔마을 현진에버빌 1단지',
    year: '2026',
    py: '43PY',
    image: '/media/projects/p25-suwan_hjmain-1600.webp',
    category: '40PY',
    description: "다크 우드와 밝은 그레이 톤의 조화로 차분한 깊이를 담아낸 공간입니다.\n\n불필요한 장식을 덜어내고 빛과 면, 소재의 연결감을 중심으로 집 전체의 흐름을 정리했습니다.\n\n공간 곳곳에는 생활 동선을 고려한 맞춤 수납과 가구를 계획해 절제된 디자인과 실용성이 자연스럽게 공존하는 주거 공간을 완성했습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "142㎡ / 43py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      ...Array.from(
        { length: 32 },
        (_, i) => `https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_hj${String(i + 1).padStart(3, '0')}.webp`
      ),
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_hj032_1.webp",
      ...Array.from(
        { length: 19 },
        (_, i) => `https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/sw_hj${String(i + 33).padStart(3, '0')}.webp`
      ),
    ]
  },
  {
    id: 24,
    title: '금호동 종원펠리스빌',
    year: '2026',
    py: '36PY',
    image: '/media/projects/p24-kjmain-1600.webp',
    category: '30PY',
    description: "금호동 종원펠리스빌 36평형 현장은 모던함과 미니멀리즘이 공존하는 공간입니다. 불필요한 장식을 덜어내고 면과 선의 정갈함을 강조하여 공간 본연의 가치를 드러냈습니다. 내추럴한 우드 톤과 차분한 그레이 베이스의 조화는 일상의 편안함을 더해주며, 효율적인 수납 설계와 동선 배치를 통해 거주자의 편의를 극대화했습니다. 단순함을 넘어선 정교한 디테일이 살아있는 하이엔드 주거 공간입니다.",
    meta: [
      { label: "LOCATION", value: "Seo-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "119m² / 36py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj001.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj002.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj003.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj004.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj005.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj006.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj007.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj008.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj009.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj010.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj011.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj012.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj013.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj014.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj015.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj016.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj017.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj018.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj019.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj020.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj021.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj022.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj023.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj024.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj025.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj026.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj027.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj028.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj029.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj030.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj031.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj032.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj033.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj034.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj035.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj036.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj037.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kj038.webp"
    ]
  },
  {
    id: 23,
    title: '화정동 힐스테이트 3단지',
    year: '2026',
    py: '40PY',
    image: '/media/projects/p23-hai1-1600.webp',
    category: '40PY',
    description: "화정동 힐스테이트 3단지 40평형 현장은 클래식한 우아함과 현대적인 미학이 완벽하게 조화를 이루는 공간입니다. 부드러운 소재와 정교하게 다듬어진 선들이 만들어내는 리듬감은 공간에 깊이를 더하며, 풍부한 채광을 담아내는 화이트 뉴트럴 톤의 베이스는 더욱 넓고 쾌적한 개방감을 선사합니다. 단순한 주거 공간을 넘어, 삶의 영감을 자극하는 갤러리 같은 무드를 담았습니다.",
    meta: [
      { label: "LOCATION", value: "Seo-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "132m² / 40py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai1.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai2.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai3.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai4.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai5.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai6.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai7.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh02.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh03.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh04.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh05.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh06.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh07.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh08.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh09.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh10.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh11.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh12.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh13.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh14.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh15.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh16.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh17.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh18.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh19.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh20.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh21.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hh22.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/hai2.webp"
    ]
  },
  {
    id: 22,
    title: '진월지구 남양휴튼',
    year: '2026',
    py: '43PY',
    image: '/media/projects/p22-nodae-1600.webp',
    category: '40PY',
    description: "진월지구 남양휴튼 43평형 인테리어 프로젝트입니다. 고객님의 라이프스타일을 반영하여 고급스럽고 세련된 공간으로 완성했습니다.",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "144m² / 43py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_001.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_005.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_006.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_009.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_038.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_039.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_040.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_041.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_042.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_043.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_044.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_045.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_046.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_047.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_048.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_060.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_061.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_075.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_076.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_077.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_078.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_080.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_081.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_084.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_085.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_086.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_087.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_088.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_089.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_091.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_093.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_094.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_095.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_096.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_097.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_098.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_103.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_108.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_111.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_113.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/nd_118.webp"
    ]
  },
  {
    id: 20,
    title: '봉선동 제일풍경채',
    year: '2026',
    py: '33PY',
    image: '/media/projects/p20-bongpong_p-1600.webp',
    category: '30PY',
    description: "미니멀 하이엔드의 정석을 보여주는 30평대 현장입니다. 공간 전체를 아우르는 이지적인 쿨톤 베이스로 시각적 개방감을 극대화하고, 곳곳에 정교하게 설계된 우드 포인트를 더해 하이엔드 특유의 깊이감을 완성했습니다. 톤 정리가 완벽한 캔버스 위에 고객의 센스가 돋보이는 가구와 그림이 배치되어, 시간이 흘러도 질리지 않는 트렌디한 무드를 선사합니다.",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "114B / 33py" },
      { label: "YEAR", value: "2026" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp001.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp002.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp003.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp008.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp009.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp015.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp016.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp017.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp050.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp051.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp052.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp053.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp054.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp055.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp056.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp057.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp058.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp065.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp066.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp067.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp068.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp069.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp071.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp1-1.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp72.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp73.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp74.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp75.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp76.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp77.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp78.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp79.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp80.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/bp81.webp"
    ]
  },
  {
    id: 21,
    title: '금호동 호반5차',
    year: '2025',
    py: '35PY',
    image: '/media/projects/p21-kh_profile-1600.webp',
    category: '30PY',
    description: "금호동 호반5차 프로젝트는 35평형의 공간을 가장 효율적이고 감각적으로 풀어낸 현장입니다. 따뜻한 베이지 톤을 베이스로 하여 아늑함을 강조하면서도, 간결한 라인 정리로 모던한 엣지를 놓치지 않았습니다. 일상의 편안함이 머무는 공간, 디에이치브랜드만의 섬세한 디테일로 완성했습니다.",
    meta: [
      { label: "LOCATION", value: "Seo-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "116m² / 35py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh025.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh026.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh029.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh030.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh031.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh032.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh035.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh036.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh037.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh038.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh039.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh040.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh041.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh042.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh044.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh045.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh046.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh047.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh048.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh049.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh050.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh056.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/kh057.webp"
    ]
  },
  {
    id: 18,
    title: '수완 성덕마을 대방3차',
    year: '2025',
    py: '50PY',
    image: '/media/projects/p18-pb2-1600.webp',
    category: '50PY',
    description: "하이엔드 인테리어의 정석적인 모습을 보여주는 수완 대방3차 현장입니다. 완벽하게 톤이 정리된 화이트 뉴트럴 베이스는 그 자체로 훌륭한 캔버스가 되어줍니다. 여기에 고객님의 남다른 센스가 돋보이는 가구와 그림 배치가 더해져, 시간이 지나도 질리지 않는 트렌디함을 완성했습니다. 비움으로써 오히려 풍성해지는 미니멀 럭셔리의 가치를 이 공간에 담았습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "165m² / 50py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh001.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh002.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh003.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh004.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh005.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh006.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh007.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh008.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh009.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh010.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh011.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh012.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh013.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh014.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh015.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh016.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh017.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh018.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh019.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh020.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh021.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh022.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh023.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh024.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh025.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh026.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh027.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh028.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh029.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh030.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh031.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh032.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh033.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh034.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh035.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh036.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh037.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh038.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh039.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh040.webp",
      "https://exdhgwkudejynccxqdhm.supabase.co/storage/v1/object/public/PORTFOLIO/wh041.webp"
    ]
  },
  {
    id: 15,
    title: '수완 새한포유',
    year: '2025',
    py: '36PY',
    image: '/media/projects/p15-peulpil-1600.webp',
    category: '30PY',
    description: "수완 새한포유 | Woody & Lovely Home 나무의 따뜻함과 사랑스러운 디테일이 만난 집. 아치형 선반, 원목 다이닝, 그리고 감각적인 소품들이 어우러져 세상에서 가장 포근한 공간을 만들었습니다. '우디크 러블리' 감성 가득한 일상 속 행복을 느껴보세요.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "120m² / 36py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p15-001.webp",
      "/media/projects/detail/p15-002.webp",
      "/media/projects/detail/p15-003.webp",
      "/media/projects/detail/p15-004.webp",
      "/media/projects/detail/p15-005.webp",
      "/media/projects/detail/p15-006.webp",
      "/media/projects/detail/p15-007.webp",
      "/media/projects/detail/p15-008.webp",
      "/media/projects/detail/p15-009.webp",
      "/media/projects/detail/p15-010.webp",
      "/media/projects/detail/p15-011.webp",
      "/media/projects/detail/p15-012.webp",
      "/media/projects/detail/p15-013.webp",
      "/media/projects/detail/p15-014.webp",
      "/media/projects/detail/p15-015.webp",
      "/media/projects/detail/p15-016.webp",
      "/media/projects/detail/p15-017.webp",
      "/media/projects/detail/p15-018.webp",
      "/media/projects/detail/p15-019.webp",
      "/media/projects/detail/p15-020.webp",
      "/media/projects/detail/p15-021.webp",
      "/media/projects/detail/p15-022.webp",
      "/media/projects/detail/p15-023.webp",
      "/media/projects/detail/p15-024.webp",
      "/media/projects/detail/p15-025.webp",
      "/media/projects/detail/p15-026.webp",
      "/media/projects/detail/p15-027.webp",
      "/media/projects/detail/p15-028.webp",
      "/media/projects/detail/p15-029.webp",
      "/media/projects/detail/p15-030.webp",
      "/media/projects/detail/p15-031.webp",
      "/media/projects/detail/p15-032.webp",
      "/media/projects/detail/p15-033.webp",
      "/media/projects/detail/p15-034.webp",
      "/media/projects/detail/p15-035.webp",
      "/media/projects/detail/p15-036.webp",
      "/media/projects/detail/p15-037.webp",
      "/media/projects/detail/p15-038.webp",
      "/media/projects/detail/p15-039.webp",
      "/media/projects/detail/p15-040.webp",
      "/media/projects/detail/p15-041.webp",
      "/media/projects/detail/p15-042.webp",
      "/media/projects/detail/p15-043.webp",
      "/media/projects/detail/p15-044.webp",
      "/media/projects/detail/p15-045.webp",
      "/media/projects/detail/p15-046.webp",
      "/media/projects/detail/p15-047.webp",
      "/media/projects/detail/p15-048.webp",
      "/media/projects/detail/p15-049.webp",
      "/media/projects/detail/p15-050.webp",
      "/media/projects/detail/p15-051.webp",
      "/media/projects/detail/p15-052.webp",
      "/media/projects/detail/p15-053.webp",
      "/media/projects/detail/p15-054.webp",
      "/media/projects/detail/p15-055.webp",
      "/media/projects/detail/p15-056.webp"
    ]
  },
  {
    id: 12,
    title: '노대동 송화레이크힐',
    year: '2025',
    py: '33PY',
    image: '/media/projects/p12-nosong-1600.webp',
    category: '30PY',
    description: "공간의 화사함과 원목 가구가 주는 편안함이 조화롭게 어우러진 현장입니다. 거실과 주방 곳곳에 배치된 원목 아이템들은 차분한 공간에 생동감을 불어넣으며 가구 그 이상의 오브제 역할을 합니다. 시각적 노이즈를 최소화한 면 정리와 정교한 조명 설계가 더해져, 가구 하나하나의 결이 살아나는 감각적인 주거 공간을 완성했습니다.",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "111m² / 33py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p12-001.webp",
      "/media/projects/detail/p12-002.webp",
      "/media/projects/detail/p12-003.webp",
      "/media/projects/detail/p12-004.webp",
      "/media/projects/detail/p12-005.webp",
      "/media/projects/detail/p12-006.webp",
      "/media/projects/detail/p12-007.webp",
      "/media/projects/detail/p12-008.webp",
      "/media/projects/detail/p12-009.webp",
      "/media/projects/detail/p12-010.webp",
      "/media/projects/detail/p12-011.webp",
      "/media/projects/detail/p12-012.webp",
      "/media/projects/detail/p12-013.webp",
      "/media/projects/detail/p12-014.webp",
      "/media/projects/detail/p12-015.webp",
      "/media/projects/detail/p12-016.webp",
      "/media/projects/detail/p12-017.webp",
      "/media/projects/detail/p12-018.webp",
      "/media/projects/detail/p12-019.webp",
      "/media/projects/detail/p12-020.webp",
      "/media/projects/detail/p12-021.webp",
      "/media/projects/detail/p12-022.webp",
      "/media/projects/detail/p12-023.webp",
      "/media/projects/detail/p12-024.webp",
      "/media/projects/detail/p12-025.webp"
    ]
  },
  {
    id: 14,
    title: '수완 영무예다음1차',
    year: '2025',
    py: '33PY',
    image: '/media/projects/p14-suwan-yeongmu-1600.webp',
    category: '30PY',
    description: "공간의 가치를 결정짓는 소재와 구조의 힘을 보여주는 프로젝트입니다. 거실 전면에 적용된 대리석 마감은 공간에 깊이감 있는 웅장함을 부여하고, 완전히 달라진 주방 레이아웃은 평수 그 이상의 와이드한 시야를 선사합니다. 소재의 고급스러움과 공간의 효율성이 완벽한 균형을 이루는 현장입니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "117m² / 33py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p14-001.webp",
      "/media/projects/detail/p14-002.webp",
      "/media/projects/detail/p14-003.webp",
      "/media/projects/detail/p14-004.webp",
      "/media/projects/detail/p14-005.webp",
      "/media/projects/detail/p14-006.webp",
      "/media/projects/detail/p14-007.webp",
      "/media/projects/detail/p14-008.webp",
      "/media/projects/detail/p14-009.webp",
      "/media/projects/detail/p14-010.webp",
      "/media/projects/detail/p14-011.webp",
      "/media/projects/detail/p14-012.webp",
      "/media/projects/detail/p14-013.webp",
      "/media/projects/detail/p14-014.webp",
      "/media/projects/detail/p14-015.webp",
      "/media/projects/detail/p14-016.webp",
      "/media/projects/detail/p14-017.webp",
      "/media/projects/detail/p14-018.webp",
      "/media/projects/detail/p14-019.webp",
      "/media/projects/detail/p14-020.webp",
      "/media/projects/detail/p14-021.webp",
      "/media/projects/detail/p14-022.webp",
      "/media/projects/detail/p14-023.webp",
      "/media/projects/detail/p14-024.webp",
      "/media/projects/detail/p14-025.webp",
      "/media/projects/detail/p14-026.webp",
      "/media/projects/detail/p14-027.webp",
      "/media/projects/detail/p14-028.webp",
      "/media/projects/detail/p14-029.webp"
    ]
  },
  {
    id: 16,
    title: '수완 우미린1차',
    year: '2025',
    py: '33PY',
    image: '/media/projects/p16-suwan-umilin1cha-1600.webp',
    category: '30PY',
    description: "차가운 세련미와 묵직한 온기가 공존하는 수완 우미린 1차입니다. 거실의 쿨톤 대리석 마감이 주는 도시적인 무드 속에, 주방 전면을 채운 다크우드 텍스처가 시선을 한순간에 압도합니다. 자칫 차가울 수 있는 쿨톤 베이스에 딥한 우드 톤을 과감하게 매치하여, 하이엔드 주거 공간에서만 느낄 수 있는 독보적인 웅장함과 깊이감을 구현했습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "113m² / 33py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p16-001.webp"
    ]
  },
  {
    id: 17,
    title: '수완 중흥s클래스 1차',
    year: '2025',
    py: '36PY',
    image: '/media/projects/p17-sujungpeulpil-1600.webp',
    category: '30PY',
    description: "군더더기 없는 쿨톤의 베이스로 시각적 개방감과 세련미를 동시에 잡은 수완 중흥 1차 현장입니다. 차가운 듯 정갈한 화이트&그레이 톤앤매너는 공간을 더욱 넓고 깊이 있게 만들어주며, 직선적인 라인 정리와 매끄러운 면 처리가 어우러져 현대적인 감각을 완성합니다. 불필요한 색채를 덜어내고 빛과 여백으로 채운, 미니멀 럭셔리의 정석을 보여주는 공간입니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "122m² / 36py" },
      { label: "YEAR", value: "2025" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p17-001.webp",
      "/media/projects/detail/p17-002.webp",
      "/media/projects/detail/p17-003.webp",
      "/media/projects/detail/p17-004.webp",
      "/media/projects/detail/p17-005.webp",
      "/media/projects/detail/p17-006.webp",
      "/media/projects/detail/p17-007.webp",
      "/media/projects/detail/p17-008.webp",
      "/media/projects/detail/p17-009.webp",
      "/media/projects/detail/p17-010.webp"
    ]
  },
  {
    id: 6,
    title: '운림동 무등파크2차',
    year: '2024',
    py: '49PY',
    image: '/media/projects/p6-unlimpofile-1600.webp',
    category: '40PY',
    description: "49평형의 광활한 공간감을 대담한 면 분할과 깊이 있는 질감으로 풀어낸 운림동 무등파크입니다. 거실 전면을 채운 딥 우드 월(Wood Wall)은 공간의 중심을 잡아주며 시각적인 웅장함을 선사합니다. 장식을 최소화하고 빛과 소재의 대비에 집중하여, 시간이 흘러도 질리지 않는 프리미엄 주거의 가치를 담았습니다.",
    meta: [
      { label: "LOCATION", value: "Dong-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "162m² / 49py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p6-001.webp",
      "/media/projects/detail/p6-002.webp",
      "/media/projects/detail/p6-003.webp",
      "/media/projects/detail/p6-004.webp",
      "/media/projects/detail/p6-005.webp",
      "/media/projects/detail/p6-006.webp",
      "/media/projects/detail/p6-007.webp",
      "/media/projects/detail/p6-008.webp",
      "/media/projects/detail/p6-009.webp",
      "/media/projects/detail/p6-010.webp",
      "/media/projects/detail/p6-011.webp",
      "/media/projects/detail/p6-012.webp",
      "/media/projects/detail/p6-013.webp",
      "/media/projects/detail/p6-014.webp",
      "/media/projects/detail/p6-015.webp",
      "/media/projects/detail/p6-016.webp",
      "/media/projects/detail/p6-017.webp",
      "/media/projects/detail/p6-018.webp",
      "/media/projects/detail/p6-019.webp",
      "/media/projects/detail/p6-020.webp",
      "/media/projects/detail/p6-021.webp",
      "/media/projects/detail/p6-022.webp",
      "/media/projects/detail/p6-023.webp",
      "/media/projects/detail/p6-024.webp",
      "/media/projects/detail/p6-025.webp",
      "/media/projects/detail/p6-026.webp",
      "/media/projects/detail/p6-027.webp",
      "/media/projects/detail/p6-028.webp",
      "/media/projects/detail/p6-029.webp",
      "/media/projects/detail/p6-030.webp",
      "/media/projects/detail/p6-031.webp",
      "/media/projects/detail/p6-032.webp",
      "/media/projects/detail/p6-033.webp",
      "/media/projects/detail/p6-034.webp",
      "/media/projects/detail/p6-035.webp"
    ]
  },
  {
    id: 7,
    title: '봉선동 광명메이루즈',
    year: '2024',
    py: '34PY',
    image: '/media/projects/p7-bongseondong-gwangmyeong-1600.webp',
    category: '30PY',
    description: "구조가 가진 개성을 디자인으로 승화시킨 감각적인 현장입니다. 자칫 까다로울 수 있는 특이한 구조를 영리하게 활용하여 훨씬 더 입체적이고 아늑한 무드를 연출했습니다. 거실을 감싸는 묵직한 우드 텍스처와 독특한 레이아웃이 만나 갤러리 같은 세련미와 집 본연의 편안함을 모두 잡은 새로운 제안입니다.",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "114m² / 34py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p7-001.webp",
      "/media/projects/detail/p7-002.webp",
      "/media/projects/detail/p7-003.webp",
      "/media/projects/detail/p7-004.webp",
      "/media/projects/detail/p7-005.webp",
      "/media/projects/detail/p7-006.webp",
      "/media/projects/detail/p7-007.webp",
      "/media/projects/detail/p7-008.webp",
      "/media/projects/detail/p7-009.webp",
      "/media/projects/detail/p7-010.webp",
      "/media/projects/detail/p7-011.webp",
      "/media/projects/detail/p7-012.webp",
      "/media/projects/detail/p7-013.webp",
      "/media/projects/detail/p7-014.webp",
      "/media/projects/detail/p7-015.webp",
      "/media/projects/detail/p7-016.webp",
      "/media/projects/detail/p7-017.webp",
      "/media/projects/detail/p7-018.webp",
      "/media/projects/detail/p7-019.webp",
      "/media/projects/detail/p7-020.webp",
      "/media/projects/detail/p7-021.webp",
      "/media/projects/detail/p7-022.webp",
      "/media/projects/detail/p7-023.webp",
      "/media/projects/detail/p7-024.webp",
      "/media/projects/detail/p7-025.webp",
      "/media/projects/detail/p7-026.webp",
      "/media/projects/detail/p7-027.webp",
      "/media/projects/detail/p7-028.webp",
      "/media/projects/detail/p7-029.webp",
      "/media/projects/detail/p7-030.webp",
      "/media/projects/detail/p7-031.webp",
      "/media/projects/detail/p7-032.webp",
      "/media/projects/detail/p7-033.webp",
      "/media/projects/detail/p7-034.webp",
      "/media/projects/detail/p7-035.webp",
      "/media/projects/detail/p7-036.webp"
    ]
  },
  {
    id: 8,
    title: '첨단2지구 한양수자인',
    year: '2024',
    py: '25PY',
    image: '/media/projects/p8-cheom2han-yang-1600.webp',
    category: '20PY',
    description: "비움의 미학 속에 사용자의 취향을 채운 컨셉. 특색 있는 레이아웃을 영리하게 활용하여 독립적이면서도 연결된 아늑한 공간감을 구현했습니다. 섬세하게 제작된 우드 가구들은 공간의 구조적 특징과 완벽하게 맞물리며, 미니멀리즘이 주는 평온함 속에 거주자만의 감각적인 라이프스타일을 녹여낸 프로젝트입니다.",
    meta: [
      { label: "LOCATION", value: "Buk-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "84A / 25py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p8-001.webp",
      "/media/projects/detail/p8-002.webp",
      "/media/projects/detail/p8-003.webp",
      "/media/projects/detail/p8-004.webp",
      "/media/projects/detail/p8-005.webp",
      "/media/projects/detail/p8-006.webp",
      "/media/projects/detail/p8-007.webp",
      "/media/projects/detail/p8-008.webp",
      "/media/projects/detail/p8-009.webp",
      "/media/projects/detail/p8-010.webp",
      "/media/projects/detail/p8-011.webp",
      "/media/projects/detail/p8-012.webp",
      "/media/projects/detail/p8-013.webp",
      "/media/projects/detail/p8-014.webp",
      "/media/projects/detail/p8-015.webp",
      "/media/projects/detail/p8-016.webp",
      "/media/projects/detail/p8-017.webp",
      "/media/projects/detail/p8-018.webp",
      "/media/projects/detail/p8-019.webp",
      "/media/projects/detail/p8-020.webp",
      "/media/projects/detail/p8-021.webp",
      "/media/projects/detail/p8-022.webp",
      "/media/projects/detail/p8-023.webp",
      "/media/projects/detail/p8-024.webp",
      "/media/projects/detail/p8-025.webp",
      "/media/projects/detail/p8-026.webp",
      "/media/projects/detail/p8-027.webp",
      "/media/projects/detail/p8-028.webp",
      "/media/projects/detail/p8-029.webp",
      "/media/projects/detail/p8-030.webp",
      "/media/projects/detail/p8-031.webp",
      "/media/projects/detail/p8-032.webp",
      "/media/projects/detail/p8-033.webp",
      "/media/projects/detail/p8-034.webp",
      "/media/projects/detail/p8-035.webp",
      "/media/projects/detail/p8-036.webp",
      "/media/projects/detail/p8-037.webp",
      "/media/projects/detail/p8-038.webp",
      "/media/projects/detail/p8-039.webp",
      "/media/projects/detail/p8-040.webp",
      "/media/projects/detail/p8-041.webp",
      "/media/projects/detail/p8-042.webp",
      "/media/projects/detail/p8-043.webp"
    ]
  },
  {
    id: 9,
    title: '일곡동 현대3차',
    year: '2024',
    py: '32PY',
    image: '/media/projects/p9-omognun-i-1600.webp',
    category: '30PY',
    description: "오래된 구축의 틀을 깨고, 요즘 가장 사랑받는 아이보리 뉴트럴 톤으로 새롭게 태어난 일곡동 현대 24평입니다. 공간 전체를 감싸는 부드러운 컬러감은 유행을 타지 않으면서도 세련된 무드를 유지하는 모두가 선호하는 트렌디한 주거 공간컨셉입니다.",
    meta: [
      { label: "LOCATION", value: "Buk-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "107m² / 32py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p9-001.webp",
      "/media/projects/detail/p9-002.webp",
      "/media/projects/detail/p9-003.webp",
      "/media/projects/detail/p9-004.webp",
      "/media/projects/detail/p9-005.webp",
      "/media/projects/detail/p9-006.webp",
      "/media/projects/detail/p9-007.webp",
      "/media/projects/detail/p9-008.webp",
      "/media/projects/detail/p9-009.webp",
      "/media/projects/detail/p9-010.webp",
      "/media/projects/detail/p9-011.webp",
      "/media/projects/detail/p9-012.webp",
      "/media/projects/detail/p9-013.webp",
      "/media/projects/detail/p9-014.webp",
      "/media/projects/detail/p9-015.webp",
      "/media/projects/detail/p9-016.webp",
      "/media/projects/detail/p9-017.webp",
      "/media/projects/detail/p9-018.webp",
      "/media/projects/detail/p9-019.webp",
      "/media/projects/detail/p9-020.webp"
    ]
  },
  {
    id: 10,
    title: '수완 대주피오레 1단지',
    year: '2024',
    py: '39PY',
    image: '/media/projects/p10-sudae1-1600.webp',
    category: '30PY',
    description: "선적인 미니멀리즘과 차분한 컬러 팔레트가 어우러진 주방 설계입니다. 거대한 아일랜드를 전면에 배치하여 호텔 라운지 같은 고급스러운 무드를 연출했습니다. 군더더기 없는 면 정리와 매립 조명의 섬세한 조화를 통해, 유행을 타지 않는 정갈하고 모던한 주거 톤을 완성한 수완대주피오레 1단지 현장입니다",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "132m² C-Type / 39py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p10-001.webp",
      "/media/projects/detail/p10-002.webp",
      "/media/projects/detail/p10-003.webp",
      "/media/projects/detail/p10-004.webp",
      "/media/projects/detail/p10-005.webp",
      "/media/projects/detail/p10-006.webp",
      "/media/projects/detail/p10-007.webp",
      "/media/projects/detail/p10-008.webp",
      "/media/projects/detail/p10-009.webp",
      "/media/projects/detail/p10-010.webp",
      "/media/projects/detail/p10-011.webp",
      "/media/projects/detail/p10-012.webp",
      "/media/projects/detail/p10-013.webp",
      "/media/projects/detail/p10-014.webp",
      "/media/projects/detail/p10-015.webp",
      "/media/projects/detail/p10-016.webp",
      "/media/projects/detail/p10-017.webp",
      "/media/projects/detail/p10-018.webp",
      "/media/projects/detail/p10-019.webp",
      "/media/projects/detail/p10-020.webp",
      "/media/projects/detail/p10-021.webp",
      "/media/projects/detail/p10-022.webp",
      "/media/projects/detail/p10-023.webp",
      "/media/projects/detail/p10-024.webp",
      "/media/projects/detail/p10-025.webp",
      "/media/projects/detail/p10-026.webp",
      "/media/projects/detail/p10-027.webp",
      "/media/projects/detail/p10-028.webp",
      "/media/projects/detail/p10-029.webp",
      "/media/projects/detail/p10-030.webp",
      "/media/projects/detail/p10-031.webp",
      "/media/projects/detail/p10-032.webp",
      "/media/projects/detail/p10-033.webp",
      "/media/projects/detail/p10-034.webp",
      "/media/projects/detail/p10-035.webp",
      "/media/projects/detail/p10-036.webp",
      "/media/projects/detail/p10-037.webp",
      "/media/projects/detail/p10-038.webp",
      "/media/projects/detail/p10-039.webp",
      "/media/projects/detail/p10-040.webp",
      "/media/projects/detail/p10-041.webp"
    ]
  },
  {
    id: 11,
    title: '봉선동 포스코더샵',
    year: '2024',
    py: '55PY',
    image: '/media/projects/p11-bongpo55-1600.webp',
    category: '50PY',
    description: "공간의 본질에 집중하여 시간이 지나도 변치 않는 가치를 담은 봉선동 포스코더샵입니다. 복잡한 장식 대신 정교한 선의 미학을 활용하여 주거 공간을 갤러리처럼 연출했습니다. 차분하게 가라앉은 톤앤매너는 일상에 깊은 안식과 평온을 제공합니다.",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "182m² / 55py" },
      { label: "YEAR", value: "2024" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p11-001.webp",
      "/media/projects/detail/p11-002.webp",
      "/media/projects/detail/p11-003.webp",
      "/media/projects/detail/p11-004.webp",
      "/media/projects/detail/p11-005.webp",
      "/media/projects/detail/p11-006.webp",
      "/media/projects/detail/p11-007.webp",
      "/media/projects/detail/p11-008.webp",
      "/media/projects/detail/p11-009.webp",
      "/media/projects/detail/p11-010.webp",
      "/media/projects/detail/p11-011.webp",
      "/media/projects/detail/p11-012.webp",
      "/media/projects/detail/p11-013.webp",
      "/media/projects/detail/p11-014.webp",
      "/media/projects/detail/p11-015.webp",
      "/media/projects/detail/p11-016.webp",
      "/media/projects/detail/p11-017.webp",
      "/media/projects/detail/p11-018.webp",
      "/media/projects/detail/p11-019.webp",
      "/media/projects/detail/p11-020.webp",
      "/media/projects/detail/p11-021.webp"
    ]
  },
  {
    id: 13,
    title: '수완 성덕마을 대방3차(옥탑)',
    year: '2023',
    py: '50PY',
    image: '/media/projects/p13-sudae3-1600.webp',
    category: '50PY',
    description: "최상층 옥탑만이 가질 수 있는 독보적인 구조미를 살린 수완 성덕마을 대방3차 현장입니다. 높은 층고를 따라 흐르는 깔끔한 라인과 우드&화이트의 정교한 균형은 주거 공간을 넘어선 갤러리 같은 무드를 선사합니다. 절제된 디자인 속에 수납 디테일을 녹여내어, 일상의 복잡함은 덜어내고 옥탑 공간의 낭만과 품격만을 남겼습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "165m² / 50py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p13-001.webp",
      "/media/projects/detail/p13-002.webp",
      "/media/projects/detail/p13-003.webp",
      "/media/projects/detail/p13-004.webp",
      "/media/projects/detail/p13-005.webp",
      "/media/projects/detail/p13-006.webp",
      "/media/projects/detail/p13-007.webp",
      "/media/projects/detail/p13-008.webp",
      "/media/projects/detail/p13-009.webp",
      "/media/projects/detail/p13-010.webp",
      "/media/projects/detail/p13-011.webp",
      "/media/projects/detail/p13-012.webp",
      "/media/projects/detail/p13-013.webp",
      "/media/projects/detail/p13-014.webp",
      "/media/projects/detail/p13-015.webp",
      "/media/projects/detail/p13-016.webp",
      "/media/projects/detail/p13-017.webp",
      "/media/projects/detail/p13-018.webp",
      "/media/projects/detail/p13-019.webp",
      "/media/projects/detail/p13-020.webp",
      "/media/projects/detail/p13-021.webp",
      "/media/projects/detail/p13-022.webp",
      "/media/projects/detail/p13-023.webp",
      "/media/projects/detail/p13-024.webp",
      "/media/projects/detail/p13-025.webp",
      "/media/projects/detail/p13-026.webp",
      "/media/projects/detail/p13-027.webp",
      "/media/projects/detail/p13-028.webp",
      "/media/projects/detail/p13-029.webp",
      "/media/projects/detail/p13-030.webp",
      "/media/projects/detail/p13-031.webp",
      "/media/projects/detail/p13-032.webp",
      "/media/projects/detail/p13-033.webp",
      "/media/projects/detail/p13-034.webp",
      "/media/projects/detail/p13-035.webp",
      "/media/projects/detail/p13-036.webp",
      "/media/projects/detail/p13-037.webp",
      "/media/projects/detail/p13-038.webp",
      "/media/projects/detail/p13-039.webp",
      "/media/projects/detail/p13-040.webp",
      "/media/projects/detail/p13-041.webp",
      "/media/projects/detail/p13-042.webp",
      "/media/projects/detail/p13-043.webp",
      "/media/projects/detail/p13-044.webp"
    ]
  },
  {
    id: 1,
    title: '수완 성덕마을 대방3차',
    year: '2023',
    py: '50PY',
    image: '/media/projects/p1-Chat-GPT-Image-2026nyeon-2wol-2il-ojeon-10-50-09-1600.webp',
    category: '50PY',
    description: "우드와 화이트의 정교한 균형으로 고급스러운 주거 톤을 완성한 수완 성덕마을 대방3차 프로젝트입니다. 아이들의 놀이 공간을 집 전체의 흐름 속에 자연스럽게 녹여내었으며, 간결한 라인과 세심한 수납 디테일을 더해 일상의 편리함과 공간의 품격을 동시에 담았습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "165m² / 50py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p1-001.webp",
      "/media/projects/detail/p1-002.webp",
      "/media/projects/detail/p1-003.webp",
      "/media/projects/detail/p1-004.webp",
      "/media/projects/detail/p1-005.webp",
      "/media/projects/detail/p1-006.webp",
      "/media/projects/detail/p1-007.webp",
      "/media/projects/detail/p1-008.webp",
      "/media/projects/detail/p1-009.webp",
      "/media/projects/detail/p1-010.webp",
      "/media/projects/detail/p1-011.webp",
      "/media/projects/detail/p1-012.webp",
      "/media/projects/detail/p1-013.webp",
      "/media/projects/detail/p1-014.webp",
      "/media/projects/detail/p1-015.webp",
      "/media/projects/detail/p1-016.webp",
      "/media/projects/detail/p1-017.webp",
      "/media/projects/detail/p1-018.webp",
      "/media/projects/detail/p1-019.webp",
      "/media/projects/detail/p1-020.webp",
      "/media/projects/detail/p1-021.webp",
      "/media/projects/detail/p1-022.webp",
      "/media/projects/detail/p1-023.webp",
      "/media/projects/detail/p1-024.webp",
      "/media/projects/detail/p1-025.webp",
      "/media/projects/detail/p1-026.webp",
      "/media/projects/detail/p1-027.webp",
      "/media/projects/detail/p1-028.webp",
      "/media/projects/detail/p1-029.webp",
      "/media/projects/detail/p1-030.webp",
      "/media/projects/detail/p1-031.webp",
      "/media/projects/detail/p1-032.webp",
      "/media/projects/detail/p1-033.webp",
      "/media/projects/detail/p1-034.webp",
      "/media/projects/detail/p1-035.webp",
      "/media/projects/detail/p1-036.webp",
      "/media/projects/detail/p1-037.webp",
      "/media/projects/detail/p1-038.webp",
      "/media/projects/detail/p1-039.webp",
      "/media/projects/detail/p1-040.webp",
      "/media/projects/detail/p1-041.webp"
    ]
  },
  {
    id: 2,
    title: '수완 대주피오레 1단지',
    year: '2023',
    py: '39PY',
    image: '/media/projects/p2-image-Dp2-1600.webp',
    category: '30PY',
    description: "화이트의 깨끗함과 우드의 무게감이 조화롭게 맞닿은 수완 대주피오레 현장입니다. 군더더기 없는 면 정리와 매립 조명의 섬세한 설계로 주방의 품격을 높였습니다. 특히 직선의 미학이 돋보이는 가구 라인은 일상을 더욱 정돈된 느낌으로 만들어 줍니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "132m² / 39py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p2-001.webp",
      "/media/projects/detail/p2-002.webp",
      "/media/projects/detail/p2-003.webp",
      "/media/projects/detail/p2-004.webp",
      "/media/projects/detail/p2-005.webp",
      "/media/projects/detail/p2-006.webp",
      "/media/projects/detail/p2-007.webp",
      "/media/projects/detail/p2-008.webp",
      "/media/projects/detail/p2-009.webp",
      "/media/projects/detail/p2-010.webp",
      "/media/projects/detail/p2-011.webp",
      "/media/projects/detail/p2-012.webp",
      "/media/projects/detail/p2-013.webp",
      "/media/projects/detail/p2-014.webp",
      "/media/projects/detail/p2-015.webp",
      "/media/projects/detail/p2-016.webp",
      "/media/projects/detail/p2-017.webp",
      "/media/projects/detail/p2-018.webp",
      "/media/projects/detail/p2-019.webp",
      "/media/projects/detail/p2-020.webp",
      "/media/projects/detail/p2-021.webp",
      "/media/projects/detail/p2-022.webp",
      "/media/projects/detail/p2-023.webp",
      "/media/projects/detail/p2-024.webp",
      "/media/projects/detail/p2-025.webp",
      "/media/projects/detail/p2-026.webp",
      "/media/projects/detail/p2-027.webp",
      "/media/projects/detail/p2-028.webp",
      "/media/projects/detail/p2-029.webp",
      "/media/projects/detail/p2-030.webp",
      "/media/projects/detail/p2-031.webp",
      "/media/projects/detail/p2-032.webp",
      "/media/projects/detail/p2-033.webp",
      "/media/projects/detail/p2-034.webp",
      "/media/projects/detail/p2-035.webp",
      "/media/projects/detail/p2-036.webp",
      "/media/projects/detail/p2-037.webp"
    ]
  },
  {
    id: 3,
    title: '운암동 블루시안2차',
    year: '2023',
    py: '33PY',
    image: '/media/projects/p3-image-Dp3-1600.webp',
    category: '30PY',
    description: "차분하게 가라앉은 톤 위로 간결한 선의 미학을 담아낸 운암 벽산블루밍 프로젝트입니다. 공간 전체를 가로지르는 마그네틱 조명을 포인트로 활용하여 리듬감 있는 시각적 흐름을 완성했습니다. 불필요한 장식은 덜어내고, 빛과 라인만으로 모던한 주거의 품격을 정의합니다.",
    meta: [
      { label: "LOCATION", value: "Buk-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "108m² / 33py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p3-001.webp",
      "/media/projects/detail/p3-002.webp",
      "/media/projects/detail/p3-003.webp",
      "/media/projects/detail/p3-004.webp",
      "/media/projects/detail/p3-005.webp",
      "/media/projects/detail/p3-006.webp",
      "/media/projects/detail/p3-007.webp",
      "/media/projects/detail/p3-008.webp",
      "/media/projects/detail/p3-009.webp",
      "/media/projects/detail/p3-010.webp",
      "/media/projects/detail/p3-011.webp",
      "/media/projects/detail/p3-012.webp",
      "/media/projects/detail/p3-013.webp",
      "/media/projects/detail/p3-014.webp",
      "/media/projects/detail/p3-015.webp",
      "/media/projects/detail/p3-016.webp",
      "/media/projects/detail/p3-017.webp",
      "/media/projects/detail/p3-018.webp",
      "/media/projects/detail/p3-019.webp",
      "/media/projects/detail/p3-020.webp",
      "/media/projects/detail/p3-021.webp",
      "/media/projects/detail/p3-022.webp",
      "/media/projects/detail/p3-023.webp",
      "/media/projects/detail/p3-024.webp",
      "/media/projects/detail/p3-025.webp",
      "/media/projects/detail/p3-026.webp",
      "/media/projects/detail/p3-027.webp",
      "/media/projects/detail/p3-028.webp"
    ]
  },
  {
    id: 4,
    title: '봉선동 포스코더샵',
    year: '2023',
    py: '26PY',
    image: '/media/projects/p4-bongpo26-1600.webp',
    category: '20PY',
    description: "창밖으로 보이는 초록빛 풍경이 인테리어의 완성도가 되는 곳. 봉선동 포스코의 거실은 자연광을 가득 머금은 화이트 톤과 묵직한 우드 가구가 만나 차분한 안정감을 줍니다. 계절의 변화를 일상에서 가장 가깝게 느낄 수 있도록 가구 배치와 톤앤매너를 섬세하게 조율하여, 머무는 것만으로도 힐링이 되는 주거 공간을 완성했습니다",
    meta: [
      { label: "LOCATION", value: "Nam-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "86m² / 26py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p4-001.webp",
      "/media/projects/detail/p4-002.webp",
      "/media/projects/detail/p4-003.webp",
      "/media/projects/detail/p4-004.webp",
      "/media/projects/detail/p4-005.webp",
      "/media/projects/detail/p4-006.webp",
      "/media/projects/detail/p4-007.webp",
      "/media/projects/detail/p4-008.webp",
      "/media/projects/detail/p4-009.webp",
      "/media/projects/detail/p4-010.webp",
      "/media/projects/detail/p4-011.webp",
      "/media/projects/detail/p4-012.webp",
      "/media/projects/detail/p4-013.webp",
      "/media/projects/detail/p4-014.webp",
      "/media/projects/detail/p4-015.webp",
      "/media/projects/detail/p4-016.webp",
      "/media/projects/detail/p4-017.webp",
      "/media/projects/detail/p4-018.webp",
      "/media/projects/detail/p4-019.webp"
    ]
  },
  {
    id: 5,
    title: '나주 빛가람동 우미린',
    year: '2023',
    py: '29PY',
    image: '/media/projects/p5-proflienaju-1600.webp',
    category: '20PY',
    description: "취향이 깃든 공간의 가치 우드 홈바와 안방 캠핑 테라스 등 고객의 라이프스타일을 공간의 흐름 안에 자연스럽게 녹여내었으며, 깔끔한 수납 디테일과 감각적인 공간 활용을 통해 일상에 즐거움을 더하는 29평 인테리어의 해답을 제시합니다.",
    meta: [
      { label: "LOCATION", value: "Naju-si, Jeollanam-do" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "99m² / 29py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." }
    ],
    images: [
      "/media/projects/detail/p5-001.webp",
      "/media/projects/detail/p5-002.webp",
      "/media/projects/detail/p5-003.webp",
      "/media/projects/detail/p5-004.webp",
      "/media/projects/detail/p5-005.webp",
      "/media/projects/detail/p5-006.webp",
      "/media/projects/detail/p5-007.webp",
      "/media/projects/detail/p5-008.webp",
      "/media/projects/detail/p5-009.webp",
      "/media/projects/detail/p5-010.webp",
      "/media/projects/detail/p5-011.webp",
      "/media/projects/detail/p5-012.webp",
      "/media/projects/detail/p5-013.webp",
      "/media/projects/detail/p5-014.webp",
      "/media/projects/detail/p5-015.webp",
      "/media/projects/detail/p5-016.webp",
      "/media/projects/detail/p5-017.webp",
      "/media/projects/detail/p5-018.webp",
      "/media/projects/detail/p5-019.webp",
      "/media/projects/detail/p5-020.webp",
      "/media/projects/detail/p5-021.webp",
      "/media/projects/detail/p5-022.webp",
      "/media/projects/detail/p5-023.webp",
      "/media/projects/detail/p5-024.webp",
      "/media/projects/detail/p5-025.webp",
      "/media/projects/detail/p5-026.webp",
      "/media/projects/detail/p5-027.webp",
      "/media/projects/detail/p5-028.webp",
      "/media/projects/detail/p5-029.webp",
      "/media/projects/detail/p5-030.webp",
      "/media/projects/detail/p5-031.webp",
      "/media/projects/detail/p5-032.webp",
      "/media/projects/detail/p5-033.webp",
      "/media/projects/detail/p5-034.webp"
    ]
  },
  {
    id: 19,
    title: '무진로 진아리채',
    year: '2022',
    py: '42PY',
    image: '/media/projects/p19-mua-1600.webp',
    category: '40PY',
    description: "무진로 진아리채 프로젝트는 공간의 여백을 살린 미니멀리즘과 실용적인 동선 설계가 돋보이는 현장입니다. 42평형의 넓은 공간감을 극대화하기 위해 화이트 베이스에 절제된 조명 계획을 적용하였으며, 고객의 라이프스타일을 반영한 맞춤 가구 제작으로 수납 효율과 심미성을 동시에 높였습니다. 군더더기 없는 마감과 차분한 톤앤매너가 어우러져 편안하고 고급스러운 주거 분위기를 선사합니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "141m² / 42py" },
      { label: "YEAR", value: "2022" },
      { label: "DESIGN", value: "THE H BRAND Co., Ltd." },
    ],
    images: [
      "/media/projects/detail/p19-001.webp",
      "/media/projects/detail/p19-002.webp",
      "/media/projects/detail/p19-003.webp",
      "/media/projects/detail/p19-004.webp",
      "/media/projects/detail/p19-005.webp",
      "/media/projects/detail/p19-006.webp",
      "/media/projects/detail/p19-007.webp",
      "/media/projects/detail/p19-008.webp",
      "/media/projects/detail/p19-009.webp",
      "/media/projects/detail/p19-010.webp",
      "/media/projects/detail/p19-011.webp",
      "/media/projects/detail/p19-012.webp",
      "/media/projects/detail/p19-013.webp",
      "/media/projects/detail/p19-014.webp",
      "/media/projects/detail/p19-015.webp",
      "/media/projects/detail/p19-016.webp",
      "/media/projects/detail/p19-017.webp",
      "/media/projects/detail/p19-018.webp",
      "/media/projects/detail/p19-019.webp",
      "/media/projects/detail/p19-020.webp",
      "/media/projects/detail/p19-021.webp",
      "/media/projects/detail/p19-022.webp",
      "/media/projects/detail/p19-023.webp",
      "/media/projects/detail/p19-024.webp",
      "/media/projects/detail/p19-025.webp",
      "/media/projects/detail/p19-026.webp"
    ]
  }
];

/**
 * Grid/card images are stored locally in two widths (800w, 1600w) so the
 * portfolio index no longer downloads ~20 MB of PNGs. `image` holds the
 * 1600w file; the 800w sibling is derived for small viewports.
 */
export const responsiveImage = (path: string) => {
  if (path.includes('-1600.webp')) {
    return {
      src: path,
      srcSet: `${path.replace('-1600.webp', '-800.webp')} 800w, ${path} 1600w`,
    };
  }
  return { src: path, srcSet: undefined };
};

const categories = ['ALL', '20PY', '30PY', '40PY', '50PY', 'ETC'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects =
    filter === 'ALL' ? mockProjects : mockProjects.filter((p) => p.category === filter);

  return (
    <div className="w-full min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="border-b border-brand-line/60">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 pt-32 md:pt-40 pb-10 md:pb-14">
          <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-6">
            PORTFOLIO
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-display-xl text-brand-ink">Selected Works</h1>
              <p className="mt-6 text-sm md:text-base font-light text-brand-gray max-w-xl leading-relaxed break-keep-all">
                광주·전남에서 완성한 주거 공간들. 면과 선, 빛과 재료의 균형으로 완성한 THE H
                BRAND의 프로젝트입니다.
              </p>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto hide-scrollbar pb-1">
              {categories.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    aria-pressed={active}
                    className={`shrink-0 font-montserrat text-[10px] tracking-[0.18em] px-4 py-2.5 border transition-all duration-300 ${
                      active
                        ? 'bg-brand-dark border-brand-dark text-brand-bg'
                        : 'border-brand-line text-brand-gray hover:border-brand-dark hover:text-brand-ink'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 py-12 md:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <p className="font-montserrat text-[10px] tracking-[0.22em] text-brand-gray">
            {filteredProjects.length} PROJECTS
          </p>
          <p className="hidden md:block font-montserrat text-[10px] tracking-[0.22em] text-brand-gray">
            {filter === 'ALL' ? 'ALL SIZE' : filter}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 md:gap-y-16">
          {filteredProjects.map((project, index) => {
            const img = responsiveImage(project.image);
            return (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group block"
                aria-label={`${project.title} 프로젝트 보기`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-stone/50">
                  <LazyImage
                    src={img.src}
                    srcSet={img.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    containerClassName="w-full h-full"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 font-montserrat text-[9px] tracking-[0.2em] text-white/75 mix-blend-difference">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-dark opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4 border-t border-brand-line/70 pt-4">
                  <div className="min-w-0">
                    <h2 className="text-[15px] font-medium text-brand-ink leading-snug group-hover:text-brand-clay transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-1.5 font-montserrat text-[10px] tracking-[0.16em] text-brand-gray">
                      {project.year} · {project.category}
                    </p>
                  </div>
                  <span className="font-montserrat text-[11px] tracking-[0.12em] text-brand-ink/70 whitespace-nowrap">
                    {project.py}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-24 text-center text-sm text-brand-gray font-light">
            해당 평형의 프로젝트가 아직 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
