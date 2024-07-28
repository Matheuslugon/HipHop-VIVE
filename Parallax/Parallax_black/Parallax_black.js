var waveBlack1 = document.getElementById('wave1-black')
var waveBlack2 = document.getElementById('wave2-black')
var waveBlack3 = document.getElementById('wave3-black')
var waveBlack4 = document.getElementById('wave4-black')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    waveBlack1.style.backgroundPositionX = 400 + rolagemPos * 1 + 'px'
    waveBlack2.style.backgroundPositionX = 300 + rolagemPos * 2 + 'px'
    waveBlack3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px'
    waveBlack4.style.backgroundPositionX = 100 + rolagemPos * 2 + 'px'
}) 