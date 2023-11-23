var config = {
    style:  'mapbox://styles/synnpower/clox1otla00i501qd628e5bvk',
    accessToken: 'pk.eyJ1Ijoic3lubnBvd2VyIiwiYSI6ImNsbHBtOWE1MjA2bDYzaW5yY2tzeWZ6cW0ifQ.kteK0IjXELUFn9HM9qnmHQ',
    showMarkers: false, //맵에 이상한 표시 마커 그거...
    markerColor: '#3FB1CE', //마커없어
    inset: false, //보조맵
    use3dTerrain: false, //set true for enabling 3D maps.
    theme: 'light',
    kortitle: '서울은 너무 더워요',
    title: 'Seoul is Too Hot',
    subtitle: "South Korea's heat-vulnerable elderly population \n and Cooling Centers.",
    author: "December 2023 \n SungHo",
    byline: 'Introduction',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac justo tincidunt, ac malesuada ipsum laoreet. Aenean lobortis tellus posuere urna feugiat, eget ultrices dolor semper. Donec pellentesque fringilla condimentum. In hac habitasse platea dictumst. Nullam venenatis sodales convallis. Praesent venenatis augue vel nunc posuere, at rhoncus enim sagittis. Mauris quis hendrerit purus. Donec tempor libero eu sagittis posuere.',
    para2: 'Nullam vitae nibh euismod, lobortis urna a, sodales diam. Duis id dictum diam, eu gravida lacus. Curabitur quis tempus lectus. Nunc sed fringilla metus. Sed euismod lacus eget pretium dictum. Donec dignissim sem felis, elementum porta justo porta id. Donec felis nisl, gravida eu dui eget, cursus aliquet turpis. Aliquam risus purus, rhoncus nec ullamcorper ac, eleifend vel sem. Pellentesque blandit sem justo. Morbi volutpat erat ac dolor efficitur, sit amet varius diam dictum. Proin vitae nulla accumsan, iaculis mauris a, mollis leo. Quisque porttitor in metus quis aliquet.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'https://raw.githubusercontent.com/synnpower/countermapping2/main/LAB12/Images/nyc2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [126.98376, 37.58835],
                zoom: 10.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:"",
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],     
        },
        { 
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: 'https://raw.githubusercontent.com/synnpower/countermapping2/main/LAB12/Images/nyc3.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [126.82846, 37.55935],
                zoom: 10.70,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'https://raw.githubusercontent.com/synnpower/countermapping2/main/LAB12/Images/video.mp4',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 14.84,
              pitch: 48,
              bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
