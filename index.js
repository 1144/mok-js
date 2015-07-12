/*--
	文档生成工具，提取代码注释生成文档。
	-site http://mokjs.com/mokdoc/
*/
var mok = {};

mok.use = function (module) {
	return require('./'+module);
};

mok.start = function (config) {
	require('./mok').start(config);
};

module.exports = mok;

//捕获漏网的异常
process.on('uncaughtException', function (ex) { //捕获漏网的异常
	console.error('\nMOKJS Uncaught Exception: '+ex.stack);
});
