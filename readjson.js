var fs = require('fs');

fs.readFile(__dirname + '/event.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    var jumlevent = jsonObj.list_event.length;
    for (var i = 0; i < jumlevent; i++) {
        var z = i+1;
        console.log('Event ID: ' + jsonObj.list_event[i].type);
        console.log('Judul: ' + jsonObj.list_event[i].number);
        console.log('Tanggal: ' + jsonObj.list_event[i].number);
        console.log('Jam: ' + jsonObj.list_event[i].number);
        console.log('Lokasi: ' + jsonObj.list_event[i].number);
    }
});
