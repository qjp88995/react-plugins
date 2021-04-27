import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { Stage, Rect, Circle } from './event';

const Canvas = props => {
  const ref = useRef(null);
  const animationId = useRef(null);

  useEffect(() => {
    if (ref) {
      const stage = new Stage(ref.current);
      const space = new Rect({ x: 0, y: 0 });
      stage.add(space);
      const sun = new Circle({ fillStyle: '#FF4500', radius: 30, shadowColor: 'yellow', shadowBlur: 20 });
      stage.add(sun);
      const track = new Circle({ fillStyle: null, strokeStyle: 'rgba(255, 255, 255, 0.5)', lineWidth: 1, radius: 200 });
      stage.add(track);
      const earth = new Circle({ fillStyle: 'green', radius: 15, shadowColor: 'green', shadowBlur: 10 });
      stage.add(earth);
      let angle = 0;
      let perAngle = 1;
      stage.addEventListener('mouseOver', earth, (e, shape) => {
        perAngle = 0;
      });
      stage.addEventListener('mouseOut', earth, (e, shape) => {
        perAngle = 1;
      });
      const draw = () => {
        const canvas_rect = ref.current.getBoundingClientRect();
        const { width, height } = canvas_rect;
        // const bgColor = stage.ctx.createLinearGradient(0, 0, width, height);
        // bgColor.addColorStop(0, "rgba(22, 22, 5, 1)");
        // bgColor.addColorStop(1, "rgba(45, 230, 7, 1)");
        ref.current.width = width;
        ref.current.height = height;
        space.options.fillStyle = 'rgba(22, 22, 5, 1)';
        space.options.width = width;
        space.options.height = height;
        sun.options.x = width / 2;
        sun.options.y = height / 2;
        track.options.x = width / 2;
        track.options.y = height / 2;
        earth.options.x = width / 2 + 200 * Math.cos(angle * Math.PI / 180);
        earth.options.y = height / 2 + 200 * Math.sin(angle * Math.PI / 180);
        angle += perAngle;
        angle = angle > 360 ? 0 : angle;
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