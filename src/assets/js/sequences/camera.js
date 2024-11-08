import Sequence from "../sequence.js";

export default class Camera extends Sequence {
  constructor(context, rank) {
    super(context, rank);
    this.scene = this.context.querySelector('.js-scene');
    this.clickHandler = this.handleClick.bind(this);
    this.help = document.querySelector('.ui-help.ball');
  }

  play(){
    super.play()

    console.log(this.help);

    this.scene.classList.add("move");
    if(this.help){
      this.help.classList.add('visible');
    }

    this.addClickListener();
  }

  handleClick() {
    this.scene.classList.remove("move");
    this.scene.classList.add("no-zoom");
    this.onComplete();
  }

  addClickListener() {
    window.addEventListener('click', this.clickHandler);
  }

  removeClickListener() {
    window.removeEventListener('click', this.clickHandler);
    if(this.help){
      this.help.classList.remove('visible');
    }
  }


  stop(){
    super.stop()
    this.removeClickListener()
  }
}
