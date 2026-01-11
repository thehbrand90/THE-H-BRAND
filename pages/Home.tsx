import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Introduction / Philosophy Section */}
      <section className="py-20 md:py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 block">
              Philosophy
            </span>
            <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-8">
              정직한 시공은 <br/>기준이어야 합니다.
            </h2>
            <div className="w-24 h-[2px] bg-black mb-8"></div>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              특별해서가 아니라<br/>
              당연해야 하기 때문에.
            </p>
          </div>
          <div className="space-y-6 md:space-y-8 text-gray-600 leading-loose font-light text-base break-keep">
            <p className="text-xl md:text-2xl text-black font-bold">
              Trust begets trust.
            </p>
            <p>
              저희 THE H는 단순히 인테리어를 '시공'하는 회사가 아니라,<br/>
              <span className="font-bold text-black">사람이 머무는 공간에 신뢰와 기준을 설계하는 브랜드</span>입니다.<br/><br/>
              "기본에 충실한 정직한 시공"<br/>
              그것이 우리가 생각하는 가장 강력한 디자인입니다.
            </p>
            <p>
              우리는 광주·전남 지역에서 오랜 기간 쌓아온 신뢰를 바탕으로<br/>
              개인 주거공간을 넘어 공공 입찰 및 대규모 프로젝트까지 확장하며<br/>
              더 단단한 브랜드로 거듭나려고합니다.
            </p>
            <Link to="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-widest mt-4 hover:text-gray-400 transition-colors border-b border-black pb-1 hover:border-gray-400">
              Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Grid */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-2">
          <h3 className="text-3xl md:text-5xl font-light mb-4 md:mb-0 w-full md:w-auto text-left">Selected Works</h3>
          <Link to="/portfolio" className="text-xs font-bold uppercase tracking-widest hover:underline self-start md:self-auto">
            View All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer">
              <img 
                src={`https://picsum.photos/800/1000?random=${i + 15}`} 
                alt="Interior Project" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 w-full">
                <p className="text-white/80 text-xs tracking-widest uppercase mb-3">Residential</p>
                <div className="flex justify-between items-center w-full">
                  <h4 className="text-white text-2xl md:text-3xl font-medium">Project 0{i}</h4>
                  <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Identity Section */}
      <section className="py-20 md:py-32 bg-[#f9f9f9]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-6xl font-light mb-12 md:mb-20 tracking-tight">Build with Honesty</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-left">
            <div className="border-t-2 border-gray-200 pt-8 hover:border-black transition-colors duration-500 group">
              <h3 className="text-2xl font-medium mb-4 md:mb-6 group-hover:text-gray-600 transition-colors">THE H</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                고객이 만나는 첫 번째 기준.<br/>
                그리고 우리의 첫 번째 시작.<br/><br/>
                기본에 충실한 정직한 시공으로<br/>
                우리는 공간을 꾸미기보다<br/>
                삶에 맞게 정리합니다.
              </p>
            </div>
            <div className="border-t-2 border-gray-200 pt-8 hover:border-black transition-colors duration-500 group">
              <h3 className="text-2xl font-medium mb-4 md:mb-6 group-hover:text-gray-600 transition-colors">THE H BRAND</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                신뢰를 구조로 만드는 법인.<br/>
                설계부터 시공, 사후관리까지<br/>
                Design & Build 시스템으로 완성합니다.
              </p>
            </div>
            <div className="border-t-2 border-gray-200 pt-8 hover:border-black transition-colors duration-500 group">
              <h3 className="text-2xl font-medium mb-4 md:mb-6 group-hover:text-gray-600 transition-colors">Promise</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                신뢰는 정직에서 시작됩니다.<br/>
                보이지 않는 곳까지<br/>
                기준을 지키는 것이 우리의 약속입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Simple Contact Teaser */}
       <section className="py-24 md:py-40 px-6 md:px-20 text-center bg-[#1a1a1a] text-[#f1f1f1]">
        <h2 className="text-3xl md:text-6xl font-light mb-8 md:mb-10 leading-tight">
          Let's create something<br/>timeless together.
        </h2>
        <p className="mb-12 md:mb-16 text-gray-400 font-light text-base md:text-lg">
          광주·전남 인테리어의 새로운 기준, THE H BRAND와 함께하세요.
        </p>
        <a 
          href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 md:px-12 md:py-5 border border-[#f1f1f1] text-[#f1f1f1] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#f1f1f1] hover:text-[#1a1a1a] transition-all duration-300"
        >
          THE H 사전질문지 바로가기
        </a>
      </section>
    </div>
  );
};

export default Home;