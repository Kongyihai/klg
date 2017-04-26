/**
 * Created by shc on 2017/2/19.
 */
var config = require("./config");
require("./web").init(config.webPort,config.version);
