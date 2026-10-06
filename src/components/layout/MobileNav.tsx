import React from 'react';
import { ViewRoute } from '../../types';

interface MobileNavProps {
  currentRoute: ViewRoute;
  onRouteChange: (route: ViewRoute) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentRoute, onRouteChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] border-t border-[#e5eeff]">
      <div className="h-16 px-2 flex items-center justify-around max-w-lg mx-auto">
        {/* Tab 1: Today */}
        <button
          onClick={() => onRouteChange('overview')}
          className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 transition-colors cursor-pointer ${
            currentRoute === 'overview'
              ? 'text-[#0c9488] font-bold'
              : 'text-[#44474c] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[11px] mt-0.5">Today</span>
        </button>

        {/* Tab 2: Screen (Elevated center button) */}
        <button
          onClick={() => onRouteChange('live-screening-and-esp32')}
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 -mt-4 transition-transform active:scale-95 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-[#0e1c2f] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(11,28,48,0.25)] border-2 border-white">
            <span className="material-symbols-outlined text-[24px] text-[#89f5e7]">sensors</span>
          </div>
          <span className={`text-[11px] mt-1 font-bold ${
            currentRoute === 'live-screening-and-esp32' ? 'text-[#0c9488]' : 'text-[#0b1c30]'
          }`}>
            Screen
          </span>
        </button>

        {/* Tab 3: Results */}
        <button
          onClick={() => onRouteChange('results')}
          className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 transition-colors cursor-pointer ${
            currentRoute === 'results'
              ? 'text-[#0c9488] font-bold'
              : 'text-[#44474c] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">analytics</span>
          <span className="text-[11px] mt-0.5">Results</span>
        </button>

        {/* Tab 4: PCOS AI */}
        <button
          onClick={() => onRouteChange('pcos-intelligence')}
          className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 transition-colors cursor-pointer ${
            currentRoute === 'pcos-intelligence'
              ? 'text-[#0c9488] font-bold'
              : 'text-[#44474c] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">psychology_alt</span>
          <span className="text-[11px] mt-0.5">PCOS AI</span>
        </button>

        {/* Tab 5: Care Team */}
        <button
          onClick={() => onRouteChange('clinician-handoff')}
          className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 transition-colors cursor-pointer ${
            currentRoute === 'clinician-handoff'
              ? 'text-[#0c9488] font-bold'
              : 'text-[#44474c] hover:text-[#0b1c30]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">medical_services</span>
          <span className="text-[11px] mt-0.5">Care Team</span>
        </button>
      </div>
    </nav>
  );
};
