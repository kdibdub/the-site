import Point from "../point";
import { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize canvas size and sets the background color
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create a list of points with random coordinates
    const points = [
      new Point(
        100,
        100,
        Math.random() * Math.PI * 2,
        canvas.width,
        canvas.height
      ),
    ];

    // Add the mouse point
    document.onmousemove = function (e) {
      points[0].x = e.clientX;
      points[0].y = e.clientY;
    };

    for (let i = 0; i < 300; i++) {
      points.push(
        new Point(
          Math.floor(Math.random() * canvas.width),
          Math.floor(Math.random() * canvas.height),
          Math.random() * Math.PI * 2,
          canvas.width,
          canvas.height
        )
      );
    }

    // Function to draw the points
    function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      ctx.fillStyle = `rgb(25, 27, 46)`;
      //ctx.fillStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Update the points position
    function update(points: Point[]) {
      points.forEach((point, index) => {
        if (index !== 0) {
          point.move();
        }
      });
    }

    // Function to draw the lines between the points
    function distances(ctx: CanvasRenderingContext2D, points: Point[]) {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = points[i].calculateDistance(points[j]);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(99, 173, 219, ${1 - distance / 100})`;
            //ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${1 - distance / 100})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate(
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      points: Point[]
    ) {
      window.requestAnimationFrame(() => animate(ctx, canvas, points));

      draw(ctx, canvas);
      distances(ctx, points);
      update(points);
    }

    animate(ctx, canvas, points);
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

export default Matrix;
