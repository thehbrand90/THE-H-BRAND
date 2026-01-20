import React, { useState } from 'react';
import { Project } from '../types';

const mockProjects: Project[] = [
  { id: 1, title: 'Bongseon-dong Residence', category: '40PY', image: 'https://picsum.photos/800/600?random=1', description: 'Modern minimalism in Gwangju.' },
  { id: 2, title: 'Suwan Lakeside Villa', category: '50PY', image: 'https://picsum.photos/800/600?random=2', description: 'Wood and stone textures.' },
  { id: 3, title: 'Naju Innovation Apartment', category: '30PY', image: 'https://picsum.photos/800/600?random=3', description: 'Cozy family space.' },
  { id: 4, title: 'Cheomdan Officetel', category: '20PY', image: 'https://picsum.photos/800/600?random=4', description: 'Compact and efficient.' },
  { id: 5, title: 'Muan Commercial Space', category: 'ETC', image: 'https://picsum.photos/800/600?random=5', description: 'Cafe interior.' },
  { id: 6, title: 'Hwasun Hanok Stay', category: 'ETC', image: 'https://picsum.photos/800/600?random=6', description: 'Traditional meets modern.' },
  { id: 7, title: 'Pungam-dong Apartment', category: '30PY', image: 'https://picsum.photos/800/600?random=7', description: 'White and wood.' },
  { id: 8, title: 'Ilkok-dong Residence', category: '40PY', image: 'https://picsum.photos/800/600?random=8', description: 'Luxury dark tones.' },
];

const categories = ['All', '20PY', '30PY', '40PY', '50PY', 'ETC'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 px-4 md:px-10 min-h-screen">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-brand-stone mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium mb-1 text-brand-dark group-hover:text-brand-brown transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-brown border border-brand-brown/30 px-2 py-1">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;