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
            id: '1st-chapter',
            alignment: 'center',
            hidden: false,
            title: '서울은 진짜 너무 덥다.',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/seoulheat.jpg?raw=true',
            description: '서울은 너무너무더워요. 이게 바나나가 자라는 나라지 어디 사람이 사는 동네냐?',
            location: {
                center: [126.98376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},         
                {layer: 'accomorate', opacity: 0},        
                {layer: 'topfiveline', opacity: 0},               
            ],     
        },
        {
            id: '2nd-chapter',
            alignment: 'center',
            hidden: false,
            title: '쿨링센터란 무엇일까요?',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/coolingCenter.jpg?raw=true',
            description: '더워 죽겠는 사람들이 피하는 곳이죠!',
            location: {
                center: [126.98376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],      
        },
        {
            id: '3rd-chapter',
            alignment: 'left',
            hidden: false,
            title: '그래서 서울엔 쿨링센터가 참 많아요',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/FacilityCategories.jpg?raw=true',
            description: '되게 많쥬?',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 1},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],     
        },
        {
            id: '4th-chapter',
            alignment: 'left',
            hidden: false,
            title: '수용률은 이래요',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/coolingCenter2.jpg?raw=true',
            description: '좀 열악한 곳이 보이쥬?',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "visible";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 1},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 1},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],     
        },
        {
            id: '5th-chapter',
            alignment: 'left',
            hidden: false,
            title: '에어컨은 이래요',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/seoulheat.jpg?raw=true',
            description: '에어컨 한대를 여러명이서 나눠 쓴다고 상상해보세요?',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "visible";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 1},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 1},  
                {layer: 'topfiveline', opacity: 0},
            ],     
        },
        {
            id: '6th-chapter',
            alignment: 'left',
            hidden: false,
            title: '숙박가능한 곳은 이렇답니다.',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/SleepingCoolingCenter.jpeg?raw=true',
            description: '에어컨 한대를 여러명이서 나눠 쓴다고 상상해보세요?',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "visible";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 1},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],        
        },
        {
            id: 'where?',
            alignment: 'center',
            hidden: false,
            title: 'We need more Cooling Center',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/IdontknowCoolingCenter.jpg?raw=true',
            description: '“무더위쉼터? 몰라. 점심 먹고 나면 더우니까 여기 앉아있는 거야.” ',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0.5},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],      
        },
        { 
            id: 'focus',
            alignment: 'left',
            hidden: false,
            title: '이곳을 선정해보았습니다!',
            image: 'https://raw.githubusercontent.com/synnpower/countermapping2/main/LAB12/Images/nyc3.jpg',
            description: '다섯군데를 살펴볼거에요~',
            location: {
                center: [126.822376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0.5},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 1},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],        
        },
        {
            id: '7thchapter',
            alignment: 'left',
            hidden: false,
            title: '불광2동',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '불광동은 너무 더워용',
            location: {
                center: [126.91920, 37.62382],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],        
        },
        {
            id: '8thchapter',
            alignment: 'left',
            hidden: false,
            title: '불광2동 새로운 쿨링센터는 여기에요!',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '불광동은 너무 더워용',
            location: {
                center: [126.91920, 37.62382],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],              
        },
        {
            id: '10thchapter',
            alignment: 'left',
            hidden: false,
            title: '역촌동은 여기 지정하면 되겠어요!',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '어르신들 시원하세용',
            location: {
                center: [126.90323, 37.60522],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],  
        },
        {
            id: '11thchapter',
            alignment: 'left',
            hidden: false,
            title: '신사동!',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '여기도 한번 살펴봅시다.',
            location: {
                center: [127.00985, 37.52562],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],  
        },
        {
            id: '12thchapter',
            alignment: 'left',
            hidden: false,
            title: '일원2동!',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '여기도 한번 살펴봅시다.',
            location: {
                center: [127.07211, 37.49659],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],  
        },
        {
            id: '13thchapter',
            alignment: 'left',
            hidden: false,
            title: '수서동!',
            image: 'https://github.com/synnpower/countermapping2/blob/main/LAB12/Images/nyc4.jpg?raw=true',
            description: '여기도 한번 살펴봅시다.',
            location: {
                center: [127.09191, 37.48582],
                zoom: 14.52,
                pitch: 0,
                bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 1},
                {layer: 'walking', opacity: 0.5},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 1},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0.5},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],  
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            description: '어르신들 시원했으면 좋겠어',
            image: '',
            location: {
                center: [126.98376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],  
        },
        {
            id: 'conclusion2',
            alignment: 'center',
            hidden: true,
            image: '',
            location: {
                center: [126.98376, 37.55835],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("capacity_legend").style.visibility = "hidden";
                document.getElementById("ac_legend").style.visibility = "hidden";
                document.getElementById("accomo_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'capacity', opacity: 0},
                {layer: 'status', opacity: 0},
                {layer: 'walking', opacity: 0},
                {layer: 'dongline', opacity: 0},
                {layer: 'seoul', opacity: 1},
                {layer: 'newcenter', opacity: 0},
                {layer: 'topfive', opacity: 0},
                {layer: 'newwalking', opacity: 0},
                {layer: 'acrate', opacity: 0},
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
            ],              
        },

        
    ]
};
