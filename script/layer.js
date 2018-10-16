const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

let geometry = new ol.geom.Point(ol.proj.fromLonLat([12.3739, 47.8136]))
let feature = new ol.Feature({
    geometry: geometry
})
vectorSource.addFeature(feature);