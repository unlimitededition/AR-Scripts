//NOTES - 

//Public
public var animWaitTime : float = 3f;
public var animObjects : GameObject[];
//Private
private var highlightedModel : GameObject;
private var big : boolean = false;
//Private - scripts
private var onScreenGallery : guiGalleryArray;
private var slideOnScreenGallery : hideShowGallery;
//static
public static var highlighted : boolean = false;
public static var building : boolean = false;

function Start()
{
	
	
	//script init
	onScreenGallery = GetComponent(guiGalleryArray);
	slideOnScreenGallery = GetComponent(hideShowGallery);
}

function highlightModel()
{
	if(!building) //play animations for objects other that clicked in reverse, Set highlighted to true, play 'big' animation
	{	
		building = true;
		
		for(var i : int = 0; i < animObjects.length; i++)
		{
			if(tapClick.collisionString != animObjects[i].name)
			{
				var anim : Animation;
				anim = animObjects[i].GetComponent(Animation);
				
				var animName : String;
				animName = animObjects[i].name;
				
				animObjects[i].GetComponent.<Animation>()[animName].normalizedTime = 1.0f;
				animObjects[i].GetComponent.<Animation>()[animName].speed = -1f;
				animObjects[i].GetComponent.<Animation>().Play(animName, PlayMode.StopAll);
				
//				while(animObjects[i].animation.IsPlaying(animName))yield;
			}
		}
		yield WaitForSeconds(animWaitTime);
		
		for(i = 0; i < animObjects.length; i++)
		{
			if(tapClick.collisionString != animObjects[i].name)
			{
				animObjects[i].SetActive(false);
			}
		}
		
		if(!hideShowGallery.onScreen)
		{
			onScreenGallery.loadImages();
			slideOnScreenGallery.startSlide();
		}
		
		makeBig();
		
		highlightedModel = tapClick.collisionObject;
		highlighted = true;
	}
	building = false;
}

function buildScene()
{
	if(!building) //play animations for objects other that clicked in reverse, Set highlighted to true, play 'big' animation
	{	
		building = true;
		
		for(var i : int = 0; i < animObjects.length; i++)
		{			
			if(tapClick.collisionString != animObjects[i].name)
			{	
				animObjects[i].SetActive(true);
							
				var anim : Animation;
				anim = animObjects[i].GetComponent(Animation);
				
				var animName : String;
				animName = animObjects[i].name;
				
				animObjects[i].GetComponent.<Animation>()[animName].normalizedTime = 0f;				
				animObjects[i].GetComponent.<Animation>()[animName].speed = 1f;
				animObjects[i].GetComponent.<Animation>().Play(animName, PlayMode.StopAll);
				
//				while(animObjects[i].animation.IsPlaying(animName))yield;
			}
		}
		yield WaitForSeconds(animWaitTime);
		if(hideShowGallery.onScreen)
		{
			onScreenGallery.loadImages();
			slideOnScreenGallery.startSlide();
		}
		
		makeBig();
		
		highlightedModel = tapClick.collisionObject;
		highlighted = false;
	}
	building = false;
}

function buildIntro ()
{
	if(!building)
	{
		building = true;
	
		for(var animObj : GameObject in animObjects)
		{
			animObj.SetActive(true);
							
			var anim : Animation;
			anim = animObj.GetComponent(Animation);
			
			var animName : String;
			animName = animObj.name;
			
			animObj.GetComponent.<Animation>()[animName].normalizedTime = 0f;				
			animObj.GetComponent.<Animation>()[animName].speed = 1f;
			animObj.GetComponent.<Animation>().Play(animName, PlayMode.StopAll);
		}
		yield WaitForSeconds(animWaitTime);
	}
	building = false;
}

function makeBig()
{
	var highlightObj : GameObject;
	highlightObj = GameObject.Find(tapClick.collisionString);
		
	if(!big)
	{
	
	}
	else
	{
	
	}
}