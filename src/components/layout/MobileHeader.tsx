import React from 'react';
import { ViewRoute } from '../../types';

interface MobileHeaderProps {
  currentRoute: ViewRoute;
  batteryPct?: number;
  onOpenScopeModal: () => void;
  onOpenNotifications: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  currentRoute,
  batteryPct = 94,
  onOpenScopeModal,
  onOpenNotifications,
}) => {
  const getRouteLabel = () => {
    switch (currentRoute) {
      case 'overview': return 'Overview';
      case 'results': return 'Results';
      case 'pcos-intelligence': return 'PCOS Insights';
      case 'live-screening-and-esp32': return 'Screen';
      case 'calibration': return 'Hardware Calibration';
      case 'clinician-handoff': return 'Care Team';
      case 'longitudinal-trends': return 'Trends';
      default: return 'Screening';
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]">
      <div className="h-20 px-4 flex flex-col justify-center gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#0c9488] text-[22px]">biotech</span>
              <span className="text-lg font-bold text-[#0b1c30] tracking-tight">
                HERSCAN<span className="text-[#0c9488]">.AI</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#eff4ff] border border-[#dce9ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
              <span className="text-[10px] font-bold text-[#44474c]">Reader • {batteryPct}% BLE</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onOpenNotifications}
              aria-label="Notifications"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#0b1c30] hover:bg-[#eff4ff] transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
            </button>
            <button
              onClick={onOpenScopeModal}
              className="w-8 h-8 rounded-full bg-[#0e1c2f] flex items-center justify-center text-white"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-0.5">
          <div className="inline-flex items-center gap-1 text-[#44474c]">
            <span className="material-symbols-outlined text-[13px] text-[#426086]">verified_user</span>
            <span className="text-[11px] font-bold text-[#44474c]">Screening Intelligence • Non-Diagnostic</span>
          </div>
          <div className="text-[11px] font-bold text-[#426086] uppercase tracking-wider">
            {getRouteLabel()}
          </div>
        </div>
      </div>
    </header>
  );
};
