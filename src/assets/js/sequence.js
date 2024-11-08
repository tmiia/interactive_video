import lottie from 'lottie-web';
export default class Sequence extends EventTarget {
  constructor(context, rank) {
    super();
    this.context = context;
    this.isActive = false;
    this.rank = rank;
  }

  play(){
    this.isActive = true;
    console.log(this.rank, "play");

    let help = this.context.querySelector('.ui-help')

    if (help) {
      let animation = lottie.loadAnimation({
        container: help,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lottie/${help.dataset.help}.json`
      });
    }
  }

  stop(){
    this.isActive = false;
    console.log(this.rank, "stop");
  }

  onComplete() {
    this.isComplete = true;
    this.dispatchEvent(new CustomEvent('isComplete', { detail: this }));
  }
}
