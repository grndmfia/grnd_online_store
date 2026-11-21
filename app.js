/* ============================================================
   GRND ONLINE STORE 3.0 — JAVASCRIPT
   This file makes the pages interactive.

   MAIN THINGS YOU CAN EDIT:
   1. SETTINGS: change the WhatsApp number.
   2. PRODUCTS: add, remove or edit products.
   3. SLIDESHOW: change the automatic slide timing.
   4. Everything else controls the cart, filters and page actions.
   ============================================================ */


/* ------------------------------------------------------------
   1. STORE SETTINGS
   ------------------------------------------------------------ */
const SETTINGS = {
    // Replace this example with your WhatsApp number.
    // Use country code + number, digits only. Uganda example: 2567XXXXXXXX.
    whatsappNumber: "256740761630",

    // Currency label shown before every price.
    currency: "UGX",

    // How long each homepage slide stays visible (6000 = 6 seconds).
    slideInterval: 5000
};


/* ------------------------------------------------------------
   2. PRODUCTS
   HOW TO ADD A PRODUCT:
   - Copy one complete product object.
   - Paste it before the closing ]; at the bottom of this list.
   - Give it a NEW id number that is not already used.
   - Change the name, category, price, description, image and tag.
   - Categories used here are Tech, Shoes, T-shirts and Crocs.
   - Write the price as a number, without commas.
   - For your own image, add it to the images folder and use:
     image: "images/my-product.jpg"
   ------------------------------------------------------------ */
