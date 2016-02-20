var router = {
    _routes : {}, // The routes will be stored here
    add : function(url, action){
        this._routes[url] = action;
    },
    run : function(){
        jQuery.each(this._routes, function(pattern){
            if(location.href.match(pattern)){
            // "this" points to the function to be executed
                this();
            }
        });
    }
};

// Will execute only on this page:
router.add('/*', function(){
   App.component.Cmd();
});
router.add('#Dashboard', function(){
   App.component.Dashboard();
});
// You can even use regex-es:
router.add('#Registration', function(){
    console.log('This is using a regex!');
});