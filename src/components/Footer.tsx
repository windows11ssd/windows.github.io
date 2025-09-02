import { useLanguage } from '@/contexts/LanguageContext';
import cloudyLogo from '@/assets/cloudy-logo.png';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      'Web Hosting',
      'SSL Certificates',
      'Domain Registration',
      'Cloud Storage'
    ],
    support: [
      'Help Center',
      'Documentation',
      'Contact Support',
      'System Status'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance'
    ]
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={cloudyLogo} alt="Cloudy" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('footerAbout')}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t('footerServices')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t('footerSupport')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t('footerLegal')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Cloudy. All rights reserved.
            </p>
            <p className="text-muted-foreground text-center md:text-right">
              Built with ❤️ for the cloud
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}