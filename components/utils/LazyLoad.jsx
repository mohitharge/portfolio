// components/utils/LazyLoad.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazyLoad({ children, rootMargin = '100px 0px', triggerOnce = true }) {
  const { ref, inView } = useInView({
    triggerOnce,
    rootMargin,
  });

  return (
    <div ref={ref} style={{ minHeight: '1px' }}>
      {inView ? children : null}
    </div>
  );
}