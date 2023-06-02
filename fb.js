let likeIconEl = document.getElementById("likeIcon");
let likeEl = document.getElementById("like");
let likeNumberEl=document.getElementById("likeNumber");
let prevCount = parseInt(likeNumberEl.textContent);
isLiked = false;

function toggleLike(){
    if (isLiked===false){
        likeIconEl.classList.remove("far")
        likeIconEl.classList.add("fas");
        likeIconEl.style.color="#296eff"
        likeEl.style.color="#296eff";
        prevCount=prevCount+1;
        likeNumberEl.textContent=prevCount;
        isLiked=true; 
    }else{
        likeIconEl.classList.remove("fas")
        likeIconEl.classList.add("far");
        likeIconEl.style.color="#4f4e4e";
        likeEl.style.color="#4f4e4e";
        prevCount=prevCount-1;
        likeNumberEl.textContent=prevCount;
        isLiked=false;
}
}



let likeIconTwoEl = document.getElementById("likeIconTwo");
let likeTwoEl = document.getElementById("likeTwo");
let likeNumberTwoEl=document.getElementById("likeNumberTwo");
let prevCountTwo = parseInt(likeNumberTwoEl.textContent);
isLiked = false;

function toggleLikeTwo(){
    if (isLiked===false){
        likeIconTwoEl.classList.remove("far")
        likeIconTwoEl.classList.add("fas");
        likeIconTwoEl.style.color="#296eff"
        likeTwoEl.style.color="#296eff";
        prevCountTwo=prevCountTwo+1;
        likeNumberTwoEl.textContent=prevCountTwo;
        isLiked=true; 
    }else{
        likeIconTwoEl.classList.remove("fas")
        likeIconTwoEl.classList.add("far");
        likeIconTwoEl.style.color="#4f4e4e";
        likeTwoEl.style.color="#4f4e4e";
        prevCountTwo=prevCountTwo-1;
        likeNumberTwoEl.textContent=prevCountTwo;
        isLiked=false;
}
}

let postEl = document.getElementById("postEl");

function onClose(){
    postEl.classList.add("d-none");
}

let confirmButtonEl = document.getElementById("confirmButton");
let delButtonEl = document.getElementById("delButton");
let cnfrmTxtEl = document.getElementById("cnfrmTxt");
isConfirmed = false;
let isDel = false;

function onConfirm(){
    if (isConfirmed===false){
        confirmButtonEl.classList.add("d-none");
        delButtonEl.classList.add("d-none");
        let cnfrmTxt = document.createElement("p");
        cnfrmTxt.textContent="You are now friends";
        cnfrmTxt.classList.add("fr-name");
        cnfrmTxtEl.appendChild(cnfrmTxt);
        isConfirmed=true;
    }else{
        confirmButtonEl.classList.remove("d-none");
        delButtonEl.classList.remove("d-none");
        cnfrmTxt.classList.add("d-none");
        isConfirmed=false;
    }
    
}

function onDel(){
    if (isDel === false){
        confirmButtonEl.classList.add("d-none");
        delButtonEl.classList.add("d-none");
        let cnfrmTxt = document.createElement("p");
        cnfrmTxt.textContent="Request Removed";
        cnfrmTxt.classList.add("fr-name");
        cnfrmTxtEl.appendChild(cnfrmTxt);
        isConfirmed=true;
    }else{
        confirmButtonEl.classList.remove("d-none");
        delButtonEl.classList.remove("d-none");
        cnfrmTxt.classList.add("d-none");
        isConfirmed=false;
    }
    
}