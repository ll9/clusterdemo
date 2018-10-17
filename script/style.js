function stylefunction(feature) {
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
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'red'
        }),
        text: new ol.style.Text({
            text: getCount(feature),
            fill: new ol.style.Fill({
                color: '#fff'
            })
        })
    });
}

function getCount(feature) {
    if (feature.get('features')) return feature.get('features').length.toString()
    else return "1";
}