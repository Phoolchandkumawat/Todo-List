// profile code
var profile =1;
const moreProfile= document.getElementById('more-profile-icon');

function profileIconSet(){
if(profile===1){
    moreProfile.style.visibility="hidden";
    moreProfile.style.cursor="none"
} else{
    moreProfile.style.visibility="visible";
    moreProfile.style.cursor="pointer"
}
}

profileIconSet();


const toggleButton=document.getElementById('tooggle-button-click');
const toggleSlider=document.getElementById('toggle-slider-onclick')
const closeToggleButton=document.getElementById('close-button-slider');
toggleButton.onclick= toggleButtonOnclick;
closeToggleButton.onclick = function(){
toggleSlider.style.left="-250px"
// toggleSlider.style.top="-100px"
toggleButton.style.display="flex";
}
function toggleButtonOnclick(){
toggleSlider.style.left="0";
// toggleSlider.style.top="0px"
toggleSlider.style.transition="all 0.6s ease"
toggleButton.style.display="none"


}




// calender javascript code

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

const renderCalendar = () => {
let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
let liTag = "";

// console.log(firstDayofMonth);
// console.log(lastDateofMonth);
// console.log(lastDayofMonth);
// console.log(lastDateofLastMonth);

for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
}

for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                    && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;

}

for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
}
currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
daysTag.innerHTML = liTag;
}
renderCalendar();



const daysTags = document.getElementById("days");
const currentDatess = document.getElementById("currentDate");
const popup = document.getElementById("pop-up-list");
const closePopup = document.getElementById("closePopup-list");

//... rest of your code...

// Add event listener to each day's li element
daysTags.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const day = event.target.innerText;
    const month = months[currMonth];
    const year = currYear;
    const titleForYear = document.querySelector('.title-for-Year')
    const contentForPopDates = `${day} ${month} ${year}`
    titleForYear.innerHTML = contentForPopDates
    const fjdlfjddfdf= constentChange
    // console.log(fjdlfjddfdf)
    let daytodaytod = day
    // console.log(day)
    let newToday = date.getDate()
    // console.log(newToday.toString())
    // console.log(day)
    if(day == newToday){
        console.log("Today")
    } else if(day == newToday+1){
        console.log("Tomarrow")
    }

    // Show the pop-up with the selected day's date
    // popup.classList.add("active-list");
    // popupContent.innerText = `Selected date: ${day} ${month} ${year}`;
    // console.log(contentForPopDates)

    // Close the pop-up when the user clicks outside the pop-up or on the close button
    // document.addEventListener("click", (event) => {
    //   if (event.target!== popup && event.target!== closePopup) {
    //     popup.classList.remove("active");
    //     console.log('fdld')
    //   }
    // });


    // document.addEventListener("click", (event) => {
    //     if (!popup.contains(event.target) && event.target!== closePopup) {
    //       popup.classList.remove("active-list");
    //     }
    //   });

    // Add a delay before showing the popup
    setTimeout(() => {
        popup.classList.add("active-list");
        // console.log(contentForPopDates)
      }, 100);
  
      // Close the pop-up when the user clicks outside the pop-up or on the close button
      document.addEventListener("click", (event) => {
        if (!popup.contains(event.target) && event.target!== closePopup) {
          popup.classList.remove("active-list");
        }
      });

    // closePopup.addEventListener("click", () => {
    //   popup.classList.remove("active");
    // });
   
  }
});













prevNextIcon.forEach(icon => { // getting prev and next icons
icon.addEventListener("click", () => { // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear(); // updating current year with new date year
        currMonth = date.getMonth(); // updating current month with new date month
    } else {
        date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
});
});




// function popupLIstImpo(){

// const thisisalogo=document.getElementById('todolist-text-input-list');
// const thisIsPop=document.querySelector('.popup-todo-list');
// thisisalogo.innerHTML ="this is demo";
// thisIsPop.style.display="none";

// }

// popupLIstImpo();

// var nowEr = document.getElementById('dfidfd');



// nowEr.addEventListener('mouseover',function () {
//     setTimeout(() => {
//         console.log("hover on me")
    
//     }, 2000);
// })



// function getDatesOfMonth() {
//     var currentDate = new Date();
//     var year = currentDate.getFullYear();
//     var month = currentDate.getMonth();
//     var daysInMonth = new Date(year, month + 1, 0).getDate();

//     var dates = [];
//     for (var day = 1; day <= daysInMonth; day++) {
//       var date = new Date(year, month, day);
//       dates.push(date.toDateString());
//     }

