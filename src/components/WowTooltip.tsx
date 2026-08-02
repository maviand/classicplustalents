import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { WowItem, WowSpell, ItemRarity } from '../types/items';

interface WowTooltipProps {
  item?: WowItem;
  spell?: WowSpell;
  rect?: DOMRect | null;
}

const RARITY_COLORS: Record<ItemRarity | string, string> = {
  'Poor': '#9d9d9d',
  'Common': '#ffffff',
  'Uncommon': '#1eff00',
  'Rare': '#0070dd',
  'Epic': '#a335ee',
  'Legendary': '#ff8000',
  'Artifact': '#e6cc80'
};

export function WowTooltip({ item, spell, rect }: WowTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    if (!tooltipRef.current || (!item && !spell) || !rect) {
      setPosition({ opacity: 0 });
      return;
    }
    
    // Mobile layout
    if (window.innerWidth < 768) {
      setPosition({
        position: 'fixed',
        bottom: '80px',
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
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    
    let left = rect.right + 15;
    let top = rect.top;
    
    let scale = 1;
    if (tt.height > viewportHeight - 20) {
      scale = Math.max(0.5, (viewportHeight - 20) / tt.height);
    }
    
    const actualWidth = tt.width * scale;
    const actualHeight = tt.height * scale;
    
    if (left + actualWidth > viewportWidth - 10) {
      left = Math.max(10, rect.left - actualWidth - 15);
    }
    
    if (top + actualHeight > viewportHeight - 10) {
      top = Math.max(10, viewportHeight - actualHeight - 10);
    }
    
    setPosition({ 
      top, 
      left, 
      opacity: 1,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      transition: 'opacity 0.05s ease-in-out'
    });
  }, [rect, item, spell]);

  if (!item && !spell) return null;
  if (!rect) return null;

  return createPortal(
    <div 
      ref={tooltipRef}
      className="fixed z-[9999] pointer-events-none text-left"
      style={{
        ...position,
        backgroundColor: '#070c14',
        border: '1px solid #7f7f7f',
        borderRadius: '3px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.8), inset 0 0 5px rgba(0,0,0,0.5)',
        minWidth: '240px',
        maxWidth: '320px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div className="p-3">
        {item && (
          <div className="flex flex-col text-[13px] leading-[1.35] text-white">
            <div className="font-bold text-[15px] mb-1" style={{ color: RARITY_COLORS[item.rarity] || '#ffffff' }}>
              {item.name}
            </div>
            
            {item.bindType && (
              <div className="mb-0.5">{item.bindType}</div>
            )}
            
            {(item.slot || item.type) && (
              <div className="flex justify-between mb-0.5">
                <span>{item.slot}</span>
                <span>{item.type}</span>
              </div>
            )}
            
            {item.stats && item.stats.length > 0 && (
              <div className="mt-1">
                {item.stats.map((stat, i) => {
                  const isGreen = stat.startsWith('Equip:') || stat.startsWith('Use:') || stat.startsWith('Chance on hit:');
                  return (
                    <div key={i} className={isGreen ? "text-[#1eff00]" : "text-white"}>
                      {stat}
                    </div>
                  );
                })}
              </div>
            )}
            
            {item.effect && (
              <div className="text-[#1eff00] mt-2 leading-snug">
                {item.effect}
              </div>
            )}
            
            {item.mats && (
              <div className="text-[#ffd100] mt-2">
                Requires: {item.mats}
              </div>
            )}
            
            {item.requiresLevel && (
              <div className="mt-2">
                Requires Level {item.requiresLevel}
              </div>
            )}
            
            {item.flavorText && (
              <div className="text-[#ffd100] mt-2 italic">
                "{item.flavorText}"
              </div>
            )}
            
            {item.sellPrice && (
              <div className="mt-2 text-xs">
                Sell Price: {item.sellPrice}
              </div>
            )}
          </div>
        )}

        {spell && (
          <div className="flex flex-col text-[13px] leading-[1.35] text-white">
            <div className="font-bold text-[15px] mb-1" style={{ color: '#ffd100' }}>
              {spell.name}
            </div>
            
            {(spell.cost || spell.range) && (
              <div className="flex justify-between mb-0.5">
                <span>{spell.cost || 'None'}</span>
                <span>{spell.range || ''}</span>
              </div>
            )}
            
            {(spell.castTime || spell.cooldown) && (
              <div className="flex justify-between mb-1.5">
                <span>{spell.castTime || 'Instant'}</span>
                <span>{spell.cooldown || ''}</span>
              </div>
            )}
            
            {spell.description && (
              <div className="text-[#ffd100] mt-1 leading-snug">
                {spell.description}
              </div>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
