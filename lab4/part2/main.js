
/*
Name: Amarachi Ben-Ikenador
File: Image Gallery
Date: April 4th 2025
This is the javascript file code for the image gallery.
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

/* Declaring the alternative text for each image file */
const alternateText = {
    'pic1.jpg':'Closeup of human eye',
    'pic2.jpg':'Wave pattern photo',
    'pic3.jpg':'Purple flowers',
    'pic4.jpg':'Egyptian art on the wall',
    'pic5.jpg':'Moth on a cocoyam leaf'
};

/* Looping through images */

for (let i = 0; i < imageNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/' + imageNames[i]);
    newImage.setAttribute('alt', alternateText[imageNames[i]]);
    thumbBar.appendChild(newImage);
    /* Adding a click event listener to each thumbnail image */ 
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
        btn.setAttribute("class","dark");
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,50%)';
   
}
    });