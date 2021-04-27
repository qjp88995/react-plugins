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
    this.oCanvas = new OffscreenCanvas(canvas.width, canvas.height);
    this.ctx = canvas.getContext('2d');
    this.oCtx = this.oCanvas.getContext('2d');
    this.shapes = new Set();
    this.idsManager = new IdsManager();
    this.eventsManager = new EventsManager(this.oCtx);
    canvas.addEventListener('click', this.onClick);
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
    Array.from(this.eventsManager.list.keys()).forEach(item => {
      if (item === `${this.getEventId(e)}.click`) this.eventsManager.list.get(item)(e);
    });
  }
}

class Shape {
  constructor() {
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
    };
  }

  render = (ctx, oCtx) => {
    if (this.draw) {
      this.draw(ctx);
      if (this.id) {
        const color = `rgba(${IdsManager.idToRgba(this.id).toString()})`;
        this.draw(oCtx, {
          fillStyle: color,
          strokeStyle: color,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        });
      }
    }
  }
}

export class Rect extends Shape {
  constructor(options) {
    super(options);
    this.options = {
      ...super.options,
      width: 100,
      height: 100,
      ...options,
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
    ctx.strokeStyle = options.strokeStyle;
    ctx.stroke();
    ctx.fillStyle = options.fillStyle;
    ctx.fill();
  }
}

export class Circle extends Shape {
  constructor(options) {
    super(options);
    this.options = {
      ...super.options,
      radius: 10,
      sAngle: 0,
      eAngle: 2 * Math.PI,
      ...options,
    };
  }
  draw = (ctx, options = null) => {
    options = {
      ...this.options,
      ...options,
    };
    ctx.beginPath();
    ctx.arc(options.x, options.y, options.radius, options.sAngle, options.eAngle);
    ctx.strokeStyle = options.strokeStyle;
    ctx.stroke();
    ctx.fillStyle = options.fillStyle;
    ctx.fill();
  }
}
