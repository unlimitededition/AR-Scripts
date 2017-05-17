//NOTES - 

//public
public var resetButtonSize : float = 100;
public var resetButtonMargin : float;
public var resetButtonTex : Texture;
//private

//private - Scripts
private var buildScene : animArray;
//static
public static var RESET : boolean;


function Start()
{
	buildScene = GetComponent(animArray);
}

function close()
{
	closeGallery();
	makeSmall();
	buildAnim();
}

function closeGallery()
{
	if(hideShowGallery.onScreen)
	{
		var galleryClosing : hideShowGallery;
		galleryClosing = GetComponent(hideShowGallery);
		
		galleryClosing.startSlide();
	}
}

function makeSmall()
{
//	small = true;
}

function buildAnim()
{
	if(animArray.highlighted)
	{
		buildScene.buildScene();
	}
}

function OnGUI()
{
	if(!RESET)
	{
		if (GUI.Button(Rect (resetButtonMargin, resetButtonMargin, resetButtonSize, resetButtonSize), resetButtonTex, GUIStyle.none))
		{
			close();
		}
	}
}

function Update()
{
	Debug.Log("Reset? " + RESET);
	
	if(!animArray.highlighted && !hideShowGallery.onScreen)// && small
	{
		RESET = true;
	}
	else
	{
		RESET = false;
	}
}