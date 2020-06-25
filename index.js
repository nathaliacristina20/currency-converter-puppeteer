const puppeteer = require('puppeteer');

const readlineSync = require('readline-sync');

console.log('Bem vindo ao Bot conversor!');

async function robo(){
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const moedabase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedafinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';

  const url = `https://www.google.com/search?q=${moedabase}+para+${moedafinal}&oq=${moedabase}+para+${moedafinal}&aqs=chrome..69i57j69i61l2j69i60j69i65l2j69i60l2.1641j0j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);

  await page.screenshot({ path: 'example.png'});

  const result = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${moedabase} em ${moedafinal} eh ${result}`);

  //await browser.close();

}

robo();