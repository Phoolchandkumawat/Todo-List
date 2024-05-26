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


// }

// popupLIstImpo();

// var nowEr = document.getElementById('dfidfd');



// nowEr.addEventListener('mouseover',function () {
//     setTimeout(() => {
//         console.log("hover on me")
    
//     }, 2000);
// })





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
const listInputMost = document.getElementById('input-task-todo-list');
console.log(listInputMost.value)
function addTaskinLisn(){
const tomarrowClick = document.getElementById('cont-change-tomarrow');
const tomarrowLIst = document.getElementById('all-projects-tomarrow');
const timePickerddddd = document.querySelector('#remainder-time-picker');
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
        <span class="time-list">${timePickerddddd.value} 
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
        <span class="time-list"> 
            <i class="fa-solid fa-bell"></i>${timePickerddddd.value}
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

document.querySelector('#remainder-time-picker').value = '12:00'


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






// remiande code 

const onclickRemainder = document.getElementById('onclick-remainder')
const onclickRemainderPage = document.getElementById('page-remainder')

onclickRemainder.addEventListener('click', function(){
    // onclickRemainderPage.style.display='grid';
    onclickRemainderPage.classList.toggle('remainder-list-style-active')
})



// Generate a unique ID
const generateId = () => {
    // Implementation for generating a unique ID
  };
  
  // Save the updated todo item object to your data store
  const saveTodoItem = (todoItem) => {
    // Implementation for saving the todo item object
  };
  
  // Get the time picker and add an event listener to it
  const timePicker = document.querySelector('#remainder-time-picker');
  timePicker.addEventListener('input', (e) => {
    const selectedTime = e.target.value;
    const formattedTime = selectedTime.split(':').map((t) => t.padStart(2, '0')).join(':');
  
    const todoItem = {
      id: generateId(),
      text: 'Buy groceries',
      completed: false,
      remainder: formattedTime
    };
  
    saveTodoItem(todoItem);
  
    console.log(`Remainder time changed to ${formattedTime}`);
  });
  
  // Get the add todo button and add an event listener to it
const addTodoButton = document.querySelector('#add-todo-button');
addTodoButton.addEventListener('click', () => {
    // const todoText = document.querySelector('#todo-input').value;
    const remainderTime = document.querySelector('#remainder-time-picker').value;
  
    const formattedTime = remainderTime.split(':').map((t) => t.padStart(2, '0')).join(':');
  
    const todoItem = {
      id: generateId(),
      // text: todoText,
      completed: false,
      remainder: formattedTime
    };
  
    saveTodoItem(todoItem);
  
    // document.querySelector('#todo-input').value = '';
    // document.querySelector('#remainder-time-picker').value = '12:00';
  
    const ddde = formattedTime;
    // arrrrrr.push(ddde);
    // console.log(`Todo item added with text "${todoText}" and remainder time ${formattedTime}`);
    console.log(ddde);
    onclickRemainderPage.classList.remove('remainder-list-style-active')
    // console.log(arrrrrr)
    // thisiis = ddde
    // console.log(thisiis);

});
  
  
  

  
