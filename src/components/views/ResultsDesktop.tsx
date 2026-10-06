import React from 'react';
import { ViewRoute } from '../../types';

interface ResultsDesktopProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenScopeModal: () => void;
}

export const ResultsDesktop: React.FC<ResultsDesktopProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenScopeModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Advisory Notification Banner */}
      <div className="w-full mb-6 rounded-2xl bg-[#dce9ff]/60 backdrop-blur-md p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#b3d1fd]/60">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#d3e4fe] flex items-center justify-center shrink-0 text-[#426086]">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Diagnostic Safety Protocol</span>
              <span className="w-1 h-1 rounded-full bg-[#c5c6cd]"></span>
              <span className="text-xs text-[#44474c]">Class II Screening Model</span>
            </div>
            <p className="text-xs text-[#0b1c30] mt-0.5">
              <strong>Notice:</strong> These findings represent early-risk screening indications derived from biochemical sensor arrays and predictive models. They are not medical diagnoses. Clinical confirmation is recommended for any anomalous trend.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <span className="text-xs text-[#0c9488] font-bold flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-[#e5eeff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
            Encrypted Session ID: #HS-8821B
          </span>
        </div>
      </div>

      {/* Header Executive Summary Zone */}
      <div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-6 mb-8 border-b border-[#e5eeff]">
        <div className="flex flex-col gap-1 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-[#44474c] text-xs font-semibold">
            <span className="px-2.5 py-0.5 rounded bg-[#e5eeff] text-[#0b1c30] text-[11px] font-bold">RUN COMPLETED</span>
            <span>Today, March 28, 2025 at 08:15 AM</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#426086]">
              <span className="material-symbols-outlined text-[16px]">water_drop</span> Fasting State: Yes (9.5 hrs)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#426086]">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span> Follicular Phase (Day 14)
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1">
            Screening Results & Risk Overview
          </h1>
          <p className="text-sm text-[#44474c]">
            Comprehensive multiparametric assessment derived from continuous non-invasive biosensor array and photoplethysmography telemetry.
          </p>
        </div>

        {/* Action Toolbar Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => window.print()}
            className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#eff4ff] text-[#0b1c30] text-xs font-bold shadow-sm border border-[#e5eeff] transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-[#426086] transition-transform group-hover:scale-110">print</span>
            <span>Print Summary</span>
          </button>
          <button
            onClick={onOpenScopeModal}
            className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold shadow-sm transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-[#0b1c30] transition-transform group-hover:rotate-12">calendar_add_on</span>
            <span>Schedule Follow-up</span>
          </button>
          <button
            onClick={onOpenPdfReport}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1c2f] hover:bg-[#213145] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-[#89f5e7] transition-colors">description</span>
            <span>Export Clinician Summary (PDF)</span>
          </button>
        </div>
      </div>

      {/* Multi-Marker Screening Cards (5 Bento Style Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 mb-8">
        {/* CARD 1: Glucose Balance (Cols 1-4) */}
        <div className="xl:col-span-4 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">monitor_weight_gain</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Metabolic Glycemia</span>
                  <h3 className="text-base font-bold text-[#0b1c30] leading-none">Glucose Balance</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                Normal Range
              </span>
            </div>

            <div className="flex items-baseline justify-between mt-2">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">92</span>
                  <span className="text-xs text-[#44474c]">mg/dL</span>
                </div>
                <p className="text-[11px] text-[#44474c] mt-0.5">Ref. Normal: 70–99 mg/dL</p>
              </div>

              {/* Sparkline */}
              <div className="w-24 h-10 flex flex-col items-end justify-center">
                <svg className="w-full h-8 text-[#0c9488]" fill="none" viewBox="0 0 100 35">
                  <path d="M 0 20 Q 25 15, 50 18 T 100 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                  <circle cx="100" cy="17" fill="currentColor" r="3.5"></circle>
                </svg>
                <span className="text-[10px] text-[#44474c]">Flat / 3-cycle baseline</span>
              </div>
            </div>

            <div className="my-4 p-3 rounded-xl bg-[#eff4ff] text-[#44474c] text-xs leading-relaxed border border-[#dce9ff]/60">
              Enzymatic biosensor detected steady post-fasting baseline with high glycemic recovery index.
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#e5eeff] text-xs">
            <span className="text-[11px] text-[#44474c]">Biomarker Tag: #GLU-84</span>
            <button
              onClick={() => onRouteChange('live-screening-and-esp32')}
              className="text-xs font-bold text-[#426086] hover:text-[#0b1c30] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Kinetic Curve</span>
              <span className="material-symbols-outlined text-[16px]">trending_flat</span>
            </button>
          </div>
        </div>

        {/* CARD 2: Hemoglobin Screen (Cols 5-8) */}
        <div className="xl:col-span-4 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">hematology</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Hematology Profile</span>
                  <h3 className="text-base font-bold text-[#0b1c30] leading-none">Hemoglobin Screen</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                Optimal / Low Risk
              </span>
            </div>

            <div className="flex items-baseline justify-between mt-2">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">13.4</span>
                  <span className="text-xs text-[#44474c]">g/dL</span>
                </div>
                <p className="text-[11px] text-[#44474c] mt-0.5">Target Range: 12.0–15.5 g/dL</p>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#eff4ff] text-[#0c9488] text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                <span>+0.3 g/dL vs prior mo</span>
              </div>
            </div>

            <div className="my-4 p-3 rounded-xl bg-[#eff4ff] text-[#44474c] text-xs leading-relaxed border border-[#dce9ff]/60">
              RBC oxygen-carrying capacity biomarker stable. No fatigue-risk marker indicated.
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-1">
            <div className="flex justify-between text-[10px] text-[#44474c] font-semibold">
              <span>10.0 Low</span>
              <span className="text-[#0b1c30] font-bold">Target 12.0–15.5</span>
              <span>17.0 High</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#e5eeff] overflow-hidden flex relative">
              <div className="w-[30%] bg-[#d3e4fe]"></div>
              <div className="w-[50%] bg-[#b3d1fd] relative">
                <div className="absolute left-[45%] top-0 bottom-0 w-2.5 rounded-full bg-[#0c9488]"></div>
              </div>
              <div className="w-[20%] bg-[#d3e4fe]"></div>
            </div>
          </div>
        </div>

        {/* CARD 3: Micronutrients (Cols 9-12) */}
        <div className="xl:col-span-4 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">vital_signs</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Cellular Nutrition</span>
                  <h3 className="text-base font-bold text-[#0b1c30] leading-none">Micronutrients</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                Adequate Levels
              </span>
            </div>

            <div className="space-y-3 mt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0b1c30]">Vitamin D3 (25-OH)</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span>
                  </div>
                  <span className="text-[11px] text-[#44474c]">Sufficiency: 30–100 ng/mL</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-[#0b1c30]">38</span>
                  <span className="text-[11px] text-[#44474c] ml-1">ng/mL</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0b1c30]">Cobalamin (B12)</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Normal</span>
                  </div>
                  <span className="text-[11px] text-[#44474c]">Target: 200–900 pg/mL</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-[#0b1c30]">440</span>
                  <span className="text-[11px] text-[#44474c] ml-1">pg/mL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between text-xs text-[#44474c] border-t border-[#e5eeff]">
            <span className="flex items-center gap-1 text-[#0c9488] font-bold">
              <span className="material-symbols-outlined text-[15px]">check_circle</span>
              Photometric Assay Validated
            </span>
            <span>Repeat: 90 Days</span>
          </div>
        </div>

        {/* CARD 4: Metabolic & Inflammatory Markers (Cols 1-6) */}
        <div className="xl:col-span-6 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">bubble_chart</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Systemic Balance</span>
                  <h3 className="text-base font-bold text-[#0b1c30] leading-none">Metabolic & Inflammatory Markers</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                Normal Screening Range
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-[#eff4ff] flex flex-col justify-between border border-[#dce9ff]/60">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-bold text-[#44474c]">hs-CRP Marker</span>
                    <span className="material-symbols-outlined text-[16px] text-[#0c9488]">format_image_left</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-[#0b1c30]">0.8</span>
                    <span className="text-xs text-[#44474c]">mg/L</span>
                  </div>
                </div>
                <p className="text-xs text-[#44474c] mt-3">
                  Low systemic inflammatory signal. High baseline recovery profile.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#eff4ff] flex flex-col justify-between border border-[#dce9ff]/60">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-bold text-[#44474c]">TG / HDL Ratio</span>
                    <span className="material-symbols-outlined text-[16px] text-[#0c9488]">bolt</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-[#0b1c30]">1.4</span>
                    <span className="text-xs text-[#44474c]">Ratio</span>
                  </div>
                </div>
                <p className="text-xs text-[#44474c] mt-3">
                  Favorable metabolic flexibility index; well under the 2.0 threshold.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-4 flex items-center justify-between text-xs text-[#44474c] border-t border-[#e5eeff]">
            <span>Sub-threshold inflammatory drift</span>
            <span className="text-[#0b1c30] font-bold">Confidence Interval: 98.4%</span>
          </div>
        </div>

        {/* CARD 5: Endocrine LH / FSH Ratio Flag (Cols 7-12) */}
        <div className="xl:col-span-6 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#d3e4fe]/50 blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#426086]">
                  <span className="material-symbols-outlined text-[18px]">biotech</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086] block">Endocrine Intelligence</span>
                  <h3 className="text-base font-bold text-[#0b1c30] leading-none">LH / FSH Ratio Flag</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#d3e4fe] text-[#29486d] text-[11px] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                Attention / Mild Imbalance Pattern
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#eff4ff] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 border border-[#dce9ff]">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#44474c] block">Biosensor Signal Ratio</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-bold text-[#0b1c30] tracking-tight">1.8 : 1</span>
                  <span className="text-xs text-[#44474c]">(Standard &lt; 1.0)</span>
                </div>
                <p className="text-xs text-[#0b1c30] mt-1.5 font-medium">
                  <strong>Moderate Risk Pattern Detected:</strong> Suggested Physician Follow-up for follicular assessment.
                </p>
              </div>

              {/* Circular Gauge */}
              <div className="relative w-20 h-20 shrink-0 self-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-[#dce9ff]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                  <path className="text-[#426086]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="68, 100" strokeLinecap="round" strokeWidth="3.5" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-[#0b1c30]">1.8x</span>
                  <span className="text-[9px] text-[#44474c] uppercase font-semibold">Elevated</span>
                </div>
              </div>
            </div>

            <div className="my-4 text-xs text-[#44474c] leading-relaxed relative z-10">
              The calculated luteinizing hormone to follicle-stimulating hormone surge slope during Day 14 follicular phase exceeds expected thresholds, which can be an algorithmic signature associated with polycystic ovary profiles.
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between relative z-10 border-t border-[#e5eeff] text-xs">
            <span className="text-[11px] text-[#44474c]">Module: Neuro-Endocrine v3.1</span>
            <button
              onClick={() => onRouteChange('pcos-intelligence')}
              className="px-3 py-1.5 rounded-lg bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Explore Dedicated PCOS Intelligence Page</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Longitudinal 4-Session Comparison Table & Next Steps */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Table (Cols 1-7) */}
        <div className="lg:col-span-7 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Historical Telemetry</span>
              <h2 className="text-lg font-bold text-[#0b1c30]">Longitudinal Trajectory (Last 4 Screenings)</h2>
            </div>
            <button
              onClick={() => onRouteChange('longitudinal-trends')}
              className="text-xs font-bold text-[#426086] hover:text-[#0b1c30] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Extended Analytics</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="bg-[#eff4ff] text-[#44474c] uppercase font-bold text-[11px]">
                  <th className="py-2.5 px-3 rounded-l-lg">Biomarker / Indicator</th>
                  <th className="py-2.5 px-3">Nov 2024</th>
                  <th className="py-2.5 px-3">Jan 2025</th>
                  <th className="py-2.5 px-3">Feb 2025</th>
                  <th className="py-2.5 px-3 rounded-r-lg bg-[#e5eeff] text-[#0b1c30] font-bold">Mar 2025 (Current)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eff4ff]">
                <tr className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span> Fasting Glucose
                  </td>
                  <td className="py-3 px-3 text-[#44474c]">94 mg/dL</td>
                  <td className="py-3 px-3 text-[#44474c]">91 mg/dL</td>
                  <td className="py-3 px-3 text-[#44474c]">93 mg/dL</td>
                  <td className="py-3 px-3 font-bold text-[#0b1c30] bg-[#eff4ff]/40">92 mg/dL</td>
                </tr>
                <tr className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span> Hemoglobin (Hb)
                  </td>
                  <td className="py-3 px-3 text-[#44474c]">12.9 g/dL</td>
                  <td className="py-3 px-3 text-[#44474c]">13.1 g/dL</td>
                  <td className="py-3 px-3 text-[#44474c]">13.1 g/dL</td>
                  <td className="py-3 px-3 font-bold text-[#0b1c30] bg-[#eff4ff]/40">13.4 g/dL</td>
                </tr>
                <tr className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#426086]"></span> LH / FSH Approx. Ratio
                  </td>
                  <td className="py-3 px-3 text-[#44474c]">1.4 : 1</td>
                  <td className="py-3 px-3 text-[#44474c]">1.5 : 1</td>
                  <td className="py-3 px-3 text-[#44474c]">1.7 : 1</td>
                  <td className="py-3 px-3 font-bold text-[#b45309] bg-[#eff4ff]/40">1.8 : 1 (Flagged)</td>
                </tr>
                <tr className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#0b1c30] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span> hs-CRP Inflammation
                  </td>
                  <td className="py-3 px-3 text-[#44474c]">1.1 mg/L</td>
                  <td className="py-3 px-3 text-[#44474c]">0.9 mg/L</td>
                  <td className="py-3 px-3 text-[#44474c]">0.9 mg/L</td>
                  <td className="py-3 px-3 font-bold text-[#0b1c30] bg-[#eff4ff]/40">0.8 mg/L</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-[#e5eeff] flex items-center gap-2 text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[16px] text-[#426086]">info</span>
            <span>Sensor calibration variance is normalized to within ±1.2% over consecutive sessions.</span>
          </div>
        </div>

        {/* Right Next Steps (Cols 8-12) */}
        <div className="lg:col-span-5 rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">checklist</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c] block">Guidance Protocol</span>
                <h2 className="text-lg font-bold text-[#0b1c30]">Suggested Next Steps</h2>
              </div>
            </div>

            <p className="text-xs text-[#44474c] mb-4">
              Non-diagnostic behavioral and clinical continuity recommendations curated by algorithm v2025.2:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-6 h-6 rounded-full bg-[#0e1c2f] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Continue Biomarker & Symptom Logging</h4>
                  <p className="text-xs text-[#44474c] mt-0.5">
                    Log daily basal body temperature (BBT) and cycle cues over the next 14 days to monitor the luteal phase transition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-6 h-6 rounded-full bg-[#0e1c2f] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Share Screening Packet with Provider</h4>
                  <p className="text-xs text-[#44474c] mt-0.5">
                    Forward this summary or generate the HL7/FHIR packet for your OB/GYN or primary doctor to review the endocrine ratio drift.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-6 h-6 rounded-full bg-[#0e1c2f] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Schedule 30-Day Follow-Up Screening</h4>
                  <p className="text-xs text-[#44474c] mt-0.5">
                    Plan the next ESP32 multiparameter check during your next cycle's Follicular Day 14 window to maintain longitudinal fidelity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#e5eeff]">
            <button
              onClick={() => onRouteChange('clinician-handoff')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#426086]">share</span>
              <span>Prepare Clinician Handoff Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* ISO Guided Protocol Footnote */}
      <div className="w-full mt-8 p-4 rounded-xl bg-[#eff4ff] text-[#44474c] text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#dce9ff]">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px] text-[#426086] shrink-0">clinical_notes</span>
          <p className="leading-relaxed">
            Screening algorithmic confidence is calculated against standardized clinical datasets. All biomarker approximations (including optical LH/FSH signals and surrogate hs-CRP) are auxiliary decision-support markers intended for preventive monitoring.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-[11px]">
          <span className="text-[#0b1c30] font-bold">ISO 13485 Guided Protocol</span>
          <span>Ref: #DOC-2025-MAR</span>
        </div>
      </div>
    </div>
  );
};
