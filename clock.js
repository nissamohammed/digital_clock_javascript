//date is a class in javascript which retrieve system current date,time,hours etc..

function getTime(){
    const time = new Date()
    console.log(time);
    const hour = time.getHours()
    console.log(hour);
    const min = time.getMinutes()
    console.log(min);
    const sec = time.getSeconds()
    console.log(sec);
    result.innerHTML = `${hour} : ${min} : ${sec} ${hour>=12?'PM':'AM'}`

    setTimeout(() => {
    getTime()
    }, 1000);
}
getTime()
