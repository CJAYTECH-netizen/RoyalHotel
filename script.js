const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isExpanded);
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });
}

const homeCheckIn = document.querySelector("#check-in");
const homeCheckOut = document.querySelector("#check-out");
const bookingForm = document.querySelector("#booking-form");
const reservationForm = document.querySelector("#reservation-form");

function formatDate(dateString) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(`${dateString}T12:00:00`));
}

function configureDatePair(checkIn, checkOut) {
  if (!checkIn || !checkOut) return;
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  checkIn.min = localToday;
  checkOut.min = localToday;

  function setCheckoutMinimum() {
    if (!checkIn.value) return;
    const earliestCheckout = new Date(`${checkIn.value}T12:00:00`);
    earliestCheckout.setDate(earliestCheckout.getDate() + 1);
    checkOut.min = earliestCheckout.toISOString().slice(0, 10);
    if (checkOut.value && checkOut.value <= checkIn.value) checkOut.value = "";
  }

  checkIn.addEventListener("change", setCheckoutMinimum);
  setCheckoutMinimum();
}

configureDatePair(homeCheckIn, homeCheckOut);

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;

    if (homeCheckOut.value <= homeCheckIn.value) {
      homeCheckOut.setCustomValidity("Choose a check-out date after your check-in.");
      homeCheckOut.reportValidity();
      homeCheckOut.setCustomValidity("");
      return;
    }

    const params = new URLSearchParams(new FormData(bookingForm));
    window.location.href = `booking.html?${params.toString()}`;
  });
}

configureDatePair(
  document.querySelector("#reservation-check-in"),
  document.querySelector("#reservation-check-out"),
);

if (reservationForm) {
  const checkIn = reservationForm.elements.namedItem("checkIn");
  const checkOut = reservationForm.elements.namedItem("checkOut");
  const params = new URLSearchParams(window.location.search);
  const requestedCheckIn = params.get("checkIn");
  const requestedCheckOut = params.get("checkOut");
  const requestedGuests = params.get("guests");
  const requestedRoom = params.get("room");

  if (requestedCheckIn && /^\d{4}-\d{2}-\d{2}$/.test(requestedCheckIn)) checkIn.value = requestedCheckIn;
  if (requestedCheckOut && /^\d{4}-\d{2}-\d{2}$/.test(requestedCheckOut)) checkOut.value = requestedCheckOut;
  if (requestedGuests && [...reservationForm.elements.guests.options].some((option) => option.value === requestedGuests || option.text === requestedGuests)) {
    reservationForm.elements.guests.value = requestedGuests;
    if (reservationForm.elements.guests.value !== requestedGuests) {
      const option = [...reservationForm.elements.guests.options].find((item) => item.text === requestedGuests);
      if (option) option.selected = true;
    }
  }
  if (requestedRoom && [...reservationForm.elements.room.options].some((option) => option.value === requestedRoom || option.text === requestedRoom)) {
    reservationForm.elements.room.value = requestedRoom;
  }

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!reservationForm.reportValidity()) return;
    if (checkOut.value <= checkIn.value) {
      checkOut.setCustomValidity("Choose a check-out date after your check-in.");
      checkOut.reportValidity();
      checkOut.setCustomValidity("");
      return;
    }

    const details = new FormData(reservationForm);
    const subject = `Booking enquiry — ${details.get("name")}`;
    const body = [
      "Hello Royal Hotel,",
      "",
      "I'd like to enquire about a stay:",
      `Check in: ${formatDate(details.get("checkIn"))}`,
      `Check out: ${formatDate(details.get("checkOut"))}`,
      `Guests: ${details.get("guests")}`,
      `Room preference: ${details.get("room")}`,
      "",
      `Name: ${details.get("name")}`,
      `Email: ${details.get("email")}`,
      "",
      "Note:",
      details.get("message") || "None",
    ].join("\n");
    showEmailLink(
      document.querySelector("#reservation-result"),
      "Your enquiry is ready. Open your email app to review and send it.",
      `mailto:hello@royalhotel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "Open booking enquiry",
    );
  });
}

function showEmailLink(container, message, href, label) {
  container.replaceChildren();
  container.append(document.createTextNode(`${message} `));
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  container.append(link);
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const details = new FormData(contactForm);
    const subject = `Website enquiry — ${details.get("topic")}`;
    const body = [
      "Hello Royal Hotel,",
      "",
      String(details.get("message")),
      "",
      `Name: ${details.get("name")}`,
      `Email: ${details.get("email")}`,
    ].join("\n");
    showEmailLink(
      document.querySelector("#contact-result"),
      "Your message is ready. Open your email app to review and send it.",
      `mailto:hello@royalhotel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "Open email draft",
    );
  });
}

const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!newsletterForm.reportValidity()) return;
    document.querySelector("#newsletter-message").textContent = "Newsletter sign-up is not connected yet. Please check back soon.";
    newsletterForm.reset();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
