function myCallbackFunction() {

}
map.on('load',function(){
    map.addSource('analysis',{
        'type':'vector',
        'url': 'mapbox://synnpower.88f0sghi' //my url
    });

    map.addLayer({
        'id':'capacity',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'analysis_CapacityRate']],
                            'gray',
                            0.2, '#440154', // [45 - 80)
                            0.4, '#3b528b', // [80 - 85)
                            0.6, '#21908d',  // [85 - 90)
                            0.8, '#5dc963',  // [90 - 95)
                            1, '#fde725'   // [95 - 100]
                        ],
            'fill-opacity': 0.3,
        }
    });
});