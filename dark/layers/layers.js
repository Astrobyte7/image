var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_map96_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "map96",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/map96_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19459436.139000, -8086304.765023, 20460456.836200, 15109615.830323]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_map96_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_map96_1];
