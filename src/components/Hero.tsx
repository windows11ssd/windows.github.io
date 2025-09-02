import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{t('heroTitle')}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-8 py-4">
              {t('getStarted')}
              <ArrowIcon className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="btn-outline-hero text-lg px-8 py-4">
              {t('learnMore')}
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
    </section>
  );
}