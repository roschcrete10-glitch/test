const holidays = [
  { date: '2026-01-01', name: 'New Year’s Day' }, { date: '2026-01-14', name: 'Makar Sankranti' },
  { date: '2026-01-26', name: 'Republic Day' }, { date: '2026-03-04', name: 'Holi' },
  { date: '2026-03-20', name: 'Eid al-Fitr*' }, { date: '2026-03-26', name: 'Ram Navami' },
  { date: '2026-04-03', name: 'Good Friday' }, { date: '2026-04-14', name: 'Ambedkar Jayanti' },
  { date: '2026-05-01', name: 'May Day' }, { date: '2026-05-27', name: 'Eid al-Adha*' },
  { date: '2026-08-15', name: 'Independence Day' }, { date: '2026-08-26', name: 'Milad un-Nabi*' },
  { date: '2026-09-04', name: 'Janmashtami' }, { date: '2026-10-02', name: 'Gandhi Jayanti' },
  { date: '2026-10-20', name: 'Dussehra' }, { date: '2026-11-08', name: 'Diwali' },
  { date: '2026-11-24', name: 'Guru Nanak Jayanti' }, { date: '2026-12-25', name: 'Christmas Day' }
];

const holidayByDate = Object.fromEntries(holidays.map(item => [item.date, item.name]));
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let shownDate = new Date(2026, 0, 1);

function keyFor(year, month, day) { return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`; }
function daysInMonth(year, month) { return new Date(year, month + 1, 0).getDate(); }
function renderCalendar() {
  const year = shownDate.getFullYear(), month = shownDate.getMonth();
  document.getElementById('month-title').innerHTML = `${monthNames[month]} <span>${year}</span>`;
  const grid = document.getElementById('calendar-grid'); grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  for (let i = 0; i < firstDay; i++) grid.insertAdjacentHTML('beforeend', '<div class="day empty"></div>');
  const now = new Date();
  for (let day = 1; day <= daysInMonth(year, month); day++) {
    const key = keyFor(year, month, day), holiday = holidayByDate[key];
    const isToday = now.getFullYear() === year && now.getMonth() === month && now.getDate() === day;
    grid.insertAdjacentHTML('beforeend', `<div class="day ${holiday ? 'holiday-day' : ''} ${isToday ? 'is-today' : ''}"><span class="date">${day}</span>${holiday ? `<span class="holiday-label">${holiday}</span>` : ''}</div>`);
  }
  document.getElementById('holiday-list').innerHTML = holidays.filter(h => new Date(`${h.date}T00:00:00`) >= new Date()).slice(0, 3).map(h => `<article class="holiday-card"><time datetime="${h.date}">${new Date(`${h.date}T00:00:00`).toLocaleDateString('en-IN', {month:'short', day:'numeric'})}</time><strong>${h.name}</strong></article>`).join('') || '<p>No more listed celebrations this year.</p>';
}
if (typeof document !== 'undefined') {
  document.getElementById('prev-month').addEventListener('click', () => { shownDate.setMonth(shownDate.getMonth() - 1); renderCalendar(); });
  document.getElementById('next-month').addEventListener('click', () => { shownDate.setMonth(shownDate.getMonth() + 1); renderCalendar(); });
  document.getElementById('today-button').addEventListener('click', () => { shownDate = new Date(); renderCalendar(); });
  renderCalendar();
}
if (typeof module !== 'undefined') module.exports = { keyFor, daysInMonth, holidays };
