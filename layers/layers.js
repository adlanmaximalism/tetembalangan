var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TEMBALANGGGG_1 = new ol.format.GeoJSON();
var features_TEMBALANGGGG_1 = format_TEMBALANGGGG_1.readFeatures(json_TEMBALANGGGG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMBALANGGGG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMBALANGGGG_1.addFeatures(features_TEMBALANGGGG_1);
var lyr_TEMBALANGGGG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMBALANGGGG_1, 
                style: style_TEMBALANGGGG_1,
                popuplayertitle: 'TEMBALANGGGG',
                interactive: true,
    title: 'TEMBALANGGGG<br />\
    <img src="styles/legend/TEMBALANGGGG_1_0.png" /> <br />\
    <img src="styles/legend/TEMBALANGGGG_1_1.png" /> Danau<br />\
    <img src="styles/legend/TEMBALANGGGG_1_2.png" /> Flat<br />\
    <img src="styles/legend/TEMBALANGGGG_1_3.png" /> Gedung Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_1_4.png" /> Gedung Pertemuan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_5.png" /> Gereja<br />\
    <img src="styles/legend/TEMBALANGGGG_1_6.png" /> Hiburan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_7.png" /> Hotel/Mote/Penginapan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_8.png" /> Hutan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_9.png" /> Indsutri Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_1_10.png" /> Industri Aneka Pangan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_11.png" /> Industri Aneka Sandang<br />\
    <img src="styles/legend/TEMBALANGGGG_1_12.png" /> Industri Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_1_13.png" /> Instalasi Air Bersih<br />\
    <img src="styles/legend/TEMBALANGGGG_1_14.png" /> Instalasi Lainnya<br />\
    <img src="styles/legend/TEMBALANGGGG_1_15.png" /> Instalasi Listrik<br />\
    <img src="styles/legend/TEMBALANGGGG_1_16.png" /> Instalasi Minyak dan Gas<br />\
    <img src="styles/legend/TEMBALANGGGG_1_17.png" /> Jalan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_18.png" /> Kampung Jarang<br />\
    <img src="styles/legend/TEMBALANGGGG_1_19.png" /> Kampung Padat<br />\
    <img src="styles/legend/TEMBALANGGGG_1_20.png" /> Kantor Pos/Ekspedisi/Logistik<br />\
    <img src="styles/legend/TEMBALANGGGG_1_21.png" /> Kantor Swasta<br />\
    <img src="styles/legend/TEMBALANGGGG_1_22.png" /> Kantor Telepon<br />\
    <img src="styles/legend/TEMBALANGGGG_1_23.png" /> Kantor/Bangunan Militer<br />\
    <img src="styles/legend/TEMBALANGGGG_1_24.png" /> Kantor/Bangunan Pemerintahan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_25.png" /> Komplek Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_1_26.png" /> Lapangan Olahraga<br />\
    <img src="styles/legend/TEMBALANGGGG_1_27.png" /> Lembaga Keuangan/Bank<br />\
    <img src="styles/legend/TEMBALANGGGG_1_28.png" /> Makam Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_29.png" /> Makam Komersial<br />\
    <img src="styles/legend/TEMBALANGGGG_1_30.png" /> Makam Pahlawan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_31.png" /> Makam Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_1_32.png" /> Masjid/Langgar/Surau<br />\
    <img src="styles/legend/TEMBALANGGGG_1_33.png" /> Padang Golf<br />\
    <img src="styles/legend/TEMBALANGGGG_1_34.png" /> Pasar Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_35.png" /> Pasar Modern<br />\
    <img src="styles/legend/TEMBALANGGGG_1_36.png" /> Pasar Tradisional<br />\
    <img src="styles/legend/TEMBALANGGGG_1_37.png" /> Pendidikan Dasar<br />\
    <img src="styles/legend/TEMBALANGGGG_1_38.png" /> Pendidikan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_39.png" /> Pendidikan Menengah<br />\
    <img src="styles/legend/TEMBALANGGGG_1_40.png" /> Pendidikan Terpadu<br />\
    <img src="styles/legend/TEMBALANGGGG_1_41.png" /> Pendidkan Dasar<br />\
    <img src="styles/legend/TEMBALANGGGG_1_42.png" /> Perbengkelan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_43.png" /> Perbengkelan Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_1_44.png" /> Pergudangan Tertutup<br />\
    <img src="styles/legend/TEMBALANGGGG_1_45.png" /> Perguruan Tinggi<br />\
    <img src="styles/legend/TEMBALANGGGG_1_46.png" /> Perguruan TInggi<br />\
    <img src="styles/legend/TEMBALANGGGG_1_47.png" /> Pertokoan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_48.png" /> Perumahan Jarang<br />\
    <img src="styles/legend/TEMBALANGGGG_1_49.png" /> Perumahan Padat<br />\
    <img src="styles/legend/TEMBALANGGGG_1_50.png" /> Pusdiklat<br />\
    <img src="styles/legend/TEMBALANGGGG_1_51.png" /> Puskesmas/Balai Kesehatan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_52.png" /> Rumah Kantor<br />\
    <img src="styles/legend/TEMBALANGGGG_1_53.png" /> Rumah Makan/Resto/Cafe<br />\
    <img src="styles/legend/TEMBALANGGGG_1_54.png" /> Rumah Sakit Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_1_55.png" /> Rumah Susun<br />\
    <img src="styles/legend/TEMBALANGGGG_1_56.png" /> Rumah Susun Umum<br />\
    <img src="styles/legend/TEMBALANGGGG_1_57.png" /> Rumah Toko<br />\
    <img src="styles/legend/TEMBALANGGGG_1_58.png" /> Sawah Non Irigasi<br />\
    <img src="styles/legend/TEMBALANGGGG_1_59.png" /> Sungai<br />\
    <img src="styles/legend/TEMBALANGGGG_1_60.png" /> Tanah Kosong Sudah Diperuntukkan<br />\
    <img src="styles/legend/TEMBALANGGGG_1_61.png" /> Tempat Pengobatan Khusus<br />\
    <img src="styles/legend/TEMBALANGGGG_1_62.png" /> Tempat Rekreasi<br />\
    <img src="styles/legend/TEMBALANGGGG_1_63.png" /> Toko/Warung/Kios/Mart<br />\
    <img src="styles/legend/TEMBALANGGGG_1_64.png" /> Waduk<br />\
    <img src="styles/legend/TEMBALANGGGG_1_65.png" /> <br />' });

lyr_GoogleSatelit_0.setVisible(true);lyr_TEMBALANGGGG_1.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_TEMBALANGGGG_1];
lyr_TEMBALANGGGG_1.set('fieldAliases', {'Keterangan': 'Keterangan', 'Luas': 'Luas', });
lyr_TEMBALANGGGG_1.set('fieldImages', {'Keterangan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_TEMBALANGGGG_1.set('fieldLabels', {'Keterangan': 'no label', 'Luas': 'no label', });
lyr_TEMBALANGGGG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});