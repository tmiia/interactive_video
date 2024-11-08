import Sequence from "../sequence.js";

export default class Title extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.motion = this.context.querySelector('.motion');
  }

  play(){
    super.play()
    this.context.querySelector('video').play()
  }

  stop(){
    super.stop()
  }
}
