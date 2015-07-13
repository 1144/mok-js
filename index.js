/*--
	mokjs - 前端开发服务框架 - 模块JS
	-author hahaboy | @攻城氏
	-site http://mokjs.com/
*/
var mok = {};

mok.use = function (module) {
	return require('./'+module);
};

mok.start = function (config) {
	require('./mok').start(config);
};

mok.watchConfig = function (file) {
	require('./mok').watchConfig(file);
};

module.exports = mok;

//捕获漏网的异常
process.on('uncaughtException', function (ex) {
	console.error('\nMOKJS Uncaught Exception: '+ex.stack);
});
