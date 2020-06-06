/*console.log("Kirubha the great") /* this is like printing in the console */

/*
2 types of variables -
 let(can change later) 
 const(cannot be changed later)
*/

let counter = 0;
const updateCount = () => {
    /* retrieve list */
    counter = document.getElementById("list").getElementsByTagName("li").length;
    document.getElementById("count").innerHTML = counter;
}
const addTask = () => {
    let item = document.getElementById("task").value;
    if (item){
        let li = document.createElement("li");
        li.innerHTML = item;
        document.getElementById("list").appendChild(li);
        //from index.html -> appendChild cuz ul is parent and li is child. div is parent of ul
        document.getElementById("task").value = "";
        updateCount();
        li.addEventListener("click",()=>{
            //only parent can kill the child
            //when u click on it it kills itself - but need to ask parent to kill it
            li.parentNode.removeChild(li);
            updateCount();
        }) // this is a throw away fn ( doesnt have a name - so cannot call it after this )

    }

}

document.getElementById("submitted").addEventListener("click",addTask);

updateCount();