// if (document.getElementById('volumeslider').value==50){
//     document.getElementById('mute').className = "fa-solid fa-volume-xmark";
// }

function playpause(playpause) {
    if(document.getElementById(playpause).className=="fa-solid fa-pause musiccontrol"){
        document.getElementById(playpause).className = "fa-solid fa-play musiccontrol";
    }else{
        document.getElementById(playpause).className = "fa-solid fa-pause musiccontrol";
      }
}

function changeVolume(value) {
    if (value<0) {
        document.getElementById('volumeslider').value=0;}
    if (value>0) {
        document.getElementById('volumeslider').value=100;}
}

function changeLight(value) {
    if (value<0) {
        document.getElementById('lightslider').value=0;}
    if (value>0) {
        document.getElementById('lightslider').value=100;}
}

function lockunlock(lockunlock) {
    if(document.getElementById(lockunlock).className=="fa-solid fa-lock lockunlock unlocked"){
        document.getElementById(lockunlock).className = "fa-solid fa-unlock-keyhole lockunlock locked";
    }else{
        document.getElementById(lockunlock).className = "fa-solid fa-lock lockunlock unlocked";
      }
}

// album carousel
function changeImage(value) {
    // let imgURLs = ["images/taylorswift.png", "images/fineline.jpg", "images/edsheeran.png"];
    let imgURLs = [
        "https://www.udiscovermusic.com/wp-content/uploads/2019/08/Taylor-Swift-Lover-album-cover-820.jpg", "https://cdn.vox-cdn.com/thumbor/cUUdVnTXrleRNqbV-9JloWAleSI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg", "https://assets.vogue.com/photos/623b4f0174ede191983e2c76/master/pass/unnamed%20(3).jpg"];

    let albumNames = ["Lover", "Canyon Moon", "Satellite"];

    let imgNum = Number(document.getElementsByClassName("album")[0].id);
    let albumNum = Number(document.getElementsByClassName("musicname")[0].id);

    let maxImgNum = imgURLs.length - 1;
    let maxalbumNum = albumNames.length - 1;

    if (value > 0) {
        let newImgNum = imgNum + 1;
        let newalbumNum = albumNum + 1;
        if (newImgNum > maxImgNum) {
            newImgNum = 0;
            newalbumNum = 0;
        }
        else {
            if (newImgNum < 0) {
                newImgNum = maxImgNum;
                newalbumNum = maxalbumNum;
            }
        }

        let new_elt = document.createElement('img');
        let new_album = document.createElement('p');
        new_elt.src = imgURLs[newImgNum];
        new_album.innerHTML = albumNames[newalbumNum];
        new_elt.className = "album";
        new_album.className = "musicname sameline";
        new_elt.id = newImgNum.toString();
        new_album.id = newalbumNum.toString();
        document.getElementsByClassName("album")[0].replaceWith(new_elt);
        document.getElementsByClassName("musicname sameline")[0].replaceWith(new_album);
    }

    if (value < 0) {
        let newImgNum = imgNum - 1;
        let newalbumNum = albumNum - 1;
        if (newImgNum < 0) {
            newImgNum = maxImgNum;
            newalbumNum = maxalbumNum;
        }

        let new_elt = document.createElement('img');
        let new_album = document.createElement('p');
        new_elt.src = imgURLs[newImgNum];
        new_album.innerHTML = albumNames[newalbumNum];
        new_elt.className = "album";
        new_album.className = "musicname sameline";
        new_elt.id = newImgNum.toString();
        new_album.id = newalbumNum.toString();
        document.getElementsByClassName("album")[0].replaceWith(new_elt);
        document.getElementsByClassName("musicname sameline")[0].replaceWith(new_album);
    }
}

// disconnect overlay
function disconnect(){
    document.getElementById("disconnectoverlay").style.display = "block";
}

function cancel(){
    document.getElementById("disconnectoverlay").style.display = "none";
}