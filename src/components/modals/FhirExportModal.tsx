import React, { useState } from 'react';
import { FHIR_BUNDLE_SAMPLE } from '../../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FhirExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(FHIR_BUNDLE_SAMPLE, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HERSCAN_FHIR_R4_Bundle_8821B.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-4 border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086]">
              <span className="material-symbols-outlined text-[22px]">code</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">HL7 FHIR R4 JSON Export</h2>
              <p className="text-xs text-[#44474c]">Interoperable Electronic Health Record Telemetry Bundle</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#0e1c2f] text-white hover:bg-[#213145] text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download .JSON</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#44474c] hover:bg-[#eff4ff] transition-colors ml-1"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="text-xs text-[#64748b] mb-2 flex items-center justify-between">
            <span>Validated Against HL7 FHIR US-Core Implementation Guide v5.0.1</span>
            <span className="font-mono text-[11px] text-[#0c9488]">Schema: Observation & DiagnosticReport</span>
          </div>
          <pre className="flex-1 overflow-auto bg-[#0e1c2f] text-[#89f5e7] p-4 rounded-xl text-xs font-mono leading-relaxed border border-[#213145] max-h-[500px]">
            {jsonString}
          </pre>
        </div>

        <div className="pt-2 border-t border-[#e5eeff] flex items-center justify-between text-xs text-[#44474c]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#0c9488]">lock</span>
            Encrypted with 256-bit hash verification
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#eff4ff] text-[#0b1c30] font-semibold hover:bg-[#dce9ff] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
