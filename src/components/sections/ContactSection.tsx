import { Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { InquiryForm } from "@/components/shared/InquiryForm";

export const ContactSection = ({ compact = false }: { compact?: boolean }) => {
  return (
    <section className={`py-12 md:py-20 ${compact ? "bg-white" : "bg-slate-50"}`}>
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side: Info */}
          <div className="bg-secondary text-white rounded-2xl p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Contact Information
            </h2>
            <p className="mt-3 text-slate-300 max-w-md text-sm sm:text-base">
              Reach out directly or use the form. We are available 24/7 to assist you.
            </p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Our Office</div>
                  <div className="text-slate-400 text-xs sm:text-sm">{company.address}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <a href={`tel:${company.phoneRaw}`} className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm">{company.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href={`mailto:${company.email}`} className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm">{company.email}</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Form */}
          <InquiryForm />
        </div>
      </div>
    </section>
  );
};
