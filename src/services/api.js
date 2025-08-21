const API_BASE = 'http://localhost:3001/api';

export const teacherService = {
  getAll: () => fetch(`${API_BASE}/teachers`).then(res => res.json()),
  getTopRated: () => fetch(`${API_BASE}/teachers/top-rated`).then(res => res.json()),
};

export const bookingService = {
  create: (data) => fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
};