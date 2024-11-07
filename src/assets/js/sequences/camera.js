import Sequence from "../sequence.js";

export default class Camera extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.scene = this.context.querySelector('.js-scene');
  }

  play(){
    super.play()

    this.scene.classList.add("move");
    this.onComplete();
  }

  stop(){
    super.stop()
  }
}
