(function(e){Modernizr.addTest("csstransformspreserve3d",function(){var k=Modernizr.prefixed("transformStyle");var j="preserve-3d";var i;if(!k){return false}k=k.replace(/([A-Z])/g,function(m,l){return"-"+l.toLowerCase()}).replace(/^ms-/,"-ms-");Modernizr.testStyles("#modernizr{"+k+":"+j+";}",function(l,m){i=e.getComputedStyle?getComputedStyle(l,null).getPropertyValue(k):""});return(i===j)});var c={transitions:Modernizr.csstransitions,preserve3d:Modernizr.csstransformspreserve3d},b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},h=b[Modernizr.prefixed("transition")];function g(j,i){for(var k in i){if(i.hasOwnProperty(k)){j[k]=i[k]}}return j}function f(l){var r=[],u=l.length,s=l[0].length;for(var q=0;q<u;q++){r=r.concat(l[q])}r=a(r);var m=[],t=0;for(var p=0;p<u;p++){var o=[];for(var n=0;n<s;n++){o.push(r[t]);t++}m.push(o)}return m}function a(n){var j=n.length,l,k;while(j){k=Math.floor(Math.random()*j--);l=n[j];n[j]=n[k];n[k]=l}return n}function d(j,i){this.el=j;this.inner=this.el.querySelector("div");this.allItems=[].slice.call(this.inner.children);this.allItemsCount=this.allItems.length;if(!this.allItemsCount){return}this.items=[].slice.call(this.inner.querySelectorAll("figure:not([data-dummy])"));this.itemsCount=this.items.length;this.current=0;this.options=g({},this.options);g(this.options,i);this._init()}d.prototype.options={};d.prototype._init=function(){this.currentItem=this.items[this.current];this._addNavigation();this._getSizes();this._initEvents()};d.prototype._addNavigation=function(){this.nav=document.createElement("nav");var j="";for(var k=0;k<this.itemsCount;++k){j+="<span></span>"}this.nav.innerHTML=j;this.el.appendChild(this.nav);this.navDots=[].slice.call(this.nav.children)};d.prototype._initEvents=function(){var i=this,k=classie.hasClass(this.el,"photostack-start"),j=function(){var l=function(){if(c.transitions){classie.addClass(i.el,"photostack-transition")}};if(k){this.removeEventListener("click",j);classie.removeClass(i.el,"photostack-start");l()}else{i.openDefault=true;setTimeout(l,25)}i.started=true;i._showPhoto(i.current)};if(k){this._shuffle();this.el.addEventListener("click",j)}else{j()}this.navDots.forEach(function(m,l){m.addEventListener("click",function(){if(l===i.current){i._rotateItem()}else{var n=function(){i._showPhoto(l)};if(i.flipped){i._rotateItem(n)}else{n()}}})});e.addEventListener("resize",function(){i._resizeHandler()})};d.prototype._resizeHandler=function(){var i=this;function j(){i._resize();i._resizeTimeout=null}if(this._resizeTimeout){clearTimeout(this._resizeTimeout)}this._resizeTimeout=setTimeout(j,100)};d.prototype._resize=function(){var i=this,j=function(){i._shuffle(true)};this._getSizes();if(this.started&&this.flipped){this._rotateItem(j)}else{j()}};d.prototype._showPhoto=function(i){if(this.isShuffling){return false}this.isShuffling=true;if(classie.hasClass(this.currentItem,"photostack-flip")){this._removeItemPerspective();classie.removeClass(this.navDots[this.current],"flippable")}classie.removeClass(this.navDots[this.current],"current");classie.removeClass(this.currentItem,"photostack-current");this.current=i;this.currentItem=this.items[this.current];classie.addClass(this.navDots[this.current],"current");if(this.currentItem.querySelector(".photostack-back")){classie.addClass(this.navDots[i],"flippable")}this._shuffle()};d.prototype._shuffle=function(i){var o=i?1:this.currentItem.getAttribute("data-shuffle-iteration")||1;if(o<=0||!this.started||this.openDefault){o=1}if(this.openDefault){classie.addClass(this.currentItem,"photostack-flip");this.openDefault=false;this.isShuffling=false}var t=0.5,u=Math.ceil(this.sizes.inner.width/(this.sizes.item.width*t)),j=Math.ceil(this.sizes.inner.height/(this.sizes.item.height*t)),r=u*this.sizes.item.width*t+this.sizes.item.width/2-this.sizes.inner.width,p=j*this.sizes.item.height*t+this.sizes.item.height/2-this.sizes.inner.height,l=r/2,k=p/2,q=35,n=-35,s=this,m=function(){--o;var w=[];for(var D=0;D<j;++D){var x=w[D]=[];for(var C=0;C<u;++C){var H=C*(s.sizes.item.width*t)-l,G=D*(s.sizes.item.height*t)-k,B=0,A=0;if(s.started&&o===0){var F=s._isOverlapping({x:H,y:G});if(F.overlapping){B=F.noOverlap.x;A=F.noOverlap.y;var v=Math.floor(Math.random()*3);switch(v){case 0:B=0;break;case 1:A=0;break}}}x[C]={x:H+B,y:G+A}}}w=f(w);var z=0,E=0,y=0;s.allItems.forEach(function(M,L){if(z===u-1){E=E===j-1?0:E+1;z=1}else{++z}var K=Math.floor(Math.random()*u),I=Math.floor(Math.random()*j),N=w[E][z-1],O={x:N.x,y:N.y},J=function(){++y;if(c.transitions){this.removeEventListener(h,J)}if(y===s.allItemsCount){if(o>0){m.call()}else{classie.addClass(s.currentItem,"photostack-flip");s.isShuffling=false;if(typeof s.options.callback==="function"){s.options.callback(s.currentItem)}}}};if(s.items.indexOf(M)===s.current&&s.started&&o===0){s.currentItem.style.WebkitTransform="translate("+s.centerItem.x+"px,"+s.centerItem.y+"px) rotate(0deg)";s.currentItem.style.msTransform="translate("+s.centerItem.x+"px,"+s.centerItem.y+"px) rotate(0deg)";s.currentItem.style.transform="translate("+s.centerItem.x+"px,"+s.centerItem.y+"px) rotate(0deg)";if(s.currentItem.querySelector(".photostack-back")){s._addItemPerspective()}classie.addClass(s.currentItem,"photostack-current")}else{M.style.WebkitTransform="translate("+O.x+"px,"+O.y+"px) rotate("+Math.floor(Math.random()*(q-n+1)+n)+"deg)";M.style.msTransform="translate("+O.x+"px,"+O.y+"px) rotate("+Math.floor(Math.random()*(q-n+1)+n)+"deg)";M.style.transform="translate("+O.x+"px,"+O.y+"px) rotate("+Math.floor(Math.random()*(q-n+1)+n)+"deg)"}if(s.started){if(c.transitions){M.addEventListener(h,J)}else{J()}}})};m.call()};d.prototype._getSizes=function(){this.sizes={inner:{width:this.inner.offsetWidth,height:this.inner.offsetHeight},item:{width:this.currentItem.offsetWidth,height:this.currentItem.offsetHeight}};this.centerItem={x:this.sizes.inner.width/2-this.sizes.item.width/2,y:this.sizes.inner.height/2-this.sizes.item.height/2}};d.prototype._isOverlapping=function(l){var p=this.sizes.item.width+this.sizes.item.width/3,o=this.sizes.item.height+this.sizes.item.height/3,q={x:this.sizes.inner.width/2-p/2,y:this.sizes.inner.height/2-o/2},n=this.sizes.item.width,m=this.sizes.item.height;if(!((l.x+n)<q.x||l.x>(q.x+p)||(l.y+m)<q.y||l.y>(q.y+o))){var k=Math.random()<0.5,s=Math.floor(Math.random()*(n/4+1)),r=Math.floor(Math.random()*(m/4+1)),j=k?(l.x-q.x+n)*-1-s:(q.x+p)-(l.x+n)+n+s,i=k?(l.y-q.y+m)*-1-r:(q.y+o)-(l.y+m)+m+r;return{overlapping:true,noOverlap:{x:j,y:i}}}return{overlapping:false}};d.prototype._addItemPerspective=function(){classie.addClass(this.el,"photostack-perspective")};d.prototype._removeItemPerspective=function(){classie.removeClass(this.el,"photostack-perspective");classie.removeClass(this.currentItem,"photostack-flip")};d.prototype._rotateItem=function(k){if(classie.hasClass(this.el,"photostack-perspective")&&!this.isRotating&&!this.isShuffling){this.isRotating=true;var i=this,j=function(){if(c.transitions&&c.preserve3d){this.removeEventListener(h,j)}i.isRotating=false;if(typeof k==="function"){k()}};if(this.flipped){classie.removeClass(this.navDots[this.current],"flip");if(c.preserve3d){this.currentItem.style.WebkitTransform="translate("+this.centerItem.x+"px,"+this.centerItem.y+"px) rotateY(0deg)";this.currentItem.style.transform="translate("+this.centerItem.x+"px,"+this.centerItem.y+"px) rotateY(0deg)"}else{classie.removeClass(this.currentItem,"photostack-showback")}}else{classie.addClass(this.navDots[this.current],"flip");if(c.preserve3d){this.currentItem.style.WebkitTransform="translate("+this.centerItem.x+"px,"+this.centerItem.y+"px) translate("+this.sizes.item.width+"px) rotateY(-179.9deg)";this.currentItem.style.transform="translate("+this.centerItem.x+"px,"+this.centerItem.y+"px) translate("+this.sizes.item.width+"px) rotateY(-179.9deg)"}else{classie.addClass(this.currentItem,"photostack-showback")}}this.flipped=!this.flipped;if(c.transitions&&c.preserve3d){this.currentItem.addEventListener(h,j)}else{j()}}};e.Photostack=d})(window);
