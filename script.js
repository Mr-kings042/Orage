
// document.addEventListener("DOMContentLoaded", function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     const mobileMenu = document.getElementById("mobile-menu");
//     const navMenu = document.getElementById("nav-menu");
//     const closeMenu = document.getElementById("close-menu");
//     const navbarMenu = document.querySelectorAll(".navbar-menu li a");
//     const backToTop = document.getElementById("backToTop");


//     const closeNavMenu = () => {
//         navMenu.classList.remove("active");
//         mobileMenu.style.display = "block";
//         closeMenu.style.display = "none";
//       };

//     mobileMenu.addEventListener("click", function () {
//       navMenu.classList.add("active");
//       mobileMenu.style.display = "none";
//       closeMenu.style.display = "block";
//     });
  
//     closeMenu.addEventListener("click", function () {
//       navMenu.classList.remove("active");
//       mobileMenu.style.display = "block";
//       closeMenu.style.display = "none"; 
//     });

//     navbarMenu.forEach((item) => {
//         item.addEventListener("click", closeNavMenu);
//       });
      
//       document.addEventListener("click", function (event) {
//         const isClickInsideMenu = navMenu.contains(event.target);
//         const isClickOnMobileMenu = mobileMenu.contains(event.target);
    
//         // If the click is outside the menu and not on the mobile menu icon, close the menu
//         if (!isClickInsideMenu && !isClickOnMobileMenu) {
//           closeNavMenu();
//         }
//       });

      
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//         backToTop.style.display = "block";
//     } else {
//         backToTop.style.display = "none";
//     }
// });

// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

//   })

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });

  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const closeMenu = document.getElementById("close-menu");
  const navbarMenu = document.querySelectorAll(".navbar-menu li a");
  const FaqQuestion = document.querySelectorAll(".faq-question");
  const FaqAnswer = document.querySelectorAll(".faq-answer");
  const backToTop = document.getElementById("backToTop");

  const closeNavMenu = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
          // Only close the menu on smaller screens
          navMenu.classList.remove("active");
          mobileMenu.style.display = "block";
          closeMenu.style.display = "none";
      }
  };

  mobileMenu.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
          navMenu.classList.add("active");
          mobileMenu.style.display = "none";
          closeMenu.style.display = "block";
      }
  });

  closeMenu.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
          navMenu.classList.remove("active");
          mobileMenu.style.display = "block";
          closeMenu.style.display = "none";
      }
  });

  navbarMenu.forEach((item) => {
      item.addEventListener("click", closeNavMenu);
  });

  document.addEventListener("click", function (event) {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnMobileMenu = mobileMenu.contains(event.target);

      if (
          !isClickInsideMenu &&
          !isClickOnMobileMenu &&
          window.matchMedia("(max-width: 768px)").matches
      ) {
          
          closeNavMenu();
      }
  });

  // FAQ section

  FaqQuestion.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const toggleSign = button.querySelector(".faq-toggle");
  
        // Close other open answers
      FaqAnswer.forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector(".faq-toggle").textContent = "+";
            }
        });
  
        // Toggle FAQ Answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            toggleSign.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            toggleSign.textContent = "−"; // Change to minus when expanded
        }
    });
  });
  
  // Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      backToTop.style.display = "block";
  } else {
      backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

});

//FAQ section
// const FaqQuestion = document.querySelectorAll(".faq-question");
// const FaqAnswer = document.querySelectorAll(".faq-answer");
// FaqQuestion.forEach(button => {
//   button.addEventListener('click', () => {
//       const answer = button.nextElementSibling;
//       const toggleSign = button.querySelector(".faq-toggle");

//       // Close other open answers
//     FaqAnswer.forEach(item => {
//           if (item !== answer) {
//               item.style.maxHeight = null;
//               item.previousElementSibling.querySelector(".faq-toggle").textContent = "+";
//           }
//       });

//       // Toggle FAQ Answer
//       if (answer.style.maxHeight) {
//           answer.style.maxHeight = null;
//           toggleSign.textContent = "+";
//       } else {
//           answer.style.maxHeight = answer.scrollHeight + "px";
//           toggleSign.textContent = "−"; // Change to minus when expanded
//       }
//   });
// });



  // Back to Top Button
// const backToTop = document.getElementById("backToTop");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//         backToTop.style.display = "block";
//     } else {
//         backToTop.style.display = "none";
//     }
// });

// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
