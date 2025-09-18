import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            radius: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;
            originalRadius: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + canvas.height;
                this.radius = Math.random() * 2 + 1;
                this.originalRadius = this.radius;
                this.speedY = Math.random() * 1 + 0.5;
                this.opacity = 0;
                this.opacitySpeed = Math.random() * 0.01 + 0.005;
            }

            update() {
                this.y -= this.speedY;
                if (this.y < -10) {
                    this.y = canvas.height + 10;
                    this.x = Math.random() * canvas.width;
                }
                
                this.opacity += this.opacitySpeed;
                if(this.opacity > 1 || this.opacity < 0) {
                    this.opacitySpeed *= -1;
                }
                
                this.radius = this.originalRadius * (0.5 + Math.abs(Math.sin(this.opacity * Math.PI)));
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
                ctx.shadowColor = 'rgba(255, 215, 0, 1)';
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.closePath();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        init();
        animate();

        const handleResize = () => {
            resizeCanvas();
            init();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default AnimatedBackground;
