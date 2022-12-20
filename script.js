let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");
let image6 = document.getElementById("img6");
let image7 = document.getElementById("img7");

let array = [image1, image2, image3, image4, image5, image6, image7];


function images() {
    const thisImage = Math.floor(Math.random() * array.length);
    array[thisImage].style.display = "block";
    console.log(thisImage);

    for (let i = 0; i < array.length; i++) {
        if (i !== thisImage) {
            array[i].style.display = "none";
        }
    }

}


setInterval(images, 100);


