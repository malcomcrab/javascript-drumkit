
const kitContainer = document.getElementById('kit-container')

const body = document.querySelector('body')
body.style.backgroundImage = "url('images/background.jpg')"


const drumTriggerKeys = ["a", "s", "d", "f", "g", 
                        "h", "j", "k", "l"]

const drumKitParts = ['Kick', 'Snare', 'HiHat', 'OpenHat',
                     'Tom', 'Clap', 'Boom', 'Ride', 'Tink']


for (i = 0; i <= 8; i++){
    const kitPiece = document.createElement('div')
    kitPiece.id = `kitPiece${i}`
    kitPiece.className = 'kit-piece'
    
    
    const kitTriggerText = document.createElement('p')
    let upperTriggerText = drumTriggerKeys[i].toUpperCase()
    kitTriggerText.className = 'kit-trigger-text'
    kitTriggerText.innerText = upperTriggerText


    const kitPieceText = document.createElement('p')
    kitPieceText.className = 'kit-piece-text'
    kitPieceText.innerText = drumKitParts[i] 

    kitPiece.appendChild(kitTriggerText)
    kitPiece.appendChild(kitPieceText)
    kitContainer.appendChild(kitPiece)

    
}

addEventListener('keydown', event =>{
    if(drumTriggerKeys.includes(event.key)){
        let indexNum = drumTriggerKeys.indexOf(event.key)
        drumTrigger(drumKitParts[indexNum])
        
        triggerScaleUp(`kitPiece${indexNum}`)
    }
})

function drumTrigger(drumPart){
    let drumLower = drumPart.toLowerCase()
    let audio = new Audio(`sounds/${drumLower}.wav`);
    audio.play();
}

function triggerScaleUp(kitPiece){
    const kitPieceScale = document.getElementById(`${kitPiece}`)
    kitPieceScale.className = 'kit-piece triggered'
    setTimeout(() =>{
        kitPieceScale.className = 'kit-piece'
    },200)
}