const projectsData = {
  "flambyshow": {
    "titre": "FLAMBYSHOW",
    "description": "Le FLAMBYSHOW est une émission diffusée en direct sur la chaîne Youtube MMI Lannion. Lancée le 26 Octobre 2023, l'émission à su captiver les étudiants lannionnais réunissant près de 70 spectateurs uniques par live. Toutes les deux semaines, nous nous réunissions pendant près de 2h pour discuter de pop cluture et de sujets divers nous passionants plus les un que les autres. En quelques chiffres le flambyshow c'est : 6 émissions, près de 12 heures de live, 212 abonnées et +35 000 vues sur Youtube.",
    "image": "photo/flamby.png",
    "galerie": [],
    "lienProjet": "https://www.youtube.com/@FLAMBYSHOW",
    "categories": ["video"],
    "competences": ["Écriture", "Tournage", "Montage","Gestion de projet"],
  },
    "c127": {
    "titre": "Chambre 127",
    "description": "Court métrage inspiré de la série The Office relantant la vie d'étudiants dans une résidence universitaire. On y suit Tony, il fait découvrir à des étudiants sa résidence pendant un tournage pour un documentaire. Très vite, il dévoilera sa personnalité hors du commun ansi que tous les amis qui l'accompagnent au cours de sa vie ",
    "image": "photo/chambre127.png",
    "galerie": [],
    "lienProjet": "https://youtu.be/rWmZnQPOxIc",
    "categories": ["video", "ecriture"],
    "competences": ["Acting", "Réalisation", "Storyboarding", "Gestion de projet"],

  },
  "PEC": {
    "titre": "Breizh Air Show 2024",
    "description": "AU mois de septembre 2024, 4 amis et moi avons été missionnés par l'association Breizh Aéro Passion dans le cadre de l'organisation d'un meeting aérien sur le site de Morlaix. Notre mission, capturer des images ainsi que des vidéos de l'événement durant les 2 jours ouverts au public. ",
    "image": "photo/breizhshow.JPG",
    "galerie": ["photo/paf.jpg", "photo/fusiller.jpg"],
    "lienProjet": "https://youtu.be/RrypHwPVYOo",
    "categories": ["Photographie"],
    "competences": ["Attention", "Réactivité", "Créativité"],
  },
  "alwf": {
    "titre": "Festival Attrap'sons",
    "description": "Avec un ami nous avons été contacté par un festival de musique pour produire les interviews des artistes sur place. Mêlant toutes les disciplines de l'audiovisuel ce projet à été un des plus formateurs.",
    "image": "photo/magic.png",
    "galerie": [],
    "lienProjet": "",
    "categories": ["vidéo"],
    "competences": ["Ecriture", "Gestion de projet", "Cadrage","Animation", "Montage vidéo"],
  },
  "concours-eloquence": {
    "titre": "Eloquence",
    "description": "Présentation du premier concours d'éloquience de l'IUT de Lannion. Un micro et 10 étudidiants de BUT MMI et mesures physique, une bataille dont la seule arme est verve. A la clé, deux prix, celui du public et celui du jury que j'ai eu l'honneur de décerner aux côtés d'une étudiante de mesures physique en ce jour.",
    "image": "photo/ccd.png",
    "galerie": [],
    "lienProjet": "https://youtu.be/Kt7cYgep-w0",
    "categories": ["ecriture"],
    "competences": ["Improvisation", "Prise de parole"],
  },
  "blender": {
    "titre": "Morlive",
    "description": "Emission radio lancée en collaboration avec le campus morlaisien de Radio U. Le concept : Diffuser les concerts du Ty Coz Bistro Culturel. Ce projet est né d'une dynamique constante de recherche de rendre la culture accessible à tous. Lorsque le projet à commencé à se concrétisé, j'ai été chargé d'en réaliser la charte graphique en collaboration avec chacune des parties prenantes. Dans la continuité, je réalise la communication autour de chacun des ces évènements.",
    "image": "photo/morlive.jpg",
    "galerie": ["photo/Hayden-1.png", "photo/Hayden-2.png", "photo/Hayden-3.png", "photo/Hayden-4.png", "photo/Hayden-5.png",],
    "lienProjet": "https://www.instagram.com/reel/DFXog5_NVnc/",
    "categories": ["design"],
    "competences": ["Blender", "Modélisation"],
  },
  "mon-rigolo-et-moi": {
    "titre": "19 Ans du Ty Coz",
    "description": "Dans le cadre d'une alternance d'un an au sein du Ty Coz Bistro Culturel, véritable institution morlaisienne, j'ai contruit la stratégie de communication autour de l'anniversaire de ses 19 ans de reprise. De l'annonce de l'évènement à la communication en teps réel, la photographie et la vidéo mais aussi la signalétique sur l'évènement. A la suite de ceci j'ai naturellement réalisé un aftermovie de cette soirée mettant en images l'ambiance générale de cette journée. ",
    "image": "photo/tycoz19.png",
    "galerie": [],
    "lienProjet": "https://www.instagram.com/reel/DL-MGALNr_R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "categories": ["video", "acting"],
    "competences": ["Réalisation", "Acting"],
  },

};

function renderGallery() {
    const track = document.getElementById("projects-track");
    if (!track) return;
    track.innerHTML = "";
    Object.entries(projectsData).forEach(([key, p], index) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.innerHTML = `<div class="card-img-container"><img src="${p.image}" class="card-img" alt="${p.titre}"></div>
            <div class="card-meta"><span class="card-num">0${index + 1}</span><span>${p.titre}</span></div>`;
        card.addEventListener('click', () => openModal(key));
        track.appendChild(card);
    });
}

function openModal(key) {
    const p = projectsData[key];
    if(!p) return;
    document.getElementById("m-title").innerText = p.titre;
    document.getElementById("m-cat").innerText = p.cat;
    document.getElementById("m-desc-text").innerText = p.description;
    document.getElementById("m-img").src = p.image;
    document.getElementById("m-stack").innerHTML = p.competences.map(c => `<li>${c}</li>`).join("");
    document.getElementById("projectModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    const trigger = document.querySelector(".menu-trigger");
    const overlay = document.querySelector(".menu-overlay");
    if (trigger) {
        trigger.addEventListener("click", () => {
            overlay.classList.toggle("active");
            const bars = document.querySelectorAll(".bar");
            if (overlay.classList.contains("active")) {
                gsap.to(bars[0], {rotate: 45, y: 4});
                gsap.to(bars[1], {rotate: -45, y: -4});
            } else { gsap.to(bars, {rotate: 0, y: 0}); }
        });
    }
    document.querySelector(".close-modal").onclick = () => {
        document.getElementById("projectModal").classList.remove("active");
        document.body.style.overflow = "auto";
    };
    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.to(".loader-titles span", { opacity: 1, duration: 0.2, stagger: 0.2 });
        tl.to(".loader-curtain", { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.5 });
        const lenis = new Lenis();
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        
        gsap.from(".exp-item", {
            scrollTrigger: { trigger: ".timeline", start: "top 80%" },
            y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
        });

        ScrollTrigger.batch(".stat-block", {
            onEnter: b => b.forEach(el => {
                const num = el.querySelector(".big-num");
                gsap.to(num, { innerHTML: num.dataset.target, snap: {innerHTML:1}, duration: 2 });
            }), once: true
        });
    }
});

window.onmousemove = (e) => {
    const cursor = document.querySelector(".cursor");
    if (cursor && typeof gsap !== "undefined") {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    }
};