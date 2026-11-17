GRND ONLINE STORE — RED & BLACK EDITION
======================================

This is the rebuilt, deployment-ready static storefront package based on the
GRND Online Store project files. The original GRND logo and product image
folder are preserved. The visual accent palette has been aligned to the
red / black GRND branding direction.

PAGES
-----
index.html   Home page
shop.html    Product catalogue with search, filters and sorting
about.html   About the store
cart.html    Cart and WhatsApp checkout
contact.html Contact details
style.css    All styling
app.js       Product catalogue and storefront interactions
images/      Logo and product images

OPEN LOCALLY
------------
Extract this ZIP, then open the extracted project folder in SPCK Editor.
Open index.html using SPCK Preview / Run. Keep the images folder beside the
HTML files. Do not open index.html directly from a compressed ZIP.

DEPLOY TO NETLIFY
-----------------
For this static version, publish the project root (the folder containing
index.html). No build command is required. The publish directory is the
project root. The current checkout opens a WhatsApp order message; it does
not collect card payments or save orders to a cloud database.

IMPORTANT SETTINGS
------------------
Open app.js and find SETTINGS near the top to update the WhatsApp number.
Use country code and digits only, for example 2567XXXXXXXX. The current
project number has been retained from the source project.

PRODUCTS
--------
Product information is stored in the PRODUCTS array in app.js. Each image
path must match a file inside images/ exactly. Preserve unique product IDs.

BACKEND LIMITATION
------------------
This edition is a static storefront. Cart data is stored in the visitor's
browser. WhatsApp is used to submit order details for manual confirmation.
A shared admin dashboard, cloud inventory, database and automated payments
are not included yet; those require a separately configured backend.
