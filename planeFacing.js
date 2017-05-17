#pragma strict

//NOTES - 

//public
public var facingCamera : Camera;
//private

//static


function Update()
{
	transform.LookAt(transform.position + facingCamera.transform.rotation * Vector3.back, facingCamera.transform.rotation * Vector3.up);
}