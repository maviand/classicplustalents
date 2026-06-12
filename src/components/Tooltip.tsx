import React, { useEffect, useRef, useState } from 'react';
import { Talent } from '../types/talents';

interface TooltipProps {
  talent: Talent;
  points: Record<string, number>;
  activeTalents: Talent[];
  rect?: DOMRect;
}

export function Tooltip({ talent, points, activeTalents, rect }: TooltipProps) {
  const pts = points[talent.id] || 0;
  const rankIndex = Math.max(0, pts - 1);
  
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    if (!tooltipRef.current || !rect) return;
    const tt = tooltipRef.current.getBoundingClientRect();
    
    let left = rect.right + 15;
    let top = rect.top;
    
    if (left + tt.width > window.innerWidth - 10) {
      left = Math.max(10, rect.left - tt.width - 15);
    }
    
    if (top + tt.height > window.innerHeight - 10) {
      top = Math.max(10, window.innerHeight - tt.height - 10);
    }
    
    setPosition({ top, left, opacity: 1 });
  }, [rect, talent]);

  const getFullDescription = (descText: string, baseText: string) => {
    if (!descText || !baseText) return "";
    const isSnippet = descText.length <= baseText.length * 0.7 && descText !== baseText;
    
    if (isSnippet) {
      const snippetParts = descText.split(/\s*\/\s*/);
      const regex = /(\d+(?:\.\d+)?%?)/g;
      let i = 0;
      return baseText.replace(regex, (match) => {
        if (i < snippetParts.length) {
           let replacement = snippetParts[i].replace(/\.$/, '');
           if (match.endsWith('%') && !replacement.endsWith('%')) {
              replacement += '%';
           }
           i++;
           return replacement;
        }
        return match;
      });
    }
    return descText;
  };

  const renderFormattedText = (text: string) => {
    if (!text) return text;
    // Highlight numbers, percentages, ranges, and durations as well as stat keywords
    const wordsRegexStr = '\\b(?:intellect|spirit|stamina|mana|energy|rage|strength|agility|health|armor|spell power|attack power|fire|frost|nature|shadow|holy|arcane|physical|cooldown|range|critical strike|critical strike chance|dodge|parry|block)\\b';
    const numRegexStr = '\\b\\d+(?:\\.\\d+)?%?|\\b\\d+\\s*to\\s*\\d+\\b';
    const combinedRegex = new RegExp(`(${wordsRegexStr}|${numRegexStr})`, 'gi');
    
    const parts = text.split(combinedRegex);
    return (
      <>
        {parts.map((part, i) => {
          if (!part) return null;
          const lowerPart = part.toLowerCase();
          
          // Match keywords
          if (lowerPart === 'intellect') return <span key={i} className="text-[#00ccff] font-semibold">{part}</span>;
          if (lowerPart === 'spirit') return <span key={i} className="text-[#ffffff] font-semibold">{part}</span>;
          if (lowerPart === 'stamina') return <span key={i} className="text-[#ff3b3b] font-semibold">{part}</span>;
          if (lowerPart === 'mana') return <span key={i} className="text-[#69ccf0] font-semibold">{part}</span>;
          if (lowerPart === 'energy') return <span key={i} className="text-[#fff569] font-semibold">{part}</span>;
          if (lowerPart === 'rage') return <span key={i} className="text-[#ff3b3b] font-semibold">{part}</span>;
          if (lowerPart === 'strength') return <span key={i} className="text-[#ffdd57] font-semibold">{part}</span>;
          if (lowerPart === 'agility') return <span key={i} className="text-[#4ade80] font-semibold">{part}</span>;
          if (lowerPart === 'health') return <span key={i} className="text-[#4ade80] font-semibold">{part}</span>;
          if (lowerPart === 'armor') return <span key={i} className="text-[#a69882] font-semibold">{part}</span>;
          if (lowerPart === 'spell power') return <span key={i} className="text-[#b480ff] font-semibold">{part}</span>;
          if (lowerPart === 'attack power') return <span key={i} className="text-[#ffdd57] font-semibold">{part}</span>;

          // Spell schools
          if (lowerPart === 'fire') return <span key={i} className="text-[#ff5f00] font-semibold">{part}</span>;
          if (lowerPart === 'frost') return <span key={i} className="text-[#69ccf0] font-semibold">{part}</span>;
          if (lowerPart === 'nature') return <span key={i} className="text-[#1eff00] font-semibold">{part}</span>;
          if (lowerPart === 'shadow') return <span key={i} className="text-[#9482c9] font-semibold">{part}</span>;
          if (lowerPart === 'holy') return <span key={i} className="text-[#ffe066] font-semibold">{part}</span>;
          if (lowerPart === 'arcane') return <span key={i} className="text-[#cc7aff] font-semibold">{part}</span>;
          if (lowerPart === 'physical') return <span key={i} className="text-[#e6b800] font-semibold">{part}</span>;

          // Mechanics
          if (['cooldown', 'range', 'critical strike', 'critical strike chance', 'dodge', 'parry', 'block'].includes(lowerPart)) {
            return <span key={i} className="text-[#ffd100] font-medium">{part}</span>;
          }
          
          // Match numeric patterns (starting with digit)
          if (/^\d/.test(part)) {
            return <span key={i} className="text-white font-semibold">{part}</span>;
          }
          
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  const renderDescription = (descText: string, baseText: string, prefixLabel?: string) => {
    const fullText = getFullDescription(descText, baseText);
    if (!fullText) return null;
    const isSnippet = descText.length <= baseText.length * 0.7 && descText !== baseText;
    
    if (isSnippet && prefixLabel) {
      return (
        <span>
          <span className="text-[#ffd100]">{renderFormattedText(fullText)}</span>
          <br/>
          <span className="block mt-1 text-[#ffd100]">
            <span className="text-white">{prefixLabel} </span>{renderFormattedText(descText)}
          </span>
        </span>
      );
    }
    return <span className="text-[#ffd100]">{renderFormattedText(fullText)}</span>;
  };

  return (
    <div 
      ref={tooltipRef}
      className="fixed z-50 p-3 rounded-sm pointer-events-none transition-opacity duration-75 w-80 text-[#ffd100]"
      style={{
        ...position,
        background: "linear-gradient(to bottom, #0c1125 0%, #05070f 100%)",
        border: "2px solid #3c3224",
        boxShadow: "inset 0 0 0 1.5px #000, 0 5px 15px rgba(0,0,0,0.9)"
      }}
    >
      <div className="flex justify-between items-start mb-1 gap-2">
        <h3 className="font-bold text-white text-base leading-tight flex-1 wow-header">{talent.name}</h3>
        <span className="text-[13px] font-normal text-[#a69882] whitespace-nowrap ml-2 wow-mono">Rank {pts}/{talent.maxPoints}</span>
      </div>

      {talent.requires && (points[talent.requires.id] || 0) < talent.requires.points && (
        <div className="text-[#ff2020] text-[13px] mb-2 leading-tight font-semibold">
          Requires {talent.requires.points} points in {activeTalents.find(t => t.id === talent.requires!.id)?.name}
        </div>
      )}

      {/* Current Rank Description */}
      <div className="mb-2 mt-2">
        <p className="text-[13px] leading-relaxed whitespace-pre-line">
          {renderDescription(talent.desc[pts === 0 ? 0 : rankIndex], talent.desc[0], pts === 0 ? undefined : "Rank Bonus:")}
        </p>
      </div>

      {/* Next Rank Description */}
      {pts > 0 && pts < talent.maxPoints && (
        <div className="mb-2 mt-3 block">
          <p className="text-[13px] text-white mb-0.5">Next rank:</p>
          <p className="text-[13px] leading-relaxed whitespace-pre-line">
            {renderDescription(talent.desc[pts], talent.desc[0], "Next Bonus:")}
          </p>
        </div>
      )}

      {/* Rank Scaling for text-based talents */}
      {talent.maxPoints > 1 && (
        <div className="mt-4 pt-3 border-t border-[#4d4d4d]">
          <div className="text-white text-xs mb-1 font-semibold">Scaling:</div>
          <table className="w-full text-[11px] leading-tight">
            <tbody>
              {talent.desc.map((d, i) => {
                const textToShow = getFullDescription(d, talent.desc[0]);
                return (
                  <tr key={i} className={pts === i + 1 ? 'bg-[#ffdd57]/15' : ''}>
                    <td className={`py-1 pr-2 align-top whitespace-nowrap ${pts === i + 1 ? 'text-[#ffd100] font-bold' : 'text-[#a69882]'}`}>
                      Rank {i + 1}:
                    </td>
                    <td className={`py-1 ${pts === i + 1 ? 'text-white' : 'text-[#a69882]'}`}>
                      {renderFormattedText(textToShow)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Click instructions */}
      <div className="mt-3 pt-2 text-[#1eff00] text-[12px] leading-tight opacity-90">
        {pts < talent.maxPoints && <p>Click to learn</p>}
        {pts > 0 && <p>Right-click to unlearn</p>}
      </div>
    </div>
  );
}
