# MedEase – Medical Shop Frontend

MedEase is a modern, single-page medical shop web app for browsing, searching, and purchasing medicines and medical-use groceries. It is designed to be highly accessible, responsive, and user-friendly, with a focus on customer experience and accessibility.

## Features

- **Product Catalog:**
  - 40+ medicines and 30+ medical groceries with images, prices, and details.
  - Product badges: Low Stock, Bestseller.
  - Smart search with suggestions and keyboard navigation.
- **Product Details:**
  - Dedicated product page with description, extra info, reviews, and ratings.
  - "Buy Now" button adds to cart and redirects to checkout.
- **Cart & Checkout:**
  - Cart sidebar with live updates, delivery estimator, and checkout modal.
  - Order history (stored locally).
- **Wishlist:**
  - Add/remove products to wishlist, view wishlist section on home.
- **Recently Viewed:**
  - Tracks and displays recently viewed products.
- **Featured Products:**
  - Carousel of highlighted products on home.
- **Accessibility:**
  - Accessibility bar: font size toggle (normal, large, extra large), high-contrast mode.
  - Skip to content link, ARIA live region for cart updates.
  - Keyboard navigation and visible focus for all controls.
  - ARIA labels for all interactive elements.
  - Modal dialogs with focus trap and restoration.
- **Responsive Design:**
  - Fully responsive for mobile, tablet, and desktop.
- **No Backend Required:**
  - All data and state are managed in localStorage; no server needed.

## Project Structure

```
medical-shop-frontend/
├── index.html         # Main single-page app
├── product.html       # Product details page
├── cart.js            # All JS logic (products, cart, wishlist, accessibility, etc.)
├── style.css          # All styles (responsive, modern, accessible)
└── README.md          # Project documentation
```

## Usage

1. **Open `index.html` in your browser.**
2. Browse products, use search, add to cart, wishlist, or view details.
3. Use the accessibility bar (bottom left) to adjust font size or enable high-contrast mode.
4. Checkout to see order history.

## Accessibility

- All features are accessible by keyboard and screen reader.
- Use the "Skip to main content" link for quick navigation.
- Font size and contrast settings are persistent (saved in your browser).
- All modals and custom controls are ARIA-compliant.

## Customization

- To add/edit products, modify the `medicines` and `groceries` arrays in `cart.js`.
- All UI and accessibility features can be customized in `style.css` and `cart.js`.

## License

This project is for educational/demo purposes. No real purchases or data are processed. 