const title = document.getElementById("title")
let showing = true
let displayText
let clipProgress = 1 // Animation progress: 1 means fully visible
let targetClip = 1 // Default target is fully visible
let animationSpeedShow = 0.07 // Speed for showing the text (faster)
let animationSpeedHide = 0.01 // Speed for hiding the text (slower)
function setup() {
  noCanvas() // No need
  displayText = select("#text") // Select the HTML element with ID "text"
}

function draw() {
  // Smoothly animate the clip-path progress
  let animationSpeed = showing ? animationSpeedShow : animationSpeedHide

  clipProgress = lerp(clipProgress, targetClip, animationSpeed)

  // Update the clip-path style based on the progress
  let clipValue = `polygon(0% 0%, ${clipProgress * 100}% 0%, ${clipProgress * 100}% 100%, 0% 100%)`
  displayText.style("clip-path", clipValue)
}
function show() {
  targetClip = 1 // Fully visible
  showing = true
}

function hide() {
  targetClip = 0 // Fully hidden
  showing = false
}

function toggle() {
  if (showing) {
    hide()
  } else {
    show()
  }
}
//add listener
nodecg.listenFor("text:toggle", toggle)
//pulled the Replicant
const textRep = nodecg.Replicant("textRep")
//update new title
NodeCG.waitForReplicants(textRep).then(() => {
  textRep.on("change", () => {
    title.innerText = textRep.value.title
  })
})
