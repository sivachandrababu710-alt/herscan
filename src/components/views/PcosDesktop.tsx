import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface PcosDesktopProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenScopeModal: () => void;
}

export const PcosDesktop: React.FC<PcosDesktopProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenScopeModal,
}) => {
  const [compilingPacket, setCompilingPacket] = useState(false);
  const [packetReady, setPacketReady] = useState(false);

  const handleGeneratePacket = () => {
    setCompilingPacket(true);
    setTimeout(() => {
      setCompilingPacket(false);
      setPacketReady(true);
      setTimeout(() => {
        onOpenPdfReport();
        setPacketReady(false);
      }, 1000);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Regulatory Header & Protocol Context */}
      <section className="relative mb-6 overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eff4ff] text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">biotech</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#426086]">
                Diagnostic Analytics Engine • Protocol RE-409
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#d3e4ff]/60 px-3.5 py-1 text-[#001c38]">
              <span className="material-symbols-outlined text-[16px] text-[#0c9488]">verified_user</span>
              <span className="text-xs font-bold">Screening & Risk Assessment Only • Not a Clinical PCOS Diagnosis</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 pt-1">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#0b1c30] tracking-tight">
                AI-Assisted PCOS Risk Screening Intelligence
              </h1>
              <p className="text-sm text-[#44474c] max-w-4xl pt-1">
                Multimodal computational risk modeling synthesizing non-invasive electrochemical biomarker streams, cycle cadence phenomenology, and metabolic proxy indicators.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-[#44474c]">Last Calibration: Today, 08:42 UTC</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-[#0c9488] animate-pulse"></span>
            </div>
          </div>

          {/* Advisory Callout */}
          <div className="mt-2 rounded-xl bg-[#eff4ff] p-4 border border-[#dce9ff]">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#426086] text-white">
                <span className="material-symbols-outlined text-[17px]">info</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0b1c30]">Rotterdam Diagnostic Criteria Separation Notice</span>
                <p className="text-xs text-[#44474c] mt-0.5 leading-relaxed">
                  HERSCAN AI utilizes multimodal risk estimation by combining electrochemical biomarker arrays with reported phenotypic history. A formal PCOS diagnosis requires comprehensive physician evaluation under Rotterdam Criteria (including ultrasound imaging and laboratory-certified serum hormone assays).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Column Analysis Grid */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Left Main Section (col-span-12 xl:col-span-7) */}
        <div className="col-span-12 xl:col-span-7 flex flex-col gap-6">
          {/* Composite Risk Stratification Gauge Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Multimodal Computation</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#44474c] text-[10px] font-bold">Model v2025.2</span>
                </div>
                <h2 className="text-xl font-bold text-[#0b1c30] mt-1">Composite Risk Stratification Gauge</h2>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-[#eff4ff] px-3 py-1.5 self-start sm:self-auto border border-[#dce9ff]/60">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">history</span>
                <span className="text-xs font-semibold text-[#44474c]">Prior: 34% (90d ago)</span>
              </div>
            </div>

            {/* Gauge Visualization Container */}
            <div className="my-3 rounded-xl bg-[#eff4ff]/70 p-6 border border-[#dce9ff]/60">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Semi-Circle Arch Gauge SVG */}
                <div className="relative flex flex-col items-center justify-center shrink-0">
                  <svg aria-hidden="true" className="w-56 h-32 overflow-visible" viewBox="0 0 200 115">
                    {/* Background Arc */}
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#DCE9FF" strokeLinecap="round" strokeWidth="14" />
                    {/* Low Risk Segment (0% - 30%) */}
                    <path d="M 20 100 A 80 80 0 0 1 54 44" fill="none" opacity="0.85" stroke="#0D9488" strokeLinecap="round" strokeWidth="14" />
                    {/* Moderate Risk Segment (30% - 70%) */}
                    <path d="M 58 40 A 80 80 0 0 1 142 40" fill="none" opacity="0.9" stroke="#D97706" strokeDasharray="1 1" strokeWidth="14" />
                    {/* Higher Risk Segment (70% - 100%) */}
                    <path d="M 146 44 A 80 80 0 0 1 180 100" fill="none" opacity="0.25" stroke="#BA1A1A" strokeLinecap="round" strokeWidth="14" />
                    {/* Needle Indicator Pointer at 38% */}
                    <g transform="translate(100, 100) rotate(-31.6)">
                      <circle cx="0" cy="0" fill="#0B1C30" r="7" />
                      <line stroke="#0B1C30" strokeLinecap="round" strokeWidth="3" x1="0" x2="-62" y1="0" y2="0" />
                      <circle cx="-62" cy="0" fill="#D97706" r="3" />
                    </g>
                  </svg>
                  {/* Central Readout */}
                  <div className="mt-2 text-center">
                    <span className="text-4xl font-bold text-[#0b1c30] leading-none tracking-tight">38%</span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#426086] mt-1">Calculated Probability</p>
                  </div>
                </div>

                {/* Indicator Stratification Details */}
                <div className="flex-1 flex flex-col gap-3 w-full">
                  <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#D97706]"></span>
                        <span className="text-xs font-bold text-[#0b1c30]">Moderate Risk Screening Indicator</span>
                      </div>
                      <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-[#D97706]">REVIEW RANGE</span>
                    </div>
                    <p className="text-xs text-[#44474c] leading-relaxed">
                      Current score falls within the moderate observational bracket. Phenotypic cycle divergence accounts for the primary weighting elevation.
                    </p>
                  </div>

                  {/* Risk Zones Legend Matrix */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-[#e5eeff] px-2 py-1.5 opacity-80">
                      <span className="block text-[10px] text-[#44474c] uppercase font-bold">Low Risk</span>
                      <span className="text-xs font-semibold text-[#0b1c30]">0% – 29%</span>
                    </div>
                    <div className="rounded-lg bg-[#d3e4ff] px-2 py-1.5 ring-1 ring-inset ring-[#426086]">
                      <span className="block text-[10px] text-[#426086] font-bold uppercase">Active: Mod</span>
                      <span className="text-xs font-bold text-[#0b1c30]">30% – 69%</span>
                    </div>
                    <div className="rounded-lg bg-[#e5eeff] px-2 py-1.5 opacity-80">
                      <span className="block text-[10px] text-[#44474c] uppercase font-bold">Higher Risk</span>
                      <span className="text-xs font-semibold text-[#0b1c30]">70% – 100%</span>
                    </div>
                  </div>

                  {/* Temporal Delta Badge */}
                  <div className="flex items-center justify-between text-xs text-[#44474c] px-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#426086]">trending_up</span>
                      Trajectory Delta:
                    </span>
                    <span className="text-xs text-[#D97706] font-bold">+4% over past 90 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#44474c] px-1 pt-1 border-t border-[#e5eeff]">
              <span>Sensor Source: ESP32-S3 Multimodal Optical Sensor</span>
              <span>Confidence Index: 91.4% (Sensor SNR 42dB)</span>
            </div>
          </div>

          {/* Contributing Biomarkers & Clinical Factors Matrix Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Multivariate Decomposition</span>
                <h2 className="text-xl font-bold text-[#0b1c30] mt-0.5">Contributing Biomarkers & Clinical Factors</h2>
              </div>
              <span className="text-xs text-[#44474c] bg-[#eff4ff] px-3 py-1 rounded-full font-semibold border border-[#dce9ff]/60">
                5 Variables Stratified
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Factor 1: Endocrine Ratio */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff]/50 transition-colors gap-3 border border-[#dce9ff]/60">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">water_ec</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0b1c30]">Endocrine Ratio (LH/FSH Signal Shift)</span>
                      <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-[#D97706]">Moderate Weight</span>
                    </div>
                    <p className="text-xs text-[#44474c] mt-0.5">
                      Electrochemical sensor reads consistent mid-follicular signal variance suggestive of elevated LH pulse frequency.
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 sm:pl-4">
                  <span className="text-sm font-bold text-[#0b1c30]">Ratio ~2.1:1</span>
                  <span className="block text-[11px] text-[#44474c]">Baseline &lt; 1.5:1</span>
                </div>
              </div>

              {/* Factor 2: Oligomenorrhea */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff]/50 transition-colors gap-3 border border-[#dce9ff]/60">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0b1c30]">Oligomenorrhea / Cycle Irregularity</span>
                      <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-[#D97706]">Moderate-High Weight</span>
                    </div>
                    <p className="text-xs text-[#44474c] mt-0.5">
                      Logged menstrual interval exceeds physiological median. 3 cycles recorded between 36 and 43 days in the past 6 months.
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 sm:pl-4">
                  <span className="text-sm font-bold text-[#0b1c30]">Avg 39 Days</span>
                  <span className="block text-[11px] text-[#44474c]">Optimal 26–32d</span>
                </div>
              </div>

              {/* Factor 3: Fasting Glucose Proxy */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff]/50 transition-colors gap-3 border border-[#dce9ff]/60">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#0c9488]/10 text-[#0c9488] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">vital_signs</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0b1c30]">Fasting Glucose & Insulin Sensitivity Proxy</span>
                      <span className="rounded bg-[#0c9488]/15 px-2 py-0.5 text-[10px] font-bold text-[#0c9488]">Normal / Protective</span>
                    </div>
                    <p className="text-xs text-[#44474c] mt-0.5">
                      Biochemical micro-impedance proxy indicates balanced morning metabolic clearance without acute resistance signals.
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 sm:pl-4">
                  <span className="text-sm font-bold text-[#0b1c30]">92 mg/dL</span>
                  <span className="block text-[11px] text-[#0c9488] font-semibold">Euglycemic Zone</span>
                </div>
              </div>

              {/* Factor 4: Reported Hyperandrogenism Symptoms */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff]/50 transition-colors gap-3 border border-[#dce9ff]/60">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">dermatology</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0b1c30]">Reported Hyperandrogenism Symptoms</span>
                      <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-[#D97706]">Low-Moderate Weight</span>
                    </div>
                    <p className="text-xs text-[#44474c] mt-0.5">
                      Self-reported persistent perioral acne flares and mild terminal hair hirsutism score (Ferriman-Gallwey proxy = 5).
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 sm:pl-4">
                  <span className="text-sm font-bold text-[#0b1c30]">Score: 5 / 36</span>
                  <span className="block text-[11px] text-[#44474c]">Borderline Cutoff</span>
                </div>
              </div>

              {/* Factor 5: BMI & Body Composition */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff]/50 transition-colors gap-3 border border-[#dce9ff]/60">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#0c9488]/10 text-[#0c9488] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">monitor_weight</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0b1c30]">BMI & Body Composition</span>
                      <span className="rounded bg-[#0c9488]/15 px-2 py-0.5 text-[10px] font-bold text-[#0c9488]">Normal / Protective</span>
                    </div>
                    <p className="text-xs text-[#44474c] mt-0.5">
                      Body composition metrics do not demonstrate adiposity phenotypes often comorbid with metabolic ovarian disruptions.
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0 sm:pl-4">
                  <span className="text-sm font-bold text-[#0b1c30]">22.8 kg/m²</span>
                  <span className="block text-[11px] text-[#0c9488] font-semibold">Normative Reference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Risk Trajectory Chart Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Temporal Analytics</span>
                <h2 className="text-xl font-bold text-[#0b1c30] mt-0.5">6-Month Historical Risk Trajectory</h2>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0B1C30]"></span>
                  <span className="text-[#44474c]">PCOS Risk Index (%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B3D1FD]"></span>
                  <span className="text-[#44474c]">Cycle Length (Days)</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#eff4ff] p-4 border border-[#dce9ff]/60">
              <div className="w-full overflow-x-auto">
                <svg aria-label="6-Month Risk & Cycle Duration Trend Graph" className="w-full min-w-[500px] h-48" viewBox="0 0 540 180">
                  {/* Grid lines */}
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="40" x2="520" y1="30" y2="30" />
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="40" x2="520" y1="75" y2="75" />
                  <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="40" x2="520" y1="120" y2="120" />
                  <line stroke="#94A3B8" strokeWidth="1" x1="40" x2="520" y1="150" y2="150" />
                  
                  {/* Y-axis labels */}
                  <text fill="#64748B" fontSize="10" textAnchor="end" x="32" y="34">50% / 45d</text>
                  <text fill="#64748B" fontSize="10" textAnchor="end" x="32" y="79">35% / 35d</text>
                  <text fill="#64748B" fontSize="10" textAnchor="end" x="32" y="124">20% / 28d</text>

                  {/* X-axis labels */}
                  <text fill="#44474C" fontSize="11" textAnchor="middle" x="80" y="168">Sep 2024</text>
                  <text fill="#44474C" fontSize="11" textAnchor="middle" x="165" y="168">Oct 2024</text>
                  <text fill="#44474C" fontSize="11" textAnchor="middle" x="250" y="168">Nov 2024</text>
                  <text fill="#44474C" fontSize="11" textAnchor="middle" x="335" y="168">Dec 2024</text>
                  <text fill="#44474C" fontSize="11" textAnchor="middle" x="420" y="168">Jan 2025</text>
                  <text fill="#0B1C30" fontSize="11" fontWeight="700" textAnchor="middle" x="500" y="168">Feb 2025</text>

                  {/* Cycle Area Shading */}
                  <path d="M 80 150 L 80 110 L 165 105 L 250 92 L 335 88 L 420 80 L 500 70 L 500 150 Z" fill="#B3D1FD" opacity="0.45" />
                  <polyline fill="none" points="80,110 165,105 250,92 335,88 420,80 500,70" stroke="#426086" strokeLinecap="round" strokeWidth="2" />

                  {/* Risk Index Line */}
                  <path d="M 80 125 Q 120 120 165 118 T 250 100 T 335 96 T 420 88 T 500 76" fill="none" stroke="#0B1C30" strokeLinecap="round" strokeWidth="3" />

                  {/* Points */}
                  <circle cx="80" cy="125" fill="#0B1C30" r="4" />
                  <circle cx="165" cy="118" fill="#0B1C30" r="4" />
                  <circle cx="250" cy="100" fill="#0B1C30" r="4" />
                  <circle cx="335" cy="96" fill="#0B1C30" r="4" />
                  <circle cx="420" cy="88" fill="#0B1C30" r="4" />

                  {/* Current Active Point */}
                  <circle cx="500" cy="76" fill="#D97706" r="6" />
                  <circle cx="500" cy="76" fill="#FFFFFF" r="2.5" />

                  {/* 38% Badge */}
                  <g transform="translate(485, 42)">
                    <rect fill="#0B1C30" height="18" rx="4" width="36" />
                    <text fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle" x="18" y="13">38%</text>
                  </g>
                </svg>
              </div>

              <div className="mt-4 pt-3 border-t border-[#dce9ff] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#44474c] gap-2">
                <span>
                  <strong className="text-[#0b1c30]">Analytical Correlation:</strong> Cycle prolongation from 31d to 39d directly tracks the +8% risk migration observed between Oct 2024 and Feb 2025.
                </span>
                <button
                  onClick={() => onRouteChange('longitudinal-trends')}
                  className="font-bold text-[#426086] hover:text-[#0b1c30] flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Detailed Log</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (col-span-12 xl:col-span-5) */}
        <div className="col-span-12 xl:col-span-5 flex flex-col gap-6">
          {/* Scientific Clarification Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff4ff] text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">psychology_alt</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Physiological Translation</span>
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30]">What These Screening Results Mean</h3>

            <div className="mt-3 space-y-3 text-xs text-[#44474c] leading-relaxed">
              <p>
                Your current screening assessment indicates a <strong className="font-bold text-[#0b1c30]">Moderate Risk (38%)</strong> profile. This is not an indication that you have polycystic ovary syndrome, but that your biometrics exhibit mild hormonal variability typical of cycle phase shifts.
              </p>
              <div className="rounded-xl bg-[#eff4ff] p-3.5 border border-[#dce9ff]">
                <p className="text-xs text-[#0b1c30]">
                  <strong>Endocrine Rhythm Notice:</strong> The luteinizing hormone signals captured by the ESP32 electrochemical sensor array appear elevated relative to typical early-cycle ranges, which can delay ovulation and extend cycle length without necessarily causing polycystic ovarian alterations.
                </p>
              </div>
              <p>
                Metabolic markers (including fasting proxy and body composition) remain thoroughly protective, demonstrating that insulin-driven androgen pathways are unlikely to be the primary factor.
              </p>
            </div>
          </div>

          {/* Suggested Action Plan Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0c9488]/10 text-[#0c9488]">
                <span className="material-symbols-outlined text-[18px]">checklist</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Patient Protocol</span>
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30]">Suggested Action Plan for You</h3>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-start gap-3 rounded-xl bg-[#eff4ff] p-3.5 border border-[#dce9ff]/60">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white text-[#426086] shadow-sm">
                  <span className="material-symbols-outlined text-[17px]">restaurant</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0b1c30]">Lifestyle & Nutrition Calibration</span>
                  <p className="text-xs text-[#44474c] mt-1">
                    Maintain consistent low-glycemic meal structures to support metabolic stability. Consider discussing a 40:1 ratio Myo-Inositol & D-Chiro-Inositol dietary routine with your clinical nutritionist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-[#eff4ff] p-3.5 border border-[#dce9ff]/60">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white text-[#426086] shadow-sm">
                  <span className="material-symbols-outlined text-[17px]">device_thermostat</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0b1c30]">Ovulation & Basal Thermal Logging</span>
                  <p className="text-xs text-[#44474c] mt-1">
                    Log home LH test strip results alongside morning basal body temperature for the next 2 complete menstrual cycles to establish ovulatory confirmation prior to clinical consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Consultation Readiness Guide & Doctor Prep Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#426086] text-white">
                  <span className="material-symbols-outlined text-[18px]">stethoscope</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Clinical Readiness</span>
              </div>
              <span className="text-xs text-[#44474c] font-semibold">Rotterdam Pathway</span>
            </div>
            <h3 className="text-lg font-bold text-[#0b1c30]">Clinical Consultation Readiness Guide</h3>
            <p className="text-xs text-[#44474c] mt-1">
              Bring these precise inquiries to your OB/GYN or Reproductive Endocrinologist to accelerate differential diagnosis:
            </p>

            <div className="mt-4 flex flex-col gap-2.5">
              <div className="rounded-xl bg-[#eff4ff] p-3 border border-[#dce9ff]">
                <div className="flex items-start gap-2.5">
                  <span className="text-xs text-[#426086] font-bold shrink-0 mt-0.5">Q1</span>
                  <p className="text-xs text-[#0b1c30] font-medium italic">
                    “Can we perform a transvaginal or pelvic ultrasound to evaluate ovarian follicle count and stroma morphology according to Rotterdam Criteria?”
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#eff4ff] p-3 border border-[#dce9ff]">
                <div className="flex items-start gap-2.5">
                  <span className="text-xs text-[#426086] font-bold shrink-0 mt-0.5">Q2</span>
                  <p className="text-xs text-[#0b1c30] font-medium italic">
                    “Would a comprehensive serum fasting lipid, SHBG, and free/total testosterone panel be warranted to establish baseline androgen status?”
                  </p>
                </div>
              </div>
            </div>

            {/* Handoff Action CTAs */}
            <div className="mt-5 flex flex-col gap-2.5">
              <button
                onClick={handleGeneratePacket}
                disabled={compilingPacket}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0e1c2f] text-white text-xs font-bold shadow-md hover:bg-[#213145] transition-all cursor-pointer disabled:opacity-75"
                type="button"
              >
                {compilingPacket ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>Compiling Rotterdam Dataset...</span>
                  </>
                ) : packetReady ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] text-[#0c9488]">check_circle</span>
                    <span>Packet Ready (Opening PDF)...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px] text-[#89f5e7]">picture_as_pdf</span>
                    <span>Generate Clinician Handoff Packet (Rotterdam PDF)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onRouteChange('clinician-handoff')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold transition-colors cursor-pointer border border-[#dce9ff]"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-[#426086]">person_search</span>
                <span>Find Accredited Reproductive Endocrinologist</span>
              </button>
            </div>

            <div className="mt-3 text-center">
              <span className="text-[11px] text-[#44474c] flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-[#0c9488]">lock</span>
                Encrypted FHIR / HL7 compliant bundle exportable with cryptographic checksum
              </span>
            </div>
          </div>

          {/* Scientific Reference Snippet */}
          <div className="rounded-xl bg-[#eff4ff]/60 p-4 text-[#44474c] border border-[#dce9ff]">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[15px] text-[#426086]">menu_book</span>
              <span className="text-xs font-bold text-[#0b1c30]">Diagnostic Benchmark Reference</span>
            </div>
            <p className="text-[11px] leading-snug">
              Rotterdam ESHRE/ASRM-Sponsored Consensus: Diagnosis requires at least 2 of 3 features: oligo- or anovulation, clinical/biochemical hyperandrogenism, or polycystic ovaries on ultrasound examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
