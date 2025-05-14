// Event Handling

// Button Click
document.getElementById("myButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "green";
  });
  
  // Hover Effect
  document.getElementById("hoverArea").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
  });
  
  document.getElementById("hoverArea").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
  });
  
  // Keypress Detection
  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("keypressMsg").textContent = "Enter key pressed!";
    }
  });
  
  // Double-Click and Long Press Detection
  let pressTimer;
  document.getElementById("secretArea").addEventListener("mousedown", function() {
    pressTimer = setTimeout(function() {
      document.getElementById("secretArea").classList.add("longPressed");
    }, 1000); // Long press after 1 second
  });
  
  document.getElementById("secretArea").addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
  });
  
  document.getElementById("secretArea").addEventListener("dblclick", function() {
    document.getElementById("secretArea").classList.add("doubleClicked");
  });
  
  // Interactive Elements - Image Gallery
  let currentIndex = 0;
  function nextSlide() {
    const images = document.querySelectorAll(".image-slide");
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
  }
  
  // Accordion Section
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  // Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const nameField = document.getElementById("name");
    if (nameField.value === "") {
      event.preventDefault(); // Prevent form submission
      alert("Name is required!");
    }
  
    const emailField = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
      event.preventDefault();
      alert("Please enter a valid email!");
    }
  
    const passwordField = document.getElementById("password");
    if (passwordField.value.length < 8) {
      event.preventDefault();
      alert("Password must be at least 8 characters long!");
    }
  });
  
  // Real-Time Password Feedback
  document.getElementById("password").addEventListener("input", function() {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.classList.remove("green");
      feedback.classList.add("red");
    } else {
      feedback.textContent = "Password is strong!";
      feedback.classList.remove("red");
      feedback.classList.add("green");
    }
  });
  
  
 