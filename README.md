# Royal Hotel

A responsive hotel website built with plain HTML, CSS and JavaScript. Includes home, booking enquiry, contact, rooms and experiences pages, plus the hotel story.

## Run locally

Install the dependencies once:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:5173`).

The stay planner carries selected dates and guest counts into the booking enquiry page. Booking and contact forms validate their fields and prepare an email draft in the visitor's email app; they do not make a reservation or send data to a server. Update `hello@royalhotel.com` in the pages and `script.js` to the hotel's real email address. Connect a booking provider and a mailing-list service before accepting real reservations or subscriptions.

Room names, rates, contact details, amenities and hotel copy are sample content; replace them with verified property details before publishing. Fonts and hotel photography are loaded from Google Fonts and Unsplash.
