const inputImage = document.getElementById("input-image");
const displayImage = document.getElementById("display-image");

inputImage.addEventListener("change", function() {
  const imageFile = inputImage.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    const imageData = reader.result;
    displayImage.src = imageData;
    displayImage.style.display = "block";
  };
  reader.readAsDataURL(imageFile);
});





