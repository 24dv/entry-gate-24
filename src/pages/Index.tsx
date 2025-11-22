import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
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
      <CustomCursor />
      <div 
        className="min-h-screen relative"
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
          className={`absolute top-8 left-8 w-16 md:w-20 h-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Contact button in top right corner */}
        <a
          href="mailto:info@branca.be"
          className={`absolute top-8 right-8 px-6 md:px-8 py-3 md:py-4 border border-foreground text-foreground text-sm md:text-base tracking-[0.2em] uppercase font-body rounded-full hover:bg-foreground hover:text-background transition-all duration-600 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transform hover:-translate-y-0.5 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Contact
        </a>

        {/* Text logo in bottom left corner */}
        <img 
          src={textLogo} 
          alt="Branca" 
          className={`absolute bottom-8 left-8 h-8 md:h-10 w-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </>
  );
};

export default Index;
