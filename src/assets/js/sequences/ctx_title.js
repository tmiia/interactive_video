import lottie from 'lottie-web';
import Sequence from "../sequence.js";

export default class Title extends Sequence {
  constructor(context, rank, container) {
    super(context, rank);

    this.container = container
  }

  play(){
    super.play()

    const animation = lottie.loadAnimation({
      container: this.container,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/lottie/title.json'
    });

    animation.addEventListener('complete', () => {
      this.onComplete();
    });
  }

  stop(){
    super.stop()
  }
}
