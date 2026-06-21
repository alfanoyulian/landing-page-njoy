/*  TOMBOL SCROLL TO TOP                     */
  
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const heroSection = document.getElementById("hero");

  if (scrollTopBtn) {
   
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    
    scrollTopBtn.addEventListener("click", function () {
      const targetPosition = heroSection ? heroSection.offsetTop : 0;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  }

