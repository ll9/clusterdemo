const vectorSource = new ol.source.Vector();
const clusterSource = new ol.source.Cluster({
    source: vectorSource
});
const vectorLayer = new ol.layer.Vector({
    source: clusterSource,
    style: stylefunction
});

for (let i = 0; i < 10000; i++) {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([12.3739 + Math.random() / 100, 47.8136 + Math.random() / 100]))
    })
    vectorSource.addFeature(feature);
}