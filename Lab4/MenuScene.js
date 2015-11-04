function MenuScene()
{
	this.init();
}
MenuScene.prototype = new Scene();
MenuScene.prototype.init = function(){
	this.title = "MenuScene";
}

MenuScene.prototype.start = function(){
	 document.body.style.background = "orange no-repeat right top";
}
MenuScene.prototype.stop = function(){

}

MenuScene.prototype.update = function()
{
		console.log("Scene");
}
MenuScene.prototype.render = function()
{
  ctx.font = "lighter small-caps 54px Verdana";
  ctx.fillText(this.title, 10, 50);
}
