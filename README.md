# Aikya Seva Centre NGO Website

**Live Website:** [aikyaseva.com](https://aikyaseva.com)

A fully responsive, scalable Angular-based web platform developed for **Aikya Seva Centre**, a grassroots NGO based in **Ahmednagar, Maharashtra**. The platform showcases their impactful work, drives donations, and simplifies volunteer onboarding with a clean and mobile-friendly interface.

---

## Features Implemented 

- **Modular Angular 17 (Standalone) Architecture**
- **JSON-Driven Blog System**  
  - Blog metadata and routing are handled via `assets/blogs/blogs.json`
  - Detailed blog content rendered from `assets/blogs/htmlContent.json`
- **Projects & Blogs Integration**  
  - `/projects` shows category cards
  - `/blog/:slug` loads full blog articles dynamically
- **Volunteer Form**  
  - Built using Angular Reactive Forms  
  - Sends confirmation emails via **EmailJS**  
  - Connects to **Google Sheets via Zapier Webhooks** (Data logged securely)
- **Google Maps Embed** with office location
- **Mobile-First Design** using Angular Material and custom styles
- **MIT Licensed** for open-source contribution

---

## Tech Stack

This project is built with Angular 17, TypeScript, Angular Material, EmailJS, Zapier Webhooks, and hosted via Netlify. A custom domain is connected via GoDaddy.

---

## Folder Structure for Blogs

All blogs are managed using JSON + HTML content and rendered safely on the UI.

```
├── src
│   └── assets
│       └── blogs
│           ├── blogs.json         # Blog metadata (slug, title, category, etc.)
│           └── htmlContent.json   # Blog content in sanitized HTML format
```

---

## Phase 2 – Planned Features

- Backend Integration using **.NET Core** with **SQL Server**
- Admin Panel for CRUD operations on blogs, volunteers, donations
- Dialogflow-based **Chatbot**
- Multilingual support (English, Marathi, Hindi)
- Blog CMS with Image Upload + Dynamic Rendering

---

## Development Journey

- Designed, built, and deployed single-handedly  
- Hosted live via **Netlify**, with DNS setup from **GoDaddy**
- Scalable decision: Blog system uses JSON & HTML files for decoupled architecture
- Error handling added for EmailJS and Zapier integrations (with graceful fallbacks)

---

## License

This project is licensed under the [MIT License](./LICENSE).
