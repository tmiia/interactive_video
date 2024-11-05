import { gsap } from "gsap";

const poster = {

  poster : [
    {
      title : "beetlejuice",
      path : "/images/posters/posterbeetlejuice.png",
      posFrom : {x: 80, y: 110},
      posTo : {x: 50, y: 37},
      rotate : 7
    },
    {
      title : "furiosa",
      path : "/images/posters/posterfuriosa.png",
      posFrom : {x: -20, y: 40},
      posTo : {x: 5, y: 55},
      rotate : -6
    },
    {
      title : "godzilla",
      path : "/images/posters/postergodzilla.png",
      posFrom : {x: 30, y: 110},
      posTo : {x: 48, y: 75},
      rotate : -7
    },
    {
      title : "joker",
      path : "/images/posters/posterjoker.png",
      posFrom : {x: -30, y: 0},
      posTo : {x: 21, y: 38},
      rotate : 5
    },
    {
      title : "sosfantome",
      path : "/images/posters/postersosfantome.png",
      posFrom : {x: -5, y: 110},
      posTo : {x: 15, y: 80},
      rotate : 9
    },
  ],

  init() {
    this.createPoster();
    this.animate();
  },

  createPoster() {
    const container = document.querySelector(".poster__container");

    this.poster.forEach((item) => {
      const img = document.createElement("img");
      img.classList.add("poster");
      img.src = item.path;
      img.alt = item.title;

      img.dataset.title = item.title;
      img.dataset.posFromX = item.posFrom.x;
      img.dataset.posFromY = item.posFrom.y;
      img.dataset.posToX = item.posTo.x;
      img.dataset.posToY = item.posTo.y;
      img.dataset.rotate = item.rotate;

      img.style.left = `${item.posFrom.x}%`;
      img.style.top = `${item.posFrom.y}%`;

      container.appendChild(img);
    });
  },

  toggleShake(poster) {
    poster.classList.toggle('shake');
  },

  animate() {
    const posters = document.querySelectorAll(".poster");

    posters.forEach((poster, index) => {
      const posFromX = parseFloat(poster.dataset.posFromX);
      const posFromY = parseFloat(poster.dataset.posFromY);

      const posToX = parseFloat(poster.dataset.posToX);
      const posToY = parseFloat(poster.dataset.posToY);

      const rotate = parseFloat(poster.dataset.rotate);

      gsap.to( poster, {
        duration: 1,
        top: `${posToY}%`,
        left: `${posToX}%`,
        rotation: rotate,
        delay: index * 0.3,
        ease: "steps(5)",
        onStart: () => this.toggleShake(poster),
        onComplete: () => this.toggleShake(poster)
      });
    });

  },

};

export default poster;
