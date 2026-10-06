import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartridgeOrderModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [pack, setPack] = useState<'10' | '20'>('10');
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1c30]/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl bg-[#ffffff] p-6 shadow-2xl text-[#0b1c30] flex flex-col gap-4 border border-[#e5eeff]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#426086]">shopping_cart_checkout</span>
            <h3 className="text-lg font-bold text-[#0b1c30]">Order Replacement Cartridges</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[#44474c] hover:bg-[#eff4ff]">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {ordered ? (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#e5eeff] text-[#0c9488] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h4 className="font-bold text-[#0b1c30] text-base">Order Placed Successfully!</h4>
            <p className="text-xs text-[#44474c]">Ships via Priority Cold-Chain in 2 business days. Tracking sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#0b1c30] block">Current Status: 4 Cartridges Remaining</span>
                <span className="text-[#44474c]">Lot #CP-092 • Calibrated for ESP32-S3 Pro</span>
              </div>
              <span className="material-symbols-outlined text-[#0c9488] text-[20px]">inventory_2</span>
            </div>

            <div>
              <label className="font-bold text-[#0b1c30] block mb-1.5">Select Multiplex Cartridge Pack:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPack('10')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    pack === '10' ? 'border-[#0e1c2f] bg-[#eff4ff]' : 'border-[#e5eeff] bg-white'
                  }`}
                >
                  <span className="font-bold text-sm block">10-Pack</span>
                  <span className="text-[#64748b]">~2.5 Months Supply</span>
                  <span className="font-bold text-[#0b1c30] block mt-1">$48.00</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPack('20')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    pack === '20' ? 'border-[#0e1c2f] bg-[#eff4ff]' : 'border-[#e5eeff] bg-white'
                  }`}
                >
                  <span className="font-bold text-sm block">20-Pack (Value)</span>
                  <span className="text-[#64748b]">~5 Months Supply</span>
                  <span className="font-bold text-[#0b1c30] block mt-1">$84.00</span>
                </button>
              </div>
            </div>

            <div>
              <label className="font-bold text-[#0b1c30] block mb-1">Shipping Address:</label>
              <div className="p-2.5 rounded-xl bg-[#f8f9ff] border border-[#e5eeff] text-[#44474c]">
                Elena Vance • 742 Evergreen Terrace, Apt 4B • Portland, OR 97201
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[#64748b]">Ships in 2 business days</span>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#0e1c2f] text-white font-bold hover:bg-[#213145] transition-colors"
              >
                Confirm Order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
