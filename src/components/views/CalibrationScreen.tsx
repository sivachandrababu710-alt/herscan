import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface CalibrationScreenProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenScopeModal: () => void;
}

export const CalibrationScreen: React.FC<CalibrationScreenProps> = ({
  onRouteChange,
  onOpenScopeModal,
}) => {
  const [troubleshootOpen, setTroubleshootOpen] = useState(false);
  const [calibrating, setCalibrating] = useState(false);
  const [calibProgress, setCalibProgress] = useState(92);
  const [calibStage, setCalibStage] = useState(3);
  const [logsModal, setLogsModal] = useState(false);

  const handleRecalibrate = () => {
    setCalibrating(true);
    setCalibProgress(15);
    setCalibStage(2);
    setTimeout(() => {
      setCalibProgress(55);
      setCalibStage(3);
    }, 600);
    setTimeout(() => {
      setCalibProgress(88);
    }, 1200);
    setTimeout(() => {
      setCalibProgress(100);
      setCalibStage(4);
      setCalibrating(false);
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto space-y-4">
      {/* Navigation Header */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => onRouteChange('overview')}
          className="inline-flex items-center gap-1 text-[#44474c] hover:text-[#0b1c30] transition-colors py-1.5 px-3 rounded-xl bg-[#eff4ff] text-xs font-bold border border-[#dce9ff]"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Overview</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5eeff] text-[#0c9488] shadow-sm border border-[#dce9ff]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0c9488] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0c9488]"></span>
          </span>
          <span className="text-[11px] font-bold tracking-wide uppercase">
            {calibrating ? 'Recalibrating Array...' : 'Calibrated Node'}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#0b1c30] tracking-tight">
          Device Calibration & Sensor Diagnostics
        </h1>
        <p className="text-xs text-[#44474c] mt-0.5">
          ESP32-S3 Multimodal Optical & Potentiostat Reader (BLE v5.2 • Firmware v2.4.1)
        </p>
      </div>

      {/* Interactive Hardware Hero Unit */}
      <div className="relative w-full rounded-2xl bg-white p-5 shadow-sm border border-[#e5eeff] overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#b3d1fd]/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#dce9ff]/60 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Schematic Diagram of the Handheld Reader */}
          <div className="relative w-72 h-48 flex items-center justify-center my-2">
            {/* BLE Wave Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-[#d3e4ff]/30 animate-ping opacity-25"></div>
              <div className="w-36 h-36 rounded-full bg-[#89f5e7]/30 animate-pulse"></div>
            </div>

            {/* Handheld Device Body */}
            <div className="relative w-48 h-44 bg-[#0e1c2f] rounded-2xl p-3 flex flex-col justify-between shadow-2xl border border-[#213145]">
              {/* Emitter Chamber */}
              <div className="w-full flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#89f5e7] animate-pulse"></span>
                  <span className="text-[9px] font-mono text-[#89f5e7] font-bold tracking-wider">CHAMBER LASER</span>
                </div>
                <div className="w-14 h-1.5 bg-[#213145] rounded-full flex items-center px-0.5">
                  <div className="w-3 h-1 bg-[#0c9488] rounded-full"></div>
                </div>
              </div>

              {/* OLED Display */}
              <div className="w-full bg-[#000000] rounded-lg p-2.5 font-mono text-[9px] text-[#89f5e7] leading-tight border border-[#213145] shadow-inner">
                <div className="flex justify-between items-center text-[#d6e3fe] pb-1">
                  <span>HERSCAN OS 2.4</span>
                  <span className="text-[#89f5e7] font-bold">94%</span>
                </div>
                <div className="text-[10px] text-white font-bold tracking-tight">
                  CALIB: {calibrating ? `SWEEP [${calibProgress}%]` : `IN_PROG [${calibProgress}%]`}
                </div>
                <div className="flex justify-between text-[8px] text-[#bac7e1] pt-1">
                  <span>POT: 0.11mV</span>
                  <span>540/570nm OK</span>
                </div>
              </div>

              {/* Cartridge Bay Slot */}
              <div className="relative w-full h-8 bg-[#213145]/60 rounded-md flex items-center justify-between px-2 border border-[#3a475c]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0c9488] animate-pulse"></span>
                  </div>
                  <span className="text-[9px] text-white font-mono font-bold">BAY ACTIVE</span>
                </div>
                <div className="h-2 w-16 bg-white/20 rounded-full overflow-hidden flex items-center px-0.5">
                  <div 
                    className="h-1 bg-[#89f5e7] rounded-full transition-all duration-300"
                    style={{ width: `${calibProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Tags */}
          <div className="w-full mt-2 pt-2 border-t border-[#e5eeff] flex items-center justify-between text-xs text-[#44474c]">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#0c9488]">bluetooth_connected</span>
              <span className="font-bold text-[#0b1c30]">RSSI -52 dBm</span>
              <span className="text-[#3b5a7f] font-semibold">(Optimal)</span>
            </div>
            <div className="font-mono text-[11px] text-[#0b1c30] bg-[#eff4ff] px-3 py-1 rounded-full font-bold border border-[#dce9ff]">
              SN: RD-8821B • v2.4.1
            </div>
          </div>
        </div>
      </div>

      {/* Quick Specs Telemetry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#44474c]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Battery Health</span>
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">battery_charging_full</span>
          </div>
          <div className="mt-1">
            <div className="text-xl font-bold text-[#0b1c30]">94%</div>
            <div className="text-[11px] text-[#44474c]">~28 screening cycles left</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#44474c]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Chamber Temp</span>
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">thermostat</span>
          </div>
          <div className="mt-1">
            <div className="text-xl font-bold text-[#0b1c30]">36.8°C</div>
            <div className="text-[11px] text-[#0c9488] font-bold">PID Stable ±0.05°C</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#44474c]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Potentiostat Null</span>
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">speed</span>
          </div>
          <div className="mt-1">
            <div className="text-xl font-bold text-[#0b1c30]">&lt;0.12 mV</div>
            <div className="text-[11px] text-[#44474c]">Within target tolerance</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#e5eeff] flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#44474c]">
            <span className="text-[10px] font-bold uppercase tracking-wider">Optical Matrix</span>
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">visibility</span>
          </div>
          <div className="mt-1">
            <div className="text-xl font-bold text-[#0b1c30]">Dual 540/570</div>
            <div className="text-[11px] text-[#0c9488] font-bold">Zero-dark balanced</div>
          </div>
        </div>
      </div>

      {/* Multi-Stage Hardware Calibration Sequence */}
      <div className="w-full rounded-2xl bg-white p-5 shadow-sm border border-[#e5eeff] space-y-3.5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0b1c30]">Calibration Sequence</h2>
            <p className="text-xs text-[#44474c]">Automated 4-stage micro-transducer integrity audit</p>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0b1c30] font-mono font-bold border border-[#dce9ff]">
            Stage {calibStage} / 4
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Step 1 */}
          <div className="p-3 rounded-xl bg-[#eff4ff] flex items-start gap-3 border border-[#dce9ff]/60">
            <div className="w-7 h-7 rounded-full bg-[#e5eeff] text-[#0c9488] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b1c30]">1. BLE Mutual Handshake</span>
                <span className="text-[10px] font-bold text-[#0c9488] uppercase">Passed</span>
              </div>
              <p className="text-xs text-[#44474c] mt-0.5">
                Encrypted AES-256 link confirmed with reader secure-element certificate.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-3 rounded-xl bg-[#eff4ff] flex items-start gap-3 border border-[#dce9ff]/60">
            <div className="w-7 h-7 rounded-full bg-[#e5eeff] text-[#0c9488] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b1c30]">2. Spectrometer Photometrics</span>
                <span className="text-[10px] font-bold text-[#0c9488] uppercase">Passed</span>
              </div>
              <p className="text-xs text-[#44474c] mt-0.5">
                Dark-current subtracted. Dynamic lumen compensation calibrated for 540nm and 570nm.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl bg-[#dce9ff]/60 flex flex-col gap-2 border border-[#b3d1fd]/60">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#0e1c2f] text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0b1c30]">3. Potentiostat Null Sweep</span>
                  <span className="text-xs font-mono font-bold text-[#0b1c30]">{calibProgress}%</span>
                </div>
                <p className="text-xs text-[#44474c] mt-0.5">
                  Evaluating electrode impedance spectrum (1.00 kHz – 100 kHz) & drift stabilization.
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-full h-2 overflow-hidden px-0.5 flex items-center border border-[#dce9ff]">
              <div
                className="h-1.5 bg-[#0c9488] rounded-full transition-all duration-300"
                style={{ width: `${calibProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#44474c] font-mono px-0.5">
              <span>Drift: +0.008 µA / sec</span>
              <span>Target Window: ±0.025 µA</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-3 rounded-xl bg-[#eff4ff] flex items-start gap-3 opacity-70 border border-[#dce9ff]/60">
            <div className="w-7 h-7 rounded-full bg-[#d3e4fe] text-[#44474c] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[16px]">pending</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0b1c30]">4. Microfluidic Pin Continuity</span>
                <span className="text-[10px] font-bold text-[#44474c] uppercase">Standby</span>
              </div>
              <p className="text-xs text-[#44474c] mt-0.5">
                Will actuate gold micro-switch contacts immediately after impedance null.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Drift & Calibration Record Card */}
      <div className="w-full rounded-2xl bg-white p-5 shadow-sm border border-[#e5eeff] space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#426086]">history_toggle_off</span>
            <span className="text-xs font-bold text-[#0b1c30]">Diagnostic Drift Telemetry</span>
          </div>
          <span className="text-[10px] font-bold text-[#0c9488] uppercase bg-[#eff4ff] px-2.5 py-0.5 rounded-full border border-[#dce9ff]">
            Calibrated Today
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#eff4ff] space-y-2 border border-[#dce9ff]/60">
          <div className="flex justify-between items-baseline">
            <span className="text-xs font-medium text-[#44474c]">Transducer Baseline Drift</span>
            <span className="text-sm font-bold text-[#0b1c30]">
              0.14% <span className="font-semibold text-[#0c9488] text-xs">(Safe &lt;1.50%)</span>
            </span>
          </div>

          <div className="w-full h-8 flex items-center">
            <svg className="w-full h-full text-[#0c9488]" preserveAspectRatio="none" viewBox="0 0 240 32">
              <path d="M 0 24 Q 30 18, 60 21 T 120 14 T 180 18 T 240 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
              <line stroke="rgba(11,28,48,0.15)" strokeDasharray="3 3" strokeWidth="1" x1="0" x2="240" y1="6" y2="6" />
            </svg>
          </div>

          <div className="flex justify-between items-center text-[10px] text-[#44474c] font-mono">
            <span>Factory Profile: #HS-CAL-2025</span>
            <span>Standard: ISO 15197</span>
          </div>
        </div>
      </div>

      {/* Troubleshooting Drawer Card */}
      <div className="w-full rounded-2xl bg-[#eff4ff] p-4 space-y-2 border border-[#dce9ff]">
        <button
          onClick={() => setTroubleshootOpen(!troubleshootOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#426086]">help_outline</span>
            <span className="text-xs font-bold text-[#0b1c30]">Blinking Amber or Signal Loss?</span>
          </div>
          <span className={`material-symbols-outlined text-[18px] text-[#44474c] transition-transform ${
            troubleshootOpen ? 'rotate-180' : ''
          }`}>
            expand_more
          </span>
        </button>

        {troubleshootOpen && (
          <div className="text-[#44474c] text-xs pt-2 space-y-2 border-t border-[#dce9ff] leading-relaxed">
            <p>1. Ensure cartridge reader chamber is clear of lint or dry reagent particles with an optical swab.</p>
            <p>2. Keep reader within 0.5 meters of this device to maintain high RSSI signal margin during photodiode sweep.</p>
            <p>3. If amber ring persists for over 60 seconds, tap "Run Factory Baseline Re-Calibration" below to reset zero offsets.</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        <button
          onClick={handleRecalibrate}
          disabled={calibrating}
          className="w-full py-3.5 px-4 rounded-xl bg-[#000000] text-white text-xs font-bold shadow-md hover:bg-[#213145] transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer disabled:opacity-75"
        >
          <span className={`material-symbols-outlined text-[18px] ${calibrating ? 'animate-spin' : ''}`}>
            restart_alt
          </span>
          <span>{calibrating ? 'Running Zero-Point Null Calibration...' : 'Run Factory Baseline Re-Calibration'}</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => alert('Searching for nearby HERSCAN Bluetooth devices... Found 1 device: HERSCAN-Reader Pro (RD-8821B).')}
            className="w-full py-2.5 px-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] text-xs font-bold hover:bg-[#dce9ff] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">sync_alt</span>
            <span>Pair Different Device</span>
          </button>
          <button
            onClick={() => setLogsModal(true)}
            className="w-full py-2.5 px-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] text-xs font-bold hover:bg-[#dce9ff] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>Diagnostic Logs (.RAW)</span>
          </button>
        </div>
      </div>

      {/* RAW Diagnostic Logs Modal */}
      {logsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl border border-[#e5eeff] text-xs flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#e5eeff]">
              <span className="font-bold text-sm text-[#0b1c30]">ESP32 Diagnostic Logs (.RAW)</span>
              <button onClick={() => setLogsModal(false)} className="p-1 rounded text-[#44474c] hover:bg-[#eff4ff]">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <pre className="bg-[#0e1c2f] text-[#89f5e7] p-3 rounded-xl font-mono text-[11px] h-60 overflow-auto">
{`[08:14:02.102] ESP32-S3 BOOT OK (BUILD 20250328_REV4)
[08:14:02.240] DUAL_CORE_INIT: CORE0=DSP, CORE1=BLE_STACK
[08:14:02.390] SECURE_ELEMENT_MUTUAL_AUTH: PASS (CERT_ID=7F8A)
[08:14:03.010] WE_POTENTIOSTAT: BIAS_V=+0.420V NOISE=0.012uA
[08:14:03.450] PHOTOMETRIC_LED_CALIB: 540nm=100.2% 570nm=99.8%
[08:14:04.100] CARTRIDGE_DETECTED: #HS-C24-B8 (LOT#CP-092)
[08:14:04.220] IMPEDANCE_SWEEP: 1kHz..100kHz PASS (R=1.24k)
[08:14:05.000] CHRONOAMPEROMETRIC_LOG: COTRELL_DECAY=NOMINAL
[08:14:05.150] ZERO_OFFSET_DRIFT: 0.14% (WITHIN ISO 15197 SPEC)
[08:14:05.800] SYSTEM_STATUS: READY FOR CARTRIDGE INTAKE`}
            </pre>
            <div className="flex justify-end pt-1">
              <button
                onClick={() => setLogsModal(false)}
                className="px-4 py-2 rounded-xl bg-[#0e1c2f] text-white font-bold text-xs"
              >
                Close Logs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Regulatory & Calibration Disclaimer */}
      <div className="rounded-xl bg-[#eff4ff] p-3.5 flex items-start gap-2.5 border border-[#dce9ff]">
        <span className="material-symbols-outlined text-[18px] text-[#426086] shrink-0 mt-0.5">verified</span>
        <p className="text-xs text-[#44474c] leading-relaxed">
          Hardware verification ensures micro-electrochemical measurement fidelity for early-risk screening. Does not alter raw biochemical assays. Protocol adheres to certified ISO 13485 guided calibration parameters.
        </p>
      </div>
    </div>
  );
};
