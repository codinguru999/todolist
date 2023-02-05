var autolist=['hi','hello','bye','go to market','buy fruits','buy books','read book','prepare for exam','eat fruits','buy any item','add project','apple']
let x=document.getElementById('name')
let y=document.getElementById('show')
x.addEventListener('input',function(){
    y.innerHTML=autolist[0]
    y.classList.remove('d-none')
})
function appendlist(){
    let val=document.getElementById('name').value
        let f=0
        for  (const x of autolist){
            alert(x)
            if (x===val){
                alert('ji')
                f=1
            }
        }
        if (f===0){
            alert('yes')
            autolist.push(val)
        }
    for (const x of autolist){
        alert(x)
    }
}