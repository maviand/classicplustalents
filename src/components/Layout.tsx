import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/world', label: 'World' },
    { path: '/player', label: 'Player' },
    { path: '/pve', label: 'PvE' },
    { path: '/pvp', label: 'PvP' },
    { path: '/professions', label: 'Professions' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0705] dark:bg-black text-[#d3c8b8] dark:text-gray-300 selection:bg-[#ffd100] selection:text-black flex flex-col font-sans transition-colors duration-300">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-[#0f0a07] dark:bg-black border-b-2 border-[#3c3224] dark:border-gray-900 shadow-md transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex flex-col">
                <span className="wow-title text-xl text-[#ffd100] tracking-tight hover:text-white transition-colors">Classic+ Camelot</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors ${
                      (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                        ? 'bg-[#1a140e] dark:bg-gray-900 text-[#ffd100] border-b-2 border-[#ffd100]'
                        : 'text-[#a69882] dark:text-gray-400 hover:bg-[#1a140e] dark:hover:bg-gray-800 hover:text-white dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 ml-4 rounded-full bg-[#1a140e] dark:bg-gray-800 text-[#ffd100] hover:text-white transition-colors"
                title="Toggle OLED Dark Mode"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Nav Button */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full bg-[#1a140e] dark:bg-gray-800 text-[#ffd100] hover:text-white transition-colors"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#a69882] hover:text-white hover:bg-[#1a140e] dark:hover:bg-gray-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0a07] dark:bg-black border-b border-[#3c3224] dark:border-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                      ? 'bg-[#1a140e] text-[#ffd100]'
                      : 'text-[#a69882] hover:bg-[#1a140e] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col relative z-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0a0705] dark:bg-black border-t border-[#1a140e] dark:border-gray-900 py-6 text-center text-[#8c7e6b] dark:text-gray-500 text-sm mt-auto transition-colors duration-300">
        <p>A community design pitch. Not affiliated with Blizzard Entertainment.</p>
        <p className="mt-1 opacity-60">All content herein is original fan design.</p>
      </footer>
    </div>
  );
}
