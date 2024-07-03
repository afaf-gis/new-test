var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_city_1 = new ol.format.GeoJSON();
var features_city_1 = format_city_1.readFeatures(json_city_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_1.addFeatures(features_city_1);
var lyr_city_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_1, 
                style: style_city_1,
                popuplayertitle: "city",
                interactive: true,
                    title: '<img src="styles/legend/city_1.png" /> city'
                });
var format_new_table_name_2 = new ol.format.GeoJSON();
var features_new_table_name_2 = format_new_table_name_2.readFeatures(json_new_table_name_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_new_table_name_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_new_table_name_2.addFeatures(features_new_table_name_2);
var lyr_new_table_name_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_new_table_name_2, 
                style: style_new_table_name_2,
                popuplayertitle: "new_table_name",
                interactive: true,
                    title: '<img src="styles/legend/new_table_name_2.png" /> new_table_name'
                });
var format_maalem_3 = new ol.format.GeoJSON();
var features_maalem_3 = format_maalem_3.readFeatures(json_maalem_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maalem_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maalem_3.addFeatures(features_maalem_3);
var lyr_maalem_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maalem_3, 
                style: style_maalem_3,
                popuplayertitle: "maalem",
                interactive: true,
                    title: '<img src="styles/legend/maalem_3.png" /> maalem'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_city_1.setVisible(true);lyr_new_table_name_2.setVisible(true);lyr_maalem_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_city_1,lyr_new_table_name_2,lyr_maalem_3];
lyr_city_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name_of_city': 'name_of_city', 'code': 'code', });
lyr_new_table_name_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', });
lyr_maalem_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'code': 'code', 'name': 'name', 'date_of_biulding': 'date_of_biulding', 'photo': 'photo', 'gema_mabna': 'قيمة المبنى التاريخية', 'x': 'x', 'y': 'y', 'xxx': 'xxx', 'yyy': 'yyy', 'x_x': 'x_x', 'y_y': 'y_y', });
lyr_city_1.set('fieldImages', {'OBJECTID': '', 'name_of_city': '', 'code': '', });
lyr_new_table_name_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', });
lyr_maalem_3.set('fieldImages', {'OBJECTID': '', 'code': '', 'name': '', 'date_of_biulding': '', 'photo': '', 'gema_mabna': '', 'x': '', 'y': '', 'xxx': '', 'yyy': '', 'x_x': '', 'y_y': '', });
lyr_city_1.set('fieldLabels', {'OBJECTID': 'no label', 'name_of_city': 'no label', 'code': 'no label', });
lyr_new_table_name_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', });
lyr_maalem_3.set('fieldLabels', {'OBJECTID': 'no label', 'code': 'no label', 'name': 'no label', 'date_of_biulding': 'no label', 'photo': 'no label', 'gema_mabna': 'no label', 'x': 'no label', 'y': 'no label', 'xxx': 'no label', 'yyy': 'no label', 'x_x': 'no label', 'y_y': 'no label', });
lyr_maalem_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});