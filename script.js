
document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");
    const navbarMenu = document.querySelectorAll(".navbar-menu a");


    const closeNavMenu = () => {
        navMenu.classList.remove("active");
        mobileMenu.style.display = "block";
        closeMenu.style.display = "none";
      };

    mobileMenu.addEventListener("click", function () {
      navMenu.classList.add("active");
      mobileMenu.style.display = "none";
      closeMenu.style.display = "block";
    });
  
    closeMenu.addEventListener("click", function () {
      navMenu.classList.remove("active");
      mobileMenu.style.display = "block";
      closeMenu.style.display = "none"; 
    });

    navbarMenu.forEach((item) => {
        item.addEventListener("click", closeNavMenu);
      });
      
      document.addEventListener("click", function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMobileMenu = mobileMenu.contains(event.target);
    
        // If the click is outside the menu and not on the mobile menu icon, close the menu
        if (!isClickInsideMenu && !isClickOnMobileMenu) {
          closeNavMenu();
        }
      });
  });
  