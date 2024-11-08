import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Motion extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.motion = this.context.querySelector('.motion');
    this.scene = document.querySelector('.js-scene');
    this.video = this.context.querySelector('video');
  }

  play(){
    super.play()
    this.video.volume = 0.3;
    this.video.play()
    this.animate()
  }

  animate() {
    const keepElt = document.querySelectorAll('.keep');

    const tl = gsap.timeline({
      onComplete: () => {
        this.tossIt();
      }
    });

    tl.to(this.motion, {zIndex: 1000, duration: 0.3, delay: .3});
    tl.to(this.scene, {x: 0, y: 0, duration: 0.3}, "<");
    tl.add( function () {
      this.onComplete()
    }.bind(this), 2);
    tl.to(this.motion, {zIndex: 5, duration: 0.3, delay: 7.5});
    tl.to(this.motion, {opacity: 0, duration: 0});
  }

  tossIt() {
    const ball = document.querySelector(".js-ball");

    ball.addEventListener("mousedown", () => {
      const onMouseMove = (event) => {

        ball.style.left = `${event.clientX}px`;
        ball.style.top = `${event.clientY}px`;
      };

      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener("mouseup", () => {
        if (ball && (
            ball.getBoundingClientRect().top < 0 ||
            ball.getBoundingClientRect().left < 0 ||
            ball.getBoundingClientRect().bottom > window.innerHeight ||
            ball.getBoundingClientRect().right > window.innerWidth)) {

          this.onComplete();
        }
        document.removeEventListener("mousemove", onMouseMove);
      }, { once: true });
    });

  }

  stop(){
    super.stop()
  }
}
