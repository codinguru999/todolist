// var autolist=['hi','hello','bye','go to market','buy fruits','buy books','read book','prepare for exam','eat fruits','buy any item','add project','apple']
// document.getElementById('autolist').innerHTM

let x = document.getElementById("name");
let y = document.getElementById("show");
x.addEventListener("input", function () {
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
              di.classList.add('d-block')
              di.classList.add('bg-primary-subtle')
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
//   }
}
