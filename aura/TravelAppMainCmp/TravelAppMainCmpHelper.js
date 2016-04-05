({
	doInitHelper : function(component,event) {
		$A.createComponent(
            "c:TravelRequestsListCmp",
            {},
            function(newCmp){
                if (component.isValid()) {
                    var content = component.find("content");
               		content.set("v.body", newCmp);
                }
            }
        ); 
	}, 
    
    changeComponentHelper : function(component, event) {
    	var src = event.target;
        var li = $(src).closest('li');
        var ele = $(li).find('span').text(); 
        $('.active').removeClass('active');
        $(li).addClass('active');
        
        //debugger;
        var pgName = $(li).find('.compToShow').text();
        $A.createComponent(
            "c:"+pgName,
            {},
            function(newCmp){
                if (component.isValid()) {
                    var content = component.find("content");
               		content.set("v.body", newCmp);
                }
            }
        ); 
    },
    
    initEventBindingsHelper : function(component, event) {
    	/*jQuery('.nav a').on('click', function(){
            jQuery('.navbar-toggle').click();
        });	*/
    }
})