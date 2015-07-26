var fs = require('fs');
var path = require('path');

module.exports = function (directory, fileExt, callback) {
	
	fs.readdir(directory, function (error, list) {
		if (error) {
			callback(error);
		}
		else {
			var result = [];
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) == "." + fileExt) {
					result.push(list[i]);
				}
			}
			callback(null, result);
		}
	});
}

//solution:
    // var fs = require('fs')
    // var path = require('path')
    
    // module.exports = function (dir, filterStr, callback) {
    
    //   fs.readdir(dir, function (err, list) {
    //     if (err)
    //       return callback(err)
    
    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })
    
    //     callback(null, list)
    //   })
    // }