const PRODUCTS = [
    { id: 1, name: "Chrome Hearts   (Short Sleeved)", category: "drip", price: 50000,
      description: "Fine material with a real design. Available in all colours",
      image: "chrome.jpg",
      images: [ "chrome.jpg", "chromea.jpg", "chromeb.jpg", "chromec.jpg"],
      details: "Available in all colors", },
    { id: 2, name: "Saint_Vanity", category: "drip", price: 50000,
      description: "",
      image: "saint.jpg",
      images: ["saint.jpg", "sainta.jpg"],
      details: "", },
       { id: 35, name: "MSCHF 2X4 Brutal Boot", category: "shoes", price: 200000,
      description: "Limited-edition, all-black avant-garde work boot designed with footwear designer Mattias Gollin. Associated with the Timberland-style chunky rubber design in black)..",
      image: "24.jpeg",
      images: ["24.jpeg",
          "ms.jpeg",
      ],
      },
        {id: 46, name: "Nike x NOCTA Hot Step 2", category: "shoes", price: 120000,
      description: "Collaborative footwear line created by Nike and Canadian artist Drake under his nocturnal streetwear sub-label.",
      image: "nike.jpeg",
      images: ["nike.jpeg",
      "nikec.jpeg",
      "nikeb.jpeg",
      "nikec.jpg",
         ]
        },
    { id: 95, name: "Chrome Hearts T-shirt", category: "drip", price: 80000,
      description: "#Heavy Wear!",
      image: "chrme.jpg",
      images: ["chrme.jpg",
          "chrme1.jpg",
      ],
      },
       { id: 4  , name: "Chrome Hearts.      (Long sleeved)",
    category: "drip", price: 70000,
      description: "Long sleeved with the finest output. Available in all colors",
      image: "heart.jpg",
      images: ["heart.jpg", "hearta.jpg", "heartb.jpg",
        "heartc.jpg",
        "heartd.jpg",
        "hearte.jpg",    
      
          
      ],
       },
      
        { id: 5, name: "Chrome Hearts Vest", category: "drip", price: 50000,
      description: "#Latest Outfit!",
      image: "vest.jpg",
      images: ["vest.jpg",
            "vesta.jpg"
          
      ],
      },
       { id: 6, name: "Chrome Hearts Stocks", category: "drip", price: 20000,
      description: "#Latest Outfit!",
      image: "stock.jpg",
      images: ["stock.jpg",
            "stocka.jpg",
            "stockb.jpg",
          
      ],
      },
      
      { id: 7, name: "Red BAPE Shark Full Zip Hoodie", category: "drip", price: 80000,
      description: "#Ape Shall Neva Kill Ape!",
      image: "red.jpeg",
      images: ["red.jpeg", "pink.jpg"],
       },
       
        
       
       { id: 8, name: "Red BAPE Camo Shark Shorts", category: "drip", price: 50000,
      description: "#Ape Shall Neva Kill Ape!",
      image: "short.jpeg",
      images: ["short.jpeg", "shorta.jpeg"],
       }, 
       
        { id: 9, name: "BAPE Camo T-Shirt", category: "drip", price: 40000,
      description: "#Ape Shall Neva Kill Ape!",
      image: "shirt.jpeg",
      images: ["shirt.jpeg",  "cola.jpeg",
      ],
       },
        { id: 36, name: "Adidas x A Bathing Ape (BAPE) Camo Football Jersey", category: "drip", price: 40000,
      description: "#Bape Jersey",
      image: "sey.jpeg",
      images: ["sey.jpeg", ],
       },
      
        
         { id: 3, name: "Pirate Skull Buckle Belt", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "belt.jpg",
      images: ["belt.jpg",
          
      ],
      },
      
        { id: 13, name: "Winged Skull Buckle Belts", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "belta.jpg",
      images: ["belta.jpg",
          
      ],
      },
      
      { id: 14, name: "Pirate and Crossbones Skull Belts", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "beltb.jpg",
      images: ["beltb.jpg",
          
      ],
      },
   { id: 15, name: "Skeleton Hand Buckle Belts", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "beltc.jpg",
      images: ["beltc.jpg",
          
      ],
      },
      { id: 16, name: "Western Rhinestone Buckle Belts", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "beltd.jpg",
      images: ["beltd.jpg",
          
      ],
      },
    
        { id: 17, name: "Spooky Rhinestone Buckle Belts", category: "drip", price: 50000,
      description: "#Dead Men Tell No Tales!",
      image: "belte.jpg",
      images: ["belte.jpg",
          
      ],
      },
      
      { id: 18, name: "Chrome Hearts Baggie Jean", category: "drip", price: 80000,
      description: "#Abamerica Here.",
      image: "jeana.jpg",
      images: ["jeana.jpg"
      ],
       },
       
        { id: 19, name: "Baggy Jeans", category: "drip", price: 70000,
      description: "Merica.",
      image: "big.jpg",
      images: ["big.jpg"
      ],
       },
        { id: 20, name: "Flarred Chrome Hearts Jeans", category: "drip", price: 70000,
      description: "AVAILABLE IN ALL DESIGNS #Click to Preview",
      image: "jean.jpg",
      images: ["jean.jpg",
        "jean1.jpg",
        "jean2.jpg",
        "jean3.jpg",
        "jean4.jpg",
        "jean5.jpg",
        "jean6.jpg",
          
      ],
      },
      
       { id: 37, name: "Maroon Gothic Chromehearts Sweatpants", category: "drip", price: 45000,
      description: "Maroon/burgundy drawstring sweatpants decorated with large white gothic cross graphics",
      image: "mar.jpg",
      images: ["mar.jpg", ],
       },
       
         { id: 38, name: "Maroon Vintage-Wash Cross Sweatpants", category: "drip", price: 40000,
      description: "#Maroon drawstring sweatpants with faded/vintage-wash panels around the knees, featuring gothic crosses and stylized text. ",
      image: "draw.jpg",
      images: ["draw.jpg", ],
       },
       
         { id: 39   , name: "Black Hellstar Sweaterpant", category: "drip", price: 40000,
      description: "#Heavy Wear!",
      image: "hella.jpg",
      images: ["hella.jpg",
      "hellb.jpg",
      ],
      },
       
        { id: 40, name: "Brown Floral & Monogram Cargo Sweatpants", category: "drip", price: 40000,
      description: "#Heavy Wear!",
      image: "brown.jpg",
      images: ["brown.jpg",
      ],
      },
      
       { id: 41, name: "Black Tie-Dye Graphic Cargo Sweatpants", category: "drip", price: 40000,
      description: "#Heavy Wear!",
      image: "wear.jpg",
      images: ["wear.jpg",
      ],
      },
      
       { id: 42 , name: "Black ROK / BBK Graphic Sweatpants", category: "drip", price: 40000,
      description: "#Heavy Wear!",
      image: "bb.jpg",
      images: ["bb.jpg",
      "cc.jpg",
      "dd.jpg",
      ],
      },
         { id: 44, name: "Alo-Branded Three-Stripe Track Pants", category: "drip", price: 40000,
      description: "",
      image: "alo.jpg",
      images: ["alo.jpg",
      ],
      },
      
      { id: 45, name: "Beige Utility Cargo Pants", category: "drip", price: 40000,
      description: "",
      image: "bei.jpg",
      images: ["bei.jpg",
      ],
      },
       
          { id: 10, name: "Chrome Heart Beanie", category: "drip", price: 25000,
      description: "#Heavy Wear!",
      image: "head.jpg",
      images: ["head.jpg",
      ],
      },
        
    
       
        { id: 11, name: "LA Cap", category: "drip", price: 25000,
      description: "Head-gear.",
      image: "la.jpg",
      images: ["la.jpg"
      ],
       },
       
       { id: 12, name: "NY Cap", category: "drip", price: 25000,
      description: "Head-gear.",
      image: "ny.jpg",
      images: [".jpg"],
       },
      
      
    
      {id: 21, name: "Fear of God", category: "ladies", price: 40000,
      description: "Easy-to-wear casual clogs. Select your shoe size before adding to cart.",
      image: "fear.jpg",
      images: ["fear.jpg",
         ],
 },
 
         {id: 23, name: "Milk Tea", category: "ladies", price: 80000,
       image: "milk.jpg",
      images: ["milk.jpg",
          ],
      },  
      
      {id: 24, name: "Polo Cropped Shirt", category: "ladies", price: 45000,
      description: "Easy-to-wear casual clogs. #kundi_show",
      image: "fear2.jpg",
      images: ["fear2.jpg",
         ],
 },
              {id: 25, name: "Ribbed Cropped Shirt", category: "ladies", price: 45000,
      description: "#feelin' like cool",
      image: "rib.jpg",
      images: ["rib.jpg",
      "rib1.jpg",
         ],
 },
 
              {id: 26, name: "Butterfly Crop-tops", category: "ladies", price: 45000,
      description: "#Latest filter",
      image: "hell.jpg",
      images: ["hell .jpg",
         ],
 }, 
 
              {id: 27, name: "Cropped Varsity Jackets", category: "ladies", price: 50000,
      description: "Warm mi up",
      image: "jacket.jpg",
      images: ["jacket.jpg",
         ],
 },
 
              {id: 28, name: "California Cropped Sweater", category: "ladies", price: 50000,
      description: "#Dressed to kill!",
      image: "cali.jpg",
      images: ["cali.jpg",
         ],
 },
              {id: 29, name: "Graphic Long-Sleeve & Sweat Shorts Set", category: "ladies", price: 45000,
      description: "Full Kit",
      image: "graphic.jpg",
      images: ["graphic.jpg",
         ],
 },
    
        {id: 30, name: "Ruched Cropped Shirt", category: "ladies", price: 40000,
      description: "Easy-to-wear casual crop_top",
      image: "ruch.jpg",
      images: ["ruch.jpg",
         ],
 },
             {id: 31, name: "Distressed Denim Skirts", category: "ladies", price: 50000,
      description: "#watch wat maama gave mi!",
      image: "demin.jpg",
      images: ["demin.jpg",
         "de1.jpg",
         "de2.jpg",
         
          
      ],
 },
 
          {id: 32, name: "Gold Chained Denim  Short", category: "ladies", price: 70000,
      description: "#real masterpiece!",
      image: "demina.jpg",
      images: ["demina.jpg",
         ],
 },
          {id: 33, name: "Chrome Hearts Denim Short", category: "ladies", price: 45000,
      description: "#Just Chillz!",
      image: "denimb.jpg",
      images: ["denimb.jpg",
         ],
 },    
 
          {id: 34, name: "Pleated Plaid Skirts", category: "ladies", price: 45000,
      description: "Street Smart",
      image: "dress.jpg",
      images: ["dress.jpg",
         ],
 },
 

             {id: 67, name: "New Balance 1000", category: "shoes", price: 130000,
      description: "The sculpted, tonal pink sole unit provides a thick, cushioned platform for everyday casual wear.",
      image: "newb.jpg",
      images: ["newb.jpg",
      "newc.jpeg",
      
],
},


 {id: 69, name: "Numeris Atelier", category: "shoes", price: 180000,
      description: "Black canvas or textile upper with contrasting white toe cap, thick white laces, and a chunky ridged platform sole",
      image: "num.jpeg",
      images: ["num.jpeg",
      
],
},
                    {id: 55, name: "Timberland Premium", category: "shoes", price: 150000,
      description: "Complete with the signature debossed Timberland tree logo on the heel, they offer timeless streetwear style and all-day comfort.",
      image: "tim.jpg",
      images: ["tim.jpg",
      "tima.jpg",
      "timb.jpg",
      "timc.jpg",
        ] },
        
                
        
                {id: 54, name: "Balenciaga Alaska Boot", category: "shoes", price: 400000,
      description: "A cold-weather luxury footwear line known for its exaggerated proportions and extra-round toe silhouette.",
      image: "asa.jpeg",
      images: ["asa.jpeg",
      "as.jpeg"
        ] },
        
      
        {id: 47, name: "Balenciaga 16XL Sneaker (Red and White) ", category: "shoes", price: 150000,
      description: "Built with an exaggerated, chunky multi-layered sole and distinctive distressed branding elements.",
      image: "16.jpeg",
      images: ["16.jpeg",
        ] },
        
        {id: 48, name: "Dior Homie B22", category: "shoes", price: 100000,
      description: "Highlighted with reflective piping strips and a distinct Dior logo accent on the side. ",
      image: "dior.jpeg",
      images: ["dior.jpeg",
      "diora.jpeg",
        ] },
        
        {id: 49, name: "Balenciaga Defender", category: "shoes", price: 120000,
      description: "Defend the Nation",
      image: "def.jpeg",
      images: ["def.jpeg",
        ] },
        
         {id: 50, name: "Balenciaga Track Runner", category: "shoes", price: 100000,
      description: "Street Runner",
      image: "tra.jpeg",
      images: ["tra.jpeg",
        "traa.jpeg",
        "trab.jpeg"

        ] },
        
         {id: 51, name: "Balenciaga 3XL Sneaker", category: "shoes", price: 150000,
      description: "Built from lightweight, leather-free mesh and polyurethane, it features signature decorative laces tied around the toe box. ",
      image: "3.jpeg",
      images: ["3.jpeg",
        ] },
        
         {id: 52, name: "Balenciaga Triple S Black Sneaker", category: "shoes", price: 150000,
      description: "Street Smart",
      image: "trip.jpeg",
      images: ["trip.jpeg",
      "trip2.jpeg"
],
},

     {id: 57, name: "Balenciaga Speed Trainers", category: "shoes", price: 100000,
      description: "Street Runner",
      image: "spe.jpeg",
      images: ["spe.jpeg",
      
],
},
        
     {id: 61, name: "Air Force 1 big_lace", category: "shoes", price: 120000,
      description: "",
      image: "f1.jpeg",
      images: ["f1.jpeg",
          "f2.jpeg",
      
],
},
    
     {id: 62, name: "Vans Old Skool Platform", category: "shoes", price: 100000,
      description: "",
      image: "van.jpg",
      images: ["van.jpg",
      
],
},

    
     {id: 63, name: "Nike Air Max Plus (TN)", category: "shoes", price: 100000,
      description: "",
      image: "ni.jpg",
      images: ["ni.jpg",
      
],
},


     {id: 64, name: "Addidas gray and pink platform sneakers ", category: "shoes", price: 100000,
      description: "",
      image: "add.jpg",
      images: ["add.jpg",
      
],
},

    
     {id: 65, name: "Nike Air Jordan 4 Retro ", category: "shoes", price: 100000,
      description: "",
      image: "jor.jpeg",
      images: ["jor.jpeg",
      "jora.jpeg",
      "jorb.jpg",
      "jorc.jpg",
      
],
},

   {id: 68, name: "New Balance sneaker", category: "shoes", price: 90000,
      description: "",
      image: "newbc.jpg",
      images: ["newbc.jpeg",
      "newb1.jpg",
      "newba.jpeg",
      
],
},



 {id: 58, name: "ASICS Gel-Kayano 14", category: "shoes", price: 100000,
      description: "Vibrant pink mesh underlays, metallic silver overlays, black branding accents, and visible GEL technology cushioning in the midsole",
      image: "asic.jpeg",
      images: ["asic.jpeg",
      "asica.jpeg"
],
},

     {id: 59, name: "OGIY Chunky Retro Street Style", category: "shoes", price: 100000,
      description: "Chunky platform / retro street-style sneakers with thick rubber soles and prominent side patches.",
      image: "o.jpeg",
      images: ["o.jpeg",
      "oa.jpeg"
],
},
   


       {id: 66, name: "Tan Suede Faux-fur Cuff Ankle Boots, ", category: "shoes", price: 90000,
      description: "",
      image: "uga.jpg",
      images: ["uga.jpg",
          "ug.jpg",
      "ug1.jpg",
      
],
},  
     {id: 60, name: "Dr. Martens Jadon 8-Eye Platform Boots ", category: "shoes", price: 100000,
      description: "Black polished smooth leather, featuring an 8-eyelet lace-up front, a side zipper, signature yellow welt stitching, and a chunky air-cushioned platform sole.",
      image: "doc.jpeg",
      images: ["doc.jpeg",
      "doc.jpeg"
],
},
        {id: 56, name: "Prada Monolith Leather and Re-Nylon Ankle Boots with Pouch.", category: "shoes", price: 120000,
      description: "Military-inspired combat boots crafted from a combination of brushed leather and Re-Nylon.",      image: "pra.jpeg",
      images: ["pra.jpeg",
        ] },
        
         {id: 53, name: "Prada Cloudbust Thunder", category: "shoes", price: 170000,
      description: "",
      image: "an.jpg",
      images: ["an.jpg",
         ],
 },
 
 

 {id: 70    , name: "Spider Crocs", category: "crocs", price: 120000,
      description: "",
      image: "spi.jpeg",
      images: ["spi.jpeg",
      "spia.jpeg",
      
],
},

     {id: 71    , name: "BAPE Crocs", category: "crocs", price: 80000,
      description: "",
      image: "ba.jpeg",
      images: ["ba.jpeg",
      "baa.jpeg",
      
      
      
],
},

 {id: 72    , name: "Amiri", category: "crocs", price: 35000,
      description: "",
      image: "am.jpg",
      images: ["am.jpg",
      "ama.jpeg",
      
],
},


 {id: 77 , name: "Gucci", category: "crocs", price: 70000,
      description: "",
      image: "cci.jpg",
      images: ["cci.jpg",
     
      
],
},
    
 {id: 78 , name: "Amiri", category: "crocs", price: 35000,
      description: "",
      image: "am1.jpg",
      images: ["am1.jpg",
      "ama2.jpg",
      
],
},


 {id: 79       , name: "Gucci Dapa", category: "crocs", price: 80000,
      description: "",
      image: "dap.jpeg",
      images: ["dap.jpeg",
      
],
},  


 {id: 80    , name: "Lavin", category: "crocs", price: 45000,
      description: "",
      image: "lav.jpg",
      images: ["lav.jpg",
      "lava.jpg",
      
],
},
     
     
 {id: 81    , name: "Birkenstock", category: "crocs", price: 40000,
      description: "",
      image: "bir.jpg",
      images: ["bir.jpg",
      "bira.jpg",
      
],
},
     
 {id: 73   , name: "Balenciaga", category: "crocs", price: 35000,
      description: "",
      image: "bal.jpg",
      images: ["bal.jpg",
      "bala.jpeg",
      
],
},


 {id: 74    , name: "Palm Angels", category: "crocs", price: 35000,
      description: "",
      image: "pam.jpg",
      images: ["pam.jpg",
      "pama.jpeg",
      
],
},
      
 {id: 76  , name: "Burberry", category: "crocs", price: 35000,
      description: "",
      image: "ry.jpg",
      images: ["ry.jpg",
      "reya.jpg",
      
],
},
        
 {id: 75    , name: "Slides", category: "crocs", price: 25000,
      description: "",
      image: "lid.jpg",
      images: ["lid.jpg",
      "lida.jpeg",
      
],
},    

{ id: 83, name: "Oversized double-bridge aviator sunglasses", category:"glass", price: 45000,
image: "s1.jpg",


},
{ id: 84, name: "Saint Laurent SL M152 (or SL M152/F) sunglasses", category:"glass", price: 45000,
image:"s2.jpg",


},

{ id: 85, name: " Celine Triomphe 01 Sunglasses", category:"glass", price: 45000,
image: "s3.jpg",


},
{ id: 94, name: "Brown cat-eye sunglasses ", category:"glass", price: 45000,
image:"s4.jpg",


},

{ id: 86, name: "CELINE Bold 3 Dots Square Sunglasses", category:"glass", price: 45000,
image:"s5.jpg",


},

{ id: 87, name: " Miu Miu Glimpse sunglasses", category:"glass", price: 45000,
image:"s6.jpg",


},

{ id: 88, name: "Ray-Ban Original Wayfarer Classic", category:"glass", price: 45000,
image:"s7.jpg",


},

{ id: 89, name: "Ray-Ban RB3708", category:"glass", price: 45000,
image:"s8.jpg",


},

{ id: 90, name: "Ray-Ban RB4306 Polarized Sunglasses", category:"glass", price: 45000,
image:"s9.jpg",


},

{ id: 91, name: "Ray-Ban Original Wayfarer ", category:"glass", price: 45000,
image: "sb.jpg",


},

{ id: 93, name: "Miu Miu Glimpse Oval Sunglasses ", category:"glass", price: 45000,
image: "se.jpg",
},

{ id: 96, name: "CELINE 3 Dots Cat-Eye", category:"glass", price: 45000,
image: "sf.jpg",
},

{ id: 101, name: "LOEWE square-frame metal sunglasses", category:"glass", price: 45000,
image: "sg.jpg",
},

{ id: 102, name: "Saint Laurent SL M94 Sunglasses", category:"glass", price: 45000,
image: "sh.jpg",
},


{ id: 97, name: "Tom Ford Bronson (FT1044) Sunglasses", category:"glass", price: 45000,
image: "si.jpg",
},

{ id: 98, name: "CELINE Triomphe Metal 01 Oval Sunglasses", category:"glass", price: 45000,
image: "sj.jpg",
},

{ id: 97, name: "Tom Ford Haylay Sunglasses", category:"glass", price: 45000,
image: "sk.jpg",
},


{ id: 98, name: "Bottega Veneta Drop Aviator Sunglasses", category:"glass", price: 45000,
image: "sl.jpg",
},

{ id: 99, name: "Tom Ford Bronson", category:"glass", price: 45000,
image: "sm.jpg",
},

{ id: 100, name: "Tom Ford Karmen", category:"glass", price: 45000,
image: "sn.jpg",
},

{ id: 103, name: "translucent brown rectangular acetate frame ", category:"glass", price: 45000,
image: "so.jpg",
},

{ id: 104, name: "TOM FORD Icon Pilot Sunglasses", category:"glass", price: 45000,
image: "sp.jpg",
},

{ id: 105, name: "oversized black acetate aviator sunglasses", category:"glass", price: 45000,
image: "sq.jpg",
},

{ id: 106, name: "rimless teardrop-temple sunglasses", category:"glass", price: 45000,
image: "sr.jpg",
},

{ id: 107, name: "CELINE Black Acetate Square Sunglasses", category:"glass", price: 45000,
image: "ss.jpg",
},

{id: 127, name: "Black and silver abstract statement earrings  ", category:"min", price: 30000,
image: "ee.jpg",
},{ id: 128, name: "Silver crystal bow-shaped statement earrings ", category:"min", price: 30000,
image: "ef.jpg",
},{ id:129 , name: "Double teardrop pavé crystal earrings  ", category:"min", price: 30000,
image: "eg.jpg",
},{ id:130 , name: "Yellow Octagonal Double Stud Earrings  ", category:"min", price: 30000,
image: "eh.jpg",
},

{ id: 108, name: "Blue Flower Drop Earrings", category:"min", price: 30000,
image: "ra.jpg",
},{ id:109 , name: "Beaded Tassel Dangle Earrings", category:"min", price: 30000,
image: "rb.jpg",
},{ id: 110, name: "Vintage Rhinestone Dangle Earrings", category:"min", price: 30000,
image: "rc.jpg",
},{ id:110 , name: "Half-Moon Pattern Earrings", category:"min", price: 30000,
image: "rd.jpg",
},{  id:115 , name: "Geometric Multi-Ring Stainless Steel Earrings", category:"min", price: 30000,
image: "ri.jpg",
},{ id: 116, name: "Gold Textured Statement Earrings", category:"min", price: 30000,
image: "rj.jpg",
},{ id: 117, name: "Gunmetal Textured Statement Earrings", category:"min", price: 30000,
image: "rk.jpg",
},{ id:118, name: "Multi-Stone Crystal Drop Earrings", category:"min", price: 30000,
image: "rl.jpg",
},{ id: 119, name: "Black and White Layered Fan Earrings", category:"min", price: 30000,
image: "rm.jpg",
},{ id: 120, name: "Multi-ball pearl drop earrings", category:"min", price: 30000,
image: "rn.jpg",
},{ id: 121, name: "Black and silver tiered fan earrings  ", category:"min", price: 30000,
image: "ro.jpg",
},{ id: 122, name: "Gold-plated geometric fan-shaped pendant earrings with crystals ", category:"min", price: 30000,
image: "rp.jpg",
},


{ id: 123, name: "Gold teardrop filigree chandelier earrings  ", category:"min", price: 30000,
image: "ea.jpg",
},
{ id:124 , name: "Gold-toned textured drop earrings with teardrop open loops", category:"min", price: 30000,
image: "eb.jpg",
},{ id: 125, name: "Long crystal floral cluster and teardrop drop earrings ", category:"min", price: 30000,
image: "ec.jpg",
},{ id: 126, name: "Silver butterfly and crystal drop earrings  ", category:"min", price: 30000,
image: "ed.jpg",
},{ id: 131, name: "Crystal Flower Statement Bracelet", category:"min", price: 30000,
image: "ei.jpg",
},{ id: 132, name: "Silver Leaf-Design Crystal Earrings  ", category:"min", price: 30000,
image: "ej.jpg",
},{ id:133 , name: "Twisted Gold Hoop Earrings", category:"min", price: 30000,
image: "ek.jpg",
},{ id: 135, name: "Silver Textured Rose Stud Earrings  ", category:"min", price: 30000,
image: "em.jpg",
},{ id: 135, name: "White Marble-Pattern Triple Drop Earrings  ", category:"min", price: 30000,
image: "en.jpg",
},{ id: 136, name: "Gold Leaf-Design Crystal Earrings  ", category:"min", price: 30000,
image: "eo.jpg",
},{ id: 137, name: "White and Gold Emerald-Cut Stone Geometric Earrings ", category:"min", price: 30000,
image: "ep.jpg",
},{ id: 139, name: " Bijuteria", category:"min", price: 30000,
image: "er.jpg",
},{ id:140 , name: "HIPINOSY Bijuterias", category:"min", price: 30000,
image: "es.jpg",
},{ id:141 , name: "Bijuteria", category:"min", price: 30000,
image: "et.jpg",
},{ id: 142, name: "HIPINOSY Bijuterias", category:"min", price: 30000,
image: "eu.jpg",
},{ id: 143, name: "Am Fashion Jewel", category:"min", price: 30000,
image: "ev.jpg",
},{ id: 143, name: "Helena", category:"min", price: 30000,
image: "ew.jpg",
},{ id:144 , name: "FABULOUS MJ NEW YORK EST. 2007  ", category:"min", price: 30000,
image: "ex.jpg",
},{ id: 145, name: "Bijuteria", category:"min", price: 30000,
image: "ey.jpg",
},{ id: 146, name: "Am Fashion Jewel", category:"min", price: 30000,
image: "ez.jpg",
},

{ id: 147, name: "Gold-plated link chain hoop earrings", category:"min", price: 30000,
image: "aa.jpg",
},
{ id: 148, name: "Geometric drop earrings", category:"min", price: 30000,
image: "ab.jpg",
},{ id: 149, name: "Classic thick gold hoop earrings", category:"min", price: 30000,
image: "ac.jpg",
},{ id:150 , name: "Elegant drop earrings", category:"min", price: 30000,
image: "ad.jpg",
},{ id: 151, name: "Smooth, wide polished gold-tone hoop earrings ", category:"min", price: 30000,
image: "ae.jpg",
},{ id:152 , name: "Statement layered floral fringe earrings", category:"min", price: 30000,
image: "ag.jpg",
},{ id: 153, name: "Sunburst-inspired geometric stud earrings ", category:"min", price: 30000,
image: "ah.jpg",
},{ id: 154, name: "Modern asymmetrical abstract polygon stud earrings", category:"min", price: 30000,
image: "ai.jpg",
},{ id: 155, name: "Statement white mother-of-pearl flower stud earrings", category:"min", price: 30000,
image: "aj.jpg",
},{ id:156 , name: "Leopard print round earrings", category:"min", price: 30000,
image: "ak.jpg",
},{ id: 156, name: "Purple crystal geometric earrings", category:"min", price: 30000,
image: "al.jpg",
},{ id: 157, name: "Black rectangular crystal earrings ", category:"min", price: 30000,
image: "am.jpg",
},{ id: 156, name: "Blue rectangular marble-pattern earrings ", category:"min", price: 30000,
image: "an.jpg",
},{ id: 157, name: "Gold branch pearl drop earrings", category:"min", price: 30000,
image: "ao.jpg",
},{ id: 166, name: "Stainless steel double hoop earrings  ", category:"min", price: 30000,
image: "ay.jpg",
},{ id: 167, name: "Gold branch pearl drop earrings", category:"min", price: 30000,
image: "az.jpg",
},


{id: 168, name: "", category:"nec", price: 35000,
image: "la.jpg",
},
{id: 169, name: "", category:"nec", price: 35000,
image: "lb.jpg",
},
{id: 170, name: "", category:"nec", price: 35000,
image: "lc.jpg",
},{id: 171, name: "", category:"nec", price: 35000,
image: "ld.jpg",
},{id: 172, name: "", category:"nec", price: 35000,
image: "le.jpg",
},{id: 173, name: "", category:"nec", price: 35000,
image: "lf.jpg",
},{id: 174, name: "", category:"nec", price: 35000,
image: "lg.jpg",
},{id: 175, name: "", category:"nec", price: 35000,
image: "lh.jpg",
},{id: 176, name: "", category:"nec", price: 35000,
image: "li.jpg",
},{id: 177, name: "", category:"nec", price: 35000,
image: "lj.jpg",
},{id: 178, name: "", category:"nec", price: 35000,
image: "lk.jpg",
},{id: 179, name: "", category:"nec", price: 35000,
image: "lm.jpg",
},{id: 180, name: "", category:"nec", price: 35000,
image: "ln.jpg",
},

{id: 168, name: "", category:"nec", price: 35000,
image: ".jpg",
},




];





