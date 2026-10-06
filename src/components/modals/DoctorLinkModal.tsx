import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorLinkModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = 'https://herscan.ai/portal/v3/review?token=7f90e21a_evance_2025';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-4 border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#426086]">link</span>
            <h3 className="text-lg font-bold text-[#0b1c30]">Physician Access Link Generated</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[#44474c] hover:bg-[#eff4ff]">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#44474c] leading-relaxed">
          This single-use cryptographic token allows your doctor direct, read-only access to your 6-month calibrated sensor charts and FHIR R4 raw metrics for 72 hours.
        </p>

        <div className="flex items-center gap-2 p-3 rounded-xl bg-[#eff4ff] font-mono text-xs text-[#0b1c30] border border-[#dce9ff]">
          <span className="truncate flex-1 select-all">{shareUrl}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-[#0e1c2f] text-white hover:bg-[#213145] text-xs font-semibold shrink-0 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-[#44474c] pt-2">
          <span>Expires: 72 hours from generation</span>
          <span className="flex items-center gap-1 text-[#0c9488] font-medium">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            256-bit AES Tokenized
          </span>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-xs font-bold text-[#0b1c30] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
