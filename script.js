const inputEl = document.querySelector('#input-el')
const saveBTN = document.querySelector('#save-btn')
let myLeads = []
const ulEl = document.querySelector('#ul-el')

saveBTN.addEventListener('click', function(){
  console.log(myLeads)
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
})

function renderLeads(){
  let listItems = ""
    for(let i = 0; i<myLeads.length;i++){
    listItems += `<li>
                      <a target='_blank' href='https://www.${myLeads[i]}'>
                       ${myLeads[i]}
                      </a>
                  </li>`
    }
  ulEl.innerHTML = listItems
  }
