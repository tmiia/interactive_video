import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Motion extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.motion = this.context.querySelector('.motion');
  }

  play(){
    super.play()
    this.context.querySelector('video').play()
    this.animate()
    console.log("MOTIOOOOON", this.motion);
  }

  animate() {
    console.log("MOTIOOOOON ANIMATE", this.motion);
    const tl = gsap.timeline();
    console.log(this.motion);

    tl.to(this.motion, {zIndex: 1000, duration: 0.3, delay: 0.5});
    tl.to(this.motion, {zIndex: 5, duration: 0.5, delay: 8.5});
  }

  stop(){
    super.stop()
  }
}
