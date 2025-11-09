import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine); // <-- اینجا عوض شد
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 30,
        background: { color: '#0d0d0d' },
        particles: {
          number: { value: 80 }, // دسکتاپ
          color: { value: '#747474' },
          links: {
            enable: true,
            distance: 150,
            color: '#747474',
            opacity: 0.7,
            width: 1,
          },
          move: { enable: true, speed: 0.5 },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false
            }
          },
          opacity: {
            value: { min: 0.3, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: true
            }
          }
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: { enable: true, mode: ['grab', 'connect'], parallax: { enable: true, force: 5, smooth: 25 } },
            onClick: { enable: true, mode: 'push' }, // پیش‌فرض دسکتاپ
            resize: false
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 }
          },
          detectRetina: true
        },
        // tilt: { enable: true, value: 30, direction: 'clockwise', animation: { enable: true, speed: 5 } },
        
        // roll: { enable: true, speed: 5, darken: { enable: true, value: 25 } },
        // wobble: { enable: true, distance: 5, speed: { angle: 15, move: 5 } },
        // zIndex: { enable: true, value: 5, opacityRate: 0.5, sizeRate: 1, velocityRate: 1 },
        responsive: [
          {
            maxWidth: 768, // موبایل و تبلت
            options: {
              particles: {
                number: { value: 35 }
              },
              interactivity: {
                events: {
                  onClick: { enable: false },
                  onHover: { enable: false }
                }
              }
            }
          }
        ]
      }}
    />
  );
}

export default ParticlesBackground;
