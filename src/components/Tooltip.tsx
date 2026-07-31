import React, { useEffect, useRef, useState } from 'react';
import { Talent } from '../types/talents';

interface TooltipProps {
  talent: Talent;
  points: Record<string, number>;
  activeTalents: Talent[];
  rect?: DOMRect;
  }

export function Tooltip({ talent, points, activeTalents, rect,  }: TooltipProps) {
  const pts = points[talent.id] || 0;
  const rankIndex = Math.max(0, pts - 1);
  
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    if (!tooltipRef.current || !rect) return;
    
    // Mobile touch layout check
    if (window.innerWidth < 768) {
      setPosition({
        position: 'fixed',
        bottom: '80px', // Clear the sticky footer on mobile
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100vw - 32px)',
        maxWidth: '350px',
        opacity: 1,
        transition: 'opacity 0.15s ease-in-out'
      });
      return;
    }

    const tt = tooltipRef.current.getBoundingClientRect();
    
    // Apply offset of 15px to avoid obscuring cursor
    let left = rect.right + 15;
    let top = rect.top;
    
    if (left + tt.width > window.innerWidth - 10) {
      left = Math.max(10, rect.left - tt.width - 15);
    }
    
    if (top + tt.height > window.innerHeight - 10) {
      top = Math.max(10, window.innerHeight - tt.height - 10);
    }
    
    setPosition({ 
      top, 
      left, 
      opacity: 1,
      transition: 'opacity 0.15s ease-in-out'
    });
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
    
    // Highlight numbers, percentages, ranges, durations, stats, positive keywords and costs
    const posWords = '\\b(?:increases|gains|restores|reduces|heals|healing|regenerate|regenerates|ignoring|increases critical strike|increases critical chance|restores mana|restores health|absorbs)\\b';
    const negWords = '\\b(?:cooldown|cost|threat|seconds cooldown|sec cooldown|mana cost|rage cost|energy cost|reduced by|cooldown reduced|threat reduced|armor penalty)\\b';
    const keyWords = '\\b(?:intellect|spirit|stamina|mana|energy|rage|strength|agility|health|armor|spell power|attack power|fire|frost|nature|shadow|holy|arcane|physical|dodge|parry|block)\\b';
    const numRegexStr = '\\b\\d+(?:\\.\\d+)?%?|\\b\\d+\\s*to\\s*\\d+\\b';
    
    const combinedRegex = new RegExp(`(${posWords}|${negWords}|${keyWords}|${numRegexStr})`, 'gi');
    const parts = text.split(combinedRegex);
    
    return (
      <>
        {parts.map((part, i) => {
          if (!part) return null;
          const lowerPart = part.toLowerCase();
          
          // Match positive outcomes (green)
          if (new RegExp(`^${posWords}$`, 'i').test(lowerPart)) {
            return <span key={i} className="text-[#1eff00] font-medium">{part}</span>;
          }
          
          // Match negative outcomes/costs (red)
          if (new RegExp(`^${negWords}$`, 'i').test(lowerPart)) {
            return <span key={i} className="text-[#ff3b3b] font-medium">{part}</span>;
          }
          
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
          if (['dodge', 'parry', 'block'].includes(lowerPart)) {
            return <span key={i} className="text-[#ffd100] font-medium">{part}</span>;
          }
          
          // Match numeric patterns (starting with digit) - highlight in bright contrasting gold
          if (/^\d/.test(part)) {
            return <span key={i} className="text-[#ffd100] font-bold">{part}</span>;
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

  const requiredLevel = 10 + talent.row * 5;

  return (
    <div 
      ref={tooltipRef}
      className="fixed z-50 p-3.5 w-80 text-[#ffd100] border-2 shadow-2xl pointer-events-none"
      style={{
        ...position,
        background: "rgba(10, 8, 6, 0.94)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "2px solid #5a4b38",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #000000, 0 10px 30px rgba(0,0,0,0.9)",
      }}
    >
      {/* Header and Rank */}
      <div className="flex justify-between items-start mb-1 gap-2">
        <h3 className="font-bold text-white text-base leading-tight flex-1 wow-header">{talent.name}</h3>
        <span className="text-[13px] font-normal text-[#a69882] whitespace-nowrap ml-2 wow-mono">Rank {pts}/{talent.maxPoints}</span>
      </div>

      {/* Explicit Requirements */}
      <div className="flex flex-col gap-0.5 mb-2 mt-1.5 border-b border-[#3c3224] pb-2 text-[12px] leading-tight font-semibold">
        <div className="text-[#a69882]">Requires Level {requiredLevel}</div>
        {talent.requires && (
          <div className={(points[talent.requires.id] || 0) >= talent.requires.points ? "text-[#1eff00]" : "text-[#ff2020]"}>
            Requires {talent.requires.points} points in {activeTalents.find(t => t.id === talent.requires!.id)?.name}
          </div>
        )}
      </div>

      {/* Current Rank Description */}
      {(
        <div className="mb-2 mt-2">
          <p className="text-[13px] leading-relaxed whitespace-pre-line">
            {renderDescription(talent.desc[pts === 0 ? 0 : rankIndex], talent.desc[0], pts === 0 ? undefined : "Rank Bonus:")}
          </p>
        </div>
      )}

      {/* Next Rank Description - visually muted header */}
      {pts > 0 && pts < talent.maxPoints && (
        <div className="mb-2 mt-3 block">
          <p className="text-[12px] text-[#8c7e6b] font-semibold mb-0.5">Next rank:</p>
          <p className="text-[13px] leading-relaxed whitespace-pre-line">
            {renderDescription(talent.desc[pts], talent.desc[0], "Next Bonus:")}
          </p>
        </div>
      )}

      {/* Rank Scaling for text-based talents */}
      {talent.maxPoints > 1 && (
        <div className="mt-4 pt-3 border-t border-[#3c3224]">
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
      
      {/* Deep Dive Information (7x Scaling) */}
      <div className="mt-3 pt-3 border-t border-[#3c3224] flex flex-col gap-2">
        {talent.statScaling && (
          <div className="text-[11px] leading-tight">
            <span className="text-white font-semibold block mb-0.5">Stat Scaling:</span>
            <span className="text-[#a69882]">{talent.statScaling}</span>
          </div>
        )}
        {talent.loreOrigins && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#00ccff] font-semibold block mb-0.5">Lore:</span>
            <span className="text-[#a69882] italic">"{talent.loreOrigins}"</span>
          </div>
        )}
        {talent.synergies && talent.synergies.length > 0 && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#4ade80] font-semibold block mb-0.5">Synergies:</span>
            <ul className="list-disc pl-3 text-[#a69882]">
              {talent.synergies.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}
        {talent.runeInteractions && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#b480ff] font-semibold block mb-0.5">Rune Interaction:</span>
            <span className="text-[#a69882]">{talent.runeInteractions}</span>
          </div>
        )}
        {talent.recommendedBuilds && talent.recommendedBuilds.length > 0 && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#ffdd57] font-semibold block mb-0.5">Key Builds:</span>
            <ul className="list-disc pl-3 text-[#a69882]">
              {talent.recommendedBuilds.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        )}
        {talent.visualEffect && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#ff5f00] font-semibold block mb-0.5">Visuals:</span>
            <span className="text-[#a69882]">{talent.visualEffect}</span>
          </div>
        )}
        {talent.devCommentary && (
          <div className="text-[11px] leading-tight">
            <span className="text-[#ffffff] font-semibold block mb-0.5">Dev Note:</span>
            <span className="text-[#8c7e6b]">"{talent.devCommentary}"</span>
          </div>
        )}
      </div>

      {/* Click instructions */}
      <div className="mt-3 pt-2 text-[#1eff00] text-[11px] leading-tight opacity-90 border-t border-[#3c3224]/50">
        {pts < talent.maxPoints && <p>• Click to learn</p>}
        {pts > 0 && <p className="mt-0.5">• Right-click to unlearn</p>}
      </div>
    </div>
  );
}
