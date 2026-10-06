import React from 'react';
import { ViewRoute } from '../../types';

interface OverviewMobileProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenScopeModal: () => void;
}

export const OverviewMobile: React.FC<OverviewMobileProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenScopeModal,
}) => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Regulatory Notice Banner */}
      <aside className="flex items-center justify-between p-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] shadow-sm border border-[#dce9ff]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined text-[#0c9488] text-[18px] shrink-0">shield_with_heart</span>
          <p className="text-xs text-[#0b1c30] truncate font-medium">
            Early-Risk Screening Platform • Clinical Confirmation Recommended
          </p>
        </div>
        <button 
          onClick={onOpenScopeModal}
          aria-label="Disclaimer Information" 
          className="p-1 rounded-full text-[#44474c] hover:text-[#0b1c30] shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">info</span>
        </button>
      </aside>

      {/* User Greeting & Cycle Status Badge */}
      <section className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-[#44474c] font-bold">Intelligent Biosensing</span>
          <span className="text-xs text-[#0c9488] font-bold">Today • 08:32 AM</span>
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-[#0b1c30] tracking-tight">Good morning, Elena</h2>
        </div>
        <div className="inline-flex items-center gap-2 self-start py-1 px-3 rounded-full bg-[#dce9ff] text-[#0b1c30]">
          <span className="w-2 h-2 rounded-full bg-[#0c9488] animate-pulse shrink-0"></span>
          <span className="text-xs font-bold text-[#0b1c30]">Cycle Day 14 • Follicular / Ovulatory Window</span>
        </div>
      </section>

      {/* Handheld Hardware Status Pill */}
      <section className="flex items-center justify-between p-3.5 rounded-2xl bg-[#eff4ff] shadow-sm border border-[#dce9ff]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e5eeff] flex items-center justify-center shrink-0 text-[#0b1c30]">
            <span className="material-symbols-outlined text-[22px]">memory</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#0b1c30] truncate">ESP32-S3 Micro Reader</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
            </div>
            <p className="text-[11px] text-[#44474c]">Connected • 94% Battery • Cartridge Ready</p>
          </div>
        </div>
        <button
          onClick={() => onRouteChange('calibration')}
          className="px-3 py-1.5 rounded-full bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold active:scale-95 transition-transform"
        >
          Sync
        </button>
      </section>

      {/* Primary Screening Action CTA Button */}
      <section className="pt-0.5">
        <button
          onClick={() => onRouteChange('live-screening-and-esp32')}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#0e1c2f] text-white shadow-lg shadow-black/10 active:scale-[0.99] transition-transform text-left cursor-pointer"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px] text-[#89f5e7]">bloodtype</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-white font-bold leading-tight">Start New Screening</span>
              <span className="text-xs text-[#bac7e1]">Finger-prick biosensor reading • 90 sec</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px] text-[#89f5e7]">arrow_forward</span>
          </div>
        </button>
      </section>

      {/* Key Biomarker Snapshot (2x2 Grid) */}
      <section className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider">Key Biomarker Snapshot</h3>
          <span className="text-[11px] text-[#44474c]">Sensor Panel #04</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Fasting Glucose */}
          <article className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#44474c] font-medium">Fasting Glucose</span>
              <span className="material-symbols-outlined text-[16px] text-[#0c9488]">water_drop</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#0b1c30]">92</span>
                <span className="text-[11px] text-[#44474c]">mg/dL</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-[#0c9488]">trending_flat</span>
                <span className="text-[11px] text-[#0c9488] font-bold">Normal • ±0 vs 30d</span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#e5eeff] overflow-hidden">
              <div className="h-full bg-[#0c9488] rounded-full" style={{ width: '48%' }}></div>
            </div>
          </article>

          {/* Hemoglobin */}
          <article className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#44474c] font-medium">Hemoglobin</span>
              <span className="material-symbols-outlined text-[16px] text-[#0c9488]">vital_signs</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#0b1c30]">13.4</span>
                <span className="text-[11px] text-[#44474c]">g/dL</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-[#0c9488]">north_east</span>
                <span className="text-[11px] text-[#0c9488] font-bold">+0.3 g/dL trend</span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#e5eeff] overflow-hidden">
              <div className="h-full bg-[#0c9488] rounded-full" style={{ width: '68%' }}></div>
            </div>
          </article>

          {/* Vitamin D3 */}
          <article className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#44474c] font-medium">Vitamin D3</span>
              <span className="material-symbols-outlined text-[16px] text-[#426086]">wb_sunny</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#0b1c30]">38</span>
                <span className="text-[11px] text-[#44474c]">ng/mL</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-[14px] text-[#426086]">check_circle</span>
                <span className="text-[11px] text-[#426086] font-bold">Adequate Range</span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#e5eeff] overflow-hidden">
              <div className="h-full bg-[#426086] rounded-full" style={{ width: '58%' }}></div>
            </div>
          </article>

          {/* PCOS Composite Risk */}
          <article className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#44474c] font-medium">PCOS Risk</span>
              <span className="material-symbols-outlined text-[16px] text-amber-600">warning</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#0b1c30]">38%</span>
                <span className="text-[11px] text-[#44474c]">Index</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[11px] text-[#ba1a1a] font-bold">Moderate • LH Shift</span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#e5eeff] overflow-hidden">
              <div className="h-full bg-[#ba1a1a] rounded-full" style={{ width: '38%' }}></div>
            </div>
          </article>
        </div>
      </section>

      {/* Cycle & Hormone Trajectory Mini-Chart Widget */}
      <section className="p-4 rounded-2xl bg-white shadow-sm border border-[#e5eeff] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0b1c30]">Menstrual & Hormone Trajectory</h3>
            <p className="text-[11px] text-[#44474c]">Days 1–28 • Ovulation peak detected</p>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-[#e5eeff] text-xs font-bold text-[#0b1c30]">
            <span>Day 14</span>
          </div>
        </div>

        {/* Inline SVG Trajectory Visualizer */}
        <div className="relative w-full h-28 bg-[#eff4ff] rounded-xl p-2 flex flex-col justify-end border border-[#dce9ff]/60">
          <svg className="w-full h-20 overflow-visible" fill="none" viewBox="0 0 320 80">
            <defs>
              <linearGradient id="curveGradientMobile" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#0c9488" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0c9488" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Background Phase Bands */}
            <rect fill="#e5eeff" height="80" opacity="0.4" rx="4" width="120" x="0" y="0" />
            <rect fill="#b3d1fd" height="80" opacity="0.3" rx="4" width="60" x="120" y="0" />
            <rect fill="#eff4ff" height="80" opacity="0.4" rx="4" width="140" x="180" y="0" />
            {/* Area Fill */}
            <path d="M 0 65 Q 40 60, 80 50 T 140 20 T 160 15 T 190 40 T 260 55 T 320 65 L 320 80 L 0 80 Z" fill="url(#curveGradientMobile)" />
            {/* Hormone Curve */}
            <path d="M 0 65 Q 40 60, 80 50 T 140 20 T 160 15 T 190 40 T 260 55 T 320 65" stroke="#0c9488" strokeLinecap="round" strokeWidth="2.5" />
            {/* Current Day 14 Indicator */}
            <line stroke="#0e1c2f" strokeDasharray="3 3" strokeWidth="1.5" x1="160" x2="160" y1="10" y2="80" />
            <circle cx="160" cy="15" fill="#0e1c2f" r="4.5" />
            <circle className="animate-ping" cx="160" cy="15" opacity="0.3" r="8" stroke="#0e1c2f" strokeWidth="1.5" />
          </svg>
          <div className="flex items-center justify-between pt-1 px-1 text-[11px] text-[#44474c]">
            <span>Follicular</span>
            <span className="font-bold text-[#0b1c30]">Peak LH/Estrogen</span>
            <span>Luteal</span>
          </div>
        </div>

        {/* Daily Basal & Marker Check-In Row */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2 rounded-xl bg-[#eff4ff]">
            <span className="text-[10px] text-[#44474c] block">Basal Temp</span>
            <span className="text-xs font-bold text-[#0b1c30]">36.65°C</span>
          </div>
          <div className="p-2 rounded-xl bg-[#eff4ff]">
            <span className="text-[10px] text-[#44474c] block">LH Surge</span>
            <span className="text-xs font-bold text-[#0c9488]">Positive</span>
          </div>
          <div className="p-2 rounded-xl bg-[#eff4ff]">
            <span className="text-[10px] text-[#44474c] block">Sensor Status</span>
            <span className="text-xs font-bold text-[#0b1c30]">Calibrated</span>
          </div>
        </div>
      </section>

      {/* Screening Schedule Alert Pill */}
      <button 
        onClick={() => onRouteChange('results')}
        className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-[#dce9ff]/60 text-left border border-[#b3d1fd]/60 active:scale-[0.99] transition-transform"
      >
        <div className="w-8 h-8 rounded-full bg-[#426086] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[18px] text-white">event_upcoming</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-[#0b1c30] truncate">Next Recommended Scan</p>
          <p className="text-[11px] text-[#3b5a7f]">In 5 days (Luteal transition phase verification)</p>
        </div>
        <span className="material-symbols-outlined text-[18px] text-[#3b5a7f] shrink-0">chevron_right</span>
      </button>

      {/* Doctor Consultation Prep Shortcut */}
      <section className="p-4 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center shrink-0 text-[#0b1c30]">
            <span className="material-symbols-outlined text-[22px]">clinical_notes</span>
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="text-xs font-bold text-[#0b1c30] truncate">Doctor Summary Ready</h4>
            <p className="text-[11px] text-[#44474c]">Export 30-day PDF packet for OB/GYN</p>
          </div>
        </div>
        <button
          onClick={onOpenPdfReport}
          className="px-3.5 py-1.5 rounded-xl bg-[#0e1c2f] text-white text-xs font-bold shrink-0 active:scale-95 transition-transform"
        >
          Review
        </button>
      </section>

      {/* Footnote */}
      <div className="p-3 text-center">
        <p className="text-[11px] text-[#44474c]">
          HERSCAN Engine v2.4 • In vitro microfluidic sensor calibrated to ISO 15197 protocols.
        </p>
      </div>
    </div>
  );
};
