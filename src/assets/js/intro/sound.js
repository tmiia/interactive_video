const sound = {
  bgSound : document.querySelector('.js-bgSound'),

  init() {
    this.bgSound.play();
    this.bgSound.volume = 0.15;
  },


};

export default sound;
