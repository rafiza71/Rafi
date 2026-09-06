// Animated number counter for the marketing statistics
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 40;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  // কার্ডের বাটনে ক্লিক করলে কন্টাক্ট সেকশনে স্মুথ স্ক্রল বা অ্যাকশন
  serviceCards.forEach((card) => {
    const button = card.querySelector('.learn-more-btn');
    const serviceTitle = card.querySelector('h3').innerText;

    button.addEventListener('click', () => {
      // আপনি চাইলে সরাসরি কন্টাক্ট ফর্মে স্ক্রল করাতে পারেন
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert(`You selected: ${serviceTitle}. Let's discuss your goals!`);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // সক্রিয় বাটন স্টাইল পরিবর্তন
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // কার্ড ফিল্টারিং লজিক
      portfolioCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === cardCategory) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('expCounter');

  if (counterElement) {
    let animated = false;

    // সেকশন স্ক্রিনে আসলে সংখ্যা কাউন্টার চালু হবে
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const target = parseInt(counterElement.getAttribute('data-target'), 10);
          let count = 0;
          const speed = 150; // অ্যানিমেশন স্পিড

          const updateCount = () => {
            if (count < target) {
              count++;
              counterElement.innerText = count + '+';
              setTimeout(updateCount, speed);
            } else {
              counterElement.innerText = target + '+';
            }
          };

          updateCount();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counterElement);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('sliderDots');

  if (!track || cards.length === 0) return;

  let currentIndex = 0;
  const totalSlides = cards.length;

  // ডটস জেনারেট করা
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  const updateDots = () => {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  const moveToSlide = (index) => {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(currentIndex);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadMagnetForm');
  const nameInput = document.getElementById('leadName');
  const emailInput = document.getElementById('leadEmail');
  const submitBtn = document.getElementById('submitBtn');
  const successState = document.getElementById('successState');
  const sentEmail = document.getElementById('sentEmail');

  if (!form) return;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === '') {
      nameInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove('has-error');
    }

    // Email Validation
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      emailInput.parentElement.classList.remove('has-error');
    }

    if (isValid) {
      // Show loading spinner
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Simulate sending data to email provider (e.g. Mailchimp, ConvertKit)
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        form.style.display = 'none';
        sentEmail.textContent = emailInput.value.trim();
        successState.style.display = 'block';

        // Trigger automatic PDF download simulation
        // const downloadLink = document.createElement('a');
        // downloadLink.href = 'path-to-your-audit-checklist.pdf';
        // downloadLink.download = '15-Point-Ad-Audit-Checklist.pdf';
        // downloadLink.click();
      }, 1200);
    }
  });

  // Real-time error removal when user starts typing
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
      nameInput.parentElement.classList.remove('has-error');
    }
  });

  emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value.trim())) {
      emailInput.parentElement.classList.remove('has-error');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const clientName = document.getElementById('clientName');
  const clientEmail = document.getElementById('clientEmail');
  const projectMessage = document.getElementById('projectMessage');
  const sendBtn = document.getElementById('sendMsgBtn');
  const successBanner = document.getElementById('formSuccessBanner');
  const clientNamePreview = document.getElementById('clientNamePreview');
  const copyrightYear = document.getElementById('copyrightYear');

  // ডাইনামিক বর্তমান সাল সেট করা
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  if (!contactForm) return;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // Name Validation
    if (clientName.value.trim() === '') {
      clientName.parentElement.classList.add('has-error');
      hasError = true;
    } else {
      clientName.parentElement.classList.remove('has-error');
    }

    // Email Validation
    if (!validateEmail(clientEmail.value.trim())) {
      clientEmail.parentElement.classList.add('has-error');
      hasError = true;
    } else {
      clientEmail.parentElement.classList.remove('has-error');
    }

    // Message Validation
    if (projectMessage.value.trim() === '') {
      projectMessage.parentElement.classList.add('has-error');
      hasError = true;
    } else {
      projectMessage.parentElement.classList.remove('has-error');
    }

    if (!hasError) {
      sendBtn.classList.add('loading');
      sendBtn.disabled = true;

      // ব্যাকএন্ড এপিআই বা Formspree/EmailJS কল সিমুলেশন
      setTimeout(() => {
        sendBtn.classList.remove('loading');
        contactForm.style.display = 'none';
        clientNamePreview.textContent = clientName.value.trim();
        successBanner.style.display = 'block';
      }, 1400);
    }
  });

  // রিয়েলটাইম ইনপুট চেকিং
  [clientName, projectMessage].forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.parentElement.classList.remove('has-error');
      }
    });
  });

  clientEmail.addEventListener('input', () => {
    if (validateEmail(clientEmail.value.trim())) {
      clientEmail.parentElement.classList.remove('has-error');
    }
  });
});