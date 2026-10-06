import React, { useState } from 'react';
import { PATIENT_PROFILE, CURRENT_SESSION } from '../../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  reportType?: 'summary' | 'comprehensive';
}

export const PdfReportModal: React.FC<Props> = ({ isOpen, onClose, reportType = 'comprehensive' }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // Simulate file download
      const blob = new Blob([
        `HERSCAN AI CLINICAL SUMMARY REPORT\nPatient: ${PATIENT_PROFILE.name} (Age: ${PATIENT_PROFILE.age})\nSession ID: ${CURRENT_SESSION.id}\nDate: ${CURRENT_SESSION.date}\nGlucose: ${CURRENT_SESSION.biomarkers.glucose} mg/dL\nHb: ${CURRENT_SESSION.biomarkers.hemoglobin} g/dL\nLH/FSH Ratio: ${CURRENT_SESSION.biomarkers.lhFshRatio}:1\nPCOS Risk Score: ${CURRENT_SESSION.pcosRiskScore}% (Moderate)\nPhysician: ${PATIENT_PROFILE.physician}`
      ], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `HERSCAN_Clinical_Summary_${PATIENT_PROFILE.name.replace(' ', '_')}_2025.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="w-full max-w-3xl rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-5 border border-[#e5eeff] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#426086]">picture_as_pdf</span>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c30]">
                {reportType === 'summary' ? '1-Page Clinical Summary PDF' : 'Comprehensive 4-Page Lab Report (Rotterdam Standard)'}
              </h2>
              <span className="text-xs text-[#44474c]">Formatted for OB/GYN & Reproductive Endocrinology Examination</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] text-xs font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#0e1c2f] text-white hover:bg-[#213145] text-xs font-semibold transition-colors disabled:opacity-75"
            >
              {downloading ? (
                <>
                  <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#44474c] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors ml-1"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Printable Document Preview Area */}
        <div className="p-6 bg-[#f8f9ff] rounded-xl border border-[#dce9ff] space-y-5 font-sans">
          {/* Document Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#cbd5e1]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0e1c2f] text-white flex items-center justify-center font-bold text-lg">
                H<span className="text-[#89f5e7]">A</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-[#0b1c30]">HERSCAN AI CLINICAL BRIEF</span>
                  <span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#3b5a7f] text-[10px] font-bold uppercase">CONFIDENTIAL</span>
                </div>
                <p className="text-xs text-[#44474c]">Point-of-Care Biosensor Multiplex Panel • In-Vitro Screening</p>
              </div>
            </div>
            <div className="text-right text-xs text-[#44474c]">
              <div className="font-mono text-[11px] font-semibold text-[#0b1c30]">SESSION #{CURRENT_SESSION.id}</div>
              <div>Date: {CURRENT_SESSION.date} • {CURRENT_SESSION.time}</div>
              <div>Firmware: {CURRENT_SESSION.firmwareVersion}</div>
            </div>
          </div>

          {/* Patient Details & Clinical Context */}
          <div className="grid grid-cols-4 gap-4 p-3.5 bg-white rounded-lg border border-[#e5eeff] text-xs">
            <div>
              <span className="text-[#64748b] block text-[10px] uppercase font-semibold">Patient Name</span>
              <span className="font-bold text-[#0b1c30] text-sm">{PATIENT_PROFILE.name}</span>
            </div>
            <div>
              <span className="text-[#64748b] block text-[10px] uppercase font-semibold">Date of Birth / Age</span>
              <span className="font-medium text-[#0b1c30]">{PATIENT_PROFILE.dob} ({PATIENT_PROFILE.age}y)</span>
            </div>
            <div>
              <span className="text-[#64748b] block text-[10px] uppercase font-semibold">Cycle Phase</span>
              <span className="font-medium text-[#0b1c30]">Follicular (Day {PATIENT_PROFILE.cycleDay})</span>
            </div>
            <div>
              <span className="text-[#64748b] block text-[10px] uppercase font-semibold">Primary Provider</span>
              <span className="font-medium text-[#0b1c30]">{PATIENT_PROFILE.physician}</span>
            </div>
          </div>

          {/* Biomarker Panel Matrix */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#426086] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">biotech</span>
              Objective Calibrated Biomarker Panel
            </h3>
            <div className="overflow-hidden rounded-lg border border-[#e5eeff] bg-white text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#eff4ff] text-[#44474c] font-semibold">
                  <tr>
                    <th className="py-2 px-3">Analyte / Biomarker</th>
                    <th className="py-2 px-3">Observed Value</th>
                    <th className="py-2 px-3">Reference Range</th>
                    <th className="py-2 px-3">Classification</th>
                    <th className="py-2 px-3 text-right">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eff4ff]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0b1c30]">Capillary Fasting Glucose</td>
                    <td className="py-2.5 px-3 font-mono font-bold">{CURRENT_SESSION.biomarkers.glucose} mg/dL</td>
                    <td className="py-2.5 px-3 text-[#64748b]">70 – 99 mg/dL</td>
                    <td className="py-2.5 px-3"><span className="text-[#0c9488] font-bold">Normal Euglycemic</span></td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#64748b]">99.4%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0b1c30]">Electrochemical Hemoglobin (Hb)</td>
                    <td className="py-2.5 px-3 font-mono font-bold">{CURRENT_SESSION.biomarkers.hemoglobin} g/dL</td>
                    <td className="py-2.5 px-3 text-[#64748b]">12.0 – 15.5 g/dL</td>
                    <td className="py-2.5 px-3"><span className="text-[#0c9488] font-bold">Optimal / Low Anemia</span></td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#64748b]">98.9%</td>
                  </tr>
                  <tr className="bg-[#fffbeb]/50">
                    <td className="py-2.5 px-3 font-semibold text-[#0b1c30]">LH / FSH Signal Ratio</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#b45309]">{CURRENT_SESSION.biomarkers.lhFshRatio} : 1</td>
                    <td className="py-2.5 px-3 text-[#64748b]">&lt; 1.0 (Early Follicular)</td>
                    <td className="py-2.5 px-3"><span className="text-[#b45309] font-bold">Attention / Follicular Drift</span></td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#64748b]">91.4%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0b1c30]">hs-CRP (Micro-Inflammation)</td>
                    <td className="py-2.5 px-3 font-mono font-bold">{CURRENT_SESSION.biomarkers.hsCrp} mg/L</td>
                    <td className="py-2.5 px-3 text-[#64748b]">&lt; 1.0 mg/L</td>
                    <td className="py-2.5 px-3"><span className="text-[#0c9488] font-bold">Low Risk</span></td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#64748b]">97.2%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0b1c30]">25-OH Vitamin D3</td>
                    <td className="py-2.5 px-3 font-mono font-bold">{CURRENT_SESSION.biomarkers.vitaminD3} ng/mL</td>
                    <td className="py-2.5 px-3 text-[#64748b]">30 – 100 ng/mL</td>
                    <td className="py-2.5 px-3"><span className="text-[#0c9488] font-bold">Adequate</span></td>
                    <td className="py-2.5 px-3 text-right font-mono text-[#64748b]">95.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Clinical Interpretation & Recommended Inquiries */}
          <div className="p-3.5 bg-white rounded-lg border border-[#e5eeff] space-y-2 text-xs">
            <h4 className="font-bold text-[#0b1c30] uppercase tracking-wider text-[11px]">Physician Consultation Summary</h4>
            <p className="text-[#44474c] leading-relaxed">
              Patient exhibits stable euglycemic glucose metrics and normal hematology. However, biosensor captures elevated mid-follicular LH/FSH ratio (~1.8:1) co-occurring with historical cycle prolongation (mean interval 39 days across the last 6 cycles). In accordance with the Rotterdam diagnostic framework, clinical evaluation of ovulatory status and pelvic transvaginal ultrasonography for ovarian morphology is recommended.
            </p>
          </div>

          {/* Cryptographic Stamp */}
          <div className="flex items-center justify-between pt-2 border-t border-[#cbd5e1] text-[10px] text-[#64748b] font-mono">
            <span>E-SIG HASH: SHA256-7f8a9201c391</span>
            <span>FHIR R4 JSON BUNDLE ATTACHED</span>
            <span>HERSCAN AI v2025.2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
