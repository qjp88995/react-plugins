import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';

const Canvas = props => {
  const ref = useRef(null);
  const animationId = useRef(null);

  useEffect(() => {
    if (ref) {
      const ctx = ref.current.getContext('2d');
      const draw = () => {
        ctx.save();
        const canvas_rect = ref.current.getBoundingClientRect();
        const { width, height } = canvas_rect;
        ref.current.width = width;
        ref.current.height = height;
        ctx.fillStyle = '#ccc';
        ctx.fillRect(0, 0, width / 2, height / 2);
        ctx.restore();
        animationId.current = requestAnimationFrame(draw);
      }
      draw();
      console.log(ctx.getImageData(0, 0, 1, 1));
      return () => {
        if (animationId.current) cancelAnimationFrame(animationId.current)
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={ref} style={{ width: '100%', height: '100%' }} /> 
    </div>
  );
}

export default Canvas;