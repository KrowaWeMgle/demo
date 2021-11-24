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
        imgTable[i] = `./photos/photo_${i}.png`;
    }
    console.log(imgTable);
};


//Gallery Thumbnail
const addThumbnailHtmlElement = () => {
    //get section Parent
    
    for(let i =0; i<maxTable;i++){
        let htmlImgThumb = document.createElement('img');
        htmlImgThumb.src = imgTable[i];
        htmlImgThumb.className = 'imgThumbStyle';

        htmlImgThumb.addEventListener ('click', () => {
            galleryViewShow();
        });

        galleryThumbnail.appendChild(htmlImgThumb);
    }
    console.log(`galery thumbnail added to ${galleryThumbnail.id} `);
};


    
//End Gallery thumbnail



//Gallery View Show/Hide

const galleryViewShow = () => {
    galleryView.style.display = 'grid';
    //galleryView.style.position = 'absolute';
};
const galleryViewHide = () => {
    galleryView.style.display = 'none';
    //galleryView.style.position = 'statick';
};





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
