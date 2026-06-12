import React from 'react';
import { Talent } from '../types/talents';

interface TalentTreeProps {
  title: string;
  iconUrl: string;
  backgroundUrl: string;
  treeTalents: Talent[];
  points: Record<string, number>;
  setHoveredData: (data: {talent: Talent, rect: DOMRect} | null) => void;
  handleLeftClick: (talent: Talent, treeTalents: Talent[]) => void;
  handleRightClick: (e: React.MouseEvent, talent: Talent) => void;
  canAddPoint: (talent: Talent, treeTalents: Talent[]) => boolean;
}

export function TalentTree({
  title,
  iconUrl,
  backgroundUrl,
  treeTalents,
  points,
  setHoveredData,
  handleLeftClick,
  handleRightClick,
  canAddPoint
}: TalentTreeProps) {
  const pointsInTree = treeTalents.reduce((sum, t) => sum + (points[t.id] || 0), 0);

  return (
    <div className="relative w-[320px] rounded border border-[#31281A] shadow-[0_0_20px_rgba(0,0,0,0.8)] bg-[#0d0a08] overflow-hidden blizzard-border">
      {/* Header */}
      <div className="flex items-center gap-3 p-3.5 bg-gradient-to-b from-[#211a14] to-[#120e0a] border-b border-[#31281A] z-10 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-[#ffdd57] blur-sm opacity-20 rounded"></div>
          <img src={iconUrl} alt={title} className="w-11 h-11 rounded border border-[#4a3b26] shadow-[0_0_10px_rgba(0,0,0,1)] relative z-10" />
        </div>
        <div>
          <h2 className="text-[#ffdd57] font-bold text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] leading-tight">{title}</h2>
          <p className="text-[#a69882] text-sm font-medium tracking-wide leading-tight">Points: <span className="text-white font-bold">{pointsInTree}</span></p>
        </div>
      </div>

      {/* Talent Grid Area */}
      <div className="relative h-[650px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
          <div className="absolute inset-0 backdrop-blur-[8px] bg-black/30"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] via-transparent to-[#000000e6] pointer-events-none z-0"></div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blurGt" />
              <feComposite in="SourceGraphic" in2="blurGt" operator="over" />
            </filter>
          </defs>

          {treeTalents.filter(t => t.requires).map(talent => {
            const req = treeTalents.find(t => t.id === talent.requires!.id);
            if (!req) return null;
            
            const isReqMet = (points[req.id] || 0) >= talent.requires!.points;
            const targetPts = points[talent.id] || 0;
            const color = targetPts > 0 ? '#ffdd57' : (isReqMet ? '#3a8b27' : '#4a3b26');
            const filter = targetPts > 0 ? 'url(#glow-gold)' : (isReqMet ? 'url(#glow-green)' : 'none');

            if (req.row === talent.row) {
              // Horizontal connector
              const isRight = talent.col > req.col;
              const startX = isRight ? 72 + req.col * 72 : 24 + req.col * 72;
              const startY = 48 + req.row * 80;
              const endX = isRight ? 24 + talent.col * 72 : 72 + talent.col * 72;
              const endY = 48 + talent.row * 80;
              const dir = isRight ? 1 : -1;

              return (
                <g key={`${req.id}-${talent.id}`}>
                  {/* Shadow Layer */}
                  <line x1={startX} y1={startY} x2={endX - dir * 6} y2={endY} stroke="#000000" strokeWidth="8" />
                  <polygon points={`${endX - dir * 8},${endY - 8} ${endX - dir * 8},${endY + 8} ${endX + dir * 2},${endY}`} fill="#000000" />
                  
                  {/* Visual Layer */}
                  <line x1={startX} y1={startY} x2={endX - dir * 6} y2={endY} stroke={color} strokeWidth="4" filter={filter} />
                  <polygon points={`${endX - dir * 6},${endY - 6} ${endX - dir * 6},${endY + 6} ${endX},${endY}`} fill={color} filter={filter} />
                </g>
              );
            }

            if (req.col !== talent.col && req.row < talent.row) {
              // Out-bottom, left/right, then down
              const startX = 48 + req.col * 72; 
              const startY = 72 + req.row * 80;
              const endX = 48 + talent.col * 72; 
              const endY = 24 + talent.row * 80;
              const midY = startY + 16; // Half-way between rows

              return (
                <g key={`${req.id}-${talent.id}`}>
                  {/* Shadow Layer */}
                  <path d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY - 6}`} fill="none" stroke="#000000" strokeWidth="8" strokeLinejoin="round" />
                  <polygon points={`${endX-8},${endY-8} ${endX+8},${endY-8} ${endX},${endY+2}`} fill="#000000" />

                  {/* Visual Layer */}
                  <path d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY - 6}`} fill="none" stroke={color} strokeWidth="4" strokeLinejoin="round" filter={filter} />
                  <polygon points={`${endX-6},${endY-6} ${endX+6},${endY-6} ${endX},${endY}`} fill={color} filter={filter} />
                </g>
              );
            }

            const startX = 48 + req.col * 72; 
            const startY = 72 + req.row * 80;
            
            const endX = 48 + talent.col * 72;
            const endY = 24 + talent.row * 80;

            if (req.col === talent.col) {
              return (
                <g key={`${req.id}-${talent.id}`}>
                  {/* Shadow Layer */}
                  <line x1={startX} y1={startY} x2={endX} y2={endY - 6} stroke="#000000" strokeWidth="8" />
                  <polygon points={`${endX-8},${endY-8} ${endX+8},${endY-8} ${endX},${endY+2}`} fill="#000000" />
                  
                  {/* Visual Layer */}
                  <line x1={startX} y1={startY} x2={endX} y2={endY - 6} stroke={color} strokeWidth="4" filter={filter} />
                  <polygon points={`${endX-6},${endY-6} ${endX+6},${endY-6} ${endX},${endY}`} fill={color} filter={filter} />
                </g>
              );
            }
            return null;
          })}
        </svg>

        {treeTalents.map(talent => {
          const pts = points[talent.id] || 0;
          const isMaxed = pts === talent.maxPoints;
          const isAvailable = canAddPoint(talent, treeTalents) || pts > 0;
          
          let borderClass = "border-[#31281A]";
          let filterClass = "grayscale grayscale-[80%] opacity-80";
          
          if (isMaxed) {
            borderClass = "border-[#ffdd57] shadow-[0_0_12px_#ffdd57]";
            filterClass = "grayscale-0 opacity-100";
          } else if (isAvailable) {
            if (pts === 0) {
              borderClass = "animate-border-pulse";
            } else {
              borderClass = "border-[#3a8b27] shadow-[0_0_12px_#3a8b27]";
            }
            filterClass = "grayscale-0 opacity-100";
          }

          return (
            <div 
              key={talent.id}
              className="absolute w-12 h-12 z-10 group"
              style={{
                left: `${24 + talent.col * 72}px`,
                top: `${24 + talent.row * 80}px`
              }}
              onMouseEnter={(e) => setHoveredData({ talent, rect: e.currentTarget.getBoundingClientRect() })}
              onMouseLeave={() => setHoveredData(null)}
              onClick={() => handleLeftClick(talent, treeTalents)}
              onContextMenu={(e) => handleRightClick(e, talent)}
            >
              <div className={`w-full h-full rounded border-2 ${borderClass} transition-all duration-200 ${canAddPoint(talent, treeTalents) ? 'hover:scale-105' : ''} hover:brightness-110 cursor-pointer overflow-hidden bg-black`}>
                <img 
                  src={talent.icon.startsWith('http') ? talent.icon : `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`}
                  alt={talent.name}
                  className={`w-full h-full object-cover transition-all duration-200 ${filterClass}`}
                />
              </div>
              
              {/* Points Badge */}
              <div className={`absolute -bottom-2 -right-2 px-1.5 py-0.5 rounded text-xs font-bold border ${isMaxed ? 'bg-[#ffdd57] text-black border-[#ffdd57]' : 'bg-[#18110b] text-[#3a8b27] border-[#31281A]'} shadow-[0_2px_4px_rgba(0,0,0,1)]`}>
                {pts}/{talent.maxPoints}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
