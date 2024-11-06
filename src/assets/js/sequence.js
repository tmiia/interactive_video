export default class Sequence {
  constructor(context, rank) {
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
}
