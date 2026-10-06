import React from 'react';
import { ViewRoute } from '../../types';

interface SidebarProps {
  currentRoute: ViewRoute;
  onRouteChange: (route: ViewRoute) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentRoute, onRouteChange }) => {
  return (
    <aside className="fixed left-0 top-20 bottom-0 w-64 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex flex-col justify-between pt-6 pb-6 border-r border-[#e5eeff]">
      <div className="px-4 flex flex-col gap-4">
        <div className="px-3 pb-1">
          <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider">Clinical Suite</p>
        </div>
        
        <nav className="flex flex-col gap-1">
          <button
            onClick={() => onRouteChange('overview')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'overview'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="text-sm">Overview</span>
          </button>

          <button
            onClick={() => onRouteChange('live-screening-and-esp32')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'live-screening-and-esp32'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">sensors</span>
            <span className="text-sm">Live Screening</span>
          </button>

          <button
            onClick={() => onRouteChange('results')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'results'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            <span className="text-sm">Diagnostic Risk Results</span>
          </button>

          <button
            onClick={() => onRouteChange('pcos-intelligence')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'pcos-intelligence'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">biotech</span>
            <span className="text-sm">PCOS Intelligence</span>
          </button>

          <button
            onClick={() => onRouteChange('longitudinal-trends')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'longitudinal-trends'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">trending_up</span>
            <span className="text-sm">Biomarker Trajectory</span>
          </button>

          <button
            onClick={() => onRouteChange('history-and-reports')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'history-and-reports'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span className="text-sm">History & Reports</span>
          </button>

          <button
            onClick={() => onRouteChange('clinician-handoff')}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
              currentRoute === 'clinician-handoff'
                ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                : 'text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-semibold text-sm'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            <span className="text-sm">Clinician Handoff</span>
          </button>
        </nav>
      </div>

      {/* Hardware Node Status Box */}
      <div className="px-4 flex flex-col gap-2">
        <button
          onClick={() => onRouteChange('calibration')}
          className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-left hover:bg-[#dce9ff] transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#0b1c30]">ESP32-S3 Core</span>
            <span className="text-[11px] font-bold text-[#0c9488] group-hover:underline">Ready</span>
          </div>
          <p className="text-[11px] text-[#44474c] leading-tight">Photoplethysmography & Bio-Impedance Sensor Array</p>
        </button>

        <div className="flex items-center justify-between px-2 pt-1 text-[#44474c]">
          <span className="text-[11px]">Session: Encrypted</span>
          <span className="material-symbols-outlined text-[16px] text-[#426086]">lock</span>
        </div>
      </div>
    </aside>
  );
};
