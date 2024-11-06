import Poster from './sequences/ctx_poster.js';
import Title from './sequences/ctx_title.js';

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
    this.sequences.push(new Title(document.getElementById('js-seq-title'), 0, document.getElementById('lottie')));
    this.sequences.push(new Poster(document.getElementById('js-seq-ctx'), 1));

    for (let i = 0; i < this.sequences.length; i++) {
      this.sequences[i].addEventListener("isComplete", (e) =>{
        e.detail.stop();
        this.manageSequenceCtx();
      })
    }
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
