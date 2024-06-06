import SwipeCarousel from './swipe.js'
const carousel = new SwipeCarousel({
  containerId: '#carousel123',
  slideId: '.item',
  interval: 3000,
})

carousel.init()
carousel.pauseHandler()