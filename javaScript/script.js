let chatAndMsgSectionContainer = document.querySelector('.chatAndMsgSectionContainer');
let chatAndMsgSectionContainer2 = document.querySelector('.chatAndMsgSectionContainer');
let chatAndMsgSectionContainer3 = document.querySelector('.chatAndMsgSectionContainer');
let addChatList = document.getElementById('addChats');

let creationContainer = document.querySelectorAll('.chatAndMsgSectionContains');

creationContainer.forEach(item => {
    item.addEventListener('click', function(){
        let Visible = document.querySelector('.visible');
        Visible.className = Visible.className.replace('visible', '');
        item.className += ' visible';
        // Image And Name

        // left
        let visibleLeftImg = document.querySelector('.visible .chatSectionContainer img');
        let visibleLeftName = document.querySelector('.visible .chatSectionContainer h4')

        // Right
        let visibleRightImg = document.querySelector('.visible .msgSectionContainer img');
        let visibleRightName = document.querySelector('.visible .msgSectionContainer h4')

        visibleRightImg.src = visibleLeftImg.src;
        visibleRightName.innerHTML = visibleLeftName.innerHTML;

        // sending messages
        let inputFieldText = document.querySelector('.visible .inputField');
        let sendPlaneReceive = document.querySelector('.visible .sendPlane');
        let senderDiv = document.querySelector('.visible .sender')

        sendPlaneReceive.addEventListener('click', function(){
            let para = document.createElement('p');
            senderDiv.appendChild(para);
            para.innerHTML = inputFieldText.value;
            inputFieldText.value = "";
        })

        // Add Chat

        let addChatContainerToAdd = document.querySelector('.addChatContainer');
        let NameOfChats = document.querySelector('#NameOfChats');
        let addChatImgContainerImageInFun = document.querySelector('.addChatImgContainer img');

        visibleRightImg.addEventListener('click', function(){
            addChatContainerToAdd.classList.add('addChatVisible');
            NameOfChats.value = visibleLeftName.innerHTML;
            addChatImgContainerImageInFun.src = visibleLeftImg.src;
        })

        let cancelAddChat = document.querySelector('.cancelBtn');
        cancelAddChat.addEventListener('click', function(){
            addChatContainerToAdd.classList.remove('addChatVisible');
        })


        // Delete Chat

        let deleteBtnInList = document.querySelector('.deleteBtnInList');
        let tell = document.querySelector('.tell');
        deleteBtnInList.addEventListener('click', function(){
            if(NameOfChats.value == visibleRightName.innerHTML){
                chatAndMsgSectionContainer.removeChild(chatAndMsgSectionContains);
                addChatContainerToAdd.classList.remove('addChatVisible');
            }
            else{
                tell.classList.add('field');
            }
        })
    })
})




