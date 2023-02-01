// document.getElementById("btn").onclick=getTask;
function keypressed(event){
    if(event.keyCode==13){
        getTask()
    }
}
function getTask(){
    document.getElementById("error").innerHTML="";
    let task=document.getElementById("name").value;
    // alert(task);
    if(task==""){
        document.getElementById('error').innerHTML="Enter some text"
        setTimeout(function(){document.getElementById("error").innerHTML="";},2000)
    }
    else{
        document.getElementById("name").value="";
        let text="You entered-->> \'"+ task +"\'";
        // alert(text);
        let addItem=document.getElementById("list")
        // alert(addItem.childNodes[0])
        let item=document.createElement('li')
        let cl=item.classList;
        cl.add("my-1");
        cl.add("p-3");
        cl.add("bg-warning-subtle");
        cl.add("list-group-item");
        cl.add("rounded");
        cl.add("shadow");
        cl.add("d-flex");
        cl.add("flex-row");

        let editdel= document.createElement('div')
        let cldiv=editdel.classList;
        cldiv.add("d-grid")
        cldiv.add("gap-2")
        cldiv.add("d-md-flex")
        cldiv.add("justify-content-md-end")
        cldiv.add("ms-auto")
        cldiv.add("float-end")
        //   d-md-flex justify-content-md-end

        let edit=document.createElement('i')
        // edit.innerHTML='<i class="fa-solid fa-pen"></i>';
        addclass(edit)
        edit.classList.add('fa-pen')
        edit.title="Edit"
        // edit.firstChild.removeEventListener("click")
        edit.addEventListener("click",function(e){
            let el=e.target.parentNode.parentNode;
            let change=document.createElement('input')
            let head=el.firstChild
            // alert(head)
            change.value=el.firstChild.innerHTML
            addcl(change)
            el.replaceChild(change,el.firstChild)
            // alert(el.firstChild)
            change.addEventListener("keydown", function(event){
                if(event.keyCode==13){
                    // alert(head.innerHTML)
                    if(change.value==head.innerHTML){
                        el.replaceChild(head,el.firstChild)
                    }
                    else if(el.firstChild.value==''){
                        alert("Please enter a value")
                    }
                    else{
                        head.innerHTML=el.firstChild.value
                        el.replaceChild(head,el.firstChild)
                    }
                }
            })
            // let changevalue=prompt("Change Task",el.firstChild.innerHTML);
            // if(changevalue==null || changevalue==""){
            //     alert("enter value");
            // }
            // else if(changevalue==el.firstChild.innerHTML){
            //     alert("You have not changed the value")
            // }else{
            //     el.firstChild.innerHTML=changevalue;
            // }
        });

        let del=document.createElement('i')
        // del.innerHTML='<i class="fa-solid fa-delete-left"></i>'
        addclass(del)
        del.title="Delete"
        del.addEventListener("click",function(e){
            let el=e.target.parentNode.parentNode;
            el.remove();
            if(addItem.childNodes.length<5){
                document.getElementById('multipledel').classList.add('d-none');
            }
        });
        del.classList.add('bg-danger')
        del.classList.add('fa-delete-left')

        editdel.appendChild(edit)
        editdel.appendChild(del)

        let heading=document.createElement('h3')
        heading.innerHTML=task;
        heading.classList.add('my-auto');
        //adding elements to list
        item.appendChild(heading);
        item.appendChild(editdel)
        addItem.appendChild(item);
        // alert(addItem.childNodes.length)
        // alert(text);
        if(addItem.childNodes.length>4){
            document.getElementById('multipledel').classList.remove('d-none');
        }
        else{
            document.getElementById('multipledel').classList.add('d-none');
        }
    }
}
function deleteTask(){
    let addItem=document.getElementById("list")
    addItem.innerHTML="";
    document.getElementById('multipledel').classList.add('d-none');
    // setTimeout(function(){alert("All Task Deleted")},0)
}
function addclass(item){
    let cl=item.classList;
    // cl.add('btn')
    cl.add('m-1')
    cl.add('bg-primary')
    cl.add('text-white')
    cl.add('p-2')
    cl.add('fa-solid')
    

}

function addcl(item){
    let cl=item.classList;
    cl.add('input')
    cl.add('w-25')
    cl.add('p-1')
    cl.add('border')
    cl.add('border-primary')
    cl.add('px-3')
    cl.add('rounded-pill')
    // input w-50 p-1 border border-primary px-3 rounded-pill
}