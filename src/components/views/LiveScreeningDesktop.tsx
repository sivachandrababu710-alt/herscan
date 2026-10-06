import React, { useState, useEffect } from 'react';
import { ViewRoute } from '../../types';

interface LiveScreeningDesktopProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenScopeModal: () => void;
}

export const LiveScreeningDesktop: React.FC<LiveScreeningDesktopProps> = ({
  onRouteChange,
  onOpenScopeModal,
}) => {
  const [activeStep, setActiveStep] = useState(5);
  const [secondsRemaining, setSecondsRemaining] = useState(24);
  const [progressPct, setProgressPct] = useState(78);
  const [aborted, setAborted] = useState(false);

  useEffect(() => {
    if (aborted) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setProgressPct(100);
          setActiveStep(6);
          return 0;
        }
        setProgressPct((p) => Math.min(99, p + 1));
        return prev - 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [aborted]);

  const handleAbort = () => {
    if (confirm('Are you sure you want to abort this screening session? Cartridge #HS-C24-B8 will be safely vented.')) {
      setAborted(true);
    }
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Workflow Progress Track (8-Step Ribbon) */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#d3e4ff] text-[#001c38] text-xs font-bold">
                05
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#0b1c30]">Screening Protocol Pipeline</h2>
                <p className="text-xs text-[#44474c]">Active Amperometric Sequence • Protocol ID: HS-2025-089A</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#dce9ff] text-[#001c38]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0c9488] animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider">
                {aborted ? 'Session Aborted' : 'Acquisition Phase Active'}
              </span>
            </div>
          </div>

          {/* Horizontal 8-Step Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 pt-1">
            {/* Step 1 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">01</span>
                <span className="material-symbols-outlined text-[16px] text-[#0c9488]">check_circle</span>
              </div>
              <span className="text-xs text-[#0b1c30] font-bold truncate">Prepare Device</span>
              <span className="text-[10px] text-[#0c9488] font-semibold">Complete</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">02</span>
                <span className="material-symbols-outlined text-[16px] text-[#0c9488]">check_circle</span>
              </div>
              <span className="text-xs text-[#0b1c30] font-bold truncate">Insert Cartridge</span>
              <span className="text-[10px] text-[#0c9488] font-semibold">Complete</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">03</span>
                <span className="material-symbols-outlined text-[16px] text-[#0c9488]">check_circle</span>
              </div>
              <span className="text-xs text-[#0b1c30] font-bold truncate">Collect Sample</span>
              <span className="text-[10px] text-[#0c9488] font-semibold">Complete</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">04</span>
                <span className="material-symbols-outlined text-[16px] text-[#0c9488]">check_circle</span>
              </div>
              <span className="text-xs text-[#0b1c30] font-bold truncate">Apply to Well</span>
              <span className="text-[10px] text-[#0c9488] font-semibold">Complete</span>
            </div>

            {/* Step 5: Active */}
            <div className={`flex flex-col gap-1 p-2.5 rounded-xl text-white shadow-md transition-all ${
              aborted ? 'bg-[#ba1a1a]' : 'bg-[#0e1c2f]'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#bac7e1] font-bold">05</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#89f5e7] animate-pulse"></span>
              </div>
              <span className="text-xs font-bold text-white truncate">Electrochemical Read</span>
              <span className="text-[10px] text-[#d3e4ff] font-semibold">
                {aborted ? 'Aborted' : `Active • ${progressPct}%`}
              </span>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] opacity-75 border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">06</span>
                <span className="material-symbols-outlined text-[16px] text-[#44474c]">hourglass_top</span>
              </div>
              <span className="text-xs text-[#44474c] font-bold truncate">ESP32 DSP Filter</span>
              <span className="text-[10px] text-[#44474c]">Incoming</span>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] opacity-60 border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">07</span>
                <span className="material-symbols-outlined text-[16px] text-[#44474c]">lock_clock</span>
              </div>
              <span className="text-xs text-[#44474c] font-bold truncate">BLE Transmission</span>
              <span className="text-[10px] text-[#44474c]">Queued</span>
            </div>

            {/* Step 8 */}
            <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-[#eff4ff] opacity-60 border border-[#dce9ff]/60">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#44474c] font-bold">08</span>
                <span className="material-symbols-outlined text-[16px] text-[#44474c]">neurology</span>
              </div>
              <span className="text-xs text-[#44474c] font-bold truncate">AI Risk Synthesis</span>
              <span className="text-[10px] text-[#44474c]">Queued</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Banner */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#dce9ff]/60 shadow-sm border border-[#b3d1fd]/60">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#d3e4ff] text-[#426086] shrink-0">
          <span className="material-symbols-outlined text-[22px]">vital_signs</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 w-full">
          <div>
            <p className="text-sm font-bold text-[#0b1c30]">Reading in progress — Maintain stable positioning</p>
            <p className="text-xs text-[#44474c]">Please keep handheld reader flat on a level surface. Do not eject or touch the cartridge until scan completes.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs uppercase tracking-wider text-[#426086] px-3 py-1 rounded-full bg-white font-bold border border-[#e5eeff]">
              Safe Eject Locked
            </span>
          </div>
        </div>
      </div>

      {/* Live Sensor Processing Console (Split View) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Panel: Hardware Diagnostics & Live Telemetry (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#426086]">memory</span>
                <span className="text-sm font-bold text-[#0b1c30]">ESP32-S3 Biomedical Core</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#3b5a7f] text-[11px] font-bold">Dual Core • 240MHz</span>
            </div>

            {/* Sensor Graphic Container */}
            <div className="relative w-full h-52 bg-[#eff4ff] rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-[#dce9ff]">
              <div className="absolute w-44 h-44 rounded-full bg-[#d3e4fe] animate-ping opacity-25"></div>
              <div className="absolute w-32 h-32 rounded-full bg-[#b3d1fd] opacity-40"></div>

              {/* Graphic Unit */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-36 h-20 rounded-xl bg-[#0e1c2f] shadow-lg flex items-center justify-between px-3 text-white border border-[#213145]">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#bac7e1] tracking-widest font-bold">HERSCAN</span>
                    <span className="text-base font-bold text-white leading-none">R-PRO</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#89f5e7] animate-pulse"></span>
                    <span className="text-[9px] text-[#89f5e7] font-mono">RX/TX ACTIVE</span>
                  </div>
                </div>

                {/* Cartridge Tongue */}
                <div className="w-24 h-12 -mt-2 bg-[#d3e4fe] rounded-b-lg shadow-inner flex flex-col items-center justify-center gap-1 border-t-0 border border-[#b3d1fd]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                    <span className="text-[9px] font-bold text-[#44474c] uppercase tracking-tighter">Capillary 15µL</span>
                  </div>
                  <div className="w-16 h-1 bg-[#0c9488] rounded-full"></div>
                </div>
              </div>

              {/* Micro-Badges */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm shadow-sm flex items-center gap-1 text-[#0b1c30]">
                <span className="material-symbols-outlined text-[14px] text-[#0c9488]">bluetooth_searching</span>
                <span className="text-[10px] font-mono font-bold">BLE -52 dBm</span>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm shadow-sm flex items-center gap-1 text-[#0b1c30]">
                <span className="material-symbols-outlined text-[14px] text-[#426086]">thermostat</span>
                <span className="text-[10px] font-mono font-bold">36.8°C Regulated</span>
              </div>
            </div>

            {/* Electrical Diagnostics Grid */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c]">Live Electrical & Fluidic Diagnostics</span>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col gap-0.5 border border-[#dce9ff]/60">
                  <span className="text-[10px] text-[#44474c]">Working Potential (WE)</span>
                  <span className="text-base font-mono font-bold text-[#0b1c30]">+0.42 <span className="text-xs font-sans text-[#44474c]">V</span></span>
                  <div className="flex items-center gap-1 text-[#0c9488]">
                    <span className="material-symbols-outlined text-[12px]">done</span>
                    <span className="text-[10px] font-bold">Potentiostat Stable</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col gap-0.5 border border-[#dce9ff]/60">
                  <span className="text-[10px] text-[#44474c]">Fluidic Chamber Fill</span>
                  <span className="text-base font-mono font-bold text-[#0b1c30]">100<span className="text-xs font-sans text-[#44474c]">%</span></span>
                  <div className="flex items-center gap-1 text-[#0c9488]">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    <span className="text-[10px] font-bold">15.2 µL Sample Detected</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col gap-0.5 border border-[#dce9ff]/60">
                  <span className="text-[10px] text-[#44474c]">Electrode Impedance</span>
                  <span className="text-base font-mono font-bold text-[#0b1c30]">1.24 <span className="text-xs font-sans text-[#44474c]">kΩ</span></span>
                  <div className="flex items-center gap-1 text-[#3b5a7f]">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                    <span className="text-[10px] font-bold">Nominal Contact</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#eff4ff] flex flex-col gap-0.5 border border-[#dce9ff]/60">
                  <span className="text-[10px] text-[#44474c]">Cartridge Matrix</span>
                  <span className="text-sm font-mono font-bold text-[#0b1c30] mt-0.5">HS-C24-B8</span>
                  <span className="text-[10px] text-[#44474c]">Quad-Analyte Multi-Array</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#e5eeff] text-xs text-[#44474c]">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#426086]">verified</span>
                <span>Hardware Calibrated</span>
              </div>
              <button 
                onClick={() => onRouteChange('calibration')}
                className="text-[#426086] hover:text-[#0b1c30] font-bold underline cursor-pointer"
              >
                Diagnostic Console
              </button>
            </div>
          </div>

          {/* Secondary Controls Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e5eeff] flex items-center justify-between gap-3">
            <button
              onClick={onOpenScopeModal}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
              <span>Hardware Guide</span>
            </button>
            <button
              onClick={handleAbort}
              disabled={aborted}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#eff4ff] hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
              <span>{aborted ? 'Aborted' : 'Abort Screening Session'}</span>
            </button>
          </div>
        </div>

        {/* Right Panel: Real-Time Signal Spectrum & Channels (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff] flex flex-col gap-5">
            {/* Countdown and Spectrum Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#426086]">insights</span>
                  <h3 className="text-lg font-bold text-[#0b1c30]">Amperometric Reaction Spectrum</h3>
                </div>
                <p className="text-xs text-[#44474c]">Live chronoamperometric transient curve across active enzyme matrix</p>
              </div>

              {/* Circular Metric Tracker */}
              <div className="flex items-center gap-3 bg-[#eff4ff] px-4 py-2 rounded-xl border border-[#dce9ff]">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                    <circle className="text-[#d3e4fe]" cx="24" cy="24" fill="none" r="20" stroke="currentColor" strokeWidth="4" />
                    <circle
                      className="text-[#0c9488]"
                      cx="24"
                      cy="24"
                      fill="none"
                      r="20"
                      stroke="currentColor"
                      strokeDasharray="125.6"
                      strokeDashoffset={125.6 * (1 - progressPct / 100)}
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                  <span className="absolute text-xs font-bold text-[#0b1c30]">{progressPct}%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0b1c30]">{secondsRemaining}s Remaining</span>
                  <span className="text-[11px] text-[#44474c]">{secondsRemaining === 0 ? 'Sequence Complete' : 'Stabilizing Signals'}</span>
                </div>
              </div>
            </div>

            {/* Real-Time Interactive SVG Curve Graph */}
            <div className="relative w-full h-64 bg-[#eff4ff] rounded-xl p-4 flex flex-col justify-between overflow-hidden border border-[#dce9ff]">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-3 text-[#44474c] text-[11px] font-mono">
                  <span>CURRENT: 4.82 µA</span>
                  <span>•</span>
                  <span>SAMPLING: 100 Hz</span>
                  <span>•</span>
                  <span>NOISE: &lt; 0.02 nA</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white text-[#0c9488] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
                  Live Capture
                </div>
              </div>

              {/* Electrochemical Curve Graphic */}
              <div className="absolute inset-0 pt-8 pb-6 px-4 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 180">
                  <line stroke="#d3e4fe" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="30" y2="30" />
                  <line stroke="#d3e4fe" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="75" y2="75" />
                  <line stroke="#d3e4fe" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="120" y2="120" />
                  <line stroke="#d3e4fe" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="165" y2="165" />

                  {/* Gradient fill */}
                  <path className="text-[#d3e4ff] opacity-40" d="M 0 160 Q 40 20, 110 50 T 260 85 T 420 100 L 468 103 L 468 180 L 0 180 Z" fill="currentColor" />
                  <path className="text-[#426086]" d="M 0 160 Q 40 20, 110 50 T 260 85 T 420 100 L 468 103" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path className="text-[#c5c6cd]" d="M 468 103 Q 520 105, 600 106" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                  
                  <circle className="text-[#0c9488] animate-ping" cx="468" cy="103" fill="currentColor" r="6" />
                  <circle className="text-[#0e1c2f]" cx="468" cy="103" fill="currentColor" r="4" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[#44474c] text-[10px] font-mono z-10 pt-2">
                <span>0.00s (Sample Ingestion)</span>
                <span>T+15s (Cottrell Diffusion)</span>
                <span>T+35s (Reaction Plateau)</span>
                <span>T+60s (Final Endpoint)</span>
              </div>
            </div>

            {/* Analyte Parallel Channels Monitor */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#44474c]">Analyte Array Parallel Processing</span>
                <span className="text-[11px] text-[#426086] font-bold">4 of 4 Channels Active</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Channel 1 */}
                <div className="p-3 rounded-xl bg-[#eff4ff] flex items-center justify-between gap-3 border border-[#dce9ff]/60">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#0c9488]">water_drop</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">Glucose Dehydrogenase Channel (GDH)</span>
                      <span className="text-[11px] text-[#44474c]">Enzymatic redox steady-state validated • Amperometric peak clear</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#0c9488] text-[11px] font-bold border border-[#e5eeff]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    <span>Plateaued</span>
                  </div>
                </div>

                {/* Channel 2 */}
                <div className="p-3 rounded-xl bg-[#eff4ff] flex items-center justify-between gap-3 border border-[#dce9ff]/60">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#0c9488]">light_mode</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">Hemoglobin Multi-Wavelength Optical Spectrometry</span>
                      <span className="text-[11px] text-[#44474c]">Dual-beam 540nm / 570nm absorbance spectrum stabilized</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#0c9488] text-[11px] font-bold border border-[#e5eeff]">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    <span>Complete</span>
                  </div>
                </div>

                {/* Channel 3 */}
                <div className="p-3 rounded-xl bg-[#dce9ff]/60 flex items-center justify-between gap-3 border border-[#b3d1fd]/60">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#426086]">biotech</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">25-OH Vitamin D Direct Immunosensor</span>
                      <span className="text-[11px] text-[#44474c]">Competitive antibody-antigen binding incubation: phase 2 of 2</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#426086] text-[11px] font-bold border border-[#e5eeff]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#426086] animate-spin"></span>
                    <span>Finalizing (88%)</span>
                  </div>
                </div>

                {/* Channel 4 */}
                <div className="p-3 rounded-xl bg-[#dce9ff]/60 flex items-center justify-between gap-3 border border-[#b3d1fd]/60">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-[#426086]">hub</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0b1c30]">LH/FSH Endocrine Micro-Immunoassay Surrogate Ratio</span>
                      <span className="text-[11px] text-[#44474c]">Differential micro-potentiometric impedance calculation ongoing</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-[#426086] text-[11px] font-bold border border-[#e5eeff]">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#426086] animate-pulse"></span>
                    <span>Computing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Results Shortcut when complete */}
            {secondsRemaining === 0 && (
              <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#0c9488] flex items-center justify-between animate-in fade-in">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0c9488]">check_circle</span>
                  <span className="text-xs font-bold text-[#0b1c30]">Screening Sequence Complete! Analyte data synthesized.</span>
                </div>
                <button
                  onClick={() => onRouteChange('results')}
                  className="px-4 py-2 rounded-lg bg-[#0e1c2f] text-white text-xs font-bold hover:bg-[#213145] transition-colors"
                >
                  View Diagnostic Results →
                </button>
              </div>
            )}
          </div>

          {/* Compliance & Security Assurance Note */}
          <div className="p-4 rounded-xl bg-[#eff4ff] shadow-sm flex items-start gap-3 border border-[#dce9ff]">
            <span className="material-symbols-outlined text-[20px] text-[#426086] shrink-0 mt-0.5">verified_user</span>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold text-[#0b1c30]">On-Device Cryptographic Processing</p>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Raw voltage and impedance measurements are converted into differential biomarkers directly on the ESP32 hardware using AES-256 local key exchange. Results generated are algorithmically classified as early-risk screening indications only and do not constitute clinical diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
