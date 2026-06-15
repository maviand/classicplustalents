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
  classColor: string;
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
  canAddPoint,
  classColor
}: TalentTreeProps) {
  const pointsInTree = treeTalents.reduce((sum, t) => sum + (points[t.id] || 0), 0);
  const [ripples, setRipples] = React.useState<Record<string, boolean>>({});

  const handleKeyDown = (e: React.KeyboardEvent, talent: Talent) => {
    let targetRow = talent.row;
    let targetCol = talent.col;
    if (e.key === 'ArrowUp') targetRow--;
    else if (e.key === 'ArrowDown') targetRow++;
    else if (e.key === 'ArrowLeft') targetCol--;
    else if (e.key === 'ArrowRight') targetCol++;
    else if (e.key === 'Backspace' || e.key === 'Delete') {
      const mockEvent = { preventDefault: () => {} } as React.MouseEvent;
      handleRightClick(mockEvent, talent);
      return;
    } else {
      return;
    }
    
    e.preventDefault();
    
    const nextTalent = treeTalents.find(t => t.row === targetRow && t.col === targetCol);
    if (nextTalent) {
      const el = document.getElementById(`talent-${nextTalent.id}`);
      el?.focus();
    }
  };

  return (
    <div className="relative w-[320px] wow-panel overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-3.5 bg-gradient-to-b from-[#1b1510] to-[#0c0907] border-b border-[#3c3224] z-10 relative">
        <div className="relative">
          <div className="absolute inset-0 bg-[#ffdd57] blur-sm opacity-20 rounded"></div>
          <img src={iconUrl} alt={title} className="w-11 h-11 rounded border border-[#4a3b26] shadow-[0_0_10px_rgba(0,0,0,1)] relative z-10" />
        </div>
        <div>
          <h2 className="text-[#ffd100] font-bold text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] leading-tight wow-header">{title}</h2>
          <p className="text-[#a69882] text-sm font-medium tracking-wide leading-tight">Points: <span className="text-white font-bold wow-mono">{pointsInTree}</span></p>
        </div>
      </div>

      {/* Talent Grid Area */}
      <div className="relative h-[650px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0"></div>

        {/* Class-specific primary color radial gradient */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-20"
          style={{
            background: `radial-gradient(circle, ${classColor} 0%, transparent 70%)`
          }}
        />

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-green" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blurGt" />
              <feComposite in="SourceGraphic" in2="blurGt" operator="over" />
            </filter>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8c6f2d" />
              <stop offset="50%" stopColor="#ffd100" />
              <stop offset="100%" stopColor="#8c6f2d" />
            </linearGradient>
            <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#155d00" />
              <stop offset="50%" stopColor="#1eff00" />
              <stop offset="100%" stopColor="#155d00" />
            </linearGradient>
            <linearGradient id="grey-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f1810" />
              <stop offset="50%" stopColor="#4a3c28" />
              <stop offset="100%" stopColor="#1f1810" />
            </linearGradient>
          </defs>

          {treeTalents.filter(t => t.requires).map(talent => {
            const req = treeTalents.find(t => t.id === talent.requires!.id);
            if (!req) return null;
            
            const isReqMet = (points[req.id] || 0) >= talent.requires!.points;
            const targetPts = points[talent.id] || 0;
            const strokeUrl = targetPts > 0 ? 'url(#gold-grad)' : (isReqMet ? 'url(#green-grad)' : 'url(#grey-grad)');
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
                  <line 
                    x1={startX} y1={startY} x2={endX - dir * 6} y2={endY} 
                    stroke={strokeUrl} strokeWidth="4" filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
                  <polygon 
                    points={`${endX - dir * 6},${endY - 6} ${endX - dir * 6},${endY + 6} ${endX},${endY}`} 
                    fill={strokeUrl} filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
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
                  <path 
                    d={`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY - 6}`} 
                    fill="none" stroke={strokeUrl} strokeWidth="4" strokeLinejoin="round" filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
                  <polygon 
                    points={`${endX-6},${endY-6} ${endX+6},${endY-6} ${endX},${endY}`} 
                    fill={strokeUrl} filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
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
                  <line 
                    x1={startX} y1={startY} x2={endX} y2={endY - 6} 
                    stroke={strokeUrl} strokeWidth="4" filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
                  <polygon 
                    points={`${endX-6},${endY-6} ${endX+6},${endY-6} ${endX},${endY}`} 
                    fill={strokeUrl} filter={filter} 
                    style={{ transition: 'stroke 0.3s ease, fill 0.3s ease, filter 0.3s ease' }}
                  />
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
          const isSpell = talent.maxPoints === 1;
          
          let borderClass = "border-[#4a3c28]/80 opacity-70";
          let filterClass = "grayscale-[100%] saturate-0 opacity-40 brightness-50 contrast-75";
          let breathingClass = "";
          
          if (isMaxed) {
            borderClass = `border-[#ffd100] shadow-[0_0_12px_rgba(255,209,0,0.8)] ${isSpell ? 'rounded-full' : 'rounded-sm'}`;
            filterClass = "grayscale-0 opacity-100";
            if (talent.row === 6) {
              breathingClass = "animate-breathing";
            }
          } else if (pts > 0) {
            borderClass = `border-[#1eff00] shadow-[0_0_10px_rgba(30,255,0,0.6)] ${isSpell ? 'rounded-full' : 'rounded-sm'}`;
            filterClass = "grayscale-0 opacity-100";
          } else if (isAvailable) {
            borderClass = `${isSpell ? 'border-[#ffd100] animate-gold-pulse rounded-full' : 'border-[#1eff00] animate-border-pulse rounded-sm'}`;
            filterClass = "grayscale-[35%] brightness-[70%] hover:grayscale-0 hover:brightness-100 transition-all";
          }
 
          return (
            <button 
              key={talent.id}
              id={`talent-${talent.id}`}
              className={`absolute w-[42px] h-[42px] z-10 group rounded transition-all duration-200 outline-none before:absolute before:-inset-2.5 before:content-[''] before:z-0 ${breathingClass} ${canAddPoint(talent, treeTalents) ? 'hover:scale-105' : ''}`}
              style={{
                left: `${27 + talent.col * 72}px`,
                top: `${27 + talent.row * 80}px`
              }}
              onMouseEnter={(e) => setHoveredData({ talent, rect: e.currentTarget.getBoundingClientRect() })}
              onMouseLeave={() => setHoveredData(null)}
              onFocus={(e) => setHoveredData({ talent, rect: e.currentTarget.getBoundingClientRect() })}
              onBlur={() => setHoveredData(null)}
              onClick={() => {
                if (canAddPoint(talent, treeTalents)) {
                  setRipples(prev => ({ ...prev, [talent.id]: true }));
                  setTimeout(() => {
                    setRipples(prev => ({ ...prev, [talent.id]: false }));
                  }, 350);
                }
                handleLeftClick(talent, treeTalents);
              }}
              onContextMenu={(e) => handleRightClick(e, talent)}
              onKeyDown={(e) => handleKeyDown(e, talent)}
              role="button"
              aria-label={`${talent.name} - Rank ${pts} of ${talent.maxPoints}. ${talent.requires ? `Requires ${talent.requires.points} points in prerequisite talent.` : ''}`}
            >
              <div className={`w-full h-full ${isSpell ? 'rounded-full' : 'rounded-sm'} border-2 ${borderClass} transition-all duration-200 hover:brightness-110 cursor-pointer overflow-hidden bg-black relative shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}>
                <img 
                  src={talent.icon.startsWith('http') ? talent.icon : `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`}
                  alt={talent.name}
                  className={`w-full h-full object-cover transition-all duration-200 ${filterClass}`}
                />
                {/* Visual raised border bevel inner ring */}
                <div className={`absolute inset-0 pointer-events-none border ${isSpell ? 'rounded-full border-white/10' : 'rounded-sm border-white/10'} mix-blend-overlay`}></div>
                {/* Click ripple overlay */}
                {ripples[talent.id] && <div className="click-ripple" />}
              </div>
              
              {/* Points Badge */}
              <div className={`absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-sm text-[10px] font-bold border wow-mono ${isMaxed ? 'bg-[#ffd100] text-black border-[#ffd100]' : 'bg-[#150f0a] text-[#1eff00] border-[#4a3b26]'} shadow-[0_2px_5px_rgba(0,0,0,0.8)] z-20 select-none`}>
                {pts}/{talent.maxPoints}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