// add Chat
addChatList.addEventListener('click', function(){
    let chatAndMsgSectionContains = document.createElement('div');
    chatAndMsgSectionContainer.appendChild(chatAndMsgSectionContains);
    chatAndMsgSectionContains.classList.add('chatAndMsgSectionContains');
    let chatSectionContainer = document.createElement('div');
    chatAndMsgSectionContains.appendChild(chatSectionContainer);
    chatSectionContainer.classList.add('chatSectionContainer');
    let chatPersonContainer = document.createElement('div');
    chatSectionContainer.appendChild(chatPersonContainer);
    chatPersonContainer.classList.add('chatPersonContainer');
    let personImgContainer = document.createElement('div');
    chatPersonContainer.appendChild(personImgContainer);
    personImgContainer.classList.add('personImgContainer');
    let PersonImg = document.createElement('img');
    personImgContainer.appendChild(PersonImg);
    PersonImg.src = "/images/default.jpg";
    let PersonName = document.createElement('h4');
    chatPersonContainer.appendChild(PersonName);
    PersonName.innerHTML = "New Chat";

    let msgSectionContainer = document.createElement('div');
    chatAndMsgSectionContains.appendChild(msgSectionContainer);
    msgSectionContainer.classList.add('msgSectionContainer');
    let msgContainer = document.createElement('div');
    msgSectionContainer.appendChild(msgContainer);
    msgContainer.classList.add('msgContainer');
    let msgChat = document.createElement('div');
    msgContainer.appendChild(msgChat);
    msgChat.classList.add('msgChat');
    let msgChatHeader = document.createElement('header');
    msgChat.appendChild(msgChatHeader);
    msgChatHeader.classList.add('msgChatHeader');
    let personMsgContainer = document.createElement('div');
    msgChatHeader.appendChild(personMsgContainer);
    personMsgContainer.classList.add('personMsgContainer');
    let personImgMsgContainer = document.createElement('div');
    personMsgContainer.appendChild(personImgMsgContainer);
    personImgMsgContainer.classList.add('personImgMsgContainer');
    let PersonMsgImg = document.createElement('img'); 
    personImgMsgContainer.appendChild(PersonMsgImg);
    PersonMsgImg.src = PersonImg.src;
    
    let PersonMsgH4 = document.createElement('h4');
    personMsgContainer.appendChild(PersonMsgH4);
    PersonMsgH4.innerHTML = PersonName.innerHTML;
    
    let messagingSection = document.createElement('div');
    msgChat.appendChild(messagingSection);
    messagingSection.classList.add('messagingSection');
    let messagingContainer = document.createElement('div');
    messagingSection.appendChild(messagingContainer);
    messagingContainer.classList.add('messagingContainer');
    let senderContainer = document.createElement('div');
    messagingContainer.appendChild(senderContainer);
    senderContainer.classList.add('senderContainer');
    let senderMsgContainer = document.createElement('div');
    senderContainer.appendChild(senderMsgContainer);
    senderMsgContainer.classList.add('senderMsgContainer');
    let sender = document.createElement('div');
    senderMsgContainer.appendChild(sender);
    sender.classList.add('sender');
    let senderpara = document.createElement('p');
    sender.appendChild(senderpara);

    let messageInputSections = document.createElement('div');
    msgChat.appendChild(messageInputSections);
    messageInputSections.classList.add('messageInputSections');
    let msg = document.createElement('div');
    messageInputSections.appendChild(msg);
    msg.classList.add('msg');
    let msgBox = document.createElement('div');
    msg.appendChild(msgBox);
    msgBox.classList.add('msgBox');
    let textareaInputFields = document.createElement('textarea');
    msgBox.appendChild(textareaInputFields);
    textareaInputFields.classList.add('inputField');
    textareaInputFields.placeholder = "Enter your Text";
    let paperIcon = document.createElement('div');
    msgBox.appendChild(paperIcon);
    paperIcon.classList.add('paperIcon');
    let sendplaneIcon = document.createElement('i');
    paperIcon.appendChild(sendplaneIcon);
    sendplaneIcon.classList.add('fa');
    sendplaneIcon.classList.add('fa-paper-plane');
    sendplaneIcon.classList.add('sendPlane');

    creationContainer.forEach(item => {
        item.addEventListener('click', function(){
            let Visible = document.querySelector('.visible');
            Visible.className = Visible.className.replace('visible', '');
            item.className += ' visible';
            // Image And Name
    
            // left
            let visibleLeftImg = document.querySelector('.visible .chatSectionContainer img');
            let visibleLeftName = document.querySelector('.visible .chatSectionContainer h4')
    
            // Right
            let visibleRightImg = document.querySelector('.visible .msgSectionContainer img');
            let visibleRightName = document.querySelector('.visible .msgSectionContainer h4')
    
            visibleRightImg.src = visibleLeftImg.src;
            visibleRightName.innerHTML = visibleLeftName.innerHTML;
    
            // sending messages
            let inputFieldText = document.querySelector('.visible .inputField');
            let sendPlaneReceive = document.querySelector('.visible .sendPlane');
            let senderDiv = document.querySelector('.visible .sender')
    
            sendPlaneReceive.addEventListener('click', function(){
                let para = document.createElement('p');
                senderDiv.appendChild(para);
                para.innerHTML = inputFieldText.value;
                inputFieldText.value = "";
            })

            // Add Chat

            let addChatContainerToAdd = document.querySelector('.addChatContainer');

            PersonMsgImg.addEventListener('click', function(){
                addChatContainerToAdd.classList.add('addChatVisible');
            })

            let cancelAddChat = document.querySelector('.cancelBtn');
            cancelAddChat.addEventListener('click', function(){
                addChatContainerToAdd.classList.remove('addChatVisible');
            })

            let addEnterDetails = document.querySelector('.addBtn');
            let NameOfChats = document.querySelector('#NameOfChats');
            let require = document.querySelector('.require');
            let addChatImgContainerImageInFun = document.querySelector('.addChatImgContainer img');
            addEnterDetails.addEventListener('click', function(){
                if(NameOfChats.value == ""){
                    require.classList.add('mandatory');
                }
                else{
                    visibleRightName.innerHTML = NameOfChats.value;
                    visibleRightImg.src = addChatImgContainerImageInFun.src;
                    visibleLeftName.innerHTML = visibleRightName.innerHTML;
                    visibleLeftImg.src =  visibleRightImg.src;
                    addChatContainerToAdd.classList.remove('addChatVisible');
                }
            })

            // Delete Chat

            let deleteBtnInList = document.querySelector('.deleteBtnInList');
            let tell = document.querySelector('.tell');
            deleteBtnInList.addEventListener('click', function(){
                if(NameOfChats.value == visibleRightName.innerHTML){
                    chatAndMsgSectionContainer.removeChild(chatAndMsgSectionContains);
                    addChatContainerToAdd.classList.remove('addChatVisible');
                }
                else{
                    tell.classList.add('field');
                }
            })
        })
    })
    
})

