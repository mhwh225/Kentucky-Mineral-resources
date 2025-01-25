(function () {
  "use strict";

  adjustHeight();
  window.addEventListener("resize", adjustHeight);

  function adjustHeight() {
    const mapSize = document.querySelector("#map"),
      contentSize = document.querySelector("#content"),
      removeHeight = document.querySelector("#footer").offsetHeight,
      resize = window.innerHeight - removeHeight;

    mapSize.style.height = `${resize}px`;

    if (window.innerWidth >= 768) {
      contentSize.style.height = `${resize}px`;
      mapSize.style.height = `${resize}px`;
    } else {
      contentSize.style.height = `${resize * 0.25}px`;
      mapSize.style.height = `${resize * 0.75}px`;
    }
  }

  const button = document.querySelector("#legend button");
  button.addEventListener("click", function () {
    const legend = document.querySelector(".leaflet-legend");
    legend.classList.toggle("show-legend");
  });

  var map = L.map("map", {
    zoomSnap: 0.1,
    center: [38, -85],
    zoom: 8.5,
    zoomControl: false,
    minZoom: 6,
    maxZoom: 14,
  });

  // mapbox API parameters
  const accessToken = `pk.eyJ1Ijoib3V0cmFnZWdpcyIsImEiOiJjamY4ZWY1NXQyZWduMnFxN2M5cnB1YTJ6In0.BehfRddq9HyWFiy0mmGEbA`;
  const yourName = "outragegis";
  const yourMap = "ck7436ly919ae1llmvmtabv1n";

  // request a mapbox raster tile layer and add to map
  L.tileLayer(
    `https://api.mapbox.com/styles/v1/${yourName}/${yourMap}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`,
    {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, and <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
    }
  ).addTo(map);

  // fetch data
  fetch("data/KY_mrds.geojson")
    // after it is returned...
    .then(function (response) {
      // Parse the JSON into a useable format, then return it
      return response.json();
    })
    // The returned response is now data in a new then method
    .then(function (data) {
      // This is the JSON from our response
      // console.log parameters first.
      console.log(data);
      // call draw map and send data as parameter
      drawMap(data);
      return fetch("data/us_states_20m.geojson");
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      drawAnotherLayer(data);
    })
    // If there is an error, log it to the console
    .catch(function (error) {
      console.log(error);
    });

  function drawAnotherLayer(data) {
    L.geoJson(data, {
      style: function (feature) {
        return {
          color: "#20282e",
          // Make line weight larger than the county outline
          weight: 3,
          fillOpacity: 0,
          // This property allows us control interactivity of layer
          interactive: false,
        };
      },
      // Filter for the correct state to use
    }).addTo(map);
  }

  const minerals = {
    Coal: "black",
    Zinc: "silver",
    Iron: "red",
    Clay: "brown",
    Aluminum: "pink",
    "Sand and Gravel, Construction": "tan",
    Stone: "grey",
    "Fluorine-Fluorite": "lightgreen",
    "Barium-Barite": "lightblue",
    Uranium: "darkgreen",
    Silica: "purple",
    Lead: "orange",
    Tungsten: "yellow",
    Manganese: "Teal",
    Graphite: "Olive",
    Titanium: "blue",
  };

  function drawMap(data) {
    var myStyle = {
      radius: 8,
      fillOpacity: 0.7,
      stroke: false,
      weight: 1,
      opacity: 1,
    };

    var categories = {},
      placedLayers = {},
      category;

    for (category in minerals) {
      console.log(category);
      placedLayers[category] = L.geoJson(data, {
        filter: function (feature) {
          return feature.properties.Commodity_commod === category;
        },
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, myStyle);
        },
        style: function (feature) {
          return {
            color: minerals[category],
            
          };
        },
        onEachFeature: function (feature, layer) {
          const props = layer.feature.properties;

          // assemble string sequence of info for tooltip (end line break with + operator)
          let popup = `<b>${props["SITE_NAME"]}</b></br>
                Production status: ${props["DEV_STAT"]}</br>
                Main commodity: ${props["Commodity_commod"]}`;
          layer.bindPopup(popup);
        },
      }).addTo(map);
    }

    const legend = {};

    for (var key in placedLayers) {
      const title = `<b><span style=';padding:1px;color:${minerals[key]};'>${key}</span></b>`;
      legend[title] = placedLayers[key];
    }

    L.control.layers(null, legend).addTo(map);

    // create Leaflet data layer and add to map
    // var allPoints = L.geoJson(data, {
    //   pointToLayer: function(feature, latlng){
    //       return L.circleMarker(latlng, myStyle);
    //   },
    //   style: function(feature){
    //       switch(feature.properties.Commodity_commod){
    //           case 'Coal' : return { color: "black" };
    //           case 'Zinc' : return { color: "white" };
    //           case 'Iron' : return { color: "red" };
    //           case 'Clay' : return { color: "brown" };
    //           case 'Aluminum' : return { color: "pink" };
    //           case 'Ball Clay' : return { color: "brown" };
    //           case 'Aluminum, Contained or Metal' : return { color: "pink" };
    //           case 'Sand and Gravel, Construction' : return { color: "tan" };
    //           case 'Stone, Crushed/Broken' : return { color: "grey" };
    //           case 'Stone' : return { color: "grey" };
    //           case 'Limestone, General' : return { color: "grey" };
    //           case 'Limestone, Dimension' : return { color: "grey" };
    //           case 'Fluorine-Fluorite' : return { color: "lightgreen" };
    //           case 'Barium-Barite' : return { color: "lightblue" };
    //           case 'Uranium' : return { color: "darkgreen" };
    //           case 'Fire Clay (Refractory)' : return { color: "brown" };
    //           case 'Silica' : return { color: "purple" };
    //           case 'Lead' : return { color: "orange" };
    //           case 'Tungsten' : return { color: "yellow" };
    //           case 'Manganese' : return { color: "Teal" };
    //           case 'Graphite' : return { color: "Olive" };
    //           case 'Titanium' : return { color: "blue" };
    //       }
    //   },
    //   onEachFeature: function(feature, layer){
    //       layer.bindPopup(feature.properties.Name);
    //       category = feature.properties.Commodity_commod;
    //       // Initialize the category array if not already set.
    //       if (typeof categories[category] === "undefined") {
    //           categories[category] = [];
    //       }
    //       categories[category].push(layer);
    //   }
    // });

    // var basemapsObj = {};

    // var overlaysObj = {},
    //     categoryName,
    //     categoryArray,
    //     categoryLG;

    // for (categoryName in categories) {
    //     categoryArray = categories[categoryName];
    //     categoryLG = L.layerGroup(categoryArray);
    //     categoryLG.categoryName = categoryName;
    //     overlaysObj[categoryName] = categoryLG;
    // }

    // var control = L.control.layers(basemapsObj, overlaysObj).addTo(map);

    // map.addLayer(allPoints)

    // updateMap(allPoints); // draw the map
  }

  // function updateMap(allPoints) {
  //   // you could log counties to console here to
  //   // verify the Leaflet layers object is not accessible
  //   // and scoped within this function
  //   console.log(allPoints);

  //   // loop through each county layer to update the color and tooltip info
  //   allPoints.eachLayer(function (layer) {
  //     const props = layer.feature.properties;

  //     // assemble string sequence of info for tooltip (end line break with + operator)
  //     let tooltipInfo = `<b>${props["SITE_NAME"]}</b></br>
  //       Production status: ${props["DEV_STAT"]}</br>
  //       Main commodity: ${props["Commodity_commod"]}`;

  //     // bind a tooltip to layer with county-specific information
  //     layer.bindTooltip(tooltipInfo, {
  //       // sticky property so tooltip follows the mouse
  //       sticky: true,
  //     });
  //   });

  //   // update the legend with the current data attribute information
  // }
})();
  
  