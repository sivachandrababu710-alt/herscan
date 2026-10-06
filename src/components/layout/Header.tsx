import React from 'react';
import { ViewRoute, DeviceMode } from '../../types';

interface HeaderProps {
  currentRoute: ViewRoute;
  onRouteChange: (route: ViewRoute) => void;
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
  onOpenScopeModal: () => void;
  batteryPct?: number;
}

const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9JK6k-UYS_045DmZW0PEueB5J0Zas4YMAxMu3IaRnaVjKt0ZVh8LU1mMfnj_QZLoAo46CUvt-0A69QKYNmq70a_G3gAXn7MFuQGg0vguO5TGHZknZ0uszrk63OG-2W3jpwWMK2TPZGR7ORqUpf1_L70A4T9OrdDFLzYqugbOf_4GQ4b00QxNr4SDmBcQI94LD_OKp_-cyJ_Wu46K8wIv_IxGa-DA3ptWmzPHAHW3N7yshHWsfWhOr';

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onRouteChange,
  deviceMode,
  onDeviceModeChange,
  onOpenScopeModal,
  batteryPct = 94,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]/80">
      {/* Top Advisory Banner */}
      <div className="bg-[#eff4ff] px-6 py-1.5 flex items-center justify-between shadow-[0_1px_2px_rgba(11,28,48,0.03)] border-b border-[#dce9ff]/60">
        <div className="flex items-center gap-2 mx-auto">
          <span className="material-symbols-outlined text-[16px] text-[#426086]">shield</span>
          <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider text-center">
            Notice: HERSCAN AI provides early-risk biomarker screening and predictive insights. It is not a diagnostic device. Clinical confirmation recommended.
          </p>
        </div>
        <button
          onClick={onOpenScopeModal}
          className="text-[11px] font-bold text-[#426086] hover:text-[#0b1c30] transition-colors cursor-pointer flex items-center gap-1 shrink-0"
          type="button"
        >
          <span>Scope & Limits</span>
          <span className="material-symbols-outlined text-[14px]">help_outline</span>
        </button>
      </div>

      {/* Main Bar */}
      <div className="h-20 px-6 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onRouteChange('overview')}
            className="flex items-center gap-3 text-left group"
          >
            <img 
              alt="HERSCAN AI Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
              src={LOGO_URL} 
              onError={(e) => {
                // Fallback icon if network blocks hotlink
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-[#0b1c30] tracking-tight">HERSCAN</span>
                <span className="text-xl font-bold text-[#426086]">AI</span>
              </div>
              <span className="text-[11px] font-semibold text-[#44474c]">Early-Risk Screening Platform</span>
            </div>
          </button>
          
          <div className="hidden xl:flex items-center px-3 py-1 rounded-full bg-[#e5eeff] text-[#3b5a7f] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px] mr-1">verified_user</span>
            <span>Screening Not Diagnostic</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => onRouteChange('overview')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'overview'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onRouteChange('live-screening-and-esp32')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'live-screening-and-esp32'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            Live Screening & ESP32
          </button>
          <button
            onClick={() => onRouteChange('results')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'results'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            Results
          </button>
          <button
            onClick={() => onRouteChange('pcos-intelligence')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'pcos-intelligence'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            PCOS Intelligence
          </button>
          <button
            onClick={() => onRouteChange('longitudinal-trends')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'longitudinal-trends'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            Longitudinal Trends
          </button>
          <button
            onClick={() => onRouteChange('history-and-reports')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'history-and-reports'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            History & Reports
          </button>
          <button
            onClick={() => onRouteChange('clinician-handoff')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              currentRoute === 'clinician-handoff'
                ? 'bg-[#0e1c2f] text-white shadow-sm'
                : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#e5eeff]'
            }`}
          >
            Clinician Handoff
          </button>
        </nav>

        {/* Action Controls & Device Switcher */}
        <div className="flex items-center gap-3">
          {/* Device Mockup Toggle */}
          <div className="flex items-center bg-[#eff4ff] p-1 rounded-xl border border-[#dce9ff]">
            <button
              onClick={() => onDeviceModeChange('desktop')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-white text-[#0b1c30] shadow-sm'
                  : 'text-[#44474c] hover:text-[#0b1c30]'
              }`}
              title="Desktop Clinical Suite View"
            >
              <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => onDeviceModeChange('mobile')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-white text-[#0b1c30] shadow-sm'
                  : 'text-[#44474c] hover:text-[#0b1c30]'
              }`}
              title="Mobile Patient App View"
            >
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Reader BLE Status Pill (Clickable -> calibration screen) */}
          <button
            onClick={() => onRouteChange('calibration')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#e5eeff] hover:bg-[#eff4ff] transition-colors cursor-pointer text-left"
            title="Click to view Hardware Calibration & Diagnostics"
          >
            <span className="material-symbols-outlined text-[18px] text-[#0c9488] animate-pulse">
              bluetooth_connected
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-[11px] text-[#0b1c30] font-bold">HERSCAN-Reader Pro</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
              </div>
              <span className="text-[10px] text-[#44474c] leading-none">BLE Connected • {batteryPct}%</span>
            </div>
          </button>

          {/* Notifications button */}
          <button
            onClick={() => onRouteChange('history-and-reports')}
            aria-label="Notifications"
            className="relative p-2 rounded-full text-[#44474c] hover:bg-[#e5eeff] hover:text-[#0b1c30] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ba1a1a] ring-2 ring-white"></span>
          </button>

          {/* Clinical notes modal trigger */}
          <button
            onClick={onOpenScopeModal}
            aria-label="Clinical Protocol & Disclaimer"
            className="p-2 rounded-full text-[#44474c] hover:bg-[#e5eeff] hover:text-[#0b1c30] transition-colors"
            title="Clinical Protocol & Disclaimer"
          >
            <span className="material-symbols-outlined text-[20px]">clinical_notes</span>
          </button>

          {/* User profile avatar */}
          <div className="flex items-center pl-1">
            <div 
              className="w-8 h-8 rounded-full bg-[#0e1c2f] flex items-center justify-center text-white font-bold text-xs shadow-sm"
              title="Elena Vance (Patient Profile)"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