//     return dates;
//   }

//   var datesOfMonth = getDatesOfMonth();
//   console.log(datesOfMonth);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function addTaskNew() {
const addTaskNewList = document.getElementById('add-task-containt');
setTimeout(() => {
    addTaskNewList.style.display="grid"
    
}, 100);
console.log("clicked here")
}
const addTaskNewList = document.getElementById('add-task-containt');

// console.log(addTaskNewList.style.display? "its true":"false");

// Close the dropdown if the user clicks outside of it
const newlineLinkTask = document.querySelector('.main')

// newlineLinkTask.onclick = function(e) {
// if (!e.target.matches('#add-task')) {
// var myDropdown = document.getElementById("add-task-containt");
//     if (addTaskNewList.style.display=="grid") {
//     addTaskNewList.style.display='none';
    
//     }
// }
// }

const fjdfdcdkc = document.getElementById('add-task-containt')

document.addEventListener("click", (event) => {
    if (!fjdfdcdkc.contains(event.target)) {
    //   popup.classList.remove("active-list");
    addTaskNewList.style.display="none"
    console.log("covv")
    }



  });






let dateTask = new Date()
const dueDate = document.getElementById('dueDate')
dateTask.getDate

let todayList = dateTask.getDate();
let listTommarow = dateTask.getDate()+1;
// console.log(dateTask.getDate())
// console.log(todayList)
// console.log(listTommarow)
// console.log(dueDate.innerText)



const ifChooseToday = document.getElementById('if-selected-today')
const ifChooseTomarrow = document.getElementById('if-selected-tomarrow')


const valueifToday = ifChooseToday.innerText
const valueifTomarrow = ifChooseTomarrow.innerText

ifChooseToday.addEventListener('click',function(){
console.log(valueifToday)
dueDate.innerText = valueifToday
newallDatadate.classList.remove('all-list-date-data')

})
ifChooseTomarrow.addEventListener('click',function(){
console.log(valueifTomarrow)
dueDate.innerText = valueifTomarrow
newallDatadate.classList.remove('all-list-date-data')
})

const chooseDateListNow=document.querySelector('.choose-date-text');


const newallDatadate= document.querySelector('.choose-date-down')
chooseDateListNow.addEventListener('click', function (){
newallDatadate.classList.toggle('all-list-date-data')
// console.log(newallDatadate)
})












dueDate.onclick = allDatesList();
function allDatesList(){

}



const checkList = document.getElementById('all-projects')

const  liCount = checkList.querySelectorAll('li').length
setInterval(() => {
const  liCount = checkList.querySelectorAll('li').length
}, 100);

// console.log(liCount)


var spanCreate= document.createElement('span')
spanCreate.innerHTML = "Nothing For Now"
spanCreate.classList.add('thisis-addd-list')
checkList.appendChild(spanCreate);
const  liCountTomarrow = checkList.querySelectorAll('li').length
window.onload = function (){
    if(liCount<=0){
        spanCreate.style.display="block"
        }

    if(liCountTomarrow<=0){
        spanCreateTomarrow.style.display="block";
    }
}


const ullSS = document.getElementById('all-projects-tomarrow')
// console.log(ullSS.children)


var spanCreateTomarrow= document.createElement('span')
    spanCreateTomarrow.innerHTML = "Nothing For Tomarrow"
    spanCreateTomarrow.classList.add('thisis-addd-list')
    ullSS.appendChild(spanCreateTomarrow);
function tomarrowJustNaver(){
    
    const  liCountTomarrow = ullSS.querySelectorAll('li').length
    if(liCountTomarrow<=0){
        spanCreateTomarrow.style.display="block"
        } else{
            spanCreateTomarrow.style.display="none"
        }
}

// ullSS.appendChild(spanCreate);

function justNever(){
    // li.length
    const  liCount = checkList.querySelectorAll('li').length
    if(liCount<=0){
        spanCreate.style.display="block"
        } else{
            spanCreate.style.display="none"
        }
}

