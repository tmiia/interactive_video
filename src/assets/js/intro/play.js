import title from "./title";
import poster from "./poster";

const play = {
  btn : undefined,

  init() {
    this.btn = document.querySelector('.js-play');
    this.btn.addEventListener('click', ()=>{
      this.btn.classList.add('active')
      title.init()
      poster.init()
    })
  },
};

export default play;
