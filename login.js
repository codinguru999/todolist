// export const mssg ='hi';
// obj={}
// localStorage.setItem('log',JSON.stringify(obj))

window.onload = function () {
    // console.log(mssg);
    var obj = localStorage.getItem('log')
    // alert('hi')
    if (obj==null) {
        var lis = {}
        // alert('hi')
        // alert(JSON.stringify(lis))
        localStorage.setItem('log', JSON.stringify(lis))
    }
}
function logincheck(){
    let InputEmail1=document.getElementById('InputEmail1').value
    let InputPassword1 = document.getElementById('InputPassword1').value
    if (InputEmail1==""|| InputEmail1==null ){
        alert('Please enter your email')
    }
    else if(InputPassword1=="" || InputPassword1==null){
        alert("You are not allowed to enter")
    }
    else{
        // alert('You entered ' + InputEmail1 + ' with password --' + InputPassword1)
        let log=localStorage.getItem('log')
        let ob=JSON.parse(log)
        // alert(ob)
        if (ob[InputEmail1]){
            if(ob[InputEmail1]==InputPassword1){
                window.open('todo.html', '_parent');
                // alert('welcome sir')
                // window.close('index.html')
                localStorage.setItem('item',InputEmail1)
                // document.getElementById('website').src="https://127.0.0.1:5500/todo.html";
                // alert(window.open('todo.html'))
            }
            else{
                alert("Wrong Password")
            }
        }
        else{
            if(confirm("No user with this UserId.\nDo you Want to create one")){

                ob[InputEmail1]=InputPassword1
                // alert(typeof ob[InputEmail1])
                localStorage.setItem('log',JSON.stringify(ob))
            }else{
                alert("You cancel the new creation")
            }
        }
    }
}
