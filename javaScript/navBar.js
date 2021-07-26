const Toggle = document.getElementById('toggle');
const logo = document.getElementById('header');
const add = document.getElementById('addChats');
const navSelect = document.getElementById('headerToggle');
const searchBar = document.querySelector('.searchInput');
const searchIcon = document.querySelector('.searchIcon');
const section = document.querySelector('.sectionContainer');
const container = document.querySelector('.chatAndMsgSectionContainer');

Toggle.addEventListener('click', function(){
    Toggle.classList.toggle('active');
    navSelect.classList.toggle('navActive');
    container.classList.toggle('container');
});
add.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    container.classList.remove('container');
});
logo.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    container.classList.remove('container');
});
searchBar.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    container.classList.remove('container');
});
searchIcon.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    container.classList.remove('container');
});
section.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    container.classList.remove('container');
});



