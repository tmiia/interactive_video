import Sequence from "../sequence.js";

export default class Title extends Sequence {
  constructor(context, rank, container) {
    super(context, rank);
    this.btn = this.context.querySelector('.js-play');
    this.intro = this.context.querySelector('.bg');
    this.title = this.context.querySelector('video');
    this.audio = document.querySelector('.js-bg-sound');
  }

  play(){
    super.play()



    this.btn.addEventListener('click', ()=>{
      this.intro.classList.remove('visible');
      this.audio.volume = 0.05;
      this.audio.play();
      this.onComplete();
    })
  }

  stop(){
    super.stop()
  }
}
