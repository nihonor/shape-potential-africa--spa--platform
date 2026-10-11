import React, { useState } from 'react';
import { SAMPLE_CERTIFICATES, VerifiedCertificate } from '../data/spaData';
import { X, Search, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [certInput, setCertInput] = useState<string>('SPA-2026-AI-8492');
  const [certResult, setCertResult] = useState<VerifiedCertificate | null>(SAMPLE_CERTIFICATES['SPA-2026-AI-8492']);
  const [hasQueried, setHasQueried] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleLookup = (code: string) => {
    const clean = code.trim().toUpperCase();
    setCertInput(clean);
    setHasQueried(true);
    setCertResult(SAMPLE_CERTIFICATES[clean] || null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-xl w-full border border-stone-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-800" />
            <div>
              <h3 className="text-sm font-bold text-stone-950">
                Official Credential Verification Engine
              </h3>
              <p className="text-[11px] text-stone-500 font-mono">
                Endpoint: /verify/:certificate_code (FR-A2.12)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-md cursor-pointer"
            aria-label="Close verification modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 block">
              Enter Certificate Verification Code
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                <input
                  type="text"
                  value={certInput}
                  onChange={(e) => setCertInput(e.target.value)}
                  placeholder="e.g. SPA-2026-AI-8492"
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                />
              </div>
              <button
                onClick={() => handleLookup(certInput)}
                className="px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-md text-xs font-semibold cursor-pointer"
              >
                Verify
              </button>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-1">
              <span>Try Samples:</span>
              {Object.keys(SAMPLE_CERTIFICATES).map((code) => (
                <button
                  key={code}
                  onClick={() => handleLookup(code)}
                  className="px-1.5 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded font-mono text-[10px] cursor-pointer"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {/* Verification Record Output */}
          {hasQueried && (
            certResult ? (
              <div className="p-5 rounded-lg border-2 border-emerald-800/40 bg-emerald-50/20 space-y-4">
                
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>AUTHENTIC CREDENTIAL CONFIRMED</span>
                  </div>
                  <span className="font-mono text-xs text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200 font-semibold">
                    {certResult.grade}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Graduate Name</span>
                    <span className="font-bold text-sm text-stone-950">{certResult.recipientName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Curriculum & Pillar</span>
                    <span className="font-semibold text-stone-900">{certResult.program}</span>
                    <span className="text-emerald-800 block text-[11px] font-medium">{certResult.pillar}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-200/60">
                    <div>
                      <span className="text-stone-400 block text-[10px]">Date Issued</span>
                      <span className="font-medium text-stone-800">{certResult.completionDate}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px]">Authorizing Authority</span>
                      <span className="font-medium text-stone-800">{certResult.issuer}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-stone-400 font-mono border-t border-stone-200/60 pt-2 flex items-center justify-between">
                  <span>Cryptographic ID: {certResult.credentialId}</span>
                  <span className="text-emerald-800 font-bold">MinIO S3 Immutable</span>
                </div>

              </div>
            ) : (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-xs text-red-800">
                Record "{certInput}" not recognized in active platform credentials registry.
              </div>
            )
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-100 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
