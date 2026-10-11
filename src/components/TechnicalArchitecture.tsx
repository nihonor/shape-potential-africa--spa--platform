import React, { useState } from 'react';
import { 
  Server, 
  WifiOff, 
  ShieldCheck, 
  Layers, 
  Database, 
  HardDrive, 
  Cpu, 
  Lock,
  ArrowRight
} from 'lucide-react';

export const TechnicalArchitecture: React.FC = () => {
  const [activeArchTab, setActiveArchTab] = useState<'stack' | 'lowBandwidth' | 'security'>('stack');

  return (
    <section id="architecture" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            Engineering & System Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Engineered for High Governance & African Network Realities.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            The platform combines a gateway-fronted polyglot microservice backend with an offline-first PWA frontend, guaranteeing reliability even during intermittent power and costly mobile data constraints.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1 bg-stone-200/70 rounded-lg max-w-fit">
          <button
            onClick={() => setActiveArchTab('stack')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeArchTab === 'stack'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            Topology & Component Stack
          </button>
          <button
            onClick={() => setActiveArchTab('lowBandwidth')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeArchTab === 'lowBandwidth'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <WifiOff className="w-3.5 h-3.5 text-emerald-800" />
            <span>Low-Connectivity & Offline PWA (NFR-BW)</span>
          </button>
          <button
            onClick={() => setActiveArchTab('security')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeArchTab === 'security'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-amber-800" />
            <span>Security & PostgreSQL RLS (NFR-SEC)</span>
          </button>
        </div>

        {/* Tab 1: Component Topology */}
        {activeArchTab === 'stack' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>FRONTEND LAYER</span>
                <span className="text-emerald-800 font-semibold">SSR + PWA</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">Next.js (React) + Tailwind CSS</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Single deployable frontend serving both the public marketing/training catalogue and authenticated dashboards. Registered as installable PWA with Service Worker form caching.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Bundle Cap: &lt; 250KB gzip
              </div>
            </div>

            {/* Ingress Gateway */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>INGRESS GATEWAY</span>
                <span className="text-emerald-800 font-semibold">TLS 1.2+</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">Nginx Reverse Proxy & Gateway</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Terminates SSL, routes /api/core/* to NestJS and /api/ai/* to FastAPI. Enforces IP/User rate limits, Brotli compression, and signed-URL media proxying.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Routing: Core, AI, Media
              </div>
            </div>

            {/* Core Microservice */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>TRANSACTIONAL CORE</span>
                <span className="text-emerald-800 font-semibold">NestJS</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">NestJS (Node.js) Microservice</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Manages identity, RBAC guards, LMS course structure, objective auto-grading, Pitch Sandbox locking, and Agri-Market listing threads.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Event Dispatch: Redis BullMQ
              </div>
            </div>

            {/* AI & Analytics Microservice */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>AI & ANALYTICS</span>
                <span className="text-emerald-800 font-semibold">FastAPI</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">FastAPI (Python) Microservice</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Computes automated skill-tracking vectors, routes pitches to judges based on conflict exclusions, and aggregates nightly M&E rollups for Board reviews.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Internal endpoints only
              </div>
            </div>

            {/* Database */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>PERSISTENCE</span>
                <span className="text-emerald-800 font-semibold">PostgreSQL</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">PostgreSQL with Row-Level Security</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Enforces pillar data isolation directly at SQL level. Schemas separate identity, LMS, pitch, agrimarket, governance, and M&E domains with hot-standby read replication.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Backup: Nightly + WAL Archiving
              </div>
            </div>

            {/* Storage & Cache */}
            <div className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>OBJECTS & CACHING</span>
                <span className="text-emerald-800 font-semibold">MinIO + Redis</span>
              </div>
              <h4 className="text-base font-bold text-stone-950">MinIO S3 & Edge Redis Nodes</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Pre-signed direct client uploads for pitch decks with quarantine scanning. Redis Sorted Sets manage real-time leaderboards and distributed job queues.
              </p>
              <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100">
                Regional edge read replicas
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Low-Bandwidth & Offline (NFR-BW) */}
        {activeArchTab === 'lowBandwidth' && (
          <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-emerald-900 uppercase block mb-1">
                NFR-BW COMPLIANCE · BANDWIDTH RESILIENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                Designed for African Connectivity Constraints
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Intermittent cellular coverage and high per-megabyte costs cannot be barriers to education, funding, or market access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-lg bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold font-mono text-xs">
                  01
                </div>
                <h4 className="text-sm font-bold text-stone-950">Offline IndexedDB Queue</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The Service Worker intercepts form submissions for profiles, quiz answers, and agri listings during connection loss, persisting them in browser storage and auto-replaying them upon reconnection.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-800 font-bold font-mono text-xs">
                  02
                </div>
                <h4 className="text-sm font-bold text-stone-950">Adaptive Video (HLS 360p–720p)</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Training videos stream via adaptive HTTP Live Streaming, defaulting to 360p on 2G/3G connections. An optional "Data Saver" switch halts autoplay and requires tap-to-load.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-8 h-8 rounded bg-stone-200 flex items-center justify-center text-stone-800 font-bold font-mono text-xs">
                  03
                </div>
                <h4 className="text-sm font-bold text-stone-950">&lt; 250KB Initial Bundle</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The landing experience loads in under 1.2 seconds on simulated Slow 4G. Heavy internal administrative consoles are lazy-loaded only after authenticated staff login.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Security & PostgreSQL RLS */}
        {activeArchTab === 'security' && (
          <div className="bg-stone-900 text-stone-100 rounded-xl border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-md space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase block mb-1">
                NFR-SEC & FR-B1 SECURITY ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Multi-Layer Defense & Strict Data Isolation
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Enforcing organizational privacy, conflict-free judging, and immutable financial and M&E audit logging.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-lg bg-stone-800/80 border border-stone-700 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                  <Lock className="w-4 h-4" />
                  <span>POSTGRESQL ROW-LEVEL SECURITY (RLS)</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  A Technology Pillar Representative cannot view Agriculture listings or Startups pitch decks even if they manipulate client-side code. Isolation is enforced at the database engine level by checking staff <code className="text-amber-300">pillar_id</code> on every query.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-stone-800/80 border border-stone-700 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>IMMUTABLE AUDIT LOG & QUARANTINE</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Every cross-pillar executive action is appended to an unalterable audit log. Uploaded slide decks and business plans land in a MinIO quarantine prefix and are malware-scanned before promotion.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
