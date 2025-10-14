import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';
import logo from '@/assets/branca-logo.png';
const Index = () => {
  const navigate = useNavigate();
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [enterVisible, setEnterVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // Logo fade in (1.5s)
    const logoTimer = setTimeout(() => setLogoVisible(true), 200);

    // Text appears after 0.5s delay (after logo starts)
    const textTimer = setTimeout(() => setTextVisible(true), 700);

    // Tagline appears next
    const taglineTimer = setTimeout(() => setTaglineVisible(true), 1200);

    // Enter link appears last
    const enterTimer = setTimeout(() => setEnterVisible(true), 1700);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(taglineTimer);
      clearTimeout(enterTimer);
    };
  }, []);
  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/experience');
    }, 800);
  };
  return <>
      <CustomCursor />
      <div className={`min-h-screen bg-background flex flex-col items-center justify-center px-6 transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        {/* Logo */}
        <div className={`mb-16 md:mb-20 transition-opacity duration-1500 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
          
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 md:space-y-12">
          {/* Brand Name */}
          <h1 className={`font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-foreground transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            BRANCA
          </h1>

          {/* Tagline */}
          <p className={`font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground transition-all duration-1000 delay-300 ${taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>A DIGITAL AGENCY FOR THOSE WHO DON'T FOLLOW.</p>

          {/* Contact Email */}
          <div className={`pt-8 md:pt-12 transition-all duration-1000 delay-500 ${enterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="mailto:info@branca.be" className="inline-block text-foreground hover:text-accent transition-colors duration-600 relative group">
              <Mail size={20} strokeWidth={1.5} />
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-accent transition-colors duration-600" />
            </a>
          </div>
        </div>
      </div>
    </>;
};
export default Index;