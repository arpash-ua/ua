// Скрипт для закрепления номера телефона при прокрутке страницы
window.onscroll = function() {
    const phoneButton = document.getElementById('phone');
    if (window.scrollY > 100) {
        phoneButton.style.display = 'block';
    } else {
        phoneButton.style.display = 'none';
    }
};
