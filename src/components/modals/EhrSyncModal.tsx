import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EhrSyncModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [appleHealthConnected, setAppleHealthConnected] = useState(true);
  const [myChartConnected, setMyChartConnected] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState('Today, 08:15 AM');

  if (!isOpen) return null;

  const handleSyncNow = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSync('Just now');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-4 border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#426086]">sync</span>
            <h3 className="text-lg font-bold text-[#0b1c30]">EHR Direct Integration</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[#44474c] hover:bg-[#eff4ff]">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="text-xs text-[#44474c] leading-relaxed">
          Bi-directional FHIR interoperability connects your HERSCAN electrochemical readings and cycle milestones directly with certified health platforms.
        </p>

        <div className="space-y-3">
          {/* Apple Health Card */}
          <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-rose-500 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
              </div>
              <div>
                <span className="font-bold text-xs text-[#0b1c30] block">Apple HealthKit</span>
                <span className="text-[11px] text-[#64748b]">Fasting Glucose, Basal Body Temp</span>
              </div>
            </div>
            <button
              onClick={() => setAppleHealthConnected(!appleHealthConnected)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                appleHealthConnected
                  ? 'bg-[#0c9488]/15 text-[#0c9488]'
                  : 'bg-[#e5eeff] text-[#44474c]'
              }`}
            >
              {appleHealthConnected ? 'Connected' : 'Connect'}
            </button>
          </div>

          {/* Epic MyChart Card */}
          <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-amber-600 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">local_hospital</span>
              </div>
              <div>
                <span className="font-bold text-xs text-[#0b1c30] block">Epic MyChart</span>
                <span className="text-[11px] text-[#64748b]">Dr. Mercer’s Care Portal</span>
              </div>
            </div>
            <button
              onClick={() => setMyChartConnected(!myChartConnected)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                myChartConnected
                  ? 'bg-[#0c9488]/15 text-[#0c9488]'
                  : 'bg-[#e5eeff] text-[#44474c]'
              }`}
            >
              {myChartConnected ? 'Connected' : 'Connect'}
            </button>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#f8f9ff] border border-[#e5eeff] flex items-center justify-between text-xs">
          <span className="text-[#64748b]">Last Telemetry Sync: <strong>{lastSync}</strong></span>
          <button
            onClick={handleSyncNow}
            disabled={syncing}
            className="flex items-center gap-1 text-[#426086] font-bold hover:underline disabled:opacity-50"
          >
            <span className={`material-symbols-outlined text-[16px] ${syncing ? 'animate-spin' : ''}`}>sync</span>
            <span>{syncing ? 'Syncing...' : 'Sync Now'}</span>
          </button>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0e1c2f] text-white text-xs font-semibold hover:bg-[#213145] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
