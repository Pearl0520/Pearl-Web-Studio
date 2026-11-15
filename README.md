# Pearl Web Studio

Pearl Web Studio is a responsive, multi-page website for presenting web design services, pricing, portfolio work, and contact information.

## Pages

- `index.html` — Home page and service highlights
- `about.html` — About information and FAQs
- `services.html` — Website and digital services
- `pricing.html` — Website packages and pricing
- `portfolio.html` — Featured portfolio work
- `process.html` — The project process
- `contact.html` — Project enquiry form and contact details

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
├── css/
│   └── style.css
└── images/
    ├── Pearl Web Studio Logo Suite.png
    └── project 1.png
```

All pages share `css/style.css`. Images used by the pages are stored in `images/`.

## Preview locally

There is no build step or package installation required. From the project folder, start Python's built-in local web server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. Stop the server with `Ctrl+C`.

## Contact form behavior

The required fields on the Contact page are checked by the browser. Submitting the form prepares an enquiry message and opens WhatsApp for the visitor to review and send. The website does not send or store form submissions on its own; the visitor must send the message in WhatsApp.

The map on the Contact page is embedded from Google Maps and requires an internet connection.

## Updating the website

- Edit the relevant HTML file to update page content.
- Edit `css/style.css` to change shared styling.
- Add image files to `images/` and reference them with paths relative to the page, such as `images/example.jpg`.
- If you add or rename a page, update the navigation links in the other pages as needed.
- Keep each page's `<title>` and meta description accurate and unique when changing its content.

## Notes

The website describes services and e-commerce packages; it does not include a built-in online store or payment checkout. Hosting, a custom domain, and any production deployment are managed separately from this static website.