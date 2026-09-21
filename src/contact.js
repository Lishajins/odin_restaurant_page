export function loadcontact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactSection = document.createElement("section");
    contactSection.id = "contact-section";

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "Come Say Hello!";
    contactHeading.className="contact-page-heading";

    const contactIntro = document.createElement("p");
    contactIntro.textContent ="Have a question, want to make a reservation, or simply need more capybara energy in your life? We'd love to hear from you.";

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";

    const address = document.createElement("p");
    address.textContent =
        "Visit Us: 42 Riverside Lane, Chilltown";

    const phone = document.createElement("p");
    phone.textContent =
        "Call Us: +91 98765 43210";

    const email = document.createElement("p");
    email.textContent =
        "Email Us: hello@capybaracafe.com";

    const hours = document.createElement("p");
    hours.textContent =
        "Opening Hours: Monday–Friday: 10:00 AM–10:00 PM | Saturday–Sunday: 9:00 AM–11:00 PM";

    contactInfo.append(address, phone, email, hours);
    contactInfo.id="contact-info";

    const reservationSection = document.createElement("div");
    reservationSection.id = "reservation-section";

    const reservationHeading = document.createElement("h2");
    reservationHeading.textContent = "Reserve a Table";
    reservationHeading.className="contact-page-heading";

    const reservationText = document.createElement("p");
    reservationText.textContent ="Planning a cozy meal? Give us a call or drop us an email and we'll save you a spot.";

    const reservationButton = document.createElement("button");
    reservationButton.textContent = "Make a Reservation";

    reservationSection.append(reservationHeading,reservationText,reservationButton);

    contactSection.append(contactHeading,contactIntro,contactInfo,reservationSection);

    content.append(contactSection);
}