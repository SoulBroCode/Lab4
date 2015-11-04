function TitleScene()
{
	
	this.init();
}
TitleScene.prototype = new Scene();
TitleScene.prototype.init = function(){
	this.title = "TitleScene";
	document.body.style.background = "green no-repeat right top";
}

TitleScene.prototype.start = function(){
	document.body.style.background = "green no-repeat right top";
}
TitleScene.prototype.stop = function(){

}

TitleScene.prototype.update = function()
{
		//console.log("Scene");
}
TitleScene.prototype.render = function()
{
  ctx.font = "bolder 60px Arial";
  ctx.fillText(this.title, 10, 50);

}
