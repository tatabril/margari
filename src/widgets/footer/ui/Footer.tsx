import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/shared/ui/separator";
import { siteConfig } from "@/shared/config";
import { servicesMock } from "@/entities/service";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-xl leading-none">
                M
              </div>
              <span className="text-xl font-bold tracking-tight">
                {siteConfig.brandLatin}
              </span>
            </div>
            <p className="text-background/60 max-w-sm mb-8">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <div
                  className="w-4 h-4 bg-current"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <div
                  className="w-4 h-4 bg-current"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">
              Contact
            </h4>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1" />
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wider uppercase text-background/50">
              Collections
            </h4>
            <ul className="space-y-3 text-background/80">
              {servicesMock.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-background/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandLatin} Windows.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
