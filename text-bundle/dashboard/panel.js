const toggleButton = document.getElementById("text-toggle")
const title = document.getElementById("title")
const saveButton = document.getElementById("save")
const toggleStatus = document.getElementById("status")
//add default visibility for lower third
toggleStatus.innerText = "Hide!"

let isChange = true
//run toggle
toggleButton.onclick = () => {
  nodecg.sendMessage("text:toggle")
  if (isChange) {
    toggleStatus.innerText = "Show!"
    isChange = false
  } else {
    toggleStatus.innerText = "Hide!"
    isChange = true
  }
}
const textRep = nodecg.Replicant("textRep")

NodeCG.waitForReplicants(textRep).then(() => {
  textRep.on("change", () => {
    title.value = textRep.value.title
  })
})
//update lower third title
saveButton.onclick = () => {
  textRep.value.title = title.value
}
