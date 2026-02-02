import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

// Define local interface for the new specific data structure
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

// [데이터] 상세 이미지가 여러 장 들어갈 수 있도록 나중에 images: [] 배열을 추가하시는 것을 추천합니다.
export const mockProjects: PortfolioItem[] = [
  {
    id: 1,
    title: '수완 성덕마을 대방3차',
    year: '2023',
    py: '50PY',
    image: 'https://i.postimg.cc/MHYhd4VN/Chat-GPT-Image-2026nyeon-2wol-2il-ojeon-10-50-09.png',
    category: '50PY',
    description: "우드와 화이트의 정교한 균형으로 고급스러운 주거 톤을 완성한 수완 성덕마을 대방3차 프로젝트입니다. 아이들의 놀이 공간을 집 전체의 흐름 속에 자연스럽게 녹여내었으며, 간결한 라인과 세심한 수납 디테일을 더해 일상의 편리함과 공간의 품격을 동시에 담았습니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "165m² / 50py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND co.,Ltd." },
    ],
    images: [
      "https://i.postimg.cc/fWvp4G0w/003.jpg",
      "https://i.postimg.cc/vHqKT5zh/009.jpg",
      "https://i.postimg.cc/DwSMXmpF/035.jpg",
      "https://i.postimg.cc/CxRQqdrR/039.jpg",
      "https://i.postimg.cc/q7nD1SdX/040.jpg",
      "https://i.postimg.cc/9fTgLKjN/041.jpg",
      "https://i.postimg.cc/PxQ3jDJN/047.jpg",
      "https://i.postimg.cc/G2x7CDtq/048.jpg",
      "https://i.postimg.cc/sxnTBRpy/054.jpg",
      "https://i.postimg.cc/9FMx6rhB/055.jpg",
      "https://i.postimg.cc/T35tPFh8/056.jpg",
      "https://i.postimg.cc/Xvwxf5wR/057.jpg",
      "https://i.postimg.cc/mDBj8rjF/061.jpg",
      "https://i.postimg.cc/rmjJbLYT/062.jpg",
      "https://i.postimg.cc/VvHFfW8r/063.jpg",
      "https://i.postimg.cc/wxW2Qgmt/064.jpg",
      "https://i.postimg.cc/Wbhn9CGY/066.jpg",
      "https://i.postimg.cc/vHkvChXd/068.jpg",
      "https://i.postimg.cc/Sx9G49tV/069.jpg",
      "https://i.postimg.cc/KYrrk2bF/076.jpg",
      "https://i.postimg.cc/L57zK4tD/078.jpg",
      "https://i.postimg.cc/5yGwd9BG/080.jpg",
      "https://i.postimg.cc/hPk92jPg/082.jpg",
      "https://i.postimg.cc/RVkcgFVq/084.jpg",
      "https://i.postimg.cc/W100Cvhz/085.jpg",
      "https://i.postimg.cc/d0vGKxCQ/088.jpg",
      "https://i.postimg.cc/gJ2RxL4H/093.jpg",
      "https://i.postimg.cc/sXHW7f0T/095.jpg",
      "https://i.postimg.cc/Ss19CQvF/097.jpg",
      "https://i.postimg.cc/PJB8V3H1/099.jpg",
      "https://i.postimg.cc/Fz2JCWmQ/100.jpg",
      "https://i.postimg.cc/dQXd01CW/113.jpg",
      "https://i.postimg.cc/TYDb56js/114.jpg",
      "https://i.postimg.cc/sgChpNwj/121.jpg",
      "https://i.postimg.cc/pLMFD6qK/123.jpg",
      "https://i.postimg.cc/rwGtgNPN/156.jpg",
      "https://i.postimg.cc/7Z1TXnWQ/157.jpg",
      "https://i.postimg.cc/d0qZfZbf/159.jpg",
      "https://i.postimg.cc/43BHRNZX/162.jpg",
      "https://i.postimg.cc/j52wx0dH/163.jpg",
      "https://i.postimg.cc/0jJzSYSN/166.jpg"
    ]
  },
  {
    id: 2,
    title: '수완 대주피오레 1단지',
    year: '2023',
    py: '39PY',
    image: 'https://i.postimg.cc/Hx0yv4nn/image-Dp2.png',
    category: '30PY',
    description: "화이트의 깨끗함과 우드의 무게감이 조화롭게 맞닿은 수완 대주피오레 현장입니다. 군더더기 없는 면 정리와 매립 조명의 섬세한 설계로 주방의 품격을 높였습니다. 특히 직선의 미학이 돋보이는 가구 라인은 일상을 더욱 정돈된 느낌으로 만들어 줍니다.",
    meta: [
      { label: "LOCATION", value: "Gwangsan-gu, Gwangju" },
      { label: "TYPE", value: "Residential" },
      { label: "AREA", value: "132m² / 39py" },
      { label: "YEAR", value: "2023" },
      { label: "DESIGN", value: "THE H BRAND co.,Ltd." },
    ],
    images: [
      "https://i.postimg.cc/v8gRnq4N/015.jpg",
      "https://i.postimg.cc/v8gRnq4q/016.jpg",
      "https://i.postimg.cc/nVj8mRXd/018.jpg",
      "https://i.postimg.cc/FFdtSWYn/019.jpg",
      "https://i.postimg.cc/Y2GcFnvT/021.jpg",
      "https://i.postimg.cc/QN9L74FR/025.jpg",
      "https://i.postimg.cc/MZMkBPck/027.jpg",
      "https://i.postimg.cc/nVj8mRsb/036.jpg",
      "https://i.postimg.cc/HWcGMZJ1/037.jpg",
      "https://i.postimg.cc/7PGvzsCy/041.jpg",
      "https://i.postimg.cc/HWcGMZJg/042.jpg",
      "https://i.postimg.cc/T2L8b7yT/048.jpg",
      "https://i.postimg.cc/sfQFW6Bg/050.jpg",
      "https://i.postimg.cc/7PGvzsCL/051.jpg",
      "https://i.postimg.cc/WpQBwGrc/055.jpg",
      "https://i.postimg.cc/pVgwJf8v/056.jpg",
      "https://i.postimg.cc/HWfq9w5H/059.jpg",
      "https://i.postimg.cc/05LT0Ym9/061.jpg",
      "https://i.postimg.cc/PfBgQWZt/062.jpg",
      "https://i.postimg.cc/d13BzfMv/066.jpg",
      "https://i.postimg.cc/vBTzpKRy/080.jpg",
      "https://i.postimg.cc/Vs3xWqMk/083.jpg",
      "https://i.postimg.cc/9Xv6YdTf/084.jpg",
      "https://i.postimg.cc/c1VpBRYH/088.jpg",
      "https://i.postimg.cc/44rDQ6tY/089.jpg",
      "https://i.postimg.cc/3rPsFXpy/101.jpg",
      "https://i.postimg.cc/FF2MVyck/102.jpg",
      "https://i.postimg.cc/c1VpBRYn/139.jpg",
      "https://i.postimg.cc/T2ZzJVmm/140.jpg",
      "https://i.postimg.cc/jqGp4HNH/142.jpg",
      "https://i.postimg.cc/ZY1Gx83L/143.jpg",
      "https://i.postimg.cc/CLkWPRHB/144.jpg",
      "https://i.postimg.cc/WbgQWd6J/145.jpg",
      "https://i.postimg.cc/tCWLSsth/146.jpg",
      "https://i.postimg.cc/ZKp17WF8/150.jpg",
      "https://i.postimg.cc/KvBdq1r7/152.jpg",
      "https://i.postimg.cc/WbgQWd66/153.jpg"
    ]
  },
  {
    id: 3,
    title: '남산 롯데캐슬',
    year: '2025',
    py: '55PY',
    image: 'https://i.postimg.cc/RhB5WCrB/caroline-badran-9Bh5YYZMGv0-unsplash.jpg',
    category: '50PY',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2025" }, { label: "AREA", value: "55PY" }],
    images: ['https://i.postimg.cc/RhB5WCrB/caroline-badran-9Bh5YYZMGv0-unsplash.jpg']
  },
  {
    id: 4,
    title: '서초 아트자이',
    year: '2025',
    py: '54PY',
    image: 'https://i.postimg.cc/FsT84VKr/darwin-interior-w-HAV8p9dd6Q-unsplash.jpg',
    category: '50PY',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2025" }, { label: "AREA", value: "54PY" }],
    images: ['https://i.postimg.cc/FsT84VKr/darwin-interior-w-HAV8p9dd6Q-unsplash.jpg']
  },
  {
    id: 5,
    title: '한남 더힐',
    year: '2024',
    py: '80PY',
    image: 'https://i.postimg.cc/4yL5rwQ8/istockphoto-1477604800-612x612.jpg',
    category: 'ETC',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2024" }, { label: "AREA", value: "80PY" }],
    images: ['https://i.postimg.cc/4yL5rwQ8/istockphoto-1477604800-612x612.jpg']
  },
  {
    id: 6,
    title: '성수 아크로서울포레스트',
    year: '2024',
    py: '60PY',
    image: 'https://picsum.photos/800/1000?random=6',
    category: 'ETC',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2024" }, { label: "AREA", value: "60PY" }],
    images: ['https://picsum.photos/800/1000?random=6']
  },
  {
    id: 7,
    title: '청담 에테르노',
    year: '2024',
    py: '70PY',
    image: 'https://picsum.photos/800/1000?random=7',
    category: 'ETC',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2024" }, { label: "AREA", value: "70PY" }],
    images: ['https://picsum.photos/800/1000?random=7']
  },
  {
    id: 8,
    title: '반포 래미안 원베일리',
    year: '2023',
    py: '46PY',
    image: 'https://picsum.photos/800/1000?random=8',
    category: '40PY',
    description: "준비중입니다.",
    meta: [{ label: "YEAR", value: "2023" }, { label: "AREA", value: "46PY" }],
    images: ['https://picsum.photos/800/1000?random=8']
  }
];

const categories = ['All', '20PY', '30PY', '40PY', '50PY', 'ETC'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-4 md:px-10 min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-brand-dark">PORTFOLIO</h1>
            <p className="text-gray-500">Premium spaces crafted by THE H BRAND.</p>
          </div>
          
          <div className="flex space-x-6 mt-8 md:mt-0 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest transition-colors whitespace-nowrap ${filter === cat ? 'text-brand-brown font-bold border-b border-brand-brown' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id}
              to={`/portfolio/${project.id}`} 
              className="group block cursor-pointer"
            >
              {/* Image Container - Vertical Aspect Ratio 3:4 */}
              <div className="overflow-hidden bg-gray-100 aspect-[3/4] relative mb-5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Info Bar */}
              <div className="flex justify-between items-start border-t border-transparent pt-1">
                <div className="flex flex-col pr-4">
                  <span className="text-brand-dark font-bold text-sm md:text-base mb-1 leading-tight group-hover:text-brand-brown transition-colors">
                    {project.title}
                  </span>
                  <span className="text-gray-400 text-xs font-light tracking-wide">
                    {project.year}
                  </span>
                </div>
                <span className="text-brand-dark text-sm font-medium tracking-wide whitespace-nowrap">
                  {project.py}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;