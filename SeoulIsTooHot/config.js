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
            title: 'Seoul is hot. (Really)',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/seoulheat.jpg?raw=true',
            description: 'The extreme heatwaves in South Korea were officially reclassified as a natural disaster via an amendment to the Disaster and Safety Management Basic Act on September 18, 2018 (Bae, Kim, and Lee 2020).  Among the susceptible demographic segments in South Korea, the elderly population aged 65 and above emerges as particularly vulnerable to heatwaves (Song 2013). In the year 2022, heat-related illness reports in South Korea revealed that 37.4% (585 individuals) of cases were in the age group of 60 or above, with Seoul recording 7% (110 individuals) of heat-related illness instances (Park et al. 2023).',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},             
            ],     
        },
        {
            id: '2nd-chapter',
            alignment: 'center',
            hidden: false,
            title: 'What is the cooling center?',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/coolingCenter.jpg?raw=true',
            description: 'Since 2018, a notable strategy employed to mitigate the impact of extreme heatwaves, which are categorized as natural disasters, entails the establishment of Cooling Centers. These facilities are delineated as designated locales instituted to provide shelter and support to populations susceptible to the adverse effects of severe heatwaves, including the elderly, individuals with restricted mobility, or those with underlying health vulnerabilities.',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],      
        },
        {
            id: '3rd-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Current Cooling Center Status in Seoul',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/FacilityCategories.jpg?raw=true',
            description: 'As of the reference date of November 27, 2023, the municipality of Seoul, South Korea, hosted a cumulative count of 4,028 officially designated Cooling Centers. Of this aggregate, 3,162 establishments held the status of Senior Community Centers, while an additional 423 entities were categorized under the designation of Community Service Centers. ',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],     
        },
        {
            id: '4th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Insufficiency of Cooling Center capacity',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/coolingCenter2.jpg?raw=true',
            description: 'The data underscores the insufficiency of Cooling Center capacity in relation to the vulnerable elderly population in numerous geographical zones. In particular, it is noteworthy that a total of 69 administrative districts, constituting 16% of the overall administrative districts, exhibited a ratio of vulnerable elderly population to total capacity that fell at or below 50%. ',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],     
        },
        {
            id: '5th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Number of Individuals Sharing One Air Conditioner',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%202.jpg?raw=true',
            description: 'In 30 districts (equivalent to 7% of the sample), more than 46 elderly individuals were compelled to jointly utilize a solitary air conditioning unit. Although precise technical specifications regarding each air conditioner remain elusive, it is discernible that numerous districts grapple with limited accessibility to air conditioning facilities for individuals in need within the context of Cooling Centers.',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],     
        },
        {
            id: '6th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Occupancy Rate',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/SleepingCoolingCenter.jpeg?raw=true',
            description: 'A total of 164 administrative districts (comprising 38% of the sample) failed to secure any Cooling Centers with lodging capabilities, while 354 administrative districts (constituting 83% of the sample) exhibited accommodation capacities that fell below 50% concerning the elderly population.',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],        
        },
        {
            id: 'where?',
            alignment: 'center',
            hidden: false,
            title: 'We need more Cooling Center',
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/IdontknowCoolingCenter.jpg?raw=true',
            description: '“I dont know about a cooling center, I am just sitting here because it gets hot after lunch.”',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],      
        },
        { 
            id: 'elder',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/%EB%AC%B4%EC%A0%9C-2_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%202_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%202.png?raw=true',
            description: '',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'accomorate', opacity: 0},  
                {layer: 'topfiveline', opacity: 0},
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],
            onChapterExit: [
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
                {layer: 'topfiveline', opacity: 1},
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],        
        },
        { 
            id: 'focus',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8.jpg?raw=true',
            description: 'Utilizing the findings derived from the analysis presented in Chapter Three, we identified the five administrative districts characterized by the lowest Ratio of Facility Capacity to Low-Income Elderly Population. These districts exhibit occupancy rates spanning from 11% to 20%, with the overnight stay occupancy rate falling within the range of 0% to 18%. These findings underscore the inadequacy of Cooling Centers capacity and quantity in addressing the requirements of the vulnerable elderly population.',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'topfiveline', opacity: 1},
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],        
        },
        {
            id: '7thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%203.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],        
        },
        {
            id: '8thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%204.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],              
        },
        {
            id: '10thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%205.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],  
        },
        {
            id: '11thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%206.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],  
        },
        {
            id: '12thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%207.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
            ],  
        },
        {
            id: '13thchapter',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/1_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%208.jpg?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "visible";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0},
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
                {layer: 'seoul-fill1', opacity: 0.2},
                {layer: 'seoul-fill2', opacity: 0},
            ],  
        },
        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/s_%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8.png?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0.2},
                {layer: 'seoul-fill2', opacity: 0},                  
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0.2},                   
            ],  
        },
        {
            id: 'conclusion2',
            alignment: 'center',
            hidden: false,
            image: 'https://github.com/synnpower/countermapping2/blob/main/SeoulIsTooHot/images/%EB%AC%B4%EC%A0%9C-2_%EB%8C%80%EC%A7%80%201.png?raw=true',
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
                document.getElementById("walking_legend").style.visibility = "hidden";
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0.2},                
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
                {layer: 'seoul-fill1', opacity: 0},
                {layer: 'seoul-fill2', opacity: 0.2},
            ],              
        },

        
    ]
};
