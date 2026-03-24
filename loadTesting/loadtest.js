import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1000, // Virtual Users
  duration: '60s', // Total test duration
  hosts: {
    'url-shortener.localhost': '127.0.0.1',
  },
  insecureSkipTLSVerify: true,
};

export default function () {
  const res = http.get('https://url-shortener.localhost/optional', {
    redirects: 0,
  });
  check(res, {
    'status is 302': (r) => r.status === 302,
  });
  sleep(1); // wait for 1 second between iterations
}