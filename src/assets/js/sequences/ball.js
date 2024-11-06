import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Ball extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.ballElt = this.context.querySelector('.js-ball');
  }

  play(){
    super.play()
    this.animate()
  }

  toggleShake(element) {
    element.classList.toggle('shake');
  }

  animate() {
    gsap.to(this.ballElt, {
      duration: .5,
      top: "50%",
      left: "50%",
      ease: "steps(5)",
      onStart: () => this.toggleShake(this.ballElt),
      onComplete: () => {
        this.toggleShake(this.ballElt);
        this.onComplete();
      }
    });
  }
}