const listInput = document.getElementById('input-task-todo-list');
function addTaskinLisn(){
const tomarrowClick = document.getElementById('cont-change-tomarrow');
const tomarrowLIst = document.getElementById('all-projects-tomarrow');
if(dueDate.innerText=="Today"){
    console.log("Clicked on today")
    console.log(listInput.value);
    let li = document.createElement('li')
    const ullSS = document.getElementById('all-projects')
    li.innerHTML = `
    <div class ="normal">
    <h3 class="">${listInput.value}</h3>
    <i class ="fa-solid fa-close"></i>
    </div>
    <span> 
    <i class="fa-solid fa-bell"></i>
        <span class="time-list">00:00 Am 
        </span> 
        <span class="tags-list"># fitnewss</span>
    </span>`;
ullSS.appendChild(li);
listInput.value="";
justNever()

} else if (dueDate.innerText =="Tomarrow") {
    console.log("click on the Tomarrow")
    let li  = document.createElement('li');
    // console.log(tomarrowListInput.value)
    li.innerHTML=`<span id="day-input"><i class="fa-solid fa-clock"></i> Tomarrow</span>
    <div class ="normal">
    <h3 class="">${listInput.value}</h3>
    <i class ="fa-solid fa-close"></i>
    </div>
    <span> 
        <span class="time-list">00:00 Am 
            <i class="fa-solid fa-bell"></i>
        </span> 
        <span class="tags-list"># fitnewss</span>
    </span>`;
    // console.log(listInput.value)
    tomarrowLIst.appendChild(li);
    listInput.value="";
    tomarrowJustNaver()
}
addTaskNewList.style.display='none';
// console.log(li.innerHTML)




}


ullSS.addEventListener("click", function(e) {
    if(e.target.tagName ==="H3"){
        e.target.classList.toggle('checked-list')
        // fdjfdlf.classList.toggle('checked-list')
        
        // saveData();
    } 
    else if(e.target.tagName ==="I"){
        let pree =e.target.parentElement
        let rpree =  pree.parentElement;
        rpree.remove();
        // console.log(pree); 
        // console.log(rpree); 
        // e.target.parentElement.remove();
        // e.target.tagName.remove("LI");
        // saveData();
        justNever()
        tomarrowJustNaver()
    }
},false);


checkList.addEventListener("click", function(e) {
    if(e.target.tagName ==="H3"){
        e.target.classList.toggle('checked-list')
        // fdjfdlf.classList.toggle('checked-list')
        
        // saveData();
    } 
    else if(e.target.tagName ==="I"){
        let pree =e.target.parentElement
        let rpree =  pree.parentElement;
        rpree.remove();
        // console.log(pree); 
        // console.log(rpree); 
        // e.target.parentElement.remove();
        // e.target.tagName.remove("LI");
        // saveData();
        justNever()
        tomarrowJustNaver()
    }
},false);








const constentChange= document.getElementById('cont-change');
// console.log("this is",constentChange)









// onclick page change
const tomarrow = document.getElementById('tomarrow');
const todayOnclick = document.getElementById('today-onclick');
const onClickChangeToday = document.getElementById('cont-change');
const onClickChangeTomarrow = document.getElementById('cont-change-tomarrow');


tomarrow.addEventListener('click',function(){
    onClickChangeTomarrow.classList.remove('click-for-change');
    onClickChangeToday.classList.add('click-for-change');
    // onClickChangeTomarrow.classList.toggle('click-for-change');
    // onClickChangeToday.classList.toggle('click-for-change');
})



todayOnclick.addEventListener('click',function(){
    onClickChangeTomarrow.classList.add('click-for-change');
    onClickChangeToday.classList.remove('click-for-change');
    // onClickChangeTomarrow.classList.toggle('click-for-change');
    // onClickChangeToday.classList.toggle('click-for-change');
})



// search button page code 
const searchButtonPage = document.getElementById('search-btn-list')
const pageSearchlist= document.getElementById('search-button-page-list')
searchButtonPage.addEventListener('click',function (){
    setTimeout(() => {
        pageSearchlist.style.display="grid";
    }, 100);
document.addEventListener("click", (event) => {
    if (!pageSearchlist.contains(event.target)) {
        pageSearchlist.style.display="none"
    // console.log("covv")
    }})

})



// priority page list style 

const priorityStyleList = document.getElementById('priority-list');
const priorityonclick = document.getElementById('priority-onclick');
priorityonclick.addEventListener('click', function (){
    priorityStyleList.classList.toggle('priority-list-style-active')
})


const dkce = priorityStyleList.children;
const dcke = dkce.innerText;
const arrrr = [];
// console.log(dkce)
for (let int in dkce){
    let c = dkce[int].innerText
    let cd = int
    arrrr.push(c)
    // console.log(dkce[int])
    console.log(c)
    // console.log(cd)
}
arrrr.length=3;
console.log(arrrr)

