const spans = document.querySelectorAll('h1 > span');
const spanP = document.querySelectorAll("p > span");

spanP.forEach(element => {
  element.classList.add('red');
});

const endTime = new Date('2036-12-09 11:20:00').getTime();

setInterval(() => {
    const nowTime = new Date().getTime();

    const years = Math.floor(
        (endTime / (1000 * 60 * 60 * 24) -
            nowTime / (1000 * 60 * 60 * 24)) / 365
    );

    const days = Math.floor(
        (((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)))) % 365
    );

    const hours = Math.floor(
        (endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)) % 24
    );

    const minutes = Math.floor(
        ((endTime / (1000 * 60)) - (nowTime / (1000 * 60))) % 60
    );

    const seconds = Math.floor(
        ((endTime / (1000)) - (nowTime / (1000))) % 60
    );

    spans[0].textContent = years; // years
    spans[1].textContent = days; // years
    spans[2].textContent = hours; // months
    spans[3].textContent = minutes; // minutes
    spans[4].textContent = seconds; // seconds
}, 1000);