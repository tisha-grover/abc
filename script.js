document.addEventListener("DOMContentLoaded", () => {

  const introText = document.getElementById("intro-text");
  const toggleIntroButton = document.getElementById("toggle-intro");
  toggleIntroButton.addEventListener("click", () => {
      if (introText.style.display === "none") {
          introText.style.display = "block";
          toggleIntroButton.textContent = "Hide";
      } else {
          introText.style.display = "none";
          toggleIntroButton.textContent = "Show";
      }
  });

 
  const products = [
      { id: 1, name: "Product A", description: "This is Product A", price: "$10" },
      { id: 2, name: "Product B", description: "This is Product B", price: "$20" },
      { id: 3, name: "Product C", description: "This is Product C", price: "$30" },
  ];
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
      const productCard = `
          <div class="col-md-4 mb-3">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text"><strong>${product.price}</strong></p>
                  </div>
              </div>
          </div>
      `;
      productList.innerHTML += productCard;
  });

  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");
  const userName = document.getElementById("user-name");
  contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
          userName.textContent = name;
          formSuccess.style.display = "block";
          console.log({ name, email, message });
      }
  });

  const themeToggleButton = document.getElementById("theme-toggle");
  themeToggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggleButton.textContent = document.body.classList.contains("dark-mode")
          ? "Light Mode"
          : "Dark Mode";
  });
});
