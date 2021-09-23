const userAvatar = document.getElementById('user-avatar');
const notificationBtn = document.getElementById('notificationBtn');
const appsBtn = document.getElementById('apps');
const navBtn = document.getElementById('nav')
const micBtn = document.getElementById('micBtn')
const micModal = document.getElementById('micModal');
const overlayBtn = document.getElementById('overlayBtn');
const closeBtn = document.getElementById('closeBtn');


const toggleAccountModal = document.getElementById('toggleAccountModal');
const toggleNotificationModal = document.getElementById('toggleNotificationModal');
const toggleAppModal = document.getElementById('toggleAppModal');


userAvatar.addEventListener('click', function() {
    if(toggleNotificationModal.classList.contains('open__tool--modal')) {
        toggleNotificationModal.classList.remove('open__tool--modal')    
    }
    if(toggleAppModal.classList.contains('open__tool--modal')) {
        toggleAppModal.classList.remove('open__tool--modal')    
    }
    toggleAccountModal.classList.toggle('open__accountmodal--modal') 
})
notificationBtn.addEventListener('click', function() {
    if(toggleAppModal.classList.contains('open__tool--modal')) {
        toggleAppModal.classList.remove('open__tool--modal')    
    }
    if(toggleAccountModal.classList.contains('open__accountmodal--modal')) {
        toggleAccountModal.classList.toggle('open__accountmodal--modal') 
    }
    toggleNotificationModal.classList.toggle('open__tool--modal')
})
appsBtn.addEventListener('click', function() { 
    if(toggleNotificationModal.classList.contains('open__tool--modal')) {
        toggleNotificationModal.classList.remove('open__tool--modal')    
    }
    if(toggleAccountModal.classList.contains('open__accountmodal--modal')) {
        toggleAccountModal.classList.toggle('open__accountmodal--modal') 
    }
    toggleAppModal.classList.toggle('open__tool--modal')
})

micBtn.addEventListener('click', function() {
    micModal.classList.toggle('open__mic--modal');
    overlayBtn.classList.toggle('overlay')
})
closeBtn.addEventListener('click', function() {
    micModal.classList.toggle('open__mic--modal');
    overlayBtn.classList.toggle('overlay')
})
overlayBtn.addEventListener('click', function() {
    overlayBtn.classList.toggle('overlay') 
    micModal.classList.toggle('open__mic--modal');
})