/* ------------------------------------------------------------
   3. FIND IMPORTANT HTML ELEMENTS
   The $ helper is a short way to select an element by its ID.
   Example: $("#cartCount") finds the element with id="cartCount".
   ---------aga--------------------------------------------------- */
const $ = function (selector) {
    return document.querySelector(selector);
};

const productGrid = $("#productGrid");
const homeProductGrid = $("#homeProductGrid");
const productTotal = $("#productTotal");
const emptyState = $("#emptyState");
const searchForm = $("#searchForm");
const searchInput = $("#searchInput");
const filterButtons = $("#filterButtons");
const sortSelect = $("#sortSelect");

const cartCount = $("#cartCount");
const drawerCount = $("#drawerCount");
const cartDrawer = $("#cartDrawer");
const cartItems = $("#cartItems");
const cartSubtotal = $("#cartSubtotal");
const checkoutSubtotal = $("#checkoutSubtotal");
const overlay = $("#overlay");

const cartPageItems = $("#cartPageItems");
const cartPageCount = $("#cartPageCount");
const cartPageSubtotal = $("#cartPageSubtotal");
const cartPageCheckout = $("#cartPageCheckout");

const productModal = $("#productModal");
const productDetails = $("#productDetails");
const checkoutModal = $("#checkoutModal");
const confirmModal = $("#confirmModal");
const toastElement = $("#toast");


