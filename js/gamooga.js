

/* gamooga.js 14/04/2013 */
var swfobject=function(){function a(){if(!A){try{var e=i.getElementsByTagName("body")[0].appendChild(i.createElement("span"));e.parentNode.removeChild(e)}catch(w){return}A=!0;for(var e=H.length,a=0;a<e;a++)H[a]()}}function c(e){A?e():H[H.length]=e}function b(e){if(typeof o.addEventListener!=l)o.addEventListener("load",e,!1);else if(typeof i.addEventListener!=l)i.addEventListener("load",e,!1);else if(typeof o.attachEvent!=l){var w=o;w.attachEvent("onload",e);B[B.length]=[w,"onload",e]}else if("function"==
typeof o.onload){var a=o.onload;o.onload=function(){a();e()}}else o.onload=e}function d(){var e=y.length;if(0<e)for(var w=0;w<e;w++){var a=y[w].id,b=y[w].callbackFn,c={success:!1,id:a};if(0<g.pv[0]){var d=p(a);if(d)if(t(y[w].swfVersion)&&!(g.wk&&312>g.wk))v(a,!0),b&&(c.success=!0,c.ref=f(a),b(c));else if(y[w].expressInstall&&j()){c={};c.data=y[w].expressInstall;c.width=d.getAttribute("width")||"0";c.height=d.getAttribute("height")||"0";d.getAttribute("class")&&(c.styleclass=d.getAttribute("class"));
d.getAttribute("align")&&(c.align=d.getAttribute("align"));for(var i={},d=d.getElementsByTagName("param"),k=d.length,h=0;h<k;h++)"movie"!=d[h].getAttribute("name").toLowerCase()&&(i[d[h].getAttribute("name")]=d[h].getAttribute("value"));x(c,i,a,b)}else E(d),b&&b(c)}else if(v(a,!0),b){if((a=f(a))&&typeof a.SetVariable!=l)c.success=!0,c.ref=a;b(c)}}}function f(e){var a=null;if((e=p(e))&&"OBJECT"==e.nodeName)typeof e.SetVariable!=l?a=e:(e=e.getElementsByTagName(k)[0])&&(a=e);return a}function j(){return!I&&
t("6.0.65")&&(g.win||g.mac)&&!(g.wk&&312>g.wk)}function x(e,a,b,c){I=!0;M=c||null;P={success:!1,id:b};var d=p(b);if(d){"OBJECT"==d.nodeName?(F=m(d),J=null):(F=d,J=b);e.id=Q;if(typeof e.width==l||!/%$/.test(e.width)&&310>parseInt(e.width,10))e.width="310";if(typeof e.height==l||!/%$/.test(e.height)&&137>parseInt(e.height,10))e.height="137";i.title=i.title.slice(0,47)+" - Flash Player Installation";c=g.ie&&g.win?"ActiveX":"PlugIn";c="MMredirectURL="+o.location.toString().replace(/&/g,"%26")+"&MMplayerType="+
c+"&MMdoctitle="+i.title;a.flashvars=typeof a.flashvars!=l?a.flashvars+("&"+c):c;g.ie&&(g.win&&4!=d.readyState)&&(c=i.createElement("div"),b+="SWFObjectNew",c.setAttribute("id",b),d.parentNode.insertBefore(c,d),d.style.display="none",function(){d.readyState==4?d.parentNode.removeChild(d):setTimeout(arguments.callee,10)}());q(e,a,b)}}function E(e){if(g.ie&&g.win&&4!=e.readyState){var a=i.createElement("div");e.parentNode.insertBefore(a,e);a.parentNode.replaceChild(m(e),a);e.style.display="none";(function(){4==
e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)})()}else e.parentNode.replaceChild(m(e),e)}function m(e){var a=i.createElement("div");if(g.win&&g.ie)a.innerHTML=e.innerHTML;else if(e=e.getElementsByTagName(k)[0])if(e=e.childNodes)for(var b=e.length,c=0;c<b;c++)!(1==e[c].nodeType&&"PARAM"==e[c].nodeName)&&8!=e[c].nodeType&&a.appendChild(e[c].cloneNode(!0));return a}function q(e,a,b){var c,d=p(b);if(g.wk&&312>g.wk)return c;if(d)if(typeof e.id==l&&(e.id=b),g.ie&&g.win){var f=
"",h;for(h in e)e[h]!=Object.prototype[h]&&("data"==h.toLowerCase()?a.movie=e[h]:"styleclass"==h.toLowerCase()?f+=' class="'+e[h]+'"':"classid"!=h.toLowerCase()&&(f+=" "+h+'="'+e[h]+'"'));h="";for(var j in a)a[j]!=Object.prototype[j]&&(h+='<param name="'+j+'" value="'+a[j]+'" />');d.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+h+"</object>";K[K.length]=e.id;c=p(e.id)}else{j=i.createElement(k);j.setAttribute("type",L);for(var q in e)e[q]!=Object.prototype[q]&&("styleclass"==
q.toLowerCase()?j.setAttribute("class",e[q]):"classid"!=q.toLowerCase()&&j.setAttribute(q,e[q]));for(f in a)a[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&(e=j,h=f,q=a[f],b=i.createElement("param"),b.setAttribute("name",h),b.setAttribute("value",q),e.appendChild(b));d.parentNode.replaceChild(j,d);c=j}return c}function h(e){var a=p(e);a&&"OBJECT"==a.nodeName&&(g.ie&&g.win?(a.style.display="none",function(){if(4==a.readyState){var b=p(e);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);
b.parentNode.removeChild(b)}}else setTimeout(arguments.callee,10)}()):a.parentNode.removeChild(a))}function p(e){var a=null;try{a=i.getElementById(e)}catch(b){}return a}function t(a){var b=g.pv,a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function r(a,b,c,d){if(!g.ie||!g.mac){var f=i.getElementsByTagName("head")[0];if(f){c=c&&"string"==typeof c?c:"screen";d&&(N=s=null);if(!s||
N!=c)d=i.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",c),s=f.appendChild(d),g.ie&&(g.win&&typeof i.styleSheets!=l&&0<i.styleSheets.length)&&(s=i.styleSheets[i.styleSheets.length-1]),N=c;g.ie&&g.win?s&&typeof s.addRule==k&&s.addRule(a,b):s&&typeof i.createTextNode!=l&&s.appendChild(i.createTextNode(a+" {"+b+"}"))}}}function v(a,b){if(R){var c=b?"visible":"hidden";A&&p(a)?p(a).style.visibility=c:r("#"+a,"visibility:"+c)}}function u(a){return null!=/[\\\"<>\.;]/.exec(a)&&
typeof encodeURIComponent!=l?encodeURIComponent(a):a}var l="undefined",k="object",L="application/x-shockwave-flash",Q="SWFObjectExprInst",o=window,i=document,z=navigator,S=!1,H=[function(){if(S){var a=i.getElementsByTagName("body")[0],b=i.createElement(k);b.setAttribute("type",L);var c=a.appendChild(b);if(c){var f=0;(function(){if(typeof c.GetVariable!=l){var h=c.GetVariable("$version");h&&(h=h.split(" ")[1].split(","),g.pv=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}else if(10>f){f++;
setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;d()})()}else d()}else d()}],y=[],K=[],B=[],F,J,M,P,A=!1,I=!1,s,N,R=!0,g,U=typeof i.getElementById!=l&&typeof i.getElementsByTagName!=l&&typeof i.createElement!=l,C=z.userAgent.toLowerCase(),D=z.platform.toLowerCase(),V=D?/win/.test(D):/win/.test(C),D=D?/mac/.test(D):/mac/.test(C),C=/webkit/.test(C)?parseFloat(C.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,O=!+"\v1",G=[0,0,0],n=null;if(typeof z.plugins!=l&&typeof z.plugins["Shockwave Flash"]==
k){if((n=z.plugins["Shockwave Flash"].description)&&!(typeof z.mimeTypes!=l&&z.mimeTypes[L]&&!z.mimeTypes[L].enabledPlugin))S=!0,O=!1,n=n.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),G[0]=parseInt(n.replace(/^(.*)\..*$/,"$1"),10),G[1]=parseInt(n.replace(/^.*\.(.*)\s.*$/,"$1"),10),G[2]=/[a-zA-Z]/.test(n)?parseInt(n.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if(typeof o.ActiveXObject!=l)try{var T=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(T&&(n=T.GetVariable("$version")))O=!0,n=n.split(" ")[1].split(","),
G=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]}catch(W){}g={w3:U,pv:G,wk:C,ie:O,win:V,mac:D};g.w3&&((typeof i.readyState!=l&&"complete"==i.readyState||typeof i.readyState==l&&(i.getElementsByTagName("body")[0]||i.body))&&a(),A||(typeof i.addEventListener!=l&&i.addEventListener("DOMContentLoaded",a,!1),g.ie&&g.win&&(i.attachEvent("onreadystatechange",function(){"complete"==i.readyState&&(i.detachEvent("onreadystatechange",arguments.callee),a())}),o==top&&function(){if(!A){try{i.documentElement.doScroll("left")}catch(b){setTimeout(arguments.callee,
0);return}a()}}()),g.wk&&function(){A||(/loaded|complete/.test(i.readyState)?a():setTimeout(arguments.callee,0))}(),b(a)));g.ie&&g.win&&window.attachEvent("onunload",function(){for(var a=B.length,b=0;b<a;b++)B[b][0].detachEvent(B[b][1],B[b][2]);a=K.length;for(b=0;b<a;b++)h(K[b]);for(var c in g)g[c]=null;g=null;for(var d in swfobject)swfobject[d]=null;swfobject=null});return{registerObject:function(a,b,c,d){if(g.w3&&a&&b){var f={};f.id=a;f.swfVersion=b;f.expressInstall=c;f.callbackFn=d;y[y.length]=
f;v(a,false)}else d&&d({success:false,id:a})},getObjectById:function(a){if(g.w3)return f(a)},embedSWF:function(a,b,d,f,h,i,p,r,m,u){var n={success:false,id:b};if(g.w3&&!(g.wk&&g.wk<312)&&a&&b&&d&&f&&h){v(b,false);c(function(){d=d+"";f=f+"";var c={};if(m&&typeof m===k)for(var g in m)c[g]=m[g];c.data=a;c.width=d;c.height=f;g={};if(r&&typeof r===k)for(var o in r)g[o]=r[o];if(p&&typeof p===k)for(var s in p)g.flashvars=typeof g.flashvars!=l?g.flashvars+("&"+s+"="+p[s]):s+"="+p[s];if(t(h)){o=q(c,g,b);c.id==
b&&v(b,true);n.success=true;n.ref=o}else{if(i&&j()){c.data=i;x(c,g,b,u);return}v(b,true)}u&&u(n)})}else u&&u(n)},switchOffAutoHideShow:function(){R=false},ua:g,getFlashPlayerVersion:function(){return{major:g.pv[0],minor:g.pv[1],release:g.pv[2]}},hasFlashPlayerVersion:t,createSWF:function(a,b,c){if(g.w3)return q(a,b,c)},showExpressInstall:function(a,b,c,d){g.w3&&j()&&x(a,b,c,d)},removeSWF:function(a){g.w3&&h(a)},createCSS:function(a,b,c,d){g.w3&&r(a,b,c,d)},addDomLoadEvent:c,addLoadEvent:b,getQueryParamValue:function(a){var b=
i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return u(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return u(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(I){var a=p(Q);if(a&&F){a.parentNode.replaceChild(F,a);if(J){v(J,true);if(g.ie&&g.win)F.style.display="block"}M&&M(P)}I=false}}}}();this.JSON||(this.JSON={});
(function(){function a(a){return a<10?"0"+a:a}function c(a){f.lastIndex=0;return f.test(a)?'"'+a.replace(f,function(a){var b=E[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function b(a,d){var f,t,r,v,u=j,l,k=d[a];k&&(typeof k==="object"&&typeof k.toJSON==="function")&&(k=k.toJSON(a));typeof m==="function"&&(k=m.call(d,a,k));switch(typeof k){case "string":return c(k);case "number":return isFinite(k)?String(k):"null";case "boolean":case "null":return String(k);
case "object":if(!k)return"null";j=j+x;l=[];if(Object.prototype.toString.apply(k)==="[object Array]"){v=k.length;for(f=0;f<v;f=f+1)l[f]=b(f,k)||"null";r=l.length===0?"[]":j?"[\n"+j+l.join(",\n"+j)+"\n"+u+"]":"["+l.join(",")+"]";j=u;return r}if(m&&typeof m==="object"){v=m.length;for(f=0;f<v;f=f+1){t=m[f];if(typeof t==="string")(r=b(t,k))&&l.push(c(t)+(j?": ":":")+r)}}else for(t in k)if(Object.hasOwnProperty.call(k,t))(r=b(t,k))&&l.push(c(t)+(j?": ":":")+r);r=l.length===0?"{}":j?"{\n"+j+l.join(",\n"+
j)+"\n"+u+"}":"{"+l.join(",")+"}";j=u;return r}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
f=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j,x,E={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,c,d){var f;x=j="";if(typeof d==="number")for(f=0;f<d;f=f+1)x=x+" ";else typeof d==="string"&&(x=d);if((m=c)&&typeof c!=="function"&&(typeof c!=="object"||typeof c.length!=="number"))throw Error("JSON.stringify");return b("",{"":a})};
if(typeof JSON.parse!=="function")JSON.parse=function(a,b){function c(a,d){var f,j,k=a[d];if(k&&typeof k==="object")for(f in k)if(Object.hasOwnProperty.call(k,f)){j=c(k,f);j!==void 0?k[f]=j:delete k[f]}return b.call(a,d,k)}var f;d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
""))){f=eval("("+a+")");return typeof b==="function"?c({"":f},""):f}throw new SyntaxError("JSON.parse");}})();String.prototype.leftPad=function(a,c){return a-this.length+1<=0?this:Array(a-this.length+1).join(c||"0")+this};
function GamoogaClient(a,c,b,d){this.logMsg=this.isDev=false;var f="www.gamooga.com",j="";this.gmgPort=1094;this.flpPort=843;if(a!=null){j=":8000";this.flpPort=8430;if(c!=null)this.gmgPort=c;b!=null&&(j=":"+b);if(d!=null)this.flpPort=d;this.logMsg=this.isDev=true;f=a}this.SERVER=f;this.AUTH_CONNECT_ROOM="http://"+f+j+"/auth/connect_room/";this.AUTH_CREATE_CONNECT_SESSION="http://"+f+j+"/auth/create_connect_session/";this.AUTH_CONNECT_SESSION="http://"+f+j+"/auth/connect_session/";this.sock=null;this.sessId=
0;this._onconnect=null;this._onmessage={};this._onerror=this._ondisconnect=null}GamoogaClient.CLIENT_MESSAGE=2;GamoogaClient.CLIENT_SERVER_BUSY=3;GamoogaClient.CLIENT_SERVER_ERROR=4;GamoogaClient.CLIENT_DISCONNECT=5;GamoogaClient.CLIENT_IN_DATA_EXCEED=6;GamoogaClient.CLIENT_OUT_DATA_EXCEED=7;GamoogaClient.IO_ERROR=101;GamoogaClient.SECURITY_ERROR=102;GamoogaClient.WEBSOCKET_ERROR=103;GamoogaClient.WRONG_APP_ID=201;GamoogaClient.WRONG_APP_UUID=202;GamoogaClient.APP_ID_AND_UUID_NOT_PROVIDED=203;
GamoogaClient.LIMITS_REACHED=204;GamoogaClient.GAMLET_UNDEPLOYED=205;GamoogaClient.API_ERROR=301;GamoogaClient._websocket_native=!1;GamoogaClient.ENABLE_WEBSOCKET=!1;GamoogaClient.prototype.disableLogMsg=function(){this.logMsg=false};GamoogaClient.prototype.enableLogMsg=function(){this.logMsg=true};GamoogaClient.prototype.getSessId=function(){return this.sessId};
GamoogaClient.prototype.connectToRoom=function(a,c){var b=this,d=GamoogaClient._makeXHR("POST",b.AUTH_CONNECT_ROOM);d.onload=function(){var a=JSON.parse(d.responseText);if(a.s==-1)b._reportError(GamoogaClient.WRONG_APP_UUID);else if(a.s==-2)b._reportError(GamoogaClient.APP_ID_AND_UUID_NOT_PROVIDED);else if(a.s==-3)b._reportError(GamoogaClient.WRONG_APP_ID);else if(a.s==-4)b._reportError(GamoogaClient.LIMITS_REACHED);else if(a.s==-5)b._reportError(GamoogaClient.GAMLET_UNDEPLOYED);else{b.authKey=a.ak;
b.isRoomSess=1;b.sessId=0;b.connectRoomSess(b._getServer(a),a.gsp,b._getWSServer(a),a.wsp)}};d.onerror=function(){b._reportError(GamoogaClient.API_ERROR)};d.onabort=function(){b._reportError(GamoogaClient.API_ERROR)};d.setRequestHeader("Content-Type","text/plain");d.send("game_id="+a+"&game_uuid="+c)};
GamoogaClient.prototype.createConnectToSession=function(a,c){var b=this,d=GamoogaClient._makeXHR("POST",b.AUTH_CREATE_CONNECT_SESSION);d.onload=function(){var a=JSON.parse(d.responseText);if(a.s==-1)b._reportError(GamoogaClient.WRONG_APP_UUID);else if(a.s==-2)b._reportError(GamoogaClient.APP_ID_AND_UUID_NOT_PROVIDED);else if(a.s==-3)b._reportError(GamoogaClient.WRONG_APP_ID);else if(a.s==-4)b._reportError(GamoogaClient.LIMITS_REACHED);else if(a.s==-5)b._reportError(GamoogaClient.GAMLET_UNDEPLOYED);
else{b.authKey=a.ak;b.sessId=a.sess;b.isRoomSess=2;b.connectRoomSess(b._getServer(a),a.gsp,b._getWSServer(a),a.wsp)}};d.onerror=function(){b._reportError(GamoogaClient.API_ERROR)};d.onabort=function(){b._reportError(GamoogaClient.API_ERROR)};d.setRequestHeader("Content-Type","text/plain");d.send("game_id="+a+"&game_uuid="+c)};
GamoogaClient.prototype.connectToSession=function(a,c){var b=this,d=GamoogaClient._makeXHR("POST",b.AUTH_CONNECT_SESSION);d.onload=function(){var c=JSON.parse(d.responseText);if(c.s==-1)b._reportError(GamoogaClient.WRONG_APP_UUID);else if(c.s==-2)b._reportError(GamoogaClient.APP_ID_AND_UUID_NOT_PROVIDED);else if(c.s==-3)b._reportError(GamoogaClient.WRONG_APP_ID);else if(c.s==-4)b._reportError(GamoogaClient.LIMITS_REACHED);else if(c.s==-5)b._reportError(GamoogaClient.GAMLET_UNDEPLOYED);else{b.authKey=
c.ak;b.sessId=a;b.isRoomSess=2;b.connectRoomSess(b._getServer(c),c.gsp,b._getWSServer(c),c.wsp)}};d.onerror=function(){b._reportError(GamoogaClient.API_ERROR)};d.onabort=function(){b._reportError(GamoogaClient.API_ERROR)};d.setRequestHeader("Content-Type","text/plain");d.send("sess_id="+a+"&game_uuid="+c)};GamoogaClient.prototype._getServer=function(a){if(this.isDev)a=this.SERVER;else{a=a.gsh;if(a=="127.0.0.1"||a=="localhost")a="www.gamooga.com"}return a};
GamoogaClient.prototype._getWSServer=function(a){return this.isDev?this.SERVER:a.wsh};
GamoogaClient.prototype.connectRoomSess=function(a,c,b,d){function f(a){h._on_read(a)}function j(a){h._on_ws_error(a)}function x(a){h._on_io_error(a)}function E(a){h._on_security_error(a)}function m(){h._on_close()}function q(){h._on_open()}var h=this;h.about_to_disconnect=false;h.buffer="";h.state=1;if(GamoogaClient._websocket_native){h.isDev&&alert("GAMOOGA: WebSocket support is only available when connecting to production.  Please set ENABLE_WEBSOCKET to false.");h.sock=new WebSocket("ws://"+b+
":"+d,"gmg-text");h.sock.onopen=q;h.sock.onmessage=function(a){f(a.data)};h.sock.onerror=j;h.sock.onclose=m}else{h.sock=new FlashSocket({on_data:f,on_io_error:x,on_security_error:E,on_close:m,on_connect:q});h.sock.loadPolicyFile("xmlsocket://"+a+":"+h.flpPort);h.sock.connect(a,c-0)}};GamoogaClient.prototype._on_open=function(){var a;this.isRoomSess==1?a=1:this.isRoomSess==2&&(a=501);this._send({type:a,id:this.authKey,data:""});this._debug("connected");this._onconnect&&this._onconnect()};
GamoogaClient.prototype._on_read=function(a){for(;a.length>0;){if(this.state==1){if(a.length<=8-this.buffer.length){this.buffer=this.buffer+a;a=""}else{buf_len_now=8-this.buffer.length;this.buffer=this.buffer+a.substr(0,buf_len_now);a=a.substr(buf_len_now)}if(this.buffer.length==8){this.recv_len=this.buffer-0;this.buffer="";this.state=2}}if(this.state==2){str_len=a.length;if(this.recv_len<=str_len){this.buffer=this.buffer+a.substr(0,this.recv_len);a=a.substr(this.recv_len);this.recv_len=0}else{this.buffer=
this.buffer+a;this.recv_len=this.recv_len-a.length;a=""}if(this.recv_len==0){var c=JSON.parse(this.buffer),b=false;if(c.type==GamoogaClient.CLIENT_MESSAGE){var d=JSON.parse(c.data);this._debug("received message [type,msg] - "+c.data);if(this._onmessage[d[0]])try{this._onmessage[d[0]](d[1])}catch(f){b=f}}else if(c.type==GamoogaClient.CLIENT_DISCONNECT)this.about_to_disconnect=true;else if(c.type==GamoogaClient.CLIENT_SERVER_BUSY||c.type==GamoogaClient.CLIENT_SERVER_ERROR||c.type==GamoogaClient.CLIENT_IN_DATA_EXCEED||
c.type==GamoogaClient.CLIENT_OUT_DATA_EXCEED)try{this._reportError(c.type)}catch(j){b=j}this.state=1;this.buffer="";if(b)throw b;}}}};GamoogaClient.prototype._on_close=function(){this._debug("connection closed");this._ondisconnect&&this._ondisconnect()};GamoogaClient.prototype._on_ws_error=function(){this._reportError(GamoogaClient.WEBSOCKET_ERROR)};GamoogaClient.prototype._on_io_error=function(){this._reportError(GamoogaClient.IO_ERROR)};GamoogaClient.prototype._on_security_error=function(){this._reportError(GamoogaClient.SECURITY_ERROR)};
GamoogaClient.prototype._reportError=function(a){this.isDev&&console.log("GAMOOGA: gamooga error: "+a);this._onerror?this._onerror(a):this.isDev&&console.log("GAMOOGA:  ...implement 'onerror' to catch the error")};GamoogaClient.prototype._debug=function(a){this.logMsg&&console.log("GAMOOGA: "+a)};GamoogaClient.prototype.send=function(a,c){var b=JSON.stringify([a,c]);this._debug("sending message [type, msg] - "+b);var d={};d.type=this.isRoomSess==1?2:502;d.data=b;this._send(d)};
GamoogaClient.prototype.disconnect=function(){this._debug("connection to close");this.sock.close()};GamoogaClient.prototype._send=function(a){str=JSON.stringify(a);len=new String(str.length.toString(16));len=len.leftPad(8);this.sock.send(len+str)};GamoogaClient.prototype.onconnect=function(a){this._onconnect=a};GamoogaClient.prototype.onmessage=function(a,c){this._onmessage[a]=c};GamoogaClient.prototype.ondisconnect=function(a){this._ondisconnect=a};
GamoogaClient.prototype.onerror=function(a){this._onerror=a};GamoogaClient._makeXHR=function(a,c){var b=new XMLHttpRequest;if("withCredentials"in b)b.open(a,c,true);else if(typeof XDomainRequest!="undefined"){b=new XDomainRequest;b.open(a,c)}else b=null;return b};
GamoogaClient.init=function(a,c){GamoogaClient.swfUrl=a;GamoogaClient._onInit=c;if(GamoogaClient.ENABLE_WEBSOCKET&&window.WebSocket){GamoogaClient._websocket_native=true;setTimeout(function(){GamoogaClient._onInit()},0)}else if(GamoogaClient.ENABLE_WEBSOCKET&&window.MozWebSocket){GamoogaClient._websocket_native=true;window.WebSocket=window.MozWebSocket;setTimeout(function(){GamoogaClient._onInit()},0)}else{GamoogaClient._websocket_native=false;swfobject.addDomLoadEvent(GamoogaClient._addSocketSwf)}};
GamoogaClient._addSocketSwf=function(){var a=document.createElement("div");document.body.appendChild(a);var c=document.createElement("div");c.setAttribute("id","__gmg_flash_sock_bridge");a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.appendChild(c);swfobject.embedSWF(GamoogaClient.swfUrl+"?onloadcallback=__gmg_init_wrapper","__gmg_flash_sock_bridge","28","28","9.0",{},{},{id:"__gmg_flash_sock_bridge",name:"__gmg_flash_sock_bridge"})};
function __gmg_init_wrapper(){if(!window.FlashSocket){window.FlashSocket=new function(a){var b=function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);return this.init.apply(this)};b.prototype=a;b.constructor=arguments.callee;return b}({init:function(){this._instance=""+window.FlashSocket._instances.length;window.FlashSocket._instances.push(this)},close:function(){window.FlashSocket._instances[this._instance]=null;window.FlashSocket._bridge.close(this._instance)},send:function(a){window.FlashSocket._bridge.write(this._instance,
a)},connect:function(a,b){window.FlashSocket._bridge.connect(this._instance,a,b)},loadPolicyFile:function(a){window.FlashSocket._bridge.loadPolicyFile(a)}});window.FlashSocket._instances=[];var a=function(a){for(var a=document.getElementsByTagName(a),b=0;b<a.length;b++)if(a[b].CAN_I_HAS_SOCKET)return a[b]};window.FlashSocket._bridge=a("embed")||a("object")}document.getElementById("__gmg_flash_sock_bridge").parentNode.style.top="-1000px";document.getElementById("__gmg_flash_sock_bridge").parentNode.style.left=
"-1000px";GamoogaClient._onInit&&setTimeout(function(){GamoogaClient._onInit()},0)}(function(){typeof console==="undefined"&&(console={});if(typeof console.log==="undefined")console.log=function(){};if(typeof console.dir==="undefined")console.dir=function(){}})();