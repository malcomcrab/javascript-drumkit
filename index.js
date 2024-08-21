
const kitContainer = document.getElementById('kit-container')

const body = document.querySelector('body')
body.style.backgroundImage = "url('images/background.jpg')"

const drumKitParts = ['Kick', 'Snare', 'HiHat', 'OpenHat',
                     'Tom', 'Clap', 'Boom', 'Ride', 'Tink']


for (i = 0; i <= 8; i++){
    const kitPiece = document.createElement('div')
    kitPiece.id = `kitPiece${i}`
    kitPiece.class = 'kitPiece'
    kitPiece.innerText = drumKitParts[i] 
    kitContainer.appendChild(kitPiece)

    kitPiece.addEventListener('click', event =>{
        drumTrigger(kitPiece.innerText)
        
    })
}


function drumTrigger(drumPart){
    
    let drumLower = drumPart.toLowerCase()
    console.log(drumLower)
    let audio = new Audio(`sounds/${drumLower}.wav`);
    audio.play();
}