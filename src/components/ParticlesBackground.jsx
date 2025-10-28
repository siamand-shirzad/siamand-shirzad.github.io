import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      // بارگذاری کامل پلاگین‌ها
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null; // تا وقتی لود نشده چیزی نشون نده
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: '#141414' },
        particles: {
          number: { value: 80 },
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
            value: { min: 0.3, max: 0.5 }, // محدوده شفافیت
            animation: {
              enable: true,
              speed: 1, // سرعت تغییر شفافیت
              minimumValue: 0.3,
              sync: true // هر ذره مستقل چشمک بزنه
            }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "connect"] },
            onClick: { enable: true, mode: 'push' },
            resize: false
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 }
          }
        }
      }}
    />
  );
}

export default ParticlesBackground;
