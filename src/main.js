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

