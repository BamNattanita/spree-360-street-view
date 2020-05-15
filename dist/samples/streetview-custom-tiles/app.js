(function(exports) {
  "use strict";

  // StreetViewPanoramaData of a panorama just outside the Google Sydney office.

  // StreetViewPanoramaData for a custom panorama: the Google Sydney reception.

  function getReceptionPanoramaData() {
    return {
      location: {
        pano: "reception",
        // The ID for this custom panorama.
        description: "Google Sydney - Reception",
        latLng: new google.maps.LatLng(-33.86684, 151.19583)
      },
      links: [
        {
          heading: 195,
          description: "Exit",
          pano: exports.outsideGoogle.location.pano
        }
      ],
      copyright: "Imagery (c) 2010 Google",
      tiles: {
        tileSize: new google.maps.Size(1024, 512),
        worldSize: new google.maps.Size(2048, 1024),
        centerHeading: 105,
        getTileUrl: function getTileUrl(pano, zoom, tileX, tileY) {
          return (
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/" +
            "panoReception1024-" +
            zoom +
            "-" +
            tileX +
            "-" +
            tileY +
            ".jpg"
          );
        }
      }
    };
  }

  function initPanorama() {
    exports.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"),
      {
        pano: exports.outsideGoogle.location.pano
      }
    ); // Register a provider for the custom panorama.

    exports.panorama.registerPanoProvider(function(pano) {
      if (pano === "reception") {
        return getReceptionPanoramaData();
      }

      return null;
    }); // Add a link to our custom panorama from outside the Google Sydney office.

    exports.panorama.addListener("links_changed", function() {
      if (exports.panorama.getPano() === exports.outsideGoogle.location.pano) {
        exports.panorama.getLinks().push({
          description: "Google Sydney",
          heading: 25,
          pano: "reception"
        });
      }
    });
  }

  function initMap() {
    // Use the Street View service to find a pano ID on Pirrama Rd, outside the
    // Google office.
    var streetviewService = new google.maps.StreetViewService();
    streetviewService.getPanorama(
      {
        location: {
          lat: -33.867386,
          lng: 151.195767
        }
      },
      function(result, status) {
        if (status === "OK") {
          exports.outsideGoogle = result;
          initPanorama();
        }
      }
    );
  }

  exports.getReceptionPanoramaData = getReceptionPanoramaData;
  exports.initMap = initMap;
  exports.initPanorama = initPanorama;
})((this.window = this.window || {}));
