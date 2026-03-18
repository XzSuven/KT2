
const cats = [
    {
        name: "Лара",
        img: "https://i.imgur.com/7YxU8QY.jpg",
        age: 8,
        rate: 7,
        favorite: false,
        desc: "Лара - шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная."
    },
    {
        name: "Базель",
        img: "https://i.imgur.com/HCJq7vE.jpg",
        age: 10,
        rate: 10,
        favorite: false,
        desc: "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми!"
    },
    {
        name: "Рим",
        img: "https://i.imgur.com/3QqJqKc.jpg",
        age: 11,
        rate: 10,
        favorite: true,
        desc: "Рим любит лесенки, канаты. Очень активный и дружелюбный кот. Полностью здоров, привит, кастрирован."
    },
    {
        name: "Элли",
        img: "https://i.imgur.com/3pYJqXp.jpg",
        age: 8,
        rate: 8,
        favorite: false,
        desc: "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать."
    },
    {
        name: "Чарли",
        img: "https://i.imgur.com/4QfVjHv.jpg",
        age: 11,
        rate: 8,
        favorite: false,
        desc: "Чарли — очень большой любитель поразмышлять и побыть наедине. Пока что не доверяет людям."
    },
    {
        name: "Стефани",
        img: "https://i.imgur.com/5RqJqLv.jpg",
        age: 6,
        rate: 9,
        favorite: false,
        desc: "Прелестная Стефани — трогательная, добрая и очень-очень общительная девочка."
    },
    {
        name: "Дуся",
        img: "https://i.imgur.com/6RqJqMv.jpg",
        age: 1,
        rate: 9,
        favorite: false,
        desc: "Дусе примерно 1 год, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно."
    },
    {
        name: "Бруно",
        img: "https://i.imgur.com/7RqJqNv.jpg",
        age: 1,
        rate: 10,
        favorite: false,
        desc: "Очаровательный активный кот Бруно, находится в постоянном движении! Ласковый кот."
    },
    {
        name: "Лапа",
        img: "https://i.imgur.com/8RqJqOv.jpg",
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