//Gallery View getter
getHtml = {
    imgView: document.querySelector('.gallerView > img'),
    prevBtn: document.querySelector('.gallerVIew > button[name="prevButton"]'),
    nextBtn: document.querySelector('.gallerVIew > button[name="nextButton"]'),


};

//Global Img Table of src
const imgTable = [];
let currentImgNum;

//onload functions
window.onload = () => {

addImgToImgTable();


};

//Global
//table of img
const addImgToImgTable = () => {
    
    for(let i = 0; i<imgTable.length; i++) {
        imgTable[i] = fetchPhotosURL(number);
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



