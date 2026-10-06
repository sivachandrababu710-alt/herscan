/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewRoute, DeviceMode } from './types';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { MobileHeader } from './components/layout/MobileHeader';
import { MobileNav } from './components/layout/MobileNav';

// Views
import { OverviewDesktop } from './components/views/OverviewDesktop';
import { OverviewMobile } from './components/views/OverviewMobile';
import { ResultsDesktop } from './components/views/ResultsDesktop';
import { ResultsMobile } from './components/views/ResultsMobile';
import { PcosDesktop } from './components/views/PcosDesktop';
import { PcosMobile } from './components/views/PcosMobile';
import { LiveScreeningDesktop } from './components/views/LiveScreeningDesktop';
import { LiveScreeningMobile } from './components/views/LiveScreeningMobile';
import { CalibrationScreen } from './components/views/CalibrationScreen';
import { ClinicianHandoffDesktop } from './components/views/ClinicianHandoffDesktop';
import { LongitudinalTrendsView } from './components/views/LongitudinalTrendsView';
import { HistoryReportsView } from './components/views/HistoryReportsView';

// Modals
import { ScopeLimitsModal } from './components/modals/ScopeLimitsModal';
import { PdfReportModal } from './components/modals/PdfReportModal';
import { FhirExportModal } from './components/modals/FhirExportModal';
import { DoctorLinkModal } from './components/modals/DoctorLinkModal';
import { CartridgeOrderModal } from './components/modals/CartridgeOrderModal';
import { EhrSyncModal } from './components/modals/EhrSyncModal';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<ViewRoute>('overview');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  // Modals state
  const [isScopeModalOpen, setIsScopeModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfReportType, setPdfReportType] = useState<'summary' | 'comprehensive'>('comprehensive');
  const [isFhirModalOpen, setIsFhirModalOpen] = useState(false);
  const [isDoctorLinkModalOpen, setIsDoctorLinkModalOpen] = useState(false);
  const [isCartridgeModalOpen, setIsCartridgeModalOpen] = useState(false);
  const [isEhrSyncModalOpen, setIsEhrSyncModalOpen] = useState(false);

  const handleOpenPdfReport = (type: 'summary' | 'comprehensive' = 'comprehensive') => {
    setPdfReportType(type);
    setIsPdfModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans">
      {deviceMode === 'desktop' ? (
        /* ================= DESKTOP CLINICAL SUITE VIEW ================= */
        <div className="min-h-screen flex flex-col">
          <Header
            currentRoute={currentRoute}
            onRouteChange={setCurrentRoute}
            deviceMode={deviceMode}
            onDeviceModeChange={setDeviceMode}
            onOpenScopeModal={() => setIsScopeModalOpen(true)}
          />

          <Sidebar
            currentRoute={currentRoute}
            onRouteChange={setCurrentRoute}
          />

          {/* Main Content Area (Offset by sidebar w-64 = 256px and header h-24 = 96px) */}
          <div className="pl-64 flex-1 flex flex-col pt-24">
            <main className="w-full flex-1 px-8 py-8 max-w-7xl">
              {currentRoute === 'overview' && (
                <OverviewDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenCartridgeOrder={() => setIsCartridgeModalOpen(true)}
                  onOpenEhrSync={() => setIsEhrSyncModalOpen(true)}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'live-screening-and-esp32' && (
                <LiveScreeningDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'results' && (
                <ResultsDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'pcos-intelligence' && (
                <PcosDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'longitudinal-trends' && (
                <LongitudinalTrendsView
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenFhirExport={() => setIsFhirModalOpen(true)}
                />
              )}

              {currentRoute === 'history-and-reports' && (
                <HistoryReportsView
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={handleOpenPdfReport}
                  onOpenFhirExport={() => setIsFhirModalOpen(true)}
                />
              )}

              {currentRoute === 'clinician-handoff' && (
                <ClinicianHandoffDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={handleOpenPdfReport}
                  onOpenDoctorLink={() => setIsDoctorLinkModalOpen(true)}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'calibration' && (
                <CalibrationScreen
                  onRouteChange={setCurrentRoute}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}
            </main>

            <Footer
              onExportFhir={() => setIsFhirModalOpen(true)}
              onGeneratePdf={() => handleOpenPdfReport('comprehensive')}
              onOpenScopeModal={() => setIsScopeModalOpen(true)}
              onRouteChange={setCurrentRoute}
            />
          </div>
        </div>
      ) : (
        /* ================= MOBILE PATIENT APP VIEW ================= */
        <div className="min-h-screen flex flex-col bg-[#f0f4fc] items-center">
          {/* Top Control Strip */}
          <div className="w-full bg-[#0e1c2f] text-white px-4 py-2 flex items-center justify-between text-xs sticky top-0 z-50 shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#89f5e7]">smartphone</span>
              <span className="font-bold">Mobile View Simulator</span>
              <span className="text-[11px] text-[#bac7e1] hidden sm:inline">• HERSCAN Handheld Companion</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDeviceMode('desktop')}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
                <span>Switch to Desktop View</span>
              </button>
            </div>
          </div>

          {/* Mobile Phone Mockup Chassis Container */}
          <div className="w-full max-w-[430px] min-h-[920px] bg-[#f8f9ff] shadow-2xl relative flex flex-col my-0 sm:my-4 sm:rounded-[36px] sm:border-8 sm:border-[#0e1c2f] overflow-hidden">
            {/* Mobile Header */}
            <MobileHeader
              currentRoute={currentRoute}
              onOpenScopeModal={() => setIsScopeModalOpen(true)}
              onOpenNotifications={() => setCurrentRoute('history-and-reports')}
            />

            {/* Mobile View Content */}
            <main className="flex-1 w-full px-4 pt-3 pb-24 overflow-y-auto">
              {currentRoute === 'overview' && (
                <OverviewMobile
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('summary')}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'live-screening-and-esp32' && (
                <LiveScreeningMobile
                  onRouteChange={setCurrentRoute}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'results' && (
                <ResultsMobile
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('summary')}
                  onOpenFhirExport={() => setIsFhirModalOpen(true)}
                />
              )}

              {currentRoute === 'pcos-intelligence' && (
                <PcosMobile
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'longitudinal-trends' && (
                <LongitudinalTrendsView
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={() => handleOpenPdfReport('comprehensive')}
                  onOpenFhirExport={() => setIsFhirModalOpen(true)}
                />
              )}

              {currentRoute === 'history-and-reports' && (
                <HistoryReportsView
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={handleOpenPdfReport}
                  onOpenFhirExport={() => setIsFhirModalOpen(true)}
                />
              )}

              {currentRoute === 'clinician-handoff' && (
                <ClinicianHandoffDesktop
                  onRouteChange={setCurrentRoute}
                  onOpenPdfReport={handleOpenPdfReport}
                  onOpenDoctorLink={() => setIsDoctorLinkModalOpen(true)}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}

              {currentRoute === 'calibration' && (
                <CalibrationScreen
                  onRouteChange={setCurrentRoute}
                  onOpenScopeModal={() => setIsScopeModalOpen(true)}
                />
              )}
            </main>

            {/* Mobile Fixed Bottom Navigation Bar */}
            <MobileNav
              currentRoute={currentRoute}
              onRouteChange={setCurrentRoute}
            />
          </div>
        </div>
      )}

      {/* Global Interactive Modals */}
      <ScopeLimitsModal
        isOpen={isScopeModalOpen}
        onClose={() => setIsScopeModalOpen(false)}
      />

      <PdfReportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        reportType={pdfReportType}
      />

      <FhirExportModal
        isOpen={isFhirModalOpen}
        onClose={() => setIsFhirModalOpen(false)}
      />

      <DoctorLinkModal
        isOpen={isDoctorLinkModalOpen}
        onClose={() => setIsDoctorLinkModalOpen(false)}
      />

      <CartridgeOrderModal
        isOpen={isCartridgeModalOpen}
        onClose={() => setIsCartridgeModalOpen(false)}
      />

      <EhrSyncModal
        isOpen={isEhrSyncModalOpen}
        onClose={() => setIsEhrSyncModalOpen(false)}
      />
    </div>
  );
}
