
let tableContent=document.getElementsByClassName("compTable");
let arr = [];

let co=document.getElementById("co")
let ls=document.getElementById("ls")
let bs=document.getElementById("bs")

co.addEventListener("click",
    function(e){
        e.preventDefault();
        CompareSearch();
    }
    ,true)
ls.addEventListener("click",
    function(e){
        e.preventDefault();
        LinearSearch()
    }
    ,true)
bs.addEventListener("click",
    function(e){
        e.preventDefault();
        BinarySearch()
    }
    ,true)
            
    let visualArray = document.getElementById("array");
            function generatearray() {
    visualArray.innerHTML = ""; 
    arr = []; 
    for (let i = 0; i < 20; i++) {
        let value = Number(Math.ceil(Math.random() * 100));
        arr.push(value);

        
    }
    arr.sort(function (a, b) {
        return a - b;
    });
	for (let i = 0; i < 20; i++) {
		let value=arr[i]
		let valueOfArray = document.createElement("div");
        valueOfArray.classList.add("block");
        valueOfArray.style.height = `${value * 3.5}px`;
        valueOfArray.style.transform = `translate(${i * 35}px)`;

        let arrayLabel = document.createElement("label");
        arrayLabel.classList.add("block_id");
        arrayLabel.innerText = value;

        valueOfArray.appendChild(arrayLabel);
        visualArray.appendChild(valueOfArray);

	}

    
}



    

let present=0
async function BinarySearch(delay = 600) {
    present=0;
    console.log('bs executing')
	let num = Number(document.getElementById("fname").value);
    let blocks = document.querySelectorAll(".block");
    let displayInfo = document.getElementById("text");
    let typeofsearch = document.getElementById("text2");
    typeofsearch.innerText='Binary Search'

    displayInfo.innerText = "";
    let count=0;
    let start = 0;
    let end = arr.length - 1;
    let flag = 0;

    while (start <= end) {
		count++;
        // updateColors(blocks, "#bfb716");
        updateColors(blocks, "#6b5b95");

        let mid = Math.floor((start + end) / 2);
        blocks[mid].style.backgroundColor = "#bfb716";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        if (arr[mid] == num) {
            present=1;
            displayInfo.innerText = `Element Found after ${count} searchs`;
            blocks[mid].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        } else if (arr[mid] > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (flag === 0) {
        present=0
        displayInfo.innerText = `Element not present. Detected in ${count} passes`;
        return count;
    }
    return count;
	
}
let wt=0
async function LinearSearch(delay = 700) {
    present=0;
    console.log('ls executing')
    let blocks = document.querySelectorAll(".block");
    let displayInfo = document.getElementById("text");
	
	let num = Number(document.getElementById("fname").value);
    let typeofsearch = document.getElementById("text2");
    typeofsearch.innerText='Linear Search'
    displayInfo.innerText = "";
    
    let flag = 0;
	let count=20;

    for (let i = 0; i < blocks.length; i++) {
        updateColors(blocks, "#6b5b95");

        blocks[i].style.backgroundColor = "#bfb716";
		wt+=delay
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        if (arr[i] == num) {
            displayInfo.innerText = `Element Found after ${i+1} searchs`;
            blocks[i].style.backgroundColor = "#13CE66";
            flag = 1;
			count=1+i;
            present=1;
            break;
        }
		if(arr[i]>num){
            present=0;
			count=i+1;
			break;
		}
    }

    if (flag === 0) {
        displayInfo.innerText = `Element Not Found. Detected after ${count} searches`
    }
    return count;
	
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function CompareSearch(){
    
    let s= Number(document.getElementById("fname").value);
    let ls=await LinearSearch();
    // await new Promise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve;
    //     },1000);
    //     // }
    // })
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 1000)
    );
    let bs=await BinarySearch();
    updateTable(ls,bs,s);    
	
}

function updateColors(blocks, color) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = color;
    }
}

