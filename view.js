const videoSuggests = document.querySelectorAll('#videoSuggestItem')
const playBtn = document.getElementById('play') 
const btnSubscribe = document.getElementById('btnSubscribe')
const likeBtn = document.getElementById('likeBtn')
const unlikeBtn = document.getElementById('unlikeBtn')
const sidebarToggle = document.getElementById('sidebarToggle')
const sidebarOverlayBtn = document.getElementById('sidebarOverlayBtn')
const sidebarContainer = document.getElementById('sidebarContainer')
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn')


sidebarToggle.addEventListener('click', function() {
    sidebarContainer.classList.toggle('open__sidebar');
    sidebarOverlayBtn.classList.add('sidebar__overlay');
    console.log(sidebarOverlayBtn)
})
sidebarOverlayBtn.addEventListener('click', function() {
    this.classList.toggle('sidebar__overlay');
    sidebarContainer.classList.toggle('open__sidebar');
})
sidebarCloseBtn.addEventListener('click', function() {
    sidebarContainer.classList.remove('sidebar__overlay');
    sidebarContainer.classList.remove('open__sidebar');
})
videoSuggests.forEach(function(videoSuggestItem) {
    videoSuggestItem.addEventListener('mouseover', function() {
        playBtn.classList.toggle('hover-icon'); 
    })
})
btnSubscribe.addEventListener('click', function() { 
    if(this.style.backgroundColor === 'red')
        this.style.backgroundColor = 'var(--hover-color)'
    else 
        this.style.backgroundColor = 'red'
})

likeBtn.addEventListener('click', function() {
    if(unlikeBtn.style.color === 'rgb(60, 161, 247)') {
        unlikeBtn.style.color = '#a2a2a2';
        document.getElementById('unlikeNear').style.color = '#a2a2a2';
    }
    if(this.style.color === 'rgb(60, 161, 247)') {
        
        this.style.color = '#a2a2a2'
        document.getElementById('likeNear').style.color = '#a2a2a2';
    } 
    else {
        this.style.color = '#3ca1f7' 
        document.getElementById('likeNear').style.color = '#3ca1f7';
    }
})
unlikeBtn.addEventListener('click', function() {
    if(likeBtn.style.color === 'rgb(60, 161, 247)') {
        likeBtn.style.color = '#a2a2a2';
        document.getElementById('likeNear').style.color = '#a2a2a2';
    }
    if(this.style.color === 'rgb(60, 161, 247)') {
        this.style.color = '#a2a2a2'
        document.getElementById('unlikeNear').style.color = '#a2a2a2';
    } 
    else {
        this.style.color = '#3ca1f7' 
        document.getElementById('unlikeNear').style.color = '#3ca1f7';
    }
})
