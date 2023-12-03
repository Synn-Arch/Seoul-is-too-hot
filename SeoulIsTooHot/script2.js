var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

function myCallbackFunction() {

}
map.on('load',function(){
    map.addSource('analysis',{
        'type':'vector',
        'url': 'mapbox://synnpower.88f0sghi' 
    });
    map.addSource('centerstatus',{
        'type':'vector',
        'url': 'mapbox://synnpower.79i2qddg' 
    });
    map.addSource('isochroneanalysis',{
        'type':'vector',
        'url': 'mapbox://synnpower.cggkx47r' 
    });


    
    map.addLayer({
        'id':'capacity',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'analysis_CapacityRate']],
                            'white',
                            0.14, '#290000',
                            0.31, '#420505', 
                            0.42, '#661414',
                            0.54, '#872727',
                            0.78, '#c76565',  
                            0.91, '#f0adad',
                            1, '#f7eded', 
                        ],
            'fill-opacity': 0.3,
        }
    });

    map.addLayer({
        'id':'status',
        'type':'circle',
        'source':'centerstatus',
        'source-layer':'cooling-centers',
        'paint': {
            'circle-radius': 4,
            'circle-color': [
                'match',
                ['get', 'Fac_Type'],
                1, '#440154',
                2, '#3b528b',
                3, '#21908d',
                4, '#5dc963',
                5, '#5dc963',
                '#ccc'
            ]
        }
    });

    map.addLayer({
        'id':'walking',
        'type':'fill',
        'source':'isochroneanalysis',
        'source-layer':'isochrones',
        'paint':{
            'fill-color': '#290000',
            'fill-opacity': 0.3,
        }
    });
});