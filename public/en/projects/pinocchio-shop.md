# Pinocchio Shop

Online shop for sauces and delicacies, front end. Multilingual online shop as a React app – product catalogue, cart, checkout, customer account with Google sign-in and admin pages for products and orders.

- Type: Own project
- Period: 11/2025 – 01/2026
- Role: Sole front-end developer: shop, checkout, customer account and admin pages
- Stack: React 19, Vite, React Router, TanStack Query, Axios, Tailwind CSS, Google OAuth
- Repository: https://github.com/EyupBahar/pinocchio_shop_fe

## Starting point

An own project: the front end of an online shop for sauces and delicacies, connected to a REST API for products, orders and users. The API is no longer running.

## What I built

- Shop with category filter, sorting and pagination, plus product pages
- Cart with a mini cart and a checkout with shipping and billing address
- Customer account: sign-up, sign-in by email or Google, own orders and profile
- Admin pages: create products with basic data, category, features, images and sizes; filter and edit orders
- Interface in German, English, French and Italian; product texts can be translated automatically through the Google Translate API
- Legal notice, privacy policy, contact and about pages

## Technical details

- React 19 with Vite and React Router 7; server data through TanStack Query, API access through an Axios client that attaches the token
- Expired tokens are detected; admin pages only for the Admin role
- Checkout input is sanitised before it is sent; in production the app redirects to HTTPS
- Dedicated contexts for authentication, cart and language

Quelle/Source: https://eyupbahar.com/en/projects/pinocchio-shop/
