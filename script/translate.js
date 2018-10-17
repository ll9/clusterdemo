const translateInteraction = new ol.interaction.Translate()

translateInteraction.on('translateend', (evt) => {
    console.log(evt);
})