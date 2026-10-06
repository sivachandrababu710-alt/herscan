import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface PcosMobileProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenScopeModal: () => void;
}

export const PcosMobile: React.FC<PcosMobileProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenScopeModal,
}) => {
  const [selectedFactor, setSelectedFactor] = useState<number | null>(null);
  const [generating, setGenerating] = useState(false);

  const handleGeneratePdf = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      onOpenPdfReport();
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full space-y-3.5">
      {/* Introductory Framing Card */}
      <div className="rounded-xl bg-white p-4 shadow-sm border border-[#e5eeff]">
        <div className="flex items-center gap-1.5 text-[#0c9488] mb-1">
          <span className="material-symbols-outlined text-[18px]">psychology_alt</span>
          <span className="text-[11px] font-bold uppercase tracking-wider">Multimodal Risk Assessment</span>
        </div>
        <h2 className="text-xl font-bold text-[#0b1c30] tracking-tight">PCOS Early-Risk Screening</h2>
        <p className="text-xs text-[#44474c] mt-1 leading-relaxed">
          Multimodal algorithmic model synthesizing biosensor signals, cycle irregularity, and metabolic proxies. Screening only — <strong className="text-[#0b1c30]">NOT a medical diagnosis.</strong>
        </p>
        <div className="mt-3 flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#eff4ff] text-[#44474c] text-xs">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#0c9488]">tune</span>
            <span className="font-semibold">Model v4.8 • Confidence Score 89%</span>
          </div>
          <span className="text-[11px] font-medium text-[#426086]">Updated 3h ago</span>
        </div>
      </div>

      {/* Primary Risk Stratification Gauge & Trajectory */}
      <div className="rounded-xl bg-white p-4 shadow-sm border border-[#e5eeff] flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c]">Calculated Probability</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d3e4ff] text-[#001c38] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#426086]"></span>
            MODERATE RISK
          </span>
        </div>

        {/* Circular Probability Gauge */}
        <div className="relative w-48 h-48 my-2 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
            <circle className="text-[#eff4ff]" cx="80" cy="80" fill="none" r="66" stroke="currentColor" strokeWidth="12" />
            <circle className="text-[#0c9488]/30" cx="80" cy="80" fill="none" r="66" stroke="currentColor" strokeDasharray="124 290" strokeDashoffset="0" strokeWidth="12" />
            {/* Active stroke 38% */}
            <circle className="text-[#426086]" cx="80" cy="80" fill="none" r="66" stroke="currentColor" strokeDasharray="157 415" strokeLinecap="round" strokeWidth="12" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-[#0b1c30] tracking-tight">38<span className="text-2xl font-semibold">%</span></span>
            <span className="text-[10px] font-bold text-[#44474c] uppercase tracking-wider -mt-1">Prob. Index</span>
            <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#eff4ff] text-[#0b1c30] text-[11px] font-bold">
              <span>Range: 30–69%</span>
            </div>
          </div>
        </div>

        {/* Gauge Legend Tiers */}
        <div className="grid grid-cols-3 w-full gap-2 text-center mt-2 px-1">
          <div className="py-1.5 rounded-lg bg-[#eff4ff]">
            <p className="text-[10px] text-[#44474c] font-semibold">0–29%</p>
            <p className="text-xs text-[#0c9488] font-bold">Low</p>
          </div>
          <div className="py-1.5 rounded-lg bg-[#d3e4ff] border border-[#426086]">
            <p className="text-[10px] text-[#001c38] font-semibold">30–69%</p>
            <p className="text-xs text-[#001c38] font-bold">Moderate</p>
          </div>
          <div className="py-1.5 rounded-lg bg-[#eff4ff]">
            <p className="text-[10px] text-[#44474c] font-semibold">70–100%</p>
            <p className="text-xs text-[#ba1a1a] font-bold">Elevated</p>
          </div>
        </div>

        {/* 90-day Trajectory Metric */}
        <div className="w-full mt-3 flex items-center justify-between bg-[#eff4ff] rounded-xl p-2.5 border border-[#dce9ff]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#d3e4ff] flex items-center justify-center text-[#426086]">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#0b1c30]">90-Day Trajectory</p>
              <p className="text-[10px] text-[#44474c]">Last 3 cycle observations</p>
            </div>
          </div>
          <span className="font-bold text-xs text-[#426086] bg-white px-2 py-1 rounded shadow-sm border border-[#e5eeff]">
            +4% shift
          </span>
        </div>
      </div>

      {/* Contributing Risk Factors */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-[#0b1c30]">Contributing Risk Factors</h3>
          <span className="text-[11px] text-[#44474c]">5 Proxies Evaluated</span>
        </div>
        <p className="text-[11px] text-[#44474c] px-1 -mt-1">
          Tap any factor to inspect physiological weights and clinical thresholds.
        </p>

        {/* Factor 1: Endocrine Ratio */}
        <div
          onClick={() => setSelectedFactor(selectedFactor === 1 ? null : 1)}
          className={`rounded-xl p-3.5 shadow-sm border transition-all cursor-pointer ${
            selectedFactor === 1 ? 'bg-[#eff4ff] border-[#426086]' : 'bg-white border-[#e5eeff]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d3e4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">biotech</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">Endocrine Ratio (LH/FSH Signal)</h4>
                <p className="text-[11px] text-[#44474c]">Elevated follicular surge trend</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d3e4ff] text-[#001c38]">
              Moderate Wt
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between bg-[#eff4ff] p-2 rounded-lg">
            <span className="text-xs text-[#0b1c30] font-semibold">Observed LH:FSH</span>
            <span className="text-sm font-bold text-[#0b1c30]">~2.1:1</span>
          </div>
          <p className="mt-2 text-[11px] text-[#44474c] leading-relaxed">
            LH predominance exceeds physiological median (typical 1:1), presenting moderate signal weight toward ovulatory disruption.
          </p>
        </div>

        {/* Factor 2: Cycle Regularity */}
        <div
          onClick={() => setSelectedFactor(selectedFactor === 2 ? null : 2)}
          className={`rounded-xl p-3.5 shadow-sm border transition-all cursor-pointer ${
            selectedFactor === 2 ? 'bg-[#eff4ff] border-[#426086]' : 'bg-white border-[#e5eeff]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d3e4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">Cycle Regularity (Oligomenorrhea)</h4>
                <p className="text-[11px] text-[#44474c]">Intervals spanning 36–43 days</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d3e4ff] text-[#001c38]">
              Mod-High Wt
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between bg-[#eff4ff] p-2 rounded-lg">
            <span className="text-xs text-[#0b1c30] font-semibold">Mean Interval Duration</span>
            <span className="text-sm font-bold text-[#0b1c30]">Avg 39 Days</span>
          </div>
          <p className="mt-2 text-[11px] text-[#44474c] leading-relaxed">
            Screened delay of &gt;35 days per cycle aligns with secondary oligomenorrhea markers under diagnostic guidance models.
          </p>
        </div>

        {/* Factor 3: Fasting Glucose */}
        <div
          onClick={() => setSelectedFactor(selectedFactor === 3 ? null : 3)}
          className={`rounded-xl p-3.5 shadow-sm border transition-all cursor-pointer ${
            selectedFactor === 3 ? 'bg-[#eff4ff] border-[#0c9488]' : 'bg-white border-[#e5eeff]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0c9488]">
                <span className="material-symbols-outlined text-[18px]">water_drop</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">Fasting Glucose & Insulin</h4>
                <p className="text-[11px] text-[#44474c]">Optimal euglycemic range</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e5eeff] text-[#0c9488]">
              Protective
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between bg-[#eff4ff] p-2 rounded-lg">
            <span className="text-xs text-[#0b1c30] font-semibold">Fasting Plasma Glucose</span>
            <span className="text-sm font-bold text-[#0b1c30]">92 mg/dL</span>
          </div>
          <p className="mt-2 text-[11px] text-[#44474c] leading-relaxed">
            No surrogate signals of peripheral insulin resistance detected on biosensor or logged capillary panels.
          </p>
        </div>

        {/* Factor 4: Phenotypic Manifestations */}
        <div
          onClick={() => setSelectedFactor(selectedFactor === 4 ? null : 4)}
          className={`rounded-xl p-3.5 shadow-sm border transition-all cursor-pointer ${
            selectedFactor === 4 ? 'bg-[#eff4ff] border-[#426086]' : 'bg-white border-[#e5eeff]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d3e4ff] flex items-center justify-center text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">dermatology</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">Phenotypic Manifestations</h4>
                <p className="text-[11px] text-[#44474c]">Mild perioral acne, borderline hirsutism</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d3e4ff] text-[#001c38]">
              Low-Mod Wt
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between bg-[#eff4ff] p-2 rounded-lg">
            <span className="text-xs text-[#0b1c30] font-semibold">Modified FG Index</span>
            <span className="text-sm font-bold text-[#0b1c30]">Score 5/36</span>
          </div>
          <p className="mt-2 text-[11px] text-[#44474c] leading-relaxed">
            Cutaneous androgen excess signs are mild yet correspond with subclinical endocrine fluctuation patterns.
          </p>
        </div>

        {/* Factor 5: BMI & Body Composition */}
        <div
          onClick={() => setSelectedFactor(selectedFactor === 5 ? null : 5)}
          className={`rounded-xl p-3.5 shadow-sm border transition-all cursor-pointer ${
            selectedFactor === 5 ? 'bg-[#eff4ff] border-[#0c9488]' : 'bg-white border-[#e5eeff]'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0c9488]">
                <span className="material-symbols-outlined text-[18px]">accessibility_new</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b1c30]">BMI & Composition</h4>
                <p className="text-[11px] text-[#44474c]">Normative physiological weight</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#e5eeff] text-[#0c9488]">
              Normative
            </span>
          </div>
          <div className="mt-2.5 flex items-center justify-between bg-[#eff4ff] p-2 rounded-lg">
            <span className="text-xs text-[#0b1c30] font-semibold">Calculated BMI</span>
            <span className="text-sm font-bold text-[#0b1c30]">22.8 kg/m²</span>
          </div>
          <p className="mt-2 text-[11px] text-[#44474c] leading-relaxed">
            Within healthy percentile. Points toward lean PCOS phenotypic presentation if confirmed clinically.
          </p>
        </div>
      </div>

      {/* Physician Consultation Guide */}
      <div className="rounded-xl bg-white p-4 shadow-sm border border-[#e5eeff] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px] text-[#0c9488]">clinical_notes</span>
            <h3 className="text-sm font-bold text-[#0b1c30]">Consultation Guide</h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[11px] font-bold text-[#0c9488]">
            Rotterdam Criteria
          </span>
        </div>
        <p className="text-xs text-[#44474c] leading-relaxed">
          A definitive clinical diagnosis requires satisfying at least <strong>2 of the 3 Rotterdam criteria</strong>: ovulatory dysfunction, hyperandrogenism, and polycystic ovaries on ultrasound.
        </p>

        <div className="space-y-2 mt-2">
          <p className="text-xs font-bold text-[#0b1c30]">Recommended Questions for Your Doctor:</p>
          <div className="p-2.5 rounded-xl bg-[#eff4ff] flex items-start gap-2 border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[16px] text-[#426086] mt-0.5">help</span>
            <div className="flex-1">
              <p className="text-xs font-bold text-[#0b1c30]">“Can we perform a pelvic transvaginal ultrasound?”</p>
              <p className="text-[11px] text-[#44474c] mt-0.5">To assess ovarian morphology and follicle count per ovary.</p>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#eff4ff] flex items-start gap-2 border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[16px] text-[#426086] mt-0.5">help</span>
            <div className="flex-1">
              <p className="text-xs font-bold text-[#0b1c30]">“Should we order a Day 3 serum hormone panel?”</p>
              <p className="text-[11px] text-[#44474c] mt-0.5">To formally quantify serum LH, FSH, Total/Free Testosterone, and DHEA-S.</p>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#eff4ff] flex items-start gap-2 border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[16px] text-[#426086] mt-0.5">help</span>
            <div className="flex-1">
              <p className="text-xs font-bold text-[#0b1c30]">“Would fasting insulin or an OGTT be appropriate?”</p>
              <p className="text-[11px] text-[#44474c] mt-0.5">To establish subclinical metabolic indices independent of BMI.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-col space-y-2 pt-1 pb-1">
        <button
          onClick={handleGeneratePdf}
          disabled={generating}
          className="w-full min-h-[48px] rounded-xl bg-[#000000] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75"
        >
          {generating ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              <span>Preparing Rotterdam Summary...</span>
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
          className="w-full min-h-[48px] rounded-xl bg-white text-[#0b1c30] text-xs font-bold flex items-center justify-center gap-2 shadow-sm border border-[#e5eeff] active:scale-[0.98] transition-all hover:bg-[#eff4ff] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px] text-[#0c9488]">person_search</span>
          <span>Find In-Network Reproductive Endocrinologist</span>
        </button>
      </div>

      {/* Mandatory Disclaimer Card */}
      <div className="rounded-xl bg-[#eff4ff] p-3 border border-[#dce9ff]">
        <div className="flex items-start gap-2">
          <span className="material-symbols-outlined text-[#3b5a7f] text-[18px] mt-0.5">info</span>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#0b1c30]">Screening Scope & Medical Disclaimer</p>
            <p className="text-[11px] text-[#44474c] mt-0.5 leading-relaxed">
              HERSCAN.AI provides predictive screening assessments based on computational modeling of cycle and phenotypic observations. It does not provide formal pathology, medical diagnosis, or replace an examination by a board-certified gynecologist or reproductive endocrinologist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
