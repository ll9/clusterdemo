var map = new ol.Map({
    controls: [mousePositionControl, new ol.control.Zoom()],
    interactions: [translateInteraction],
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([12.3739, 47.8136]),
      zoom: 14,
    })
  });