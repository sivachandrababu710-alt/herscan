export type ViewRoute = 
  | 'overview'
  | 'live-screening-and-esp32'
  | 'results'
  | 'pcos-intelligence'
  | 'longitudinal-trends'
  | 'history-and-reports'
  | 'clinician-handoff'
  | 'calibration';

export type DeviceMode = 'desktop' | 'mobile';

export interface Biomarker {
  id: string;
  name: string;
  category: 'metabolic' | 'hematology' | 'endocrine' | 'nutrition' | 'inflammation';
  value: number;
  unit: string;
  targetRange: string;
  status: 'normal' | 'optimal' | 'attention' | 'elevated';
  statusLabel: string;
  changeVsBaseline: string;
  description: string;
  refMin?: number;
  refMax?: number;
}

export interface ScreeningSession {
  id: string;
  date: string;
  time: string;
  fastingHours: number;
  cycleDay: number;
  cyclePhase: string;
  chipIntegrity: number;
  cartridgeLot: string;
  firmwareVersion: string;
  biomarkers: {
    glucose: number; // mg/dL
    hemoglobin: number; // g/dL
    lhFshRatio: number;
    lh: number; // mIU/mL
    fsh: number; // mIU/mL
    hsCrp: number; // mg/L
    vitaminD3: number; // ng/mL
    vitaminB12: number; // pg/mL
    ferritin: number; // ng/mL
    tgHdlRatio: number;
  };
  pcosRiskScore: number;
  pcosRiskBand: 'Low' | 'Moderate' | 'Elevated';
}

export interface HardwareTelemetry {
  bleConnected: boolean;
  batteryPct: number;
  rssiDbm: number;
  cartridgeSlotReady: boolean;
  cartridgeLot: string;
  cartridgesLeft: number;
  chamberTempC: number;
  workingPotentialV: number;
  microfluidicFillUl: number;
  electrodeImpedanceKohm: number;
  opticalMatrixCalibrated: boolean;
  driftPct: number;
}
