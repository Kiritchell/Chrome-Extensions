const inputEl = document.querySelector('#input-el')
const saveBTN = document.querySelector('#save-btn')
let myLeads = []
const ulEl = document.querySelector('#ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const clearButton=document.querySelector('#clear-btn')
const tabBtn = document.querySelector('#tab-btn')

if (leadsFromLocalStorage) {
myLeads = leadsFromLocalStorage
render(myLeads)
}



inputEl.addEventListener('keypress', function(event) {
if (event.keyCode === 13) {
  myLeads.push(inputEl.value)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  inputEl.value = ""
}
});

saveBTN.addEventListener('click', function(){
myLeads.push(inputEl.value)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)
inputEl.value = ""
})



function render(leads) {
let listItems = ""
for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
}
ulEl.innerHTML = listItems
}

clearButton.addEventListener('dblclick', function(){
localStorage.clear(myLeads)
myLeads = []
render(myLeads)
})

tabBtn.addEventListener('click', function(){
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
myLeads.push(tabs[0].url)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)
})

})

