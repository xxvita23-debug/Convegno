
// Countdown
const end = new Date('2025-11-18T08:30:00+01:00').getTime();
function fmt(n){return String(n).padStart(2,'0');}
function tick(){
  const now = Date.now();
  let diff = Math.max(0, end - now);
  const d = Math.floor(diff / (1000*60*60*24)); diff -= d*24*60*60*1000;
  const h = Math.floor(diff / (1000*60*60)); diff -= h*60*60*1000;
  const m = Math.floor(diff / (1000*60)); diff -= m*60*1000;
  const s = Math.floor(diff / 1000);
  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = fmt(h);
  document.getElementById('mins').textContent = fmt(m);
  document.getElementById('secs').textContent = fmt(s);
}
setInterval(tick, 1000); tick();
