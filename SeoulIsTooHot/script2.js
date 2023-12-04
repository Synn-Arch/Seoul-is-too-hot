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
    map.addSource('newcoolingcenter',{
        'type':'vector',
        'url': 'mapbox://synnpower.51f3uyf6' 
    });    
    map.addSource('seoulboundary',{
        'type':'vector',
        'url': 'synnpower.5zp8jmom' 
    });
    map.addSource('newisochrone',{
        'type':'vector',
        'url': 'mapbox://synnpower.9flzhd6j' 
    });
    map.addSource('top5',{
        'type':'vector',
        'url': 'mapbox://synnpower.1o8sszye' 
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
        'id':'acrate',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'analysis_AcRate']],
                            'white',
                            8, '#f7eded',
                            15, '#f0adad', 
                            23, '#c76565',
                            33, '#872727',
                            46, '#661414',  
                            64, '#f0adad',
                            100, '#420505', 
                            190, '#290000', 
                        ],
            'fill-opacity': 0.3,
        }
    });

    map.addLayer({
        'id':'accomorate',
        'type':'fill',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'fill-color': ['step',
                            ['to-number', ['get', 'analysis_SleepCapaRateFix']],
                            'white',
                            0,'#290000',
                            0.2, '#f0adad',
                            0.4, '#872727', 
                            0.8, '#c76565',
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
            'fill-color': [
                'match',
                ['get', 'AA_METERS'],
                239, '#ad0000',
                478, 'rgba(59, 82, 139, 0)',
                '#ccc'
            ],
            'fill-opacity': 1,
        }
    });

    map.addLayer({
        'id':'dongline',
        'type':'line',
        'source':'analysis',
        'source-layer':'analysis-coolingcenter',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                10, 1,
                16, 1
                ],
        }
    });

    map.addLayer({
        'id':'seoul',
        'type':'line',
        'source':'seoulboundary',
        'source-layer':'seoul_boundary-960xnn',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                5, 5,
                16, 10
                ],
        }
    });

    map.addLayer({
        'id':'newcenter',
        'type':'circle',
        'source':'newcoolingcenter',
        'source-layer':'newcoolingcenters-06uelf',
        'paint': {
            'circle-radius': 10,
            'circle-color': '#ab0000'
        }
    });    

    map.addLayer({
        'id':'topfive',
        'type':'fill',
        'source':'top5',
        'source-layer':'top5_dong-996sko',
        'paint':{
            'fill-color': '#ab0000',
            'fill-width': [
                'interpolate', ['linear'], ['zoom'],
                0, 3,
                16, 1
                ],
        }
    });

    map.addLayer({
        'id':'topfiveline',
        'type':'line',
        'source':'top5',
        'source-layer':'top5_dong-996sko',
        'paint':{
            'line-color': '#000000',
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                10, 1,
                16, 3
                ],
        }
    });    

    map.addLayer({
        'id':'newwalking',
        'type':'fill',
        'source':'newisochrone',
        'source-layer':'newisochrone-8ps6gl',
        'paint':{
            'fill-color': [
                'match',
                ['get', 'AA_METERS'],
                239, '#0067b0',
                '#ccc'
            ],
            'fill-opacity': 1,
        }
    });



});