import { useState, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789()[]{}=_>.,\'\"';

export const useTextScramble = (texts: string[], interval = 2400) => {
  const [display, setDisplay] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scramble = useCallback((target: string) => {
    let frame = 0;
    const maxFrames = target.length * 2;
    const locked = new Array(target.length).fill(false);
    
    const tick = () => {
      frame++;
      const chars = target.split('').map((char, i) => {
        if (locked[i]) return char;
        // Lock ~0.6 chars per frame
        if (frame > i * 1.7) {
          locked[i] = true;
          return char;
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });
      setDisplay(chars.join(''));
      
      if (frame < maxFrames) {
        setTimeout(tick, 36);
      } else {
        setDisplay(target);
      }
    };
    tick();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (currentIndex + 1) % texts.length;
      setCurrentIndex(next);
      scramble(texts[next]);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, texts, interval, scramble]);

  return display;
};
