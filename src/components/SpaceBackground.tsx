import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const container = starsRef.current;
    const numberOfStars = 200;

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'absolute w-0.5 h-0.5 bg-foreground/70 rounded-full';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      container.appendChild(star);
    }

    // Create shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'absolute w-2 h-2 rounded-full';
      shootingStar.style.background = 'linear-gradient(150deg, hsl(var(--primary)), white)';
      shootingStar.style.boxShadow = '0 0 10px hsl(var(--primary))';
      shootingStar.style.left = `${Math.random() * 50}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.animation = 'shoot 3s linear forwards';
      container.appendChild(shootingStar);

      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.remove();
        }
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(shootingStarInterval);
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-muted/30 via-background to-background" />
      <div ref={starsRef} className="fixed inset-0 -z-10 overflow-hidden" />
    </>
  );
};

export default SpaceBackground;