/* ------------------------------------------------------------
   4. REMEMBER THE VISITOR'S CART
   localStorage keeps cart items in this browser after refresh.
   It does not sync carts between different phones or computers.
   ------------------------------------------------------------ */
let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("grnd_cart")) || [];
} catch (error) {
    // If saved cart data is damaged, start with an empty cart.
    cart = [];
}

// Remove saved cart entries that no longer match a product in this list.
cart = cart.filter(function (item) {
    return PRODUCTS.some(function (product) {
        return product.id === Number(item.id);
    }) && Number.isFinite(Number(item.qty)) && Number(item.qty) > 0;
}).map(function (item) {
    // Keep quantities as whole numbers and preserve the selected size.
    return { id: Number(item.id), size: item.size || "", qty: Math.max(1, Math.floor(Number(item.qty))) };
});


/* ------------------------------------------------------------
   5. PAGE STATE
   Read category and search words from the Shop page URL.
   Example: shop.html?category=Tech
   ------------------------------------------------------------ */
const urlParameters = new URLSearchParams(window.location.search);

let activeCategory = urlParameters.get("category") || "All";
let searchWords = urlParameters.get("q") || "";
let pendingRemoveId = null;


/* ------------------------------------------------------------
   6. SMALL HELPER FUNCTIONS
   ------------------------------------------------------------ */