// Image Load Box
function imageload(){
    let addChatImgContainer = document.querySelector('.addChatImgContainer');
    let addChatImgContainerImage = document.querySelector('.addChatImgContainer img');
    let imageFile = document.getElementById('imageFile');
    addChatImgContainer.addEventListener('click', function(){
        imageFile.click();
        
        // Image Load
        imageFile.addEventListener('change', function(){
            const file = this.files[0];

            if(file){
                let reader = new FileReader();
                reader.addEventListener('load', function(){
                    addChatImgContainerImage.setAttribute("src", this.result);
                })
                reader.readAsDataURL(file);
            }
        })
    })
}

// on default load
function loadingDefault(){
    // left
    let LeftImg = document.querySelector('.chatSectionContainer img');
    let LeftName = document.querySelector('.chatSectionContainer h4')

    // Right
    let RightImg = document.querySelector('.msgSectionContainer img');
    let RightName = document.querySelector('.msgSectionContainer h4')

    RightImg.src = LeftImg.src;
    RightName.innerHTML = LeftName.innerHTML;    
}


// function onLoadContainer(){
//     let chatAndMsgSectionContains = document.createElement('div');
//     chatAndMsgSectionContainer.appendChild(chatAndMsgSectionContains);
//     chatAndMsgSectionContains.classList.add('chatAndMsgSectionContains');
//     chatAndMsgSectionContains.classList.add('visible');
//     let chatSectionContainer = document.createElement('div');
//     chatAndMsgSectionContains.appendChild(chatSectionContainer);
//     chatSectionContainer.classList.add('chatSectionContainer');
//     let chatPersonContainer = document.createElement('div');
//     chatSectionContainer.appendChild(chatPersonContainer);
//     chatPersonContainer.classList.add('chatPersonContainer');
//     let personImgContainer = document.createElement('div');
//     chatPersonContainer.appendChild(personImgContainer);
//     personImgContainer.classList.add('personImgContainer');
//     let PersonImg = document.createElement('img');
//     personImgContainer.appendChild(PersonImg);
//     PersonImg.src = "/images/service.jpg"
//     let PersonName = document.createElement('h4');
//     chatPersonContainer.appendChild(PersonName);
//     PersonName.innerHTML = "TransReciEver";

    
//     let msgSectionContainer = document.createElement('div');
//     chatAndMsgSectionContains.appendChild(msgSectionContainer);
//     msgSectionContainer.classList.add('msgSectionContainer');
//     let msgContainer = document.createElement('div');
//     msgSectionContainer.appendChild(msgContainer);
//     msgContainer.classList.add('msgContainer');
//     let msgChat = document.createElement('div');
//     msgContainer.appendChild(msgChat);
//     msgChat.classList.add('msgChat');
//     let msgChatHeader = document.createElement('header');
//     msgChat.appendChild(msgChatHeader);
//     msgChatHeader.classList.add('msgChatHeader');
//     let personMsgContainer = document.createElement('div');
//     msgChatHeader.appendChild(personMsgContainer);
//     personMsgContainer.classList.add('personMsgContainer');
//     let personImgMsgContainer = document.createElement('div');
//     personMsgContainer.appendChild(personImgMsgContainer);
//     personImgMsgContainer.classList.add('personImgMsgContainer');
//     let PersonMsgImg = document.createElement('img'); 
//     personImgMsgContainer.appendChild(PersonMsgImg);
//     PersonMsgImg.src = PersonImg.src;
//     let PersonMsgH4 = document.createElement('h4');
//     personMsgContainer.appendChild(PersonMsgH4);
//     PersonMsgH4.innerHTML = PersonName.innerHTML;
    
