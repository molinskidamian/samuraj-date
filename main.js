span = document.querySelector('span');
span.classList.add('red');

const addZero = (item) => {
  if(item < 10) {
    return item.textContent = `0${item}`;
  }
  return item;
}


const clock = () => {
    const time = new Date();

    // Przykładowe metody które są dostępne:
    console.log(`time.getFullYear(): ${time.getFullYear()}`);
    console.log(`time.toLocaleString(): ${time.toLocaleString()}`);
    console.log(`time.toLocaleDateString(): ${time.toLocaleDateString()}`);
    console.log(`time.getTime(): ${time.getTime()}`);

    console.log("-------------------");

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    let myFormat = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`;
    console.log(myFormat);

    span.textContent = myFormat;
}

setInterval(clock, 1000);