import { useState, useEffect } from 'react';
import '@/app/styles/loader.scss';

const Loading: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    // Simulasi proses fetching data atau loading
    const timer = setTimeout(() => {
      setFadeOut(true); // Mulai proses fade-out
      setTimeout(() => {
        setLoading(false); // Matikan loader setelah fade-out selesai
      }, 1000); // Durasi fade-out sesuai dengan CSS
    }, 3000);

    // Cleanup timer jika komponen unmount
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={`load ${fadeOut ? 'fade-out' : ''}`}>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Loading;
