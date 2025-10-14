import { useEffect, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-background flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center space-y-8">
        <h1 className="font-heading text-6xl md:text-8xl font-light tracking-wider text-foreground">
          Coming Soon
        </h1>
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
          The experience awaits
        </p>
      </div>
    </div>
  );
};

export default Experience;
