//getting data by category
const URL="https://dummyjson.com/products/category/";
const URL2="https://dummyjson.com/products/add";
const ProdURL="https://dummyjson.com/products?limit=100";

let bdy=document.querySelector("#main");

let search=document.querySelector("#search");
for(ele in arr)
{
    let newel=document.createElement("option");
    newel.textContent=arr[ele];
    search.append(newel);



}


const getalldata=async ()=>{
let newcat=search.value;
let newURL=URL+`${newcat}`;
console.log(newURL);
let response =await fetch(newURL);
let data =await response.json();
console.log(data);
console.log(data.products);

while(bdy.hasChildNodes())
{
    bdy.removeChild(bdy.firstChild);
}




for(let i=0;i<data.products.length;i++)
{
    let newel=document.createElement("div");

    let newimg=document.createElement("img");
    newimg.setAttribute("src",data.products[i].images[0]);
    newimg.style.height="400px";
    newimg.style.width="400px";
    
    newel.style.display="flex";
    newel.style.flexDirection="Column";
    // newel.style.flexWrap="wrap";
    // newel.style.width="40px";
    newel.append(newimg);
    
    let newpar=document.createElement("p");
    let br=document.createElement("br");
    newel.append(newpar);
    newel.style.width="400px";
    newel.style.border="5px solid red"
    newpar.style.whiteSpace="pre-line";
    newpar.style.border="5px solid blue";
    newpar.style.display="flex";
    newpar.style.flexWrap="wrap";
    newpar.style.textOverflow="ellipsis"
    // newpar.style.width="20px";
    newpar.textContent=`NAME:${(data.products[i]).title}\n BRAND:${data.products[i].brand}\n Description:${data.products[i].description}`;

    
    
    bdy.append(newel);
     
    
    // newel.append(newel);
    // console.log(data.products[i].images);

   
    
}



}


let inp=document.querySelector("#srch");


search.addEventListener("change",()=>{
let newcat=search.value;
// console.log(newcat);
 
getalldata()


})


const updatedat= async ()=>{
let inp1=document.querySelector("#inp1");
let inp2=document.querySelector("#inp2");
let inp3=document.querySelector("#inp3");
let response=await fetch(URL2,{
    method:"POST",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
        title:inp2.value,
        description:inp3.value,
        brand:inp1.value
    })
})
data=await response.json();
console.log(data);
}




// let inp=document.querySelector("#srch");

inp.addEventListener("change",()=>{
    getdata();
})

const getdata=async ()=>{
    // let newcat=search.value;
    // let newURL=URL+`${newcat}`;
    // console.log(newURL);
    // const URL3=ProdURL+`${search.value}`;
    console.log(ProdURL);
    let response =await fetch(ProdURL);
    let data =await response.json();
    console.log(data);
     

    // console.log(data.products);
    
    while(bdy.hasChildNodes())
    {
        bdy.removeChild(bdy.firstChild);
    }
    
    
    let inpval=(inp.value).toLowerCase();
    console.log(inpval);
    
    for(let i=0;i<data.products.length;i++)
    {
        if(((data.products[i].title).toLowerCase()).startsWith(inpval))
        {
        let newel=document.createElement("div");
    
        let newimg=document.createElement("img");
        newimg.setAttribute("src",data.products[i].images[0]);
        newimg.style.height="400px";
        newimg.style.width="400px";
        
        newel.style.display="flex";
        newel.style.flexDirection="Column";
        // newel.style.flexWrap="wrap";
        // newel.style.width="40px";
        newel.append(newimg);
        
        let newpar=document.createElement("p");
        let br=document.createElement("br");
        newel.append(newpar);
        newel.style.width="400px";
        newel.style.border="5px solid red"
        newpar.style.whiteSpace="pre-line";
        newpar.style.border="5px solid blue";
        newpar.style.display="flex";
        newpar.style.flexWrap="wrap";
        newpar.style.textOverflow="ellipsis"
        // newpar.style.width="20px";
        newpar.textContent=`NAME:${(data.products[i]).title}\n BRAND:${data.products[i].brand}\n Description:${data.products[i].description}`;
    
        
        
        bdy.append(newel);
         
        
        // newel.append(newel);
        // console.log(data.products[i].images);
    
    }
        
    }
    
    
    
    }