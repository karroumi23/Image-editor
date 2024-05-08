let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box')


// onload function 
window.onload = function (){
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none"
}


// upload function 
upload.onchange = function(){
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function(){
    img.src = file.result
    // ??????????????????????
  }
}
// filters function 
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
   filter.addEventListener('input',function(){
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
    `
   })
})

