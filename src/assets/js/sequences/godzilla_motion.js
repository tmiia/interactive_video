import { gsap } from "gsap";
import Sequence from "../sequence.js";

export default class Godzilla extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.scene = document.querySelector(".js-scene");
    this.motion = this.context.querySelector('.motion');
    this.video = this.motion.querySelector("video");
    this.help = document.querySelector('.ui-help[data-help="drag"]');
  }

  play(){
    super.play()
    this.playVideo();
    this.help.classList.remove('visible');

    this.scene.classList.remove("move")
    this.scene.classList.add("no-zoom")

    setTimeout(function() {
      this.onComplete()
    }.bind(this), (this.video.duration * 1000));

  }


  playVideo(){
    this.context.querySelector('video').play()
  }

  stop(){
    super.stop()
  }
}
