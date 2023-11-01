const accessToken = 'pk.eyJ1Ijoic3lubnBvd2VyIiwiYSI6ImNsbHBtOWE1MjA2bDYzaW5yY2tzeWZ6cW0ifQ.kteK0IjXELUFn9HM9qnmHQ'
mapboxgl.accessToken = accessToken

const map = new mapboxgl.Map({
    container: 'sungho',
    style: 'mapbox://styles/synnpower/cln6jxhrz075v01qb85rz23w6',
    center: [-122.4194, 37.7749],
    zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    
    map.addSource('inspection',{
        'type':'vector',
        'url': 'mapbox://synnpower.cceqpe84'
      });   

    map.addLayer({
        'id':'inspection_id',
        'type':'circle',
        'source':'inspection',
        'source-layer':'Historical_Restaurant_Scores_-7hcmvd',
        'paint':{
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            0, 2,
            16, 4
            ],
          'circle-color': ['step',
                            ['to-number', ['get', 'inspection_score']],
                            'gray',
                            45, '#440154', // [45 - 80)
                            80, '#3b528b', // [80 - 85)
                            85, '#21908d',  // [85 - 90)
                            90, '#5dc963',  // [90 - 95)
                            95, '#fde725'   // [95 - 100]
                        ],
          'circle-opacity': 0.3,
        }
      });
    map.on('mouseenter', 'inspection_id', (e) => {
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
    })
})