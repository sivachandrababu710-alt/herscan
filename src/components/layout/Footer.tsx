import React from 'react';
import { ViewRoute } from '../../types';

interface FooterProps {
  onExportFhir: () => void;
  onGeneratePdf: () => void;
  onOpenScopeModal: () => void;
  onRouteChange: (route: ViewRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExportFhir,
  onGeneratePdf,
  onOpenScopeModal,
  onRouteChange,
}) => {
  return (
    <footer className="w-full bg-white py-6 shadow-[0_-1px_8px_rgba(0,0,0,0.03)] border-t border-[#e5eeff]">
      <div className="w-full px-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-[#44474c] text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#426086]">enhanced_encryption</span>
            <span>HIPAA / GDPR Level-3 End-to-End Cryptography</span>
          </div>
          <span className="hidden sm:inline text-[#d3e4fe]">•</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#0c9488]">memory</span>
            <span>Firmware: v2.4.1 (ESP32-BLE-PRO)</span>
          </div>
          <span className="hidden sm:inline text-[#d3e4fe]">•</span>
          <span>Model Release: 2025.2.0-Alpha</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onExportFhir}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-semibold text-xs transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Export FHIR JSON</span>
          </button>
          <button
            onClick={onGeneratePdf}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0e1c2f] text-white hover:bg-[#213145] transition-colors font-semibold text-xs cursor-pointer shadow-sm"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Generate PDF Handoff</span>
          </button>
        </div>
      </div>

      <div className="w-full px-8 mt-3 pt-3 border-t border-[#e5eeff]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#44474c] text-[11px]">
        <p>© 2025 HERSCAN AI Technologies Inc. All screening risk assessments are algorithmically generated and require physician interpretation.</p>
        <div className="flex items-center gap-4">
          <button onClick={onOpenScopeModal} className="hover:text-[#0b1c30] transition-colors cursor-pointer">Privacy Charter</button>
          <button onClick={onOpenScopeModal} className="hover:text-[#0b1c30] transition-colors cursor-pointer">IRB Protocol</button>
          <button onClick={() => onRouteChange('calibration')} className="hover:text-[#0b1c30] transition-colors cursor-pointer">Sensor Calibration Logs</button>
        </div>
      </div>
    </footer>
  );
};
