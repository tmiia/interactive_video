import lottie from 'lottie-web';

const title = {


  init() {
    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/lottie/title.json' // the path to the animation json
    });

  },
};

export default title;
