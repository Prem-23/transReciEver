let addchat = document.querySelector('#add');
let delchat = document.querySelector('#del');
let Containers = document.querySelector('.containers');
let addBtn = document.querySelector('.addBtn');
let closeBtn = document.querySelector('.closeBtn');
let btnCancel = document.querySelector('.btnCancel');
let chatBox = document.getElementById('addChat');
let addName = document.getElementById('addInputs');
let sourceFile = document.getElementById('file');
let delChatBox = document.getElementById('delChat');

addchat.addEventListener('click',function(){
    let containerFluid = document.createElement('div');
    Containers.appendChild(containerFluid);
    containerFluid.classList.add('containerfluid'); 
    let anker = document.createElement('a');
    containerFluid.appendChild(anker);
    anker.classList.add('containerOne');
    let division = document.createElement('div');
    anker.appendChild(division);
    division.classList.add('sectionImgContainer');
    let image = document.createElement('img');
    division.appendChild(image);
    let headerFour = document.createElement('h4');
    anker.appendChild(headerFour);
    chatBox.style.display = "block";
    // Add Button
    addBtn.addEventListener('click', function(){
        headerFour.innerHTML = addName.value;
    })
    closeBtn.addEventListener('click', function(){
        chatBox.style.display = "none";
        Containers.removeChild(containerFluid);
    })
})

delchat.onclick = function(){
    delChatBox.style.display = "block";
}
btnCancel.onclick = function(){
    delChatBox.style.display = "none";
}