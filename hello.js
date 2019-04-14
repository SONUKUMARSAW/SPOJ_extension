function getToggleFunction(){
	
	state = "block";

	return function same(){
		newstate = "";
		if(state==="block") newstate = "none";
		else newstate = "block";
		document.getElementById("problem-tags").style.display=newstate;
		document.getElementById("ccontent").style.display=newstate;
		state = newstate;
	};
};

toggleTagsAndComments = getToggleFunction();
toggleTagsAndComments();

document.getElementById("problem-name").onclick = toggleTagsAndComments;



