var map;

function Initialization(_map){
    map = _map;
}

function DrawPolygon() {
let testData = JSON.parse(JSON.stringify(sgg));   
var data = testData.features;  
$.each(data, function(index, val) {
    coordinates = val.geometry.coordinates;

    if(val.geometry.type == "MultiPolygon") {
        displayArea(coordinates, name, true);
   
    }
    else {
        displayArea(coordinates, name, false);   
        // console.log(coordinates.length)     
    }
    })
}

function DrawPolygon_out_025() {
    let testData = JSON.parse(JSON.stringify(out_025));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;  
        // console.log(coordinates); 
        displayArea_out(coordinates);     
        })
    }

function DrawPolygon_out_025_05() {
    let testData = JSON.parse(JSON.stringify(out_025_05));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;  
        // console.log(coordinates); 
        displayArea_out_025_05(coordinates);     
        })
    }

function DrawPolygon_out_05_1() {
    let testData = JSON.parse(JSON.stringify(out_05_1));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;  
        // console.log(coordinates); 
        displayArea_out_05_1(coordinates);     
        })
    }

function DrawPolygon_out_1_2() {
    let testData = JSON.parse(JSON.stringify(out_1_2));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;  
        // console.log(coordinates); 
        displayArea_out_1_2(coordinates);     
        })
    }

function DrawPolygon_out_2() {
    let testData = JSON.parse(JSON.stringify(out_2));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;  
        // console.log(coordinates); 
        displayArea_out_2(coordinates);     
        })
    }


function makepolygon_out_025(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#349FCF', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#349FCF', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다 
    });
}

function makepolygon_out_025_05(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#A9CDAA', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#A9CDAA', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다 
    });
}

function makepolygon_out_05_1(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#F1FB77', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#F1FB77', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다 
    });
}

function makepolygon_out_1_2(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#F7A041', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#F7A041', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다 
    });
}

function makepolygon_out_2(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#F01402', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#F01402', // 채우기 색깔입니다
        fillOpacity: 0.7  // 채우기 불투명도 입니다 
    });
}


function makePolygon(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#6E6E6E', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    });
}

function makeMultiPolygon(coordinates){
    var path = [];
    $.each(coordinates, function(index, val2) {
        var coordinates2 = [];
        $.each(val2[0], function(index2, coordinate) {
            coordinates2.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
    })
        path.push(coordinates2);
        // console.log(path);
        
    });
    // console.log(path)
    // console.log(path.length)
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#6E6E6E', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    }); 
}


function displayArea(coordinates, name, multi){
    var polygon;
    if(multi) {
        polygon = makeMultiPolygon(coordinates);
       
    }
    
    else {
        polygon = makePolygon(coordinates);
    }

    polygon.setMap(map);
    
}

function displayArea_out(coordinates, name, multi){
    var polygon2;
    polygon2 = makepolygon_out_025(coordinates);
    polygon2.setMap(map);
}

function displayArea_out_025_05(coordinates, name, multi){
    var polygon2;
    polygon2 = makepolygon_out_025_05(coordinates);
    polygon2.setMap(map);
}

function displayArea_out_05_1(coordinates, name, multi){
    var polygon2;
    polygon2 = makepolygon_out_05_1(coordinates);
    polygon2.setMap(map);
}

function displayArea_out_1_2(coordinates, name, multi){
    var polygon2;
    polygon2 = makepolygon_out_1_2(coordinates);
    polygon2.setMap(map);
}

function displayArea_out_2(coordinates, name, multi){
    var polygon2;
    polygon2 = makepolygon_out_2(coordinates);
    polygon2.setMap(map);
}

