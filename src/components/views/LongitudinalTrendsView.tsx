import React, { useState } from 'react';
import { ViewRoute } from '../../types';
import { LONGITUDINAL_HISTORY } from '../../data/mockData';

interface LongitudinalTrendsViewProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: () => void;
  onOpenFhirExport: () => void;
}

export const LongitudinalTrendsView: React.FC<LongitudinalTrendsViewProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenFhirExport,
}) => {
  const [activeMetric, setActiveMetric] = useState<'glucose' | 'hemoglobin' | 'lhFsh' | 'pcosRisk'>('glucose');
  const [showCycleOverlay, setShowCycleOverlay] = useState(true);

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Longitudinal Biometrics Engine</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0c9488] text-[10px] font-bold border border-[#dce9ff]">
              6-Month Time Series
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#0b1c30] tracking-tight mt-1">
            Multiparametric Biomarker Trajectory
          </h1>
          <p className="text-xs text-[#44474c] mt-0.5">
            Continuous calibration tracking across 6 distinct cycle intervals from October 2024 to March 2025.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenFhirExport}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Export Time-Series</span>
          </button>
          <button
            onClick={onOpenPdfReport}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0e1c2f] text-white hover:bg-[#213145] text-xs font-bold transition-colors shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Metric Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveMetric('glucose')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            activeMetric === 'glucose'
              ? 'bg-[#0e1c2f] text-white border-[#0e1c2f] shadow-sm'
              : 'bg-white text-[#0b1c30] border-[#e5eeff] hover:bg-[#eff4ff]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-[10px] uppercase font-bold ${activeMetric === 'glucose' ? 'text-[#bac7e1]' : 'text-[#44474c]'}`}>
              Metabolic
            </span>
            <span className="material-symbols-outlined text-[18px]">water_drop</span>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">92 mg/dL</span>
            <span className={`block text-[11px] ${activeMetric === 'glucose' ? 'text-[#89f5e7]' : 'text-[#0c9488]'}`}>
              Fasting Glucose (Stable)
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveMetric('hemoglobin')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            activeMetric === 'hemoglobin'
              ? 'bg-[#0e1c2f] text-white border-[#0e1c2f] shadow-sm'
              : 'bg-white text-[#0b1c30] border-[#e5eeff] hover:bg-[#eff4ff]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-[10px] uppercase font-bold ${activeMetric === 'hemoglobin' ? 'text-[#bac7e1]' : 'text-[#44474c]'}`}>
              Hematology
            </span>
            <span className="material-symbols-outlined text-[18px]">vital_signs</span>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">13.4 g/dL</span>
            <span className={`block text-[11px] ${activeMetric === 'hemoglobin' ? 'text-[#89f5e7]' : 'text-[#0c9488]'}`}>
              Hemoglobin (Optimal)
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveMetric('lhFsh')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            activeMetric === 'lhFsh'
              ? 'bg-[#0e1c2f] text-white border-[#0e1c2f] shadow-sm'
              : 'bg-white text-[#0b1c30] border-[#e5eeff] hover:bg-[#eff4ff]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-[10px] uppercase font-bold ${activeMetric === 'lhFsh' ? 'text-[#bac7e1]' : 'text-[#44474c]'}`}>
              Endocrine
            </span>
            <span className="material-symbols-outlined text-[18px]">biotech</span>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">1.8 : 1</span>
            <span className={`block text-[11px] ${activeMetric === 'lhFsh' ? 'text-amber-300' : 'text-amber-600 font-bold'}`}>
              LH/FSH Ratio (Elevated)
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveMetric('pcosRisk')}
          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
            activeMetric === 'pcosRisk'
              ? 'bg-[#0e1c2f] text-white border-[#0e1c2f] shadow-sm'
              : 'bg-white text-[#0b1c30] border-[#e5eeff] hover:bg-[#eff4ff]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-[10px] uppercase font-bold ${activeMetric === 'pcosRisk' ? 'text-[#bac7e1]' : 'text-[#44474c]'}`}>
              Stratified Risk
            </span>
            <span className="material-symbols-outlined text-[18px]">monitoring</span>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">38% Index</span>
            <span className={`block text-[11px] ${activeMetric === 'pcosRisk' ? 'text-[#89f5e7]' : 'text-[#426086]'}`}>
              PCOS Probability Model
            </span>
          </div>
        </button>
      </div>

      {/* Main Interactive Chart Board */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold text-[#0b1c30]">
              {activeMetric === 'glucose' && 'Fasting Glucose Longitudinal Trend (Ref: 70–99 mg/dL)'}
              {activeMetric === 'hemoglobin' && 'Electrochemical Hemoglobin Longitudinal Profile (Ref: 12.0–15.5 g/dL)'}
              {activeMetric === 'lhFsh' && 'LH / FSH Biosensor Signal Ratio (Target < 1.0)'}
              {activeMetric === 'pcosRisk' && 'PCOS Computational Multi-Analyte Risk Trajectory (%)'}
            </h2>
            <p className="text-xs text-[#44474c]">Normalized across 6-month testing intervals with sensor zero-point alignment</p>
          </div>

          <label className="flex items-center gap-2 text-xs font-semibold text-[#0b1c30] cursor-pointer">
            <input
              type="checkbox"
              checked={showCycleOverlay}
              onChange={(e) => setShowCycleOverlay(e.target.checked)}
              className="w-4 h-4 rounded text-[#426086] focus:ring-0 cursor-pointer"
            />
            <span>Overlay Menstrual Phase Correlation</span>
          </label>
        </div>

        {/* Detailed Graph Area */}
        <div className="relative w-full h-80 bg-[#eff4ff] rounded-2xl p-6 flex flex-col justify-between border border-[#dce9ff]">
          {showCycleOverlay && (
            <div className="absolute inset-x-8 top-12 bottom-12 grid grid-cols-6 pointer-events-none opacity-20">
              <div className="border-r border-[#426086] pr-1"><span className="text-[9px] uppercase font-bold">D5</span></div>
              <div className="border-r border-[#426086] pr-1"><span className="text-[9px] uppercase font-bold">D26</span></div>
              <div className="border-r border-[#426086] pr-1"><span className="text-[9px] uppercase font-bold">D12</span></div>
              <div className="border-r border-[#426086] pr-1"><span className="text-[9px] uppercase font-bold">D8</span></div>
              <div className="border-r border-[#426086] pr-1"><span className="text-[9px] uppercase font-bold">D31</span></div>
              <div className="pr-1"><span className="text-[9px] uppercase font-bold">D14</span></div>
            </div>
          )}

          <div className="relative z-10 w-full h-56 flex items-end">
            <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 600 200">
              {/* Horizontal Reference Lines */}
              <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="600" y1="40" y2="40" />
              <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="600" y1="90" y2="90" />
              <line stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="600" y1="140" y2="140" />

              {/* Dynamic Path depending on metric */}
              {activeMetric === 'glucose' && (
                <>
                  <path d="M 50,110 L 150,85 L 250,98 L 350,108 L 450,90 L 550,92" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="50" cy="110" fill="#000" r="5" />
                  <circle cx="150" cy="85" fill="#000" r="5" />
                  <circle cx="250" cy="98" fill="#000" r="5" />
                  <circle cx="350" cy="108" fill="#000" r="5" />
                  <circle cx="450" cy="90" fill="#000" r="5" />
                  <circle cx="550" cy="92" fill="#0c9488" r="7" stroke="#fff" strokeWidth="2" />
                </>
              )}

              {activeMetric === 'hemoglobin' && (
                <>
                  <path d="M 50,130 L 150,115 L 250,122 L 350,90 L 450,115 L 550,95" stroke="#0c9488" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="50" cy="130" fill="#0c9488" r="5" />
                  <circle cx="150" cy="115" fill="#0c9488" r="5" />
                  <circle cx="250" cy="122" fill="#0c9488" r="5" />
                  <circle cx="350" cy="90" fill="#0c9488" r="5" />
                  <circle cx="450" cy="115" fill="#0c9488" r="5" />
                  <circle cx="550" cy="95" fill="#0c9488" r="7" stroke="#fff" strokeWidth="2" />
                </>
              )}

              {activeMetric === 'lhFsh' && (
                <>
                  <path d="M 50,140 L 150,125 L 250,95 L 350,95 L 450,88 L 550,75" stroke="#426086" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="50" cy="140" fill="#426086" r="5" />
                  <circle cx="150" cy="125" fill="#426086" r="5" />
                  <circle cx="250" cy="95" fill="#426086" r="5" />
                  <circle cx="350" cy="95" fill="#426086" r="5" />
                  <circle cx="450" cy="88" fill="#426086" r="5" />
                  <circle cx="550" cy="75" fill="#D97706" r="7" stroke="#fff" strokeWidth="2" />
                </>
              )}

              {activeMetric === 'pcosRisk' && (
                <>
                  <path d="M 50,160 L 150,145 L 250,95 L 350,85 L 450,78 L 550,95" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="50" cy="160" fill="#D97706" r="5" />
                  <circle cx="150" cy="145" fill="#D97706" r="5" />
                  <circle cx="250" cy="95" fill="#D97706" r="5" />
                  <circle cx="350" cy="85" fill="#D97706" r="5" />
                  <circle cx="450" cy="78" fill="#D97706" r="5" />
                  <circle cx="550" cy="95" fill="#0e1c2f" r="7" stroke="#fff" strokeWidth="2" />
                </>
              )}
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-[#44474c] px-4 font-mono">
            {LONGITUDINAL_HISTORY.map((h, i) => (
              <div key={i} className="text-center">
                <span className="block font-bold text-[#0b1c30]">{h.month}</span>
                <span className="text-[10px] text-[#64748b]">{h.cycleLength}d cycle</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Callout */}
        <div className="mt-4 p-4 rounded-xl bg-[#eff4ff] text-xs text-[#0b1c30] flex items-center justify-between border border-[#dce9ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#426086]">insights</span>
            <span>
              <strong>Clinical Trajectory Correlation:</strong> Follicular phase LH surges on days 12–14 correlate with +4% variance in metabolic insulin sensitivity without fasting hyperglycemia.
            </span>
          </div>
          <button
            onClick={() => onRouteChange('clinician-handoff')}
            className="text-xs font-bold text-[#426086] hover:underline whitespace-nowrap cursor-pointer"
          >
            Attach to Clinician Packet →
          </button>
        </div>
      </div>
    </div>
  );
};
