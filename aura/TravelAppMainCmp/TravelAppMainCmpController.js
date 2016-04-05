({	
    //load the component on initialization
    doInit : function(component,event,helper){
        //debugger;
        helper.doInitHelper(component,event); 
    },
    
	//change the component in app
    changeComponent : function(component,event,helper){
       helper.changeComponentHelper(component,event);
    },
    
    initEventBindings : function(component, event, helper) {
    	helper.initEventBindingsHelper(component, event);
    },
    
    makeFirstTabActive : function(component, event, helper) {
    	jQuery('.active').removeClass('active');
        jQuery('#firstElementId').addClass('active');
        helper.doInitHelper(component,event);
    }
})