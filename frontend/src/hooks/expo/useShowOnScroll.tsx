import { useState, useEffect, useRef } from 'react';

const useShowOnScroll = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowAnimation(true);
        } else {
          setShowAnimation(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, showAnimation };
};

export default useShowOnScroll;
