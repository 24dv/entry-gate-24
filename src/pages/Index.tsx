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
          className={`absolute top-8 right-8 px-8 py-2.5 text-background font-heading text-xs md:text-sm tracking-[0.3em] uppercase border-2 border-foreground hover:bg-foreground/10 transition-all duration-600 backdrop-blur-sm ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Contact
        </a>

        {/* Text logo in bottom left corner */}
        <img 
          src={textLogo} 
          alt="Branca" 
          className={`absolute bottom-8 left-8 h-24 md:h-30 w-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </>
  );
};

export default Index;
