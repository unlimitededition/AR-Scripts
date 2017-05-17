

// http://answers.unity3d.com/questions/43450/timed-out-load-level.html - Bunny83

// Inputs - Input.anyKey || (Input.accelerationEventCount > 0) || (Input.touchCount > 0) || Input.GetMouseButtonDown(0) || Input.gyro.attitude != prevAtt

public var Timeout : float = 60;
public var mainCam : GameObject;
public var runScr : String;
//
private var currentTimeout : float;
private var exeScr : splashFade;
private var faded : boolean = false;
private var prevAtt : Quaternion;

function Start()
{
	ResetTimeout();
	
	exeScr = GetComponent(runScr);
}

function ResetTimeout()
{
	currentTimeout = Time.time + Timeout;
	prevAtt = Input.gyro.attitude;
}

function Update()
{
	Debug.Log (currentTimeout);
	
	if(Input.GetMouseButtonDown(0))// || Input.gyro.attitude != prevAtt
	{
		Debug.Log ("Reset", gameObject);
		
		//DO
		if(!faded)
		{
			exeScr.splashFade();
			faded = true;
			
			mainCam.SetActive(true);
		}
		//
		
		ResetTimeout();
	}
	if(Time.time > currentTimeout)
	{
		Debug.Log ("Time!", gameObject);
		
		//DO
		if(faded)
		{
			exeScr.splashFade();
			faded = false;
			
			mainCam.SetActive(false);
		}
		//
		
		ResetTimeout();
	}
}