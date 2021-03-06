var FormFace = function(objectId, className){
	this.objectId = objectId;
	this.className = className;
}

FormFace.prototype = {
	toggleChild : function(element){
		// Checks for display:[none|block], ignores visible:[true|false]
		if($(element).parent().next().is(":visible")){
			$(element).html("▼");
		}else{
			$(element).html("▲");
		}
		$(element).parent().next().toggle();
	}
}