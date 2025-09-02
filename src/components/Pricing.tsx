import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: 'basicPlan',
      price: '$9.99',
      features: [
        '10 GB ' + t('storage'),
        '100 GB ' + t('bandwidth'),
        t('ssl'),
        '24/7 ' + t('support')
      ],
      popular: false
    },
    {
      nameKey: 'proPlan',
      price: '$19.99',
      features: [
        '50 GB ' + t('storage'),
        '500 GB ' + t('bandwidth'),
        t('ssl'),
        '24/7 ' + t('support'),
        'Premium Support'
      ],
      popular: true
    },
    {
      nameKey: 'enterprisePlan',
      price: '$49.99',
      features: [
        '200 GB ' + t('storage'),
        'Unlimited ' + t('bandwidth'),
        t('ssl'),
        '24/7 ' + t('support'),
        'Premium Support',
        'Dedicated Support'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('pricingTitle')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-pricing relative ${
                plan.popular
                  ? 'ring-2 ring-primary shadow-glow scale-105'
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t(plan.nameKey)}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    /{t('monthly')}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular ? 'btn-hero' : 'btn-outline-hero'
                }`}
              >
                {t('choosePlan')}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}