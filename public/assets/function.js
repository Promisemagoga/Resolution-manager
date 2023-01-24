const addResButton = document.querySelector("#add-res");
const newResInput = document.querySelector("#new-res");
const ResList = document.querySelector("#res-list ol");

addResButton.addEventListener("click", function () {
    const newRes = newResInput.value

    if(newRes === '') {
        return;
    }

    const ResItem = document.createElement('li');
    ResItem.innerText = newRes;
    ResList.appendChild(ResItem);

    newResInput.value = "";
});

ResList.addEventListener('click',
function(ev) {
    if(ev.target.tagName === 'LI'){
ev.target.classList.toggle('checked')
    }
},false
)
