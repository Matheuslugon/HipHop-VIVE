var wave1 = document.getElementById('wave1-yellow')
var wave2 = document.getElementById('wave2-yellow')
var wave3 = document.getElementById('wave3-yellow')
var wave4 = document.getElementById('wave4-yellow')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    wave1.style.backgroundPositionX = 400 + rolagemPos * 1 + 'px'
    wave2.style.backgroundPositionX = 300 + rolagemPos * 2 + 'px'
    wave3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px'
    wave4.style.backgroundPositionX = 100 + rolagemPos * 2 + 'px'
}) 