// Format a number as a Ugandan shilling price.
function formatMoney(amount) {
    return SETTINGS.currency + " " + Number(amount).toLocaleString("en-UG");
}

// Find a product using its unique ID.
function findProduct(productId) {
    return PRODUCTS.find(function (product) {
        return product.id === Number(productId);
    });
}

// Save the cart and refresh every cart display on the page.
function saveCart() {
    try {
        localStorage.setItem("grnd_cart", JSON.stringify(cart));
    } catch (error) {
        // The cart still works for this visit if browser storage is unavailable.
        showToast("Cart updated, but this browser could not save it");
    }
    updateCartDisplays();
}

// Show a small message near the bottom of the screen.
function showToast(message) {
    if (!toastElement) {
        return;
    }

    toastElement.textContent = message;
    toastElement.classList.add("show");

    clearTimeout(window.grndToastTimer);

    window.grndToastTimer = setTimeout(function () {
        toastElement.classList.remove("show");
    }, 2400);
}


/* ------------------------------------------------------------
   7. BUILD ONE PRODUCT CARD
   This function creates the card from a product object.
   It is used on both the Home page and the Shop page.
   ------------------------------------------------------------ */
function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card reveal";
    card.dataset.cardView = product.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "View details for " + product.name);

    // Product image area.
    const visual = document.createElement("div");
    visual.className = "product-visual";
    visual.dataset.view = product.id;

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = product.tag;

    visual.appendChild(image);
    visual.appendChild(tag);

    // Product details area.
    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    // Price and Add to Cart button.
    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatMoney(product.price);

    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.type = "button";
    addButton.dataset.add = product.id;
    addButton.textContent = "＋ ADD TO CART";

    bottom.appendChild(price);
    bottom.appendChild(addButton);

    info.appendChild(category);
    info.appendChild(name);
    info.appendChild(description);
    info.appendChild(bottom);

    card.appendChild(visual);
    card.appendChild(info);

    return card;
}


/* ------------------------------------------------------------
   8. DISPLAY PRODUCTS ON THE SHOP PAGE
   This applies the category filter, search and sort setting.
   ------------------------------------------------------------ */
function renderShopProducts() {
    // This function only runs on the Shop page.
    if (!productGrid) {
        return;
    }

    const matchingProducts = PRODUCTS.filter(function (product) {
        const matchesCategory =
            activeCategory === "All" || product.category === activeCategory;

        const searchableText =
            (product.name + " " + product.description + " " + product.category).toLowerCase();

        const matchesSearch = searchableText.includes(searchWords.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Sort the matching products if a sorting option is selected.
    const sortChoice = sortSelect ? sortSelect.value : "featured";

    if (sortChoice === "low") {
        matchingProducts.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortChoice === "high") {
        matchingProducts.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    if (sortChoice === "az") {
        matchingProducts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    // Remove old cards before drawing the updated results.
    productGrid.innerHTML = "";

    matchingProducts.forEach(function (product, index) {
        const card = createProductCard(product);

        // Stagger the reveal animation so cards do not all appear at once.
        card.style.transitionDelay = (index * 55) + "ms";

        productGrid.appendChild(card);
        observeRevealElement(card);
    });

    // Update the product count and empty search message.
    if (productTotal) {
        productTotal.textContent = matchingProducts.length + " products";
    }

    if (emptyState) {
        emptyState.hidden = matchingProducts.length !== 0;
    }

    // Highlight the selected category button.
    if (filterButtons) {
        filterButtons.querySelectorAll(".filter").forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.category === activeCategory
            );
        });
    }
}


/* ------------------------------------------------------------
   9. DISPLAY FEATURED PRODUCTS ON THE HOME PAGE
   Only the first four products are shown on the Home page.
   Change the number 4 if you want more or fewer cards.
   ------------------------------------------------------------ */
function renderHomeProducts() {
    if (!homeProductGrid) {
        return;
    }

    homeProductGrid.innerHTML = "";

    PRODUCTS.slice(0, 4).forEach(function (product, index) {
        const card = createProductCard(product);

        card.style.transitionDelay = (index * 70) + "ms";

        homeProductGrid.appendChild(card);
        observeRevealElement(card);
    });
}


/* ------------------------------------------------------------
   10. CATEGORY FILTER BUTTONS
   When someone chooses a category, redraw the Shop products.
   ------------------------------------------------------------ */
if (filterButtons) {
    filterButtons.addEventListener("click", function (event) {
        const button = event.target.closest("[data-category]");

        if (!button) {
            return;
        }

        activeCategory = button.dataset.category;
        renderShopProducts();
    });
}


/* ------------------------------------------------------------
   11. SEARCH
   Search from the header and send the visitor to shop.html.
   Typing on the Shop page also filters products immediately.
   ------------------------------------------------------------ */
if (searchInput) {
    searchInput.value = searchWords;

    searchInput.addEventListener("input", function () {
        searchWords = searchInput.value.trim();

        // Live search works when the visitor is already on the Shop page.
        renderShopProducts();
    });
}

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const words = searchInput ? searchInput.value.trim() : "";

        window.location.href = "shop.html?q=" + encodeURIComponent(words);
    });
}


/* ------------------------------------------------------------
   12. SORTING
   Redraw the Shop page whenever the sorting option changes.
   ------------------------------------------------------------ */
