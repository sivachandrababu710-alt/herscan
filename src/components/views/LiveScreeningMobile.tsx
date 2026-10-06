import React, { useState, useEffect } from 'react';
import { ViewRoute } from '../../types';

interface LiveScreeningMobileProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenScopeModal: () => void;
}

export const LiveScreeningMobile: React.FC<LiveScreeningMobileProps> = ({
  onRouteChange,
  onOpenScopeModal,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(18);
  const [aborted, setAborted] = useState(false);

  useEffect(() => {
    if (aborted) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1200);

    return () => clearInterval(timer);
  }, [aborted]);

  const handleAbort = () => {
    if (confirm('Are you sure you want to cancel the current biosensor sequence? Cartridge #HS-C24-B8 will be safely vented.')) {
      setAborted(true);
    }
  };

  return (
    <div className="flex flex-col w-full space-y-3.5">
      {/* Status / Protocol Bar */}
      <div className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-[#e5eeff]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-[#44474c] uppercase font-bold tracking-wider">Multiplex Biosensor Stream</span>
            <span className="text-sm text-[#0b1c30] font-bold truncate">Active Amperometric Sequence</span>
            <span className="text-[11px] text-[#44474c] truncate">Cartridge ID: #HS-C24-B8</span>
          </div>
          <div className="flex flex-col items-end shrink-0 gap-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eff4ff] border border-[#dce9ff]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0c9488] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0c9488]"></span>
              </span>
              <span className="text-[11px] text-[#0c9488] font-bold">ESP32 • 98% RSSI</span>
            </div>
            <span className="text-[10px] text-[#44474c]">2.4 GHz Sync</span>
          </div>
        </div>
      </div>

      {/* Stepper Pipeline (Horizontal Pills) */}
      <div className="w-full bg-white rounded-xl p-3 shadow-sm border border-[#e5eeff] overflow-hidden">
        <div className="flex items-center justify-between px-1 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">tune</span>
            <span className="text-xs text-[#0b1c30] font-bold">Workflow Stage</span>
          </div>
          <span className="text-[10px] text-[#426086] font-bold bg-[#eff4ff] px-2 py-0.5 rounded-full border border-[#dce9ff]">
            Step 5 of 8
          </span>
        </div>

        {/* Stepper Scroll Area */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">check_circle</span>
            <span>01 Prepare</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">check_circle</span>
            <span>02 Insert</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">check_circle</span>
            <span>03 Collect</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">check_circle</span>
            <span>04 Apply</span>
          </div>
          <div className={`flex items-center gap-1 shrink-0 px-3 py-1 rounded-full text-white text-[11px] font-bold shadow-sm ${
            aborted ? 'bg-rose-600' : 'bg-[#0e1c2f]'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#89f5e7] animate-pulse"></span>
            <span>{aborted ? '05 Aborted' : '05 Reading Active'}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px] opacity-75">
            <span>06 DSP</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px] opacity-75">
            <span>07 BLE</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#44474c] text-[11px] opacity-75">
            <span>08 AI</span>
          </div>
        </div>
      </div>

      {/* Real-Time Amperometric Kinetic Curve Visualizer */}
      <div className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-[#e5eeff] flex flex-col gap-2.5 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#44474c] uppercase font-bold tracking-wider">Transient Microcurrent Decay</span>
            <div className="flex items-center gap-2">
              <span className="text-base text-[#0b1c30] font-bold">i(t) Curve</span>
              <span className="text-[10px] text-[#0c9488] font-bold bg-[#eff4ff] px-2 py-0.5 rounded-full">Sampling @ 50Hz</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-[#eff4ff] px-2.5 py-1 rounded-full border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[15px] text-[#0b1c30] animate-spin">timelapse</span>
            <span className="text-xs text-[#0b1c30] font-bold">
              {secondsLeft === 0 ? 'Ready' : `${secondsLeft}s Remaining`}
            </span>
          </div>
        </div>

        {/* Mobile Graph SVG Area */}
        <div className="relative w-full h-44 bg-[#eff4ff] rounded-xl p-2 flex flex-col justify-end overflow-hidden border border-[#dce9ff]">
          <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-40">
            <div className="w-full flex justify-between text-[#44474c] text-[10px] font-mono">
              <span>+8.4 µA</span>
              <span>Baseline E₀ = -0.35V</span>
            </div>
            <div className="w-full border-t border-dashed border-[#c5c6cd]"></div>
            <div className="w-full flex justify-between text-[#44474c] text-[10px] font-mono">
              <span>+2.1 µA</span>
              <span>Steady-State Bound</span>
            </div>
            <div className="w-full border-t border-dashed border-[#c5c6cd]"></div>
            <div className="w-full flex justify-between text-[#44474c] text-[10px] font-mono">
              <span>0.0 µA</span>
              <span>t = 0s</span>
            </div>
          </div>

          <svg className="w-full h-full relative z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 320 140">
            <defs>
              <linearGradient id="curveGradientMobileRead" x1="0" x2="0" y1="0" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0c9488" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#0c9488" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 12 20 Q 35 70 85 86 T 180 98 T 249 104 L 249 135 L 12 135 Z" fill="url(#curveGradientMobileRead)" />
            <path d="M 249 104 Q 280 106 310 108" stroke="#aac9f4" strokeDasharray="3 3" strokeWidth="2" />
            <path d="M 12 20 Q 35 70 85 86 T 180 98 T 249 104" stroke="#0c9488" strokeLinecap="round" strokeWidth="2.5" />
            <circle className="animate-ping" cx="249" cy="104" fill="#0c9488" fillOpacity="0.25" r="7" />
            <circle cx="249" cy="104" fill="#0c9488" r="4.5" stroke="#ffffff" strokeWidth="1.5" />
          </svg>

          {/* Floating Tooltip */}
          <div className="absolute right-8 top-6 bg-[#0e1c2f] text-white px-2 py-1 rounded-md shadow-md flex items-center gap-1 z-20 text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89f5e7] animate-pulse"></span>
            <span>1.82 µA @ 78%</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[#44474c] text-[11px] pt-1">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">water_drop</span>
            <span>Diffusion: <strong className="text-[#0b1c30]">Cottrell Match (R²=0.994)</strong></span>
          </div>
          <span>Delta I: <strong>-0.08 µA/s</strong></span>
        </div>
      </div>

      {/* Chamber & Hardware Verification Metrics (3 Compact Cards) */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[18px] text-[#0c9488]">check_circle</span>
            <span className="text-[10px] text-[#0c9488] font-bold">100%</span>
          </div>
          <div className="flex flex-col mt-1.5">
            <span className="text-sm font-bold text-[#0b1c30] leading-tight">15.2 µL</span>
            <span className="text-[10px] text-[#44474c] leading-none mt-1">Microfluidic Fill</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[18px] text-[#426086]">thermostat</span>
            <span className="text-[10px] text-[#426086] font-bold">±0.05°</span>
          </div>
          <div className="flex flex-col mt-1.5">
            <span className="text-sm font-bold text-[#0b1c30] leading-tight">36.8°C</span>
            <span className="text-[10px] text-[#44474c] leading-none mt-1">Regulated Temp</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-[18px] text-[#0c9488]">electric_meter</span>
            <span className="text-[10px] text-[#0c9488] font-bold">PASS</span>
          </div>
          <div className="flex flex-col mt-1.5">
            <span className="text-sm font-bold text-[#0b1c30] leading-tight">1.24 kΩ</span>
            <span className="text-[10px] text-[#44474c] leading-none mt-1">Contact Imp.</span>
          </div>
        </div>
      </div>

      {/* Parallel Multi-Analyte Progress List */}
      <div className="w-full bg-white rounded-xl p-3.5 shadow-sm border border-[#e5eeff] flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#0b1c30]">hub</span>
            <span className="text-xs font-bold text-[#0b1c30]">Multi-Analyte Channels</span>
          </div>
          <span className="text-[10px] text-[#44474c]">4 Channels Concurrent</span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Analyte 1 */}
          <div className="bg-[#eff4ff] rounded-lg p-2.5 flex flex-col gap-1 border border-[#dce9ff]/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span>
                <span className="text-xs font-bold text-[#0b1c30]">Glucose Dehydrogenase Channel</span>
              </div>
              <span className="text-[10px] font-bold text-[#0c9488] bg-white px-2 py-0.5 rounded-full border border-[#e5eeff]">
                Plateaued • Complete
              </span>
            </div>
            <div className="w-full bg-[#e5eeff] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#0c9488] h-full rounded-full w-full"></div>
            </div>
          </div>

          {/* Analyte 2 */}
          <div className="bg-[#eff4ff] rounded-lg p-2.5 flex flex-col gap-1 border border-[#dce9ff]/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0c9488]"></span>
                <span className="text-xs font-bold text-[#0b1c30]">Hemoglobin Multi-Wavelength Optical</span>
              </div>
              <span className="text-[10px] font-bold text-[#0c9488] bg-white px-2 py-0.5 rounded-full border border-[#e5eeff]">
                Complete
              </span>
            </div>
            <div className="w-full bg-[#e5eeff] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#0c9488] h-full rounded-full w-full"></div>
            </div>
          </div>

          {/* Analyte 3 */}
          <div className="bg-[#eff4ff] rounded-lg p-2.5 flex flex-col gap-1 border border-[#dce9ff]/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#426086] animate-pulse"></span>
                <span className="text-xs font-bold text-[#0b1c30]">25-OH Vitamin D Immunosensor</span>
              </div>
              <span className="text-[10px] font-bold text-[#426086] bg-white px-2 py-0.5 rounded-full border border-[#e5eeff]">
                Finalizing 88%
              </span>
            </div>
            <div className="w-full bg-[#e5eeff] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#426086] h-full rounded-full w-[88%]"></div>
            </div>
          </div>

          {/* Analyte 4 */}
          <div className="bg-[#eff4ff] rounded-lg p-2.5 flex flex-col gap-1 border border-[#dce9ff]/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3b5a7f] animate-ping"></span>
                <span className="text-xs font-bold text-[#0b1c30]">LH/FSH Differential Impedance</span>
              </div>
              <span className="text-[10px] font-bold text-[#3b5a7f] bg-white px-2 py-0.5 rounded-full border border-[#e5eeff]">
                Computing...
              </span>
            </div>
            <div className="w-full bg-[#e5eeff] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#3b5a7f] h-full rounded-full w-[54%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Handling Banner */}
      <div className="w-full bg-[#eff4ff] rounded-xl p-3 shadow-sm flex items-start gap-2.5 border border-[#dce9ff]">
        <span className="material-symbols-outlined text-[20px] text-[#0c9488] shrink-0 mt-0.5">spa</span>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#0b1c30]">Gentle Handling Recommended</span>
          <p className="text-[11px] text-[#44474c] mt-0.5 leading-relaxed">
            Please keep the handheld reader on a flat, stable surface. Do not eject or agitate the cartridge during processing to ensure baseline electrochemical precision.
          </p>
        </div>
      </div>

      {/* Completion CTA if secondsLeft === 0 */}
      {secondsLeft === 0 && (
        <button
          onClick={() => onRouteChange('results')}
          className="w-full py-3.5 px-4 rounded-xl bg-[#0c9488] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md animate-in fade-in cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">analytics</span>
          <span>View Newly Synthesized Results →</span>
        </button>
      )}

      {/* Emergency Abort & Reference Links */}
      <div className="flex flex-col items-center gap-2 pt-1">
        <button
          onClick={handleAbort}
          disabled={aborted}
          className="w-full py-3 px-4 rounded-xl bg-[#e5eeff] text-[#ba1a1a] hover:bg-[#ffdad6] text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">cancel</span>
          <span>{aborted ? 'Scan Aborted • Chamber Vented' : 'Abort Scan & Release Chamber'}</span>
        </button>

        <div className="flex items-center justify-between w-full px-1 text-[11px]">
          <button
            onClick={onOpenScopeModal}
            className="inline-flex items-center gap-1 text-[#426086] hover:text-[#0b1c30] font-bold"
          >
            <span className="material-symbols-outlined text-[15px]">menu_book</span>
            <span>Reader Hardware Guide</span>
          </button>
          <div className="flex items-center gap-1 text-[#44474c]">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            <span>Non-Diagnostic Telemetry</span>
          </div>
        </div>
      </div>

      {/* Mandatory Medical Disclaimer Card */}
      <div className="w-full bg-white rounded-xl p-3 shadow-sm border border-[#e5eeff] flex items-center gap-2 text-[#44474c]">
        <span className="material-symbols-outlined text-[16px] text-[#3b5a7f] shrink-0">info</span>
        <span className="text-[10px] leading-tight">
          Bio-electrochemical signals captured in real time. Preliminary screening indicators only. Consult qualified healthcare professionals for medical diagnostic evaluation.
        </span>
      </div>
    </div>
  );
};
