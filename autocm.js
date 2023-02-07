// var autolist=['hi','hello','bye','go to market','buy fruits','buy books','read book','prepare for exam','eat fruits','buy any item','add project','apple']
// document.getElementById('autolist').innerHTM

let x = document.getElementById("name");
var y = document.getElementById("show");
x.addEventListener("input", function () {
  window.point=0;
  //   y.innerHTML = 'hell[0]';
  if(x.value!=''){

      //   x.innerHTML=''
      y.innerHTML=''
      let list=JSON.parse(localStorage.getItem('autolist'))
      for (const x of list){
          let val=document.getElementById('name').value
          if(x.startsWith(val)){
              
              let di=document.createElement('div')
              di.classList.add('container-fluid')
              di.classList.add('autoselct')
              di.classList.add('d-block')
              di.classList.add('rounded')
              di.classList.add('bg-info-subtle')
            //   di.classList.add('px-auto')
              di.innerHTML=x;
              y.appendChild(di)
            }
            
            //   alert(y.innerHTML)
            // di.innerHTML=''
        }
        if(y.innerHTML!=''){
            y.classList.remove("d-none");
            
        }
    }
    else{
        y.classList.add("d-none");

    }
});
function appendlist(val) {
//   let val = document.getElementById("name").value;
  let f = 0;
  let autolist=JSON.parse(localStorage.getItem('autolist'))
  for (const x of autolist) {
    // alert(x);
    if (x === val) {
    //   alert("ji");
      f = 1;
    }
  }
  if (f === 0) {
    // alert("from localstorage");
    // let obj = localStorage.getItem("autolist");
    // let lis = JSON.parse(obj);
    // alert(typeof lis);
    // alert("yes");
    autolist.push(val);
    localStorage.setItem('autolist',JSON.stringify(autolist))
  }
//   for (const x of autolist) {
//     alert(x);
}
//   }

function setfocus(event){
  let val=document.getElementById('name')
    if(event.keyCode==40){
      if(val.value!=''){

        // document.getElementById('show').firstChild.focus()
        // document.getElementById('show').firstChild.classList.remove('bg-info-subtle')
        // document.getElementById('show').firstChild.classList.add('bg-primary')
        let x=document.getElementById('show').childNodes
        if (window.point==x.length){
          x[window.point-1].classList.add('bg-info-subtle')
          x[window.point-1].classList.remove('bg-primary-subtle')
          window.point=0
          x[window.point].classList.remove('bg-info-subtle')
          x[window.point].classList.add('bg-primary-subtle')
          val.value=x[window.point].innerHTML
          
          window.point++
        }
        else{
          if(window.point==0){
            x[window.point].classList.remove('bg-info-subtle')
            x[window.point].classList.add('bg-primary-subtle')
            val.value=x[window.point].innerHTML
            
          }
          else{
            
            x[window.point-1].classList.add('bg-info-subtle')
            x[window.point-1].classList.remove('bg-primary-subtle')
            x[window.point].classList.remove('bg-info-subtle')
            x[window.point].classList.add('bg-primary-subtle')
            // alert(x[window.poisnt].innerHTML)
            val.value=x[window.point].innerHTML
          }
          
          // alert(x[window.point].innerHTML)
          window.point++;
          
        }
      }
    }
    else if(event.keyCode==38){
      // document.getElementById('show').firstChild.focus()
      // document.getElementById('show').firstChild.classList.remove('bg-info-subtle')
      // document.getElementById('show').firstChild.classList.add('bg-primary')
      let x=document.getElementById('show').childNodes
      if (window.point==0){
        if(x[window.point].className=='bg-primary-subtle'){
          x[window.point].classList.remove('bg-primary-subtle')
          x[window.point].classList.add('bg-info-subtle')
          window.point=x.length-1
          x[window.point].classList.remove('bg-info-subtle')
          x[window.point].classList.add('bg-primary-subtle')
          val.value=x[window.point].innerHTML
        }
        else{
          
          x[window.point].classList.remove('bg-primary-subtle')
          x[window.point].classList.add('bg-info-subtle')
          window.point=x.length-1
          x[window.point].classList.remove('bg-info-subtle')
          x[window.point].classList.add('bg-primary-subtle')
          val.value=x[window.point].innerHTML
        }
      }
      else{
        x[window.point].classList.remove('bg-primary-subtle')
        x[window.point].classList.add('bg-info-subtle')
        window.point--
        x[window.point].classList.remove('bg-info-subtle')
        x[window.point].classList.add('bg-primary-subtle')
        val.value=x[window.point].innerHTML
      }
        
  }
}