const translateInteraction = new ol.interaction.Translate()

translateInteraction.on('translateend', (evt) => {
    console.log(evt);
    // console.log(evt.features.getProperties().features);
    // evt.feature.getProperties().features[0].setGeometry(evt.getGeometry());
})