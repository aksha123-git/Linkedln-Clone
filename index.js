const headerBar = document.getElementById('toggle_my_header'); 
const searchBar = document.querySelector('.search_bar_input');
const body = document.body;
let homeContainer = document.querySelector('.center_container');

const seeMoreBtn = document.getElementById('see_more_center_responsive');
const favoriteContainer = document.getElementById('responsive_favoris');
const shawProfileBtn = document.querySelector('.me');
const btnMessageArea = document.querySelector('#btn_toggle_message_box');
const messageArea = document.querySelector('.sms_container');
let blurEl = document.createElement('span');

const profilesArray = [
    {
      id: 1,
      photoProfile: "images/profil15.jpg",
      userName: "Rafael",
      job : "Engineer mechanical",
      img: "https://picsum.photos/id/237/300/200",
      day: "3j",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 2,
      photoProfile: "images/profil12.jpg",
      userName: "Eric malin",
      job : "Engineer Electrical",
      img: "https://picsum.photos/id/27/300/200",
      day: "3J",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 3,
      photoProfile: "images/profil7-min.png",
      userName: "Cherifa",
      job : "Docteur Bio",
      img: "https://picsum.photos/id/7/300/200",
      day: "4j",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 4,
      photoProfile: "images/profil10-min.jpg",
      userName: "Joel makambi",
      job : "Petrolier",
      img: "https://picsum.photos/id/117/300/200",
      day: "2 sem",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 5,
      photoProfile: "images/profil15.jpg",
      userName: "Luccin Idrisse",
      job : " PHP Developer",
      img: "https://picsum.photos/id/40/300/200",
      day: "1 sem",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 6,
      userName: "Hortone Paul",
      photoProfile: "images/profil11.jpg",
      job : " Frontend Engineer",
      img: "https://picsum.photos/id/137/300/200",
      day: "5j",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 7,
      photoProfile: "images/profil16.jpg",
      userName: "Kevin Person",
      job : "Backend Developer",
      img: "https://picsum.photos/id/227/300/200",
      day: "3 sem",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 8,
      photoProfile: "images/profil3-min.jpeg",
      userName: "Daniel Miakel",
      job : "Electrical Engineer ",
      img: "https://picsum.photos/id/299/300/200",
      day: "3J",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 9,
      photoProfile: "images/profil9-min.jpg",
      userName: "Jefthe Dupond",
      job : "Engineer bio tech",
      img: "https://picsum.photos/id/217/300/200",
      day: "6j",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 10,
      photoProfile: "images/profil4-3-min.jpg",
      userName: "Matias Mervil",
      job : "International trade",
      img: "https://picsum.photos/id/87/300/200",
      day: "1j",
      text: " Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 11,
      photoProfile: "images/profil6-min.png",
      userName: "Syntyche Abbis ",
      job : "React Developer",
      img: "https://picsum.photos/id/4/300/200",
      day: "2 sem",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
    {
      id: 12,
      photoProfile: "images/profil5-min.jpg",
      userName: "Eunice Assim",
      job : "HR on Google",
      img: "https://picsum.photos/id/2/300/200",
      day: "2 sem",
      text: "Every engorged passion produces its counter-passion which is as evil as natural passion would have been beneficial.",
    },
  ];

  



try {
  seeMoreBtn.addEventListener('click', ()=>{
    console.log("clicked")
    favoriteContainer.classList.toggle('shaw_favorite_container')
    seeMoreBtn.classList.toggle('shaw_favorite_container')
  })

} catch (error) {
  
}
   

body.appendChild(blurEl);

searchBar.addEventListener('focus', ()=>{
   blurEl.classList.add('blur_element');
   searchBar.classList.add('input_on_focus');

})
searchBar.addEventListener('blur', ()=>{

   blurEl.classList.remove('blur_element');
   searchBar.classList.remove('input_on_focus');
})

window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

   if ( (scrollHeight - (scrollTop + clientHeight) ) <= 20 ){
    

    addProfiles(2);

   }
   try{
      if ( scrollTop > 400){
      headerBar.classList.add('toggle_menu_come');
    }
    else{
     
      headerBar.classList.remove('toggle_menu_come');
    }
   }
   catch (error) {
    
    }
    
});

const addProfiles = idx =>{
    for(let i = 0; i < idx; i++){
    
        displayProfiles()
    }
}



function displayProfiles(){
    let profiles = profilesArray.map(items =>{
  
      return `<div class="post third_post">
        <div class="profil_name_job">
            <img class="post_photo_profil" src="${profilesArray[getRandomNumber()].photoProfile}" alt="#">
            <div class="name_and_job"> 
                <h5>${profilesArray[getRandomNumber()].userName}</h4>
                <p>${profilesArray[getRandomNumber()].job}</p>
                <span>${profilesArray[getRandomNumber()].day} &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
            </div>
        </div>
        <p class="post_text"> ${profilesArray[getRandomNumber()].text}</p>
        <div class="publication">
            <img src="${profilesArray[getRandomNumber()].img}" alt="">
        </div>
        </div>
        <div class="like_share">
        p><i class="fa-solid fa-thumbs-up"></i><span>Like</span></p>
        <p><i class="fa-solid fa-comment"></i><span>Comment</span></p>
        <p><i class="fa-solid fa-share"></i><span>Repost</span></p>
        <p><i class="fa-solid fa-paper-plane"></i><span>send</span></p>
        </div>`
  
    })
    profiles = profiles.join('');
    homeContainer.innerHTML = profiles;
    
}
  
function getRandomNumber() {
    return Math.floor(Math.random() * 12);
  }

const dynamicSearch = () => {

    const valueSearch = document.getElementById("search_message").value.toUpperCase();
    const boxItems = document.querySelectorAll(".message_profil_item");
  
    const title = document.getElementsByClassName("name_pro");
  
    for (let i = 0; i < title.length; i++) {
      let match = boxItems[i].getElementsByClassName("name_pro")[0];
  
      if (match) {
        let textValue = match.textContent;
        if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
          boxItems[i].style.display = "";
        } else {
          boxItems[i].style.display = "none";
        }
      }
    }
  };
  shawProfileBtn.addEventListener('click', ()=>{
    // console.log("clicked")
    shawProfileBtn.classList.toggle('shaw_profile')
  })
  btnMessageArea.addEventListener('click', ()=>{
    console.log("clicked")
    btnMessageArea.classList.toggle('switch_btn_icon')
    messageArea.classList.toggle('shaw_message_container')
  })










