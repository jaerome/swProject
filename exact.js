function logoClicked(){
    location.href="main.html";
}

function mainMenuClicked(){
    menu = document.getElementById("mainMenuList").value;
    if(menu == "FTS"){
        document.getElementById("mainMenuPicture").src = "../../FTS.png";
        }
}

function subMenuClicked(){
    menu = document.getElementById("mainMenuList").value;
    if(menu == "DBI"){
    document.getElementById("mainMenuPicture").src = "../../DBI.png";
    }

    if(menu == "FTS"){
        document.getElementById("mainMenuPicture").src = "../../FTS.png";
    }

    if(menu == "EFR"){
    document.getElementById("mainMenuPictures").src = "../../EFR.png";
    }
}

