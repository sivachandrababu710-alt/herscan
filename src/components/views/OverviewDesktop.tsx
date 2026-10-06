import React from 'react';
import { ViewRoute } from '../../types';

interface OverviewDesktopProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenCartridgeOrder: () => void;
  onOpenEhrSync: () => void;
  onOpenScopeModal: () => void;
}

export const OverviewDesktop: React.FC<OverviewDesktopProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenCartridgeOrder,
  onOpenEhrSync,
  onOpenScopeModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Patient Hero Welcome Banner */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#eff4ff] via-white to-[#e5eeff] p-6 shadow-sm mb-6 border border-[#e5eeff]">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#d3e4ff]/30 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-12 -bottom-16 w-64 h-64 rounded-full bg-[#89f5e7]/20 blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0b1c30] shadow-sm border border-[#e5eeff]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#0c9488] animate-ping"></span>
                <span className="text-[11px] text-[#44474c] font-bold">BLE Active</span>
                <span className="text-[#44474c] text-[11px]">• Cartridge Slot Ready (Pro-S3)</span>
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#dce9ff] text-[#3b5a7f]">
                <span className="material-symbols-outlined text-[14px]">info</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">Screening Insights Only • Not Diagnostic Confirmation</span>
              </div>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-bold text-[#0b1c30] tracking-tight">
              Welcome back, Elena Vance
            </h1>
            <p className="text-sm text-[#44474c]">
              Age 29 • Day 14 of Follicular Phase (Ovulatory Transition Window) • Next screening target in 5 days
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onRouteChange('live-screening-and-esp32')}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#000000] text-white text-sm font-semibold shadow-md hover:bg-[#213145] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#89f5e7] group-hover:scale-110 transition-transform">
                radiology
              </span>
              <span>Start New Screening</span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#89f5e7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#89f5e7]"></span>
              </span>
            </button>
            <button
              onClick={() => onRouteChange('history-and-reports')}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-[#eff4ff] text-[#0b1c30] text-sm font-semibold shadow-sm border border-[#e5eeff] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#426086]">history</span>
              <span>View Health History</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Top Metric Snapshot Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {/* Card 1: Fasting Glucose */}
        <div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md border border-[#e5eeff] transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[22px]">water_drop</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider">Metabolic Index</p>
                <h2 className="text-base font-bold text-[#0b1c30]">Glucose Marker</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
              Normal Risk
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">92</span>
            <span className="text-xs text-[#44474c]">mg/dL</span>
            <span className="text-[11px] text-[#44474c] ml-auto">Fasting baseline</span>
          </div>
          <div className="flex items-center justify-between pt-2 bg-[#eff4ff]/60 rounded-lg px-2.5 py-1 text-xs">
            <div className="flex items-center gap-1 text-[#0c9488]">
              <span className="material-symbols-outlined text-[16px]">trending_down</span>
              <span className="font-bold">-3 mg/dL</span>
            </div>
            <span className="text-[11px] text-[#44474c]">vs. 14-day follicular avg</span>
          </div>
        </div>

        {/* Card 2: Hemoglobin & Anemia */}
        <div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md border border-[#e5eeff] transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[22px]">vital_signs</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider">Hematology Status</p>
                <h2 className="text-base font-bold text-[#0b1c30]">Hemoglobin & Anemia</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
              Optimal
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">13.4</span>
            <span className="text-xs text-[#44474c]">g/dL</span>
            <span className="text-[11px] text-[#44474c] ml-auto">Ref: 12.0–15.5</span>
          </div>
          <div className="flex items-center justify-between pt-2 bg-[#eff4ff]/60 rounded-lg px-2.5 py-1 text-xs">
            <span className="text-[#426086] font-semibold">Iron Reserves</span>
            <span className="text-[11px] text-[#0c9488] font-bold">Ferritin Steady (46 ng/mL)</span>
          </div>
        </div>

        {/* Card 3: Micronutrients */}
        <div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md border border-[#e5eeff] transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[22px]">science</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider">Cellular Nutrition</p>
                <h2 className="text-base font-bold text-[#0b1c30]">Micronutrients</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#3b5a7f] text-[11px] font-bold">
              <span className="material-symbols-outlined text-[14px]">done_all</span>
              Balanced
            </span>
          </div>
          <div className="flex flex-col gap-1 mb-2 text-xs">
            <div className="flex items-baseline justify-between">
              <span className="text-[#0b1c30] font-medium">Vitamin D3</span>
              <div className="flex items-center gap-1">
                <span className="text-base text-[#0b1c30] font-bold">38</span>
                <span className="text-[11px] text-[#44474c]">ng/mL</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-[#0b1c30] font-medium">Active B12</span>
              <div className="flex items-center gap-1">
                <span className="text-base text-[#0b1c30] font-bold">440</span>
                <span className="text-[11px] text-[#44474c]">pg/mL</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 bg-[#eff4ff]/60 rounded-lg px-2.5 py-1 text-xs">
            <span className="text-[11px] text-[#44474c]">Absorption: Adequate</span>
            <span className="text-[#426086] font-semibold text-[11px]">Screened 2d ago</span>
          </div>
        </div>

        {/* Card 4: Endocrine Risk AI */}
        <div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md border border-[#e5eeff] transition-all flex flex-col justify-between">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#3b5a7f]">
                <span className="material-symbols-outlined text-[22px]">biotech</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#44474c] uppercase tracking-wider">Endocrine Risk AI</p>
                <h2 className="text-base font-bold text-[#0b1c30]">PCOS Multi-Factor</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#dce9ff] text-[#001c38] text-[11px] font-bold">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              31% Risk
            </span>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">Low-Mod</span>
            <span className="text-xs text-[#44474c] ml-auto">LH/FSH ratio: 2.1:1</span>
          </div>
          <div className="flex items-center justify-between pt-2 bg-[#eff4ff]/60 rounded-lg px-2.5 py-1 text-xs">
            <span className="text-[11px] text-[#44474c]">Signal: Mid-follicular surge</span>
            <button
              onClick={() => onRouteChange('pcos-intelligence')}
              className="text-[#426086] hover:text-[#0b1c30] font-bold text-xs flex items-center gap-0.5 cursor-pointer"
            >
              Review →
            </button>
          </div>
        </div>
      </section>

      {/* 12-Column Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols): Screening Breakdown & Trajectory */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Card: Screening Breakdown */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 bg-[#eff4ff]/40 rounded-xl p-4 border border-[#e5eeff]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0e1c2f] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">switch_video</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-[#0b1c30]">Screening Breakdown</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e5eeff] text-[#3b5a7f]">#HS-8821B</span>
                  </div>
                  <p className="text-xs text-[#44474c]">Processed March 28, 2025 • 08:15 AM (Point-of-Care Multiplex Slot A)</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#0b1c30] font-semibold bg-white px-3 py-1 rounded-full border border-[#e5eeff]">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">verified</span>
                <span>99.2% Chip Integrity</span>
              </div>
            </div>

            {/* Micro Gauge List */}
            <div className="flex flex-col gap-3">
              {/* Metric 1 */}
              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col gap-1 border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0b1c30]">Capillary Glucose (Fast)</span>
                    <span className="text-[#44474c]">Target: 70 - 99 mg/dL</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white text-[#0c9488] text-[11px] font-bold border border-[#e5eeff]">Normal Range</span>
                </div>
                <div className="relative w-full h-2 rounded-full bg-[#dce9ff] overflow-hidden my-1">
                  <div className="absolute left-0 top-0 bottom-0 bg-[#426086] rounded-full" style={{ width: '65%' }}></div>
                  <div className="absolute top-0 bottom-0 w-1 bg-[#000000] rounded-full shadow" style={{ left: '62%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#44474c]">
                  <span>Current: 92 mg/dL</span>
                  <span>Screening Threshold: 100 mg/dL (Pre-diabetic Indicator)</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col gap-1 border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0b1c30]">LH / FSH Endocrine Ratio</span>
                    <span className="text-[#44474c]">Ideal Ratio: 1.0:1 to 1.5:1</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#dce9ff] text-[#001c38] text-[11px] font-bold">Attention / Trend Shift</span>
                </div>
                <div className="relative w-full h-2 rounded-full bg-[#dce9ff] overflow-hidden my-1">
                  <div className="absolute left-0 top-0 bottom-0 bg-[#426086] rounded-full" style={{ width: '72%' }}></div>
                  <div className="absolute top-0 bottom-0 w-1 bg-[#000000] rounded-full shadow" style={{ left: '70%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#44474c]">
                  <span>Measured: 2.1:1 (LH 11.2 mIU/mL | FSH 5.3 mIU/mL)</span>
                  <span className="text-[#b45309] font-medium">Potential Follicular Divergence Detected</span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col gap-1 border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0b1c30]">hs-CRP (Micro-Inflammation)</span>
                    <span className="text-[#44474c]">Target: &lt; 1.0 mg/L</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white text-[#0c9488] text-[11px] font-bold border border-[#e5eeff]">Normal Range</span>
                </div>
                <div className="relative w-full h-2 rounded-full bg-[#dce9ff] overflow-hidden my-1">
                  <div className="absolute left-0 top-0 bottom-0 bg-[#426086] rounded-full" style={{ width: '32%' }}></div>
                  <div className="absolute top-0 bottom-0 w-1 bg-[#000000] rounded-full shadow" style={{ left: '28%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#44474c]">
                  <span>Current: 0.68 mg/L</span>
                  <span>No active vascular inflammation flags</span>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col gap-1 border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0b1c30]">Serum Ferritin Estimate</span>
                    <span className="text-[#44474c]">Target: 30 - 150 ng/mL</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white text-[#3b5a7f] text-[11px] font-bold border border-[#e5eeff]">Follow-up Recommended</span>
                </div>
                <div className="relative w-full h-2 rounded-full bg-[#dce9ff] overflow-hidden my-1">
                  <div className="absolute left-0 top-0 bottom-0 bg-[#426086] rounded-full" style={{ width: '42%' }}></div>
                  <div className="absolute top-0 bottom-0 w-1 bg-[#000000] rounded-full shadow" style={{ left: '38%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#44474c]">
                  <span>Current: 36 ng/mL (Low-Normal Border)</span>
                  <span>Re-check post-menses in next cycle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Longitudinal Trajectory (6 Months) */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Longitudinal Trajectory</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#3b5a7f] text-[10px] font-bold">6 Months History</span>
                </div>
                <h3 className="text-lg font-bold text-[#0b1c30]">Metabolic & Endocrine Trajectory</h3>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-[#44474c]">
                  <span className="w-3 h-3 rounded-sm bg-[#000000]"></span> Fasting Glucose
                </span>
                <span className="flex items-center gap-1.5 text-[#44474c]">
                  <span className="w-3 h-3 rounded-sm bg-[#426086]"></span> LH/FSH Index
                </span>
              </div>
            </div>

            {/* SVG Visualizer Chart */}
            <div className="relative w-full h-64 bg-[#eff4ff] rounded-xl p-4 flex flex-col justify-between border border-[#dce9ff]/60">
              <div className="absolute inset-x-8 top-12 bottom-12 grid grid-rows-3 pointer-events-none opacity-20">
                <div className="border-b border-[#44474c]"></div>
                <div className="border-b border-[#44474c]"></div>
                <div className="border-b border-[#44474c]"></div>
              </div>

              <div className="relative z-10 w-full h-44 flex items-end">
                <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 600 150">
                  {/* LH/FSH Index curve */}
                  <path
                    className="text-[#426086]"
                    d="M 0 110 C 60 115, 120 100, 180 85 C 240 70, 300 95, 360 80 C 420 65, 480 75, 540 70 L 600 68"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  {/* Fasting Glucose curve */}
                  <path
                    className="text-[#000000]"
                    d="M 0 85 C 60 88, 120 70, 180 75 C 240 80, 300 65, 360 60 C 420 55, 480 62, 540 58 L 600 56"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  {/* Data Points */}
                  <circle className="fill-white stroke-[#426086]" cx="180" cy="85" r="4" strokeWidth="2" />
                  <circle className="fill-white stroke-[#426086]" cx="360" cy="80" r="4" strokeWidth="2" />
                  <circle className="fill-white stroke-[#426086]" cx="540" cy="70" r="4" strokeWidth="2" />
                  <circle className="fill-[#426086] stroke-white" cx="600" cy="68" r="5" strokeWidth="2" />

                  <circle className="fill-white stroke-[#000000]" cx="180" cy="75" r="4" strokeWidth="2" />
                  <circle className="fill-white stroke-[#000000]" cx="360" cy="60" r="4" strokeWidth="2" />
                  <circle className="fill-white stroke-[#000000]" cx="540" cy="58" r="4" strokeWidth="2" />
                  <circle className="fill-[#000000] stroke-white" cx="600" cy="56" r="5" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-[#44474c] px-2 font-mono">
                <span>Oct '24</span>
                <span>Nov '24</span>
                <span>Dec '24</span>
                <span>Jan '25</span>
                <span>Feb '25</span>
                <span className="font-bold text-[#0b1c30]">Mar '25 (Today)</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg bg-[#eff4ff] text-[#44474c] text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">date_range</span>
                <span>Overlay Cycle Phase: <strong className="text-[#0b1c30]">Follicular Days 10–14 consistently correlate with higher glucose sensitivity.</strong></span>
              </div>
              <button
                onClick={() => onRouteChange('longitudinal-trends')}
                className="text-[#426086] font-bold hover:underline cursor-pointer"
              >
                Open Trajectory Engine →
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Alerts, Hardware, Clinical Quick Actions */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card: Alerts & Guidance */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#426086]">notifications_active</span>
                <h3 className="text-base font-bold text-[#0b1c30]">Screening Alerts & Guidance</h3>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#44474c] font-bold">2 Active</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col gap-1 border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b1c30] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#426086]">warning</span>
                  Follicular Glucose Variance
                </span>
                <span className="text-[10px] text-[#44474c]">Observed +4%</span>
              </div>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Mild variance compared to luteal average. Recommended: Maintain 10-hour fasting state before next scheduled sample in 7 days for baseline calibration.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#dce9ff]/60 flex flex-col gap-1 border border-[#b3d1fd]/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b1c30] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#426086]">assignment_ind</span>
                  Clinical Confirmation Notice
                </span>
                <span className="text-[10px] text-[#44474c] font-bold uppercase">Guideline</span>
              </div>
              <p className="text-xs text-[#44474c] leading-relaxed">
                LH/FSH elevation detected over 2 consecutive cycles. HERSCAN recommends presenting the compiled FHIR screening telemetry to your gynecologist or endocrinologist.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onRouteChange('clinician-handoff')}
                  className="inline-flex items-center gap-1 text-xs text-[#426086] font-bold hover:underline cursor-pointer"
                >
                  <span>Prepare Clinician Handoff Packet</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card: Hardware & Cartridges */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#0c9488]">inventory_2</span>
                <h3 className="text-base font-bold text-[#0b1c30]">Hardware & Cartridges</h3>
              </div>
              <button
                onClick={() => onRouteChange('calibration')}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] font-bold hover:bg-[#dce9ff] transition-colors"
              >
                Active BLE
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col justify-between border border-[#dce9ff]/60">
                <span className="text-[11px] text-[#44474c] uppercase font-bold tracking-wider">Cartridges Left</span>
                <div className="my-1">
                  <span className="text-2xl font-bold text-[#0b1c30]">4</span>
                  <span className="text-xs text-[#44474c] ml-1">/ 10 Pack</span>
                </div>
                <span className="text-[11px] text-[#44474c]">Lot #CP-092 • Dec 2025</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#eff4ff] flex flex-col justify-between border border-[#dce9ff]/60">
                <span className="text-[11px] text-[#44474c] uppercase font-bold tracking-wider">Optical Matrix</span>
                <div className="my-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#0c9488] text-[20px]">check_circle</span>
                  <span className="text-sm font-bold text-[#0b1c30]">Calibrated</span>
                </div>
                <span className="text-[11px] text-[#44474c]">Drift &lt;0.01% • ESP32-S3</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white flex items-center justify-between shadow-sm border border-[#e5eeff]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">battery_charging_90</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0b1c30]">Handheld Core Battery</p>
                  <p className="text-[11px] text-[#44474c]">Approx. 28 screenings remaining</p>
                </div>
              </div>
              <span className="text-sm font-bold text-[#0b1c30]">94%</span>
            </div>
          </div>

          {/* Card: Quick Clinical Actions */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col gap-2">
            <h3 className="text-sm font-bold text-[#0b1c30] mb-1">Quick Clinical Actions</h3>
            
            <button
              onClick={onOpenPdfReport}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] transition-colors text-left cursor-pointer border border-[#dce9ff]"
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">picture_as_pdf</span>
                <div>
                  <p className="text-xs font-bold text-[#0b1c30]">Download PDF Clinical Summary</p>
                  <p className="text-[11px] text-[#44474c]">Formatted for OB/GYN review</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#44474c]">download</span>
            </button>

            <button
              onClick={onOpenCartridgeOrder}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] transition-colors text-left cursor-pointer border border-[#dce9ff]"
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">shopping_cart_checkout</span>
                <div>
                  <p className="text-xs font-bold text-[#0b1c30]">Order Replacement Cartridges</p>
                  <p className="text-[11px] text-[#44474c]">Ships in 2 business days</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#44474c]">chevron_right</span>
            </button>

            <button
              onClick={onOpenEhrSync}
              className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] transition-colors text-left cursor-pointer border border-[#dce9ff]"
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">sync</span>
                <div>
                  <p className="text-xs font-bold text-[#0b1c30]">Sync Apple Health & Epic MyChart</p>
                  <p className="text-[11px] text-[#44474c]">EHR Direct Integration</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-[#44474c]">link</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Regulatory Research Footnote */}
      <div className="mt-8 p-4 rounded-xl bg-[#eff4ff] text-[#44474c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-[#dce9ff]">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px] text-[#426086] shrink-0">verified_user</span>
          <p className="text-xs">
            <strong>HIPAA & FDA 510(k) Pre-Market Research Phase:</strong> HERSCAN AI provides screening-level biomarker estimates and multi-marker predictive trend analytics. It does not replace medical pathology tests or professional diagnostic interpretation.
          </p>
        </div>
        <button
          onClick={onOpenScopeModal}
          className="text-xs text-[#426086] hover:text-[#0b1c30] whitespace-nowrap font-bold cursor-pointer"
        >
          View Research Protocol →
        </button>
      </div>
    </div>
  );
};
