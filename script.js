// Kiểm tra trạng thái đăng nhập
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// 1. Logic đọc tỉ lệ màn hình & Render sản phẩm
function renderProducts() {
    const grid = document.getElementById('product-list');
    if(!grid) return;

    let itemCount = 30; // Mặc định PC (5 hàng x 6 cột)
    const ratio = window.innerWidth / window.innerHeight;

    // Phát hiện Android/iOS tỉ lệ dài (20:9 ~ 2.22, 19.5:9 ~ 2.16, 16:9 ~ 1.77)
    if (window.innerWidth <= 1024) {
        itemCount = 60; // Mobile: 20 hàng x 3 cột
    }

    grid.innerHTML = '';
    for (let i = 1; i <= itemCount; i++) {
        grid.innerHTML += `
            <div class="product-card" style="background:#fff; border:3px solid red; padding:10px; text-align:center;">
                <div style="height:120px; border:1px solid blue; background:#eee; margin-bottom:5px;">Ảnh sản phẩm ${i}</div>
                <div style="font-weight:bold;">Tên Sản Phẩm</div>
                <div style="border-top:1px solid blue; border-bottom:1px solid blue; margin:5px 0; font-size:14px;">Giá: 100k | Đánh giá</div>
                <div style="display:flex; gap:2px;">
                    <button onclick="buyNow()" class="btn-3d white" style="font-size:12px; flex:1;">Mua Ngay</button>
                    <button class="btn-3d white" style="font-size:12px; flex:1;">Giỏ</button>
                </div>
                <button class="btn-3d white" style="font-size:12px; width:100%; margin-top:2px;">Xem Chi Tiết</button>
            </div>
        `;
    }
}

// 2. Logic Mua hàng
function buyNow() {
    if (!isLoggedIn) {
        alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC MUA HÀNG!");
        window.location.href = 'login.html';
    } else {
        document.getElementById('payment-modal').style.display = 'flex';
    }
}

function confirmOrder() {
    alert("Đơn hàng đã được ghi nhận! Cảm ơn bạn.");
    document.getElementById('payment-modal').style.display = 'none';
}

// Khởi chạy khi load trang
window.onload = renderProducts;
window.onresize = renderProducts;
function renderAllProducts() {
    const grid = document.getElementById('product-list');
    if(!grid) return;

    let totalItems = 30; // Mặc định PC (5 hàng x 6 cột)
    if (window.innerWidth <= 1024) {
        totalItems = 60; // Mobile (20 hàng x 3 cột)
    }

    grid.innerHTML = '';
    for(let i=1; i<=totalItems; i++) {
        grid.innerHTML += `
            <div class="product-card" style="background:#fff; border:3px solid red; padding:10px; text-align:center;">
                <div style="height:130px; border:1px solid blue; background:#eee; margin-bottom:5px; display:flex; align-items:center; justify-content:center;">Ảnh sản phẩm</div>
                <div style="font-weight:bold; font-size:18px;">Tên Sản Phẩm</div>
                <div style="border-top:1px solid blue; border-bottom:1px solid blue; margin:5px 0; font-size:14px;">Giá: 100.000đ | Đánh giá: 5*</div>
                <div style="display:flex; gap:3px;">
                    <button onclick="checkPurchase()" class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Mua Ngay</button>
                    <button class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Vào Giỏ</button>
                </div>
                <button class="btn-3d white" style="width:100%; font-size:14px; margin-top:3px; padding:5px;">Xem Chi Tiết</button>
            </div>
        `;
    }
}

function checkPurchase() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if(loggedIn !== 'true') {
        alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC MUA HÀNG!");
        window.location.href = 'login.html';
    } else {
        document.getElementById('payment-modal').style.display = 'flex';
    }
}

window.onload = renderAllProducts;
window.onresize = renderAllProducts;
function renderGrid() {
    const grid = document.getElementById('product-list');
    if(!grid) return;

    let total = 30; // 5 hàng x 6 cột
    if(window.innerWidth <= 1024) {
        total = 60; // 20 hàng x 3 cột cho Mobile
    }

    grid.innerHTML = '';
    for(let i=1; i<=total; i++) {
        grid.innerHTML += `
            <div class="product-card" style="background:#fff; border:3px solid red; padding:10px; text-align:center;">
                <div style="height:120px; border:1px solid blue; background:#eee; margin-bottom:5px; display:flex; align-items:center; justify-content:center;">Ảnh SP</div>
                <div style="font-weight:bold;">Sản Phẩm ${i}</div>
                <div style="border-top:1px solid blue; border-bottom:1px solid blue; margin:5px 0; font-size:14px;">Giá: 100k | 5*</div>
                <div style="display:flex; gap:2px;">
                    <button onclick="checkBuy()" class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Mua Ngay</button>
                    <button class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Giỏ</button>
                </div>
                <button class="btn-3d white" style="width:100%; font-size:14px; margin-top:2px;">Xem Chi Tiết</button>
            </div>
        `;
    }
}

