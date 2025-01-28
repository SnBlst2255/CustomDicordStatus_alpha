//Подключаем библиотеку и инициализируем клиент
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });


//Анимация иконки (первая строчка, каждый элемент массива - кадр)
const animationFrames = [
    'Downloading server data 🌍',
    'Downloading server data 🌎',
    'Downloading server data 🌏',
    'Downloading server data 🌎'
];

//Кадры анимации прогресс бара (вторая строчка, каждый элемент массива - кадр)
const animationFrames2 = [
    '[-----------------------]',
    '[#----------------------]',
    '[##---------------------]',
    '[###--------------------]',
    '[####-------------------]',
    '[#####------------------]',
    '[######-----------------]',
    '[#######----------------]',
    '[########---------------]',
    '[#########--------------]',
    '[##########-------------]',
    '[###########------------]',
    '[############-----------]',
    '[#############----------]',
    '[##############---------]',
    '[###############--------]',
    '[################-------]',
    '[#################------]',
    '[##################-----]',
    '[###################----]',
    '[####################---]',
    '[#####################--]',
    '[######################-]',
    '[#######################]'
];

//Глобальные переменные для хранения времени и индекса текущего кадра
let index = 0; //Индекс первого кадра
let index2 = 0; //Индекс второго кадра
let timeStamp; //Дата запуска

// Функция для обновления статуса
function updateStatus(frame, frame2) {
    client.setActivity({
        details: `${frame}`,
        state: `${frame2}`,  // Текст с названием приложения и анимацией
        largeImageKey: 'https://media.tenor.com/LmKTgSCWvQwAAAAi/this-is-the-end.gif',  //Ссылка для большой иконки
        startTimestamp: timeStamp  // Время начала активности
    });
}

function updateFrame() {
    const frame1 = animationFrames[index];  // Выбираем текущий символ для анимации
    const frame2 = animationFrames2[index2];
    updateStatus(frame1, frame2);  // Обновляем статус

    index = (index + 1) % animationFrames.length; //переключаем кадр первой анимации
    index2 = (index2 + 1) % animationFrames2.length; //переключаем кадр второй анимации
}

// Функция для анимации статуса
function animateStatus() {
    timeStamp = Date.now();

    updateFrame();
    setInterval(() => {
        updateFrame();
    }, 15000);  // Обновляем каждую половину секунды
}

// Когда Discord RPC клиент готов
client.on('ready', () => {
    console.log('Discord RPC was connected!');
    animateStatus();
});

// Логинимся в Discord с использованием clientId
client.login({ clientId: '1323442478615105668' }).catch(console.error);