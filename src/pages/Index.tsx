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
          className={`absolute top-8 right-8 px-6 py-2 text-background text-xs tracking-[0.3em] uppercase border border-black rounded-full hover:bg-foreground/10 transition-all duration-600 backdrop-blur-sm ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Contact
        </a>

        {/* Text logo in bottom left corner */}
        <img 
          src={textLogo} 
          alt="Branca" 
          className={`absolute bottom-8 left-8 h-16 md:h-24 lg:h-30 w-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </>
  );
};

export default Index;
