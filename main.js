let time = document.querySelector("#time");
let date = document.querySelector("#date");


setInterval( () => {
    today()
}, 1000);


// console.log(today);

function today(){
    let today = new Date();

    const monthNames = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];

    const DayNames = ["Sat","Sun","Mon","Tue","Wed","Thur","Fri"];
     
    
    let CurrentTime = `${today.getHours() < 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() < 9 ? '0' + today.getMinutes() : today.getMinutes()}: ${today.getSeconds() < 9 ? '0' + today.getSeconds(): today.getSeconds()}`
    
    time.innerHTML = CurrentTime;
      
    let CurrentDate = ` ${DayNames[today.getDay()+1]} , ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`
    
    date.innerHTML = CurrentDate;
    
    
    
}

