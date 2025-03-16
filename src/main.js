function Test1() {
    alert("Hello, JavaScript!");
}

document.addEventListener("DOMContentLoaded", function () {
    //Väljer alla hero-text-element och sätter det i en "HeroText" variabel
    const heroText = document.querySelectorAll(".hero-content h2, .hero-content h1, .hero-content p, .hero-button");

    //Iterera genom alla instanser av text och Animera in dem vid 30% synlighet
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.filter = "blur(0px)";
            }
        });
    }, { threshold: 0.3 });

    //kalla på animationen för varje text-element
    heroText.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function() {
    const openingHours = {
        0: ["11:00", "16:00"], // Söndag
        1: ["09:00", "20:00"], // Måndag
        2: ["09:00", "20:00"], // Tisdag
        3: ["09:00", "20:00"], // Onsdag
        4: ["09:00", "20:00"], // Torsdag
        5: ["09:00", "20:00"], // Fredag
        6: ["10:00", "15:00"]  // Lördag
    };

    const now = new Date();
    const dayOfWeek = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Tid i minuter

    const [openTime, closeTime] = openingHours[dayOfWeek];
    const openMinutes = parseTimeToMinutes(openTime);
    const closeMinutes = parseTimeToMinutes(closeTime);

    const rows = document.querySelectorAll(".opening-hours table tr");

    rows.forEach((row, index) => {
        const dayCell = row.cells[0]; // Kolumn med dagarna
        const timeCell = row.cells[1]; // Kolumnen med öppettiderna
        console.log("hej");

        if (index === dayOfWeek) {
            if (currentTime >= openMinutes && currentTime <= closeMinutes) {
                timeCell.classList.add("open");
                timeCell.classList.remove("closed");
            } else {
                timeCell.classList.add("closed");
                timeCell.classList.remove("open");
            }

            dayCell.classList.add("active");
        } else {
            dayCell.classList.remove("active");
        }
    });

    function parseTimeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const dropbtn = dropdown.querySelector(".dropbtn");
    const caret = dropdown.querySelector(".caret");
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    const options = dropdown.querySelectorAll(".dropdown-content li");
    const stad = dropdown.querySelector(".stad");


    dropbtn.addEventListener("click", () => {
        dropbtn.classList.toggle("dropbtn-clicked");
        caret.classList.toggle("caret-rotate");
        dropdownContent.classList.toggle("dropdown-content-open");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            stad.innerText = option.innerText;
            stad.classList.add("text-fade-in");
            setTimeout(() => {
                stad.classList.remove("text-fade-in");
            }, 300);
            stad.classList.remove("stad-clicked");
            caret.classList.remove("caret-rotate");
            dropdownContent.classList.remove("dropdown-content-open");

            option.forEach(option => {
                option.classList.remove("aktiv");
            });
            option.classList.add("aktiv");
        });
    });

    window.addEventListener("click", e =>{
        const size = dropdown.getBoundingClientRect();
        if(
            e.clientX < size.left ||
            e.clientX > size.right ||
            e.clientY < size.top ||
            e.clientY > size.bottom
        ) {
            dropbtn.classList.remove("dropbtn-clicked");
            caret.classList.remove("caret-rotate");
        }
    });
});

