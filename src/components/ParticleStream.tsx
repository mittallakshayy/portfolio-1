import { useEffect, useRef } from 'react';

interface ParticleStreamProps {
  isDarkMode: boolean;
}

// Use typed arrays for maximum performance with random particle data
interface ParticleData {
  positions: Float32Array; // x, y triplets
  velocities: Float32Array; // vx, vy pairs
  originalPositions: Float32Array; // original x, y for return animation
  dispersed: Uint8Array; // 0 or 1 for dispersed state
  disperseVelocities: Float32Array; // disperse vx, vy pairs
  returnSpeed: Float32Array; // speed of return to original position
  sizes: Float32Array;
  opacities: Float32Array;
  colors: Uint8Array;
}

const ParticleStream: React.FC<ParticleStreamProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const particleDataRef = useRef<ParticleData | null>(null);
  const themeRef = useRef<boolean>(isDarkMode);
  const particleCountRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  // Define colors based on theme
  const lightColors = ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8'];
  const darkColors = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#0284c7'];

  // Update theme ref when isDarkMode changes without restarting animation
  useEffect(() => {
    themeRef.current = isDarkMode;
    // Update particle colors efficiently
    if (particleDataRef.current) {
      const colors = particleDataRef.current.colors;
      for (let i = 0; i < colors.length; i++) {
        colors[i] = Math.floor(Math.random() * 4);
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true,
      powerPreference: 'high-performance'
    });
    if (!ctx) return;

    // Optimize canvas context
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Set canvas size with proper scaling
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const updateCanvasSize = () => {
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      resizeCanvas();
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize random erratic particle system
    const initializeParticles = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Increased particle count for better coverage
      const particleCount = 600;
      
      particleCountRef.current = particleCount;
      
      // Initialize typed arrays for random particle performance
      particleDataRef.current = {
        positions: new Float32Array(particleCount * 2), // x, y pairs
        velocities: new Float32Array(particleCount * 2), // vx, vy pairs
        originalPositions: new Float32Array(particleCount * 2), // original x, y
        dispersed: new Uint8Array(particleCount), // dispersed state
        disperseVelocities: new Float32Array(particleCount * 2), // disperse velocities
        returnSpeed: new Float32Array(particleCount), // return animation speed
        sizes: new Float32Array(particleCount),
        opacities: new Float32Array(particleCount),
        colors: new Uint8Array(particleCount)
      };
      
      const data = particleDataRef.current;
      
      for (let i = 0; i < particleCount; i++) {
        // Random positions across the entire canvas
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        
        // Store positions
        data.positions[i * 2] = x; // X position
        data.positions[i * 2 + 1] = y; // Y position
        
        // Store original positions for return animation
        data.originalPositions[i * 2] = x;
        data.originalPositions[i * 2 + 1] = y;
        
        // Random erratic velocities
        data.velocities[i * 2] = (Math.random() - 0.5) * 2; // vx: -1 to 1
        data.velocities[i * 2 + 1] = (Math.random() - 0.5) * 2; // vy: -1 to 1
        
        // Initialize disperse state
        data.dispersed[i] = 0; // Not dispersed initially
        
        // Pre-calculate disperse velocities for smooth performance
        data.disperseVelocities[i * 2] = (Math.random() - 0.5) * 8; // disperse vx
        data.disperseVelocities[i * 2 + 1] = (Math.random() - 0.5) * 8; // disperse vy
        
        // Return speed variation
        data.returnSpeed[i] = 0.02 + Math.random() * 0.03; // 0.02-0.05
        
        // Particle properties
        data.sizes[i] = 2.0 + Math.random() * 4.0; // Sizes 2.0-6.0px
        data.opacities[i] = 0.4 + Math.random() * 0.6; // Opacity 0.4-1.0
        
        // Random color selection
        data.colors[i] = Math.floor(Math.random() * 4);
      }
    };

    initializeParticles();

    // Mouse event handlers for particle dispersion
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      
      // Calculate mouse position relative to canvas
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * canvas.width,
        y: ((e.clientY - rect.top) / rect.height) * canvas.height
      };
      
      // Debug log every 30 frames to avoid spam
      if (Math.random() < 0.03) {
        console.log('Mouse:', mouseRef.current.x.toFixed(2), mouseRef.current.y.toFixed(2));
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -10000, y: -10000 }; // Reset mouse position when leaving canvas
      console.log('Mouse left canvas');
    };

    const handleMouseEnter = () => {
      console.log('Mouse entered canvas');
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', handleMouseEnter);

    // Random erratic particle animation with hover dispersion
    const animate = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const data = particleDataRef.current;
      if (!data) return;

      const currentColors = themeRef.current ? darkColors : lightColors;
      const particleCount = particleCountRef.current;
      const mouse = mouseRef.current;
      const disperseRadius = 80; // Radius around mouse for dispersion (reduced for testing)

      // Ultra-optimized batch rendering
      const positions = data.positions;
      const velocities = data.velocities;
      const originalPositions = data.originalPositions;
      const dispersed = data.dispersed;
      const disperseVelocities = data.disperseVelocities;
      const returnSpeed = data.returnSpeed;
      const sizes = data.sizes;
      const opacities = data.opacities;
      const colors = data.colors;
      
      let dispersedCount = 0;

      for (let i = 0; i < particleCount; i++) {
        const x = positions[i * 2];
        const y = positions[i * 2 + 1];
        const origX = originalPositions[i * 2];
        const origY = originalPositions[i * 2 + 1];

        // Calculate distance to mouse
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if particle should be dispersed
        if (distance < disperseRadius && !dispersed[i] && mouse.x > -1000) {
          dispersed[i] = 1; // Mark as dispersed
          
          // Set disperse direction away from mouse (stronger force)
          const angle = Math.atan2(dy, dx);
          const force = 5 + Math.random() * 5; // Increased force 5-10
          disperseVelocities[i * 2] = Math.cos(angle) * force;
          disperseVelocities[i * 2 + 1] = Math.sin(angle) * force;
          
          // Debug log for dispersion
          console.log(`Particle ${i} dispersed! Distance: ${distance.toFixed(2)}, Angle: ${angle.toFixed(2)}`);
        }
        
        if (dispersed[i]) dispersedCount++;

        // Update particle position based on state
        if (dispersed[i]) {
          // Always apply disperse velocity when dispersed
          positions[i * 2] += disperseVelocities[i * 2];
          positions[i * 2 + 1] += disperseVelocities[i * 2 + 1];
          
          // Apply friction to slow down dispersion
          disperseVelocities[i * 2] *= 0.95;
          disperseVelocities[i * 2 + 1] *= 0.95;
          
          // Check if should start returning (when velocity is very low or far from mouse)
          const velocityMagnitude = Math.sqrt(disperseVelocities[i * 2] * disperseVelocities[i * 2] + disperseVelocities[i * 2 + 1] * disperseVelocities[i * 2 + 1]);
          
          if (velocityMagnitude < 0.5 || distance > disperseRadius * 3) {
            // Start returning to original position
            const returnDx = origX - x;
            const returnDy = origY - y;
            const returnDistance = Math.sqrt(returnDx * returnDx + returnDy * returnDy);
            
            if (returnDistance < 3) {
              // Close enough to original position
              positions[i * 2] = origX;
              positions[i * 2 + 1] = origY;
              dispersed[i] = 0; // Reset dispersed state
            } else {
              // Move towards original position
              const returnForce = 0.05;
              positions[i * 2] += returnDx * returnForce;
              positions[i * 2 + 1] += returnDy * returnForce;
            }
          }
        } else {
          // Normal erratic movement
          positions[i * 2] += velocities[i * 2];
          positions[i * 2 + 1] += velocities[i * 2 + 1];
          
          // Bounce off edges and change velocity occasionally
          if (positions[i * 2] < 0 || positions[i * 2] > canvasWidth) {
            velocities[i * 2] *= -1;
            velocities[i * 2] += (Math.random() - 0.5) * 0.5; // Add randomness
          }
          if (positions[i * 2 + 1] < 0 || positions[i * 2 + 1] > canvasHeight) {
            velocities[i * 2 + 1] *= -1;
            velocities[i * 2 + 1] += (Math.random() - 0.5) * 0.5; // Add randomness
          }
          
          // Occasionally change direction for erratic movement
          if (Math.random() < 0.005) { // 0.5% chance per frame
            velocities[i * 2] = (Math.random() - 0.5) * 2;
            velocities[i * 2 + 1] = (Math.random() - 0.5) * 2;
          }
        }

        // Clamp positions to canvas bounds
        positions[i * 2] = Math.max(0, Math.min(canvasWidth, positions[i * 2]));
        positions[i * 2 + 1] = Math.max(0, Math.min(canvasHeight, positions[i * 2 + 1]));

        // Render particle
        const colorIndex = colors[i];
        const alpha = Math.floor(opacities[i] * 255);
        
        // Direct color setting for performance
        if (colorIndex === 0) ctx.fillStyle = currentColors[0] + alpha.toString(16).padStart(2, '0');
        else if (colorIndex === 1) ctx.fillStyle = currentColors[1] + alpha.toString(16).padStart(2, '0');
        else if (colorIndex === 2) ctx.fillStyle = currentColors[2] + alpha.toString(16).padStart(2, '0');
        else ctx.fillStyle = currentColors[3] + alpha.toString(16).padStart(2, '0');
        
        // Fast circle rendering
        ctx.beginPath();
        ctx.arc(positions[i * 2], positions[i * 2 + 1], sizes[i], 0, 6.283185307179586); // 2*PI pre-calculated
        ctx.fill();
      }


      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []); // Empty dependency array - animation never restarts

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ 
        zIndex: 1, 
        background: 'transparent',
        width: '100%',
        height: '100%',
        pointerEvents: 'auto'
      }}
    />
  );
};

export default ParticleStream;