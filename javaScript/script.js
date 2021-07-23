let visible = document.querySelector('.containerfluid');
let userImage = document.querySelector('.userImage');
let userName = document.querySelector('.userName');
let view = document.querySelector('.visible');
let selector = document.querySelectorAll('.containers .containerfluid');
let chatContainer = document.querySelector('.chatContainer');


selector.forEach(item => {
    item.addEventListener('click', function(){
        let view = document.querySelector('.visible');
        view.className = view.className.replace('visible', '');
        item.className += ' visible';
        let ActiveName = document.querySelector('.visible h4');
        let ActiveImg = document.querySelector('.visible img');
        userName.innerHTML = ActiveName.innerHTML;
        userImage.src = ActiveImg.src;
    })
})

function loadFirstUser(){
    visible.classList.add('visible');
    let Img = document.querySelector('.visible img');
    let PartImg = document.querySelector('.chatContainerTwo img');
    let Name = document.querySelector('.visible h4');
    let PartName = document.querySelector('.chatContainerTwo h4');
    PartImg.src = Img.src;
    PartName.innerHTML = Name.innerHTML;
}

// let inputField = document.querySelector('.inputField');
// let SendToFriends = document.querySelector('.sendPlane');


function creation(){
    // Create Chat Container
    let chatContainerName = document.createElement('div');
    chatContainer.appendChild(chatContainerName);
    chatContainerName.classList.add('chatContainerName');
    let chatContainerThree = document.createElement('div');
    chatContainerName.appendChild(chatContainerThree);
    chatContainerThree.classList.add('chatContainerThree');
    let senderContainer = document.createElement('div');
    chatContainerThree.appendChild(senderContainer);
    senderContainer.classList.add('senderContainer');
    let sender = document.createElement('div');
    senderContainer.appendChild(sender);
    sender.classList.add('sender');

    let chatContainerFour = document.createElement('div');
    chatContainerName.appendChild(chatContainerFour);
    chatContainerFour.classList.add('chatContainerFour');
    let msg = document.createElement('div');
    chatContainerFour.appendChild(msg);
    msg.classList.add('msg');
    let msgBox = document.createElement('div');
    msg.appendChild(msgBox);
    msgBox.classList.add('msgBox');
    let InputFields = document.createElement('textarea');
    msgBox.appendChild(InputFields);
    InputFields.classList.add('inputField');
    InputFields.cols = "30"
    InputFields.rows = "1";
    InputFields.placeholder = "Enter your Text";
    let paperIcon = document.createElement('div');
    msgBox.appendChild(paperIcon);
    paperIcon.classList.add('paperIcon');
    let sendPlaneIcon = document.createElement('i');
    paperIcon.appendChild(sendPlaneIcon);
    sendPlaneIcon.classList.add('fa');
    sendPlaneIcon.classList.add('fa-paper-plane');
    sendPlaneIcon.classList.add('sendPlane');

    sendPlaneIcon.onclick = function(){
        let para = document.createElement('p');
        sender.appendChild(para);
        para.innerHTML = InputFields.value;
        InputFields.value = "";
    };
}