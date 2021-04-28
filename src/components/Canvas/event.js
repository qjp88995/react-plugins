class IdsManager {
  constructor() {
    this.poor = new Set();
  }

  generate = () => {
    return new Array(3).fill(0).map(() => Math.round(Math.random() * 255)).concat(255).join('-');
  }

  create = () => {
    let id = this.generate();
    while (this.poor.has(id)) {
      id = this.generate();
    }
    this.poor.add(id);
    return id;
  }

  remove = id => {
    if (id) this.poor.delete(id);
  }

  static idToRgba = id => {
    return id.split('-').map(item => parseInt(item));
  }

  static rgbaToId = rgba => {
    return rgba.join('-');
  }
}

export class EventsManager {
  constructor() {
    this.list = new Map();
  }

  add = (name, shape, fn) => {
    if (name && shape.id) this.list.set(`${shape.id}.${name}`, fn);
  }

  remove = (name, shape) => {
    if (name && shape.id) this.list.delete(`${shape.id}.${name}`);
  }

  removeAll = shape => {
    if (shape.id) Array.from(this.list.keys()).forEach(item => {
      if (item.startsWith(shape.id)) this.list.delete(item);
    });
  }

  clear = () => {
    this.list.clear();
  }
}

export class Stage {
  constructor(canvas) {
    this.canvas = canvas;
    if (window.OffscreenCanvas) {
      this.oCanvas = new window.OffscreenCanvas(this.canvas.width, this.canvas.height);
    } else {
      this.oCanvas = document.createElement('canvas');
      this.oCanvas.width = this.canvas.width;
      this.oCanvas.height = this.canvas.height;
    }
    this.ctx = this.canvas.getContext('2d');
    this.oCtx = this.oCanvas.getContext('2d');
    this.shapes = new Set();
    this.idsManager = new IdsManager();
    this.eventsManager = new EventsManager(this.oCtx);
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('mousedown', this.onMouseDown);
    this.canvas.addEventListener('mouseup', this.onMouseUp);
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('mouseout', this.onMouseOut);
  }

  add = shape => {
    const id = this.idsManager.create();
    this.shapes.add(shape);
    shape.id = id;
  }

  remove = shape => {
    this.shapes.delete(shape);
    this.idsManager.remove(shape.id);
  }

  resize = (width, height) => {
    this.canvas.width = width;
    this.canvas.height = height;
    this.oCanvas.width = width;
    this.oCanvas.height = height;
  }

  render = () => {
    Array.from(this.shapes).forEach(item => {
      item.render(this.ctx, this.oCtx);
    });
  }

  addEventListener = (name, shape, fn) => {
    this.eventsManager.add(name, shape, e => fn(e, shape));
  }

  removeEventListener = (name, shape) => {
    this.eventsManager.remove(name, shape);
  }

  getEventId = e => {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    const rgba = this.oCtx.getImageData(x, y, 1, 1).data;
    return IdsManager.rgbaToId(rgba);
  }

  onClick = e => {
    const id = this.getEventId(e);
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      if (item === `${id}.click`) this.eventsManager.list.get(item)(e);
    });
  }

  onMouseDown = e => {
    if (e.target.setCapture) e.target.setCapture();
    const id = this.getEventId(e);
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      if (item === `${id}.mouseDown`) this.eventsManager.list.get(item)(e);
    });
  }
  
  onMouseUp = e => {
    const id = this.getEventId(e);
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      if (item === `${id}.mouseUp`) this.eventsManager.list.get(item)(e);
    });
  }

  onMouseMove = e => {
    const id = this.getEventId(e);
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      const inEventNames = ['mouseMove', 'mouseOver', 'mouseEnter'];
      const outEventNames = ['mouseOut', 'mouseLeave', 'mouseUp'];
      const eventName = item.split('.').pop('.');
      if (item.startsWith(id)) {
        if (inEventNames.includes(eventName)) this.eventsManager.list.get(item)(e);
      } else {
        if (outEventNames.includes(eventName)) this.eventsManager.list.get(item)(e);
      }
    });
  }

  onMouseOut = e => {
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      const outEventNames = ['mouseOut', 'mouseLeave', 'mouseUp'];
      const eventName = item.split('.').pop('.');
      if (outEventNames.includes(eventName)) this.eventsManager.list.get(item)(e);
    });
  }
}

class Shape {
  constructor(options) {
    this.id = null;
    this.draw = null;
    this.options = {
      x: 0,
      y: 0,
      fillStyle: "#000",
      strokeStyle: "#000",
      lineWidth: 0,
      globalCompositeOperation: "source-over",
      shadowColor: "#000",
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      ...options,
    };
  }

  setOptions = options => {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  render = (ctx, oCtx) => {
    if (this.draw) {
      ctx.save();
      this.draw(ctx);
      if (this.options.lineWidth && this.options.strokeStyle) ctx.stroke();
      if (this.options.fillStyle) ctx.fill();
      ctx.restore();
      if (this.id) {
        const color = `rgba(${IdsManager.idToRgba(this.id).toString()})`;
        oCtx.save();
        this.draw(oCtx, {
          fillStyle: color,
          strokeStyle: color,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        });
        if (this.options.lineWidth && this.options.strokeStyle) oCtx.stroke();
        if (this.options.fillStyle) oCtx.fill();
        oCtx.restore();
      }
    }
  }
}

export class Rect extends Shape {
  constructor(options) {
    super(options);
    this.options = {
      width: 100,
      height: 100,
      ...this.options,
    };
  }

  draw = (ctx, options) => {
    options = {
      ...this.options,
      ...options,
    }
    ctx.beginPath();
    ctx.moveTo(options.x, options.y);
    ctx.lineTo(options.x + options.width, options.y);
    ctx.lineTo(options.x + options.width, options.y + options.height);
    ctx.lineTo(options.x, options.y + options.height);
    ctx.closePath();
    ctx.lineWidth = options.lineWidth;
    ctx.strokeStyle = options.strokeStyle;
    ctx.fillStyle = options.fillStyle;
    ctx.shadowColor = options.shadowColor;
    ctx.shadowBlur = options.shadowBlur;
    ctx.shadowOffsetX = options.shadowOffsetX;
    ctx.shadowOffsetY = options.shadowOffsetY;
  }
}

export class Circle extends Shape {
  constructor(options) {
    super(options);
    this.options = {
      radius: 10,
      sAngle: 0,
      eAngle: 2 * Math.PI,
      ...this.options,
    };
  }
  draw = (ctx, options = null) => {
    options = {
      ...this.options,
      ...options,
    };
    ctx.beginPath();
    ctx.arc(options.x, options.y, options.radius, options.sAngle, options.eAngle);
    ctx.lineWidth = options.lineWidth;
    ctx.strokeStyle = options.strokeStyle;
    ctx.fillStyle = options.fillStyle;
    ctx.shadowColor = options.shadowColor;
    ctx.shadowBlur = options.shadowBlur;
    ctx.shadowOffsetX = options.shadowOffsetX;
    ctx.shadowOffsetY = options.shadowOffsetY;
  }
}
