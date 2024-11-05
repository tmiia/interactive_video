import title from "./title";

const play = {
  btn : undefined,

  init() {
    this.btn = document.querySelector('.js-play');
    this.btn.addEventListener('click', ()=>{
      this.btn.classList.add('active')
      title.init()
    })
  },
};

export default play;
