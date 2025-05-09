  document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = 'http://localhost:9000/index.html';
      return false;
    }
    return true;
  });