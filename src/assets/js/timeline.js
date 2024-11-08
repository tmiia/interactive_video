import Poster from './sequences/ctx_poster.js';
import Title from './sequences/ctx_title.js';
import Motion from './sequences/motion.js';
import Camera from './sequences/camera.js';
import Godzilla from './sequences/godzilla.js';
import Godzillamotion from './sequences/godzilla_motion.js';
import Page from './sequences/page.js';
import Intro from './sequences/intro.js';

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
    this.sequences.push(new Intro(document.getElementById('js-seq-intro'), 0));
    this.sequences.push(new Title(document.getElementById('js-seq-title'), 0, document.getElementById('lottie')));
    this.sequences.push(new Poster(document.getElementById('js-seq-ctx'), 1));
    this.sequences.push(new Camera(document.getElementById('js-seq-camera'), 2));
    this.sequences.push(new Motion(document.getElementById('js-seq-ballOpening'), 4));
    this.sequences.push(new Godzilla(document.getElementById('js-seq-godzilla'), 5));
    this.sequences.push(new Godzillamotion(document.getElementById('js-seq-godzilla-motion'), 6));
    this.sequences.push(new Page(document.getElementById('js-seq-pageturn-1'), 7));
    this.sequences.push(new Page(document.getElementById('js-seq-pageturn-2'), 8));
    this.sequences.push(new Page(document.getElementById('js-seq-pageturn-3'), 9));
    this.sequences.push(new Page(document.getElementById('js-seq-pageturn-end'), 10));

    for (let i = 0; i < this.sequences.length; i++) {
      this.sequences[i].addEventListener("isComplete", (e) =>{
        console.log(e.detail);

        if (!e.detail.context.classList.contains("no-stop")) {
          e.detail.stop();
        }
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
