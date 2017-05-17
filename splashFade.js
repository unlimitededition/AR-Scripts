//NOTES:

//Public
public var renderElement1 : GameObject;
public var renderElement2 : GameObject;

public var uiElement : Canvas;
public var fadeTime : float = 2;
//Private

//private - scripts
private var fadeClose : reset;
private var animStart : animArray;
//static
public static var faded : boolean = false;

function Start()
{
	fadeClose = GetComponent(reset);
	animStart = GetComponent(animArray);
}

function startFade()
{
	splashFade();
}

function splashFade()
{
	var uiCanvas : CanvasGroup;
	uiCanvas = uiElement.GetComponent(CanvasGroup);
	
	if (uiCanvas.alpha == 0)
	{
		while(uiCanvas.alpha < 1)
		{
			uiCanvas.alpha += (Time.deltaTime / fadeTime);
			
			yield;
		}
		splashFadeDoOff();
		
		uiCanvas.interactable = true;
		faded = false;
	}
	
	if (uiCanvas.alpha == 1)
	{
		while(uiCanvas.alpha > 0)
		{
			uiCanvas.alpha -= (Time.deltaTime / fadeTime);
			
			yield;
		}
		uiCanvas.interactable = false;
		faded = true;
		splashFadeDoOn();
	}
	
	if (uiCanvas.alpha < 0)
	{
		uiCanvas.alpha = 0;
	}
	if (uiCanvas.alpha > 1)
	{
		uiCanvas.alpha = 1;
	}
}

function splashFadeDoOn()
{
	if(faded && renderElement1.activeSelf)
	{
		animStart.buildIntro();
	}
}

function splashFadeDoOff()
{
	if(!reset.RESET)
	{
		fadeClose.close();
	}
}