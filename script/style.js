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