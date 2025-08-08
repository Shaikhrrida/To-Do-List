const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!"); //if we enter nothing
    } else {
        let li = document.createElement("li"); //creating and html elem with tag li and storing it in the var li
        li.innerHTML = inputbox.value; //whatever text we add in the input feild 
        listcontainer.appendChild(li); // the above li will be displayed under this container
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function(e){ //whenever we will clk in th container we have clicked
    if(e.target.tagName === "LI"){ //if we clk on li,
        e.target.classList.toggle("checked");//it will add the checked class name and if it is already there added it will remove as we have used toggle
        savedata();
    }
    else if(e.target.tagName === "SPAN") { //if we clk on a span elem,
        e.target.parentElement.remove();//it will remove the parent elem the is li(delete it)
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML); //it will save all the data in this whole file

}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();