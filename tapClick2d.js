//NOTES - Identifies collisions in 2D space and sends name as String to external functions

//Public

//Private

//Private - Scripts
private var displayImg2D : displayImg;

//Static
public static var collisionString2D : String;

function Start()
{
	displayImg2D = GetComponent(displayImg);
}

function Update ()
{
	#if UNITY_EDITOR || UNITY_STANDALONE_OSX || UNITY_STANDALONE_WIN || UNITY_WEBPLAYER
	if (Input.GetMouseButtonDown(0))
    {
		var mousePosition2D : Vector3 = Input.mousePosition;
		mousePosition2D.z = -1;
		
		var hitCollider2D : Collider2D;
		hitCollider2D = Physics2D.OverlapPoint(mousePosition2D);
    
        if (hitCollider2D != null) 
        {
            Debug.Log("You just hit [2D] " + hitCollider2D.gameObject.name);
	        
	        collisionString2D = hitCollider2D.gameObject.name;
	        
	        tapClickDo2D();
        }
	}
	#else
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Began)
    {
		var touchPosition2D : Vector3 = Input.GetTouch(0).position;
		touchPosition2D.z = -1;
		
		var hitCollider2D : Collider2D;
		hitCollider2D = Physics2D.OverlapPoint(touchPosition2D);
    
        if (hitCollider2D != null) 
        {
            Debug.Log("You just hit [2D] " + hitCollider2D.gameObject.name);
	        
	        collisionString2D = hitCollider2D.gameObject.name;
	        
	        tapClickDo2D();
        }
	}
	#endif
}

function tapClickDo2D()
{
	displayImg2D.imgDisplay();
}