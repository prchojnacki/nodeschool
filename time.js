var net = require('net');
var server = net.createServer(function (socket) {
	var now = new Date();
	var YYYY = now.getFullYear().toString();
	var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var MM = months[now.getMonth()];
	var day = now.getDate();
	if (day < 10) {
		var DD = "0" + day.toString();
	} else {
		DD = day.toString();
	}
	var hours = now.getHours();
	if (hours < 10) {
		var hh = "0" + hours.toString();
	} else {
		hh = hours.toString();
	}
	var minutes = now.getMinutes().toString();
	if (minutes < 10) {
		var mm = "0" + minutes.toString();
	} else {
		mm = minutes.toString();
	}
	var string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + "\n";
	socket.end(string);
})
server.listen(process.argv[2]);

//solution:
    // var net = require('net')
    
    // function zeroFill(i) {
    //   return (i < 10 ? '0' : '') + i
    // }
    
    // function now () {
    //   var d = new Date()
    //   return d.getFullYear() + '-'
    //     + zeroFill(d.getMonth() + 1) + '-'
    //     + zeroFill(d.getDate()) + ' '
    //     + zeroFill(d.getHours()) + ':'
    //     + zeroFill(d.getMinutes())
    // }
    
    // var server = net.createServer(function (socket) {
    //   socket.end(now() + '\n')
    // })
    
    // server.listen(Number(process.argv[2]))
