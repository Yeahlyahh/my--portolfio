(function () {
  // ===== EmailJS Form =====
  emailjs.init("u7Xtphk5XPAzBXwJc");

  const form = document.getElementById("form-message");
  const status = document.getElementById("status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.innerHTML = "⏳ Sending...";
      status.style.color = "blue";

      emailjs.sendForm("service_r0q5hie", "template_42wimb8", form).then(
        () => {
          status.innerHTML = "✅ Message sent successfully!";
          status.style.color = "green";
          form.reset();
          setTimeout(() => (status.innerHTML = ""), 3000);
        },
        (err) => {
          status.innerHTML = "❌ Failed to send message. Please try again.";
          status.style.color = "red";
          console.error("EmailJS Error:", err);
        }
      );
    });
  }

  
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  };

  const onScroll = () => {
    requestAnimationFrame(revealOnScroll);
  };

  window.addEventListener("scroll", onScroll);
  revealOnScroll();

  
  const zoomableImages = document.querySelectorAll("img[data-zoomable]");

  if (zoomableImages.length > 0) {
    const modal = document.createElement("div");
    modal.className = "img-modal";

    const modalImg = document.createElement("img");
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    
    zoomableImages.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
      });
    });

    
    const closeModal = () => {
      modal.classList.remove("show");
    };
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }
})();
