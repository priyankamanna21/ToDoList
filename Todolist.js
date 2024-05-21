let inputbox=document.getElementById('input-place');
let items=document.getElementById('item');
function addTask(){
    if(inputbox.value === ''){
        alert('Add your task please!');
    }
    else{
        // let del=document.createElement('<i class="fa-solid fa-xmark">')
        let task=document.createElement('li');
        task.textContent=inputbox.value;
        items.appendChild(task);
       
        let icon=document.createElement('span');
        icon.textContent='\u00d7';
        task.appendChild(icon);
    }
    inputbox.value='';
    savedata();
}

items.addEventListener('click',(el)=>{
    if(el.target.tagName ==='SPAN'){
    el.target.parentElement.remove();
    savedata();
   
   }
   
   else if(el.target.tagName ==='LI'){
    el.target.classList.toggle('checked');
    savedata();
   
   }

})
// function savedata(){
//     localStorage.setItem("data",items.innerHTML);
// }
// function printlist(){
//     items.innerHTML=localStorage.getItem("data");
// }
// printlist();