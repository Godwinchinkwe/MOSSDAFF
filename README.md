# Mossdaff Investment, Ltd. — Corporate Website

A bilingual (English / Japanese) React website for Mossdaff Investment, Ltd., focused on used-vehicle sourcing and motor spare-parts procurement from Japan to Nigeria.

## Technology

- React 18
- Create React App (`react-scripts`)
- React Router 6
- Responsive custom CSS
- Formspree-ready enquiry form
- WhatsApp contact link

## Requirements

- Node.js 18 or newer (Node.js 20 LTS recommended)
- npm

## Install and run locally

1. Extract the ZIP archive.
2. Open a terminal in the extracted `mossdaff-investment` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Copy `.env.example` to `.env` and configure the Formspree endpoint (see below).
5. Start the development server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000`.

## Activate the contact form (Formspree)

The form is integrated with Formspree so it can send enquiries to the email address configured in your Formspree account.

1. Create an account at [Formspree](https://formspree.io/).
2. Create a new form and set its destination email to `mosdaffinvestment@gmail.com`.
3. Verify the destination email if Formspree asks you to.
4. Copy the form endpoint. It will look like `https://formspree.io/f/xxxxxxxx`.
5. Put that endpoint in `.env`:

   ```env
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```

6. Restart the development server. For deployment, add the same environment variable in your hosting provider's project settings and rebuild/redeploy.

Until the endpoint is configured, the contact form displays a setup notice and provides the company email address. It does not pretend to send a message.

## WhatsApp

The WhatsApp link is configured to open a conversation with `+819017391322`. Confirm that this number is registered with WhatsApp before publishing.

## Brand and company details

- Company: Mossdaff Investment, Ltd.
- Domain: `mossdaffinvestment.com`
- Address: TOKYO CHUO-KU HARUMI 1-8-7. 206
- Phone / WhatsApp: +81 90 1739 1322
- Email: mosdaffinvestment@gmail.com
- Primary trade route: Japan to Nigeria
- Business focus: Used cars and motor spare parts
- Languages: English and Japanese

## Build for production

```bash
npm run build
```

The production website is generated in the `build/` directory. Deploy the contents using a static hosting provider such as Vercel, Netlify, or your preferred React hosting service. Configure the host to serve `index.html` for client-side routes (SPA fallback), and add `REACT_APP_FORMSPREE_ENDPOINT` to the host environment variables before building.

## Before going live

- Confirm the registered company name and address formatting.
- Confirm the phone number is active on WhatsApp.
- Create and verify the Formspree form.
- Replace the sample editorial copy on News & Insights with approved company updates when available.
- Confirm all sourcing, vehicle condition, pricing, shipping, customs and payment details directly with the company before publishing any specific commercial promises.
- Add real company-owned photographs if available. The current visual photography uses externally hosted Unsplash images and therefore requires an internet connection.

## Project structure

```text
src/
  App.js
  App.css
  index.js
  index.css
  Components/
    Header/Header.js
    Header/Header.css
    Footer/Footer.js
    Footer/Footer.css
  Pages/SitePages.js
public/
  brand/favicon.svg
  index.html
  manifest.json
  robots.txt
  sitemap.xml
```
