
function mainMenuClicked(value){
    linkstr="exact.html?menuID="+value;
    //window.location.href="exact.html";
    window.location.href=linkstr;
    /*
    if(value == "DBI"){
        document.getElementById("mainMenuPicture").src = "/food/main/DBI.jpg";        
    }
    if(value == "EFR"){
        document.getElementById("mainMenuPicture").src = "/food/main/EFR.jpg";
    }
    if(value == "FTS"){
        document.getElementById("mainMenuPicture").src = "/food/main/FTS.jpg";
    }
    if(value == "JYB"){
        document.getElementById("mainMenuPicture").src = "/food/main/JYB.jpg";
    }
    */
   


}

function subMenuClicked(value){
    window.location.href="exact.html";
    if(value == "SWS"){
        document.getElementById("mainMenuPicture").src = "/food/sub/SWS.PNG";
    }
    if(value == "FFS"){
        document.getElementById("mainMenuPicture").src = "/food/sub/FFS.PNG";
    }
    if(value == "LGI"){
        document.getElementById("mainMenuPicture").src = "/food/sub/LGI.PNG";
    }
    if(value == "SAS"){
        document.getElementById("mainMenuPicture").src = "/food/sub/SAS.PNG";
    }
}

function logoClicked(){
    location.href="main.html";
}

