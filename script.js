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
                    <h2>Как ты относишься к своим программным проектам?</h2>
                    <button class="variant" onclick="clicks('a', this)">
                        <p class="number">1</p>
                        <p class="gray-text">Увлеченно работаю, стараюсь довести до идеала</p>
                    </button>
                    <button class="variant" onclick="clicks('b', this)">
                        <p class="number">2</p>
                        <p class="gray-text">Работаю над ними, но иногда теряю мотивацию</p>
                    </button>
                    <button class="variant" onclick="clicks('c', this)">
                        <p class="number">3</p>
                        <p class="gray-text">Делаю, что нужно, но не всегда довожу до конца</p>
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
            <h2>Какую музыку ты слушаешь во время работы?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Классическую музыку или инструментальные треки</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Саундтреки из аниме или фильмов</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Что-то современное и популярное, чтобы зарядиться энергией</p>
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
            <h2>Как ты справляешься с трудностями в коде?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Анализирую проблему и нахожу решение самостоятельно</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Спрашиваю у коллег или ищу решения в интернете</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Иногда могу забросить задачу и вернуться к ней позже</p>
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
            <h2>Как ты относишься к командной работе?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Я предпочитаю работать самостоятельно, но могу работать в команде</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Мне нравится делиться идеями и обсуждать их с командой</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Работаю в команде, но стараюсь избегать лишнего общения</p>
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
            <h2>Какое у тебя отношение к аниме, связанному с музыкой?</h2>
            <button class="variant" id="a" onclick="clicks('a', this)">
                <p class="number">1</p>
                <p class="gray-text">Люблю аниме о музыке, особенно с драматическими моментами</p>
            </button>
            <button class="variant" id="b" onclick="clicks('b', this)">
                <p class="number">2</p>
                <p class="gray-text">Смотрю такие аниме, но предпочитаю другие жанры</p>
            </button>
            <button class="variant" id="c" onclick="clicks('c', this)">
                <p class="number">3</p>
                <p class="gray-text">Не особо интересуюсь такими аниме, но могу посмотреть ради интереса</p>
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