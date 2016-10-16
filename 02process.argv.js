/*var argv = process.argv;
console.log(argv);///1. node的路径 2.文件的路径*/

//参数的前两位没什么用，一般用法
var argvs = process.argv.slice(2);
console.log(argvs.toString());

switch (argvs[0]){
	case 'init':
		console.log('你需要初始化');
		break;
	case 'install':
		var installPackageName = argvs[1];
		console.log('你在安装' + installPackageName);

}