mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  center: listing.geometry.coordinates,
  zoom: 9,
});

const el = document.createElement("div");
el.className = "marker";

new mapboxgl.Marker(el)
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25, className: "my-class" }).setHTML(
      `<h5>${listing.location}</h5><p>Exact Location Provided After Booking</p>`
    )
  )
  .addTo(map);
