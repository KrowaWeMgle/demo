//Gallery View getters
const galleryView = document.getElementById('galleryView');
const imgArea = document.getElementById('imgView');
const buttonNext = document.getElementById('buttonNext');
const buttonBack = document.getElementById('buttonBack');
const textImgArea = document.getElementById('galleryText');
const buttonClose = document.getElementById('buttonClose');

//Gallery Thumbnail getters
const galleryThumbnail = document.getElementById('galleryThumbnail');


//Global Img Table of src
const imgTable = [];
let maxTable = 6;
let currentImgNum;

//onload functions
window.onload = () => {

addImgToImgTable();


//Gallery View
setImg();
buttonListiners();
galleryViewHide();

//Gallery Thumbnail
addThumbnailHtmlElement();

};

//Global
//table of img
const addImgToImgTable = () => {
    
    for(let i = 0; i<maxTable; i++) {
        imgTable[i] = fetchPhotos(number);
    }
    console.log(imgTable);
};

function fetchPhotosURL(n){
    fetch(`photos/photo_${n}`)
    .then(response => {
        if(response.ok){
            return response.blob();
        }
        else {
            console.log('Error fetching photos');
        }
    }).then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        return objectURL;
    }).catch(err => {console.log(`Error fetch`);});
}

