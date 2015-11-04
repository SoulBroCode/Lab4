function Scene()
{	
	this.init();
}
Scene.prototype.init = function(){
	this.title = "Scene";
	this.nextScene = null;
}
Scene.prototype.start = function(){

}
Scene.prototype.stop = function(){

}

Scene.prototype.update = function()
{
	//window.requestAnimationFrame(game.gameLoop);
	//ctx.clearRect(0,0,canvas.width,canvas.height);
		console.log("Scene");
}
Scene.prototype.render = function()
{
  ctx.font = "48px serif";
  ctx.fillText(this.title, 10, 50);
}
