import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  className?: string;
  config?: {
    width?: number;
    height?: number;
    scale?: number;
    opacity?: number;
    color?: string;
  };
}

const Globe: React.FC<GlobeProps> = ({ 
  className = '',
  config = {
    width: 1250,
    height: 1250,
    scale: 1,
    opacity: 1,
    color: '#ffffff',
  }
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phi = useRef(0);
  let width = 0;

  useEffect(() => {
    if (!canvasRef.current) return;

    width = config.width || 1250;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: config.height || 1250 * 2,
      scale: config.scale || 1,
      opacity: config.opacity || 1,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [29/255, 68/255, 195/255], // FinWage primary color
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [48.8566, 2.3522], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi.current;
        if (pointerInteracting.current !== null) {
          // User is interacting with the globe
          state.theta = (pointerInteracting.current - width * 2) / 800;
        }
      },
    });

    return () => {
      globe.destroy();
    };
  }, [config]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const clientX = e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
      if (pointerInteracting.current === clientX) return;
      const delta = clientX - pointerInteracting.current;
      pointerInteracting.current = clientX;
      phi.current += delta / 8;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        className="w-full h-full"
      />
    </div>
  );
};

export default Globe;