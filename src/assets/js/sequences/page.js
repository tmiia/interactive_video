import Sequence from "../sequence.js";

export default class Motion extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.motion = this.context.querySelector('.motion');
    this.scene = document.querySelector('.js-scene');
    this.clickHandler = this.handleClick.bind(this);
  }

  play(){
    super.play()
    this.context.querySelector('video').play()
    this.scene.style.backgroundImage = "url('/images/background.png')";
    this.addClickListener();
  }

  handleClick() {
    this.onComplete();
  }

  addClickListener() {
    window.addEventListener('click', this.clickHandler);
  }

  removeClickListener() {
    window.removeEventListener('click', this.clickHandler);
  }

  stop(){
    super.stop()
    this.removeClickListener();
  }
}
