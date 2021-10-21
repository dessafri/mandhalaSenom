new Typewriter('#typewriter', {
  strings: ['Kampung Pendidikan Mandhala Senom'],
  autoStart: true,
  loop: true,
  pauseFor: 1500,
})

$('.image-animate').slick({
  autoplay: true,
  arrows: false,
  easing: 'swing',
  autoplaySpeed: 2000,
  infinite: true,
})
let map = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGVzc2FmcmkiLCJhIjoiY2t1emVlNjh6MDN2NTJ2cGF6d2pveHdrcCJ9.Mw1HrmGLNs7rn0OHjIgNhA'
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
  })
  const marker = new mapboxgl.Marker({
    color: '#fc0303',
  })
    .setLngLat([113.4875230501, -7.167193637305])
    .addTo(map)
  map.setCenter([113.4875230501, -7.167193637305])
  map.zoomTo(1)
  //   // Zoom to the zoom level 8 with an animated transition
  map.zoomTo(17, {
    duration: 9000,
  })
}
map()
