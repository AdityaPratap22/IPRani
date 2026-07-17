"use client";

import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const accepted = sessionStorage.getItem("iprani_disclaimer_accepted");
    if (!accepted) {
      setIsOpen(true);
      // Disable scrolling on body
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem("iprani_disclaimer_accepted", "true");
    setIsOpen(false);
    // Re-enable scrolling on body
    document.body.style.overflow = "";
  };

  const handleDisagree = () => {
    // Redirect to external safe page
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 transform scale-100 flex flex-col max-h-[90vh]">
        {/* Header Banner */}
        <div className="bg-navy px-6 py-5 text-white">
          <h2 className="text-xl font-bold tracking-tight">Disclaimer &amp; Acknowledgment</h2>
          <p className="mt-0.5 text-xs text-slate-300 font-semibold">IP Rani (the &ldquo;Firm&rdquo;)</p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-navy">
            As per the rules of the Bar Council of India, law firms are not permitted to advertise or solicit work in any form or manner. By clicking &ldquo;I Agree&rdquo; below, the user acknowledges and confirms the following:
          </p>

          <ol className="list-decimal list-inside space-y-3 pl-1">
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from <strong className="text-navy">IP Rani (the &ldquo;Firm&rdquo;)</strong> or any of its members to solicit work through this website.
            </li>
            <li>
              The user wishes to gain more information about the Firm, its practice areas, and its members for their own personal information and use.
            </li>
            <li>
              The information about the Firm is provided to the user only on his/her specific request, and any information obtained or materials downloaded from this website is completely at the user&apos;s volition.
            </li>
            <li>
              Any transmission, receipt, or use of this site does not create any lawyer-client relationship between the Firm and the user.
            </li>
            <li>
              The information provided under this website is solely available for informational purposes and should not be interpreted as legal advice or solicitation.
            </li>
          </ol>

          <p className="mt-4 border-t border-slate-100 pt-3 text-slate-500 text-[11px]">
            The Firm is not liable for any consequence of any action taken by the user relying on the material or information provided on this website. For specific legal queries, users are advised to seek independent legal counsel.
          </p>
        </div>

        {/* Modal Actions */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
          <button
            onClick={handleDisagree}
            className="w-full sm:w-auto rounded-md border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            I Disagree / Exit
          </button>
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto rounded-md bg-brand-blue px-6 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-md focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            I Agree / Enter
          </button>
        </div>
      </div>
    </div>
  );
}
