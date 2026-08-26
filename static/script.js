const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


/* CUSTOM SERVICE DROPDOWN */

const customSelect = document.getElementById("serviceSelect");
const selectedOption = customSelect?.querySelector(".selected-option");
const selectedText = selectedOption?.querySelector("span");
const options = customSelect?.querySelectorAll(".option");

selectedOption?.addEventListener("click", function () {
  customSelect.classList.toggle("active");
});

options?.forEach(function (option) {
  option.addEventListener("click", function () {
    selectedText.textContent = option.textContent;
    customSelect.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  if (customSelect && !customSelect.contains(event.target)) {
    customSelect.classList.remove("active");
  }
});


/* BOOK NOW BUTTON */

document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (selectedText) {
      selectedText.textContent =
        button.dataset.service || 'Select a service';
    }

    document.getElementById('enquire')
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});


/* WHATSAPP ENQUIRY FORM */

const form = document.getElementById('enquiryForm');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const values = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    email: document.getElementById('email').value.trim(),
    service: selectedText?.textContent || 'General Enquiry',
    message: document.getElementById('message').value.trim()
  };

  const text = `Hello Desert Tourism LLC,

I would like to enquire about: ${values.service}

Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email || 'Not provided'}

Requirements: ${values.message || 'Not specified'}`;

  const url = `https://api.whatsapp.com/send?phone=971502669717&text=${encodeURIComponent(text)}`;

  window.location.href = url;
});