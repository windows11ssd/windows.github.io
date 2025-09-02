import { Server, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Server,
      titleKey: 'hostingTitle',
      descKey: 'hostingDesc',
      color: 'text-primary'
    },
    {
      icon: Shield,
      titleKey: 'sslTitle',
      descKey: 'sslDesc',
      color: 'text-accent'
    },
    {
      icon: Globe,
      titleKey: 'domainsTitle',
      descKey: 'domainsDesc',
      color: 'text-primary'
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('servicesTitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-professional text-center group hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}