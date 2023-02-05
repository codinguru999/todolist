// window.onload(){
//     if (localStorage.getItem('obj') == true) {
//         alert('hi');
//     }
// }
// document.getElementById("btn").onclick=getTask;
// import {mssg} from "./login.js";
// setInterval(function(){alert('hi')},20000)
// console.log(mssg);
var users=localStorage.getItem('item')
// alert(users)
// localStorage.setItem('item','')
window.onload = function () {
    // alert('hi')
    // he()
    document.getElementById('show').innerHTML=''
    let obj = localStorage.getItem(users)
    // alert('hi')
    if (obj == null) {
        let lis = []
        // alert(JSON.stringify(lis))
        localStorage.setItem(users, JSON.stringify(lis))
    }
    else {
        let items = JSON.parse(obj)
        // alert(items[0])
        // alert(JSON.stringify(items))
        // let ite=JSON.stringify(items)
        // alert(typeof ite)
        // alert(ite[0])
        items.forEach(item => {
            createli(items, item)
        });
    }
    let addItem = document.getElementById('list')
    if (addItem.childNodes.length > 4) {
        // document.getElementById('multipledel').classList.remove('d-none');
        // document.getElementsByClassName('cbx').classList.add('d-block')
        // document.getElementsByClassName('cbx').classList.remove('d-none');
        let mycheck = document.getElementsByClassName('cbx')
        for (let i = 0; i < mycheck.length; i++) {
            // alert(mycheck[i])
            mycheck[i].classList.remove('d-none')
        }
    }
    else if (addItem.childNodes.length < 5) {
        // document.getElementById('multipledel').classList.add('d-none');
        let mycheck = document.getElementsByClassName('cbx')
        for (let i = 0; i < mycheck.length; i++) {
            // alert(mycheck[i])
            mycheck[i].classList.add('d-none')
        }
        // document.getElementsByClassName('cbx').classList.add('d-none')
    }
}
function keypressed(event) {
    if (event.keyCode == 13) {
        appendlist()
        getTask()
    }
}
function getTask() {
    document.getElementById("error").innerHTML = "";
    let task = document.getElementById("name").value;
    if (task == "") {
        document.getElementById('error').innerHTML = "Enter some text"
        setTimeout(function () { document.getElementById("error").innerHTML = ""; }, 2000)
    }
    else {
        document.getElementById("name").value = "";
        let obj = localStorage.getItem(users)
        let items = JSON.parse(obj)
        if (items[0] == null) {
            items.push(task)
            localStorage.setItem(users, JSON.stringify(items))
            createli(items, task)
        }
        else {
            if (checkduplicate(task, items)) {
                alert("Don't add similar task")
            }
            else {
                items.push(task)
                localStorage.setItem(users, JSON.stringify(items))
                createli(items, task)
            }
            // alert(items[0])

        }

    }
}
function deleteTask() {
    let addItem = document.getElementById("list")
    addItem.innerHTML = "";
    document.getElementById('multipledel').classList.add('d-none');
    localStorage.removeItem(users)
    let lis = []
    localStorage.setItem(users, JSON.stringify(lis))
    // setTimeout(function(){alert("All Task Deleted")},0)
}
function addclass(item) {
    let cl = item.classList;
    // cl.add('btn')
    cl.add('m-1')
    cl.add('bg-primary')
    cl.add('text-white')
    cl.add('p-2')
    cl.add('fa-solid')


}

