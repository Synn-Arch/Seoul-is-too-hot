var config = {
    style: 'mapbox://styles/synnpower/clo5v5w0j00ho01pd5nut16j0',
    accessToken: 'pk.eyJ1Ijoic3lubnBvd2VyIiwiYSI6ImNsbHBtOWE1MjA2bDYzaW5yY2tzeWZ6cW0ifQ.kteK0IjXELUFn9HM9qnmHQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk in NYC',
    subtitle: 'Rising Tides, Rising Challenges\nA Study of Flood Vulnerability in NYC Public and Affordable Housing',
    byline: 'By a SungHo Synn',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'NYC Flooding Crisis',
            image: 'images/Sandy1.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-73.98966, 40.74309],
                zoom: 12.47,
                pitch: 60.05,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'hous-type',
                opacity: 0,
                duration: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flooding Vulnerablity of Red Hook Houses',
            image: 'images/Redhook1.jpg',
            description: 'In Red Hook, a staggering 890 properties face a daunting probability of experiencing severe flooding within the next three decades, surpassing a worrisome 26% likelihood. <a href="https://riskfactor.com/neighborhood/red-hook-newyork/7612_fsid/flood">Remarkably, this distressing statistic engulfs a staggering.</a>',
            location: {
                center: [-74.01058, 40.67548],
                zoom: 15.72,
                pitch: 57.00,
                bearing: 62.53
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hous-type',
                    opacity: 1,
                    duration: 5000
                    }
            ],
            onChapterExit: [
 
            ]
        },
    ]
};
