
import ky from "ky";

const kyClient = ky.create({
  prefixUrl: 'http://localhost:3056/api', 
  timeout: 5000,
  retry: 2,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      request => {
        const token = localStorage.getItem('token');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});


export default kyClient
