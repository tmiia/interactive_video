import lottie from 'lottie-web';
import Sequence from "../sequence.js";

export default class Title extends Sequence {
  constructor(context, rank, container) {
    super(context, rank);

    this.container = container;
    this.displayVideo = this.context.querySelector('.title__display');
    this.movingVideo = this.context.querySelector('.title__moving');
  }

  play(){
    super.play()

    this.displayVideo.play();
    this.movingVideo.play();

    setTimeout(function() {
      this.displayVideo.classList.remove("visible");
      this.movingVideo.classList.add("visible");
      this.onComplete();
    }.bind(this), (this.displayVideo.duration * 1000));
  }

  stop(){
    super.stop()
  }
}
