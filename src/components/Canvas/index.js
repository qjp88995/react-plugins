import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { Stage, Rect, Circle } from './event';

const Canvas = props => {
  const ref = useRef(null);
  const animationId = useRef(null);

  useEffect(() => {
    if (ref) {
      const stage = new Stage(ref.current);
      const rect = new Rect({ fillStyle: '#ccc' });
      const circle = new Circle({ fillStyle: 'red' });
      stage.add(rect);
      stage.add(circle);
      stage.addEventListener('mouseOver', circle, (e, shape) => {
        shape.options.shadowBlur = 20;
      });
      stage.addEventListener('mouseOut', circle, (e, shape) => {
        shape.options.shadowBlur = 0;
      });
      const draw = () => {
        const canvas_rect = ref.current.getBoundingClientRect();
        const { width, height } = canvas_rect;
        ref.current.width = width;
        ref.current.height = height;
        const rectWidth = 200, rectHeight = 200;
        rect.options.x = (width - rectWidth) / 2;
        rect.options.y = (height - rectHeight) / 2;
        rect.options.width = rectWidth;
        rect.options.height = rectHeight;
        circle.options.x = width / 2;
        circle.options.y = height / 2;
        circle.options.radius = 60;
        stage.resize(width, height);
        stage.render();
        animationId.current = requestAnimationFrame(draw);
      }
      animationId.current = requestAnimationFrame(draw);
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