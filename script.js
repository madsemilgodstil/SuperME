fetch('https://kea-alt-del.dk/t7/superheroes/')
  .then(response => response.json())
  .then(dataRecieved)

function dataRecieved (data) {
  data.forEach(showSuperHero)
}

function showSuperHero (hero) {
  const superHero = document.querySelector('template').content
  const myClone = superHero.cloneNode(true)

  myClone.querySelector('.mySuperName span').textContent = hero.superName
  myClone.querySelector('img').src = hero.img
  myClone.querySelector('.myAbilities1').textContent = hero.abilities[0]
  myClone.querySelector('.myAbilities2').textContent = hero.abilities[1]
  myClone.querySelector('.myAbilities3').textContent = hero.abilities[2]
  myClone.querySelector('.myAbilities4').textContent = hero.abilities[3]
  myClone.querySelector('.myCivilName').textContent = hero.civilName
  myClone.querySelector('.myAge').textContent = hero.age

  const parentElement = document.querySelector('main')
  parentElement.appendChild(myClone)
}

//   <h1 class="mySuperName"></h1>
//             <img src="" alt="">
//             <p class="myAbilities"></p>
//             <h2 class="myCivilName"></h2>
//             <p class="myAge"></p>
