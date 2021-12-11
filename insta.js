let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");
let args = minimist(process.argv);
// how to run this function
// node insta.js --url="https://www.instagram.com/" --file=you.json
let youjson = fs.readFileSync(args.file,"utf-8");
let youjso = JSON.parse(youjson);
// open browser
async function run(){
let browser = await puppeteer.launch({
    headless : false,
    args : [
    '--start-maximized'
    ],
    defaultViewport : null
  
});
let pages1 = await browser.pages();
let page = pages1[0];
await page.goto(args.url);

for(let k = 0 ;k<youjso.length;k++){
// type id and password on instagram
await page.waitFor(1000);

await page.waitForSelector("input[name='username']");
await page.type("input[name='username']",youjso[k].id,{delay : 30});

// waitng for 1sec after typing username
await page.waitFor(1000);

// typing password
await page.waitForSelector("input[type='password']");
await page.type("input[type='password']",youjso[k].pass,{delay : 30});

// waitng for 1 sec after typing password

await page.waitFor(1000);

// clicking on login button
await page.waitForSelector("button[type='submit']");
await page.click("button[type='submit']");

// after loging waitng for 1 sec

await page.waitFor(1000);

// clicking on notnow button
await page.waitForSelector("div.cmbtv");
await page.click("div.cmbtv");
if(k == 0){
// again wait for 1 sec
await page.waitFor(1000);

// clicking on notnow button
await page.waitForSelector("button.aOOlW.HoLwm");
await page.click("button.aOOlW.HoLwm");

}

// again wait for 1 sec
await page.waitFor(1000);

// clicking on the search bar

    for(let j = 0;j<youjso[k].names.length;j++){

        await page.waitFor(1000);

        // name is geting typed
        await page.waitForSelector("input[type='text']");
        await page.type("input[type='text']",youjso[k].names[j],{delay : 30});
        
        // wait for 6sec after typing name
        await page.waitFor(1000);

       await page.keyboard.press('Enter');
       await page.keyboard.press('Enter');

       await page.waitFor(1000);

    
       // then click the follow button
      if(k == 0){
        await page.waitForSelector("button.sqdOP.L3NKy.y3zKF");
       await page.click("button.sqdOP.L3NKy.y3zKF");
      }else{
        await page.waitForSelector("button.sqdOP.L3NKy.y3zKF");
        await page.click("button.sqdOP.L3NKy.y3zKF");
      }
       


       await page.waitFor(1000);
     




       await page.waitForSelector("input[type='text']");
       for(let i =1;i<=17;i++){
        await page.keyboard.press('Backspace',{delay : 60})
        await page.waitFor(20);
       }
          // wait for 1 sec
          await page.waitFor(20);
    }

    await page.waitFor(1000);

    await page.waitForSelector("span._2dbep.qNELH");
    await page.click("span._2dbep.qNELH");

    await page.waitFor(1000);
     
    await page.waitForSelector("div.-qQT3");
    await page.click("div.-qQT3");

    await page.waitFor(1000);

    await page.waitForSelector("button.sqdOP.yWX7d.y3zKF");
    await page.click("button.sqdOP.yWX7d.y3zKF");
 

}
 await browser.close();


}



run()





