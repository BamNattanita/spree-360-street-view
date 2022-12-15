/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let panorama: google.maps.StreetViewPanorama;

function initMap(): void {
  const astorPlace = { lat: 13.811288003462286, lng: 100.5643325410736 };

  // Set up the map
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: astorPlace,
      zoom: 18,
      streetViewControl: true,
      draggable: true,
    }
  );

  document
    .getElementById("toggle")!
    .addEventListener("click", toggleStreetView);

  // Set up the markers on the map

  const icon = {
    url: "dist/assets/pin.png", // url
    scaledSize: new google.maps.Size(150, 150), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 100) // anchor
  };

  const virtualIcon = {
    url: "dist/assets/360-view.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };





  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Promphan 1</h1>' +
  '<div id="bodyContent">' +
  "<b>House for Rent</b>" +
  " Tel : 02-024-6699  " +
  " Location: Ladprao Soi 1, near MRT Ladprao " +
  " || 5 bedrooms  " +
  " || 5 bathrooms " +
  " || Car Parking " +
  " || Pets Allow " +
  " || Price: $200000" +
  "</div>" +
  "</div>";

  const contentString2 =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Baan Promphan</h1>' +
  '<div id="bodyContent">' +
  "<b>House for Rent</b>" +
  " Tel : 02-024-6699  " +
  " Location: Ladprao Soi 1, near MRT Ladprao " +
  "|| 5 bedrooms  " +
  "|| 5 bathrooms " +
  "|| Car Parking " +
  "|| Pets Allow " +
  "|| Price: $200000" +
  "</div>" +
  "</div>";

  const contentString1 =

  '<p><a href="http://178.128.31.133:3000/">' +
  "Click To View Virtual Home</a> " +
  "</p>" 


const infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 200,
  ariaLabel: "Promphan 1",
});

const infowindowV = new google.maps.InfoWindow({
  content: contentString1,
  maxWidth: 200,
  ariaLabel: "Virtual Home",
});

const infowindow2 = new google.maps.InfoWindow({
  content: contentString2,
  maxWidth: 200,
  ariaLabel: "Baan Promphan",
});

const houseMarker1 = new google.maps.Marker({
  position: { lat: 13.811282392789812, lng: 100.56457421666823 },
  map,
  icon: icon,
  title: "House for Rent || Promphan 1 Tel : 02-024-6699 Location: Ladprao Soi 1, near MRT Ladprao / 5 bedrooms / 5 bathrooms"
});

const virtualMarker1 = new google.maps.Marker({
  position: { lat: 13.811282392789812, lng: 100.56457421666823 },
  map,
  icon: virtualIcon,
  title: "Virtual Tour Available"
});

  const houseMarker2 = new google.maps.Marker({
    position: { lat:   13.811075, lng: 100.564956 },
    map,
    icon: icon,
    title: "House for Rent || Baan Promphan Tel : 02-022-2222 Location: Ladprao Soi 2, near Bus Stop / 6 bedrooms / 6 bathrooms",
  });


  //open onclick
  google.maps.event.addListener(houseMarker1, 'click', function() {
    infowindow.open({
      anchor: houseMarker1,
      map,
    });                      
  });

    google.maps.event.addListener(houseMarker2, 'click', function() {
      infowindow2.open({
        anchor: houseMarker2,
        map,
      });                      
    });

      google.maps.event.addListener(virtualMarker1, 'click', function() {
        infowindowV.open({
          anchor: virtualMarker1,
          map,
        });                      
      });
    


  // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView()!; // TODO fix type
  panorama.setPosition(astorPlace);
  panorama.setPov(
    /** @type {google.maps.StreetViewPov} */ {
      heading: 265,
      pitch: 0,
    }
  );
}

function toggleStreetView(): void {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
