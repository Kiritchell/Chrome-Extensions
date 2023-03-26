const inputEl = document.querySelector('#input-el')
const saveBTN = document.querySelector('#save-btn')
let myLeads = []
const ulEl = document.querySelector('#ul-el')
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("Lead"))

console.log(leadsFromLocalStorage)

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

//The two below will save with save button or enter key

inputEl.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    myLeads.push(inputEl.value)
    localStorage.setItem("Lead", JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = ""
  }
});

saveBTN.addEventListener('click', function(){
  myLeads.push(inputEl.value)
  localStorage.setItem("Lead", JSON.stringify(myLeads  ))
  renderLeads()
  inputEl.value = ""
})



function renderLeads(){
  let listItems = ""
    for(let i = 0; i<myLeads.length;i++){
    listItems += `<li class="list-items">
                      <a target='_blank' href='https://www.${myLeads[i]}'>
                       ${myLeads[i]}
                      </a>
                  </li>`
    }
  ulEl.innerHTML = listItems
  }
