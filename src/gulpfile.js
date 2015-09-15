var gulp = require('gulp');
var bower  = require('gulp-bower');

var vendor_dest = "scripts/vendor";

var vendors_srcs =["bower_components/phaser/build/phaser.js"];


gulp.task("default",["bower","vendor-files"],function  () {
	
});

gulp.task("bower",function  () {
	return bower();	
});

gulp.task("vendor-files",function  () {
	gulp.src(vendors_srcs)
		.pipe(gulp.dest(vendor_dest));
});