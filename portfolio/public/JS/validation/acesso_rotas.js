if(window.location.href ='http://localhost:9000/public/pages/igreja.html') {
  document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = 'http://localhost:9000/index.html';
      return false;
    }
    return true;
  });
}