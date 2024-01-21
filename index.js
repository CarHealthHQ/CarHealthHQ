var slideIndex = 0;
showSlides();

function showSlides() {
 var i;
 var slides = document.getElementsByClassName("slide");
 for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
 }  
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}    
 slides[slideIndex-1].style.display = "block";  
 setTimeout(showSlides, 3000); // Change image every 3 seconds
}


function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = navLinks.style.right === "0px" ? "-100%" : "0px";
}

// Close the menu when a link is clicked
        document.querySelectorAll('.rightnav a').forEach(link => {
        link.addEventListener('click', () => {
        var navLinks = document.getElementById("navLinks");
        navLinks.style.right = "-100%";
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var packages = document.querySelectorAll('.package');

    packages.forEach(function (pkg) {
        pkg.addEventListener('touchstart', function () {
            // Remove touch-hover from all packages
            packages.forEach(p => p.classList.remove('touch-hover'));

            // Add touch-hover to this package
            this.classList.add('touch-hover');
        });
    });

    // Optional: Remove the class when touching outside the packages
    document.addEventListener('touchstart', function (e) {
        if (!e.target.closest('.package')) {
            packages.forEach(p => p.classList.remove('touch-hover'));
        }
    });
});
