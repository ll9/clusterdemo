const vectorSource = new ol.source.Vector();
const polySource = new ol.source.Vector();
const clusterSource = new ol.source.Cluster({
    source: vectorSource
});
const vectorLayer = new ol.layer.Vector({
    source: clusterSource,
    style: stylefunction
});
const polyLayer = new ol.layer.Vector({
    source: polySource,
    style: stylefunction
});

document.addEventListener('DOMContentLoaded', function(){ 
    // your code goes here
    FillPointFeatures();
    updateExtend(vectorSource);
    updateExtend(polySource);
    
}, false);

let polygon = new ol.Feature({
    geometry: new ol.geom.Polygon([[
        ol.proj.fromLonLat([12.42 + 0.2 + Math.random() / 100, 47.8136 + Math.random() / 100]),
        ol.proj.fromLonLat([12.42 + 0.2 + Math.random() / 100, 47.8136 + Math.random() / 100]),
        ol.proj.fromLonLat([12.42 + 0.2 + Math.random() / 100, 47.8136 + Math.random() / 100])
    ]])
})
polySource.addFeature(polygon);

function FillPointFeatures() {
    for (let i = 0; i < 1000; i++) {
        let feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([12.3739 + Math.random() / 100, 47.8136 + Math.random() / 100]))
        });
        vectorSource.addFeature(feature);
    }
}

function updateExtend(source) {
    ol.extent.extend(extent, source.getExtent());
    map.getView().fit(extent)
}