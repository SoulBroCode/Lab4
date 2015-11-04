function GameoverScene()
{
	this.init();
}
GameoverScene.prototype = new Scene();
GameoverScene.prototype.init = function(){
	this.title = "GameoverScene";
}

GameoverScene.prototype.start = function(){
	 document.body.style.background = "red no-repeat right top";
}
GameoverScene.prototype.stop = function(){

}

GameoverScene.prototype.update = function()
{
		//console.log("Scene");
}
GameoverScene.prototype.render = function()
{
  ctx.font = "italic 48px serif";
  ctx.fillText(this.title, 10, 50);

}
