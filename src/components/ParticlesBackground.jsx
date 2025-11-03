import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: '#0d0d0d' },
        particles: {
          number: { value: 80 }, // دسکتاپ
          color: { value: '#ff3f81' },
          links: {
            enable: true,
            distance: 150,
            color: '#ff3f81',
            opacity: 0.4,
            width: 1
          },
          move: { enable: true, speed: 1 },
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
          events: {
            onHover: { enable: true, mode: ['grab', 'connect'] },
            onClick: { enable: true, mode: 'push' }, // پیش‌فرض دسکتاپ
            resize: false
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 }
          }
        },
        responsive: [
          {
            maxWidth: 768, // موبایل و تبلت
            options: {
              particles: {
                number: { value: 30 } 
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
