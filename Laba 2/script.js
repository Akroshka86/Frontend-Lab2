// Массив со случайными URL-адресами сайтов
const websites = [
    'https://tpu.ru',
    'https://www.spbstu.ru',
    'https://www.tsu.ru',
    'https://tusur.ru/ru',
    'https://www.hse.ru',
    'https://spmi.ru',
    'https://www.utmn.ru',
    'https://www.tyuiu.ru',
    'https://bmstu.ru',
];

// Функция для перенаправления на случайный сайт
function redirectToRandomWebsite() 
{
    // Получаем случайный индекс из массива
    const randomIndex = Math.floor(Math.random() * websites.length);

    // Получаем случайный URL-адрес
    const randomWebsite = websites[randomIndex];
    
    // Перенаправляем пользователя на случайный сайт
    window.location.href = randomWebsite;
}

// Назначаем обработчик события на кнопку
document.getElementById('randomButton').addEventListener('click', redirectToRandomWebsite);