let enableNight = () => {
    var body = document.getElementById("body");
  
    if (body.classList.contains('theme--light')){
        body.classList.remove('theme--light');
        body.classList.add('theme--dark');
    }else{
        body.classList.remove('theme--dark');
        body.classList.add('theme--light');
    }
}

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20

if(isDayTime) {
    body.classList.remove('theme--dark');
    body.classList.add('theme--light');
}
