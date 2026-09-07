
/* =====================================
   MENU MOBILE
===================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    // Tutup menu setelah memilih menu
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuButton.textContent = "☰";

        });

    });

}


/* =====================================
   BOOKING WHATSAPP
===================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const nama = document.getElementById("nama").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const merek = document.getElementById("merek").value;
        const model = document.getElementById("model").value.trim();
        const masalah = document.getElementById("masalah").value;
        const deskripsi = document.getElementById("deskripsi").value.trim();


        if (!nama || !telepon || !merek || !model || !masalah) {

            alert("Mohon lengkapi semua data booking.");

            return;

        }

        const nomorWhatsApp = "6281997889727";


        const pesan =

`Halo PrintFix 👋

Saya ingin melakukan booking servis printer.

👤 Nama:
${nama}

📱 No. WhatsApp:
${telepon}

🖨️ Merek:
${merek}

📋 Model:
${model}

🔧 Masalah:
${masalah}

📝 Detail masalah:
${deskripsi || "Tidak ada keterangan tambahan."}

Mohon informasi untuk proses selanjutnya. Terima kasih 🙏`;


        const url =
            "https://wa.me/" +
            nomorWhatsApp +
            "?text=" +
            encodeURIComponent(pesan);


        window.open(url, "_blank");

    });

}


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(8,11,16,.96)";

    } else {

        navbar.style.background = "rgba(8,11,16,.82)";

    }

});


/* =====================================
   SIMPLE REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .process-item, .gallery-item"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});









/* =========================
   SATELLITE MAP
========================= */

// Koordinat lokasi Akar Akar, Bayan, Lombok Utara
const latitude = -8.2475;
const longitude = 116.4145;

// Buat map
const map = L.map('satellite-map').setView(
    [latitude, longitude],
    17
);


// SATELLITE IMAGERY
L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        maxZoom: 19,
        attribution:
            'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics'
    }
).addTo(map);


// MARKER
const marker = L.marker([
    latitude,
    longitude
]).addTo(map);


// POPUP
marker.bindPopup(`
    <div style="text-align:center;">
        <h3 style="margin-bottom:8px;">
            Service Printer JosJis
        </h3>

        <p style="margin:0;">
            Jasa Servis Printer
        </p>

        <p style="font-size:12px;color:#aaa;">
            Andalan, Bayan<br>
            Lombok Utara, NTB
        </p>
    </div>
`).openPopup();


// LINGKARAN AREA
L.circle(
    [latitude, longitude],
    {
        radius: 100,
        color: '#ff7a00',
        fillColor: '#ff7a00',
        fillOpacity: 0.12,
        weight: 2
    }
).addTo(map);

