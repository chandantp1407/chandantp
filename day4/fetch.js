const button=document.querySelector(".btn-1")
button.addEventListener("click",handleclick);

// const div=document.querySelector('.container')
// function handleclick(){
//     fetch('https://p-9x7e.onrender.com/products/products')
//     .then(response =>response.json())
//     .then(res =>{
//         console.log(res.data);
//         for(let i=0;i<res.data.length;i++){
//             const para=document.createElement('p');
//             para.innerText=res.data[i]._id+"===>"+res.data[i].pname;
//             div.append(para)
//         }
//     }
// )}

const table=document.querySelector('#tab')
function handleclick(){
    fetch('https://p-9x7e.onrender.com/products/products')
    .then(response =>response.json())
    .then(res =>{
        console.log(res.data);
        for(let i=0;i<res.data.length;i++){
            const tr=document.createElement("tr");
            const td1=document.createElement("td1");
            const td2=document.createElement("td2");
            const td3=document.createElement("td3");
            const td4=document.createElement("td4");
            const td5=document.createElement("td5");

   td1.innerText=res.data[i]._pId;
   td2.innerText=res.data[i]._pName;
   td3.innerText=res.data[i]._price;
   td4.innerText=res.data[i]._desc;
   td5.innerText=res.data[i]._img;
   tr.append(td1,td2,td3,td4,td5);
    table.append(tr);

        }
    }
)}