if (sortSelect) {
    sortSelect.addEventListener("change", renderShopProducts);
}


/* ------------------------------------------------------------
   13. ADD A PRODUCT TO THE CART
   If the product is already in the cart, increase its quantity.
   ------------------------------------------------------------ */
function addToCart(productId, button) {
    const product = findProduct(productId);
    if (!product) return;
    if (button && button.dataset.loading === "yes") return;

    const sizeSelect = productDetails ? productDetails.querySelector("[data-product-size]") : null;
    const selectedSize = sizeSelect ? sizeSelect.value : "";
    if (product.sizes && product.sizes.length && !selectedSize) {
        showToast("Please choose a size first");
        if (sizeSelect) sizeSelect.focus();
        return;
    }

    if (button) { button.dataset.loading = "yes"; button.disabled = true; button.textContent = "ADDING..."; }
    const existingItem = cart.find(function (item) { return item.id === product.id && (item.size || "") === selectedSize; });
    if (existingItem) existingItem.qty += 1;
    else cart.push({ id: product.id, size: selectedSize, qty: 1 });
    saveCart();
    showToast("✓ " + product.name + (selectedSize ? " (" + selectedSize + ")" : "") + " added to cart");
    if (button) {
        button.textContent = "✓ ADDED";
        setTimeout(function () { button.textContent = "ADD TO CART"; button.disabled = false; button.dataset.loading = "no"; }, 900);
    }
}

/* ------------------------------------------------------------
   14. PRODUCT GRID CLICK EVENTS
   Event delegation means buttons keep working after cards redraw.
   ------------------------------------------------------------ */
document.addEventListener("click", function (event) {
    const addButton = event.target.closest("[data-add]");

    if (addButton) {
        const selectedProduct = findProduct(addButton.dataset.add);
        if (selectedProduct && selectedProduct.sizes && selectedProduct.sizes.length && (!productDetails || !productDetails.contains(addButton))) {
            openProductDetails(selectedProduct.id);
        } else {
            addToCart(addButton.dataset.add, addButton);
        }
    }

    const productCard = event.target.closest("[data-card-view]");
    const productVisual = event.target.closest("[data-view]");
    if (productCard && !event.target.closest("[data-add]")) {
        openProductDetails(productCard.dataset.cardView);
    } else if (productVisual && !event.target.closest("[data-add]")) {
        openProductDetails(productVisual.dataset.view);
    }

    const galleryControl = event.target.closest("[data-gallery-step]");
    if (galleryControl) changeProductGallery(Number(galleryControl.dataset.galleryStep));
    const galleryThumb = event.target.closest("[data-gallery-index]");
    if (galleryThumb) showProductGalleryImage(Number(galleryThumb.dataset.galleryIndex));
});


/* ------------------------------------------------------------
   15. PRODUCT DETAILS POP-UP
   Clicking a product image opens this small details window.
   ------------------------------------------------------------ */
let activeProductImages = [];
let activeProductImageIndex = 0;

function showProductGalleryImage(index) {
    if (!activeProductImages.length || !productDetails) return;
    activeProductImageIndex = (index + activeProductImages.length) % activeProductImages.length;
    const mainImage = productDetails.querySelector("#productGalleryMain");
    if (mainImage) {
        mainImage.src = activeProductImages[activeProductImageIndex];
        mainImage.alt = "Product image " + (activeProductImageIndex + 1);
    }
    productDetails.querySelectorAll("[data-gallery-index]").forEach(function (thumb) {
        thumb.classList.toggle("active", Number(thumb.dataset.galleryIndex) === activeProductImageIndex);
    });
    const counter = productDetails.querySelector("#galleryCounter");
    if (counter) counter.textContent = (activeProductImageIndex + 1) + " / " + activeProductImages.length;
}

function changeProductGallery(step) { showProductGalleryImage(activeProductImageIndex + step); }

function openProductDetails(productId) {
    const product = findProduct(productId);
    if (!product || !productModal || !productDetails) return;
    productDetails.innerHTML = "";
    activeProductImages = (product.images && product.images.length ? product.images : [product.image]).filter(Boolean);
    activeProductImageIndex = 0;

    const gallery = document.createElement("div"); gallery.className = "product-gallery";
    const stage = document.createElement("div"); stage.className = "product-gallery-stage";
    const image = document.createElement("img"); image.id = "productGalleryMain"; image.src = activeProductImages[0]; image.alt = product.name; image.className = "details-image";
    const previous = document.createElement("button"); previous.type = "button"; previous.className = "gallery-arrow gallery-prev"; previous.dataset.galleryStep = "-1"; previous.textContent = "‹"; previous.setAttribute("aria-label", "Previous product image");
    const next = document.createElement("button"); next.type = "button"; next.className = "gallery-arrow gallery-next"; next.dataset.galleryStep = "1"; next.textContent = "›"; next.setAttribute("aria-label", "Next product image");
    const counter = document.createElement("span"); counter.id = "galleryCounter"; counter.className = "gallery-counter"; counter.textContent = "1 / " + activeProductImages.length;
    stage.append(image, previous, next, counter); gallery.appendChild(stage);
    const thumbs = document.createElement("div"); thumbs.className = "gallery-thumbnails";
    activeProductImages.forEach(function (url, index) {
        const thumb = document.createElement("button"); thumb.type = "button"; thumb.className = "gallery-thumb" + (index === 0 ? " active" : ""); thumb.dataset.galleryIndex = index; thumb.setAttribute("aria-label", "Show product image " + (index + 1));
        const thumbImage = document.createElement("img"); thumbImage.src = url; thumbImage.alt = ""; thumb.appendChild(thumbImage); thumbs.appendChild(thumb);
    });
    gallery.appendChild(thumbs);

    const category = document.createElement("p"); category.className = "product-category"; category.textContent = product.category;
    const title = document.createElement("h2"); title.textContent = product.name;
    const price = document.createElement("h3"); price.className = "details-price"; price.textContent = formatMoney(product.price);
    const description = document.createElement("p"); description.className = "details-description"; description.textContent = product.description;
    productDetails.append(gallery, category, title, price, description);

    if (product.details) {
        const extra = document.createElement("p"); extra.className = "details-extra"; extra.textContent = product.details; productDetails.appendChild(extra);
    }
    if (product.sizes && product.sizes.length) {
        const sizeLabel = document.createElement("label"); sizeLabel.className = "size-label"; sizeLabel.textContent = "Choose your size";
        const select = document.createElement("select"); select.dataset.productSize = "true"; select.className = "product-size-select";
        const prompt = document.createElement("option"); prompt.value = ""; prompt.textContent = "Select size"; select.appendChild(prompt);
        product.sizes.forEach(function (size) { const option = document.createElement("option"); option.value = size; option.textContent = size; select.appendChild(option); });
        sizeLabel.appendChild(select); productDetails.appendChild(sizeLabel);
    }
    const addButton = document.createElement("button"); addButton.className = "btn product-modal-add"; addButton.type = "button"; addButton.dataset.add = product.id; addButton.textContent = "ADD TO CART";
    productDetails.appendChild(addButton);
    openModal(productModal);
}

/* ------------------------------------------------------------
   16. CART TOTALS AND CART COUNTS
   Update the header, drawer and full Cart page together.
   ------------------------------------------------------------ */
function getCartQuantity() {
    return cart.reduce(function (total, item) {
        return total + item.qty;
    }, 0);
}

function getCartSubtotal() {
    return cart.reduce(function (total, item) {
        const product = findProduct(item.id);
        return total + (product ? product.price * item.qty : 0);
    }, 0);
}

function updateCartDisplays() {
    const quantity = getCartQuantity();
    const subtotal = getCartSubtotal();

    if (cartCount) {
        cartCount.textContent = quantity;
    }

    if (drawerCount) {
        drawerCount.textContent = "(" + quantity + ")";
    }

    if (cartSubtotal) {
        cartSubtotal.textContent = formatMoney(subtotal);
    }

    if (checkoutSubtotal) {
        checkoutSubtotal.textContent = formatMoney(subtotal);
    }

    renderDrawerItems();
    renderCartPage();

    // Disable checkout buttons when the cart is empty.
    const drawerCheckout = $("#checkoutButton");

    if (drawerCheckout) {
        drawerCheckout.disabled = cart.length === 0;
    }

    if (cartPageCheckout) {
        cartPageCheckout.disabled = cart.length === 0;
    }
}


