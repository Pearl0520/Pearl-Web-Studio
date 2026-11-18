# Pearl Web Studio

Pearl Web Studio is a responsive, multi-page website for presenting web design and digital services, pricing, portfolio work, and contact information.

## Pages

- `index.html` — Home page and service highlights
- `about.html` — About information and FAQs
- `services.html` — Website design, development, and digital services
- `pricing.html` — Website packages, pricing, and optional extras
- `portfolio.html` — Featured website concept
- `process.html` — The project process
- `contact.html` — Project enquiry form and contact details
- `privacy.html` — Privacy notice for website visitors and enquiries
- `terms.html` — Website-use and project Terms & Conditions

## Project structure

```text
.
├── index.html
├── about.html
├── services.html
├── pricing.html
├── portfolio.html
├── process.html
├── contact.html
├── privacy.html
├── terms.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── JavaScript/
│   └── main.js
└── images/
    ├── Pearl Web Studio Logo Suite.png
    └── ...website and portfolio images
```

The site uses HTML, CSS, and vanilla JavaScript. All pages share `css/style.css` and load `JavaScript/main.js` for the responsive navigation; the contact page also uses it to handle the enquiry form. Page images and the logo are stored in `images/`.

## Preview locally

This is a static website: no build step, package installation, or framework is required. From the project folder, start Python's built-in local web server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. Stop the server with `Ctrl+C`.

## Contact form behavior

The browser validates the required fields on the Contact page. On submission, the page formats the enquiry and opens WhatsApp so the visitor can review and send it. The website does not send or store submissions itself; the visitor must send the message in WhatsApp.

The map on the Contact page is embedded from Google Maps and requires an internet connection.

## Updating the website

- Edit the relevant HTML file to update page content.
- Edit `css/style.css` to change shared styling.
- Edit `JavaScript/main.js` for the Contact page's WhatsApp enquiry behavior.
- Add image files to `images/` and reference them with paths relative to the page, such as `images/example.jpg`.
- If you add or rename a page, update the navigation links in the other pages as needed.
- Keep each page's `<title>` and meta description accurate and unique when changing its content.
- The sitemap and canonical/social-sharing URLs use the published GitHub Pages URL; update them if the site moves to a different domain.

## Notes

The site presents e-commerce services and packages, but this project does not include an online store, payment processing, or checkout. Hosting, a custom domain, and production deployment are managed separately from the static website.