//     let messagingSection = document.createElement('div');
//     msgChat.appendChild(messagingSection);
//     messagingSection.classList.add('messagingSection');
//     let messagingContainer = document.createElement('div');
//     messagingSection.appendChild(messagingContainer);
//     messagingContainer.classList.add('messagingContainer');
//     let senderContainer = document.createElement('div');
//     messagingContainer.appendChild(senderContainer);
//     senderContainer.classList.add('senderContainer');
//     let senderMsgContainer = document.createElement('div');
//     senderContainer.appendChild(senderMsgContainer);
//     senderMsgContainer.classList.add('senderMsgContainer');
//     let sender = document.createElement('div');
//     senderMsgContainer.appendChild(sender);
//     sender.classList.add('sender');
//     let senderpara = document.createElement('p');
//     let senderpara2 = document.createElement('p');
//     let senderpara3 = document.createElement('p');
//     let senderpara4 = document.createElement('p');
//     let senderpara5 = document.createElement('p');
//     let senderpara6 = document.createElement('p');
//     sender.appendChild(senderpara);
//     sender.appendChild(senderpara2);
//     sender.appendChild(senderpara3);
//     sender.appendChild(senderpara4);
//     sender.appendChild(senderpara5);
//     sender.appendChild(senderpara6);
//     senderpara.innerHTML = "Hello, Welcome to TransReciEver";
//     senderpara2.innerHTML = "This site is made by Me..";
//     senderpara3.innerHTML = "For more information about me ...";
//     senderpara4.innerHTML = "checkOut in my Github.";
//     senderpara5.innerHTML = "https://github.com/Prem-23/";
//     senderpara6.innerHTML = "For more information About sit, then check out in readTransReciEver.";
//     let messageInputSections = document.createElement('div');
//     msgChat.appendChild(messageInputSections);
//     messageInputSections.classList.add('messageInputSections');
//     let msg = document.createElement('div');
//     messageInputSections.appendChild(msg);
//     msg.classList.add('msg');
//     let msgBox = document.createElement('div');
//     msg.appendChild(msgBox);
//     msgBox.classList.add('msgBox');
//     let textareaInputFields = document.createElement('textarea');
//     msgBox.appendChild(textareaInputFields);
//     textareaInputFields.classList.add('inputField');
//     textareaInputFields.placeholder = "Enter your Text";
//     let paperIcon = document.createElement('div');
//     msgBox.appendChild(paperIcon);
//     paperIcon.classList.add('paperIcon');
//     let sendplaneIcon = document.createElement('i');
//     paperIcon.appendChild(sendplaneIcon);
//     sendplaneIcon.classList.add('fa');
//     sendplaneIcon.classList.add('fa-paper-plane');
//     sendplaneIcon.classList.add('sendPlane');
// }

