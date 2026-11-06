# Evergreen Herbs Int Ltd website

Simple website, one file per page. No build tools needed.

## Where things are
- `index.html`, `products.html`, `about.html`, `faq.html`, `contact.html` - the pages
- `css/style.css` - colors and looks (colors are at the top)
- `js/config.js` - phone, WhatsApp, address, banner words, social links, About story, opening hours
- `js/products.js` - the product list (add or remove products here)
- `js/main.js` - menu, banner, loading shimmer, header and footer
- `images/` - hero, logo and `images/products/` flyers (all `.webp`, small and fast)

## Put it online with GitHub Pages
1. Make a new repository on GitHub.
2. Upload everything in this folder (keep the folders as they are).
3. Go to **Settings > Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. After a minute your site is live at the link GitHub shows.

## Adding a product
1. Put the flyer in `images/products/` (save it as `.webp`, about 900 px wide).
2. Copy one line in `js/products.js` and change the name, note and file name.

## Still to fill in (js/config.js)
`story`, `founded`, `hours`, and the `social` links. Empty ones stay hidden on the site.
