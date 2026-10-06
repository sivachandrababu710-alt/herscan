import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ScopeLimitsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-4 border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
              <span className="material-symbols-outlined text-[22px]">shield</span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#0b1c30]">Clinical Protocol & Regulatory Scope</h2>
              <p className="text-xs text-[#44474c]">HERSCAN AI Biosensor Architecture • Protocol HS-2025-089A</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="space-y-4 text-sm text-[#44474c] leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff]">
            <div className="flex items-center gap-2 text-[#0c9488] font-bold text-xs uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Screening Intelligence Only • Non-Diagnostic</span>
            </div>
            <p className="text-xs text-[#0b1c30]">
              HERSCAN AI is categorized under FDA 510(k) Pre-Market Research Phase as an in-vitro biosensing early-risk monitoring platform. It provides screening-level biomarker estimations and multi-marker predictive trend analytics. It does not replace medical pathology tests, transvaginal ultrasounds, or physician diagnosis.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0b1c30] text-base mb-1.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#426086]">biotech</span>
              Rotterdam Diagnostic Consensus (2003 / 2023)
            </h3>
            <p className="text-xs">
              A formal medical diagnosis of Polycystic Ovary Syndrome (PCOS) requires satisfying at least <strong>two of the three</strong> standardized clinical criteria:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#0b1c30]">
              <li><strong>Oligo- or Anovulation:</strong> Menstrual cycle irregularities or prolonged intervals exceeding 35 days.</li>
              <li><strong>Clinical / Biochemical Hyperandrogenism:</strong> Elevated serum androgens (total/free testosterone, DHEAS) or hirsutism/cystic acne.</li>
              <li><strong>Polycystic Ovarian Morphology:</strong> ≥20 follicles per ovary and/or ovarian volume ≥10 mL on high-resolution pelvic ultrasound.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0b1c30] text-base mb-1.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#426086]">memory</span>
              Hardware Sensor Rigor & ISO Standards
            </h3>
            <p className="text-xs">
              The ESP32-S3 microcontroller operates a dual-channel potentiostat and dual-beam 540nm/570nm optical spectrometer calibrated in accordance with <strong>ISO 15197</strong> and <strong>ISO 13485</strong> guided medical equipment quality systems. Baseline drift is algorithmically compensated within ±0.8%.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff]">
              <span className="text-[11px] font-bold text-[#0b1c30] uppercase block">Security & Cryptography</span>
              <span className="text-xs text-[#44474c] mt-0.5 block">HIPAA & GDPR Level-3 AES-256 on-device key management with cryptographic FHIR export.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff]">
              <span className="text-[11px] font-bold text-[#0b1c30] uppercase block">IRB Protocol</span>
              <span className="text-xs text-[#44474c] mt-0.5 block">Pre-market institutional research board protocol ID: IRB-WHA-2024-44.</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#e5eeff] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0e1c2f] text-white font-semibold text-sm hover:bg-[#213145] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