/* ------------------------------------------------------------
   17. DRAW THE QUICK CART ITEMS
   ------------------------------------------------------------ */
function renderDrawerItems() {
    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-cart";
        empty.textContent = "Your bag is empty. Explore the collection to find something you like.";

        const shopLink = document.createElement("a");
        shopLink.href = "shop.html";
        shopLink.textContent = "Explore products →";

        cartItems.appendChild(empty);
        cartItems.appendChild(shopLink);
        return;
    }

    cart.forEach(function (item) {
        const product = findProduct(item.id);

        if (!product) {
            return;
        }

        const line = document.createElement("div");
        line.className = "cart-line";

        const main = document.createElement("div");
        main.className = "cart-line-main";

        const image = document.createElement("img");
        image.className = "cart-line-image";
        image.src = product.image;
        image.alt = product.name;

        const details = document.createElement("div");
        details.className = "cart-line-details";

        const name = document.createElement("b");
        name.textContent = product.name;

        const price = document.createElement("small");
        price.textContent = formatMoney(product.price) + " each";

        const quantity = createQuantityControls(product.id, item.qty, item.size);

        details.appendChild(name);
        if (item.size) { const sizeText = document.createElement("small"); sizeText.textContent = "Size: " + item.size; details.appendChild(sizeText); }
        details.appendChild(price);
        details.appendChild(quantity);

        main.appendChild(image);
        main.appendChild(details);

        const removeButton = document.createElement("button");
        removeButton.className = "remove-link";
        removeButton.type = "button";
        removeButton.dataset.remove = product.id + "|" + (item.size || "");
        removeButton.textContent = "Remove";

        line.appendChild(main);
        line.appendChild(removeButton);

        cartItems.appendChild(line);
    });
}


/* ------------------------------------------------------------
   18. DRAW THE FULL CART PAGE
   ------------------------------------------------------------ */
function renderCartPage() {
    if (!cartPageItems) {
        return;
    }

    cartPageItems.innerHTML = "";

    if (cartPageCount) {
        cartPageCount.textContent = getCartQuantity();
    }

    if (cartPageSubtotal) {
        cartPageSubtotal.textContent = formatMoney(getCartSubtotal());
    }

    if (cart.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-cart";
        empty.textContent = "Your shopping bag is empty.";

        const link = document.createElement("a");
        link.href = "shop.html";
        link.textContent = "Explore products →";

        cartPageItems.appendChild(empty);
        cartPageItems.appendChild(link);
        return;
    }

    cart.forEach(function (item) {
        const product = findProduct(item.id);

        if (!product) {
            return;
        }

        const line = document.createElement("article");
        line.className = "cart-page-line";

        const image = document.createElement("img");
        image.className = "cart-page-image";
        image.src = product.image;
        image.alt = product.name;

        const nameArea = document.createElement("div");
        nameArea.className = "cart-page-name";

        const name = document.createElement("b");
        name.textContent = product.name;

        const price = document.createElement("small");
        price.textContent = formatMoney(product.price) + " each";

        const quantity = createQuantityControls(product.id, item.qty, item.size);

        nameArea.appendChild(name);
        if (item.size) { const sizeText = document.createElement("small"); sizeText.textContent = "Size: " + item.size; nameArea.appendChild(sizeText); }
        nameArea.appendChild(price);
        nameArea.appendChild(quantity);

        const endArea = document.createElement("div");
        endArea.className = "cart-page-end";

        const lineTotal = document.createElement("b");
        lineTotal.textContent = formatMoney(product.price * item.qty);

        const removeButton = document.createElement("button");
        removeButton.className = "remove-link";
        removeButton.type = "button";
        removeButton.dataset.remove = product.id + "|" + (item.size || "");
        removeButton.textContent = "Remove";

        endArea.appendChild(lineTotal);
        endArea.appendChild(removeButton);

        line.appendChild(image);
        line.appendChild(nameArea);
        line.appendChild(endArea);

        cartPageItems.appendChild(line);
    });
}


/* ------------------------------------------------------------
   19. QUANTITY BUTTONS
   The same function creates plus and minus buttons in both carts.
   ------------------------------------------------------------ */
function createQuantityControls(productId, quantity, size) {
    const controls = document.createElement("div");
    controls.className = "qty-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.dataset.qty = productId;
    minus.dataset.size = size || "";
    minus.dataset.change = "-1";
    minus.textContent = "−";
    minus.setAttribute("aria-label", "Reduce quantity");

    const number = document.createElement("span");
    number.textContent = quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.dataset.qty = productId;
    plus.dataset.size = size || "";
    plus.dataset.change = "1";
    plus.textContent = "+";
    plus.setAttribute("aria-label", "Increase quantity");

    controls.appendChild(minus);
    controls.appendChild(number);
    controls.appendChild(plus);

    return controls;
}


/* ------------------------------------------------------------
   20. CHANGE QUANTITY OR REMOVE A PRODUCT
   ------------------------------------------------------------ */
document.addEventListener("click", function (event) {
    const quantityButton = event.target.closest("[data-qty]");

    if (quantityButton) {
        const productId = Number(quantityButton.dataset.qty);
        const selectedSize = quantityButton.dataset.size || "";
        const change = Number(quantityButton.dataset.change);
        const item = cart.find(function (cartItem) {
            return cartItem.id === productId && (cartItem.size || "") === selectedSize;
        });

        if (!item) {
            return;
        }

        item.qty += change;

        // Ask for confirmation if the quantity becomes zero.
        if (item.qty <= 0) {
            item.qty = 1;
            askToRemove(productId + "|" + selectedSize);
        } else {
            saveCart();
        }
    }

    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
        askToRemove(removeButton.dataset.remove);
    }
});


/* ------------------------------------------------------------
   21. REMOVE CONFIRMATION WINDOW
   ------------------------------------------------------------ */
function askToRemove(productKey) {
    const parts = String(productKey).split("|");
    const productId = Number(parts[0]);
    const selectedSize = parts[1] || "";
    const product = findProduct(productId);

    if (!product || !confirmModal) {
        return;
    }

    pendingRemoveId = { id: product.id, size: selectedSize };

    const productName = $("#confirmProductName");

    if (productName) {
        productName.textContent = product.name + (selectedSize ? " — Size: " + selectedSize : "");
    }

    openModal(confirmModal);
}

const confirmRemoveButton = $("#confirmRemove");
const cancelRemoveButton = $("#cancelRemove");

if (confirmRemoveButton) {
    confirmRemoveButton.addEventListener("click", function () {
        if (pendingRemoveId === null) {
            return;
        }

        cart = cart.filter(function (item) {
            return !(item.id === pendingRemoveId.id && (item.size || "") === pendingRemoveId.size);
        });

        pendingRemoveId = null;
        saveCart();
        closeAllWindows();
        showToast("Item removed from your cart");
    });
}

if (cancelRemoveButton) {
    cancelRemoveButton.addEventListener("click", closeAllWindows);
}


/* ------------------------------------------------------------
   22. OPEN AND CLOSE CART / POP-UP WINDOWS
   ------------------------------------------------------------ */
