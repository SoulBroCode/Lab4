function SceneManager()
{
	this.init();
}
SceneManager.prototype.init = function(){
	this.scenes = [];
	
}
SceneManager.prototype.addScene = function(scene){
	this.scenes.push(scene);
	var lenght = this.scenes.length;
	if(lenght == 1){
		this.currentScene = this.scenes[0];
		this.currentScene.start();
	}
	else{		
		this.scenes[lenght-2].nextScene = this.scenes[lenght-1];
		this.scenes[lenght-1].nextScene = this.scenes[0];
	}

	
}

SceneManager.prototype.goToScene = function(title)
{
	var lenght = this.scenes.length;
	for(var i =0;i<lenght; i++){
		if(this.scenes[i].title == title){
			this.currentScene.stop();
			this.currentScene = this.scenes[i];
			this.currentScene.start();
			break;
		}
	}
}
SceneManager.prototype.nextScene = function()
{
	this.currentScene.stop();
	this.currentScene = this.currentScene.nextScene;
	this.currentScene.start();
}
