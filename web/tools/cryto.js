var crypto = require('crypto');

/*function encrypt(str, secret) {
    //console.log("----str is: "+str+"----"+secret);
    var cipher = crypto.createCipher('aes128', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    //console.log("enc is: "+enc);
    var text=new Buffer(enc,"utf-8").toString("base64");
    return text;
}

//use secret to decrypt string
function decrypt(str, secret) {
    //console.log("str is: "+str);
    var text=new Buffer(str,"base64").toString('utf-8');
    var decipher = crypto.createDecipher('aes128', secret);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    //console.log("dec is: "+dec);
    return dec;
}*/

//解密
function decode(key, iv, secretdata) {
    var cryptkey   = crypto.createHash('sha256').update(key).digest();
    var decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv),
        decoded  = decipher.update(secretdata, 'base64', 'utf8');
    decoded += decipher.final( 'utf8' );
    return decoded;
}
//加密
function encode(key, iv, cleardata) {
    var cryptkey   = crypto.createHash('sha256').update(key).digest();
    var encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv),
        encoded  = encipher.update(cleardata, 'utf8', 'base64');
    encoded += encipher.final( 'base64' );
    return encoded;
}
function b64enc(data) {
    var b   = new Buffer(data, 'binary');
    return b.toString('base64');
}
/*exports.encrypt = encrypt;
exports.decrypt = decrypt;*/

exports.decode=decode;
exports.encode=encode;
