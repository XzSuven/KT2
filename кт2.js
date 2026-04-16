
const cats = [
    {
        name: "Лара",
        img: "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        age: 8,
        rate: 7,
        favorite: false,
        desc: "Лара - шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная."
    },
    {
        name: "Базель",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        age: 10,
        rate: 10,
        favorite: false,
        desc: "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми!"
    },
    {
        name: "Риш",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        age: 11,
        rate: 10,
        favorite: true,
        desc: "Рим любит лесенки, канаты. Очень активный и дружелюбный кот. Полностью здоров, привит, кастрирован."
    },
    {
        name: "Элли",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        age: 8,
        rate: 8,
        favorite: false,
        desc: "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать."
    },
    {
        name: "Чарли",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        age: 11,
        rate: 8,
        favorite: false,
        desc: "Чарли — очень большой любитель поразмышлять и побыть наедине. Пока что не доверяет людям."
    },
    {
        name: "Стефани",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        age: 6,
        rate: 9,
        favorite: false,
        desc: "Прелестная Стефани — трогательная, добрая и очень-очень общительная девочка."
    },
    {
        name: "Дуся",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        age: 1,
        rate: 9,
        favorite: false,
        desc: "Дусе примерно 1 год, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно."
    },
    {
        name: "Бруно",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        age: 1,
        rate: 10,
        favorite: false,
        desc: "Очаровательный активный кот Бруно, находится в постоянном движении! Ласковый кот."
    },
    {
        name: "Лапа",
        img: "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        age: 1,
        rate: 9,
        favorite: true,
        desc: "Немного боязливый, но очень добрый и нежный кот. Приучен к лотку и когтеточке, ладит с детьми."
    }
];

function getStars(rate) {
    let stars = '';
    for (let i = 1; i <= 10; i++) {
        stars += i <= rate ? '★' : '☆';
    }
    return stars;
}

function getAgeText(age) {
    if (age === 1) return 'год';
    if (age >= 2 && age <= 4) return 'года';
    return 'лет';
}

function showCards() {
    const container = document.getElementById('cards');

    container.innerHTML = cats.map(cat => `
    <div class="card">
      <img src="${cat.img_link}" alt="${cat.name}" loading="lazy">
      <div class="card-content">
        <div class="card-header">
          <h2>${cat.name}</h2>
          <span class="age">${cat.age} ${getAgeText(cat.age)}</span>
        </div>
        <div class="rating">
          ${getStars(cat.rate)}
        </div>
        <p class="description">${cat.description}</p>
        <div class="favorite ${cat.favorite ? 'active' : ''}">
          ${cat.favorite ? '❤️' : '🤍'}
        </div>
        <button onclick="alert('Подробнее о ${cat.name}')">
          Подробнее
        </button>
      </div>
    </div>
  `).join('');
}

showCards();