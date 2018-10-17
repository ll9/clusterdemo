var map = new ol.Map({
  controls: [mousePositionControl, new ol.control.Zoom()],
  interactions: ol.interaction.defaults().extend([translateInteraction]),
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer,
    polyLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([16.3739, 47.8136]),
    zoom: 14,
  })
});

var extent = ol.extent.createEmpty();
