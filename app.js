console.log('Drawing A Toilet');

// draw a toilet
// make a flush button
// flush button functional
// toilet seat can be lifted

var bowl = document.querySelector('.bowl');

var flush = document.querySelector('.flush');

function openLid() {
    bowl.style.backgroundColor = 'darkolivegreen'
}

function handleFlush() {
    bowl.style.backgroundColor = 'mintcream'
}

flush.addEventListener('click', handleFlush)

bowl.addEventListener('click', openLid)