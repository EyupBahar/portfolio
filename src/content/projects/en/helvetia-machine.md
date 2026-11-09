---
title: Helvetia Machine
kind: own
context: Product catalogue with admin CMS, demo
year: 2026
period: "06/2026"
role: "Sole developer: API, front end, database and deployment"
summary: Full-stack catalogue for machinery, spare parts and service – an ASP.NET Core API with a Next.js front end and an admin area for managing categories, subcategories and image galleries.
stack: [ASP.NET Core 9, C#, Entity Framework Core, PostgreSQL, Next.js 16, TypeScript, Tailwind CSS, Docker, Cloudinary]
repoUrl: https://github.com/EyupBahar/helvetia_machine
cover: ../../../assets/projects/helvetia-machine.webp
coverAlt: Helvetia Machine home page with hero and product categories
coverMobile: ../../../assets/projects/helvetia-machine-mobile.webp
order: 4
---

## Starting point

An own project without a real client: a Turkish-language product catalogue for machinery, spare parts and services. Back end and front end are separate – a REST API in ASP.NET Core and a Next.js front end. All catalogue content is managed in the admin area.

## What I built

- Public catalogue with categories, subcategories and image galleries, each image with a title and description
- Admin area with login: create, edit and delete categories and subcategories
- Several images per subcategory – upload, caption and remove each one
- Uploads of images and PDFs up to 10 MB, stored in Cloudinary or on the server volume
- Company and contact pages

## Technical details

- REST API with ASP.NET Core 9 and Entity Framework Core on PostgreSQL; every write route requires the Admin role (JWT)
- Passwords hashed with BCrypt; admin credentials and the JWT key come only from environment variables and are reconciled on every start – a password change takes effect with the next deploy
- When an entry is deleted or an image replaced, the API also removes the file from storage
- Next.js 16 with the App Router, catalogue pages rendered on the server
- Two-stage Docker image and a Render blueprint; the API reads Render's database URL and enables SSL for Render hosts
- Health endpoints for the API and the database to troubleshoot in production
