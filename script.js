// Get the modal element
var modal = document.getElementById("image-modal");

// Get the close button element
var closeBtn = document.getElementById("close-modal");

// Function to open the modal (used for custom modal, but Lightbox handles this natively)
function openModal(imageSrc) {
    var modalImage = document.getElementById("modal-image");
    modalImage.src = imageSrc;  // Set the source of the image in the modal
    modal.style.display = "block";  // Show the modal
}

// Close the modal when the user clicks the "x"
closeBtn.onclick = function() {
    modal.style.display = "none";  // Hide the modal
}

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  // Hide the modal
    }
}

// Add your size change alert listeners
document.getElementById('size').addEventListener('change', function () {
    alert("You selected size: " + this.value);
});

document.getElementById('size2').addEventListener('change', function () {
    alert("You selected size: " + this.value);
});

document.getElementById('size3').addEventListener('change', function () {
    alert("You selected size: " + this.value);
});

document.getElementById('size4').addEventListener('change', function () {
    alert("You selected size: " + this.value);
});
