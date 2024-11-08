import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Poster extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.posters = [
      {
        title : "beetlejuice",
        path : "/images/posters/posterbeetlejuice.png",
        posFrom : {x: 30, y: 30},
        posTo : {x: 33, y: 8.5},
        rotate : 7,
        date : "top",
        sound: 3
      },
      {
        title : "furiosa",
        path : "/images/posters/posterfuriosa.png",
        posFrom : {x: -30, y: 40},
        posTo : {x: 3, y: 11},
        rotate : -6,
        date : "top",
        sound: 3
      },
      {
        title : "godzilla",
        path : "/images/posters/postergodzilla.png",
        posFrom : {x: 30, y: 30},
        posTo : {x: 35, y: 15},
        rotate : -7,
        date : "right",
        sound: 3
      },
      {
        title : "joker",
        path : "/images/posters/posterjoker.png",
        posFrom : {x: -30, y: 0},
        posTo : {x: 16, y: 8},
        rotate : 5,
        date : "top-left",
        sound: 3
      },
      {
        title : "sosfantome",
        path : "/images/posters/postersosfantome.png",
        posFrom : {x: -5, y: 110},
        posTo : {x: 11, y: 19},
        rotate : 9,
        date : "top-right",
        sound: 3
      },
    ]
    this.index = 0;
    this.clickHandler = this.handleClick.bind(this);
  }

  play(){
    super.play()
    this.createPoster();
    for (let i = 0; i < 2; i++) {
      this.clickHandler();
    }
    this.displayPoster();
  }

  stop(){
    super.stop()
    this.removeClickListener();
  }

  createPoster() {
    const container = document.querySelector(".poster__container");

    this.posters.forEach((item) => {
      const img = document.createElement("div");
      img.classList.add("poster");
      img.style.backgroundImage = `url('${item.path}')`;

      img.dataset.title = item.title;
      img.dataset.posFromX = item.posFrom.x;
      img.dataset.posFromY = item.posFrom.y;
      img.dataset.posToX = item.posTo.x;
      img.dataset.posToY = item.posTo.y;
      img.dataset.rotate = item.rotate;

      img.style.left = `${item.posFrom.x}%`;
      img.style.top = `${item.posFrom.y}%`;

      const date = document.createElement("video");
      date.classList.add("poster__date");
      date.classList.add(`${item.date}`);
      this.addSourceToVideo(date, `/videos/dates/date-${item.title}.webm`, 'video/mp4');

      const sound = document.createElement("audio");
      sound.src      = `/sounds/rubbing/sound-${item.sound}.wav`;
      sound.type     = 'audio/wav';
      sound.loop     = true;
      // sound.volume     = 0.5;

      img.appendChild(date);
      img.appendChild(sound);
      container.appendChild(img);
    });
  }

  toggleShake(poster) {
    poster.classList.toggle('shake');
  }

  animate(poster) {
      const audio = poster.querySelector('audio');

      const posToX = parseFloat(poster.dataset.posToX);
      const posToY = parseFloat(poster.dataset.posToY);
      const rotate = parseFloat(poster.dataset.rotate);

      gsap.to( poster, {
        duration: 1,
        top: `${posToY}%`,
        left: `${posToX}%`,
        rotation: rotate,
        ease: "steps(5)",
        onStart: () => {
          this.toggleShake(poster);
          audio.play()
        },
        onComplete: () => {
          this.toggleShake(poster);
          audio.pause()
          this.displayDate(poster);
        }
      });
  }

  handleClick() {
    let postersItem = document.querySelectorAll('.poster');
    if (this.index <= postersItem.length - 1) {
      this.animate(postersItem[this.index]);
      this.index++;

      if (this.index === postersItem.length) {
        let help =  this.context.querySelector('.ui-help');
        if (help) {
          help.classList.remove('visible');
        }

        setTimeout(function() {
          this.onComplete();
        }.bind(this), 500);
      }
    } else {
      this.onComplete();
    }
  }

  displayPoster() {
    window.addEventListener('click', this.clickHandler);
  }

  removeClickListener() {
    window.removeEventListener('click', this.clickHandler);
  }

  displayDate(poster){
    const video = poster.querySelector('video');
    video.classList.add('visible');
    video.play();
  }

  addSourceToVideo(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;
    element.loop = true;

    element.appendChild(source);
  }
}
