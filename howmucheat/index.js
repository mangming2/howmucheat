const menus = ["치킨.jpg","피자.jpg","떡볶이.jpg"];
const chosenmenu = menus[Math.floor(Math.random() * menus.length)];
const todaymenu = document.createElement("img");
todaymenu.src=`img/${chosenmenu}`;

todaymenuimg = document.querySelector(".todaymenu");
todaymenuimg.appendChild(todaymenu);


