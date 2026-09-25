"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "Junction Store Gallary";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]
				

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Safety hard hats";
imgCaptions[1]="50kg cements"; 
imgCaptions[2]="gauging trofel"; 
imgCaptions[3]="plumbing joints"; 
imgCaptions[4]="water taps";
imgCaptions[5]="painting brush";
imgCaptions[6]="car oil";
imgCaptions[7]="castrol engine oils";
imgCaptions[8]="spray paints";
imgCaptions[9]="tiling cememt";
imgCaptions[10]="wire mesh";
imgCaptions[11]="wire mild steel";

// Count of images in the slideshow
let imgCount = imgFiles.length;