let searched=document.getElementsByClassName("searchedcol")
// console.log(searched[0])
let lscol=document.getElementsByClassName("lscol")
let bscol=document.getElementsByClassName("bscol")
let pcol=document.getElementsByClassName("pcol")
// function updateTable(ls,bs,s){
//     // visualArray.appendChild(valueOfArray);
//     let newSearchSe=document.createElement("div");
//     searched.appendChild(newSearchSe);
//     newSearchSe.innerHTML=s


//     let newSearchls=document.createElement("div");
//     lscol.appendChild(newSearchls);
//     newSearchls.innerHTML=ls

//     let newSearchbs=document.createElement("div");
//     bscol.appendChild(newSearchbs);
//     newSearchbs.innerHTML=bs

//     let newSearchp=document.createElement("div");
//     pcol.appendChild(newSearchp);
//     newSearchp.innerHTML=(bs==-1)?"no":"yes";
// }

async function updateTable(ls, bs, s) {
    let newSearchSe = document.createElement("div");
    newSearchSe.classList.add('tableCell');

    searched[0].appendChild(newSearchSe);
    newSearchSe.innerHTML = s;

    let newSearchls = document.createElement("div");
    newSearchls.classList.add('tableCell');

    lscol[0].appendChild(newSearchls);
    newSearchls.innerHTML = ls;

    let newSearchbs = document.createElement("div");
    newSearchbs.classList.add('tableCell');

    bscol[0].appendChild(newSearchbs);
    newSearchbs.innerHTML = bs;

    let newSearchp = document.createElement("div");
    newSearchp.classList.add('tableCell');

    pcol[0].appendChild(newSearchp);
    newSearchp.innerHTML = (present==1)?"Yes":"No";

    document.getElementsByClassName("tableWrapper")[0].style.visibility='visible';
    present=0;
}
generatearray();

// async function CompareSearch(delay=500){
//     let blocks = document.querySelectorAll(".block");
//     let displayInfo = document.getElementById("text");
//     let type = document.getElementById("text2");
// 	let num = Number(document.getElementById("fname").value);

//     displayInfo.innerText = "";
//     type.innerHTML="<h2>Linear search</h2>"
//     let flag = 0;
// 	let count=20;

//     for (let i = 0; i < blocks.length; i++) {
//         updateColors(blocks, "#6b5b95");

//         blocks[i].style.backgroundColor = "#FF4949";
// 		wt+=delay
//         await new Promise((resolve) =>
//             setTimeout(() => {
//                 resolve();
//             }, delay)
//         );

//         if (arr[i] == num) {
//             displayInfo.innerText = `Element Found after ${i} searchs`;
//             blocks[i].style.backgroundColor = "#13CE66";
//             flag = 1;
// 			waiting=1;
//             break;
//         }
// 		if(arr[i]>num){
// 			count=i;
// 			break;
// 		}
//     }

//     if (flag === 0) {
//         displayInfo.innerText = `Element Not Found. Detected after ${count} searches`
//     }
    
//     await new Promise((resolve)=>
//         setTimeout(()=>{
//         resolve()},1800)
        
//     )
//     type.innerHTML="<h2>Binary search</h2>"
//     displayInfo.innerText = "";
//     count=0;
//     let start = 0;
//     let end = arr.length - 1;
//     flag = 0;

//     while (start <= end) {
// 		count++;
//         updateColors(blocks, "#6b5b95");

//         let mid = Math.floor((start + end) / 2);
//         blocks[mid].style.backgroundColor = "#FF4949";

//         await new Promise((resolve) =>
//             setTimeout(() => {
//                 resolve();
//             }, delay)
//         );

//         if (arr[mid] == num) {
//             displayInfo.innerText = `Element Found after ${count} searchs`;
//             blocks[mid].style.backgroundColor = "#13CE66";
//             flag = 1;
//             waiting=1;
//             break;
//         } else if (arr[mid] > num) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }

//     if (flag === 0) {
        
//         displayInfo.innerText = `Element Not Found. Detected after ${count}searches`;
//         return -1;
//     }
//     return count;
//     // updateTable();
    
    
// }