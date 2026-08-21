import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Player() {
  const location = useLocation();

  const tabs = [
    { path: '/player/races', label: 'Races & Racials' },
    { path: '/player/classes', label: 'Classes & Specs' },
    { path: '/player/runes', label: 'Epic Class Quests' },
    { path: '/player/talents', label: 'Talent Calculator' },
  ];

  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex justify-center border-b border-[#3c3224] pb-4 mb-6">
        <div className="flex space-x-2 bg-[#0f0a07] p-1 rounded border border-[#3c3224]">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-4 py-2 rounded text-sm font-bold transition-all ${
                location.pathname.startsWith(tab.path)
                  ? 'bg-[#1a140e] text-[#ffd100] shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]'
                  : 'text-[#a69882] hover:bg-[#1a140e] hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
