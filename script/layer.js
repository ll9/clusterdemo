const vectorSource = new ol.source.Vector();
const clusterSource = new ol.source.Cluster({
    source: vectorSource
});
const vectorLayer = new ol.layer.Vector({
    source: clusterSource,
    style: stylefunction
});

for (let i = 0; i < 100; i++) {
    let feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([12.3739 + Math.random() / 100, 47.8136 + Math.random() / 100]))
    })
    vectorSource.addFeature(feature);
}

function stylefunction(feature) {
    if (feature.get('features') != null) {
        return new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                stroke: new ol.style.Stroke({
                    color: '#fff'
                }),
                fill: new ol.style.Fill({
                    color: '#3399CC'
                })
            }),
            text: new ol.style.Text({
                text: feature.get('features').length.toString(),
                fill: new ol.style.Fill({
                    color: '#fff'
                })
            })
        });
    }
}