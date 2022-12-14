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
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  "sandstone rock formation in the southern part of the " +
  "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  "south west of the nearest large town, Alice Springs; 450&#160;km " +
  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  "Aboriginal people of the area. It has many springs, waterholes, " +
  "rock caves and ancient paintings. Uluru is listed as a World " +
  "Heritage Site.</p>" +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  "(last visited June 22, 2009).</p>" +
  "</div>" +
  "</div>";

const infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 200,
  ariaLabel: "Uluru",
});

const infowindow2 = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 200,
  ariaLabel: "Uluru",
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
        infowindow.open({
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
