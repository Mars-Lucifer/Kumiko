// Функция для смены блоков
function changeBlocks(newLeftBlockHTML, newRightBlockHTML) {
    const leftBlock = document.querySelector(".left-block");
    const rightBlock = document.querySelector(".right-block");

    // Добавляем класс для скрытия
    leftBlock.classList.remove("show");
    rightBlock.classList.remove("show");
    leftBlock.classList.add("hidden");
    rightBlock.classList.add("hidden");
    

    // Ждем окончания анимации скрытия (500ms), затем заменяем блоки
    setTimeout(() => {
        // Удаляем старые блоки
        leftBlock.remove();
        rightBlock.remove();

        // Вставляем новые блоки
        const mainContainer = document.querySelector(".main-container");

        const newLeftBlock = document.createElement('div');
        newLeftBlock.classList.add('left-block', 'new-blocks');
        newLeftBlock.innerHTML = newLeftBlockHTML;

        const newRightBlock = document.createElement('div');
        newRightBlock.classList.add('right-block', 'new-blocks');
        newRightBlock.innerHTML = newRightBlockHTML;

        mainContainer.appendChild(newLeftBlock);
        mainContainer.appendChild(newRightBlock);

        // Запускаем анимацию появления
        setTimeout(() => {
            newLeftBlock.classList.add("show");
            newRightBlock.classList.add("show");
        }, 10);
    }, 500); // Увеличил время на 100ms, чтобы успеть завершить анимацию
}

// Инициализация переменных
let A = 0;
let B = 0;
let C = 0;
let Aa = 0;
let Bb = 0;
let Cc = 0;

function clicks(abc, btn) {
    const buttons = document.querySelectorAll('.variant');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    btn.classList.add("active");
    Aa = 0;
    Bb = 0;
    Cc = 0;
    if (abc == "a") Aa = 1;
    if (abc == "b") Bb = 1;
    if (abc == "c") Cc = 1;
}

function apply() {
    if (Aa == 1) A+=1;
    if (Bb == 1) B+=1;
    if (Cc == 1) C+=1;
    if (Aa == 0 && Bb == 0 && Cc == 0) {
        alert("Я знаю про этот баг, но мне лень его фиксить");
    }
    Aa = 0;
    Bb = 0;
    Cc = 0;
}


// Переходы
// Функция, вызываемая при нажатии на кнопку "Продолжить"
function start() {
    const newLeftBlockHTML = `
        <div class="block-16">
                    <img src="/img/love.svg" class="love" alt="love">
                    <a>Поздравительная открытка</a>
                </div>
                <div class="text-block">
                    <h2>Как ты относишься к роли лидера в команде?</h2>
                    <button class="variant" onclick="clicks('a', this)">
                        <p class="number">1</p>
                        <p class="gray-text">Уверенно беру на себя ответственность и веду команду вперед</p>
                    </button>
                    <button class="variant" onclick="clicks('b', this)">
                        <p class="number">2</p>
                        <p class="gray-text">Иногда чувствую себя неуверенно, но стараюсь справляться</p>
                    </button>
                    <button class="variant" onclick="clicks('c', this)">
                        <p class="number">3</p>
                        <p class="gray-text">Предпочитаю оставаться в тени и поддерживать других</p>
                    </button>
                </div>
                <button class="block-16 btn-arrow" onclick="next_1()">
                    <img src="/img/arrow.svg" alt="arrow">
                    <a>Продолжить</a>
                </button>
                <div class="footer">
                    <p class="gray-text">Вопрос 1/5</p>
                    <div class="progress-bar">
                        <div class="bar-bar" style="width: 50px;"></div>
                    </div>
                </div>`;

    const newRightBlockHTML = `<img src="/img/grad.svg" alt="красиво" class="img-2">`;

    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}

function next_1() {
    const newLeftBlockHTML = `
        <div class="block-16">
            <img src="/img/love.svg" class="love" alt="love">
            <a>Поздравительная открытка</a>
        </div>
        <div class="text-block">
            <h2>Как ты взаимодействуешь с людьми в сложных ситуациях?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Внимательно слушаю и пытаюсь понять каждого, чтобы помочь</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Стремлюсь найти компромисс, не вникая в детали</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Иногда не понимаю, что люди на самом деле чувствуют, и действую интуитивно</p>
            </button>
        </div>
        <button class="block-16 btn-arrow" onclick="next_2()">
            <img src="/img/arrow.svg" alt="arrow">
            <a>Продолжить</a>
        </button>
        <div class="footer">
            <p class="gray-text">Вопрос 2/5</p>
            <div class="progress-bar">
                <div class="bar-bar" style="width: 100px;"></div>
            </div>
        </div>`;

    const newRightBlockHTML = `<img src="/img/grad.svg" alt="красиво" class="img-2">`;

    apply();
    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}