function addcl(item) {
    let cl = item.classList;
    cl.add('input')
    cl.add('w-50')
    cl.add('p-1')
    cl.add('border')
    cl.add('border-primary')
    cl.add('px-3')
    cl.add('rounded-pill')
    // input w-50 p-1 border border-primary px-3 rounded-pill
}
function createli(items, task) {
    let addItem = document.getElementById("list")
    // alert(addItem.childNodes[0])
    let item = document.createElement('li')
    let cl = item.classList;
    cl.add("my-1");
    cl.add("p-3");
    cl.add("bg-warning-subtle");
    cl.add("list-group-item");
    cl.add("rounded");
    cl.add("shadow");
    cl.add("d-flex");
    cl.add("flex-row");

    let editdel = document.createElement('div')
    let cldiv = editdel.classList;
    cldiv.add("d-flex")
    cldiv.add("flex-row")
    cldiv.add("gap-2")
    cldiv.add("d-md-flex")
    cldiv.add("justify-content-md-end")
    cldiv.add("ms-auto")
    cldiv.add("float-end")
    //   d-md-flex justify-content-md-end

    let edit = document.createElement('i')
    // edit.innerHTML='<i class="fa-solid fa-pen"></i>';
    addclass(edit)
    edit.classList.add('fa-pen')
    edit.title = "Edit"
    edit.classList.add('edit')
    // edit.firstChild.removeEventListener("click")
    edit.addEventListener("click", editheading);

    let del = document.createElement('i')

    addclass(del)
    del.title = "Delete"
    del.addEventListener("click", function (e) {
        let el = e.target.parentNode.parentNode;
        el.remove();
        deleteitem(items, el.firstChild.innerHTML)
        if (addItem.childNodes.length < 5) {
            document.getElementById('multipledel').classList.add('d-none');
            let mycheck = document.getElementsByClassName('cbx')
            for (let i = 0; i < mycheck.length; i++) {
                // alert(mycheck[i])
                mycheck[i].classList.add('d-none')
            }
        }
    });
    del.classList.add('bg-danger')
    del.classList.add('fa-delete-left')

    editdel.appendChild(edit)
    editdel.appendChild(del)
    let check = document.createElement('input')
    check.type = 'checkbox'
    check.classList.add('cbx');
    check.classList.add('form-check-input')
    check.classList.add('my-auto')
    check.classList.add('p-2')
    check.classList.add('border')
    check.classList.add('border-success')
    check.classList.add('d-none')
    // let editel=document.getElementsByClassName('edit')
    editdel.append(check)

    let heading = document.createElement('h3')
    heading.innerHTML = task;
    heading.classList.add('my-auto');
    //adding elements to list
    item.appendChild(heading);
    item.appendChild(editdel)
    addItem.appendChild(item);

    if (addItem.childNodes.length > 4) {
        document.getElementById('multipledel').classList.remove('d-none');
        // document.getElementsByClassName('cbx').classList.add('d-block')
        // document.getElementsByClassName('cbx').classList.remove('d-none');
        let mycheck = document.getElementsByClassName('cbx')
        for (let i = 0; i < mycheck.length; i++) {
            // alert(mycheck[i])
            mycheck[i].classList.remove('d-none')
        }
    }
    else {
        document.getElementById('multipledel').classList.add('d-none');
        let mycheck = document.getElementsByClassName('cbx')
        for (let i = 0; i < mycheck.length; i++) {
            // alert(mycheck[i])
            mycheck[i].classList.add('d-none')
        }
        // document.getElementsByClassName('cbx').classList.add('d-none')
    }
}
function checkduplicate(task, items) {
    for (const x of items) {
        if (x.toLowerCase() === task.toLowerCase()) {
            // alert(items.indexOf(x))
            delete items[items.indexOf(x)]
            return (true);
        }

    }
    return (false);
}
function deleteitem(items, task) {
    for (const x of items) {
        if (x === task) {
            items.splice(items.indexOf(x), 1)
        }
    }
    localStorage.setItem(users, JSON.stringify(items))
}
function editelement(item, task, items) {
    // alert(item)
    // alert(task)
    let x = items.indexOf(item)
    // alert(x)
    items.splice(x, 1, task)
    localStorage.setItem(users, JSON.stringify(items))
}
function editheading(e) {
    // alert(e)
    let el = e.target.parentNode.parentNode;
    let change = document.createElement('input')
    let head = el.firstChild
    // alert(head)
    change.value = el.firstChild.innerHTML
    addcl(change)
    el.replaceChild(change, el.firstChild)
    // e.removeEventListener('click',editheading)
    // alert(el.firstChild)
    change.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            // alert(head.innerHTML)
            if (change.value == head.innerHTML) {
                el.replaceChild(head, el.firstChild)
            }
            else if (el.firstChild.value == '') {
                alert("Please enter a value")
            }
            else {
                // alert(head.innerHTML)
                // alert(el.firstChild.value)
                editelement(head.innerHTML, el.firstChild.value, items)
                head.innerHTML = el.firstChild.value
                el.replaceChild(head, el.firstChild)
            }
        }
    })
    // e.addEventListener('click',editheading)
}

function deletemutiple() {
let mylist=[]
let itemse=[]
    let myitem = document.getElementsByClassName('cbx')
    for (let i = 0; i < myitem.length; i++) {
        // alert(myitem[i])
        if (myitem[i].checked) {
            // alert("yes")
            let item = myitem[i].parentNode.parentNode
            // alert(item)
            mylist.push(item)
            // alert(item.firstChild.innerHTML)
            // let items = JSON.parse(obj)
            // deleteitem(items,item.firstChild.innerHTML)
            // item.remove()
        }
        
    }
    for (let i=0;i<mylist.length;i++){
        itemse.push(mylist[i].firstChild.innerHTML)
        mylist[i].remove()
    }
    for(const x of itemse){
        let obj = localStorage.getItem(users)
        let items = JSON.parse(obj)
        deleteitem(items,x)

    }
    if (document.getElementById('list').childNodes.length < 5) {
        document.getElementById('multipledel').classList.add('d-none');
        let mycheck = document.getElementsByClassName('cbx')
        for (let i = 0; i < mycheck.length; i++) {
            // alert(mycheck[i])
            mycheck[i].classList.add('d-none')
        }
    }
}