function openModal(modal) {
    if (!modal || !overlay) {
        return;
    }

    closeAllWindows();
    overlay.classList.add("show");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function openCartDrawer() {
    closeAllWindows();

    if (overlay) {
        overlay.classList.add("show");
    }

    if (cartDrawer) {
        cartDrawer.classList.add("open");
    }

    document.body.style.overflow = "hidden";
}

function closeAllWindows() {
    if (overlay) {
        overlay.classList.remove("show");
    }

    if (cartDrawer) {
        cartDrawer.classList.remove("open");
    }

    [productModal, checkoutModal, confirmModal].forEach(function (modal) {
        if (modal) {
            modal.classList.remove("show");
        }
    });

    document.body.style.overflow = "";
}

const openCartButton = $("#openCart");
const closeCartButton = $("#closeCart");
const closeProductButton = $("#closeProduct");
const closeCheckoutButton = $("#closeCheckout");

if (openCartButton) {
    openCartButton.addEventListener("click", openCartDrawer);
}

if (closeCartButton) {
    closeCartButton.addEventListener("click", closeAllWindows);
}

if (closeProductButton) {
    closeProductButton.addEventListener("click", closeAllWindows);
}

if (closeCheckoutButton) {
    closeCheckoutButton.addEventListener("click", closeAllWindows);
}

if (overlay) {
    overlay.addEventListener("click", closeAllWindows);
}

// Escape key closes the active cart drawer or pop-up.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeAllWindows();
    }
});


/* ------------------------------------------------------------
   23. OPEN THE CHECKOUT FORM
   ------------------------------------------------------------ */
function openCheckout() {
    if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
    }

    openModal(checkoutModal);
}

const checkoutButton = $("#checkoutButton");

if (checkoutButton) {
    checkoutButton.addEventListener("click", openCheckout);
}

if (cartPageCheckout) {
    cartPageCheckout.addEventListener("click", openCheckout);
}


/* ------------------------------------------------------------
   24. SEND THE ORDER TO WHATSAPP
   This opens WhatsApp with the customer's order details.
   No payment is processed by this demo website.
   ------------------------------------------------------------ */
const checkoutForm = $("#checkoutForm");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Never create an order message for an empty cart.
        if (cart.length === 0) {
            closeAllWindows();
            showToast("Your bag is empty. Add a product first.");
            return;
        }

        // WhatsApp requires the destination number in international digits-only format.
        const whatsappNumber = String(SETTINGS.whatsappNumber).replace(/\D/g, "");
        if (!whatsappNumber || whatsappNumber.includes("X")) {
            showToast("Add a valid WhatsApp number in app.js first");
            return;
        }

        const formData = new FormData(checkoutForm);
        const customerName = String(formData.get("name") || "").trim();
        const customerPhone = String(formData.get("phone") || "").trim();
        const customerLocation = String(formData.get("location") || "").trim();
        const customerNote = String(formData.get("note") || "").trim() || "None";

        if (!customerName || !customerPhone || !customerLocation) {
            showToast("Please complete your name, phone and delivery location");
            return;
        }

        // Create a short reference the customer and store can use in follow-up messages.
        const orderReference = "GRND-" + Date.now().toString().slice(-7);
        const orderLines = cart.map(function (item) {
            const product = findProduct(item.id);
            if (!product) return "";
            return product.name + (item.size ? " (Size: " + item.size + ")" : "") + " × " + item.qty + " — " +
                formatMoney(product.price * item.qty);
        }).filter(Boolean).join("\n");

        const orderMessage =
            "Hello GRND! I would like to place an order.\n" +
            "Order reference: " + orderReference + "\n\n" +
            orderLines + "\n\n" +
            "Order subtotal: " + formatMoney(getCartSubtotal()) + "\n" +
            "Customer name: " + customerName + "\n" +
            "Customer phone: " + customerPhone + "\n" +
            "Delivery location: " + customerLocation + "\n" +
            "Order note: " + customerNote + "\n\n" +
            "Please confirm product availability, delivery fee and payment method.";

        const whatsappLink =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(orderMessage);

        // Open WhatsApp directly from the submit action so mobile browsers allow it.
        const whatsappWindow = window.open(whatsappLink, "_blank");
        if (whatsappWindow) {
            showToast("Order message prepared. Send it in WhatsApp to complete your request.");
        } else {
            showToast("Allow pop-ups or open WhatsApp to send your order.");
        }
    });
}


/* ------------------------------------------------------------
   25. MOBILE MENU
   Show or hide the mobile navigation links.
   ------------------------------------------------------------ */
const menuToggle = $("#menuToggle");
const mobileNav = $("#mobileNav");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
        const menuIsOpen = mobileNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
        menuToggle.textContent = menuIsOpen ? "×" : "☰";
    });

    // Close the mobile menu after a visitor selects a page.
    mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


/* ------------------------------------------------------------
   26. HOME PAGE AUTOMATIC SLIDESHOW
   The slideshow changes every 6 seconds by default.
   Change SETTINGS.slideInterval above to use a different speed.
   ------------------------------------------------------------ */
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const slideDots = Array.from(document.querySelectorAll(".slide-dot"));
const slideCounter = $("#slideCounter");
const previousSlideButton = $("#previousSlide");
const nextSlideButton = $("#nextSlide");

let currentSlide = 0;
let slideshowTimer = null;

// Display one slide and update its matching dot and counter.
function showSlide(slideNumber) {
    if (heroSlides.length === 0) {
        return;
    }

    currentSlide = (slideNumber + heroSlides.length) % heroSlides.length;

    heroSlides.forEach(function (slide, index) {
        slide.classList.toggle("is-active", index === currentSlide);
    });

    slideDots.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === currentSlide);
    });

    if (slideCounter) {
        const current = String(currentSlide + 1).padStart(2, "0");
        const total = String(heroSlides.length).padStart(2, "0");

        slideCounter.textContent = current + " / " + total;
    }
}

// Start the automatic timer, clearing any previous timer first.
function startSlideshow() {
    if (heroSlides.length < 2) {
        return;
    }

    clearInterval(slideshowTimer);

    slideshowTimer = setInterval(function () {
        showSlide(currentSlide + 1);
    }, SETTINGS.slideInterval);
}

// Previous arrow.
if (previousSlideButton) {
    previousSlideButton.addEventListener("click", function () {
        showSlide(currentSlide - 1);
        startSlideshow();
    });
}

// Next arrow.
if (nextSlideButton) {
    nextSlideButton.addEventListener("click", function () {
        showSlide(currentSlide + 1);
        startSlideshow();
    });
}

// Dot buttons.
slideDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        showSlide(index);
        startSlideshow();
    });
});

// Pause the automatic slideshow while the visitor points at it.
const heroSection = $("#homeHero");

if (heroSection) {
    heroSection.addEventListener("mouseenter", function () {
        clearInterval(slideshowTimer);
    });

    heroSection.addEventListener("mouseleave", startSlideshow);

    heroSection.addEventListener("focusin", function () {
        clearInterval(slideshowTimer);
    });

    heroSection.addEventListener("focusout", startSlideshow);
}


/* ------------------------------------------------------------
   27. SCROLL REVEAL ANIMATION
   Items with the "reveal" class gently appear as they enter view.
   New product cards are also watched by the same observer.
   ------------------------------------------------------------ */
let revealObserver = null;

if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });
}

// Start watching one element.
function observeRevealElement(element) {
    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        // Older browsers show the element immediately.
        element.classList.add("is-visible");
    }
}

// Watch all reveal elements already written in the HTML.
document.querySelectorAll(".reveal").forEach(observeRevealElement);


/* ------------------------------------------------------------
   28. FOOTER YEAR AND CURRENT PAGE LINK
   ------------------------------------------------------------ */
const yearElement = $("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight the current page in desktop and mobile navigation.
const currentFile = window.location.pathname.split("/").pop() || "index.html";
const pageNames = {
    "index.html": "home",
    "shop.html": "shop",
    "about.html": "about",
    "cart.html": "cart",
    "contact.html": "contact"
};

document.querySelectorAll("[data-page]").forEach(function (link) {
    link.classList.toggle("nav-active", link.dataset.page === pageNames[currentFile]);
});


/* ------------------------------------------------------------
   29. START THE WEBSITE
   These functions run once after the page has loaded.
   ------------------------------------------------------------ */
renderShopProducts();
renderHomeProducts();
updateCartDisplays();
showSlide(0);
startSlideshow();
