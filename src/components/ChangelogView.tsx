import React from 'react';
import { Talent } from '../types/talents';

interface ChangelogViewProps {
  classNameStr: string;
  changelog: string[];
  activeTalents: Talent[];
  iconUrl: string;
}

export function ChangelogView({ classNameStr, changelog, activeTalents, iconUrl }: ChangelogViewProps) {
  const sections: { title: string, items: string[] }[] = [];
  let generalItems: string[] = [];
  let currentSection = { title: '', items: [] as string[] };
  
  changelog.forEach(log => {
    if (!log.includes(':')) {
      if (log.toLowerCase().includes('general')) {
        // Skip adding a section, we collect general items
        currentSection = { title: 'General', items: generalItems };
      } else {
        if (currentSection.title && currentSection.title !== 'General') {
          sections.push(currentSection);
        }
        currentSection = { title: log, items: [] };
      }
    } else {
      currentSection.items.push(log);
    }
  });
  if (currentSection.title && currentSection.title !== 'General') {
    sections.push(currentSection);
  }

  const renderFormattedLog = (text: string) => {
    if (!text) return null;

    let prefix = '';
    let body = text;
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
      prefix = text.substring(0, colonIndex + 1);
      body = text.substring(colonIndex + 1);
    }

    const talentNames = activeTalents.map(t => t.name).sort((a, b) => b.length - a.length);
    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const talentRegexStr = talentNames.map(escapeRegExp).join('|');
    const wordsRegexStr = '\\b(?:mana|energy|rage|intellect|spirit|stamina)\\b';
    
    // Check if we have talent names to match, otherwise regex might fail
    let parts = [body];
    if (talentRegexStr) {
      const combinedRegex = new RegExp(`(${wordsRegexStr}|${talentRegexStr})`, 'gi');
      parts = body.split(combinedRegex);
    } else {
      const combinedRegex = new RegExp(`(${wordsRegexStr})`, 'gi');
      parts = body.split(combinedRegex);
    }
    
    return (
      <span>
        {prefix && <strong className="text-white mr-1 opacity-90">{prefix}</strong>}
        {parts.map((part, i) => {
          if (!part) return null;
          
          const lowerPart = part.toLowerCase();
          if (lowerPart === 'mana') return <span key={i} className="text-[#69ccf0] font-semibold">{part}</span>;
          if (lowerPart === 'energy') return <span key={i} className="text-[#fff569] font-semibold">{part}</span>;
          if (lowerPart === 'rage') return <span key={i} className="text-[#ff3b3b] font-semibold">{part}</span>;
          
          if (lowerPart === 'intellect') return <span key={i} className="text-[#00ccff] font-semibold">{part}</span>;
          if (lowerPart === 'spirit') return <span key={i} className="text-[#ffffff] font-semibold">{part}</span>;
          if (lowerPart === 'stamina') return <span key={i} className="text-[#ff3b3b] font-semibold">{part}</span>;
          
          const isTalentName = talentNames.some(tn => tn.toLowerCase() === lowerPart);
          if (isTalentName) return <strong key={`talent-${i}`} className="font-bold text-white">{part}</strong>;
          
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="w-full max-w-[1050px] wow-panel p-6 mb-12 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 mb-6 border-b border-[#3c3224] pb-3">
        <img src={iconUrl} alt={classNameStr} className="w-8 h-8 rounded border border-[#3c3224] shadow-[0_0_10px_rgba(0,0,0,0.8)]" />
        <h2 className="text-2xl font-bold text-[#ffd100] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] tracking-wide uppercase wow-header">
          {classNameStr} Classic+ Changelog
        </h2>
      </div>

      {generalItems.length > 0 && (
        <div className="mb-8 bg-[#0e0a07] border border-[#3c3224] overflow-hidden rounded-sm shadow-md">
          <div className="bg-gradient-to-r from-[#1b1510] to-[#0c0907] px-4 py-2 border-b border-[#3c3224] flex items-center gap-2">
            <span className="text-lg">⚙️</span>
            <h3 className="text-lg font-bold text-[#ffd100] drop-shadow-[0_1px_2px_rgba(0,0,0,1)] wow-header">General Changes</h3>
          </div>
          <ul className="p-4 space-y-2 text-[#a8a8a8]">
            {generalItems.map((log, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed">
                <span className="text-[#ffd100] min-w-[12px] mt-0.5 text-base">•</span>
                <span>{renderFormattedLog(log)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((sec, sIdx) => {
          return (
            <div key={sIdx} className="bg-[#0e0a07] border border-[#3c3224] overflow-hidden rounded-sm shadow-md">
              <div className="bg-gradient-to-r from-[#1b1510] to-[#0c0907] px-4 py-2 border-b border-[#3c3224] flex items-center gap-2">
                <span className="text-lg">⚔️</span>
                <h3 className="text-lg font-bold text-[#ffd100] drop-shadow-[0_1px_2px_rgba(0,0,0,1)] wow-header">{sec.title}</h3>
              </div>
              <ul className="p-4 space-y-2 text-[#a8a8a8]">
                {sec.items.map((log, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed">
                    <span className="text-[#ffd100] min-w-[12px] mt-0.5 text-base">•</span>
                    <span>{renderFormattedLog(log)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
