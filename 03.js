/*process.stdout => 标准输出*/

//console.log()~~ process.stdout.write(XX)

//用process.stdout.write实现 一个console.log()功能

var log = (msg) => {
	process.stdout.write(`${msg}\n`);
};

log("我的天");//我的天

