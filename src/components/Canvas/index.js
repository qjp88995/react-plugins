import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { Stage, Rect, Circle } from './event';

const Canvas = props => {
  const ref = useRef(null);
  const animationId = useRef(null);

  useEffect(() => {
    if (ref) {
      const stage = new Stage(ref.current);
      const rect = new Rect({ fillStyle: 'red' });
      const circle = new Circle({ fillStyle: 'blue' });
      stage.add(rect);
      stage.add(circle);
      stage.addEventListener('click', rect, (e, shape) => {
        shape.options.fillStyle = 'black';
      });
      const draw = () => {
        const canvas_rect = ref.current.getBoundingClientRect();
        const { width, height } = canvas_rect;
        ref.current.width = width;
        ref.current.height = height;
        rect.options.x = 0;
        rect.options.y = 0;
        rect.options.width = width / 2;
        rect.options.height = height / 2;
        circle.options.x = width / 4 * 3;
        circle.options.y = height / 4 * 3;
        circle.options.radius = 100;
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