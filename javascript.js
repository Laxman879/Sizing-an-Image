let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300; // Maximum image width as per question
let imageMinWidth = 100; // Minimum image width as per question
let originalImageWidth = 200; // Image width when page loads
let maxWidthWarningMessage = "Too big. Decrease the size of the Image."; // Error message to be displayed
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image."; // Error message to be displayed

// Set the initial image width and display it
imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function incrementButton() {
  if (originalImageWidth >= imageMaxWidth) {
    warningMessageElement.textContent = maxWidthWarningMessage;
  } else {
    originalImageWidth += 5;
    let updatedImageWidth = originalImageWidth + "px";
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}

function decrementButton() {
  if (originalImageWidth <= imageMinWidth) {
    warningMessageElement.textContent = minWidthWarningMessage;
  } else {
    originalImageWidth -= 5;
    let updatedImageWidth = originalImageWidth + "px";
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}