function choseperiority(){
    let topP = document.getElementById('top-priority')
    let middleP = document.getElementById('middle-priority')
    let lowP = document.getElementById('low-priority')
    let homePriority = document.getElementById('home-priority')
    topP.onclick = ()=> {
        homePriority.innerHTML=arrrr[0];
        priorityStyleList.classList.remove('priority-list-style-active');
    }
    middleP.onclick = ()=> {
        homePriority.innerHTML=arrrr[1];
        priorityStyleList.classList.remove('priority-list-style-active');
    }
    lowP.onclick = ()=> {
        homePriority.innerHTML=arrrr[2];
        priorityStyleList.classList.remove('priority-list-style-active');
    }
}

choseperiority()

// for (let i =0; i <= dkce; i++){
//     console.log("d")
// }








var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "grid";  
}






// profile page edit page 


const profileEditPage = document.getElementById('profile-page-editall');
const onclickprofileOpen = document.getElementById('onclickopenid');

onclickprofileOpen.addEventListener('click', function (){
        profileEditPage.style.display="flex";

})

const closeProfliePage = document.getElementById('close-profile-page')
closeProfliePage.addEventListener('click', function (){
    profileEditPage.style.display="none";
})


// onclickprofileOpen.addEventListener('click', function (){
//     profileEditPage.style.display="flex";
//     if(profileEditPage.style.display="flex"){
//         document.addEventListener("click", (event) => {
//             if (!profileEditPage.contains(event.target)) {
//             //   popup.classList.remove("active-list");
//             // addTaskNewList.style.display="none"
//             profileEditPage.style.display="none";
//             console.log("covv")
//             }

//     }
// }
// })







// button code for the callenger

// const nexFre = document.getElementById('prev-btn')
// const nexFrenext = document.getElementById('next-btn')



// function nexfpre(){
//     let newlse = document.querySelectorAll('.span-popup-cal li');
//     console.log(newlse.length);
// nexFre.onclick= function (){
//     for (let i = 0; i<= newlse.length; i++){
//         const newlse = document.querySelectorAll('.span-popup-cal li');
//         console.log('dfjf')
//         console.log(i)
    
//     }
// }
        
// }

// nexfpre()
// const slider = document.querySelectorAll('.text-todolist-popup.span-popup-cal');
// const prevBtn = document.querySelectorAll('#prev-btn');
// const nextBtn = document.querySelectorAll('#next-btn');

// prevBtn.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     slider[index].scrollLeft -= slider[index].offsetWidth;
//   });
// });

// nextBtn.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     slider[index].scrollLeft += slider[index].offsetWidth;
//   });
// });











// tomarrow code change

// const tomarrowClick = document.getElementById('cont-change-tomarrow');
// const tomarrowLIst = document.getElementById('all-projects-tomarrow');


// function tomarrowAddTast(){
//     if(dueDate.innerText=="Today"){
//         console.log("Clicked on today")
    

//     } else if (dueDate.innerText =="Tomarrow") {
//         console.log("click on the Tomarrow")
//         let li  = document.createElement('li');
//         console.log(tomarrowListInput.value)
//         li.innerHTML=`<span id="day-input"><i class="fa-solid fa-clock"></i> Tomarrow</span>
//         <h3>${listInput.value}</h3>
//         <span> 
//             <span class="time-list">09:00 Am 
//                 <i class="fa-solid fa-bell"></i>
//             </span> 
//             <span class="tags-list"># fitnewss</span>
//         </span>`;
//         console.log(listInput.value)
//         tomarrowLIst.appendChild(li);
//     }
// }



// tomarrowAddTast()





// Get the user input for the selected date
// const selectedDate = parseInt(prompt("Enter the date (1-31):"));

// Get the current day
// const currentDateDate = new Date().getDate();

// // Calculate the difference in days
// let daysDiff;
// if (selectedDate >= currentDateDate) {
//     daysDiff = selectedDate - currentDateDate;
// } else {
//     daysDiff = 31 - currentDateDate + selectedDate;
// }

// // Update the date based on the difference
// const newDate = new Date();
// newDate.setDate(newDate.getDate() + daysDiff);

// console.log("Selected Date:", selectedDate);
// console.log("Updated Date:", newDate.toISOString().slice(0, 10));











// tomarrow on click containt change cods 


// const tomarrow = document.getElementById('tomarrow');
// tomarrow.onclick = function (){
//     // console.log("this is")
//     constentChange.innerHTML= "thisdddd"
// }
















// constom not to be used for this project only for the practice porpuse
