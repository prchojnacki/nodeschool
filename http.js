var http = require('http');

var count = 0;

function makeRequest(url, callback) {
	var result = "";
	http.get(url, function (response) {
		response.on('data', function (data) {
			result += data.toString();
		})
		response.on('end', function () {
			callback(result)
		})
	})
}

var first;
var second;
var third;
makeRequest(process.argv[2], function (data) {
	first = data;
	count++;
	if (count == 3) {
		logResult();
	}
});
makeRequest(process.argv[3], function (data) {
	second = data;
	count++;
	if (count == 3) {
		logResult();
	}
});
makeRequest(process.argv[4], function (data) {
	third = data;
	count++;
	if (count == 3) {
		logResult();
	}
})
function logResult () {
	console.log(first);
	console.log(second);
	console.log(third);
}


//solution (exercise 7):
    // var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })

//solution (exercise 8):
    // var http = require('http')
    // var bl = require('bl')
    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err)
    //       return console.error(err)
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))  
    // })

//solution (exercise 9):
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0
    
    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }
    
    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)
    
    //       results[index] = data.toString()
    //       count++
    
    //       if (count == 3)
    //         printResults()
    //     }))
    //   })
    // }