//NOTE - 

//public
public var guiObject : GameObject;
public var slideTime : float = 1f;
//private
private var sliding : boolean = false;
private var barWidth : float;
private var guiRect : RectTransform;
private var diffMag : float;
//static
public static var onScreen : boolean = false;

function Start()
{
	barWidth = Screen.width * 0.2f;
	
	guiRect = guiObject.GetComponent(RectTransform);
	
	if(!onScreen)
	{
	guiRect.position.x = guiRect.position.x + barWidth;
	}
}

function startSlide()
{
	if(!sliding)
	{
		slideGUI();
	}
}

function slideGUI()
{
	var newPos : float;
	
	sliding = true;
	
	if(onScreen)
	{
		newPos = guiRect.position.x + barWidth;
		onScreen = false;
	}
	else
	{
		newPos = guiRect.position.x - barWidth;
		onScreen = true;
	}
	
	while(Mathf.Sqrt((newPos-guiRect.position.x)*(newPos-guiRect.position.x)) > 1f)
	{
		guiRect.position.x = Mathf.Lerp(guiRect.position.x, newPos, Time.smoothDeltaTime*slideTime);
		
		yield;
	}
	guiRect.position.x = newPos;
	
	sliding = false;
}