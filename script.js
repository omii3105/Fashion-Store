// ================= PRODUCTS =================
const products = [

    // ================= MEN =================
    {category:'men', section:'casual', type:'tshirt', name:'Plain White Round Neck T-Shirt', price:599, img:'https://i.pinimg.com/1200x/f1/dd/26/f1dd26122e983cd44f485a62701358cd.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Men Cotton Figure Graphic Tee', price:899, img:'https://i.pinimg.com/1200x/56/4d/37/564d377ac9bdae05300b624a8c01f794.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Short sleeve, Lion Print T-Shirt', price:899, img:'https://i.pinimg.com/736x/5a/bf/2e/5abf2e05c6bd677e2c60f5ba6316d8c4.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Two color combination, Horse Print T-Shirt', price:1199, img:'https://i.pinimg.com/1200x/1c/bb/d8/1cbbd89aef3fa14fcce4fab7c2e69a3c.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Fit Crow Neck,Short Sleeve with Funny Graphics', price:1250, img:'https://i.pinimg.com/1200x/46/d6/05/46d60501bd82a23020cffd93110bf936.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Navy Blue Polo Neck T-shirt', price:1299, img:'https://i.pinimg.com/1200x/97/97/09/979709d29b362af1a64f0c7ec71f8d54.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Strip Trim Button,Polo Neck T-shirt', price:1699, img:'https://i.pinimg.com/1200x/1a/3e/ce/1a3ece6d9cb8c645b3b368543eecc276.jpg'},
    {category:'men', section:'casual', type:'tshirt', name:'Striped Print,Quarter Zip Polo T-shirt', price:1699, img:'https://i.pinimg.com/1200x/41/c0/9e/41c09e7b6c9f756c68507cff6ec07b2c.jpg'},

    {category:'men', section:'casual', type:'denims', name:'Men Blue Jeans', price:1599, img:'https://i.pinimg.com/1200x/1a/bf/44/1abf446058f9bc84129f9f7c446dd284.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Multi-Pocket Trousers', price:1299, img:'https://i.pinimg.com/1200x/b4/a9/cb/b4a9cb702abe5003c98857bb563de764.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Mens Cargo Pants', price:1400, img:'https://i.pinimg.com/736x/18/0e/75/180e7510a3c0644b07134c41e9f73f00.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Short Pant', price:899, img:'https://i.pinimg.com/736x/e3/65/b1/e365b1008048ebe2b3ff4a8640331d0e.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Flexible & Comfort Sportwear', price:1999, img:'https://i.pinimg.com/736x/6e/25/c5/6e25c5395d630684f9e647be8f69591d.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Sportwear Liner Short', price:1200, img:'https://i.pinimg.com/736x/e8/c2/34/e8c2344098671e12327d238fba506c9c.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Grey Jogger Pant', price:1400, img:'https://i.pinimg.com/736x/3a/b2/a5/3ab2a50b85551de2285024c3c4fa9a6f.jpg'},
    {category:'men', section:'casual', type:'denims', name:'Casual Sport Joggers ', price:1399, img:'https://i.pinimg.com/736x/8b/fe/db/8bfedb9b5f0a3f442d229330202a8203.jpg'},

    
    {category:'men', section:'formal', type:'shirt', name:'Formal White Shirt', price:1280, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/8/88a15d7ARAEOSH2852White_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'shirt', name:'Double Cuff Maroon Shirt', price:999, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/a/fa89ba44MSS1813-08_0.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'shirt', name:'White Men Vertical Striped Tailored Fit Shirt', price:1820, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/5/35a694dUSSHTFX0692_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'shirt', name:'Black Slim Fit Spread Collar Shirt', price:650, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/e/fe634a6HLSH023355_2.jpg?rnd=20200526195200&tr=w-256'},
    
    {category:'men', section:'formal', type:'blazer', name:'Grey Notch Lapel Collar Knit Blazer', price:5200, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/7/3729c09ARADOBZ0003_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'blazer', name:'Men Single-Breasted Regular Fit Blue Premium Knitting Blazer', price:5995, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/6/36d0a6cZS6200C_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'blazer', name:'Men Black Solid Single Breasted Blazer', price:5200, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/0/f0bfcb2DSHOWO00100964_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'blazer', name:'Printed Maroon Blazer', price:7374, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/c/1c92bb9MDDEC4DMK_1.jpg?rnd=20200526195200&tr=w-256'},
    
    
    {category:'men', section:'formal', type:'pants', name:'Black Classic Fit Pleated Formal Trousers', price:1690, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/2/2236448LPTPMCLBV33446_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'pants', name:'Light Brown Gurkha Trouser', price:1599, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/e/fe29f7e4MSR5171-02_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'pants', name:'Regular Fit Solid Mid Rise Trouser', price:3160, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/7/67123a3F25HMND046_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'formal', type:'pants', name:'Men Blue Formal Trouser', price:3000, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/f/bf1e400F24TMND015_1.jpg?rnd=20200526195200&tr=w-256'},

    {category:'men', section:'ethnic', type:'kurta', name:'Men Cotton Rayon Shiny Thread Sequinned Brown Kurta', price:1999, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/c/3c97892AOSOJAN00003824_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'kurta', name:'Mens Black Georgette Kurta and Patiala', price:2255, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/8/9819713VASMK209BLnPTYBL_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'kurta', name:'Men Blue Embroidered Kurta with Salwar', price:2580, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/9/6912b1cMR1L2851BL1_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'kurta', name:'Silk Blend Solid Embroidered Straight Yellow Kurta', price:1428, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/1/b16bb48MKU1434_1.jpg?rnd=20200526195200&tr=w-256'},
    
    {category:'men', section:'ethnic', type:'sherwani', name:'Blue Embellished Kurta with Sherwani and Trouser', price:9999, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/f/9fbf00eKA-5585-7236-T306_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'sherwani', name:'White Sherwani and Kurta with Pant ', price:125000, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/b/2b1de83SGSWJLF0085-01_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'sherwani', name:'Pink Embellished Sherwani with Trouser and Dupatta', price:106256, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/4/a4dc924GS2428_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'men', section:'ethnic', type:'sherwani', name:'Grey Silk Blend Jacquard Kurta Indowestern Sherwani ', price:6499, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/a/3a9032bKA-0250-7171-C115_1.jpg?rnd=20200526195200&tr=w-256'},

    // ================= WOMEN =================
    {category:'women', section:'western', type:'dress', name:'Blue Pure Cotton Denim Flared Midi Dress', price:3490, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/f/af01514VWWDR243260930121_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'dress', name:'Cowl Neck Solid Glitter Ruffle Hem Maxi Dress', price:1299, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/4/d418341CD20240527487073LDBurgundy_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'dress', name:'Midnight Corseted Drape Dress With Dupatta', price:6299, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/d/6dcc629ST1277_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'dress', name:'Rosewood Charm Dress', price:3922, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/7/3732d26ORDI01178_1.jpg?rnd=20200526195200&tr=w-256'},
    
    {category:'women', section:'western', type:'top', name:'Purple Ponte Di Roma Bandeau Waistcoat', price:1699, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/3/b391eda1310317002_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'top', name:'Sweetheart Neck Fuchsia Sequinned Long Sleeves', price:1999, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/9/79fa84c0IC48S06_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'top', name:'White Fitted Cotton T-Shirt', price:699, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/3/b3b55a21296040015_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'top', name:'Notched Collar Ruched Knotted Shirt', price:4199, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/3/0307dc7CD20241113579103BZBeige_1.jpg?rnd=20200526195200&tr=w-256'},
    
    
    {category:'women', section:'western', type:'jeans', name:'Women Blue Flared High Jeans', price:1799, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/f/2fb92681310008004_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'jeans', name:'Embellished Straight Fit High-Rise Blue Jeans', price:4500, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/c/6ca7345902138301_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'jeans', name:'Solid Mid Rise Denim Cargo', price:1208, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/c/4c3ce8dMFREEH00001032_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'western', type:'jeans', name:'Blue Distressed Baggy Fit Jeans', price:2049, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/c/1caffa2WJN130014072513_1.jpg?rnd=20200526195200&tr=w-256'},

    {category:'women', section:'ethnic', type:'kurtiset', name:'Viscose Rayon Straight Embroidered Kurta', price:1232, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/a/8ae8771CHAKORIMAROON_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'kurtiset', name:'weetheart Neck Brown Anarkali Kurta', price:2499, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/e/aeab2c5E6235_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'kurtiset', name:'Pink Shoulder Straps Embroidered Kurti', price:1404, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/d/9d14abfKDPINKROM_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'kurtiset', name:'Green Georgette Crop Top', price:3851, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/b/bb7848cSLABAO00001411_1.jpg?rnd=20200526195200&tr=w-256'},

    {category:'women', section:'ethnic', type:'saree', name:'Silk Grey Embellished Saree', price:2199, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/0/204dce6AARYAN12901KR_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'saree', name:'Georgette Black Embellished Designer Saree', price:2190, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/5/b51bb3fBITTI605JR_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'saree', name:'Gold Chocolate Chiffon Saree', price:2450, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/5/757705cSW1146_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'women', section:'ethnic', type:'saree', name:'Cocktail Premium Pre-Draped Sequin Saree', price:4250, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/b/cb18b04111416_1.jpg?rnd=20200526195200&tr=w-256'},


    // ================= KIDS =================
    {category:'kids',name:'Spiderman Graphic Printed Cotton Red T-Shirt With Pouch Bag', price:840, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/6/d6a4591SMAW25KBTSRT005195_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'kids',name:'Red Zig Zag Print Cotton Co-Ord', price:980, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/7/f774a8fDTITRI00001199_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'kids',name:'Black Organza Frill Chanderi Lehenga and Blouse', price:3919, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/5/e534990LTG109_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'kids',name:'Navy Blue Designer Jodhpuri Kurta & Pant', price:6240, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/2/323e415CS4233B_1.jpg?rnd=20200526195200&tr=w-256'},

    // ================= ACCESSORIES =================
    {category:'accessories', section:'bags', type:'handbag', name:'Bella Stylish Crossbody Sling Bag', price:2410, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/4/b4eecf0GMIRAG00000554_2.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'bags', type:'handbag', name:'Beige Top Handle Handbag', price:7200, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/c/4c3f69aALOLA270_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'bags', type:'handbag', name:'Pink Embellished Clutch Bag', price:2750, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/6/f665a0dNysa_Pink_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'bags', type:'handbag', name:'Tarandi White Womens Tote Bag', price:12999, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/5/0532615TARANDI168_1.jpg?rnd=20200526195200&tr=w-256'},


    {category:'accessories', section:'watches', type:'allwatch', name:'Snake Green Rose Gold Oval Analog ', price:2904, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/6/866c4e7SML0090TTRGGEBRGGEGreen_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'watches', type:'allwatch', name:'Silver Watch AX2600', price:10497, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/9/f90fc89AX2600_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'watches', type:'allwatch', name:'BT Calling Smartwatch For Unisex', price:2704, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/a/4aac7f1TWIXW1401T_1.jpg?rnd=20200526195200&tr=w-256'},
    {category:'accessories', section:'watches', type:'allwatch', name:'Silver Dial Analog Watches', price:3933, img:'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/b/9ba65deNYFDKDPI01985_1.jpg?rnd=20200526195200&tr=w-256'}


];

// ================= GLOBAL =================
let currentCategory = '';
let currentSection = '';
let cart = [];
// ================= CATEGORY STRUCTURE =================
const categoryStructure = {
    men: {
        casual: ['tshirt', 'denims'],
        formal: ['shirt', 'blazer','pants'],
        ethnic: ['kurta', 'sherwani']
    },
    women: {
        western: ['dress', 'top', 'jeans'],
        ethnic: ['kurtiset', 'saree']
    },
    accessories: {
        bags: [],
        watches: []
    }
};
// ================= LOAD CATEGORY =================
function loadCategory(category){
    currentCategory = category;
    currentSection = '';

    const subDiv = document.getElementById('subCategory');
    const productDiv = document.getElementById('productContainer');

    subDiv.innerHTML = '';
    productDiv.innerHTML = '';

    
    if(category === "kids"){
        const filtered = products.filter(p => p.category === "kids");

        if(filtered.length === 0){
            productDiv.innerHTML = "<p>No products found.</p>";
            return;
        }

        filtered.forEach(p => {
            productDiv.innerHTML += `
                <div class="card">
                    <img src="${p.img}" class="product-img">
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-price">₹ ${p.price}</p>

                    <select class="product-size" id="size-${p.name}">
                        <option value="">Select Size</option>
                        ${getSizeOptions(p.category)}
                    </select>

                    <button class="add-btn"
                        onclick="addToCart('${p.name}',${p.price},'${p.img}','${p.category}')">
                        Add to Cart
                    </button>
                </div>
            `;
        });

        return; 
    }

    const sections = Object.keys(categoryStructure[category]);

    sections.forEach(section => {
        subDiv.innerHTML += `
            <button onclick="loadSection('${section}')">
                ${section.toUpperCase()}
            </button>
        `;
    });
}
// ================= LOAD SECTION =================
function loadSection(section){
    currentSection = section;

    const subDiv = document.getElementById('subCategory');
    const productDiv = document.getElementById('productContainer');

    productDiv.innerHTML = '';
    subDiv.innerHTML = '';

    
    if(currentCategory === "accessories"){

        const filtered = products.filter(p =>
            p.category === "accessories" &&
            p.section === section
        );

        if(filtered.length === 0){
            productDiv.innerHTML = "<p>No products found.</p>";
            return;
        }

        filtered.forEach(p => {
            productDiv.innerHTML += `
                <div class="card">
                    <img src="${p.img}" class="product-img">
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-price">₹ ${p.price}</p>

                    <button class="add-btn"
                        onclick="addToCart('${p.name}',${p.price},'${p.img}','${p.category}')">
                        Add to Cart
                    </button>
                </div>
            `;
        });

        return; 
    }

    // Normal flow for men & women
    const types = categoryStructure[currentCategory][section];

    types.forEach(type => {
        subDiv.innerHTML += `
            <button onclick="filterProducts('${type}')">
                ${type.toUpperCase()}
            </button>
        `;
    });
}
// ================= FILTER PRODUCTS =================
function filterProducts(type){
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    const filtered = products.filter(p =>
        p.category === currentCategory &&
        p.section === currentSection &&
        p.type === type
    );

    if(filtered.length === 0){
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

    filtered.forEach(p => {
    container.innerHTML += `
        <div class="card">

            <img src="${p.img}" class="product-img">

            <h3 class="product-title">${p.name}</h3>

            <p class="product-price">₹ ${p.price}</p>

            <select class="product-size" id="size-${p.name}">
                <option value="">Select Size</option>
                ${getSizeOptions(p.category)}
            </select>

            <button class="add-btn"
                onclick="addToCart('${p.name}',${p.price},'${p.img}','${p.category}')">
                Add to Cart
            </button>

        </div>
    `;
    });
}
function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) {
        console.error("Toast div not found!");
        return;
    }

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


// ================= CART =================
function addToCart(name, price, img, category){

    let size = "";

    // 🔥 Only require size for clothing categories
    if(category === "men" || category === "women" || category === "kids"){

        const sizeSelect = document.getElementById(`size-${name}`);

        if(!sizeSelect || sizeSelect.value === ""){
            showToast("Please select size");
            return;
        }

        size = sizeSelect.value;

        // Reset dropdown
        sizeSelect.value = "";
    }

    // Add to cart
    cart.push({name, price, img, size});

    renderCart();

    showToast("Item added to cart ✅");
}
function renderCart(){
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item,index)=>{
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" class="cart-img">
                <div class="cart-details">
                    <p>${item.name}</p>
                    <span>₹ ${item.price}</span><br>
                    ${item.size ? `<span><strong>Size:</strong> ${item.size}</span>` : ""}
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">✕</button>
            </div>
        `;
    });

    totalEl.textContent = total;
}
function removeItem(index){
    cart.splice(index,1);
    renderCart();
}
function placeOrder() {

    fetch("place_order.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cart: cart })  
    })
    .then(res => res.json())   // temporary debug
    .then(data => {
        console.log("Server Response:", data);

        try {
            const json = data;
            if(json.status === "success"){
                alert("Order placed successfully!");
                cart = [];
                renderCart();
                toggleCart();
            } else {
                alert("Error: " + json.message);
            }
        } catch(e){
            console.error("Invalid JSON:", data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
// ================= SIDEBAR TOGGLE =================
function toggleCart(){
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('show');
}

// ================= SIZE GUIDE =================
function getSizeOptions(category){

    if(category === "men" || category === "women"){
        return `
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        `;
    }

    if(category === "kids"){
        return `
            <option value="2-3 Y">2-3 Y</option>
            <option value="4-5 Y">4-5 Y</option>
            <option value="6-7 Y">6-7 Y</option>
            <option value="8-9 Y">8-9 Y</option>
        `;
    }

    return "";
}
function closeSizeGuide(){
    document.getElementById("sizeModal").classList.remove("show");
}