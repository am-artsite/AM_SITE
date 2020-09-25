(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 500,
	height: 400,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"cadr1.jpg", id:"cadr1"},
		{src:"cadr2.jpg", id:"cadr2"},
		{src:"cadr3.jpg", id:"cadr3"},
		{src:"cadr4.jpg", id:"cadr4"},
		{src:"cadr5.jpg", id:"cadr5"},
		{src:"proektor.png", id:"proektor"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cadr1 = function() {
	this.initialize(img.cadr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,400);


(lib.cadr2 = function() {
	this.initialize(img.cadr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,400);


(lib.cadr3 = function() {
	this.initialize(img.cadr3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,400);


(lib.cadr4 = function() {
	this.initialize(img.cadr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,400);


(lib.cadr5 = function() {
	this.initialize(img.cadr5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,400);


(lib.proektor = function() {
	this.initialize(img.proektor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,92);


(lib.proektor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.proektor();
	this.instance.setTransform(-81,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-46,162,92);


(lib.card3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cadr3();
	this.instance.setTransform(-207,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-200,414,400);


(lib.cadr5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cadr5();
	this.instance.setTransform(-207,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-200,414,400);


(lib.cadr4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cadr4();
	this.instance.setTransform(-207,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-200,414,400);


(lib.cadr2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cadr2();
	this.instance.setTransform(-207,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-200,414,400);


(lib.cadr1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cadr1();
	this.instance.setTransform(-207,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-200,414,400);


// stage content:
(lib.movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// proektor
	this.instance = new lib.proektor_1();
	this.instance.setTransform(419,354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(446));

	// cadr5
	this.instance_1 = new lib.cadr5_1();
	this.instance_1.setTransform(207,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(356).to({_off:false},0).to({alpha:1},6).wait(77).to({alpha:0},6).wait(1));

	// cadr4
	this.instance_2 = new lib.cadr4_1();
	this.instance_2.setTransform(207,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(267).to({_off:false},0).to({alpha:1},6).wait(77).to({alpha:0},6).to({_off:true},1).wait(89));

	// cadr3
	this.instance_3 = new lib.card3();
	this.instance_3.setTransform(207,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(178).to({_off:false},0).to({alpha:1},6).wait(77).to({alpha:0},6).to({_off:true},1).wait(178));

	// cadr2
	this.instance_4 = new lib.cadr2_1();
	this.instance_4.setTransform(207,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:1},6).wait(77).to({alpha:0},6).to({_off:true},1).wait(267));

	// cadr1
	this.instance_5 = new lib.cadr1_1();
	this.instance_5.setTransform(207,200);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},6).wait(77).to({alpha:0},6).to({_off:true},1).wait(356));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,200,500,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;