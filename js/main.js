const notificationCounter = document.querySelector(".notification__counter");
const markAsRead = document.querySelector(".mark__read");
const redDot = document.querySelectorAll(".fa-circle");
const notification = document.querySelectorAll(".notification");

let count = 7;

// function responsible for the mark all as read 

markAsRead.addEventListener("click", (e) => {
        for(let i = 0; i < notification.length; i++){
            notification[i].style.background = "white";
            redDot[i].style.display = "none";
            notificationCounter.textContent = --count;
        }

            if(notificationCounter.textContent = "0"){
                count = 0;
                notificationCounter.textContent = count;
            }
});


// clicking each notifications this is the function that dictates what happens

for(let i = 0; i < notification.length; i++){
notification[i].addEventListener("click", (e) => {
        if(count > 0) {
            redDot[i].style.display = "none";
            notification[i].style.background = "white";
                notificationCounter.textContent = --count;
            }
                                
},  {once: true});
}

