import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formType, setFormType] = useState<'institutional' | 'beneficiary'>('institutional');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'Rwanda',
    organizationName: '',
    staffSize: '10-50',
    selectedPillar: 'Leadership',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (formType === 'institutional' && !formData.organizationName.trim()) {
      errs.organizationName = 'Organization / Ministry name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            Initiate Engagement
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Connect with the SHAPE Potential Africa Platform.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Register your institution for executive coaching and leadership capacity modules, or enroll in an upcoming beneficiary cohort across the five pillars.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 max-w-3xl shadow-xs">
          
          {/* Form Switcher */}
          <div className="flex gap-2 p-1 bg-stone-100 rounded-lg max-w-fit mb-8">
            <button
              type="button"
              onClick={() => { setFormType('institutional'); setSubmitted(false); }}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                formType === 'institutional'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Institutional Booking / Ministry
            </button>
            <button
              type="button"
              onClick={() => { setFormType('beneficiary'); setSubmitted(false); }}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                formType === 'beneficiary'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Beneficiary / Trainee Cohort
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-emerald-50/60 rounded-xl border border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-950">
                {formType === 'institutional' ? 'Booking Request Submitted' : 'Registration Logged Successfully'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {formType === 'institutional'
                  ? `Thank you, ${formData.fullName}. Your institutional inquiry for ${formData.organizationName} has been routed to the Leadership & Capacity Building Pillar Representative. You will receive an automated needs diagnostic link via email.`
                  : `Welcome, ${formData.fullName}. Your registration profile has been queued for the next ${formData.selectedPillar} cohort intake. A confirmation has been sent to ${formData.email}.`}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      country: 'Rwanda',
                      organizationName: '',
                      staffSize: '10-50',
                      selectedPillar: 'Leadership',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="e.g. Dr. Kezia Ndayishimiye"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="kezia@organization.org"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  />
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+250 788 123 456"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>

                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Country / Regional Hub
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  >
                    <option value="Rwanda">Rwanda (Kigali Hub)</option>
                    <option value="Kenya">Kenya (Nairobi Hub)</option>
                    <option value="Ghana">Ghana (Accra Hub)</option>
                    <option value="Nigeria">Nigeria (Lagos)</option>
                    <option value="DR Congo">DR Congo (Kinshasa Hub)</option>
                    <option value="Uganda">Uganda (Kampala)</option>
                    <option value="Tanzania">Tanzania (Dar es Salaam)</option>
                    <option value="Other">Other African Nation</option>
                  </select>
                </div>

              </div>

              {/* Conditional Institutional Fields */}
              {formType === 'institutional' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-stone-100">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Organization / Ministry Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                      placeholder="e.g. National Agriculture Export Board"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                    />
                    {errors.organizationName && <p className="text-[11px] text-red-600">{errors.organizationName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700 block">
                      Approximate Staff / Cohort Size
                    </label>
                    <select
                      value={formData.staffSize}
                      onChange={(e) => setFormData({...formData, staffSize: e.target.value})}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                    >
                      <option value="1-25">Up to 25 Staff (Standard Cohort)</option>
                      <option value="26-60">26 to 60 Staff (Advanced Accelerator)</option>
                      <option value="60+">60+ Staff (Enterprise / Parastatal)</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 pt-2 border-t border-stone-100">
                  <label className="text-xs font-semibold text-stone-700 block">
                    Preferred Thematic Pillar
                  </label>
                  <select
                    value={formData.selectedPillar}
                    onChange={(e) => setFormData({...formData, selectedPillar: e.target.value})}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  >
                    <option value="Technology">Technology & Digital Skills (AI, Coding & Robotics)</option>
                    <option value="Education">Education & Teacher Capacity Building</option>
                    <option value="Leadership">Leadership & Executive Governance</option>
                    <option value="Young Startups">Young Startups & Pitch Sandbox</option>
                    <option value="Agriculture">Smart Agriculture & Agri-Market Access</option>
                  </select>
                </div>
              )}

              {/* Message Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 block">
                  Engagement Goals / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Outline key institutional objectives or programmatic questions..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md text-stone-900 focus:outline-hidden focus:border-emerald-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {formType === 'institutional' ? 'Submit Institutional Request' : 'Submit Cohort Registration'}
                  </span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
