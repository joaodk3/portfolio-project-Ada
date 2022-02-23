// Declaring variables
let item1 = document.getElementById('first-computer-program');
let image1 = document.getElementById("image1");
let item2 = document.getElementById('analytical-engine');
let image2 = document.getElementById('image2');
let item3 = document.getElementById('ada-programming-language');
let image3 = document.getElementById('image3');

// Function that opens up the first image
let showImage1 = function () {
    image1.style.display = "block";
    image1.style.visibility = "visible";
}
item1.onclick = showImage1;

// Function that closes the image
let closeImage1 = function () {
    image1.style.display = "none";
    image1.style.visibility = "hidden";
}
item1.onclick = closeImage1;

// Function that opens up the second image
let showImage2 = function () {
    image2.style.display = "block";
    image2.style.visibility ="visible";
}
item2.onclick = showImage2;

// Function that opens up the third image
let showImage3 = function () {
    image3.style.display = "block";
    image3.style.visibility = "visible";
}
item3.onclick = showImage3;


// Time calculation

const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "12-10-1815";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
