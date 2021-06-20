
var lightOff = document.querySelector(".off-light-js");
var lightOn = document.querySelector(".on-light-js");
var swtichOn = document.querySelector(".on-switch-js")
var swtichOff = document.querySelector('.off-switch-js')

function onLights() {
    lightOff.style.display = 'none';
    lightOn.style.display = 'inline';
    swtichOff.style.display = 'none';
    swtichOn.style.display = "inline";
}

function offLights() {
    lightOff.style.display = 'inline';
    lightOn.style.display = 'none';
    swtichOff.style.display = 'inline';
    swtichOn.style.display = "none";
}


document.querySelector('.off-switch-js').addEventListener('click', function () {
    onLights();
});

document.querySelector('.on-switch-js').addEventListener('click', function () {
    offLights();
});


