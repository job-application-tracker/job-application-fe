import confetti from 'canvas-confetti';

var count = 200;
var defaults = {
  origin: { x: 0.5, y: 0.8 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    angle: 90,
    particleCount: Math.floor(count * particleRatio)
  }));
}
export function celebrate() {
  fire(0.25, {
    spread: 200,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 200,
  });
  fire(0.35, {
    spread: 200,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 220,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 220,
    startVelocity: 45,
  });
}
