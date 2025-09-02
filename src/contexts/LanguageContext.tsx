import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    pricing: 'الأسعار',
    about: 'من نحن',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'خدمات السحابة الاحترافية لأعمالك',
    heroSubtitle: 'استضافة موثوقة وسريعة، شهادات SSL آمنة، ونطاقات مخصصة لتنمو معك',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    
    // Services
    servicesTitle: 'خدماتنا المتميزة',
    servicesSubtitle: 'حلول شاملة لجميع احتياجاتك التقنية',
    
    hostingTitle: 'استضافة المواقع',
    hostingDesc: 'استضافة سريعة وآمنة مع ضمان وقت تشغيل 99.9%',
    
    sslTitle: 'شهادات SSL',
    sslDesc: 'حماية متقدمة لموقعك وبيانات عملائك',
    
    domainsTitle: 'النطاقات',
    domainsDesc: 'تسجيل وإدارة النطاقات بسهولة تامة',
    
    // Pricing
    pricingTitle: 'خطط الأسعار',
    pricingSubtitle: 'اختر الخطة المناسبة لاحتياجاتك',
    
    basicPlan: 'الخطة الأساسية',
    proPlan: 'الخطة الاحترافية', 
    enterprisePlan: 'خطة المؤسسات',
    
    monthly: 'شهرياً',
    choosePlan: 'اختر الخطة',
    
    // Features
    storage: 'مساحة تخزين',
    bandwidth: 'عرض النطاق',
    ssl: 'شهادة SSL مجانية',
    support: 'دعم فني',
    
    // Footer
    footerAbout: 'كلاودي هي شركة رائدة في تقديم خدمات السحابة الاحترافية',
    footerServices: 'الخدمات',
    footerSupport: 'الدعم',
    footerLegal: 'قانوني',
    
    // Theme
    darkMode: 'الوضع المظلم',
    lightMode: 'الوضع الفاتح',
    
    // Language
    arabic: 'العربية',
    english: 'English'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional Cloud Services for Your Business',
    heroSubtitle: 'Reliable and fast hosting, secure SSL certificates, and custom domains that grow with you',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    servicesTitle: 'Our Premium Services',
    servicesSubtitle: 'Comprehensive solutions for all your technical needs',
    
    hostingTitle: 'Web Hosting',
    hostingDesc: 'Fast and secure hosting with 99.9% uptime guarantee',
    
    sslTitle: 'SSL Certificates',
    sslDesc: 'Advanced protection for your website and customer data',
    
    domainsTitle: 'Domains',
    domainsDesc: 'Easy domain registration and management',
    
    // Pricing
    pricingTitle: 'Pricing Plans',
    pricingSubtitle: 'Choose the right plan for your needs',
    
    basicPlan: 'Basic Plan',
    proPlan: 'Pro Plan',
    enterprisePlan: 'Enterprise Plan',
    
    monthly: 'per month',
    choosePlan: 'Choose Plan',
    
    // Features
    storage: 'Storage',
    bandwidth: 'Bandwidth',
    ssl: 'Free SSL Certificate',
    support: 'Technical Support',
    
    // Footer
    footerAbout: 'Cloudy is a leading provider of professional cloud services',
    footerServices: 'Services',
    footerSupport: 'Support',
    footerLegal: 'Legal',
    
    // Theme
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    
    // Language
    arabic: 'العربية',
    english: 'English'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    dir: language === 'ar' ? 'rtl' as const : 'ltr' as const
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}