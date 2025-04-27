document.addEventListener("DOMContentLoaded",function(){
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Event listener for the search button
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query) {
        // Construct the Google search URL
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        // Open the Google search in a new tab
        window.open(googleSearchUrl, '_blank');
      }
    });

    // Optional: Event listener for pressing 'Enter' to trigger Google search
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          // Construct the Google search URL
          const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
          // Open the Google search in a new tab
          window.open(googleSearchUrl, '_blank');
        }
      }
    });
    // search the web script  ....end   ////////////////////////////////


    // slide text auto-type this.scripts.item............/
    const slides = document.querySelectorAll(".slide");
    const slideData = [
      {
        title: "Welcome to UC Tech Hub",
        text: "Your one-stop platform for exploring universities, programs, scholarships, and more."
      },
      {
        title: "Find the Right School for You",
        text: "Discover institutions across Nigeria and beyond that match your dreams and goals."
      },
      {
        title: "Stay Informed, Stay Ahead",
        text: "Get updates on scholarships, entrance exams, and education tips tailored for students."
      }
    ];
  
    let currentSlide = 0;
  
    function typeText(element, text, speed = 10, callback) {
      let index = 0;
      element.innerHTML = "";
      const interval = setInterval(() => {
        element.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
          clearInterval(interval);
          if (callback) callback();
        }
      }, speed);
    }
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
      });
  
      const slide = slides[index];
      slide.classList.add("active");
  
      const h2 = slide.querySelector("h2");
      const p = slide.querySelector("p");
  
      typeText(h2, slideData[index].title, 50, () => {
        typeText(p, slideData[index].text, 30);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
    setInterval(nextSlide, 8000); // 8 seconds between slides
        // slide text auto-type this.scripts.item............  end/

  
      
 

        // Show nav header after scrolling down a bit.....////////
        window.addEventListener("scroll", function () {
          const header = document.getElementById("scrollHeader");
          if (window.scrollY > 150) {
            header.classList.add("show");
          } else {
            header.classList.remove("show");
          }
        });
    
        // Initially hide the header if not scrolled
        window.addEventListener("load", function () {
          const header = document.getElementById("scrollHeader");
          if (window.scrollY > 150) {
            header.classList.add("show");
          }
        });
                // Show nav header after scrolling down a bit.....end  ////////

  

})
     
 