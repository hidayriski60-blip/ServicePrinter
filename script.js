document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       MOBILE MENU
    ======================================== */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.textContent = isOpen ? "×" : "☰";

        });


        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";

            });

        });

    }


    /* ========================================
       PRICE CALCULATOR
    ======================================== */

    const packageSelect =
        document.getElementById("packageSelect");

    const peopleInput =
        document.getElementById("peopleInput");

    const totalPrice =
        document.getElementById("totalPrice");


    function calculatePrice() {

        if (!packageSelect || !peopleInput || !totalPrice) {
            return;
        }

        const price =
            Number(packageSelect.value) || 0;

        const people =
            Number(peopleInput.value) || 0;

        const total = price * people;

        totalPrice.textContent =
            "$" + total.toLocaleString("en-US");

    }


    if (packageSelect && peopleInput) {

        packageSelect.addEventListener(
            "change",
            calculatePrice
        );

        peopleInput.addEventListener(
            "input",
            calculatePrice
        );

    }


    /* ========================================
       GALLERY LIGHTBOX
    ======================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-image");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");


    if (lightbox && lightboxImage && lightboxClose) {

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });


        function closeLightbox() {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }


        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );


        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });


        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeLightbox();
            }

        });

    }


    /* ========================================
       BOOKING FORM
    ======================================== */

    const bookingForm =
        document.getElementById("bookingForm");


    if (bookingForm) {

        bookingForm.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("nameInput")
                    .value.trim();


            const email =
                document.getElementById("emailInput")
                    .value.trim();


            const packageSelectElement =
                document.getElementById("packageSelect");


            const packageName =
                packageSelectElement.options[
                    packageSelectElement.selectedIndex
                ].text;


            const people =
                document.getElementById("peopleInput")
                    .value;


            const date =
                document.getElementById("dateInput")
                    .value;


            const country =
                document.getElementById("countryInput")
                    .value.trim();


            const message =
                document.getElementById("messageInput")
                    .value.trim();


            const price =
                Number(packageSelectElement.value) || 0;


            const total =
                price * Number(people);


            const whatsappMessage =

`Hello Andreas Expedition!

I would like to make a trekking booking.

Name:
${name}

Email:
${email}

Country:
${country}

Trekking Package:
${packageName}

Number of People:
${people}

Trekking Date:
${date}

Estimated Total:
$${total.toLocaleString("en-US")}

Additional Message:
${message || "None"}

Thank you!`;


            const phoneNumber =
                "6281997889727";


            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    /* ========================================
       SET MINIMUM BOOKING DATE
    ======================================== */

    const dateInput =
        document.getElementById("dateInput");


    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.min = today;

    }

});