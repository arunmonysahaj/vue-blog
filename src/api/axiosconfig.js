// eslint-disable-next-line no-restricted-imports
import axios from 'axios';

const config = {
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-context-url': window.location.href,
    'x-referrer-url': document.referrer,
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
