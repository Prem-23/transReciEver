const Toggle = document.getElementById('toggle');
const logo = document.getElementById('header');
const add = document.getElementById('add');
const del = document.getElementById('del');
const navSelect = document.getElementById('headerToggle');
const searchBar = document.querySelector('.searchInput');
const searchIcon = document.querySelector('.searchIcon');
const section = document.querySelector('.sectionOne');
const Hide = document.querySelector('.containers');

Toggle.addEventListener('click', function(){
    Toggle.classList.toggle('active');
    navSelect.classList.toggle('navActive');
    Hide.classList.toggle('hideOne')
});

del.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});
add.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});
logo.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});
searchBar.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});
searchIcon.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});
section.addEventListener('click', function(){
    Toggle.classList.remove('active');
    navSelect.classList.remove('navActive');
    Hide.classList.remove('hideOne')
});



