import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface ResultsMobileProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenFhirExport: () => void;
}

export const ResultsMobile: React.FC<ResultsMobileProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenFhirExport,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="flex flex-col w-full space-y-3.5">
      {/* Top Reassurance Banner: Non-diagnostic Clinical Guidance */}
      <div className="rounded-xl bg-[#eff4ff] p-3.5 shadow-sm border border-[#dce9ff]">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#d3e4ff] flex items-center justify-center shrink-0 text-[#001c38]">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[11px] uppercase text-[#0c9488] tracking-wider font-bold">Screening Guidance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488]"></span>
              <span className="text-[11px] text-[#44474c]">Class IIa Sensor</span>
            </div>
            <p className="text-xs text-[#44474c] leading-relaxed">
              Screening insights derived from electrochemical sensor arrays. Clinical confirmation required. Not an independent diagnosis.
            </p>
          </div>
        </div>
      </div>

      {/* Session Metadata Card */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#eff4ff]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0c9488] text-[20px]">event_available</span>
            <span className="text-xs font-bold text-[#0b1c30]">Today, 08:15 AM</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0c9488] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
            Synchronized
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#eff4ff] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3b5a7f] text-[18px]">timer</span>
            <div className="min-w-0">
              <div className="text-[10px] text-[#3b5a7f] font-semibold">Fasting State</div>
              <div className="text-xs font-bold text-[#0b1c30] truncate">9.5 hrs</div>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#eff4ff] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3b5a7f] text-[18px]">calendar_today</span>
            <div className="min-w-0">
              <div className="text-[10px] text-[#3b5a7f] font-semibold">Cycle Window</div>
              <div className="text-xs font-bold text-[#0b1c30] truncate">Follicular (D14)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric 1: Metabolic (Fasting Glucose) */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#d3e4ff] flex items-center justify-center text-[#001c38]">
              <span className="material-symbols-outlined text-[16px]">water_drop</span>
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#0b1c30]">Metabolic Array</h2>
              <p className="text-[10px] text-[#44474c]">Fasting Blood Glucose</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[13px]">check_circle</span>
            Normal
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-2 mb-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#0b1c30]">92</span>
            <span className="text-xs text-[#44474c]">mg/dL</span>
          </div>
          <div className="flex items-center gap-1 text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
            <span>Stable 30d baseline</span>
          </div>
        </div>

        {/* Horizontal Precision Gauge */}
        <div className="relative w-full h-2 rounded-full bg-[#e5eeff] overflow-hidden my-2">
          <div className="absolute top-0 bottom-0 left-[20%] w-[30%] bg-[#d3e4fe] rounded-full opacity-60"></div>
          <div className="absolute top-0 bottom-0 left-0 w-[42%] bg-[#0c9488] rounded-full"></div>
        </div>
        <div className="flex justify-between text-[10px] text-[#44474c]">
          <span>70 (Low)</span>
          <span className="font-bold text-[#0b1c30]">Normal: 70–99 mg/dL</span>
          <span>99 (Elevated)</span>
        </div>
      </div>

      {/* Metric 2: Hematology (Hemoglobin) */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#d3e4ff] flex items-center justify-center text-[#001c38]">
              <span className="material-symbols-outlined text-[16px]">bloodtype</span>
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#0b1c30]">Hematology</h2>
              <p className="text-[10px] text-[#44474c]">Electrochemical Hemoglobin</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[13px]">format_image_left</span>
            Low Anemia Risk
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-2 mb-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#0b1c30]">13.4</span>
            <span className="text-xs text-[#44474c]">g/dL</span>
          </div>
          <span className="inline-flex items-center gap-0.5 text-[#0c9488] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +0.3 vs last month
          </span>
        </div>

        <div className="w-full bg-[#e5eeff] h-2 rounded-full overflow-hidden my-2 relative">
          <div className="h-full bg-[#0c9488] rounded-full w-[65%]"></div>
        </div>
        <div className="flex justify-between text-[10px] text-[#44474c]">
          <span>12.0</span>
          <span className="font-bold text-[#0b1c30]">Optimal Range 12.0–15.5 g/dL</span>
          <span>15.5</span>
        </div>
      </div>

      {/* Metric 3: Endocrine Array (LH / FSH Biosensor Ratio) */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#3b5a7f]">
              <span className="material-symbols-outlined text-[16px]">cyclone</span>
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#0b1c30]">Endocrine Array</h2>
              <p className="text-[10px] text-[#44474c]">LH / FSH Biosensor Ratio</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#dce9ff] text-[#001c38] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px] text-[#ba1a1a]">priority_high</span>
            Mild Divergence
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-2 mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#0b1c30]">1.8 : 1</span>
            <span className="text-[11px] text-[#44474c] ml-1">(Baseline &lt; 1.0)</span>
          </div>
          <span className="text-[11px] text-[#44474c] bg-[#eff4ff] px-2 py-0.5 rounded font-medium">
            Follicular Phase
          </span>
        </div>

        {/* Interactive Accordion */}
        <div className="rounded-lg bg-[#eff4ff] p-2.5 border border-[#dce9ff]">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
            type="button"
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#426086] text-[18px]">info</span>
              <span className="text-xs font-bold text-[#0b1c30]">Why is this flagged for review?</span>
            </div>
            <span
              className={`material-symbols-outlined text-[#426086] text-[18px] transition-transform duration-200 ${
                accordionOpen ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </button>

          {accordionOpen && (
            <div className="pt-2 mt-2 border-t border-[#dce9ff] text-xs text-[#44474c] leading-relaxed space-y-1.5 animate-in fade-in duration-200">
              <p>
                In early-to-mid follicular phase, LH and FSH are typically balanced in a 1:1 equilibrium. A ratio approaching 2:1 may occur near impending ovulatory surge or can signify neuroendocrine variation worth discussing with your specialist.
              </p>
              <div className="flex items-center gap-1 text-[#0c9488] font-bold pt-1">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                <span>AI recommendation: Retest with morning ovulation strip to verify LH peak.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Metric 4: Cellular Nutrition (D3 & B12) */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#d3e4ff] flex items-center justify-center text-[#001c38]">
              <span className="material-symbols-outlined text-[16px]">flare</span>
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#0b1c30]">Cellular Nutrition</h2>
              <p className="text-[10px] text-[#44474c]">Micronutrient Assays</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#0c9488] text-[18px]">check_circle</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#eff4ff] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0b1c30]">Vitamin D3</span>
              <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span>
            </div>
            <div className="my-1">
              <span className="text-xl font-bold text-[#0b1c30]">38</span>
              <span className="text-[10px] text-[#44474c] ml-1">ng/mL</span>
            </div>
            <div className="text-[10px] text-[#44474c]">Sufficiency (30–100)</div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#eff4ff] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0b1c30]">Vitamin B12</span>
              <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span>
            </div>
            <div className="my-1">
              <span className="text-xl font-bold text-[#0b1c30]">440</span>
              <span className="text-[10px] text-[#44474c] ml-1">pg/mL</span>
            </div>
            <div className="text-[10px] text-[#44474c]">Normal (200–900)</div>
          </div>
        </div>
      </div>

      {/* Metric 5: Vascular & Inflammation (hs-CRP) */}
      <div className="rounded-xl bg-white p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#d3e4ff] flex items-center justify-center text-[#001c38]">
              <span className="material-symbols-outlined text-[16px]">thermostat</span>
            </div>
            <div>
              <h2 className="text-xs font-bold text-[#0b1c30]">Vascular & Inflammation</h2>
              <p className="text-[10px] text-[#44474c]">High-Sensitivity CRP</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0c9488] text-[11px] font-bold">
            Low Risk
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-2 mb-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#0b1c30]">0.8</span>
            <span className="text-xs text-[#44474c]">mg/L</span>
          </div>
          <span className="text-[11px] text-[#44474c]">Target &lt; 1.0 mg/L</span>
        </div>

        <div className="w-full bg-[#e5eeff] h-2 rounded-full overflow-hidden my-2 relative">
          <div className="h-full bg-[#0c9488] rounded-full w-[26%]"></div>
        </div>
        <div className="flex justify-between text-[10px] text-[#44474c]">
          <span className="text-[#0c9488] font-bold">Optimal &lt; 1.0</span>
          <span>Moderate 1.0–3.0</span>
          <span>Elevated &gt; 3.0</span>
        </div>
      </div>

      {/* Suggested Next Steps Bento Card */}
      <div className="rounded-xl bg-[#eff4ff] p-3.5 shadow-sm border border-[#dce9ff]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#0c9488] text-[20px]">task_alt</span>
            <h2 className="text-xs font-bold text-[#0b1c30]">Recommended Actions</h2>
          </div>
          <span className="text-[11px] text-[#44474c]">2 pending</span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-white flex items-start gap-2.5 shadow-sm border border-[#e5eeff]">
            <div className="w-5 h-5 rounded-full bg-[#d3e4ff] text-[#001c38] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              1
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-[#0b1c30]">Log BBT & Ovulation Test</div>
              <p className="text-[11px] text-[#44474c] mt-0.5 leading-tight">
                Record morning basal body temperature and lateral flow LH strip to contextualize follicular divergence.
              </p>
            </div>
          </div>

          <div 
            onClick={onOpenFhirExport}
            className="p-2.5 rounded-lg bg-white flex items-start gap-2.5 shadow-sm border border-[#e5eeff] cursor-pointer hover:bg-[#f8f9ff] transition-colors"
          >
            <div className="w-5 h-5 rounded-full bg-[#d3e4ff] text-[#001c38] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              2
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-[#0b1c30] flex items-center justify-between">
                <span>Export FHIR Health Record</span>
                <span className="material-symbols-outlined text-[14px] text-[#426086]">open_in_new</span>
              </div>
              <p className="text-[11px] text-[#44474c] mt-0.5 leading-tight">
                Share multi-analyte biometric panel directly to your OB/GYN electronic health portal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action Button Cluster */}
      <div className="flex flex-col space-y-2 pt-1">
        <button
          onClick={onOpenPdfReport}
          className="w-full h-12 px-4 rounded-xl bg-[#000000] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">ios_share</span>
          <span>Share with Doctor (Encrypted PDF)</span>
        </button>
        <button
          onClick={() => onRouteChange('longitudinal-trends')}
          className="w-full h-12 px-4 rounded-xl bg-white text-[#0b1c30] text-xs font-bold flex items-center justify-center gap-2 shadow-sm border border-[#e5eeff] active:scale-[0.98] transition-all hover:bg-[#eff4ff] cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px] text-[#426086]">monitoring</span>
          <span>View 6-Month Longitudinal Trends</span>
        </button>
      </div>

      {/* Mandatory Medical Scope Micro-Banner */}
      <div className="p-2.5 rounded-lg bg-[#eff4ff] text-center border border-[#dce9ff]">
        <p className="text-[10px] text-[#44474c] leading-tight">
          HERSCAN Protocol v4.2 • Certified In-Vitro Screening Algorithm • Encrypted HIPAA & GDPR Compliant Telemetry
        </p>
      </div>
    </div>
  );
};
