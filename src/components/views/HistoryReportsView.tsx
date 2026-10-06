import React, { useState } from 'react';
import { ViewRoute } from '../../types';

interface HistoryReportsViewProps {
  onRouteChange: (route: ViewRoute) => void;
  onOpenPdfReport: (type?: 'summary' | 'comprehensive') => void;
  onOpenFhirExport: () => void;
}

const HISTORIC_SESSIONS = [
  {
    id: 'HS-8821B',
    date: 'March 28, 2025',
    time: '08:15 AM',
    cyclePhase: 'Follicular (Day 14)',
    glucose: 92,
    hb: 13.4,
    lhFsh: '1.8 : 1',
    pcosRisk: '38% (Moderate)',
    status: 'Completed',
    verified: true,
  },
  {
    id: 'HS-7901A',
    date: 'February 16, 2025',
    time: '08:40 AM',
    cyclePhase: 'Luteal (Day 31)',
    glucose: 93,
    hb: 13.1,
    lhFsh: '1.75 : 1',
    pcosRisk: '52% (Moderate)',
    status: 'Completed',
    verified: true,
  },
  {
    id: 'HS-6410C',
    date: 'January 19, 2025',
    time: '08:20 AM',
    cyclePhase: 'Follicular (Day 8)',
    glucose: 89,
    hb: 13.5,
    lhFsh: '1.7 : 1',
    pcosRisk: '49% (Moderate)',
    status: 'Completed',
    verified: true,
  },
  {
    id: 'HS-5820D',
    date: 'December 14, 2024',
    time: '09:05 AM',
    cyclePhase: 'Follicular (Day 12)',
    glucose: 91,
    hb: 13.0,
    lhFsh: '1.7 : 1',
    pcosRisk: '44% (Moderate)',
    status: 'Completed',
    verified: true,
  },
  {
    id: 'HS-4911A',
    date: 'November 15, 2024',
    time: '08:30 AM',
    cyclePhase: 'Luteal (Day 26)',
    glucose: 94,
    hb: 13.1,
    lhFsh: '1.5 : 1',
    pcosRisk: '24% (Low)',
    status: 'Completed',
    verified: true,
  },
  {
    id: 'HS-3920B',
    date: 'October 18, 2024',
    time: '08:15 AM',
    cyclePhase: 'Follicular (Day 5)',
    glucose: 88,
    hb: 12.9,
    lhFsh: '1.4 : 1',
    pcosRisk: '18% (Low)',
    status: 'Completed',
    verified: true,
  },
];

export const HistoryReportsView: React.FC<HistoryReportsViewProps> = ({
  onRouteChange,
  onOpenPdfReport,
  onOpenFhirExport,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSessions = HISTORIC_SESSIONS.filter(
    (s) =>
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.cyclePhase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#e5eeff] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#426086]">Archive & Audit Trail</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#0c9488] text-[10px] font-bold border border-[#dce9ff]">
              6 Verified Runs
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#0b1c30] tracking-tight mt-1">
            Historical Screening Records & Reports
          </h1>
          <p className="text-xs text-[#44474c] mt-0.5">
            Full audit log of point-of-care microfluidic assays with raw sensor telemetry and physician export packets.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onOpenPdfReport('comprehensive')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0e1c2f] text-white hover:bg-[#213145] text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
            <span>Batch Export All Reports</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 max-w-md bg-[#eff4ff] px-3.5 py-2 rounded-xl border border-[#dce9ff]">
          <span className="material-symbols-outlined text-[18px] text-[#44474c]">search</span>
          <input
            type="text"
            placeholder="Search by Run ID (e.g. #HS-8821B), month, or cycle phase..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-xs text-[#0b1c30] placeholder-[#64748b] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-[#44474c]">
          <span className="font-semibold">Showing {filteredSessions.length} screenings</span>
        </div>
      </div>

      {/* Screening Records List */}
      <div className="rounded-2xl bg-white shadow-sm border border-[#e5eeff] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="bg-[#eff4ff] text-[#44474c] uppercase font-bold text-[11px] border-b border-[#e5eeff]">
                <th className="py-3 px-4">Session ID / Date</th>
                <th className="py-3 px-4">Cycle Phase</th>
                <th className="py-3 px-4">Glucose</th>
                <th className="py-3 px-4">Hemoglobin</th>
                <th className="py-3 px-4">LH/FSH Ratio</th>
                <th className="py-3 px-4">PCOS Risk Score</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eff4ff]">
              {filteredSessions.map((session, index) => (
                <tr key={session.id} className="hover:bg-[#eff4ff]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#426086] font-mono text-xs font-bold">
                        #{session.id.split('-')[1]}
                      </div>
                      <div>
                        <span className="font-bold text-[#0b1c30] block">{session.date}</span>
                        <span className="text-[11px] text-[#64748b] font-mono">{session.time}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#0b1c30] text-[11px] font-semibold border border-[#dce9ff]">
                      {session.cyclePhase}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#0b1c30]">
                    {session.glucose} mg/dL
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#0b1c30]">
                    {session.hb} g/dL
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#426086]">
                    {session.lhFsh}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      session.pcosRisk.includes('Moderate')
                        ? 'bg-[#d3e4ff] text-[#001c38]'
                        : 'bg-[#e5eeff] text-[#0c9488]'
                    }`}>
                      {session.pcosRisk}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onOpenPdfReport('summary')}
                        className="p-1.5 rounded-lg text-[#426086] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                        title="Download PDF Summary"
                      >
                        <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      </button>
                      <button
                        onClick={onOpenFhirExport}
                        className="p-1.5 rounded-lg text-[#0c9488] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                        title="View FHIR Record"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                      </button>
                      <button
                        onClick={() => onRouteChange('results')}
                        className="px-2.5 py-1 rounded-lg bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff] text-[11px] font-bold transition-colors ml-1"
                      >
                        View Results
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
