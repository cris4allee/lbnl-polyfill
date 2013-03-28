(function(){

	// Modernizr Polyfilling
	Modernizr.load([
		{
			test: Modernizr.mq('only all'),
			nope: "/assets/js/polyfills/media-queries/respond.js"
		},
		{
			test: Modernizr.history,
			nope: "/assets/js/polyfills/history/history.js"
		}
	]);

	// Webshims Polyfilling
	var polyfillFeatures = [];

	//only polyfill forms, if placeholder or autofocus are not supported
	if(!Modernizr.input.placeholder || !Modernizr.input.autofocus){
		polyfillFeatures.push('forms');
	}
	if(!Modernizr.input.date || !Modernizr.input.range) {
		polyfillFeatures.push('forms-ext');
	}
	if(!Modernizr.localstorage || !Modernizr.sessionstorage || !Modernizr.json ) {
		polyfillFeatures.push('json-storage');
	}
	if(!Modernizr.audio || !Modernizr.video) {
		polyfillFeatures.push('mediaelement');
	}
	if(!Modernizr.geolocation){
		polyfillFeatures.push('geolocation');
	}
	if(!Modernizr.canvas) {
		polyfillFeatures.push('canvas');
	}
	//Start polyfilling
	$.webshims.polyfill(polyfillFeatures);



}).call(this);
