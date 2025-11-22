import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import monogramLogo from '@/assets/branca-monogram.png';
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
        {/* Logo in top left corner */}
        <img 
          src={monogramLogo} 
          alt="Branca" 
          className={`absolute top-8 left-8 w-16 md:w-20 h-auto transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </>
  );
};

export default Index;
