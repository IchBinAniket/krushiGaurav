# Aikya Seva Centre – NGO Web Application

A modern, responsive, and community-focused web application built for **Aikya Seva Centre**, an NGO working in rural Maharashtra. This platform showcases their projects in **Education, Healthcare, and Watershed Development**, while also facilitating **donations, volunteer registration**, and storytelling through a clean blog system.

---

## Built With

- **Angular 17+**
- **Routing & Lazy Loading**
- **JSON-driven blog system** for dynamic content rendering
- **Responsive design (mobile-first)** using inline styles
- **Dialogflow Chatbot Integration** (planned)
- **EmailJS** – to send dynamic emails on donation/volunteer actions
- **Zapier + Google Sheets** – to capture and store volunteer form submissions

---

## Highlights

- **Fully JSON-Driven Blog Engine** using `blogs.json` and `blogContent.json`
- **Dynamic Route Rendering** for `/blog/:slug` pages
- **Zapier + Google Sheets Integration** to store volunteer data with no backend
- **EmailJS Integration** to send auto-responses and notifications
- **Clean Angular Standalone Architecture** (v17+) with routing
- **Image-heavy project sections with UX-focused layout**
- **Built for .NET backend extension in Dev Phase 2**

## Features

- **Home Page**: Mission-driven banner, NGO intro, call-to-action sections
- **Projects Page**: Categories like Education, Watershed, Healthcare

- **Donation Page**:
  - Bank details with UI-focused layout
  - Donation banner and call to action
- **Volunteer Page**:
  - Includes Zapier + Google Sheets integration
  - Email notifications to NGO and volunteer
- **Contact Page**: NGO location, email, embedded map
- **Fully mobile-responsive layout** with inline UX-focused styling
- **Routing** with fallback redirection
- **Image-heavy gallery support** in blog sections
  
- JSON-Driven Dynamic Blog System (No CMS, No Backend)

- All blog content (structured layout, rich images, headings, captions) is defined in a `blogs.json` file within assets/blogs
- HTML is stored and rendered via Angular's route-based Blog Detail component using `innerHTML` sanitization
- Behaves like a custom-built **headless CMS**, yet fully static
- Blog preview metadata (slug, title, category, thumbnail, etc.) managed via `blogs.json`
- Designed to later plug into a .NET backend with zero structural change

This gives us **backend-like content control** with just JSON — reducing complexity while maintaining full UX flexibility.
---

## Development Roadmap – Phase 2

- **Backend (ASP.NET Core)**:
  - Admin Dashboard
  - Blog CRUD operations
  - Volunteer & donation management
- **Database Integration**:
  - SQL Server for structured data
- **Multilingual support**
- **Custom chatbot using GenAI / Dialogflow**
- **SEO optimization & Lighthouse compliance**

---

## Deployment

Currently using Netlify for hosting
Production-ready build deployed to custom domain: `aikyasevacenter.org`