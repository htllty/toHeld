// 弹出祝福
document.getElementById('surprise').addEventListener('click', () => {
  // 跳转到祝福语页面
  window.location.href = '../html/BirthdayCake.html';
});

// 彩带动画
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 50;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCount,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();

      c.tiltAngle += c.tiltAngleIncrement;
      c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(c.tiltAngle) * 2;
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > canvas.height) {
          c.y = -10;
          c.x = Math.random() * canvas.width;
      }
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
