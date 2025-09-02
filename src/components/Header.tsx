import { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import cloudyLogo from '@/assets/cloudy-logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'pricing', href: '#pricing' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={cloudyLogo} alt="Cloudy" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navigation.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t(key)}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* CTA Button */}
            <Button className="btn-hero">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            {/* Mobile Controls */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              <Globe className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(key)}
                </a>
              ))}
              <Button className="btn-hero mt-4 w-full">
                {t('getStarted')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}