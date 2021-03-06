// ========================================
// Your JavaScript goes here
// ========================================
// $("button").click(function() {
//   $("html,body").animate(
//     {
//       scrollTop: $(".second").offset().top
//     },
//     "slow"
//   );
// });
// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle');
// easing functions http://goo.gl/5HLl8
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.7.1 (22-10-2017 02:28)
 * Licensed under MIT
 * Copyright 2017 Hasan Aydoğdu <hsnaydd@gmail.com>
 */

"use strict";
var MoveTo=function(){function t(t,e,n,o){return t/=o,t--,-n*(t*t*t*t-1)+e}function e(t,e){var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),Object.keys(e).forEach(function(t){n[t]=e[t]}),n}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=e(r,n),this.easeFunctions=e({easeOutQuart:t},o)}function i(t,e){var o={};return Object.keys(e).forEach(function(e){var i=t.getAttribute("data-mt-"+n(e));i&&(o[e]=isNaN(i)?i:parseInt(i,10))}),o}var r={tolerance:0,duration:800,easing:"easeOutQuart",callback:function(){}};return o.prototype.registerTrigger=function(t,n){var o=this;if(t){var r=t.getAttribute("href")||t.getAttribute("data-target"),a=r&&"#"!==r?document.getElementById(r.substring(1)):document.body,u=e(this.options,i(t,this.options));"function"==typeof n&&(u.callback=n);var c=function(t){t.preventDefault(),o.move(a,u)};return t.addEventListener("click",c,!1),function(){return t.removeEventListener("click",c,!1)}}},o.prototype.move=function(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===t||t){o=e(this.options,o);var i="number"==typeof t?t:t.getBoundingClientRect().top,r=window.pageYOffset,a=null,u=void 0;i-=o.tolerance;var c=function e(c){var s=window.pageYOffset;a||(a=c-1);var f=c-a;if(u&&(i>0&&u>s||i<0&&u<s))return o.callback(t);u=s;var d=n.easeFunctions[o.easing](f,r,i,o.duration);window.scroll(0,d),f<o.duration?window.requestAnimationFrame(e):(window.scroll(0,i+r),o.callback(t))};window.requestAnimationFrame(c)}},o.prototype.addEaseFunction=function(t,e){this.easeFunctions[t]=e},o}();"undefined"!=typeof module?module.exports=MoveTo:window.MoveTo=MoveTo;

window.onload = function () {
  const moveTo = new MoveTo();

  document.getElementById("scroll-thing")
    .addEventListener('click', () => {
      console.log('yo!')
      var target = document.getElementById("T1")
      moveTo.move(target.offsetTop);
      console.log(moveTo.move);
    });
};
