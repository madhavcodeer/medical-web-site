document.addEventListener('DOMContentLoaded', function() {
  // --- Product Data ---
  const medicines = [
    {
      id: 'med1',
      name: 'Paracetamol 500mg',
      desc: 'Pain reliever and fever reducer. Trusted for quick relief.',
      price: 35,
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80',
      stock: 5,
      bestseller: true
    },
    {
      id: 'med2',
      name: 'Ibuprofen 200mg',
      desc: 'Reduces inflammation and relieves pain. Fast acting.',
      price: 45,
      image: 'https://images.unsplash.com/photo-1516815231350-7d3c4b8b1c8b?auto=format&fit=crop&w=400&q=80',
      stock: 25,
      bestseller: false
    },
    {
      id: 'med3',
      name: 'Amoxicillin 250mg',
      desc: 'Broad-spectrum antibiotic for bacterial infections.',
      price: 120,
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80',
      stock: 8,
      bestseller: true
    },
    {
      id: 'med4',
      name: 'Cetirizine 10mg',
      desc: 'Effective allergy relief. Non-drowsy formula.',
      price: 30,
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      stock: 40,
      bestseller: false
    },
    {
      id: 'med5',
      name: 'Aspirin 75mg',
      desc: 'Heart health support and pain relief.',
      price: 40,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      stock: 12,
      bestseller: false
    },
    {
      id: 'med6',
      name: 'ORS Sachet',
      desc: 'Oral rehydration salts for dehydration and recovery.',
      price: 15,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
      stock: 3,
      bestseller: false
    },
    {
      id: 'med7',
      name: 'Vitamin C Tablets',
      desc: 'Boosts immunity and overall health.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      stock: 50,
      bestseller: true
    },
    {
      id: 'med8',
      name: 'Antacid Chewable',
      desc: 'Quick relief from acidity and heartburn.',
      price: 25,
      image: 'https://images.unsplash.com/photo-1517260911205-8a3bfa0b6b09?auto=format&fit=crop&w=400&q=80',
      stock: 9,
      bestseller: false
    }
  ];
  const groceries = [
    {
      id: 'groc1',
      name: 'Cotton Swabs',
      desc: 'Sterile, soft, and safe for medical use.',
      price: 25,
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      stock: 7,
      bestseller: true
    },
    {
      id: 'groc2',
      name: 'Surgical Gloves',
      desc: 'Disposable, latex-free, and powder-free gloves.',
      price: 80,
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80',
      stock: 30,
      bestseller: false
    },
    {
      id: 'groc3',
      name: 'Face Masks (Pack of 10)',
      desc: '3-ply, breathable, and comfortable masks.',
      price: 60,
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80',
      stock: 5,
      bestseller: true
    },
    {
      id: 'groc4',
      name: 'Hand Sanitizer 100ml',
      desc: 'Kills 99.9% germs. Quick-dry, non-sticky formula.',
      price: 45,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
      stock: 18,
      bestseller: false
    },
    {
      id: 'groc5',
      name: 'Thermometer',
      desc: 'Digital, fast, and accurate temperature readings.',
      price: 150,
      image: 'https://images.unsplash.com/photo-1516815231350-7d3c4b8b1c8b?auto=format&fit=crop&w=400&q=80',
      stock: 2,
      bestseller: false
    },
    {
      id: 'groc6',
      name: 'Bandages (Pack of 20)',
      desc: 'Flexible, breathable, and skin-friendly.',
      price: 35,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      stock: 15,
      bestseller: false
    },
    {
      id: 'groc7',
      name: 'Alcohol Wipes',
      desc: 'Antiseptic wipes for quick disinfection.',
      price: 40,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
      stock: 8,
      bestseller: true
    },
    {
      id: 'groc8',
      name: 'Medical Tape',
      desc: 'Hypoallergenic, gentle, and strong adhesive.',
      price: 20,
      image: 'https://images.unsplash.com/photo-1517260911205-8a3bfa0b6b09?auto=format&fit=crop&w=400&q=80',
      stock: 11,
      bestseller: false
    }
  ];

  // --- Navigation Logic ---
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');
  navBtns.forEach(btn => {
    btn.onclick = function() {
      navBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const section = this.getAttribute('data-section');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(section+'-section').classList.add('active');
    };
  });
  document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.onclick = function() {
      document.querySelector(`.nav-btn[data-section='${this.getAttribute('data-section')}']`).click();
    };
  });

  // --- Render Products ---
  function renderProducts(list, containerId, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const wishlistIds = getWishlist();
    list.forEach(item => {
      let badges = '';
      if (item.stock !== undefined && item.stock < 10) badges += '<span class="badge badge-lowstock">Low Stock</span>';
      if (item.bestseller) badges += '<span class="badge badge-bestseller">Bestseller</span>';
      const isWish = wishlistIds.includes(item.id);
      const heart = `<span class="heart-icon${isWish ? ' filled' : ''}" tabindex="0" title="Add to Wishlist" aria-label="${isWish ? 'Remove from' : 'Add to'} wishlist" role="button">${isWish ? '♥' : '♡'}</span>`;
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        ${badges}
        <img src="${item.image}" alt="${item.name}" class="product-img">
        <div class="product-title">${item.name}
          <span class="info-icon" tabindex="0" aria-label="Product information" role="button">i
            <span class="tooltip">${item.desc}</span>
          </span>
          ${heart}
        </div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-price">₹${item.price}</div>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;
      div.onclick = function(e) {
        if (e.target.classList.contains('add-to-cart-btn') || e.target.classList.contains('info-icon') || e.target.classList.contains('tooltip')) return;
        if (e.target.classList.contains('heart-icon')) {
          toggleWishlist(item.id);
          renderWishlist();
          return;
        }
        addToRecentlyViewed(item.id);
        window.open(`product.html?id=${item.id}`, '_blank');
      };
      div.querySelector('.add-to-cart-btn').onclick = e => {
        e.stopPropagation();
        addToCart(item, type);
      };
      container.appendChild(div);
    });
  }
  renderProducts(medicines, 'medicines-list', 'medicine');
  renderProducts(groceries, 'groceries-list', 'grocery');

  // --- Search Logic ---
  document.getElementById('medicine-search').oninput = function() {
    const val = this.value.toLowerCase();
    renderProducts(medicines.filter(m => m.name.toLowerCase().includes(val)), 'medicines-list', 'medicine');
  };
  document.getElementById('grocery-search').oninput = function() {
    const val = this.value.toLowerCase();
    renderProducts(groceries.filter(g => g.name.toLowerCase().includes(val)), 'groceries-list', 'grocery');
  };

  // --- Smart Search Suggestions ---
  function setupSearchSuggestions(inputId, suggestionsId, products) {
    const input = document.getElementById(inputId);
    const suggestions = document.getElementById(suggestionsId);
    let activeIdx = -1;
    input.oninput = function() {
      const val = this.value.trim().toLowerCase();
      if (!val) { suggestions.style.display = 'none'; return; }
      const matches = products.filter(p => p.name.toLowerCase().includes(val)).slice(0,6);
      if (matches.length === 0) { suggestions.style.display = 'none'; return; }
      suggestions.innerHTML = '';
      matches.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'search-suggestion' + (idx === activeIdx ? ' active' : '');
        div.innerHTML = `
          <img src="${item.image}" class="suggestion-img" alt="${item.name}">
          <span class="suggestion-name">${item.name}</span>
          <span class="suggestion-price">₹${item.price}</span>
        `;
        div.onclick = () => { window.open(`product.html?id=${item.id}`, '_blank'); suggestions.style.display = 'none'; };
        suggestions.appendChild(div);
      });
      suggestions.style.display = 'block';
      activeIdx = -1;
    };
    input.onkeydown = function(e) {
      const items = suggestions.querySelectorAll('.search-suggestion');
      if (!items.length) return;
      if (e.key === 'ArrowDown') {
        activeIdx = (activeIdx + 1) % items.length;
        items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        activeIdx = (activeIdx - 1 + items.length) % items.length;
        items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
        e.preventDefault();
      } else if (e.key === 'Enter' && activeIdx >= 0) {
        items[activeIdx].click();
        e.preventDefault();
      } else if (e.key === 'Escape') {
        suggestions.style.display = 'none';
      }
    };
    input.onblur = function() { setTimeout(() => { suggestions.style.display = 'none'; }, 120); };
  }
  setupSearchSuggestions('medicine-search', 'medicine-suggestions', medicines);
  setupSearchSuggestions('grocery-search', 'grocery-suggestions', groceries);

  // --- Cart Logic ---
  let cart = [];
  const cartBtn = document.getElementById('cart-btn');
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCart = document.getElementById('close-cart');
  const cartItemsList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  function announceCartStatus(msg) {
    const status = document.getElementById('cart-status');
    if (status) {
      status.textContent = '';
      setTimeout(() => { status.textContent = msg; }, 50);
    }
  }

  const originalAddToCart = addToCart;
  addToCart = function(item, type) {
    originalAddToCart(item, type);
    announceCartStatus(`Added ${item.name} to cart.`);
  };

  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.name} x${item.qty}</span> <button onclick="removeFromCart('${item.id}')">Remove</button>`;
      cartItemsList.appendChild(li);
    });
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    cartTotal.textContent = total;
    updateDeliveryEstimator();
  }
  window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
  };
  cartBtn.onclick = () => { cartSidebar.classList.add('active'); };
  closeCart.onclick = () => cartSidebar.classList.remove('active');
  closeCart.setAttribute('aria-label', 'Close cart sidebar');
  document.addEventListener('mousedown', (e) => {
    if (cartSidebar.classList.contains('active') && !cartSidebar.contains(e.target) && e.target !== cartBtn) {
      cartSidebar.classList.remove('active');
    }
  });

  // --- Checkout Modal Logic ---
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModalBg = document.getElementById('checkout-modal-bg');
  const closeCheckoutModal = document.getElementById('close-checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');
  const successMsg = document.getElementById('success-msg');

  // --- Modal Focus Trap & Restore ---
  function trapFocus(modal) {
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    modal.addEventListener('keydown', function(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
  let lastFocused = null;
  function openModal(modalBg, modal) {
    lastFocused = document.activeElement;
    modalBg.classList.add('active');
    setTimeout(() => {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length) focusable[0].focus();
    }, 50);
    trapFocus(modal);
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modalBg) {
    modalBg.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocused) setTimeout(() => lastFocused.focus(), 50);
  }

  // Replace modal open/close logic for checkout/help
  checkoutBtn.onclick = () => openModal(checkoutModalBg, document.querySelector('.checkout-modal'));
  closeCheckoutModal.onclick = () => closeModal(checkoutModalBg);
  checkoutModalBg.onclick = (e) => { if (e.target === checkoutModalBg) closeModal(checkoutModalBg); };

  // --- Back Button Logic ---
  document.getElementById('back-from-medicines').onclick = function() {
    document.querySelector('.nav-btn[data-section="home"]').click();
  };
  document.getElementById('back-from-groceries').onclick = function() {
    document.querySelector('.nav-btn[data-section="home"]').click();
  };

  // --- Featured Products Carousel ---
  function renderFeatured() {
    const featured = [medicines[0], medicines[1], groceries[0], groceries[1]];
    const carousel = document.getElementById('featured-carousel');
    if (!carousel) return;
    carousel.innerHTML = '';
    featured.forEach(item => {
      const div = document.createElement('div');
      div.className = 'featured-card';
      div.setAttribute('tabindex', '0');
      div.setAttribute('role', 'group');
      div.setAttribute('aria-label', `${item.name}, ₹${item.price}`);
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="featured-img">
        <div class="featured-name">${item.name}</div>
        <div class="featured-price">₹${item.price}</div>
        <button class="quick-add-btn" aria-label="Add ${item.name} to cart">Add to Cart</button>
      `;
      div.onclick = (e) => {
        if (e.target.classList.contains('quick-add-btn')) return;
        window.open(`product.html?id=${item.id}`, '_blank');
      };
      div.querySelector('.quick-add-btn').onclick = (e) => {
        e.stopPropagation();
        addToCart(item, item.id.startsWith('med') ? 'medicine' : 'grocery');
        div.querySelector('.quick-add-btn').textContent = 'Added!';
        setTimeout(()=>{div.querySelector('.quick-add-btn').textContent = 'Add to Cart';}, 1200);
      };
      div.onkeydown = (e) => {
        if (e.key === 'Enter') window.open(`product.html?id=${item.id}`, '_blank');
        if (e.key === ' ') {
          e.preventDefault();
          div.querySelector('.quick-add-btn').click();
        }
      };
      carousel.appendChild(div);
    });
  }

  // --- Recently Viewed Logic ---
  function getRecentlyViewed() {
    let ids = [];
    try { ids = JSON.parse(localStorage.getItem('recentlyViewed')) || []; } catch (e) { ids = []; }
    return ids;
  }
  function getProductById(id) {
    return medicines.find(m => m.id === id) || groceries.find(g => g.id === id);
  }
  function renderRecent() {
    const carousel = document.getElementById('recent-carousel');
    if (!carousel) return;
    let ids = getRecentlyViewed();
    carousel.innerHTML = '';
    ids.slice(0,8).forEach(id => {
      const item = getProductById(id);
      if (!item) return;
      const div = document.createElement('div');
      div.className = 'recent-card';
      div.setAttribute('tabindex', '0');
      div.setAttribute('role', 'group');
      div.setAttribute('aria-label', `${item.name}, ₹${item.price}`);
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="recent-img">
        <div class="recent-name">${item.name}</div>
        <div class="recent-price">₹${item.price}</div>
        <button class="quick-add-btn" aria-label="Add ${item.name} to cart">Add to Cart</button>
      `;
      div.onclick = (e) => {
        if (e.target.classList.contains('quick-add-btn')) return;
        window.open(`product.html?id=${item.id}`, '_blank');
      };
      div.querySelector('.quick-add-btn').onclick = (e) => {
        e.stopPropagation();
        addToCart(item, item.id.startsWith('med') ? 'medicine' : 'grocery');
        div.querySelector('.quick-add-btn').textContent = 'Added!';
        setTimeout(()=>{div.querySelector('.quick-add-btn').textContent = 'Add to Cart';}, 1200);
      };
      div.onkeydown = (e) => {
        if (e.key === 'Enter') window.open(`product.html?id=${item.id}`, '_blank');
        if (e.key === ' ') {
          e.preventDefault();
          div.querySelector('.quick-add-btn').click();
        }
      };
      carousel.appendChild(div);
    });
  }

  // --- Help FAB and Modal Logic ---
  const helpFab = document.getElementById('help-fab');
  const helpModalBg = document.getElementById('help-modal-bg');
  const closeHelpModal = document.getElementById('close-help-modal');
  helpFab.onclick = () => openModal(helpModalBg, document.querySelector('.help-modal'));
  closeHelpModal.onclick = () => closeModal(helpModalBg);
  helpModalBg.onclick = (e) => { if (e.target === helpModalBg) closeModal(helpModalBg); };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(checkoutModalBg);
      closeModal(helpModalBg);
    }
  });

  // --- Wishlist Logic ---
  function getWishlist() {
    let ids = [];
    try { ids = JSON.parse(localStorage.getItem('wishlist')) || []; } catch (e) { ids = []; }
    return ids;
  }
  function setWishlist(ids) {
    localStorage.setItem('wishlist', JSON.stringify(ids));
  }
  function toggleWishlist(id) {
    let ids = getWishlist();
    if (ids.includes(id)) ids = ids.filter(x => x !== id);
    else ids.unshift(id);
    setWishlist(ids);
    renderProducts(medicines, 'medicines-list', 'medicine');
    renderProducts(groceries, 'groceries-list', 'grocery');
    renderWishlist();
  }
  function renderWishlist() {
    const carousel = document.getElementById('wishlist-carousel');
    if (!carousel) return;
    let ids = getWishlist();
    carousel.innerHTML = '';
    if (ids.length === 0) {
      carousel.innerHTML = '<div style="color:#aaa;padding:1.2rem;">No items in wishlist yet.</div>';
      return;
    }
    ids.slice(0,8).forEach(id => {
      const item = getProductById(id);
      if (!item) return;
      const div = document.createElement('div');
      div.className = 'wishlist-card';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="wishlist-img">
        <div class="wishlist-name">${item.name}</div>
        <div class="wishlist-price">₹${item.price}</div>
      `;
      div.onclick = () => window.open(`product.html?id=${item.id}`, '_blank');
      carousel.appendChild(div);
    });
  }

  // --- Order History Logic ---
  function getOrderHistory() {
    let orders = [];
    try { orders = JSON.parse(localStorage.getItem('orderHistory')) || []; } catch (e) { orders = []; }
    return orders;
  }
  function addOrderHistory(order) {
    let orders = getOrderHistory();
    orders.unshift(order);
    if (orders.length > 20) orders = orders.slice(0, 20);
    localStorage.setItem('orderHistory', JSON.stringify(orders));
  }
  function renderOrderHistory() {
    const list = document.getElementById('orderhistory-list');
    if (!list) return;
    const orders = getOrderHistory();
    list.innerHTML = '';
    if (orders.length === 0) {
      list.innerHTML = '<div style="color:#aaa;padding:1.2rem;">No orders yet.</div>';
      return;
    }
    orders.forEach(order => {
      const div = document.createElement('div');
      div.className = 'order-card';
      div.innerHTML = `
        <div class="order-date">${order.date}</div>
        <div class="order-items">${order.items.map(i => `${i.name} x${i.qty}`).join(', ')}</div>
        <div class="order-total">Total: ₹${order.total}</div>
        <div class="order-id">#${order.id}</div>
      `;
      list.appendChild(div);
    });
  }

  function getDeliveryEstimate() {
    const now = new Date();
    const min = new Date(now.getTime() + 2*24*60*60*1000);
    const max = new Date(now.getTime() + 3*24*60*60*1000);
    return `Arrives by: ${min.toLocaleDateString()} - ${max.toLocaleDateString()}`;
  }
  function updateDeliveryEstimator() {
    const est = getDeliveryEstimate();
    const el1 = document.getElementById('delivery-estimator');
    const el2 = document.getElementById('checkout-delivery-estimator');
    if (el1) el1.textContent = est;
    if (el2) el2.textContent = est;
  }

  // --- Accessibility Controls ---
  (function(){
    const fontBtn = document.getElementById('fontsize-btn');
    const contrastBtn = document.getElementById('contrast-btn');
    // Load state
    if(localStorage.getItem('fontLarge')==='1') document.body.classList.add('font-large');
    if(localStorage.getItem('fontXLarge')==='1') document.body.classList.add('font-xlarge');
    if(localStorage.getItem('highContrast')==='1') document.body.classList.add('high-contrast');
    const fontSizes = ['','font-large','font-xlarge'];
    let fontIdx = 0;
    if(document.body.classList.contains('font-xlarge')) fontIdx = 2;
    else if(document.body.classList.contains('font-large')) fontIdx = 1;
    fontBtn.onclick = function(){
      fontIdx = (fontIdx+1)%3;
      document.body.classList.remove('font-large','font-xlarge');
      if(fontSizes[fontIdx]) document.body.classList.add(fontSizes[fontIdx]);
      localStorage.setItem('fontLarge', fontIdx === 1 ? '1' : '0');
      localStorage.setItem('fontXLarge', fontIdx === 2 ? '1' : '0');
      fontBtn.setAttribute('aria-pressed', fontIdx > 0);
      fontBtn.textContent = fontIdx === 2 ? 'A+' : (fontIdx === 1 ? 'A' : 'A');
    };
    if(document.body.classList.contains('font-xlarge')) {
      fontBtn.textContent = 'A+';
      fontBtn.setAttribute('aria-pressed', true);
    }
    contrastBtn.onclick = function(){
      document.body.classList.toggle('high-contrast');
      const active = document.body.classList.contains('high-contrast');
      localStorage.setItem('highContrast', active ? '1' : '0');
      contrastBtn.setAttribute('aria-pressed', active);
    };
    fontBtn.onkeydown = function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); fontBtn.click(); } };
    contrastBtn.onkeydown = function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); contrastBtn.click(); } };
  })();

  // --- Checkout Form Submission (Order History) ---
  checkoutForm.onsubmit = function(e) {
    e.preventDefault();
    successMsg.style.display = 'block';
    // Save order history
    if (cart.length > 0) {
      const order = {
        id: Math.floor(Math.random()*90000+10000),
        date: new Date().toLocaleString(),
        items: cart.map(i => ({name: i.name, qty: i.qty})),
        total: cart.reduce((sum, i) => sum + i.price*i.qty, 0)
      };
      addOrderHistory(order);
      renderOrderHistory();
    }
    setTimeout(() => {
      successMsg.style.display = 'none';
      closeModal(checkoutModalBg);
      cart = [];
      updateCartUI();
      cartSidebar.classList.remove('active');
    }, 1800);
  };

  // --- Update Recently Viewed on Product Card Click ---
  function addToRecentlyViewed(id) {
    let ids = [];
    try { ids = JSON.parse(localStorage.getItem('recentlyViewed')) || []; } catch (e) { ids = []; }
    ids = ids.filter(pid => pid !== id);
    ids.unshift(id);
    if (ids.length > 16) ids = ids.slice(0, 16);
    localStorage.setItem('recentlyViewed', JSON.stringify(ids));
  }

  // Render all main UI sections after DOM is ready
  try { renderFeatured(); } catch(e) { console.error('renderFeatured error:', e); }
  try { renderRecent(); } catch(e) { console.error('renderRecent error:', e); }
  try { renderWishlist(); } catch(e) { console.error('renderWishlist error:', e); }
  try { renderOrderHistory(); } catch(e) { console.error('renderOrderHistory error:', e); }
});