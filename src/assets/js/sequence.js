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
