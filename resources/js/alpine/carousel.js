export default (slides = []) =>({
  activeSlide: 0,
  swipeCall: '',
  slides: [],
  init() {
    this.slides = slides;
    new Hammer(this.$el).on('swipeleft swiperight', (ev) => {ev.type === 'swiperight' ? this.previous() : this.next()});
  },
  next() {
    if (this.activeSlide < this.slides.length - 1) {
      this.activeSlide++;

    }
  },
  previous() {
    if (this.activeSlide !== 0) {
      this.activeSlide--;
    }
  }
})

