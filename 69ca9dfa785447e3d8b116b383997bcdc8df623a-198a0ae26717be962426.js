(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var r=a("kvoq"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("a",{href:"https://github.com/"+i.github},"Github")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(V,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var W=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,W=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,d.default)({opacity:O?1:0,transition:W?"opacity "+v+"ms":"none"},o),k="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},W&&T,{},o,{},f),N={title:t,alt:this.state.isVisible?"":a,style:z,className:g,itemProp:S};if(h){var j=h,B=p(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},W&&T)}),B.base64&&l.default.createElement(C,{ariaHidden:!0,src:B.base64,spreadProps:N,imageVariants:j,generateSources:I}),B.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:B.tracedSVG,spreadProps:N,imageVariants:j,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(j),l.default.createElement(V,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:E},B,{imageVariants:j}))}}))}if(m){var M=m,P=p(m),F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete F.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},W&&T)}),P.base64&&l.default.createElement(C,{ariaHidden:!0,src:P.base64,spreadProps:N,imageVariants:M,generateSources:I}),P.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:P.tracedSVG,spreadProps:N,imageVariants:M,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(M),l.default.createElement(V,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:E},P,{imageVariants:M}))}}))}return null},t}(l.default.Component);W.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});W.propTypes={resolutions:R,sizes:k,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([k,u.default.arrayOf(k)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=W;t.default=T},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",b,v,l,!0,!0);f&&g&&(d((r=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},kvoq:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADxklEQVQ4y3XT7U9TVxgAcP6FffQLWRaUTOMkCyE4EeygLV1RoFgLwtQxEATB4qrgMrHgBEffhI7RQcVsASkwJbohgitFpBRkpR1QpNQWkZe20PvW+9aWWnap2SwunNzcDyfnd57nPHmeMAiC3BhGfRAMgwAAgiD0v0VtwjDs8fmof+h+GIwgtrk5y4yJwoTP58Zx6jBEXQMhAIJCbhSEYAQnnA77750ddrsdQZB3+PXCwi0uW5rOvJnF621qtBonQTeGerwk5PQsWxCbGVl3wEs20ZeZqR/vtprnUAz7L7swh2Otp+T07I8lvcW81pjIsYxYsOXafHvDOD/TXMyCi5gr/LTuE0mXInfdYMROP9NgJLmV1luMen2G+53T4ny/4S6pLA9UcxbKmFr23r8zDowx90wxIobiwu/GhffSI37LTjCNaFAiBENUCWBktUNCTncFrI/e3DlPVrA2BCzXBTZ8Ns6atnfo848mMqJGeLFaXrRtYtS9DVOVxIkV/Tg8/GvA1PWmIcfz7dHZ/GNDWfS+1ENWKn7S7jZ61A/Mw120fUttjbDXF4KDC6ASeN7n76/brM8GBKx5pfiBQlzAjHnB/dT8RWTn8YTyQl5HXropdZ99chTGSSjogxgEQJQgLBMBZZG/JnPjSspm5QmvOA8Qcr1CjruU8WcmXZWbZjwZq038cKaWT2UKBQsegmcHA4p8WFb4QpprrMxAuqsCBtWmrtVw6zt6NJ0RdbhPcFx7mT2rvAGjWAjeercbW31JNpesliUvKi4s9d/EXz4gltWopW/6vrQy+2hDaZauqdjQInS+ssBuNBQHF9V7ry2udhFed9qhvOzS1CO6n51P5YsD4hlVxUj9WX1z1dahf8Nux8EuB71+90MFUMZca7u68lBolH+lFefoGgsGChKnbstQ3wbocr1rz20YcEEYAZqNCyej58/Er7eXv7pX8Vx+ZrCS03owXN99B/NugMBOmMqHmps1p0mUr47fNcraP998Tt/0de/5pCuffDDw+BePxw/siIOVhxFyZW3sr8Gi/mraIyF7WHJKdZFRnhvR01NLEH4QBHbGEDW6mH3VOGmseKYX1F6Pbyn+TFJ4kM3a8301XaftwHDf1szugAFqrheX1erhi2Pj/EvfJHCP0Dk0Gpezv0pI+0mSoBvtxDDybfz3MHUlAoKLxjnRHxr+E3Ve++3k9JT0IzHJkupDohpaUz1TIWdZbVMoilP+PUz1OA6sj+gNgidPSzWDBZPjOXLRKQb9WKMsUSZLkUpT62riVV1Xgxj8BzoXeujp6w+2AAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/62c15bb5dd224831642b55d87b7f2cfb/8ba1e/avatar.png","srcSet":"/static/62c15bb5dd224831642b55d87b7f2cfb/8ba1e/avatar.png 1x,\\n/static/62c15bb5dd224831642b55d87b7f2cfb/f937a/avatar.png 1.5x,\\n/static/62c15bb5dd224831642b55d87b7f2cfb/71eb7/avatar.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"许两会","summary":"生活和工作在深圳的前端工程师。作为一名工程师，总要表达点什么。"},"social":{"twitter":"twomeetings"}}}}}')}}]);
//# sourceMappingURL=69ca9dfa785447e3d8b116b383997bcdc8df623a-198a0ae26717be962426.js.map