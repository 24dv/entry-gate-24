import { useEffect, useState } from 'react';
import monogramLogo from '@/assets/branca-monogram.png';
import textLogo from '@/assets/branca-text-logo.png';
import backgroundImage from '@/assets/background-street.jpg';

const Index = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setLogoVisible(true), 200);
    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <>
      <div 
        className="h-screen w-full fixed inset-0 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Monogram logo in top left corner */}
        <img 
          src={monogramLogo} 
          alt="Branca" 
          className={`absolute top-4 left-4 md:top-8 md:left-8 w-12 md:w-16 lg:w-20 h-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Contact button in top right corner */}
        <a
          href="mailto:info@branca.be"
          className={`absolute top-4 right-4 md:top-8 md:right-8 px-4 md:px-6 py-1.5 md:py-2 text-background text-[9px] md:text-[10px] tracking-[0.15em] uppercase border border-black rounded-full hover:bg-foreground/10 transition-all duration-600 backdrop-blur-sm ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Contact
        </a>

        {/* Text logo in bottom left corner */}
        <img 
          src={textLogo} 
          alt="Branca" 
          className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 h-12 md:h-16 lg:h-24 xl:h-30 w-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </>
  );
};

export default Index;
