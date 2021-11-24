//Gallery View getter
getHtml = {
    imgView: document.querySelector('.gallerView > img'),
    prevBtn: document.querySelector('.gallerVIew > button[name="prevButton"]'),
    nextBtn: document.querySelector('.gallerVIew > button[name="nextButton"]'),


};

//Global Img Table of src
const imgTable = [];
let maxTable = 5;
let currentImgNum = 0;

//onload functions
window.onload = () => {
addImgToImgTable();
showImg();

};

//Global
//table of img
const addImgToImgTable = () => {
    
    for(let i = 0; i<maxTable; i++) {
        imgTable[i] = fetchPhotosURL(i);
    }
    console.log(imgTable);
};

function fetchPhotosURL(n){
    fetch(`photos/photo_${n}.png`)
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

function addListiners() {
    prevBtn.addEventListener('click',function(){
        currentImgNum--; 
        showImg();
    });
    nextBtn.addEventListener('click', function(){
        currentImgNum++;
        shwoImg();
    });
}

function showImg(){
    if(currentImgNum>maxTable)
    {
        currentImgNum = 0;
    } else if(currentImgNum<0){
        currentImgNum = maxTable;
    }
    imgView.src = imgTable[currentImgNum];
}



