import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface ClinicianHandoffDesktopProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: (type?: 'summary' | 'comprehensive') => void;
  onOpenDoctorLink: () => void;
  onOpenScopeModal: () => void;
}

export const ClinicianHandoffDesktop: React.FC<ClinicianHandoffDesktopProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenDoctorLink,
  onOpenScopeModal,
}) => {
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: true,
    item3: false,
    item4: false,
  });
  const [doctorNote, setDoctorNote] = useState('Dr. Mercer: Please review the Day 14 LH surge divergence and cycle prolongation pattern since December 2024.');
  const [noteSaved, setNoteSaved] = useState(false);

  const handleSaveNote = () => {
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Handoff Preparation Bar */}
      <section className="relative w-full rounded-2xl bg-white p-6 shadow-sm overflow-hidden mb-6 border border-[#e5eeff]">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#d3e4fe]/40 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5eeff] text-[#426086] text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#426086]"></span>
                EHR / FHIR Handoff Bridge
              </span>
              <span className="text-xs text-[#44474c] font-semibold">Session Token: #HS-9482-CLINIC</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#0c9488] text-xs font-bold bg-[#eff4ff] px-3.5 py-1 rounded-full border border-[#dce9ff]">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>HIPAA Level-3 Cryptographic Integrity Verified</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#0b1c30] tracking-tight">
                Physician & Care Team Export Suite
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#44474c]">
                <span className="font-bold text-[#0b1c30] text-sm">Elena Vance</span>
                <span>•</span>
                <span>DOB: Oct 14, 1995 <strong className="text-[#0b1c30]">(Age 29)</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#426086] font-bold">
                  <span className="material-symbols-outlined text-[16px]">sync_saved_locally</span>
                  EHR-Ready FHIR R4 Standard
                </span>
                <span>•</span>
                <span className="font-semibold text-[#0b1c30]">Last 6 Months (Oct 2024 – Mar 2025 • 6 Screenings Completed)</span>
              </div>
            </div>

            {/* Export Buttons Group */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={() => onOpenPdfReport('summary')}
                className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold transition-all shadow-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-[#426086] group-hover:scale-110 transition-transform">article</span>
                <span>1-Page Summary PDF</span>
              </button>
              <button
                onClick={() => onOpenPdfReport('comprehensive')}
                className="group flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0e1c2f] text-white hover:bg-[#213145] transition-all text-xs font-bold shadow-md cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-[#89f5e7] group-hover:scale-110 transition-transform">picture_as_pdf</span>
                <span>Comprehensive 4-Page Lab Report</span>
              </button>
              <button
                onClick={onOpenDoctorLink}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#426086] text-white hover:bg-[#29486d] transition-all text-xs font-bold shadow-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">share_location</span>
                <span>Secure Web Link for Doctor</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#eff4ff] text-[#0b1c30] border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[20px] text-[#426086] shrink-0">verified</span>
            <p className="text-xs text-[#44474c] leading-relaxed">
              <strong className="text-[#0b1c30]">Clinical Handoff Protocol:</strong> HIPAA Compliant & End-to-End Encrypted. Report structured to clinical review standards with calibrated raw ESP32 optical & electrochemical impedance telemetry appended for physician inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Main Review Dashboard (12 Column Grid) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols): Longitudinal Charts & Heatmap */}
        <div className="xl:col-span-7 flex flex-col gap-6">
          {/* Chart 1: Fasting Glucose & Hemoglobin Multi-Line Chart */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#426086]"></span>
                  <h2 className="text-lg font-bold text-[#0b1c30]">Longitudinal Metabolic & Hematologic Profile</h2>
                </div>
                <p className="text-xs text-[#44474c]">Fasting Glucose (mg/dL) • Hemoglobin (g/dL) across 6 consecutive cartridgeless biosensor cycles</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#eff4ff] text-[#0b1c30] font-semibold">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#426086]"></span>
                  Glucose (mg/dL)
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#eff4ff] text-[#0b1c30] font-semibold">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0c9488]"></span>
                  Hemoglobin (g/dL)
                </span>
              </div>
            </div>

            {/* SVG Visualizer with Reference Band */}
            <div className="w-full mt-2">
              <div className="relative w-full aspect-[21/9] bg-[#eff4ff] rounded-xl p-4 flex flex-col justify-between overflow-hidden border border-[#dce9ff]">
                <div className="absolute inset-x-8 top-[32%] bottom-[28%] bg-[#dce9ff]/40 rounded pointer-events-none">
                  <span className="absolute right-3 top-1 text-[10px] text-[#426086] font-bold uppercase tracking-wider">
                    Clinical Reference Normal Band (70 - 99 mg/dL)
                  </span>
                </div>

                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 680 180">
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.75" x1="40" x2="660" y1="30" y2="30" />
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.75" x1="40" x2="660" y1="75" y2="75" />
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.75" x1="40" x2="660" y1="120" y2="120" />
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.75" x1="40" x2="660" y1="165" y2="165" />

                  <text className="fill-[#64748B] text-[10px]" textAnchor="end" x="32" y="34">110</text>
                  <text className="fill-[#64748B] text-[10px]" textAnchor="end" x="32" y="79">95</text>
                  <text className="fill-[#64748B] text-[10px]" textAnchor="end" x="32" y="124">80</text>
                  <text className="fill-[#64748B] text-[10px]" textAnchor="end" x="32" y="169">65</text>

                  {/* Glucose Line */}
                  <path d="M 80,105 L 190,92 L 300,81 L 410,100 L 520,96 L 630,94" fill="none" stroke="#426086" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  {/* Hemoglobin Line */}
                  <path d="M 80,132 L 190,121 L 300,138 L 410,118 L 520,126 L 630,129" fill="none" stroke="#0c9488" strokeDasharray="4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />

                  <circle cx="80" cy="105" fill="#426086" r="4.5" />
                  <circle cx="190" cy="92" fill="#426086" r="4.5" />
                  <circle cx="300" cy="81" fill="#0e1c2f" r="5" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="410" cy="100" fill="#426086" r="4.5" />
                  <circle cx="520" cy="96" fill="#426086" r="4.5" />
                  <circle cx="630" cy="94" fill="#0e1c2f" r="5" stroke="#ffffff" strokeWidth="2" />

                  <circle cx="80" cy="132" fill="#0c9488" r="3.5" />
                  <circle cx="190" cy="121" fill="#0c9488" r="3.5" />
                  <circle cx="300" cy="138" fill="#0c9488" r="3.5" />
                  <circle cx="410" cy="118" fill="#0c9488" r="3.5" />
                  <circle cx="520" cy="126" fill="#0c9488" r="3.5" />
                  <circle cx="630" cy="129" fill="#0c9488" r="3.5" />

                  {/* Callout */}
                  <rect fill="#0e1c2f" height="24" rx="4" width="85" x="570" y="58" />
                  <text className="fill-white text-[11px] font-bold" textAnchor="middle" x="612" y="74">91 mg/dL</text>
                </svg>

                <div className="flex justify-between pl-10 pr-4 text-xs text-[#44474c] font-medium pt-2">
                  <span>Oct 18</span>
                  <span>Nov 15</span>
                  <span>Dec 14</span>
                  <span>Jan 19</span>
                  <span>Feb 16</span>
                  <span className="text-[#0b1c30] font-bold">Mar 17 (Latest)</span>
                </div>
              </div>
            </div>

            {/* Metric Summary Chips */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[10px] text-[#44474c] uppercase font-bold">Mean Fasting Glucose</span>
                <span className="text-lg font-bold text-[#0b1c30] mt-0.5">91.3 <span className="text-xs font-normal text-[#44474c]">mg/dL</span></span>
                <span className="text-[11px] text-[#0c9488] font-bold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Euglycemic Steady
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[10px] text-[#44474c] uppercase font-bold">Mean Hemoglobin</span>
                <span className="text-lg font-bold text-[#0b1c30] mt-0.5">13.2 <span className="text-xs font-normal text-[#44474c]">g/dL</span></span>
                <span className="text-[11px] text-[#0c9488] font-bold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Non-Anemic Range
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[10px] text-[#44474c] uppercase font-bold">Glucose Variance (σ)</span>
                <span className="text-lg font-bold text-[#0b1c30] mt-0.5">± 2.8 <span className="text-xs font-normal text-[#44474c]">mg/dL</span></span>
                <span className="text-[11px] text-[#426086] font-bold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">insights</span> Low Swing
                </span>
              </div>
            </div>
          </div>

          {/* Chart 2: Menstrual Cycle & Hormone Screening Timeline */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#426086]"></span>
                  <h2 className="text-lg font-bold text-[#0b1c30]">Menstrual Cycle & Hormone Screening Timeline</h2>
                </div>
                <p className="text-xs text-[#44474c]">Recorded Cycle Lengths (Days 28–41), Phase Partitioning & Flare Events</p>
              </div>
              <span className="text-[11px] px-3 py-1 rounded-full bg-[#dce9ff] text-[#001c38] font-bold">
                Prolongation Trend Detected
              </span>
            </div>

            <div className="space-y-2.5 mt-1">
              {/* Cycle 1 */}
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <span className="font-bold">Cycle 1 (Oct 2024) • Day 29 Duration</span>
                  <span className="text-[#44474c]">Screened: Follicular Day 5</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '48%' }} title="Follicular Phase (14d)"></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '52%' }} title="Luteal Phase (15d)"></div>
                </div>
              </div>

              {/* Cycle 2 */}
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <span className="font-bold">Cycle 2 (Nov 2024) • Day 34 Duration</span>
                  <span className="text-[#44474c]">Screened: Luteal Day 26</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '56%' }} title="Follicular Phase (19d)"></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '44%' }} title="Luteal Phase (15d)"></div>
                </div>
              </div>

              {/* Cycle 3 (Delayed) */}
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">Cycle 3 (Dec 2024) • Day 41 Duration</span>
                    <span className="px-2 py-0.5 rounded bg-[#d3e4fe] text-[#001c38] text-[10px] font-bold uppercase">
                      Oligomenorrheic Spike
                    </span>
                  </div>
                  <span className="text-[#44474c]">Screened: Follicular Day 12</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '68%' }} title="Prolonged Follicular Phase (28d)"></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '32%' }} title="Luteal Phase (13d)"></div>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#44474c]">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">flag</span>
                  <span>Patient tag: Marked luteal exhaustion, cutaneous breakout flare noted</span>
                </div>
              </div>

              {/* Cycle 4 */}
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <span className="font-bold">Cycle 4 (Jan 2025) • Day 38 Duration</span>
                  <span className="text-[#44474c]">Screened: Follicular Day 8</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '63%' }} title="Follicular Phase (24d)"></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '37%' }} title="Luteal Phase (14d)"></div>
                </div>
              </div>

              {/* Cycle 5 */}
              <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <span className="font-bold">Cycle 5 (Feb 2025) • Day 39 Duration</span>
                  <span className="text-[#44474c]">Screened: Luteal Day 31</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '64%' }} title="Follicular Phase (25d)"></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '36%' }} title="Luteal Phase (14d)"></div>
                </div>
              </div>

              {/* Cycle 6 (Current) */}
              <div className="p-3.5 rounded-xl bg-[#e5eeff] border border-[#b3d1fd]">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">Cycle 6 (Mar 2025) • Day 40 Duration</span>
                    <span className="px-2 py-0.5 rounded bg-[#0e1c2f] text-white text-[10px] font-bold uppercase">
                      Current Window
                    </span>
                  </div>
                  <span className="font-bold text-[#0b1c30]">Screened: Follicular Day 14</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#d3e4fe] flex overflow-hidden">
                  <div className="bg-[#426086] h-full" style={{ width: '65%' }}></div>
                  <div className="bg-[#0c9488] h-full" style={{ width: '35%' }}></div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-[#44474c]">
                  <span className="flex items-center gap-1 text-[#426086] font-semibold">
                    <span className="material-symbols-outlined text-[14px]">biotech</span>
                    Optical sensor ratio: Elevated LH:FSH response profile (~2.3:1)
                  </span>
                  <span className="font-bold text-[#0b1c30]">6-mo Cycle Median: 38.2 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart 3: Longitudinal Screening Risk Heatmap */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#426086]"></span>
                  <h2 className="text-lg font-bold text-[#0b1c30]">Longitudinal Screening Risk Heatmap</h2>
                </div>
                <p className="text-xs text-[#44474c]">Trajectory classification across 4 core metabolic & endocrine channels</p>
              </div>
              <span className="text-xs text-[#44474c]">Baseline normalized</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="text-[#44474c] uppercase font-bold text-[10px]">
                    <th className="py-2.5 pr-4">Screening Category</th>
                    <th className="py-2.5 px-3 text-center">Oct ’24</th>
                    <th className="py-2.5 px-3 text-center">Nov ’24</th>
                    <th className="py-2.5 px-3 text-center">Dec ’24</th>
                    <th className="py-2.5 px-3 text-center">Jan ’25</th>
                    <th className="py-2.5 px-3 text-center">Feb ’25</th>
                    <th className="py-2.5 px-3 text-center font-bold text-[#0b1c30]">Mar ’25</th>
                    <th className="py-2.5 pl-4 text-right">Trend Vector</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eff4ff]">
                  <tr className="bg-[#eff4ff]/60">
                    <td className="py-3 pr-4 font-bold text-[#0b1c30] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#426086]">egg</span>
                      <span>PCOS Risk Index</span>
                    </td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#3b5a7f] text-[10px] font-bold">Low (18%)</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#3b5a7f] text-[10px] font-bold">Low (24%)</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#d3e4ff] text-[#001c38] text-[10px] font-bold">Mod (44%)</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#d3e4ff] text-[#001c38] text-[10px] font-bold">Mod (49%)</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#d3e4ff] text-[#001c38] text-[10px] font-bold">Mod (52%)</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#0e1c2f] text-white text-[10px] font-bold">Mod (56%)</span></td>
                    <td className="py-3 pl-4 text-right text-[#426086] font-bold">↗ +38% Shift</td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-medium text-[#0b1c30] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#0c9488]">water_drop</span>
                      <span>Glycemic Regulation</span>
                    </td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Optimal</span></td>
                    <td className="py-3 pl-4 text-right text-[#0c9488] font-bold">→ Stable</td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-medium text-[#0b1c30] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#426086]">cardiology</span>
                      <span>Anemia / Hematology</span>
                    </td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 px-3 text-center"><span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0c9488] text-[10px] font-bold">Low Risk</span></td>
                    <td className="py-3 pl-4 text-right text-[#0c9488] font-bold">→ Stable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hardware ESP32 Telemetry & Integrity Log */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#0c9488]">memory</span>
                <h2 className="text-base font-bold text-[#0b1c30]">ESP32 Hardware Cartridge Integrity Log</h2>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded bg-[#eff4ff] text-[#0c9488] font-bold">
                Calibration Drift: &lt;0.8% (Target &lt;1.5%)
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[#44474c] text-[10px] uppercase font-bold">Session #6 (Latest)</span>
                <span className="font-bold text-[#0b1c30] font-mono mt-0.5">SN: CRT-941-S3</span>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#dce9ff]">
                  <span className="text-[#44474c] text-[11px]">Drift: 0.18%</span>
                  <span className="text-[#0c9488] font-bold text-[11px]">Enzyme: OK</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[#44474c] text-[10px] uppercase font-bold">Session #5</span>
                <span className="font-bold text-[#0b1c30] font-mono mt-0.5">SN: CRT-882-S3</span>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#dce9ff]">
                  <span className="text-[#44474c] text-[11px]">Drift: 0.22%</span>
                  <span className="text-[#0c9488] font-bold text-[11px]">Enzyme: OK</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col border border-[#dce9ff]/60">
                <span className="text-[#44474c] text-[10px] uppercase font-bold">Session #4</span>
                <span className="font-bold text-[#0b1c30] font-mono mt-0.5">SN: CRT-710-S3</span>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#dce9ff]">
                  <span className="text-[#44474c] text-[11px]">Drift: 0.31%</span>
                  <span className="text-[#0c9488] font-bold text-[11px]">Enzyme: OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Clinician Discussion Agenda & Checklist */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          {/* Executive Summary for Healthcare Provider */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">clinical_notes</span>
                <h2 className="text-base font-bold text-[#0b1c30]">Executive Summary for Clinician</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-[#d3e4fe] text-[#001c38] text-[11px] font-bold">
                Physician Brief
              </span>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-[#eff4ff] flex flex-col gap-2 border border-[#dce9ff]">
              <span className="text-[10px] text-[#44474c] uppercase tracking-wider font-bold">Algorithm Screening Risk Stratification</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#d3e4ff] text-[#001c38] text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#426086]"></span>
                  Moderate PCOS Risk (56%)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[#0c9488] text-xs font-bold border border-[#e5eeff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                  Low Metabolic Risk
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[#0c9488] text-xs font-bold border border-[#e5eeff]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
                  Low Anemia Risk
                </span>
              </div>
            </div>

            {/* Objective Findings */}
            <div className="mt-4">
              <h3 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">fact_check</span>
                Objective Screening Findings
              </h3>
              <ul className="space-y-2 text-xs text-[#44474c] pl-1 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] mt-1.5 shrink-0"></span>
                  <span><strong>Metabolic & Hematology:</strong> Stable euglycemic control across 6 screening points (mean 91.3 mg/dL). Hemoglobin steady at 13.2 g/dL without microcytic indications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#426086] mt-1.5 shrink-0"></span>
                  <span><strong>Chronobiological Cycle Length:</strong> Persistent follicular phase prolongation observed over consecutive months (cycle length shifting from 29d → 40d; 6-month mean: 38.2d).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#426086] mt-1.5 shrink-0"></span>
                  <span><strong>Sensor LH/FSH Biosignature:</strong> Biosensor optical impedance indicates elevated follicular phase LH to FSH signal ratio (~2.3), congruent with delayed dominant follicle maturation.</span>
                </li>
              </ul>
            </div>

            {/* Patient Reported Symptoms */}
            <div className="mt-4 pt-4 bg-[#eff4ff]/60 -mx-6 px-6 pb-4 rounded-xl border-t border-[#e5eeff]">
              <h3 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">record_voice_over</span>
                Patient Reported Symptoms (Log Sync)
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-[#e5eeff]">
                  <span className="text-[10px] text-[#44474c] font-bold">Symptom 1</span>
                  <p className="font-bold text-[#0b1c30]">Intermittent Fatigue</p>
                  <span className="text-[10px] text-[#426086]">Clustered in late luteal</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-[#e5eeff]">
                  <span className="text-[10px] text-[#44474c] font-bold">Symptom 2</span>
                  <p className="font-bold text-[#0b1c30]">Mild Hirsutism</p>
                  <span className="text-[10px] text-[#426086]">Ferriman-Gallwey: 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Differential Diagnostic Inquiries */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center gap-2 pb-2">
              <span className="material-symbols-outlined text-[20px] text-[#426086]">help_center</span>
              <h2 className="text-base font-bold text-[#0b1c30]">Differential Diagnostic Inquiries</h2>
            </div>
            <p className="text-xs text-[#44474c] mb-3">Suggested physician review steps tailored to the patient’s longitudinal biomarker pattern:</p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-5 h-5 rounded-full bg-[#d3e4fe] text-[#001c38] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Rotterdam 2003 / 2023 Criteria Evaluation</h4>
                  <p className="text-xs text-[#44474c] mt-0.5 leading-relaxed">
                    Determine if oligo/anovulation and clinical signs of hyperandrogenism meet consensus diagnostic threshold.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-5 h-5 rounded-full bg-[#d3e4fe] text-[#001c38] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Serum Endocrine Workup Recommendation</h4>
                  <p className="text-xs text-[#44474c] mt-0.5 leading-relaxed">
                    Evaluate Serum Total & Free Testosterone by LC-MS/MS, DHEAS, and 17-OHP to rule out non-classical congenital adrenal hyperplasia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
                <div className="w-5 h-5 rounded-full bg-[#d3e4fe] text-[#001c38] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">High-Resolution Pelvic Ultrasound</h4>
                  <p className="text-xs text-[#44474c] mt-0.5 leading-relaxed">
                    Transvaginal sonography for ovarian morphology assessment (follicle count per ovary ≥20 and/or ovarian volume ≥10 ml).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Checklist & Editable Notes */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">checklist</span>
                <h2 className="text-base font-bold text-[#0b1c30]">Patient Consultation Checklist</h2>
              </div>
              <span className="text-[11px] text-[#44474c]">Appointment Prep</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#eff4ff] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.item1}
                  onChange={(e) => setChecklist({ ...checklist, item1: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#426086] focus:ring-0 cursor-pointer"
                />
                <span className="text-[#0b1c30]">Bring 6-month cycle logs and symptom severity timeline printout</span>
              </label>

              <label className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#eff4ff] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.item2}
                  onChange={(e) => setChecklist({ ...checklist, item2: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#426086] focus:ring-0 cursor-pointer"
                />
                <span className="text-[#0b1c30]">Discuss Day 3 laboratory requisitions (FSH, LH, Estradiol, AMH)</span>
              </label>

              <label className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#eff4ff] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.item3}
                  onChange={(e) => setChecklist({ ...checklist, item3: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#426086] focus:ring-0 cursor-pointer"
                />
                <span className="text-[#0b1c30]">Discuss ultrasound referral and preferred imaging center</span>
              </label>

              <label className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#eff4ff] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.item4}
                  onChange={(e) => setChecklist({ ...checklist, item4: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#426086] focus:ring-0 cursor-pointer"
                />
                <span className="text-[#0b1c30]">Review nutritional and inositol supplementation suitability</span>
              </label>
            </div>

            {/* Editable Notes */}
            <div className="mt-4 pt-3 border-t border-[#e5eeff]">
              <label className="block text-xs font-bold text-[#0b1c30] mb-1.5" htmlFor="doctorNote">
                Personal Consultation Notes (Included in Doctor Link):
              </label>
              <textarea
                id="doctorNote"
                value={doctorNote}
                onChange={(e) => setDoctorNote(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-[#eff4ff] text-[#0b1c30] text-xs focus:outline-none focus:ring-2 focus:ring-[#426086] border border-[#dce9ff]"
                placeholder="Add specific questions or observations for Dr. Mercer here..."
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-[11px] text-[#0c9488] font-bold">
                  {noteSaved ? '✓ Note saved to patient record' : ''}
                </span>
                <button
                  onClick={handleSaveNote}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0e1c2f] text-white text-xs font-bold hover:bg-[#213145] transition-colors"
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>

          {/* Verified Signature Block */}
          <div className="rounded-2xl bg-[#eff4ff] p-4 border border-[#dce9ff] flex flex-col gap-2">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#426086] shrink-0 mt-0.5">policy</span>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">Clinical Boundary & Device Disclaimer</h4>
                <p className="text-[11px] text-[#44474c] mt-0.5 leading-relaxed">
                  HERSCAN AI point-of-care reader is an adjunctive early-screening device. Decisions regarding therapy, prescription, or clinical diagnosis remain under the sole judgment of the licensed healthcare provider.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-[#dce9ff] flex items-center justify-between text-[11px] text-[#44474c]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span>
                <span className="font-mono">FHIR-SHA256: 7f8a...c391</span>
              </div>
              <span className="text-[#426086] font-bold">Ready for E-Sign</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
