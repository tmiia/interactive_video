import title from "./title";
import poster from "./poster";
import sound from "./sound";

const play = {
  btn : undefined,

  init() {
    this.btn = document.querySelector('.js-play');
    this.btn.addEventListener('click', ()=>{
      this.btn.classList.add('active')
      sound.init()
      poster.init()
      title.init()
    })
  },
};

export default play;