function next_2() {
    const newLeftBlockHTML = `
        <div class="block-16">
            <img src="/img/love.svg" class="love" alt="love">
            <a>Поздравительная открытка</a>
        </div>
        <div class="text-block">
            <h2>Часто ли ты озвучиваешь свои мысли вслух?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Да, иногда говорю, не думая, что это может удивить окружающих</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Стараюсь сначала подумать, но иногда всё-таки говорю вслух</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Почти всегда держу свои мысли при себе</p>
            </button>
        </div>
        <button class="block-16 btn-arrow" onclick="next_3()">
            <img src="/img/arrow.svg" alt="arrow">
            <a>Продолжить</a>
        </button>
        <div class="footer">
            <p class="gray-text">Вопрос 3/5</p>
            <div class="progress-bar">
                <div class="bar-bar" style="width: 150px;"></div>
            </div>
        </div>`;

    const newRightBlockHTML = `<img src="/img/grad.svg" alt="красиво" class="img-2">`;

    apply();
    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}

function next_3() {
    const newLeftBlockHTML = `
        <div class="block-16">
            <img src="/img/love.svg" class="love" alt="love">
            <a>Поздравительная открытка</a>
        </div>
        <div class="text-block">
            <h2>Как ты изменился со временем?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Раньше просто плыл по течению, но теперь стараюсь активно влиять на свою жизнь</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Иногда действую спонтанно, но в целом стремлюсь быть более целеустремленным</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Всегда был целеустремленным, но стараюсь сохранять гибкость</p>
            </button>
        </div>
        <button class="block-16 btn-arrow" onclick="next_4()">
            <img src="/img/arrow.svg" alt="arrow">
            <a>Продолжить</a>
        </button>
        <div class="footer">
            <p class="gray-text">Вопрос 4/5</p>
            <div class="progress-bar">
                <div class="bar-bar" style="width: 200px;"></div>
            </div>
        </div>`;

    const newRightBlockHTML = `<img src="/img/grad.svg" alt="красиво" class="img-2">`;

    apply();
    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}

function next_4() {
    const newLeftBlockHTML = `
        <div class="block-16">
            <img src="/img/love.svg" class="love" alt="love">
            <a>Поздравительная открытка</a>
        </div>
        <div class="text-block">
            <h2>Что для тебя значит музыка в твоей жизни?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Оркестр — моя страсть, очень люблю ДуДкИ</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Музыка важна, но не всегда получается уделять ей достаточно времени</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Музыка нравится, но есть и другие увлечения, которые мне важны</p>
            </button>
        </div>
        <button class="block-16 btn-arrow" onclick="next_5()">
            <img src="/img/arrow.svg" alt="arrow">
            <a>Завершить</a>
        </button>
        <div class="footer">
            <p class="gray-text">Вопрос 5/5</p>
            <div class="progress-bar">
                <div class="bar-bar" style="width: 250px;"></div>
            </div>
        </div>`;

    const newRightBlockHTML = `<img src="/img/grad.svg" alt="красиво" class="img-2">`;

    apply();
    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}

answer_title = [
    "Ты Кумико!",
    "Ты похож на Кумико!",
    "Ты на пути к Кумико!"
]
answer_text = [
    "Ты увлечен своим делом, глубок в размышлениях и предпочитаешь спокойное, но уверенное движение к цели, как настоящая Кумико",
    "Ты уравновешен и целеустремлен, но иногда можешь потерять мотивацию или колебаться в решениях, как и Кумико в определенные моменты",
    "Ты склонен к переменам и можешь не всегда придерживаться строгих целей, как Кумико, когда она ищет свой путь"
]

function next_5() {
    const numbers = [A, B, C];
    const maxIndex = numbers.reduce((maxIdx, currentValue, currentIndex, array) => {
        return currentValue > array[maxIdx] ? currentIndex : maxIdx;
    }, 0);

    const answer = maxIndex;
    let end_result = [];
    if (answer == 0) {end_result = [answer_title[0], answer_text[0]]};
    if (answer == 1) {end_result = [answer_title[1], answer_text[1]]};
    if (answer == 2) {end_result = [answer_title[2], answer_text[2]]};

    const newLeftBlockHTML = `
        <div class="block-16">
            <img src="/img/love.svg" class="love" alt="love">
            <a>Поздравительная открытка</a>
        </div>
        <div class="text-block">
            <h2>${end_result[0]}</h2>
            <div class="paragprah">
                <p class="gray-text">${end_result[1]}</p>
                <p class="gray-text">Желаю тебе весело провести день!</p>
            </div>
            </div>
        <div class="footer">
            <p class="gray-text">Конец!</p>
            <div class="progress-bar">
                <div class="bar-bar" style="width: 300px;"></div>
            </div>
        </div>`;

    const newRightBlockHTML = `<div class="img-1 img-3"></div>`;

    apply();
    // Вызываем функцию для смены блоков
    changeBlocks(newLeftBlockHTML, newRightBlockHTML);
}