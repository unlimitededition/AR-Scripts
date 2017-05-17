//NOTES - Identifies collisions and sends name as String to external functions

//public

//private

//private - Scripts
private var playAnim : animArray;
//static
public static var collisionString : String;
public static var collisionObject : GameObject;

function Start()
{
	playAnim = GetComponent(animArray);
}

function Update ()
{
	#if UNITY_EDITOR || UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN || UNITY_WEBPLAYER
	if (Input.GetMouseButtonDown(0) && splashFade.faded)
    {
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    
        if (Physics.Raycast (ray, hit)) 
        {
        	Debug.Log("You just hit " + hit.collider.gameObject.name);
        	
	        collisionString = hit.collider.gameObject.name;
	        collisionObject = hit.collider.gameObject;
	        
	        tapClickDo();
        }
	}
	#else
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Began && splashFade.faded)
    {
    var ray = Camera.main.ScreenPointToRay (Input.GetTouch(0).position);
    var hit : RaycastHit;
    
        if (Physics.Raycast (ray, hit)) 
        {
        	Debug.Log("You just hit " + hit.collider.gameObject.name);
        	
	        collisionString = hit.collider.gameObject.name;
	        collisionObject = hit.collider.gameObject;
	        
	        tapClickDo();
        }
	}
	#endif
}

function tapClickDo()
{
	if(!animArray.highlighted)
	{
		playAnim.highlightModel();
	}
	if(animArray.highlighted)
	{
		playAnim.buildScene();
	}
}
