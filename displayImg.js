//NOTES - 

//public
public var imgDisplayBoxes : GameObject[];
public var guiDisplayCanvas : GameObject;
//private
private var guiDisplayCanvasRaw : UI.RawImage;
//static

function Start()
{
	guiDisplayCanvasRaw = guiDisplayCanvas.GetComponentInChildren(UI.RawImage);
}

function imgDisplay()
{
	for(var i : int = 0; i < imgDisplayBoxes.length; i++)
	{
		if(tapClick2d.collisionString2D == imgDisplayBoxes[i].name)
		{	
			var imgDisplayTexture : UI.RawImage;	
			imgDisplayTexture = imgDisplayBoxes[i].GetComponent(UI.RawImage);
			
			var loadedTex : Texture;
			loadedTex = imgDisplayTexture.texture;
			
			guiDisplayCanvasRaw.texture = loadedTex;
			
			fadeImgDisplay();
		}
		
		if(tapClick2d.collisionString2D == guiDisplayCanvas.name)
		{			
			fadeImgHide();
		}
	}
}

function fadeImgDisplay() //check state, get object-component, run fade
{
	var guiCanvas : CanvasGroup;
	guiCanvas = guiDisplayCanvas.GetComponent(CanvasGroup); //guiDisplayCanvas component
	
	if (guiCanvas.alpha == 0)
	{
		while(guiCanvas.alpha != 1)
		{
			guiCanvas.alpha += (Time.deltaTime / 1);
			
			if(guiCanvas.alpha > 1)
			{
				guiCanvas.alpha = 1;
			}
			
			yield;
		}
		
		guiCanvas.interactable = true;
	}
	
	for(var blankGallery : GameObject in imgDisplayBoxes)
	{
		var blankGalleryComponent : Collider2D;
		blankGalleryComponent = blankGallery.GetComponent(Collider2D);
		
		blankGalleryComponent.enabled = false;
	}
}

function fadeImgHide() //check state, get object-component, run fade
{
	var guiCanvas : CanvasGroup;
	guiCanvas = guiDisplayCanvas.GetComponent(CanvasGroup); //guiDisplayCanvas component

	if (guiCanvas.alpha == 1)
	{
		while(guiCanvas.alpha != 0)
		{
			guiCanvas.alpha -= (Time.deltaTime / 1);
			
			if(guiCanvas.alpha < 0)
			{
				guiCanvas.alpha = 0;
			}
			
			yield;
		}
		
		guiCanvas.interactable = false;
	}
	
	for(var blankGallery : GameObject in imgDisplayBoxes)
	{
		var blankGalleryComponent : Collider2D;
		blankGalleryComponent = blankGallery.GetComponent(Collider2D);
		
		blankGalleryComponent.enabled = true;
	}
}