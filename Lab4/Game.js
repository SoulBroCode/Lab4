
function Game()
{		
	this.init();
}
Game.prototype.init = function(){
	canvasInIt();
	this.sceneManager = new SceneManager();
	this.sceneManager.addScene(new TitleScene());
	this.sceneManager.addScene(new MenuScene());
	this.sceneManager.addScene(new GameoverScene());
	console.log("Game.InIt");
}
Game.prototype.keyClick = function(e)
{
	game.sceneManager.nextScene();
	//game.sceneManager.goToScene("MenuScene")
}

Game.prototype.gameLoop = function()
{
	game.update();
	game.render();
	window.requestAnimationFrame(game.gameLoop);
}
Game.prototype.update = function()
{

	
}
Game.prototype.render = function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	this.sceneManager.currentScene.render();	
}


function canvasInIt(){
	canvas = document.createElement("canvas");
	//ctx is to get context that we will draw on
	ctx = canvas.getContext("2d")

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}