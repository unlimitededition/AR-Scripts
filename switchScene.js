//NOTES - 

//public
public var f_g : GameObject;
public var f_1 : GameObject;
public var switchDist : float = 150f;

public var switchButtonTexA : Texture;
public var switchButtonTexB : Texture;
public var screenSwitchOffset : float = 6.66;
//public var switchButtonMargin : float = 25f;
//private
private var switching : boolean = false;
private var GroundFloor : boolean = true;
private var switchButtonTex : Texture;
private var switchScale : float = 10;
//static

function Start()
{
	var scrHgt : float;
	scrHgt = Screen.height;
	switchScale = (scrHgt*0.125f);
}

function Update()
{
	
}

function switchAnim()
{
	if(!switching)
	{
		switching = true;
		
		var fgInitPos : float;
		fgInitPos = f_g.transform.position.z;
		
		var f1InitPos : float;
		fgInitPos = f_1.transform.position.z;
		
		if(GroundFloor)
		{	
			f_g.transform.Translate(Vector3.back * switchDist);
			f_1.transform.Translate(Vector3.back * switchDist);
			
			f_1.SetActive(true);
			f_g.SetActive(false);			
			
			GroundFloor = false;
		}
		else
		{	
			f_g.transform.Translate(Vector3.forward * switchDist);
			f_1.transform.Translate(Vector3.forward * switchDist);
			
			f_1.SetActive(false);
			f_g.SetActive(true);
						
			GroundFloor = true;
		}
	}
	switching = false;
}

function OnGUI()
{	
	if(reset.RESET && !animArray.building && splashFade.faded)
	{		
		if(switchButtonTex == null)
		{
		switchButtonTex = switchButtonTexA;
		}
		
		if(GUI.Button(Rect(Screen.width-(switchScale*screenSwitchOffset), Screen.height-switchScale, (switchScale*10), switchScale), switchButtonTex, GUIStyle.none))
		{
			switchAnim();
			
			if(switchButtonTex == switchButtonTexA)
			{
				switchButtonTex = switchButtonTexB;
			}
			else
			{
				switchButtonTex = switchButtonTexA;
			}			
		}
	}
}