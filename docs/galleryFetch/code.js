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

function fetchPhotos(n){
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
        let imgObject = document.createElement('img');
        imgObject.src = objectURL;
        return imgObject;
    }).catch(err => {console.log(`Error fetch`);});
}



    
//End Gallery thumbnail






//Gellery View
//img set
const setImg = (num=0) => {

    imgArea.src = imgTable[num];
    console.log(imgTable[num]);
    currentImgNum = num;
    setImgText(num);
};



//inf currentNum is largeor or smaller than Table index
const testCurrentNumber = (curentNum) => {
    if(curentNum >= maxTable) {
        return false
    }
    else if(curentNum < 0) {
        return false
    }
    else {
        return true
    }

};

const setImgText = (num) => {
    textImgArea.innerText = `${num+1}/${maxTable}`;
}

//add Listiners to Buttons 
const buttonListiners = () => {
    buttonNext.addEventListener('mousedown', () => {

        currentImgNum++;
        let testNumber = testCurrentNumber(currentImgNum);
        
        if(testNumber === true)
         {setImg(currentImgNum)}
        else {setImg(0);}

    });
    buttonBack.addEventListener('mousedown',() => {

        currentImgNum--;
        let testNumber = testCurrentNumber(currentImgNum);
        
        if(testNumber === true)
         {setImg(currentImgNum);}
        else {setImg(maxTable-1);}

        

    });
    buttonClose.addEventListener('click', () => {
        galleryViewHide();
    })

};
//end Gallery view
