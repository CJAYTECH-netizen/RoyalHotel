export {};

const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.querySelector<HTMLElement>(".site-nav");
const bookingForm = document.querySelector<HTMLFormElement>("#booking-form");
const reservationForm = document.querySelector<HTMLFormElement>("#reservation-form");
const contactForm = document.querySelector<HTMLFormElement>("#contact-form");
const newsletterForm = document.querySelector<HTMLFormElement>("#newsletter-form");

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

const homeCheckIn = document.querySelector<HTMLInputElement>("#check-in");
const homeCheckOut = document.querySelector<HTMLInputElement>("#check-out");

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(`${dateString}T12:00:00`));
}

function configureDatePair(checkIn: HTMLInputElement | null, checkOut: HTMLInputElement | null): void {
  if (!checkIn || !checkOut) return;
  const validCheckIn = checkIn;
  const validCheckOut = checkOut;
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  validCheckIn.min = localToday;
  validCheckOut.min = localToday;

  function setCheckoutMinimum() {
    if (!validCheckIn.value) return;
    const earliestCheckout = new Date(`${validCheckIn.value}T12:00:00`);
    earliestCheckout.setDate(earliestCheckout.getDate() + 1);
    validCheckOut.min = earliestCheckout.toISOString().slice(0, 10);
    if (validCheckOut.value && validCheckOut.value <= validCheckIn.value) validCheckOut.value = "";
  }

  validCheckIn.addEventListener("change", setCheckoutMinimum);
  setCheckoutMinimum();
}

configureDatePair(homeCheckIn, homeCheckOut);

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    if (!homeCheckIn || !homeCheckOut) return;

    if (homeCheckOut.value <= homeCheckIn.value) {
      homeCheckOut.setCustomValidity("Choose a check-out date after your check-in.");
      homeCheckOut.reportValidity();
      homeCheckOut.setCustomValidity("");
      return;
    }

    const params = new URLSearchParams();
    new FormData(bookingForm).forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });
    window.location.href = `booking.html?${params.toString()}`;
  });
}

configureDatePair(
  document.querySelector<HTMLInputElement>("#reservation-check-in"),
  document.querySelector<HTMLInputElement>("#reservation-check-out"),
);

if (reservationForm) {
  const checkIn = reservationForm.querySelector<HTMLInputElement>('[name="checkIn"]');
  const checkOut = reservationForm.querySelector<HTMLInputElement>('[name="checkOut"]');
  const guests = reservationForm.querySelector<HTMLSelectElement>('[name="guests"]');
  const room = reservationForm.querySelector<HTMLSelectElement>('[name="room"]');
  const params = new URLSearchParams(window.location.search);
  const requestedCheckIn = params.get("checkIn");
  const requestedCheckOut = params.get("checkOut");
  const requestedGuests = params.get("guests");
  const requestedRoom = params.get("room");

  if (checkIn && requestedCheckIn && /^\d{4}-\d{2}-\d{2}$/.test(requestedCheckIn)) {
    checkIn.value = requestedCheckIn;
  }
  if (checkOut && requestedCheckOut && /^\d{4}-\d{2}-\d{2}$/.test(requestedCheckOut)) {
    checkOut.value = requestedCheckOut;
  }
  if (guests && requestedGuests && [...guests.options].some((option) => option.value === requestedGuests)) {
    guests.value = requestedGuests;
  }
  if (room && requestedRoom && [...room.options].some((option) => option.value === requestedRoom)) {
    room.value = requestedRoom;
  }

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!reservationForm.reportValidity()) return;
    if (!checkIn || !checkOut) return;
    if (checkOut.value <= checkIn.value) {
      checkOut.setCustomValidity("Choose a check-out date after your check-in.");
      checkOut.reportValidity();
      checkOut.setCustomValidity("");
      return;
    }

    const details = new FormData(reservationForm);
    const getValue = (name: string): string => {
      const value = details.get(name);
      return typeof value === "string" ? value : "";
    };
    const subject = `Booking enquiry — ${getValue("name")}`;
    const body = [
      "Hello Royal Hotel,",
      "",
      "I'd like to enquire about a stay:",
      `Check in: ${formatDate(getValue("checkIn"))}`,
      `Check out: ${formatDate(getValue("checkOut"))}`,
      `Guests: ${getValue("guests")}`,
      `Room preference: ${getValue("room")}`,
      "",
      `Name: ${getValue("name")}`,
      `Email: ${getValue("email")}`,
      "",
      "Note:",
      getValue("message") || "None",
    ].join("\n");
    showEmailLink(
      document.querySelector<HTMLElement>("#reservation-result"),
      "Your enquiry is ready. Open your email app to review and send it.",
      `mailto:hello@royalhotel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "Open booking enquiry",
    );
  });
}

function showEmailLink(container: HTMLElement | null, message: string, href: string, label: string): void {
  if (!container) return;
  container.replaceChildren();
  container.append(document.createTextNode(`${message} `));
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  container.append(link);
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const details = new FormData(contactForm);
    const getValue = (name: string): string => {
      const value = details.get(name);
      return typeof value === "string" ? value : "";
    };
    const subject = `Website enquiry — ${getValue("topic")}`;
    const body = [
      "Hello Royal Hotel,",
      "",
      getValue("message"),
      "",
      `Name: ${getValue("name")}`,
      `Email: ${getValue("email")}`,
    ].join("\n");
    showEmailLink(
      document.querySelector<HTMLElement>("#contact-result"),
      "Your message is ready. Open your email app to review and send it.",
      `mailto:hello@royalhotel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "Open email draft",
    );
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!newsletterForm.reportValidity()) return;
    const message = document.querySelector<HTMLElement>("#newsletter-message");
    if (message) message.textContent = "Newsletter sign-up is not connected yet. Please check back soon.";
    newsletterForm.reset();
  });
}

const currentYear = document.querySelector<HTMLElement>("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
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