function checkBuy() {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC MUA HÀNG!");
        window.location.href = 'login.html';
    } else {
        document.getElementById('payment-modal').style.display = 'flex';
    }
}

window.onload = renderGrid;
window.onresize = renderGrid;
function renderGrid() {
    const grid = document.getElementById('product-list');
    if(!grid) return;

    let total = 30; // PC
    if(window.innerWidth <= 1024) total = 60; // Mobile

    grid.innerHTML = '';
    for(let i=1; i<=total; i++) {
        grid.innerHTML += `
            <div class="product-card" style="background:#fff; border:3px solid red; padding:10px; text-align:center;">
                <div style="height:120px; border:1px solid blue; background:#eee; margin-bottom:5px; display:flex; align-items:center; justify-content:center;">Ảnh SP</div>
                <div style="font-weight:bold;">Sản Phẩm ${i}</div>
                <div style="border-top:1px solid blue; border-bottom:1px solid blue; margin:5px 0; font-size:14px;">Giá: 100k | 5*</div>
                <div style="display:flex; gap:2px;">
                    <button onclick="checkBuy()" class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Mua Ngay</button>
                    <button class="btn-3d white" style="font-size:14px; flex:1; padding:5px;">Giỏ</button>
                </div>
                <button class="btn-3d white" style="width:100%; font-size:14px; margin-top:2px;">Xem Chi Tiết</button>
            </div>
        `;
    }
}

function checkBuy() {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC MUA HÀNG!");
        window.location.href = 'login.html';
    } else {
        document.getElementById('payment-modal').style.display = 'flex';
    }
}

window.onload = renderGrid;
window.onresize = renderGrid;
// 1. KHỞI TẠO HỆ THỐNG ÂM THANH PIXEL (CUSTOM)
const PixelAudio = {
    ctx: null,

    // Hàm tạo tiếng "cạch" gỗ/pixel
    playClick: function() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Kiểu sóng vuông tạo cảm giác 8-bit
        osc.type = 'square'; 
        
        // Tần số giảm nhanh từ cao xuống thấp tạo tiếng click
        // Thêm một chút random để mỗi lần bấm âm thanh hơi khác nhau (giống Minecraft)
        const freq = 450 + (Math.random() * 50); 
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

        // Âm lượng ngắn và sắc
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    }
};

// 2. TỰ ĐỘNG GÁN ÂM THANH CHO TẤT CẢ PHẦN TỬ TƯƠNG TÁC
document.addEventListener('mousedown', function(e) {
    // Tìm mục tiêu là nút, link 3d, hoặc sản phẩm
    const target = e.target.closest('button, .btn-3d, a, .product-card, input[type="button"], input[type="submit"]');
    
    if (target) {
        PixelAudio.playClick();
    }
});

// 3. LOGIC RENDER SẢN PHẨM CỦA BẠN (GIỮ NGUYÊN HOẶC CẬP NHẬT)
function renderProducts() {
    const grid = document.getElementById('product-list');
    if(!grid) return;

    let itemCount = (window.innerWidth <= 1024) ? 60 : 30;
    grid.innerHTML = '';

    for (let i = 1; i <= itemCount; i++) {
        grid.innerHTML += `
            <div class="product-card" style="background:#fff; border:3px solid red; padding:10px; text-align:center; cursor:pointer;">
                <div style="height:120px; border:1px solid blue; background:#eee; margin-bottom:5px;">Ảnh SP ${i}</div>
                <div style="font-weight:bold;">Tên Sản Phẩm</div>
                <div style="border-top:1px solid blue; border-bottom:1px solid blue; margin:5px 0; font-size:14px;">Giá: 100k | 5*</div>
                <div style="display:flex; gap:2px;">
                    <button onclick="buyNow()" class="btn-3d white" style="font-size:12px; flex:1;">Mua Ngay</button>
                    <button class="btn-3d white" style="font-size:12px; flex:1;">Giỏ</button>
                </div>
            </div>
        `;
    }
}

// Giữ các hàm cũ của bạn
function buyNow() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert("BẠN PHẢI ĐĂNG NHẬP MỚI ĐƯỢC MUA HÀNG!");
        window.location.href = 'login.html';
    } else {
        const modal = document.getElementById('payment-modal');
        if(modal) modal.style.display = 'flex';
    }
}

window.addEventListener('load', renderProducts);
window.addEventListener('resize', renderProducts);