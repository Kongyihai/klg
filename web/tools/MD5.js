   
  var crypto = require('crypto');
/**MD5º”√‹*/
exports.md5 = function (str) { 
var md5sum = crypto.createHash('md5');
 md5sum.update(str); str = md5sum.digest('hex'); 
 return str; };