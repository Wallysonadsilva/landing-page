import React, { useEffect, useRef } from "react";

const MatrixEffect = ({ className, color = "#000" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const { offsetWidth: width, offsetHeight: height } = canvas;
      canvas.width = width;
      canvas.height = height;

      fontSize = width / 50;
      ctx.font = `${fontSize}px monospace`;

      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * height);
    };

    let fontSize;
    let columns;
    let drops;
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const matrixCharacters = "01";

    const draw = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color; // Use the color prop

      for (let i = 0; i < drops.length; i++) {
        const text = matrixCharacters.charAt(
          Math.floor(Math.random() * matrixCharacters.length)
        );
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color]); // Add color to dependencies to update if it changes

  return <canvas ref={canvasRef} className={className} />;
};

export default MatrixEffect;
