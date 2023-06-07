let map, infoWindow;

var myStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }
];
const listData = [
    { id: 1, name: "단성무이", lat: 36.6317833, lng: 127.4607147, address: "충북 청주시 서원구 1순환로694번길 4 1층 단성무이", image: "/Reservation1/단성무이카드.png", reservationUrl: "/Reservation1.html" },
    { id: 2, name: "홍콩반점", lat: 36.6334485, lng: 127.4598779, address: "충북 청주시 서원구 내수동로114번길 8", image: "/Reservation2/홍콩반점카드.png", reservationUrl: "/Reservation2.html" },
    { id: 3, name: "짚신스시", lat: 36.6332366, lng: 127.4597526, address: "충북 청주시 서원구 성봉로220번길 16", image: "/Reservation3/짚신스시카드.png", reservationUrl: "/Reservation3.html" },
    { id: 4, name: "인도네팔", lat: 36.6334993, lng: 127.4600917, address: "충북 청주시 서원구 내수동로114번길 7 2층", image: "/Reservation4/인도네팔카드.png", reservationUrl: "/Reservation4.html" },
    { id: 5, name: "현고들깨칼국수", lat: 36.6240332, lng: 127.4505341, address: "충북 청주시 서원구 성봉로220번길 16", image: "/Reservation5/들깨칼국카드.png", reservationUrl: "/Reservation5.html" },
    { id: 6, name: "이런이궈", lat: 36.6321302, lng: 127.4593247, address: "충북 청주시 서원구 1순환로680번길 23", image: "/Reservation6/이런이궈카드.png", reservationUrl: "/Reservation6.html" },
];

function initMap() {
    map = new google.maps.Map(document.getElementById("google-map"), {
        center: { lat: 36.62827, lng: 127.458843 },
        zoom: 15,
        disableDefaultUI: true,
        styles: myStyles // 구글맵 기본 마커 삭제옵션
    });
    for (let i = 0; i < listData.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(listData[i].lat, listData[i].lng),
            animation: google.maps.Animation.DROP,
            icon: "icons8-restaurant-48.png",
            map: map
        });
    }


    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");
    locationButton.textContent = "현재 위치로 이동";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("현재 위치입니다.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                    selectOnGoogleMap(0, lat, lng);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function setMarkerBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

function selectOnGoogleMap(id, name, lat, lng) {
    console.log(id);
    var destination = { lat: lat, lng: lng };
    map.panTo(destination);
    if (id == 0) {
        map.setZoom(8);
    } else {
        map.setZoom(17);
    }
    const pos = {
        lat: lat + 0.00035,
        lng: lng,
    };
    infoWindow.setPosition(pos);
    infoWindow.setContent(name);
    infoWindow.open(map);
}

window.initMap = initMap;