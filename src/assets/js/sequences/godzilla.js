import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Godzilla extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.scene = document.querySelector(".js-scene");
    this.motion = this.context.querySelector('.motion');
    this.ballElt = document.querySelector('.js-ball');
  }

  play(){
    super.play()

    this.scene.style.backgroundImage = "url('/images/background-godzilla.jpg')";
    const keepElt = document.querySelectorAll('.keep');

    keepElt.forEach(elt => {
      if (elt.id != "js-seq-ball" && elt.id != "js-seq-ballOpening") {
        elt.classList.remove('keep');
      }
    });
  }

  stop(){
    super.stop()
  }
}
