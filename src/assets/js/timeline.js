import Sequence from './sequence.js';
import Poster from './sequences/ctx_poster.js';

const timeline = {
  sequences : [],

  init(){
    this.createSequence()
    console.log(this.sequences);

    this.play();
  },

  play() {
    this.sequences[0].play();
    this.manageSequenceCtx();
  },

  createSequence(){
    this.sequences.push(new Poster(document.getElementById('js-seq-ctx'), 0));
  },

  manageSequenceCtx(){
    this.sequences.forEach(seq => {
      if (seq.isActive === false) {
        seq.context.classList.remove("active");
      }
      else {
        seq.context.classList.add("active");
      }
    });
  }
};

export default timeline;
