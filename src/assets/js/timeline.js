import Poster from './sequences/ctx_poster.js';
import Title from './sequences/ctx_title.js';
import Ball from './sequences/ball.js';
import Motion from './sequences/motion.js';

const timeline = {
  sequences : [],
  currentIndex : 0,

  init(){
    this.createSequence()
    console.log(this.sequences);

    this.play();
  },

  play() {
    this.sequences[this.currentIndex].play();
    this.manageSequenceCtx();
  },

  createSequence(){
    this.sequences.push(new Title(document.getElementById('js-seq-title'), 0, document.getElementById('lottie')));
    this.sequences.push(new Poster(document.getElementById('js-seq-ctx'), 1));
    this.sequences.push(new Ball(document.getElementById('js-seq-ball'), 2));
    this.sequences.push(new Motion(document.getElementById('js-seq-ballOpening'), 3));
    this.sequences.push(new Motion(document.getElementById('js-seq-pageturn-1'), 4));

    for (let i = 0; i < this.sequences.length; i++) {
      this.sequences[i].addEventListener("isComplete", (e) =>{
        console.log(e.detail);

        e.detail.stop();
        this.transition();
        this.manageSequenceCtx();
      })
    }
  },

  manageSequenceCtx(){
    this.sequences.forEach(seq => {
      if (seq.isActive === false) {
        if (seq.context.classList.contains("keep")) {
          return;
        }
        seq.context.classList.remove("active");
      }
      else {
        seq.context.classList.add("active");
      }
    });
  },

  transition(){
    if (this.currentIndex + 1 <= this.sequences.length) {
      this.currentIndex += 1;
      console.log("transition vers : ", this.currentIndex);

      this.sequences[this.currentIndex].play();
    }
  }
};

export default timeline;
