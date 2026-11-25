var e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1009,s=1012,c=1014,l=1015,u=1016,d=1017,f=1018,p=1020,m=1023,h=1026,g=1027,_=1029,v=1030,y=1031,b=1033,x=2300,S=2301,C=2302,w=2303,T=2400,E=2401,D=2402,O=`srgb`,k=`srgb-linear`,A=`linear`,j=`srgb`,M=7680,N=35044,ee=2e3;function P(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function F(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function te(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ne(){let e=te(`canvas`);return e.style.display=`block`,e}var I={};function re(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ie(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ie(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ie(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ae(...e){let t=e.join(` `);t in I||(I[t]=!0,L(...e))}function z(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var oe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},B=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},V=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),se=1234567,ce=Math.PI/180,le=180/Math.PI;function H(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(V[e&255]+V[e>>8&255]+V[e>>16&255]+V[e>>24&255]+`-`+V[t&255]+V[t>>8&255]+`-`+V[t>>16&15|64]+V[t>>24&255]+`-`+V[n&63|128]+V[n>>8&255]+`-`+V[n>>16&255]+V[n>>24&255]+V[r&255]+V[r>>8&255]+V[r>>16&255]+V[r>>24&255]).toLowerCase()}function U(e,t,n){return Math.max(t,Math.min(n,e))}function ue(e,t){return(e%t+t)%t}function de(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function fe(e,t,n){return e===t?0:(n-e)/(t-e)}function pe(e,t,n){return(1-n)*e+n*t}function me(e,t,n,r){return pe(e,t,1-Math.exp(-n*r))}function he(e,t=1){return t-Math.abs(ue(e,t*2)-t)}function ge(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _e(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ve(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ye(e,t){return e+Math.random()*(t-e)}function be(e){return e*(.5-Math.random())}function xe(e){e!==void 0&&(se=e);let t=se+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Se(e){return e*ce}function Ce(e){return e*le}function we(e){return!(e&e-1)&&e!==0}function Te(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ee(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function De(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Oe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function W(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var ke={DEG2RAD:ce,RAD2DEG:le,generateUUID:H,clamp:U,euclideanModulo:ue,mapLinear:de,inverseLerp:fe,lerp:pe,damp:me,pingpong:he,smoothstep:ge,smootherstep:_e,randInt:ve,randFloat:ye,randFloatSpread:be,seededRandom:xe,degToRad:Se,radToDeg:Ce,isPowerOfTwo:we,ceilPowerOfTwo:Te,floorPowerOfTwo:Ee,setQuaternionFromProperEuler:De,normalize:W,denormalize:Oe},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(U(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(je.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(je.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return q.copy(this).projectOnVector(e),this.sub(q)}reflect(e){return this.sub(q.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},q=new K,je=new Ae,J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Y.makeScale(e,t)),this}rotate(e){return this.premultiply(Y.makeRotation(-e)),this}translate(e,t){return this.premultiply(Y.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Y=new J,Me=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ne=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pe(){let e={enabled:!0,workingColorSpace:k,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Fe(e.r),e.g=Fe(e.g),e.b=Fe(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ie(e.r),e.g=Ie(e.g),e.b=Ie(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?A:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ae(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ae(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[k]:{primaries:t,whitePoint:r,transfer:A,toXYZ:Me,fromXYZ:Ne,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:O},outputColorSpaceConfig:{drawingBufferColorSpace:O}},[O]:{primaries:t,whitePoint:r,transfer:j,toXYZ:Me,fromXYZ:Ne,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:O}}}),e}var X=Pe();function Fe(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ie(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Le,Re=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Le===void 0&&(Le=te(`canvas`)),Le.width=e.width,Le.height=e.height;let t=Le.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Le}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=te(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Fe(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Fe(t[e]/255)*255):t[e]=Fe(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ze=0,Be=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ze++}),this.uuid=H(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ve(r[t].image)):e.push(Ve(r[t]))}else e=Ve(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Re.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var He=0,Ue=new K,We=class r extends B{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,s=t,c=t,l=i,u=a,d=m,f=o,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:He++}),this.uuid=H(),this.name=``,this.source=new Be(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ue).x}get height(){return this.source.getSize(Ue).y}get depth(){return this.source.getSize(Ue).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null,We.DEFAULT_MAPPING=300,We.DEFAULT_ANISOTROPY=1;var Ge=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this.w=U(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this.w=U(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ke=class extends B{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t),this.textures=[];let r=new We({width:e,height:t,depth:n.depth}),a=n.count;for(let e=0;e<a;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Be(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},qe=class extends Ke{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Je=class extends We{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ye=class extends We{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xe=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ze.setFromMatrixColumn(e,0).length(),i=1/Ze.setFromMatrixColumn(e,1).length(),a=1/Ze.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($e,e,et)}lookAt(e,t,n){let r=this.elements;return rt.subVectors(e,t),rt.lengthSq()===0&&(rt.z=1),rt.normalize(),tt.crossVectors(n,rt),tt.lengthSq()===0&&(Math.abs(n.z)===1?rt.x+=1e-4:rt.z+=1e-4,rt.normalize(),tt.crossVectors(n,rt)),tt.normalize(),nt.crossVectors(rt,tt),r[0]=tt.x,r[4]=nt.x,r[8]=rt.x,r[1]=tt.y,r[5]=nt.y,r[9]=rt.y,r[2]=tt.z,r[6]=nt.z,r[10]=rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ze.set(r[0],r[1],r[2]).length(),o=Ze.set(r[4],r[5],r[6]).length(),s=Ze.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qe.copy(this);let c=1/a,l=1/o,u=1/s;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=l,Qe.elements[5]*=l,Qe.elements[6]*=l,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,t.setFromRotationMatrix(Qe),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ee,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ee,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ze=new K,Qe=new Xe,$e=new K(0,0,0),et=new K(1,1,1),tt=new K,nt=new K,rt=new K,it=new Xe,at=new Ae,ot=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(U(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-U(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(U(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-U(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(U(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-U(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return it.makeRotationFromQuaternion(e),this.setFromRotationMatrix(it,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return at.setFromEuler(this),this.setFromQuaternion(at,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ot.DEFAULT_ORDER=`XYZ`;var st=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ct=0,lt=new K,ut=new Ae,dt=new Xe,ft=new K,pt=new K,mt=new K,ht=new Ae,gt=new K(1,0,0),_t=new K(0,1,0),vt=new K(0,0,1),yt={type:`added`},bt={type:`removed`},xt={type:`childadded`,child:null},St={type:`childremoved`,child:null},Ct=class e extends B{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ct++}),this.uuid=H(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new ot,r=new Ae,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new J}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new st,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ut.setFromAxisAngle(e,t),this.quaternion.multiply(ut),this}rotateOnWorldAxis(e,t){return ut.setFromAxisAngle(e,t),this.quaternion.premultiply(ut),this}rotateX(e){return this.rotateOnAxis(gt,e)}rotateY(e){return this.rotateOnAxis(_t,e)}rotateZ(e){return this.rotateOnAxis(vt,e)}translateOnAxis(e,t){return lt.copy(e).applyQuaternion(this.quaternion),this.position.add(lt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gt,e)}translateY(e){return this.translateOnAxis(_t,e)}translateZ(e){return this.translateOnAxis(vt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ft.copy(e):ft.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dt.lookAt(pt,ft,this.up):dt.lookAt(ft,pt,this.up),this.quaternion.setFromRotationMatrix(dt),r&&(dt.extractRotation(r.matrixWorld),ut.setFromRotationMatrix(dt),this.quaternion.premultiply(ut.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yt),xt.child=e,this.dispatchEvent(xt),xt.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bt),St.child=e,this.dispatchEvent(St),St.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dt.multiply(e.parent.matrixWorld)),e.applyMatrix4(dt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yt),xt.child=e,this.dispatchEvent(xt),xt.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pt,e,mt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pt,ht,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Ct.DEFAULT_UP=new K(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tt={type:`move`},Et=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tt)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},kt={h:0,s:0,l:0};function At(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=O){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=X.workingColorSpace){return this.r=e,this.g=t,this.b=n,X.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=X.workingColorSpace){if(e=ue(e,1),t=U(t,0,1),n=U(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=At(i,r,e+1/3),this.g=At(i,r,e),this.b=At(i,r,e-1/3)}return X.colorSpaceToWorking(this,r),this}setStyle(e,t=O){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=O){let n=Dt[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fe(e.r),this.g=Fe(e.g),this.b=Fe(e.b),this}copyLinearToSRGB(e){return this.r=Ie(e.r),this.g=Ie(e.g),this.b=Ie(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=O){return X.workingToColorSpace(jt.copy(this),e),Math.round(U(jt.r*255,0,255))*65536+Math.round(U(jt.g*255,0,255))*256+Math.round(U(jt.b*255,0,255))}getHexString(e=O){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X.workingColorSpace){X.workingToColorSpace(jt.copy(this),t);let n=jt.r,r=jt.g,i=jt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=X.workingColorSpace){return X.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=O){X.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,r=jt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ot),this.setHSL(Ot.h+e,Ot.s+t,Ot.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(kt);let n=pe(Ot.h,kt.h,t),r=pe(Ot.s,kt.s,t),i=pe(Ot.l,kt.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Z;Z.NAMES=Dt;var Mt=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Z(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nt=class extends Ct{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ot,this.environmentIntensity=1,this.environmentRotation=new ot,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pt=new K,Ft=new K,It=new K,Lt=new K,Rt=new K,zt=new K,Bt=new K,Vt=new K,Ht=new K,Ut=new K,Wt=new Ge,Gt=new Ge,Kt=new Ge,qt=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pt.subVectors(e,t),r.cross(Pt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pt.subVectors(r,t),Ft.subVectors(n,t),It.subVectors(e,t);let a=Pt.dot(Pt),o=Pt.dot(Ft),s=Pt.dot(It),c=Ft.dot(Ft),l=Ft.dot(It),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Lt)!==null&&Lt.x>=0&&Lt.y>=0&&Lt.x+Lt.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Lt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Lt.x),s.addScaledVector(a,Lt.y),s.addScaledVector(o,Lt.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wt.setScalar(0),Gt.setScalar(0),Kt.setScalar(0),Wt.fromBufferAttribute(e,t),Gt.fromBufferAttribute(e,n),Kt.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wt,i.x),a.addScaledVector(Gt,i.y),a.addScaledVector(Kt,i.z),a}static isFrontFacing(e,t,n,r){return Pt.subVectors(n,t),Ft.subVectors(e,t),Pt.cross(Ft).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),Ft.subVectors(this.a,this.b),Pt.cross(Ft).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rt.subVectors(r,n),zt.subVectors(i,n),Vt.subVectors(e,n);let s=Rt.dot(Vt),c=zt.dot(Vt);if(s<=0&&c<=0)return t.copy(n);Ht.subVectors(e,r);let l=Rt.dot(Ht),u=zt.dot(Ht);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rt,a);Ut.subVectors(e,i);let f=Rt.dot(Ut),p=zt.dot(Ut);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rt,a).addScaledVector(zt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xt):Xt.fromBufferAttribute(r,t),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zt.copy(e.boundingBox)),Zt.applyMatrix4(e.matrixWorld),this.union(Zt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(an),on.subVectors(this.max,an),Qt.subVectors(e.a,an),$t.subVectors(e.b,an),en.subVectors(e.c,an),tn.subVectors($t,Qt),nn.subVectors(en,$t),rn.subVectors(Qt,en);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-rn.z,rn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,rn.z,0,-rn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-rn.y,rn.x,0];return!ln(t,Qt,$t,en,on)||(t=[1,0,0,0,1,0,0,0,1],!ln(t,Qt,$t,en,on))?!1:(sn.crossVectors(tn,nn),t=[sn.x,sn.y,sn.z],ln(t,Qt,$t,en,on))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yt=[new K,new K,new K,new K,new K,new K,new K,new K],Xt=new K,Zt=new Jt,Qt=new K,$t=new K,en=new K,tn=new K,nn=new K,rn=new K,an=new K,on=new K,sn=new K,cn=new K;function ln(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cn.fromArray(e,a);let o=i.x*Math.abs(cn.x)+i.y*Math.abs(cn.y)+i.z*Math.abs(cn.z),s=t.dot(cn),c=n.dot(cn),l=r.dot(cn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var un=new K,dn=new G,fn=0,pn=class extends B{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=N,this.updateRanges=[],this.gpuType=l,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXY(t,dn.x,dn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oe(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=W(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oe(t,this.array)),t}setX(e,t){return this.normalized&&(t=W(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oe(t,this.array)),t}setY(e,t){return this.normalized&&(t=W(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oe(t,this.array)),t}setZ(e,t){return this.normalized&&(t=W(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oe(t,this.array)),t}setW(e,t){return this.normalized&&(t=W(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=W(t,this.array),n=W(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=W(t,this.array),n=W(n,this.array),r=W(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=W(t,this.array),n=W(n,this.array),r=W(r,this.array),i=W(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},mn=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hn=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gn=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_n=new Jt,vn=new K,yn=new K,bn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_n.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vn.subVectors(e,this.center);let t=vn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vn.copy(e.center).add(yn)),this.expandByPoint(vn.copy(e.center).sub(yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xn=0,Sn=new Xe,Cn=new Ct,wn=new K,Tn=new Jt,En=new Jt,Dn=new K,On=class e extends B{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=H(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(P(e)?hn:mn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Cn.lookAt(e),Cn.updateMatrix(),this.applyMatrix4(Cn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wn).negate(),this.translate(wn.x,wn.y,wn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tn.setFromBufferAttribute(n),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];En.setFromBufferAttribute(n),this.morphTargetsRelative?(Dn.addVectors(Tn.min,En.min),Tn.expandByPoint(Dn),Dn.addVectors(Tn.max,En.max),Tn.expandByPoint(Dn)):(Tn.expandByPoint(En.min),Tn.expandByPoint(En.max))}Tn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dn.fromBufferAttribute(a,t),o&&(wn.fromBufferAttribute(e,t),Dn.add(wn)),r=Math.max(r,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new pn(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pn(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},kn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=N,this.updateRanges=[],this.version=0,this.uuid=H()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new K,jn=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Oe(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=W(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=W(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=W(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=W(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=W(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oe(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oe(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oe(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oe(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=W(t,this.array),n=W(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=W(t,this.array),n=W(n,this.array),r=W(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=W(t,this.array),n=W(n,this.array),r=W(r,this.array),i=W(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){re(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){re(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mn=0,Nn=class extends B{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=H(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=M,this.stencilZFail=M,this.stencilZPass=M,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pn=new K,Fn=new K,In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fn.copy(e).add(t).multiplyScalar(.5),In.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Fn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(In),o=Ln.dot(this.direction),s=-Ln.dot(In),c=Ln.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fn).addScaledVector(In,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,r,i){Rn.subVectors(t,e),zn.subVectors(n,e),Bn.crossVectors(Rn,zn);let a=this.direction.dot(Bn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);let s=o*this.direction.dot(zn.crossVectors(Ln,zn));if(s<0)return null;let c=o*this.direction.dot(Rn.cross(Ln));if(c<0||s+c>a)return null;let l=-o*Ln.dot(Bn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ot,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Un=new Xe,Wn=new Vn,Gn=new bn,Kn=new K,qn=new K,Jn=new K,Yn=new K,Xn=new K,Zn=new K,Qn=new K,$n=new K,er=class extends Ct{constructor(e=new On,t=new Hn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xn.fromBufferAttribute(s,e),a?Zn.addScaledVector(Xn,r):Zn.addScaledVector(Xn.sub(t),r))}t.add(Zn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gn.copy(n.boundingSphere),Gn.applyMatrix4(i),Wn.copy(e.ray).recast(e.near),!(Gn.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Gn,Kn)===null||Wn.origin.distanceToSquared(Kn)>(e.far-e.near)**2))&&(Un.copy(i).invert(),Wn.copy(e.ray).applyMatrix4(Un),(n.boundingBox===null||Wn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=nr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=nr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=nr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=nr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function tr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$n.copy(s),$n.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($n);return l<n.near||l>n.far?null:{distance:l,point:$n.clone(),object:e}}function nr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qn),e.getVertexPosition(c,Jn),e.getVertexPosition(l,Yn);let u=tr(e,t,n,r,qn,Jn,Yn,Qn);if(u){let e=new K;qt.getBarycoord(Qn,qn,Jn,Yn,e),i&&(u.uv=qt.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=qt.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=qt.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};qt.getNormal(qn,Jn,Yn,t.normal),u.face=t,u.barycoord=e}return u}var rr=class extends We{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ir=new K,ar=new K,or=new J,sr=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ir.subVectors(n,t).cross(ar.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ir),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||or.getNormalMatrix(e),r=this.coplanarPoint(ir).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new bn,lr=new G(.5,.5),ur=new K,dr=class{constructor(e=new sr,t=new sr,n=new sr,r=new sr,i=new sr,a=new sr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ee,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476+lr.distanceTo(e.center),cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ur.x=r.normal.x>0?e.max.x:e.min.x,ur.y=r.normal.y>0?e.max.y:e.min.y,ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fr=class extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr=new Xe,mr=new Vn,hr=new bn,gr=new K,_r=class extends Ct{constructor(e=new On,t=new fr){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),hr.radius+=i,e.ray.intersectsSphere(hr)===!1)return;pr.copy(r).invert(),mr.copy(e.ray).applyMatrix4(pr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);gr.fromBufferAttribute(l,n),vr(gr,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)gr.fromBufferAttribute(l,a),vr(gr,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function vr(e,t,n,r,i,a,o){let s=mr.distanceSqToPoint(e);if(s<n){let n=new K;mr.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends We{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},br=class extends We{constructor(e,t,n=c,i,a,o,s=r,l=r,u,d=h,f=1){if(d!==1026&&d!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},i,a,o,s,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Be(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xr=class extends br{constructor(e,t=c,n=301,i,a,o=r,s=r,l,u=h){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,i,a,o,s,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Sr=class extends We{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cr=class e extends On{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gn(c,3)),this.setAttribute(`normal`,new gn(l,3)),this.setAttribute(`uv`,new gn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wr=class e extends On{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new gn(i,3)),this.setAttribute(`normal`,new gn(i.slice(),3)),this.setAttribute(`uv`,new gn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Tr=class e extends wr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Er=new K,Dr=new K,Or=new K,kr=new qt,Ar=class extends On{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ce*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=kr;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),kr.getNormal(Or),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=kr[c[e]],o=kr[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Or.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Or.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Er.fromBufferAttribute(a,t),Dr.fromBufferAttribute(a,n),d.push(Er.x,Er.y,Er.z),d.push(Dr.x,Dr.y,Dr.z)}this.setAttribute(`position`,new gn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},jr=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new Xe;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(U(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(U(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mr=class extends jr{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nr=class extends Mr{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Pr(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Fr=new K,Ir=new K,Lr=new Pr,Rr=new Pr,zr=new Pr,Br=class extends jr{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ir.subVectors(r[0],r[1]).add(r[0]),c=Ir);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Fr.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Fr),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Lr.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Rr.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),zr.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Lr.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Rr.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),zr.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Lr.calc(s),Rr.calc(s),zr.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vr(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Hr(e,t){let n=1-e;return n*n*t}function Ur(e,t){return 2*(1-e)*e*t}function Wr(e,t){return e*e*t}function Gr(e,t,n,r){return Hr(e,t)+Ur(e,n)+Wr(e,r)}function Kr(e,t){let n=1-e;return n*n*n*t}function qr(e,t){let n=1-e;return 3*n*n*e*t}function Jr(e,t){return 3*(1-e)*e*e*t}function Yr(e,t){return e*e*e*t}function Xr(e,t,n,r,i){return Kr(e,t)+qr(e,n)+Jr(e,r)+Yr(e,i)}var Zr=class extends jr{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,r.x,i.x,a.x,o.x),Xr(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qr=class extends jr{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,r.x,i.x,a.x,o.x),Xr(e,r.y,i.y,a.y,o.y),Xr(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends jr{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ei=class extends jr{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ti=class extends jr{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Gr(e,r.x,i.x,a.x),Gr(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ni=class extends jr{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Gr(e,r.x,i.x,a.x),Gr(e,r.y,i.y,a.y),Gr(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ri=class extends jr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Vr(o,s.x,c.x,l.x,u.x),Vr(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},ii=Object.freeze({__proto__:null,ArcCurve:Nr,CatmullRomCurve3:Br,CubicBezierCurve:Zr,CubicBezierCurve3:Qr,EllipseCurve:Mr,LineCurve:$r,LineCurve3:ei,QuadraticBezierCurve:ti,QuadraticBezierCurve3:ni,SplineCurve:ri}),ai=class extends jr{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ii[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ii[n.type]().fromJSON(n))}return this}},oi=class extends ai{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $r(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ti(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Zr(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ri([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Mr(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},si=class extends oi{constructor(e){super(e),this.uuid=H(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new oi().fromJSON(n))}return this}};function ci(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=li(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=gi(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return di(a,o,n,s,c,l,0),o}function li(e,t,n,r,i){let a;if(i===Bi(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Li(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Li(i/r|0,e[i],e[i+1],a);return a&&ki(a,a.next)&&(Ri(a),a=a.next),a}function ui(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ki(n,n.next)||Oi(n.prev,n,n.next)===0)){if(Ri(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function di(e,t,n,r,i,a,o){if(!e)return;!o&&a&&xi(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?pi(e,r,i,a):fi(e)){t.push(c.i,e.i,l.i),Ri(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=mi(ui(e),t),di(e,t,n,r,i,a,2)):o===2&&hi(e,t,n,r,i,a):di(ui(e),t,n,r,i,a,1);break}}}function fi(e){let t=e.prev,n=e,r=e.next;if(Oi(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ei(i,s,a,c,o,l,m.x,m.y)&&Oi(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pi(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Oi(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ci(p,m,t,n,r),v=Ci(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ei(s,u,c,d,l,f,y.x,y.y)&&Oi(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ei(s,u,c,d,l,f,b.x,b.y)&&Oi(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ei(s,u,c,d,l,f,y.x,y.y)&&Oi(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ei(s,u,c,d,l,f,b.x,b.y)&&Oi(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function mi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ki(r,i)&&Ai(r,n,n.next,i)&&Pi(r,i)&&Pi(i,r)&&(t.push(r.i,n.i,i.i),Ri(n),Ri(n.next),n=e=i),n=n.next}while(n!==e);return ui(n)}function hi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Di(o,e)){let s=Ii(o,e);o=ui(o,o.next),s=ui(s,s.next),di(o,t,n,r,i,a,0),di(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function gi(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=li(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(wi(o))}i.sort(_i);for(let e=0;e<i.length;e++)n=vi(i[e],n);return n}function _i(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function vi(e,t){let n=yi(e,t);if(!n)return t;let r=Ii(n,e);return ui(r,r.next),ui(n,n.next)}function yi(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ki(e,n))return n;do{if(ki(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ti(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Pi(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&bi(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function bi(e,t){return Oi(e.prev,e,t.prev)<0&&Oi(t.next,e,e.next)<0}function xi(e,t,n,r){let i=e;do i.z===0&&(i.z=Ci(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Si(i)}function Si(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ci(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function wi(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ti(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ei(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ti(e,t,n,r,i,a,o,s)}function Di(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ni(e,t)&&(Pi(e,t)&&Pi(t,e)&&Fi(e,t)&&(Oi(e.prev,e,t.prev)||Oi(e,t.prev,t))||ki(e,t)&&Oi(e.prev,e,e.next)>0&&Oi(t.prev,t,t.next)>0)}function Oi(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ki(e,t){return e.x===t.x&&e.y===t.y}function Ai(e,t,n,r){let i=Mi(Oi(e,t,n)),a=Mi(Oi(e,t,r)),o=Mi(Oi(n,r,e)),s=Mi(Oi(n,r,t));return!!(i!==a&&o!==s||i===0&&ji(e,n,t)||a===0&&ji(e,r,t)||o===0&&ji(n,e,r)||s===0&&ji(n,t,r))}function ji(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Mi(e){return e>0?1:e<0?-1:0}function Ni(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ai(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Pi(e,t){return Oi(e.prev,e,e.next)<0?Oi(e,t,e.next)>=0&&Oi(e,e.prev,t)>=0:Oi(e,t,e.prev)<0||Oi(e,e.next,t)<0}function Fi(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ii(e,t){let n=zi(e.i,e.x,e.y),r=zi(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Li(e,t,n,r){let i=zi(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ri(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function zi(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bi(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Vi=class{static triangulate(e,t,n=2){return ci(e,t,n)}},Hi=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ui(e),Wi(n,e);let a=e.length;t.forEach(Ui);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Wi(n,t[e]);let o=Vi.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ui(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Wi(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Gi=class e extends On{constructor(e=new si([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new gn(r,3)),this.setAttribute(`uv`,new gn(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ki:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Hi.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Hi.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let P;if(p===0)P=Hi.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ie(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ie(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=Hi.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}ne(),I();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];L(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];L(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];L(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];L(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function I(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function L(e,t,i){z(e),z(t),z(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);oe(o[0]),oe(o[1]),oe(o[2])}function ae(e,t,i,a){z(e),z(t),z(a),z(t),z(i),z(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);oe(s[0]),oe(s[1]),oe(s[3]),oe(s[1]),oe(s[2]),oe(s[3])}function z(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function oe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qi(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ii[i.type]().fromJSON(i)),new e(r,t.options)}},Ki={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function qi(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ji=class e extends wr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Yi=class e extends wr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Xi=class e extends On{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gn(p,3)),this.setAttribute(`normal`,new gn(m,3)),this.setAttribute(`uv`,new gn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Zi=class e extends wr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Qi=class extends On{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new K,i=new K;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),$i(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),$i(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new gn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $i(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function ea(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(na(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ta(e){let t={};for(let n=0;n<e.length;n++){let r=ea(e[n]);for(let e in r)t[e]=r[e]}return t}function na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ra(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ia(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:X.workingColorSpace}var aa={clone:ea,merge:ta},oa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ca=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oa,this.fragmentShader=sa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=ra(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},la=class extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ua=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var pa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},ma=class extends pa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:T,endingEnd:T}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case E:i=e,o=2*t-n;break;case D:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case E:a=e,s=2*n-t;break;case D:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ha=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ga=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_a=class extends pa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},va=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case x:t=this.InterpolantFactoryMethodDiscrete;break;case S:t=this.InterpolantFactoryMethodLinear;break;case C:t=this.InterpolantFactoryMethodSmooth;break;case w:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return x;case this.InterpolantFactoryMethodLinear:return S;case this.InterpolantFactoryMethodSmooth:return C;case this.InterpolantFactoryMethodBezier:return w}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&F(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===C,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};va.prototype.ValueTypeName=``,va.prototype.TimeBufferType=Float32Array,va.prototype.ValueBufferType=Float32Array,va.prototype.DefaultInterpolation=S;var ya=class extends va{constructor(e,t,n){super(e,t,n)}};ya.prototype.ValueTypeName=`bool`,ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=x,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`color`;var xa=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName=`number`;var Sa=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ae.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ca=class extends va{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName=`quaternion`,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends va{constructor(e,t,n){super(e,t,n)}};wa.prototype.ValueTypeName=`string`,wa.prototype.ValueBufferType=Array,wa.prototype.DefaultInterpolation=x,wa.prototype.InterpolantFactoryMethodLinear=void 0,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`vector`;var Ea=new K,Da=new Ae,Oa=new K,ka=class extends Ct{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ee,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ea,Da,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Da,Oa.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ea,Da,Oa),Oa.x===1&&Oa.y===1&&Oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Da,Oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Aa=new K,ja=new G,Ma=new G,Na=class extends ka{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=le*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ce*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return le*2*Math.atan(Math.tan(ce*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Aa.x,Aa.y).multiplyScalar(-e/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Aa.x,Aa.y).multiplyScalar(-e/Aa.z)}getViewSize(e,t){return this.getViewBounds(e,ja,Ma),t.subVectors(Ma,ja)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ce*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pa=class extends ka{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fa=class extends On{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ia=-90,La=1,Ra=class extends Ct{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Na(Ia,La,e,t);r.layers=this.layers,this.add(r);let i=new Na(Ia,La,e,t);i.layers=this.layers,this.add(i);let a=new Na(Ia,La,e,t);a.layers=this.layers,this.add(a);let o=new Na(Ia,La,e,t);o.layers=this.layers,this.add(o);let s=new Na(Ia,La,e,t);s.layers=this.layers,this.add(s);let c=new Na(Ia,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends Na{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Va.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Va(){this._document.hidden===!1&&this.reset()}var Ha=`\\[\\]\\.:\\/`,Ua=RegExp(`[\\[\\]\\.:\\/]`,`g`),Wa=`[^\\[\\]\\.:\\/]`,Ga=`[^`+Ha.replace(`\\.`,``)+`]`,Ka=`((?:WC+[\\/:])*)`.replace(`WC`,Wa),qa=`(WCOD+)?`.replace(`WCOD`,Ga),Ja=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Wa),Ya=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Wa),Xa=RegExp(`^`+Ka+qa+Ja+Ya+`$`),Za=[`material`,`materials`,`bones`,`map`],Qa=class{constructor(e,t,n){let r=n||$a.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$a=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ua,``)}static parseTrackName(e){let t=Xa.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Za.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$a.Composite=Qa,$a.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$a.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$a.prototype.GetterByBindingType=[$a.prototype._getValue_direct,$a.prototype._getValue_array,$a.prototype._getValue_arrayElement,$a.prototype._getValue_toArray],$a.prototype.SetterByBindingTypeAndVersioning=[[$a.prototype._setValue_direct,$a.prototype._setValue_direct_setNeedsUpdate,$a.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_array,$a.prototype._setValue_array_setNeedsUpdate,$a.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_arrayElement,$a.prototype._setValue_arrayElement_setNeedsUpdate,$a.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_fromArray,$a.prototype._setValue_fromArray_setNeedsUpdate,$a.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eo=class extends kn{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var to=new K,no=new K,ro=new K,io=new K,ao=new K,oo=new K,so=new K,co=class{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){to.subVectors(e,this.start),no.subVectors(this.end,this.start);let n=no.dot(no);if(n===0)return 0;let r=no.dot(to)/n;return t&&(r=U(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=oo,n=so){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;ro.subVectors(c,o),io.subVectors(l,s),ao.subVectors(o,s);let u=ro.dot(ro),d=io.dot(io),f=io.dot(ao);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=U(a,0,1);else{let e=ro.dot(ao);if(d<=r)a=0,i=U(-e/u,0,1);else{let t=ro.dot(io),n=u*d-t*t;i=n===0?0:U((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=U(-e/u,0,1)):a>1&&(a=1,i=U((t-e)/u,0,1))}}return t.copy(o).addScaledVector(ro,i),n.copy(s).addScaledVector(io,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function lo(e,t,n,r){let i=uo(r);switch(n){case 1021:return e*t;case 1028:return e*t/i.components*i.byteLength;case _:return e*t/i.components*i.byteLength;case v:return e*t*2/i.components*i.byteLength;case y:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case m:return e*t*4/i.components*i.byteLength;case b:return e*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function uo(e){switch(e){case o:case 1010:return{byteLength:1,components:1};case s:case 1011:case u:return{byteLength:2,components:1};case d:case f:return{byteLength:2,components:4};case c:case 1013:case l:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function fo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function po(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},mo={basic:{uniforms:ta([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:ta([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:ta([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:ta([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:ta([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Z(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:ta([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:ta([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:ta([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:ta([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:ta([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:ta([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:ta([$.common,$.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:ta([$.lights,$.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};mo.physical={uniforms:ta([mo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var ho={r:0,b:0,g:0},go=new Xe,_o=new J;_o.set(-1,0,0,0,1,0,0,0,1);function vo(e,t,n,r,i,a){let o=new Z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new er(new Cr(1,1,1),new ca({name:`BackgroundCubeMaterial`,uniforms:ea(mo.backgroundCube.uniforms),vertexShader:mo.backgroundCube.vertexShader,fragmentShader:mo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(go.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_o),l.material.toneMapped=X.getTransfer(i.colorSpace)!==j,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new er(new Xi(2,2),new ca({name:`BackgroundMaterial`,uniforms:ea(mo.background.uniforms),vertexShader:mo.background.vertexShader,fragmentShader:mo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=X.getTransfer(i.colorSpace)!==j,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ho,ia(e)),n.buffers.color.setClear(ho.r,ho.g,ho.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function yo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function bo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function xo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function So(e){let t=this,n=null,r=0,i=!1,a=!1,o=new sr,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Co=4,wo=[.125,.215,.35,.446,.526,.582],To=20,Eo=256,Do=new Pa,Oo=new Z,ko=null,Ao=0,jo=0,Mo=!1,No=new K,Po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=No}=i;ko=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Ao,jo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:i,minFilter:i,generateMipmaps:!1,type:u,format:m,colorSpace:k,depthBuffer:!1},r=Io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fo(r)),this._blurMaterial=zo(r,e,t),this._ggxMaterial=Ro(r,e,t)}return r}_compileMaterial(e){let t=new er(new On,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,r,i){let a=new Na(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Oo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new Cr,new Hn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Oo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Lo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Lo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Do)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Co?n-d+Co:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Lo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Do),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Lo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Do)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&R(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):To;m>To&&L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${To}`);let h=[],g=0;for(let e=0;e<To;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Lo(t,3*v*(r>_-Co?r-_+Co:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Do)}};function Fo(e){let t=[],n=[],r=[],i=e,a=e-Co+1+wo.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Co?s=wo[o-e+Co-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new On;h.setAttribute(`position`,new pn(f,3)),h.setAttribute(`uv`,new pn(p,2)),h.setAttribute(`faceIndex`,new pn(m,1)),r.push(new er(h,null)),i>Co&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Io(e,t,n){let r=new qe(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Lo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ro(e,t,n){return new ca({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Eo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zo(e,t,n){let r=new Float32Array(To),i=new K(0,1,0);return new ca({name:`SphericalGaussianBlur`,defines:{n:To,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bo(){return new ca({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return new ca({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uo=class extends qe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),a=new ca({name:`CubemapFromEquirect`,uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new er(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=i),new Ra(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Wo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Uo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Po(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Po(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Go(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ae(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ko(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?hn:mn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Yo(e,t,n){let r=new WeakMap,i=new Ge;function a(a,o,s){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new Je(g,m,h,d);_.type=l,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],l=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(l,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=l.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new G(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function Xo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qo(e,t,n,r,i){let a=new qe(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new br(t,n):void 0}),o=new qe(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}),s=new On;s.setAttribute(`position`,new gn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new gn([0,2,0,0,2,0],2));let c=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new er(s,c),d=new Pa(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(a),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=a,r=o;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,c.defines={},X.getTransfer(f)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Zo[p];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(l,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var $o=new We,es=new br(1,1),ts=new Je,ns=new Ye,rs=new yr,is=[],as=[],os=new Float32Array(16),ss=new Float32Array(9),cs=new Float32Array(4);function ls(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=is[i];if(a===void 0&&(a=new Float32Array(i),is[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function us(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ds(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fs(e,t){let n=as[t];n===void 0&&(n=new Int32Array(t),as[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2fv(this.addr,t),ds(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(us(n,t))return;e.uniform3fv(this.addr,t),ds(n,t)}}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4fv(this.addr,t),ds(n,t)}}function _s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;cs.set(r),e.uniformMatrix2fv(this.addr,!1,cs),ds(n,r)}}function vs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;ss.set(r),e.uniformMatrix3fv(this.addr,!1,ss),ds(n,r)}}function ys(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;os.set(r),e.uniformMatrix4fv(this.addr,!1,os),ds(n,r)}}function bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2iv(this.addr,t),ds(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(us(n,t))return;e.uniform3iv(this.addr,t),ds(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4iv(this.addr,t),ds(n,t)}}function ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2uiv(this.addr,t),ds(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(us(n,t))return;e.uniform3uiv(this.addr,t),ds(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4uiv(this.addr,t),ds(n,t)}}function Os(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(es.compareFunction=n.isReversedDepthBuffer()?518:515,a=es):a=$o,n.setTexture2D(t||a,i)}function ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ns,i)}function As(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||rs,i)}function js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ts,i)}function Ms(e){switch(e){case 5126:return ps;case 35664:return ms;case 35665:return hs;case 35666:return gs;case 35674:return _s;case 35675:return vs;case 35676:return ys;case 5124:case 35670:return bs;case 35667:case 35671:return xs;case 35668:case 35672:return Ss;case 35669:case 35673:return Cs;case 5125:return ws;case 36294:return Ts;case 36295:return Es;case 36296:return Ds;case 35678:case 36198:case 36298:case 36306:case 35682:return Os;case 35679:case 36299:case 36307:return ks;case 35680:case 36300:case 36308:case 36293:return As;case 36289:case 36303:case 36311:case 36292:return js}}function Ns(e,t){e.uniform1fv(this.addr,t)}function Ps(e,t){let n=ls(t,this.size,2);e.uniform2fv(this.addr,n)}function Fs(e,t){let n=ls(t,this.size,3);e.uniform3fv(this.addr,n)}function Is(e,t){let n=ls(t,this.size,4);e.uniform4fv(this.addr,n)}function Ls(e,t){let n=ls(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rs(e,t){let n=ls(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zs(e,t){let n=ls(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bs(e,t){e.uniform1iv(this.addr,t)}function Vs(e,t){e.uniform2iv(this.addr,t)}function Hs(e,t){e.uniform3iv(this.addr,t)}function Us(e,t){e.uniform4iv(this.addr,t)}function Ws(e,t){e.uniform1uiv(this.addr,t)}function Gs(e,t){e.uniform2uiv(this.addr,t)}function Ks(e,t){e.uniform3uiv(this.addr,t)}function qs(e,t){e.uniform4uiv(this.addr,t)}function Js(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?es:$o;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ys(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ns,a[e])}function Xs(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||rs,a[e])}function Zs(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ts,a[e])}function Qs(e){switch(e){case 5126:return Ns;case 35664:return Ps;case 35665:return Fs;case 35666:return Is;case 35674:return Ls;case 35675:return Rs;case 35676:return zs;case 5124:case 35670:return Bs;case 35667:case 35671:return Vs;case 35668:case 35672:return Hs;case 35669:case 35673:return Us;case 5125:return Ws;case 36294:return Gs;case 36295:return Ks;case 36296:return qs;case 35678:case 36198:case 36298:case 36306:case 35682:return Js;case 35679:case 36299:case 36307:return Ys;case 35680:case 36300:case 36308:case 36293:return Xs;case 36289:case 36303:case 36311:case 36292:return Zs}}var $s=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ms(t.type)}},ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qs(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function rc(e,t){e.seq.push(t),e.map[t.id]=t}function ic(e,t,n){let r=e.name,i=r.length;for(nc.lastIndex=0;;){let a=nc.exec(r),o=nc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){rc(n,l===void 0?new $s(s,e,t):new ec(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new tc(s),rc(n,e)),n=e}}}var ac=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ic(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function oc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sc=37297,cc=0;function lc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var uc=new J;function dc(e){X._getMatrix(uc,X.workingColorSpace,e);let t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(X.getTransfer(e)){case A:return[t,`LinearTransferOETF`];case j:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+lc(e.getShaderSource(t),r)}return i}function pc(e,t){let n=dc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var mc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hc(e,t){let n=mc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gc=new K;function _c(){return X.getLuminanceCoefficients(gc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gc.x.toFixed(4)}, ${gc.y.toFixed(4)}, ${gc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xc).join(`
`)}function yc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xc(e){return e!==``}function Sc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(e){return e.replace(wc,Dc)}var Ec=new Map;function Dc(e,t){let n=Q[t];if(n===void 0){let e=Ec.get(t);if(e!==void 0)n=Q[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Tc(n)}var Oc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(e){return e.replace(Oc,Ac)}function Ac(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Mc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Nc(e){return Mc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Pc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Fc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Pc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ic={302:`ENVMAP_MODE_REFRACTION`};function Lc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ic[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rc[e.combine]||`ENVMAP_BLENDING_NONE`}function Bc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Nc(n),l=Fc(n),u=Lc(n),d=zc(n),f=Bc(n),p=vc(n),m=yc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xc).join(`
`),_.length>0&&(_+=`
`)):(g=[jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xc).join(`
`),_=[jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:hc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,pc(`linearToOutputTexel`,n.outputColorSpace),_c(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xc).join(`
`)),o=Tc(o),o=Sc(o,n),o=Cc(o,n),s=Tc(s),s=Sc(s,n),s=Cc(s,n),o=kc(o),s=kc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=oc(i,i.VERTEX_SHADER,y),S=oc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=fc(i,x,`vertex`),n=fc(i,S,`fragment`);R(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ac(i,h),T=bc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,sc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Hc=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wc(e),t.set(e,n)),n}},Wc=class{constructor(e){this.id=Hc++,this.code=e,this.usedTimes=0}};function Gc(e){return e===1030||e===37490||e===36285}function Kc(e,t,n,r,i,a){let o=new st,s=new Uc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=mo[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,I=!!i.lightMap,re=!!i.bumpMap,ie=!!i.normalMap,R=!!i.displacementMap,ae=!!i.emissiveMap,z=!!i.metalnessMap,oe=!!i.roughnessMap,B=i.anisotropy>0,V=i.clearcoat>0,se=i.dispersion>0,ce=i.iridescence>0,le=i.sheen>0,H=i.transmission>0,U=B&&!!i.anisotropyMap,ue=V&&!!i.clearcoatMap,de=V&&!!i.clearcoatNormalMap,fe=V&&!!i.clearcoatRoughnessMap,pe=ce&&!!i.iridescenceMap,me=ce&&!!i.iridescenceThicknessMap,he=le&&!!i.sheenColorMap,ge=le&&!!i.sheenRoughnessMap,_e=!!i.specularMap,ve=!!i.specularColorMap,ye=!!i.specularIntensityMap,be=H&&!!i.transmissionMap,xe=H&&!!i.thicknessMap,Se=!!i.gradientMap,Ce=!!i.alphaMap,we=i.alphaTest>0,Te=!!i.alphaHash,Ee=!!i.extensions,De=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=e.toneMapping);let Oe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:X.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:I,bumpMap:re,normalMap:ie,displacementMap:R,emissiveMap:ae,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Gc(i.normalMap.format),metalnessMap:z,roughnessMap:oe,anisotropy:B,anisotropyMap:U,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,dispersion:se,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:le,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:ve,specularIntensityMap:ye,transmission:H,transmissionMap:be,thicknessMap:xe,gradientMap:Se,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Te,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:I&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:R&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:z&&m(i.metalnessMap.channel),roughnessMapUv:oe&&m(i.roughnessMap.channel),anisotropyMapUv:U&&m(i.anisotropyMap.channel),clearcoatMapUv:ue&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(i.sheenRoughnessMap.channel),specularMapUv:_e&&m(i.specularMap.channel),specularColorMapUv:ve&&m(i.specularColorMap.channel),specularIntensityMapUv:ye&&m(i.specularIntensityMap.channel),transmissionMapUv:be&&m(i.transmissionMap.channel),thicknessMapUv:xe&&m(i.thicknessMap.channel),alphaMapUv:Ce&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||B),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||Ce),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&X.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&X.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ee&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ee&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=mo[t];n=aa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Vc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function qc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Jc),r.length>1&&r.sort(t||Yc),i.length>1&&i.sort(t||Yc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Zc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xc,e.set(t,[i])):n>=r.length?(i=new Xc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new Z};break;case`SpotLight`:n={position:new K,direction:new K,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Z,groundColor:new Z};break;case`RectAreaLight`:n={color:new Z,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function $c(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var el=0;function tl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function nl(e){let t=new Qc,n=$c(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Xe,o=new Xe;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(tl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=el++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function rl(e){let t=new nl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function il(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new rl(e),t.set(n,[a])):r>=i.length?(a=new rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var al=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ol=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sl=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],cl=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ll=new Xe,ul=new K,dl=new K;function fl(e,t,n){let a=new dr,o=new G,s=new G,d=new Ge,f=new ua,p=new da,m={},g=n.maxTextureSize,_={0:1,1:0,2:2},y=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:al,fragmentShader:ol}),b=y.clone();b.defines.HORIZONTAL_PASS=1;let x=new On;x.setAttribute(`position`,new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new er(x,y),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(t,n,f){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.state;y.setBlending(0),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let b=w!==this.type;b&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let p=0,m=t.length;p<m;p++){let m=t[p],_=m.shadow;if(_===void 0){L(`WebGLShadowMap:`,m,`has no shadow.`);continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;o.copy(_.mapSize);let x=_.getFrameExtents();o.multiply(x),s.copy(_.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(s.x=Math.floor(g/x.x),o.x=s.x*x.x,_.mapSize.x=s.x),o.y>g&&(s.y=Math.floor(g/x.y),o.y=s.y*x.y,_.mapSize.y=s.y));let S=e.state.buffers.depth.getReversed();if(_.camera._reversedDepth=S,_.map===null||b===!0){if(_.map!==null&&(_.map.depthTexture!==null&&(_.map.depthTexture.dispose(),_.map.depthTexture=null),_.map.dispose()),this.type===3){if(m.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}_.map=new qe(o.x,o.y,{format:v,type:u,minFilter:i,magFilter:i,generateMipmaps:!1}),_.map.texture.name=m.name+`.shadowMap`,_.map.depthTexture=new br(o.x,o.y,l),_.map.depthTexture.name=m.name+`.shadowMapDepth`,_.map.depthTexture.format=h,_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r}else m.isPointLight?(_.map=new Uo(o.x),_.map.depthTexture=new xr(o.x,c)):(_.map=new qe(o.x,o.y),_.map.depthTexture=new br(o.x,o.y,c)),_.map.depthTexture.name=m.name+`.shadowMap`,_.map.depthTexture.format=h,this.type===1?(_.map.depthTexture.compareFunction=S?518:515,_.map.depthTexture.minFilter=i,_.map.depthTexture.magFilter=i):(_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r);_.camera.updateProjectionMatrix()}let C=_.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<C;t++){if(_.map.isWebGLCubeRenderTarget)e.setRenderTarget(_.map,t),e.clear();else{t===0&&(e.setRenderTarget(_.map),e.clear());let n=_.getViewport(t);d.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),y.viewport(d)}if(m.isPointLight){let e=_.camera,n=_.matrix,r=m.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ul.setFromMatrixPosition(m.matrixWorld),e.position.copy(ul),dl.copy(e.position),dl.add(sl[t]),e.up.copy(cl[t]),e.lookAt(dl),e.updateMatrixWorld(),n.makeTranslation(-ul.x,-ul.y,-ul.z),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),_._frustum.setFromProjectionMatrix(ll,e.coordinateSystem,e.reversedDepth)}else _.updateMatrices(m);a=_.getFrustum(),D(n,f,_.camera,m,this.type)}_.isPointLightShadow!==!0&&this.type===3&&T(_,f),_.needsUpdate=!1}w=this.type,C.needsUpdate=!1,e.setRenderTarget(p,m,_)};function T(n,r){let i=t.update(S);y.defines.VSM_SAMPLES!==n.blurSamples&&(y.defines.VSM_SAMPLES=n.blurSamples,b.defines.VSM_SAMPLES=n.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qe(o.x,o.y,{format:v,type:u})),y.uniforms.shadow_pass.value=n.map.depthTexture,y.uniforms.resolution.value=n.mapSize,y.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,y,S,null),b.uniforms.shadow_pass.value=n.mapPass.texture,b.uniforms.resolution.value=n.mapSize,b.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,b,S,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?p:f,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=m[e];r===void 0&&(r={},m[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,O)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?_[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,i,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||a.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),c=n.material;if(Array.isArray(c)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,s);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(c.visible){let t=E(n,c,o,s);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)D(c[e],r,i,o,s)}function O(e){e.target.removeEventListener(`dispose`,O);for(let t in m){let n=m[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function pl(e,t){function n(){let t=!1,n=new Ge,r=null,i=new Ge(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):B(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=oe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):B(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),I=e.getParameter(e.VIEWPORT),re=new Ge().fromArray(ne),ie=new Ge().fromArray(I);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),de(!1),fe(1),z(e.CULL_FACE),U(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function B(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function V(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let H={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function U(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(B(e.BLEND),g=!1);return}if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(H[r],H[i],H[o],H[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ue(t,n){t.side===2?B(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),de(r),t.blending===1&&t.transparent===!1?U(0):U(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),me(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):B(e.SAMPLE_ALPHA_TO_COVERAGE)}function de(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function fe(t){t===0?B(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function pe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function me(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):B(e.POLYGON_OFFSET_FILL)}function he(t){t?z(e.SCISSOR_TEST):B(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function _e(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function ve(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function xe(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Se(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function W(t){return d[t]===void 0?e.getParameter(t):d[t]}function ke(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function G(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Ae(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function K(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function q(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Z(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:B,bindFramebuffer:V,drawBuffers:se,useProgram:ce,setBlending:U,setMaterial:ue,setFlipSided:de,setCullFace:fe,setLineWidth:pe,setPolygonOffset:me,setScissorTest:he,activeTexture:ge,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:De,texImage3D:Oe,pixelStorei:ke,getParameter:W,updateUBOMapping:K,uniformBlockBinding:q,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ce,compressedTexSubImage3D:we,scissor:G,viewport:Ae,reset:je}}function ml(o,s,c,l,u,d,f){let p=s.has(`WEBGL_multisampled_render_to_texture`)?s.get(`WEBGL_multisampled_render_to_texture`):null,m=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),h=new G,_=new WeakMap,v=new Set,y,b=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function S(e,t){return x?new OffscreenCanvas(e,t):te(`canvas`)}function C(e,t,n){let r=1,i=Oe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);y===void 0&&(y=S(n,a));let o=t?S(n,a):y;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function w(e){return e.generateMipmaps}function T(e){o.generateMipmap(e)}function E(e){return e.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?o.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(e,t,n,r,i,a=!1){if(e!==null){if(o[e]!==void 0)return o[e];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let c;r&&(c=s.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=t;if(t===o.RED&&(n===o.FLOAT&&(l=o.R32F),n===o.HALF_FLOAT&&(l=o.R16F),n===o.UNSIGNED_BYTE&&(l=o.R8),n===o.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),n===o.SHORT&&c&&(l=c.R16_SNORM_EXT)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.R8UI),n===o.UNSIGNED_SHORT&&(l=o.R16UI),n===o.UNSIGNED_INT&&(l=o.R32UI),n===o.BYTE&&(l=o.R8I),n===o.SHORT&&(l=o.R16I),n===o.INT&&(l=o.R32I)),t===o.RG&&(n===o.FLOAT&&(l=o.RG32F),n===o.HALF_FLOAT&&(l=o.RG16F),n===o.UNSIGNED_BYTE&&(l=o.RG8),n===o.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),n===o.SHORT&&c&&(l=c.RG16_SNORM_EXT)),t===o.RG_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RG8UI),n===o.UNSIGNED_SHORT&&(l=o.RG16UI),n===o.UNSIGNED_INT&&(l=o.RG32UI),n===o.BYTE&&(l=o.RG8I),n===o.SHORT&&(l=o.RG16I),n===o.INT&&(l=o.RG32I)),t===o.RGB_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGB8UI),n===o.UNSIGNED_SHORT&&(l=o.RGB16UI),n===o.UNSIGNED_INT&&(l=o.RGB32UI),n===o.BYTE&&(l=o.RGB8I),n===o.SHORT&&(l=o.RGB16I),n===o.INT&&(l=o.RGB32I)),t===o.RGBA_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGBA8UI),n===o.UNSIGNED_SHORT&&(l=o.RGBA16UI),n===o.UNSIGNED_INT&&(l=o.RGBA32UI),n===o.BYTE&&(l=o.RGBA8I),n===o.SHORT&&(l=o.RGBA16I),n===o.INT&&(l=o.RGBA32I)),t===o.RGB&&(n===o.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),n===o.SHORT&&c&&(l=c.RGB16_SNORM_EXT),n===o.UNSIGNED_INT_5_9_9_9_REV&&(l=o.RGB9_E5),n===o.UNSIGNED_INT_10F_11F_11F_REV&&(l=o.R11F_G11F_B10F)),t===o.RGBA){let e=a?A:X.getTransfer(i);n===o.FLOAT&&(l=o.RGBA32F),n===o.HALF_FLOAT&&(l=o.RGBA16F),n===o.UNSIGNED_BYTE&&(l=e===`srgb`?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),n===o.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),n===o.UNSIGNED_SHORT_4_4_4_4&&(l=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(l=o.RGB5_A1)}return(l===o.R16F||l===o.R32F||l===o.RG16F||l===o.RG32F||l===o.RGBA16F||l===o.RGBA32F)&&s.get(`EXT_color_buffer_float`),l}function O(e,t){let n;return e?t===null||t===1014||t===1020?n=o.DEPTH24_STENCIL8:t===1015?n=o.DEPTH32F_STENCIL8:t===1012&&(n=o.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=o.DEPTH_COMPONENT24:t===1015?n=o.DEPTH_COMPONENT32F:t===1012&&(n=o.DEPTH_COMPONENT16),n}function k(e,t){return w(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),N(t),t.isVideoTexture&&_.delete(t),t.isHTMLTexture&&v.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t)}function N(e){let t=l.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=b.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ee(e),Object.keys(r).length===0&&b.delete(n)}l.remove(e)}function ee(e){let t=l.get(e);o.deleteTexture(t.__webglTexture);let n=e.source,r=b.get(n);delete r[t.__cacheKey],f.memory.textures--}function P(e){let t=l.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),l.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)o.deleteFramebuffer(t.__webglFramebuffer[e][n]);else o.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)o.deleteFramebuffer(t.__webglFramebuffer[e]);else o.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&o.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&o.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&o.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=l.get(n[e]);t.__webglTexture&&(o.deleteTexture(t.__webglTexture),f.memory.textures--),l.remove(n[e])}l.remove(e)}let F=0;function ne(){F=0}function I(){return F}function re(e){F=e}function ie(){let e=F;return e>=u.maxTextures&&L(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+u.maxTextures),F+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(e,t){let n=l.get(e);if(e.isVideoTexture&&Ee(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);c.bindTexture(o.TEXTURE_2D,n.__webglTexture,o.TEXTURE0+t)}function oe(e,t){let n=l.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){fe(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),c.bindTexture(o.TEXTURE_2D_ARRAY,n.__webglTexture,o.TEXTURE0+t)}function B(e,t){let n=l.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){fe(n,e,t);return}c.bindTexture(o.TEXTURE_3D,n.__webglTexture,o.TEXTURE0+t)}function V(e,t){let n=l.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){pe(n,e,t);return}c.bindTexture(o.TEXTURE_CUBE_MAP,n.__webglTexture,o.TEXTURE0+t)}let se={[e]:o.REPEAT,[t]:o.CLAMP_TO_EDGE,[n]:o.MIRRORED_REPEAT},ce={[r]:o.NEAREST,1004:o.NEAREST_MIPMAP_NEAREST,1005:o.NEAREST_MIPMAP_LINEAR,[i]:o.LINEAR,1007:o.LINEAR_MIPMAP_NEAREST,[a]:o.LINEAR_MIPMAP_LINEAR},le={512:o.NEVER,519:o.ALWAYS,513:o.LESS,515:o.LEQUAL,514:o.EQUAL,518:o.GEQUAL,516:o.GREATER,517:o.NOTEQUAL};function H(e,t){if(t.type===1015&&s.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),o.texParameteri(e,o.TEXTURE_WRAP_S,se[t.wrapS]),o.texParameteri(e,o.TEXTURE_WRAP_T,se[t.wrapT]),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,se[t.wrapR]),o.texParameteri(e,o.TEXTURE_MAG_FILTER,ce[t.magFilter]),o.texParameteri(e,o.TEXTURE_MIN_FILTER,ce[t.minFilter]),t.compareFunction&&(o.texParameteri(e,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(e,o.TEXTURE_COMPARE_FUNC,le[t.compareFunction])),s.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&s.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||l.get(t).__currentAnisotropy){let n=s.get(`EXT_texture_filter_anisotropic`);o.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,u.getMaxAnisotropy())),l.get(t).__currentAnisotropy=t.anisotropy}}}function U(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,j));let r=t.source,i=b.get(r);i===void 0&&(i={},b.set(r,i));let a=ae(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ee(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function de(e,t,n,r){let i=e.updateRanges;if(i.length===0)c.texSubImage2D(o.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ue(r.start,t.width,4),c=ue(n.start,t.width,4);r.start<=o+1&&s===c&&ue(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let s=c.getParameter(o.UNPACK_ROW_LENGTH),l=c.getParameter(o.UNPACK_SKIP_PIXELS),u=c.getParameter(o.UNPACK_SKIP_ROWS);c.pixelStorei(o.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],s=Math.floor(a.start/4),l=Math.ceil(a.count/4),u=s%t.width,d=Math.floor(s/t.width),f=l;c.pixelStorei(o.UNPACK_SKIP_PIXELS,u),c.pixelStorei(o.UNPACK_SKIP_ROWS,d),c.texSubImage2D(o.TEXTURE_2D,0,u,d,f,1,n,r,t.data)}e.clearUpdateRanges(),c.pixelStorei(o.UNPACK_ROW_LENGTH,s),c.pixelStorei(o.UNPACK_SKIP_PIXELS,l),c.pixelStorei(o.UNPACK_SKIP_ROWS,u)}}function fe(e,t,n){let r=o.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=o.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=o.TEXTURE_3D);let i=U(e,t),a=t.source;c.bindTexture(r,e.__webglTexture,o.TEXTURE0+n);let s=l.get(a);if(a.version!==s.__version||i===!0){if(c.activeTexture(o.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=X.getPrimaries(X.workingColorSpace),n=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment);let e=C(t.image,!1,u.maxTextureSize);e=De(t,e);let l=d.convert(t.format,t.colorSpace),f=d.convert(t.type),p=D(t.internalFormat,l,f,t.normalized,t.colorSpace,t.isVideoTexture);H(r,t);let m,h=t.mipmaps,_=t.isVideoTexture!==!0,y=s.__version===void 0||i===!0,b=a.dataReady,x=k(t,e);if(t.isDepthTexture)p=O(t.format===g,t.type),y&&(_?c.texStorage2D(o.TEXTURE_2D,1,p,e.width,e.height):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,null));else if(t.isDataTexture){if(h.length>0){_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data);t.generateMipmaps=!1}else _?(y&&c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height),b&&de(t,e,l,f)):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){_&&y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(m=h[n],t.format!==1023){if(l!==null){if(_){if(b){if(t.layerUpdates.size>0){let e=lo(m.width,m.height,t.format,t.type);for(let r of t.layerUpdates){let t=m.data.subarray(r*e/m.data.BYTES_PER_ELEMENT,(r+1)*e/m.data.BYTES_PER_ELEMENT);c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,r,m.width,m.height,1,l,t)}t.clearLayerUpdates()}else c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,m.data)}}else c.compressedTexImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?b&&c.texSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,f,m.data):c.texImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,l,f,m.data)}else{_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)m=h[e],t.format===1023?_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data):l===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?b&&c.compressedTexSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,m.data):c.compressedTexImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,m.data)}}else if(t.isDataArrayTexture){if(_){if(y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,e.width,e.height,e.depth),b){if(t.layerUpdates.size>0){let n=lo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,l,f,t)}t.clearLayerUpdates()}else c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)}}else c.texImage3D(o.TEXTURE_2D_ARRAY,0,p,e.width,e.height,e.depth,0,l,f,e.data)}else if(t.isData3DTexture)_?(y&&c.texStorage3D(o.TEXTURE_3D,x,p,e.width,e.height,e.depth),b&&c.texSubImage3D(o.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)):c.texImage3D(o.TEXTURE_3D,0,p,e.width,e.height,e.depth,0,l,f,e.data);else if(t.isFramebufferTexture){if(y){if(_)c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<x;e++)c.texImage2D(o.TEXTURE_2D,e,p,t,n,0,l,f,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in o){let n=o.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),v.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of v)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=o.RGBA,i=o.RGBA,a=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,r,i,a,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(h.length>0){if(_&&y){let e=Oe(h[0]);c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,l,f,m):c.texImage2D(o.TEXTURE_2D,e,p,l,f,m);t.generateMipmaps=!1}else if(_){if(y){let t=Oe(e);c.texStorage2D(o.TEXTURE_2D,x,p,t.width,t.height)}b&&c.texSubImage2D(o.TEXTURE_2D,0,0,0,l,f,e)}else c.texImage2D(o.TEXTURE_2D,0,p,l,f,e);w(t)&&T(r),s.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function pe(e,t,n){if(t.image.length!==6)return;let r=U(e,t),i=t.source;c.bindTexture(o.TEXTURE_CUBE_MAP,e.__webglTexture,o.TEXTURE0+n);let a=l.get(i);if(i.version!==a.__version||r===!0){c.activeTexture(o.TEXTURE0+n);let e=X.getPrimaries(X.workingColorSpace),s=t.colorSpace===``?null:X.getPrimaries(t.colorSpace),l=t.colorSpace===``||e===s?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let f=t.isCompressedTexture||t.image[0].isCompressedTexture,p=t.image[0]&&t.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=C(t.image[e],!0,u.maxCubemapSize):m[e]=p?t.image[e].image:t.image[e],m[e]=De(t,m[e]);let h=m[0],g=d.convert(t.format,t.colorSpace),_=d.convert(t.type),v=D(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);H(o.TEXTURE_CUBE_MAP,t);let E;if(f){y&&b&&c.texStorage2D(o.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){E=m[e].mipmaps;for(let n=0;n<E.length;n++){let r=E[n];t.format===1023?y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&c.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):c.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(E=t.mipmaps,y&&b){E.length>0&&S++;let e=Oe(m[0]);c.texStorage2D(o.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(p){y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,g,_,m[e].data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,m[e].width,m[e].height,0,g,_,m[e].data);for(let t=0;t<E.length;t++){let n=E[t].image[e].image;y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,m[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,m[e]);for(let t=0;t<E.length;t++){let n=E[t];y?x&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}w(t)&&T(o.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function me(e,t,n,r,i,a){let s=d.convert(n.format,n.colorSpace),u=d.convert(n.type),f=D(n.internalFormat,s,u,n.normalized,n.colorSpace),m=l.get(t),h=l.get(n);if(h.__renderTarget=t,!m.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===o.TEXTURE_3D||i===o.TEXTURE_2D_ARRAY?c.texImage3D(i,a,f,e,n,t.depth,0,s,u,null):c.texImage2D(i,a,f,e,n,0,s,u,null)}c.bindFramebuffer(o.FRAMEBUFFER,e),Te(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,r,i,h.__webglTexture,0,we(t)):(i===o.TEXTURE_2D||i>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,r,i,h.__webglTexture,a),c.bindFramebuffer(o.FRAMEBUFFER,null)}function he(e,t,n){if(o.bindRenderbuffer(o.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=O(t.stencilBuffer,i),s=t.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Te(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we(t),a,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,we(t),a,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,a,t.width,t.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,s,o.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=d.convert(i.format,i.colorSpace),s=d.convert(i.type),c=D(i.internalFormat,a,s,i.normalized,i.colorSpace);Te(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we(t),c,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,we(t),c,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,c,t.width,t.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ge(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(c.bindFramebuffer(o.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let i=l.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,j)),i.__webglTexture===void 0){i.__webglTexture=o.createTexture(),c.bindTexture(o.TEXTURE_CUBE_MAP,i.__webglTexture),H(o.TEXTURE_CUBE_MAP,t.depthTexture);let e=d.convert(t.depthTexture.format),n=d.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=o.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=o.DEPTH24_STENCIL8);for(let i=0;i<6;i++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else z(t.depthTexture,0);let a=i.__webglTexture,s=we(t),u=r?o.TEXTURE_CUBE_MAP_POSITIVE_X+n:o.TEXTURE_2D,f=t.depthTexture.format===1027?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Te(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,u,a,0,s):o.framebufferTexture2D(o.FRAMEBUFFER,f,u,a,0);else if(t.depthTexture.format===1027)Te(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,u,a,0,s):o.framebufferTexture2D(o.FRAMEBUFFER,f,u,a,0);else throw Error(`Unknown depthTexture format`)}function _e(e){let t=l.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)ge(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?ge(t.__webglFramebuffer[0],e,0):ge(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=o.createRenderbuffer(),he(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];o.bindRenderbuffer(o.RENDERBUFFER,i),o.framebufferRenderbuffer(o.FRAMEBUFFER,r,o.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[0]):c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=o.createRenderbuffer(),he(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,r),o.framebufferRenderbuffer(o.FRAMEBUFFER,n,o.RENDERBUFFER,r)}}c.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(e,t,n){let r=l.get(e);t!==void 0&&me(r.__webglFramebuffer,e,e.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),n!==void 0&&_e(e)}function ye(e){let t=e.texture,n=l.get(e),r=l.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,s=i.length>1;if(s||(r.__webglTexture===void 0&&(r.__webglTexture=o.createTexture()),r.__version=t.version,f.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=o.createFramebuffer()}else n.__webglFramebuffer[e]=o.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=o.createFramebuffer()}else n.__webglFramebuffer=o.createFramebuffer();if(s)for(let e=0,t=i.length;e<t;e++){let t=l.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=o.createTexture(),f.memory.textures++)}if(e.samples>0&&Te(e)===!1){n.__webglMultisampledFramebuffer=o.createFramebuffer(),n.__webglColorRenderbuffer=[],c.bindFramebuffer(o.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=d.convert(r.format,r.colorSpace),s=d.convert(r.type),c=D(r.internalFormat,a,s,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),l=we(e);o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,e.width,e.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+t,o.RENDERBUFFER,n.__webglColorRenderbuffer[t])}o.bindRenderbuffer(o.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=o.createRenderbuffer(),he(n.__webglDepthRenderbuffer,e,!0)),c.bindFramebuffer(o.FRAMEBUFFER,null)}}if(a){c.bindTexture(o.TEXTURE_CUBE_MAP,r.__webglTexture),H(o.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)me(n.__webglFramebuffer[r][i],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else me(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);w(t)&&T(o.TEXTURE_CUBE_MAP),c.unbindTexture()}else if(s){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=l.get(r),s=o.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(s=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(s,a.__webglTexture),H(s,r),me(n.__webglFramebuffer,e,r,o.COLOR_ATTACHMENT0+t,s,0),w(r)&&T(s)}c.unbindTexture()}else{let i=o.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(i,r.__webglTexture),H(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)me(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,i,r);else me(n.__webglFramebuffer,e,t,o.COLOR_ATTACHMENT0,i,0);w(t)&&T(i),c.unbindTexture()}e.depthBuffer&&_e(e)}function be(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(w(r)){let t=E(e),n=l.get(r).__webglTexture;c.bindTexture(t,n),T(t),c.unbindTexture()}}}let xe=[],Se=[];function Ce(e){if(e.samples>0){if(Te(e)===!1){let t=e.textures,n=e.width,r=e.height,i=o.COLOR_BUFFER_BIT,a=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,s=l.get(e),u=t.length>1;if(u)for(let e=0;e<t.length;e++)c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,null),c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,null,0);c.bindFramebuffer(o.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let d=e.texture.mipmaps;d&&d.length>0?c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=o.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=o.STENCIL_BUFFER_BIT)),u){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,s.__webglColorRenderbuffer[c]);let e=l.get(t[c]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0)}o.blitFramebuffer(0,0,n,r,0,0,n,r,i,o.NEAREST),m===!0&&(xe.length=0,Se.length=0,xe.push(o.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(xe.push(a),Se.push(a),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xe))}if(c.bindFramebuffer(o.READ_FRAMEBUFFER,null),c.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<t.length;e++){c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=l.get(t[e]).__webglTexture;c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,n,0)}c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&m){let t=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[t])}}}function we(e){return Math.min(u.maxSamples,e.samples)}function Te(e){let t=l.get(e);return e.samples>0&&s.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ee(e){let t=f.render.frame;_.get(e)!==t&&(_.set(e,t),e.update())}function De(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(X.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Oe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=ne,this.getTextureUnits=I,this.setTextureUnits=re,this.setTexture2D=z,this.setTexture2DArray=oe,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return c.buffers.depth.getReversed()}}function hl(e,t){function n(n,r=``){let i,a=X.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_l=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ca({vertexShader:gl,fragmentShader:_l,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends B{constructor(e,t){super();let n=this,r=null,i=1,a=null,s=`local-floor`,l=1,u=null,d=null,f=null,_=null,v=null,y=null,b=typeof XRWebGLBinding<`u`,x=new vl,S={},C=t.getContextAttributes(),w=null,T=null,E=[],D=[],O=new G,k=null,A=new Na;A.viewport=new Ge;let j=new Na;j.viewport=new Ge;let M=[A,j],N=new za,ee=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new Et,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new Et,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new Et,E[e]=t),t.getHandSpace()};function F(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}ee=null,P=null,x.reset();for(let e in S)delete S[e];e.setRenderTarget(w),v=null,_=null,f=null,r=null,T=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(w=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),C.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),b&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,s=null;C.depth&&(s=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=C.stencil?g:h,a=C.stencil?p:c);let l={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:i};f=this.getBinding(),_=f.createProjectionLayer(l),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new qe(_.textureWidth,_.textureHeight,{format:m,type:o,depthTexture:new br(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{let n={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new qe(v.framebufferWidth,v.framebufferHeight,{format:m,type:o,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}let I=new K,re=new K;function ie(e,t,n){I.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=I.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function R(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),N.near=j.near=A.near=t,N.far=j.far=A.far=n,(ee!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),ee=N.near,P=N.far),N.layers.mask=e.layers.mask|6,A.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;R(N,i);for(let e=0;e<a.length;e++)R(a[e],i);a.length===2?ie(N,A,j):N.projectionMatrix.copy(A.projectionMatrix),ae(e,N,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=le*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(_!==null||v!==null)return l},this.setFoveation=function(e){l=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(e){return S[e]};let z=null;function oe(t,i){if(d=i.getViewerPose(u||a),y=i,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(v!==null)a=v.getViewport(r);else{let t=f.getViewSubImage(_,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=M[n];o===void 0&&(o=new Na,o.layers.enable(n),o.viewport=new Ge,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&b){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&b){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new Sr,S[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,u||a)}z&&z(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),y=null}let B=new fo;B.setAnimationLoop(oe),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}},bl=new Xe,xl=new J;xl.set(-1,0,0,0,1,0,0,0,1);function Sl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ia(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(bl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(xl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var wl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tl=null;function El(){return Tl===null&&(Tl=new rr(wl,16,16,v,u),Tl.name=`DFG_LUT`,Tl.minFilter=i,Tl.magFilter=i,Tl.wrapS=t,Tl.wrapT=t,Tl.generateMipmaps=!1,Tl.needsUpdate=!0),Tl}var Dl=class{constructor(e={}){let{canvas:t=ne(),context:n=null,depth:r=!0,stencil:i=!1,alpha:l=!1,antialias:m=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:v=`default`,failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1,outputBufferType:C=o}=e;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);w=n.getContextAttributes().alpha}else w=l;let T=C,E=new Set([b,y,_]),D=new Set([o,c,s,p,d,f]),k=new Uint32Array(4),A=new Int32Array(4),j=new K,M=null,N=null,P=[],F=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ie=!1,ae=null;this._outputColorSpace=O;let oe=0,B=0,V=null,se=-1,ce=null,le=new Ge,H=new Ge,U=null,ue=new Z(0),de=0,fe=t.width,pe=t.height,me=1,he=null,ge=null,_e=new Ge(0,0,fe,pe),ve=new Ge(0,0,fe,pe),ye=!1,be=new dr,xe=!1,Se=!1,Ce=new Xe,we=new K,Te=new Ge,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return V===null?me:1}let W=n;function ke(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:m,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:x};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,et,!1),t.addEventListener(`webglcontextrestored`,tt,!1),t.addEventListener(`webglcontextcreationerror`,nt,!1),W===null){let t=`webgl2`;if(W=ke(t,e),W===null)throw ke(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw R(`WebGLRenderer: `+e.message),e}let G,Ae,q,je,J,Y,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ke,Je,Ye,Ze;function Qe(){G=new Go(W),G.init(),Je=new hl(W,G),Ae=new xo(W,G,e,Je),q=new pl(W,G),Ae.reversedDepthBuffer&&S&&q.buffers.depth.setReversed(!0),je=new Jo(W),J=new qc,Y=new ml(W,G,q,J,Ae,Je,je),Me=new Wo(I),Ne=new po(W),Ye=new yo(W,Ne),Pe=new Ko(W,Ne,je,Ye),Fe=new Xo(W,Pe,Ne,Ye,je),Ue=new Yo(W,Ae,Y),Be=new So(J),Ie=new Kc(I,Me,G,Ae,Ye,Be),Le=new Sl(I,J),Re=new Zc,ze=new il(G),He=new vo(I,Me,q,Fe,w,h),Ve=new fl(I,Fe,Ae),Ze=new Cl(W,je,Ae,q),We=new bo(W,G,je),Ke=new qo(W,G,je),je.programs=Ie.programs,I.capabilities=Ae,I.extensions=G,I.properties=J,I.renderLists=Re,I.shadowMap=Ve,I.state=q,I.info=je}Qe(),T!==1009&&(te=new Qo(T,t.width,t.height,r,i));let $e=new yl(I,W);this.xr=$e,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let e=G.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=G.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(e){e!==void 0&&(me=e,this.setSize(fe,pe,!1))},this.getSize=function(e){return e.set(fe,pe)},this.setSize=function(e,n,r=!0){if($e.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}fe=e,pe=n,t.width=Math.floor(e*me),t.height=Math.floor(n*me),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(fe*me,pe*me).floor()},this.setDrawingBufferSize=function(e,n,r){fe=e,pe=n,me=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(T===1009){R(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),q.viewport(le.copy(_e).multiplyScalar(me).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),q.scissor(H.copy(ve).multiplyScalar(me).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){q.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(V!==null){let t=V.texture.format;e=E.has(t)}if(e){let e=V.texture.type,t=D.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(k[0]=i,k[1]=a,k[2]=o,k[3]=r,W.clearBufferuiv(W.COLOR,0,k)):(A[0]=i,A[1]=a,A[2]=o,A[3]=r,W.clearBufferiv(W.COLOR,0,A))}else r|=W.COLOR_BUFFER_BIT}t&&(r|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&W.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,et,!1),t.removeEventListener(`webglcontextrestored`,tt,!1),t.removeEventListener(`webglcontextcreationerror`,nt,!1),He.dispose(),Re.dispose(),ze.dispose(),J.dispose(),Me.dispose(),Fe.dispose(),Ye.dispose(),Ze.dispose(),Ie.dispose(),$e.dispose(),$e.removeEventListener(`sessionstart`,lt),$e.removeEventListener(`sessionend`,ut),dt.stop()};function et(e){e.preventDefault(),re(`WebGLRenderer: Context Lost.`),ie=!0}function tt(){re(`WebGLRenderer: Context Restored.`),ie=!1;let e=je.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Qe(),je.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function nt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function rt(e){let t=e.target;t.removeEventListener(`dispose`,rt),it(t)}function it(e){at(e),J.remove(e)}function at(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=xt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ye.setup(i,r,s,n,c);let h,g=We;if(c!==null&&(h=Ne.get(c),g=Ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(W.LINES)):g.setMode(W.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(W.LINES):i.isLineLoop?g.setMode(W.LINE_LOOP):g.setMode(W.LINE_STRIP)}else i.isPoints?g.setMode(W.POINTS):i.isSprite&&g.setMode(W.TRIANGLES);if(i.isBatchedMesh){if(G.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(W,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ot(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,n),e.side=0,e.needsUpdate=!0,_t(e,t,n),e.side=2):_t(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),N=ze.get(n),N.init(t),F.push(N),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),N.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ot(a,n,e),r.add(a)}else ot(t,n,e),r.add(t)}}),N=F.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){J.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}G.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let st=null;function ct(e){st&&st(e)}function lt(){dt.stop()}function ut(){dt.start()}let dt=new fo;dt.setAnimationLoop(ct),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(e){st=e,$e.setAnimationLoop(e),e===null?dt.stop():dt.start()},$e.addEventListener(`sessionstart`,lt),$e.addEventListener(`sessionend`,ut),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=$e.enabled===!0&&$e.isPresenting===!0,r=te!==null&&(V===null||n)&&te.begin(I,V);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(t),t=$e.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,V),N=ze.get(e,F.length),N.init(t),N.state.textureUnits=Y.getTextureUnits(),F.push(N),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,ee,t.reversedDepth),Se=this.localClippingEnabled,xe=Be.init(this.clippingPlanes,Se),M=Re.get(e,P.length),M.init(),P.push(M),$e.enabled===!0&&$e.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&ft(e,t,-1/0,I.sortObjects)}ft(e,t,0,I.sortObjects),M.finish(),I.sortObjects===!0&&M.sort(he,ge),De=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,De&&He.addToRenderList(M,e),this.info.render.frame++,xe===!0&&Be.beginShadows();let i=N.state.shadowsArray;if(Ve.render(i,e,t),xe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&te.hasRenderPass())===!1){let n=M.opaque,r=M.transmissive;if(N.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];mt(n,r,e,a)}De&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(M,e,n,n.viewport)}}else r.length>0&&mt(n,r,e,t),De&&He.render(e),pt(M,e,t)}V!==null&&B===0&&(Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V)),r&&te.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),Ye.resetDefaultState(),se=-1,ce=null,F.pop(),F.length>0?(N=F[F.length-1],Y.setTextureUnits(N.state.textureUnits),xe===!0&&Be.setGlobalState(I.clippingPlanes,N.state.camera)):N=null,P.pop(),M=P.length>0?P[P.length-1]:null,ae!==null&&ae.renderEnd()};function ft(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)N.pushLightProbeGrid(e);else if(e.isLight)N.pushLight(e),e.castShadow&&N.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||be.intersectsSprite(e)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let t=Fe.update(e),i=e.material;i.visible&&M.push(e,t,i,n,Te.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||be.intersectsObject(e))){let t=Fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Te.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&M.push(e,t,s,n,Te.z,o)}}else i.visible&&M.push(e,t,i,n,Te.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ft(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;N.setupLightsView(n),xe===!0&&Be.setGlobalState(I.clippingPlanes,n),r&&q.viewport(le.copy(r)),i.length>0&&ht(i,t,n),a.length>0&&ht(a,t,n),o.length>0&&ht(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function mt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[r.id]===void 0){let e=G.has(`EXT_color_buffer_half_float`)||G.has(`EXT_color_buffer_float`);N.state.transmissionRenderTarget[r.id]=new qe(1,1,{generateMipmaps:!0,type:e?u:o,minFilter:a,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:X.workingColorSpace})}let s=N.state.transmissionRenderTarget[r.id],c=r.viewport||le;s.setSize(c.z*I.transmissionResolutionScale,c.w*I.transmissionResolutionScale);let l=I.getRenderTarget(),d=I.getActiveCubeFace(),f=I.getActiveMipmapLevel();I.setRenderTarget(s),I.getClearColor(ue),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),De&&He.render(n);let p=I.toneMapping;I.toneMapping=0;let m=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),N.setupLightsView(r),xe===!0&&Be.setGlobalState(I.clippingPlanes,r),ht(e,n,r),Y.updateMultisampleRenderTarget(s),Y.updateRenderTargetMipmap(s),G.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,gt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Y.updateMultisampleRenderTarget(s),Y.updateRenderTargetMipmap(s))}I.setRenderTarget(l,d,f),I.setClearColor(ue,de),m!==void 0&&(r.viewport=m),I.toneMapping=p}function ht(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&gt(o,t,n,s,l,c)}}function gt(e,t,n,r,i,a){e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function _t(e,t,n){t.isScene!==!0&&(t=Ee);let r=J.get(e),i=N.state.lights,a=N.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n,N.state.lightProbeGridArray),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,rt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=Ie.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,I),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Be.uniform),yt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=N.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ac.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];j.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(j))return n}return null}function xt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Y.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:X.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=N.state.lights;if(xe===!0&&(Se===!0||e!==ce)){let t=e===ce&&r.id===se;Be.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Be.numPlanes||v.numIntersection!==Be.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=N.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=_t(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(q.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=bt(N.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ce!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(W,`projectionMatrix`,e.projectionMatrix),T.setValue(W,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(W,we.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&T.setValue(W,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(W,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(W,`directionalShadowMap`,y.state.directionalShadowMap,Y),y.state.spotShadowMap.length>0&&T.setValue(W,`spotShadowMap`,y.state.spotShadowMap,Y),y.state.pointShadowMap.length>0&&T.setValue(W,`pointShadowMap`,y.state.pointShadowMap,Y)),i.isSkinnedMesh){T.setOptional(W,i,`bindMatrix`),T.setOptional(W,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(W,`boneTexture`,e.boneTexture,Y))}i.isBatchedMesh&&(T.setOptional(W,i,`batchingTexture`),T.setValue(W,`batchingTexture`,i._matricesTexture,Y),T.setOptional(W,i,`batchingIdTexture`),T.setValue(W,`batchingIdTexture`,i._indirectTexture,Y),T.setOptional(W,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(W,`batchingColorTexture`,i._colorsTexture,Y));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ue.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(W,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=El()),C){if(T.setValue(W,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&St(E,w),a&&r.fog===!0&&Le.refreshFogUniforms(E,a),Le.refreshMaterialUniforms(E,r,me,pe,N.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ac.upload(W,vt(v),E,Y)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ac.upload(W,vt(v),E,Y),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(W,`center`,i.center),T.setValue(W,`modelViewMatrix`,i.modelViewMatrix),T.setValue(W,`normalMatrix`,i.normalMatrix),T.setValue(W,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ze.update(n,x),Ze.bind(n,x)}}return x}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let wt=W.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){V=e,oe=t,B=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(W.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),H.copy(e.scissor),U=e.scissorTest,q.viewport(le),q.scissor(H),q.setScissorTest(U),se=-1;return}if(o.__webglFramebuffer===void 0)Y.setupRenderTarget(e);else if(o.__hasExternalTextures)Y.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Y.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Y.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),H.copy(e.scissor),U=e.scissorTest}else le.copy(_e).multiplyScalar(me).floor(),H.copy(ve).multiplyScalar(me).floor(),U=ye;if(n!==0&&(r=wt),q.bindFramebuffer(W.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(le),q.scissor(H),q.setScissorTest(U),i){let r=J.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,t.__webglTexture,n)}se=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){q.bindFramebuffer(W.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(c)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ae.textureTypeReadable(l)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&W.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(W.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(W.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ae.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,d),W.bufferData(W.PIXEL_PACK_BUFFER,a.byteLength,W.STREAM_READ),W.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0);let f=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(W.FRAMEBUFFER,f);let p=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await z(W,p,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,d),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,a),W.deleteBuffer(d),W.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Y.setTexture2D(e,0),W.copyTexSubImage2D(W.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()};let Tt=W.createFramebuffer(),Et=W.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(Y.setTexture3D(t,0),v=W.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Y.setTexture2DArray(t,0),v=W.TEXTURE_2D_ARRAY):(Y.setTexture2D(t,0),v=W.TEXTURE_2D),q.activeTexture(W.TEXTURE0),q.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(W.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(W.UNPACK_ROW_LENGTH),b=q.getParameter(W.UNPACK_IMAGE_HEIGHT),x=q.getParameter(W.UNPACK_SKIP_PIXELS),S=q.getParameter(W.UNPACK_SKIP_ROWS),C=q.getParameter(W.UNPACK_SKIP_IMAGES);q.pixelStorei(W.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(W.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(W.UNPACK_SKIP_PIXELS,l),q.pixelStorei(W.UNPACK_SKIP_ROWS,u),q.pixelStorei(W.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(W.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),W.blitFramebuffer(l,u,o,s,f,p,o,s,W.DEPTH_BUFFER_BIT,W.NEAREST);q.bindFramebuffer(W.READ_FRAMEBUFFER,null),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(W.READ_FRAMEBUFFER,Tt),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,Et);for(let e=0;e<c;e++)w?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,n.__webglTexture,i),T?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,r.__webglTexture,a),i===0?T?W.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):W.copyTexSubImage2D(v,a,f,p,l,u,o,s):W.blitFramebuffer(l,u,o,s,f,p,o,s,W.COLOR_BUFFER_BIT,W.NEAREST);q.bindFramebuffer(W.READ_FRAMEBUFFER,null),q.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?W.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(W.UNPACK_ROW_LENGTH,y),q.pixelStorei(W.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(W.UNPACK_SKIP_PIXELS,x),q.pixelStorei(W.UNPACK_SKIP_ROWS,S),q.pixelStorei(W.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&W.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Y.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Y.setTextureCube(e,0):e.isData3DTexture?Y.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Y.setTexture2DArray(e,0):Y.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){oe=0,B=0,V=null,q.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ee}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X._getDrawingBufferColorSpace(e),t.unpackColorSpace=X._getUnpackColorSpace()}},Ol=`1.3.27`;function kl(e,t,n){return Math.max(e,Math.min(t,n))}function Al(e,t,n){return(1-n)*e+n*t}function jl(e,t,n,r){return Al(e,t,1-Math.exp(-n*r))}function Ml(e,t){return(e%t+t)%t}var Nl=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=kl(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=jl(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function Pl(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var Fl=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=Pl(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Il=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Ll=100/6,Rl={passive:!1};function zl(e,t){return e===1?Ll:e===2?t:1}var Bl=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Il;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Rl),this.element.addEventListener(`touchstart`,this.onTouchStart,Rl),this.element.addEventListener(`touchmove`,this.onTouchMove,Rl),this.element.addEventListener(`touchend`,this.onTouchEnd,Rl)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Rl),this.element.removeEventListener(`touchstart`,this.onTouchStart,Rl),this.element.removeEventListener(`touchmove`,this.onTouchMove,Rl),this.element.removeEventListener(`touchend`,this.onTouchEnd,Rl)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=zl(r,this.window.width),a=zl(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Vl=e=>Math.min(1,1.001-2**(-10*e)),Hl=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Nl;emitter=new Il;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=Ol,window.lenis||(window.lenis={}),window.lenis.version=Ol,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=Vl:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new Fl(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Bl(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof Element&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=kl(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=Vl:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Ml(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},Ul=new Jt,Wl=new K,Gl=class extends Fa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new gn([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new gn([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new eo(t,6,1);return this.setAttribute(`instanceStart`,new jn(n,3,0)),this.setAttribute(`instanceEnd`,new jn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new eo(t,6,1);return this.setAttribute(`instanceColorStart`,new jn(n,3,0)),this.setAttribute(`instanceColorEnd`,new jn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Qi(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ul.setFromBufferAttribute(t),this.boundingBox.union(Ul))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Wl.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Wl)),Wl.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Wl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};$.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new G(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},mo.line={uniforms:aa.merge([$.common,$.fog,$.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Kl=class extends ca{constructor(e){super({type:`LineMaterial`,uniforms:aa.clone(mo.line.uniforms),vertexShader:mo.line.vertexShader,fragmentShader:mo.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},ql=new Ge,Jl=new K,Yl=new K,Xl=new Ge,Zl=new Ge,Ql=new Ge,$l=new K,eu=new Xe,tu=new co,nu=new K,ru=new Jt,iu=new bn,au=new Ge,ou,su;function cu(e,t,n){return au.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),au.multiplyScalar(1/au.w),au.x=su/n.width,au.y=su/n.height,au.applyMatrix4(e.projectionMatrixInverse),au.multiplyScalar(1/au.w),Math.abs(Math.max(au.x,au.y))}function lu(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){tu.start.fromBufferAttribute(i,r),tu.end.fromBufferAttribute(a,r),tu.applyMatrix4(n);let o=new K,s=new K;ou.distanceSqToSegment(tu.start,tu.end,s,o),s.distanceTo(o)<su*.5&&t.push({point:s,pointOnLine:o,distance:ou.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function uu(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;ou.at(1,Ql),Ql.w=1,Ql.applyMatrix4(t.matrixWorldInverse),Ql.applyMatrix4(r),Ql.multiplyScalar(1/Ql.w),Ql.x*=i.x/2,Ql.y*=i.y/2,Ql.z=0,$l.copy(Ql),eu.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Xl.fromBufferAttribute(s,t),Zl.fromBufferAttribute(c,t),Xl.w=1,Zl.w=1,Xl.applyMatrix4(eu),Zl.applyMatrix4(eu),Xl.z>u&&Zl.z>u)continue;if(Xl.z>u){let e=Xl.z-Zl.z,t=(Xl.z-u)/e;Xl.lerp(Zl,t)}else if(Zl.z>u){let e=Zl.z-Xl.z,t=(Zl.z-u)/e;Zl.lerp(Xl,t)}Xl.applyMatrix4(r),Zl.applyMatrix4(r),Xl.multiplyScalar(1/Xl.w),Zl.multiplyScalar(1/Zl.w),Xl.x*=i.x/2,Xl.y*=i.y/2,Zl.x*=i.x/2,Zl.y*=i.y/2,tu.start.copy(Xl),tu.start.z=0,tu.end.copy(Zl),tu.end.z=0;let o=tu.closestPointToPointParameter($l,!0);tu.at(o,nu);let l=ke.lerp(Xl.z,Zl.z,o),d=l>=-1&&l<=1,f=$l.distanceTo(nu)<su*.5;if(d&&f){tu.start.fromBufferAttribute(s,t),tu.end.fromBufferAttribute(c,t),tu.start.applyMatrix4(a),tu.end.applyMatrix4(a);let r=new K,i=new K;ou.distanceSqToSegment(tu.start,tu.end,i,r),n.push({point:i,pointOnLine:r,distance:ou.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var du=class extends er{constructor(e=new Gl,t=new Kl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Jl.fromBufferAttribute(t,e),Yl.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Jl.distanceTo(Yl);let i=new eo(r,2,1);return e.setAttribute(`instanceDistanceStart`,new jn(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new jn(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;ou=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;su=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),iu.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?su*.5:cu(r,Math.max(r.near,iu.distanceToPoint(ou.origin)),s.resolution),iu.radius+=c,ou.intersectsSphere(iu)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ru.copy(o.boundingBox).applyMatrix4(a);let l;l=n?su*.5:cu(r,Math.max(r.near,ru.distanceToPoint(ou.origin)),s.resolution),ru.expandByScalar(l),ou.intersectsBox(ru)!==!1&&(n?lu(this,t):uu(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ql),this.material.uniforms.resolution.value.set(ql.z,ql.w))}},fu=JSON.parse(`[0.27,-48.81,5.71,0.91,0.33,-50.34,5.53,1.62,0.4,-77.07,4.78,1.25,0.4,61.22,5.58,0.41,0.46,-3.03,5.13,-0.13,0.49,-6.01,4.37,1.63,0.54,27.08,5.8,0.69,0.58,-29.72,5.04,-0.15,0.62,8.49,5.7,0.32,0.65,66.1,5.87,1.07,0.94,-17.34,4.55,-0.05,1.06,62.29,5.9,0.27,1.08,-16.53,5.78,1.08,1.13,-10.51,4.99,1.62,1.17,-71.44,5.59,-0.1,1.17,67.17,5.68,1.05,1.28,61.31,5.8,-0.07,1.33,-5.71,4.61,1.03,1.42,13.4,5.55,0.9,1.57,58.44,5.98,0.69,1.58,-49.08,5.7,0.52,1.61,64.2,5.57,-0.02,1.95,-22.51,5.93,0.14,2.01,-33.53,5.67,1.12,2.07,-8.82,5.99,1.03,2.1,29.09,2.07,-0.04,2.26,18.21,5.57,1.04,2.29,59.15,2.28,0.38,2.34,-27.99,5.42,0.41,2.35,-45.75,3.88,1.01,2.51,11.15,5.54,-0.06,2.51,-82.22,5.29,1.05,2.58,-5.25,5.84,0.97,2.58,46.07,5.01,0.41,2.68,-12.58,5.84,1,2.82,-15.47,4.89,0.49,2.89,-27.8,5.41,1.35,2.93,-35.13,5.24,0.46,3.04,-17.94,5.29,1.48,3.31,15.18,2.83,-0.19,3.33,-84.99,5.78,1.71,3.38,41.04,5.71,0.33,3.43,-26.02,5.94,1.55,3.62,-7.78,5.13,1.6,3.65,20.21,4.79,1.57,3.66,-18.93,4.44,1.64,3.73,-9.57,5.77,-0.08,4.04,-31.45,5.66,1.35,4.24,61.53,5.74,0.9,4.27,38.68,4.61,0.06,4.29,47.95,5.86,-0.08,4.58,36.79,4.51,0.05,4.66,31.52,5.88,-0.01,4.86,-8.82,3.56,1.21,5.02,-64.87,4.23,0.58,5.1,30.94,5.89,-0.1,5.15,8.19,5.38,1.34,5.16,-69.62,5.5,-0.05,5.19,32.91,5.79,1.6,5.28,37.97,5.16,0.44,5.37,-77.43,5.96,1.4,5.38,-28.98,5.18,1.01,5.44,-20.06,5.61,1.58,6.07,52.02,5.58,-0.11,6.2,61.83,5.38,0.01,6.28,53.05,5.72,-0.06,6.35,1.94,5.77,0.86,6.44,-77.25,2.82,0.62,6.55,-43.68,3.93,0.18,6.57,-42.31,2.4,1.08,6.81,-25.55,5.99,1.02,6.98,-33.01,4.86,1.63,7.01,17.89,5.01,1.58,7.06,44.39,5.18,0.04,7.11,-39.91,5.42,1.56,7.51,-3.96,5.72,1.55,7.53,29.75,5.2,0.27,7.58,59.98,5.94,0,7.59,-23.79,5.17,0.13,7.61,-48.21,5.67,0.37,7.85,-48.8,4.76,0.02,7.86,33.58,5.88,1.13,7.89,-62.96,4.36,-0.06,7.89,-62.97,4.53,0.15,7.92,52.84,5.59,1.16,7.94,54.52,4.74,-0.1,8.1,6.96,5.69,-0.01,8.15,20.29,5.38,1.07,8.18,-63.03,5.07,0.04,8.25,62.93,4.17,0.13,8.29,54.9,5.93,1.04,8.42,-29.56,5.55,1.26,8.62,-52.37,5.57,0.47,8.81,-3.59,5.2,0.57,8.89,-0.51,5.94,0.44,8.92,-48,5.51,0.46,9.03,54.17,5.08,-0.1,9.11,60.33,5.78,0.29,9.19,44.49,5.14,1.59,9.2,15.23,5.89,-0.15,9.22,33.72,4.34,-0.12,9.24,53.9,3.69,-0.2,9.34,-24.77,5.57,0.72,9.34,35.4,5.45,0.89,9.64,29.31,4.34,0.87,9.79,49.35,5.45,1.64,9.83,30.86,3.27,1.27,9.84,21.25,5.88,0.85,9.97,-44.8,6,1.14,9.98,21.44,5.36,1.16,10.11,-59.45,5.89,0.56,10.13,56.54,2.24,1.17,10.18,-4.35,5.9,1.09,10.28,39.46,5.3,0.89,10.33,-46.08,4.59,0.95,10.44,-56.5,5.72,0.13,10.51,66.15,5.83,1.04,10.52,50.51,4.8,-0.1,10.62,-65.47,5.38,0.52,10.67,-60.26,5.99,1.32,10.84,-57.46,4.36,0.02,10.87,47.02,4.95,0.17,10.9,-17.99,2.04,1.02,11.05,-10.61,4.77,1,11.05,-38.42,5.9,1.14,11.11,47.86,5.66,-0.11,11.18,48.28,4.48,-0.07,11.19,-22.01,5.22,0.35,11.24,-42.68,5.94,0.3,11.32,55.22,5.41,0.02,11.41,74.99,5.64,0.08,11.44,-47.55,5.8,0.64,11.55,-22.52,5.49,0.98,11.64,15.48,5.36,1.56,11.76,11.97,5.51,0.99,11.83,24.27,4.08,1.1,11.85,6.74,5.98,0.94,11.93,-18.06,5.7,1.3,11.94,74.85,5.42,-0.07,12,-21.72,5.57,-0.06,12.04,72.67,5.86,1.01,12.07,7.3,5.92,1.1,12.1,5.28,5.74,0.89,12.15,-74.92,5.09,1.35,12.17,7.59,4.44,1.5,12.21,50.97,4.9,-0.09,12.24,16.94,5.07,0.5,12.28,57.82,3.46,0.59,12.31,-24.14,5.9,0.94,12.36,-13.56,5.59,1.33,12.45,41.08,4.53,-0.14,12.47,27.71,5.55,0.4,12.53,-10.64,5.17,0.51,12.67,-50.99,5.24,0.36,12.68,64.25,5.35,0.53,13.17,-24.01,5.47,1.27,13.25,-1.14,4.78,1.55,13.27,61.12,4.8,0.54,13.41,-62.87,5.73,1.57,13.65,19.19,5.8,-0.02,13.72,83.71,5.59,0.11,13.74,23.63,5.46,1.01,13.75,58.97,4.83,1.22,13.75,-69.53,5.45,1.1,13.93,-7.35,5.88,1.52,14.01,-11.27,5.35,1.51,14.17,59.18,4.62,0.96,14.18,60.72,2.15,-0.05,14.19,38.5,3.86,0.13,14.2,60.36,5.56,-0.05,14.3,23.42,4.4,0.94,14.46,28.99,5.44,1.08,14.56,33.95,5.99,1,14.63,66.35,5.97,-0.01,14.65,-29.36,4.3,-0.15,14.68,-11.38,5.62,0.95,15.01,44.71,5.69,-0.01,15.33,-38.92,5.59,1.19,15.61,-31.55,5.5,0.08,15.7,31.8,5.5,-0.04,15.71,-46.4,5.39,0.9,15.73,41.35,5.95,0.16,15.74,7.89,4.27,0.95,15.76,-4.84,5.4,1.11,15.9,61.07,5.92,0.51,16.01,52.5,5.99,1.45,16.08,61.58,5.83,0.57,16.27,14.95,5.64,0.42,16.42,21.47,5.33,0,16.42,21.47,5.55,-0.05,16.52,-9.84,5.58,0.01,16.52,-46.72,3.32,0.89,16.83,-61.78,5.36,0.88,16.94,-9.79,5.71,0.45,16.95,-41.49,5.21,0.16,16.99,20.74,5.56,0.12,17,43.94,5.04,0.11,17.07,54.92,5.17,0.7,17.09,5.65,5.51,0.33,17.1,-55.25,3.94,-0.12,17.14,58.26,5.77,-0.02,17.15,-10.18,3.46,1.16,17.19,86.26,4.24,1.21,17.38,47.24,4.26,0.01,17.43,35.62,2.07,1.58,17.45,19.66,5.57,0.7,17.58,42.08,5.67,0.6,17.58,25.46,5.81,1.47,17.64,2.45,5.97,1.49,17.66,68.78,5.32,-0.01,17.78,55.15,4.34,0.17,17.78,31.42,5.15,0.26,17.79,37.72,5.8,-0.09,17.86,64.2,5.56,-0.05,17.86,21.03,4.66,1.02,17.92,30.09,4.51,1.09,17.92,65.02,5.57,-0.07,17.93,-2.25,5.93,1.4,18.07,79.67,5.6,0.01,18.19,-37.86,5.95,0.28,18.43,7.58,5.21,0.32,18.44,24.58,4.67,1.05,18.53,16.13,5.97,-0.08,18.6,-7.92,5.14,0.45,18.7,-0.97,5.7,0.43,18.8,-45.53,4.97,0.57,18.94,-68.88,4.25,0.48,19.05,71.74,5.87,2.04,19.15,-2.5,5.42,0.89,19.45,3.61,5.13,0.07,19.87,27.26,4.74,0.03,19.95,-0.51,5.87,0.64,20.02,58.23,4.95,0.68,20.28,28.74,5.23,1.4,20.59,45.53,4.87,1.08,20.85,20.47,5.97,1.68,20.88,-30.95,5.84,1.61,20.92,37.71,5.6,0.28,21.01,-8.18,3.6,1.07,21.09,-6.91,5.92,0.41,21.17,-41.49,5.42,1.03,21.27,-64.37,5.92,1.56,21.41,-14.6,4.9,1.23,21.45,60.24,2.66,0.16,21.48,68.13,4.72,1.05,21.56,19.17,5.35,0.4,21.58,43.46,5.98,0.52,21.67,19.24,5.5,1.11,21.71,-13.06,5.51,0.32,21.91,45.41,4.83,0.42,22.09,-43.32,3.41,1.54,22.4,-21.63,5.11,0.03,22.53,47.01,5.27,1,22.55,6.14,4.84,1.37,22.6,-26.21,5.92,1.33,22.81,70.26,5.82,0.49,22.81,-49.07,3.93,0.97,22.87,15.35,3.62,0.97,22.93,-30.28,5.79,1.07,23.23,-36.87,5.49,1.02,23.36,58.33,5.69,1.44,23.43,-7.03,5.75,0.64,23.48,59.23,4.68,0.99,23.57,37.24,5.9,-0.07,23.66,-15.68,5.62,0.07,23.7,18.46,5.9,1.54,23.98,17.43,5.95,0.26,24,-15.4,5.41,1.23,24.04,-29.91,5.69,0.34,24.2,41.41,4.1,0.54,24.27,12.14,5.54,0.35,24.37,-84.77,5.66,0.94,24.43,-57.24,0.45,-0.16,24.48,-82.97,5.88,0.62,24.5,48.63,3.59,1.27,24.53,57.98,5.55,1.39,24.61,-36.53,5.94,1.05,24.63,73.04,5.28,0.97,24.72,-21.28,5.58,0.35,24.84,44.39,5.01,0.88,24.92,16.41,5.98,1.12,24.95,-56.2,5.76,0.88,25.15,40.58,4.96,-0.07,25.17,43.3,5.63,0.21,25.36,5.49,4.45,1.35,25.41,30.05,5.97,1.01,25.44,-11.32,5.75,0.44,25.45,42.61,4.96,0.62,25.45,-60.79,5.7,1.26,25.51,-36.83,5.7,-0.01,25.51,35.25,5.63,-0.06,25.54,-32.33,5.25,1.04,25.59,68.04,5.57,-0.05,25.62,-53.74,5.52,0.55,25.62,20.27,5.24,0.84,25.68,-3.69,4.98,1.38,25.73,70.62,5.18,-0.02,25.83,60.55,5.78,-0.01,25.92,50.69,4.01,-0.1,26.02,-15.94,3.49,0.73,26.35,9.16,4.26,0.94,26.41,-25.05,5.29,0.4,26.5,-5.73,5.37,1.52,26.52,-50.82,5.49,1.62,26.53,-53.52,5.04,0.03,26.94,63.85,5.63,0.8,27.05,16.96,5.86,-0.04,27.11,3.69,5.91,0.97,27.16,37.95,5.94,0.98,27.17,32.69,5.78,0.57,27.4,-10.69,4.66,0.33,27.54,22.28,5.83,0.74,27.72,11.04,5.92,0.3,27.73,-50.21,5.94,0.15,27.74,51.93,5.96,0.42,27.87,-10.33,3.74,1.14,28,55.15,5.53,-0.17,28.04,50.79,5.7,-0.07,28.22,-16.93,5.78,0.26,28.27,29.58,3.42,0.49,28.32,40.73,5.42,1.31,28.38,19.29,3.88,-0.05,28.39,3.19,4.61,0.93,28.41,-46.3,4.39,1.6,28.59,-42.5,5.12,-0.06,28.6,63.67,3.35,-0.15,28.66,20.81,2.64,0.17,28.73,-67.65,4.68,0.93,28.96,23.58,5.76,1.19,28.98,37.28,5.89,1.6,28.99,-51.61,3.69,0.84,29,68.69,4.97,-0.08,29.04,37.25,5.69,1.06,29.17,-22.53,4.92,1.43,29.29,-47.39,4.82,0.86,29.34,17.82,5.09,0.92,29.43,27.8,5.84,1.58,29.48,23.6,4.79,0.29,29.64,49.2,5.7,1,29.69,-61.57,2.86,0.29,29.9,21.06,5.89,1.03,29.91,64.62,5.29,0,29.91,-42.03,5.57,1.05,29.94,-20.82,5.43,1.64,30,-21.08,3.99,1.55,30.04,3.1,5.89,0.61,30.11,-8.52,5.43,1.39,30.31,-30,5.34,0.88,30.43,-44.71,5.15,1.47,30.49,70.91,4.49,0.16,30.51,2.76,3.82,0.02,30.58,54.49,4.99,-0.07,30.65,13.48,5.97,1.58,30.72,64.9,6,0.03,30.74,33.28,5.5,0.03,30.74,-15.31,5.87,0.97,30.75,64.39,5.59,0.33,30.8,0.13,5.42,0.15,30.86,72.42,3.95,0,30.91,25.94,5.64,0.54,30.92,-4.1,5.61,1.59,30.95,-0.34,5.96,0.85,30.97,42.33,2.1,1.37,31.12,-29.3,4.68,-0.16,31.28,77.28,5.27,0.35,31.38,76.12,5.22,0.95,31.64,22.65,5.03,0.12,31.79,23.46,2.01,1.15,32.12,37.86,4.78,0.12,32.17,58.42,5.66,0.6,32.29,-43.52,5.84,1.2,32.36,25.94,4.98,0.34,32.39,34.99,3,0.14,32.66,19.5,5.68,1.64,32.84,8.57,5.64,0.57,32.84,-10.05,6,0.42,32.9,-1.83,5.94,0.97,33.09,30.3,4.94,0.77,33.16,24.17,5.96,1.37,33.2,-2.39,5.65,0.55,33.2,21.21,5.23,0.46,33.23,-30.72,5.27,-0.01,33.25,8.85,4.36,0.88,33.25,-21,5.86,1.01,33.26,15.28,5.72,1.55,33.31,44.23,4.84,1.48,33.4,51.07,5.31,0.93,33.56,-67.84,5.57,1.56,33.63,-41.17,5.91,0.97,33.87,-67.75,5.67,1.31,33.93,25.04,5.57,0.52,33.94,25.78,5.79,0.44,33.98,33.36,5.25,0,34.13,-51.51,3.56,-0.12,34.25,-6.42,5.51,0.96,34.26,34.22,4.84,0.61,34.33,33.85,4.03,0.02,34.5,57.9,5.75,1.18,34.51,1.76,5.6,0.59,34.52,57.52,5.99,1.04,34.53,19.9,5.58,0.01,34.74,28.64,5.29,0.04,34.82,47.38,5.31,0.01,34.98,-55.94,5.81,1.57,35.24,50.15,5.57,-0.09,35.44,-68.66,4.08,0.03,35.49,0.4,5.29,1.65,35.51,-10.78,5.43,0.36,35.52,-17.66,5.89,1.23,35.55,-0.88,5.42,0.34,35.59,55.85,5.16,0.37,35.64,-23.82,5.19,0.61,35.71,41.4,5.81,0.29,35.72,-73.65,5.99,1.09,35.73,-51.09,5.9,0.21,36.1,50.01,5.19,0.98,36.2,10.61,5.48,-0.1,36.22,-60.31,5.36,0.4,36.41,50.28,4.73,1.53,36.49,-12.29,4.88,-0.03,36.5,-15.34,5.88,0.12,36.65,-20.04,5.89,1.25,36.75,-47.7,4.24,-0.14,36.87,31.8,5.55,1.11,37.01,-33.81,5.13,0.09,37.04,8.46,4.3,-0.05,37.04,29.67,5.29,0.31,37.2,29.93,5.89,0.59,37.27,67.4,4.46,0.15,37.63,25.24,5.88,0.41,37.69,0.26,6,0.17,37.88,2.27,5.27,1.27,37.92,-79.11,5.27,0.98,37.95,89.26,1.97,0.64,38.02,-15.24,4.74,0.45,38.03,36.15,5.15,1.47,38.04,-1.03,5.36,1,38.22,34.54,5.84,1.08,38.23,15.03,6,0.57,38.28,-34.65,5.91,1.06,38.46,-28.23,4.96,-0.05,38.68,-7.86,5.74,1.39,38.91,37.31,5.72,1.39,38.95,34.69,5.38,1.65,38.97,5.59,4.87,0.88,39,-7.83,5.53,1.61,39.02,6.89,5.79,0.92,39.04,-30.04,5.74,1.02,39.15,7.73,5.81,1.04,39.16,12.45,5.64,0.52,39.24,38.73,5.91,0.5,39.24,-34.58,5.78,0.65,39.35,-52.54,5.3,0.29,39.4,65.75,5.8,1.56,39.42,-3.4,5.65,1.02,39.51,72.82,5.17,0.9,39.58,-30.19,5.84,0.48,39.7,21.96,5.45,0.17,39.87,0.33,4.08,-0.21,39.89,-11.87,4.83,0.45,39.9,-68.27,4.12,-0.06,39.95,-42.89,4.74,0.06,40.05,-9.45,5.79,0.52,40.17,-54.55,5.21,0.41,40.17,-39.86,4.11,1.01,40.17,27.06,5.3,0.08,40.31,-0.7,5.72,0.51,40.39,-14.55,5.98,0.43,40.53,-38.38,5.99,0.92,40.56,40.19,4.91,0.58,40.59,20.01,5.74,-0.02,40.64,-50.8,5.4,0.56,40.75,53.53,5.85,1.13,40.76,55.11,5.76,-0.11,40.83,3.24,3.47,0.09,40.86,27.71,4.65,-0.12,41.02,44.3,5.43,0.9,41.03,-13.86,4.24,-0.12,41.05,49.23,4.1,0.51,41.14,15.31,5.78,-0.02,41.21,67.82,5.95,0.14,41.24,10.11,4.27,0.31,41.24,12.45,5.17,0.23,41.28,-18.57,4.47,0.48,41.36,-63.7,5.73,0.93,41.39,-67.62,4.83,0.06,41.95,81.45,5.8,1.3,41.98,29.25,4.52,1.11,42.13,18.28,5.83,1.22,42.19,25.19,5.89,-0.03,42.26,-62.81,5.25,0.1,42.27,-32.41,4.45,0.98,42.32,17.46,5.26,-0.07,42.48,-27.94,5.39,0.01,42.5,27.26,3.61,-0.1,42.56,-35.84,5.92,0.9,42.62,-75.07,4.76,1.34,42.65,38.32,4.22,0.34,42.67,-35.68,5.48,1.26,42.67,55.9,3.77,1.69,42.76,-21,4.76,0.91,42.87,15.08,5.52,-0.1,42.88,35.06,4.56,1.55,42.92,46.84,5.86,0.9,42.99,68.89,5.94,0.7,43.39,-38.44,5.93,0.44,43.4,-22.38,5.93,1.04,43.43,38.34,5.34,0.42,43.56,52.76,3.93,0.76,43.95,18.33,5.76,1.45,43.99,61.52,5.59,0.45,44.06,8.38,5.97,0.48,44.11,-8.9,3.89,1.09,44.11,18.02,5.58,0.47,44.16,-3.71,5.16,0.08,44.32,31.93,5.1,-0.01,44.35,-23.86,5.44,0.24,44.52,20.67,5.8,0.42,44.52,-23.61,5.82,1.33,44.57,-40.3,2.88,0.13,44.68,-2.78,5.22,0.01,44.69,39.66,4.68,0.07,44.7,-64.07,4.98,0.13,44.77,35.18,4.94,1.24,44.8,21.34,4.63,0.05,44.9,-25.27,5.69,0.43,44.92,41.03,5.89,1.45,44.92,-2.46,5.56,-0.07,44.93,8.91,4.71,-0.11,44.96,47.22,5.47,0.87,45.18,10.87,5.93,1.59,45.22,52.35,5.24,-0.05,45.29,-7.66,5.75,1.04,45.41,-28.09,5.88,0.79,45.48,26.46,5.91,0.14,45.48,-9.96,5.84,1.09,45.56,-71.9,5.51,-0.12,45.57,4.09,2.54,1.63,45.59,4.35,5.62,-0.11,45.6,-23.62,4.08,0.16,45.68,-7.69,5.32,0.94,45.73,-46.97,5.81,1.3,45.9,-59.74,5.12,0.35,46.07,-7.6,5.26,0.19,46.2,53.51,2.91,0.72,46.29,38.84,3.32,1.53,46.36,25.26,5.45,-0.03,46.39,56.71,4.77,1.02,46.53,79.42,5.49,1.57,46.6,13.19,5.64,1.09,46.64,-6.09,5.23,1.58,46.83,64.06,5.89,-0.02,46.88,-78.99,5.67,0.3,47.04,40.96,2.09,0,47.27,49.61,4.05,0.6,47.37,44.86,3.79,0.98,47.4,29.08,5.74,0.12,47.66,11.87,5.97,-0.06,47.82,39.61,4.61,1.12,47.91,19.73,4.35,1.03,47.93,81.47,5.92,0.15,47.98,74.39,4.85,0.04,48.02,-28.99,3.8,0.54,48.06,27.26,5.78,-0.11,48.11,-44.42,5.92,0.44,48.11,6.66,5.55,1.01,48.14,-57.32,5.71,2.42,48.19,-1.2,5.07,0.57,48.35,48.18,5.93,0.97,48.73,21.04,4.87,-0.01,48.84,30.56,5.61,0.01,48.95,57.14,5.79,0.64,48.96,-8.82,4.8,0.23,48.99,-77.39,5.51,0.44,49.05,50.94,5.04,1.11,49.15,32.18,5.98,0.99,49.36,-47.75,5.84,1.23,49.44,-62.58,5.53,0.64,49.44,39.28,5.97,0.06,49.45,44.03,5.49,-0.06,49.51,-28.8,5.93,0.34,49.55,-62.51,5.24,0.6,49.59,-22.51,4.86,0.9,49.59,-0.93,5.62,1.05,49.66,50.22,5.16,-0.07,49.67,-18.56,5.72,0.38,49.68,34.22,4.85,1.49,49.78,50.1,5.05,-0.07,49.84,3.37,4.84,0.68,49.88,-21.76,3.7,1.61,49.9,-24.12,5.63,1.66,49.98,-43.07,4.26,0.71,49.98,27.07,5.91,0.86,50,65.65,4.74,-0.11,50.08,77.73,5.44,0.21,50.08,29.05,4.47,1.56,50.28,3.68,5.7,0.96,50.31,21.15,5.27,-0.07,50.35,-23.64,5.5,0.89,50.36,43.33,4.96,0.05,50.47,49.07,5.94,0.47,50.55,27.61,5.55,1.1,50.69,20.74,5.1,1.23,50.81,49.21,5.32,-0.08,51.08,24.72,5.5,1.19,51.08,49.86,1.79,0.48,51.12,33.54,5.78,0,51.17,64.59,5.13,2.04,51.2,9.03,3.61,0.89,51.4,-69.34,5.96,0.42,51.59,-27.32,5.93,0.93,51.79,9.73,3.73,-0.08,51.89,-35.68,5.71,1.28,52,-11.29,5.74,1.1,52.01,49.06,4.99,-0.09,52.09,33.81,5.72,0.05,52.22,49.85,5.58,-0.05,52.27,59.94,4.21,0.42,52.34,49.51,4.67,-0.1,52.34,-62.94,4.71,0.41,52.4,-12.67,5.57,0.17,52.48,58.88,4.55,0.49,52.48,-42.63,5.76,0.21,52.5,-78.35,5.68,0.93,52.5,55.45,5.09,0.02,52.6,11.34,5.14,-0.04,52.64,48,4.36,1.37,52.65,-47.38,5.98,0.12,52.65,48.1,5.82,-0.03,52.65,-5.08,4.74,-0.09,52.69,6.19,5.93,0.95,52.72,-66.49,5.81,-0.05,52.72,12.94,4.14,1.11,53.04,48.02,5.47,-0.1,53.08,84.91,5.62,0.89,53.11,46.06,5.3,0.4,53.15,-50.38,5.67,1.1,53.15,9.37,5.76,-0.07,53.17,35.46,5.91,-0.08,53.23,-9.46,3.72,0.88,53.4,39.9,5.79,0.14,53.41,54.97,5.98,0.11,53.45,-21.63,4.26,-0.11,53.61,24.46,5.95,0.12,53.99,-11.19,5.56,0.92,54.07,-17.47,5.24,-0.12,54.12,48.19,4.32,-0.06,54.2,0.59,5.82,0.89,54.22,0.4,4.29,0.57,54.27,-40.27,4.57,1.02,54.62,-7.39,5.86,0.98,54.75,-5.63,5.97,0.92,54.96,3.06,5.55,0.93,55.16,-5.21,5.53,-0.14,55.28,37.58,5.55,-0.06,55.54,63.22,5.06,1.65,55.56,-31.94,4.99,-0.16,55.58,19.7,5.68,-0.02,55.59,33.97,4.97,-0.05,55.68,59.97,5.74,1.74,55.71,-37.31,4.59,1.19,55.73,47.79,3.01,-0.12,55.81,-9.76,3.52,0.92,55.89,-10.49,5.59,0.22,56.05,-64.81,3.84,1.13,56.08,32.29,3.84,0.02,56.13,-1.16,5.24,-0.09,56.13,36.46,5.6,0.06,56.2,24.29,5.45,-0.03,56.22,24.11,3.72,-0.1,56.24,-0.3,5.56,1.41,56.29,24.84,5.66,-0.06,56.3,42.58,3.77,0.43,56.3,24.47,4.3,-0.11,56.32,-47.36,5.72,0.96,56.42,6.05,5.34,-0.1,56.46,24.37,3.87,-0.06,56.48,24.55,5.76,-0.04,56.5,45.68,5.66,-0.08,56.5,67.2,5.79,0.35,56.51,63.35,4.78,0.75,56.54,-12.1,4.43,1.6,56.54,6.8,5.91,0.99,56.58,23.95,4.14,-0.05,56.61,-29.34,5.91,0.11,56.71,-23.25,4.22,0.43,56.81,-74.24,3.26,1.59,56.87,24.11,2.85,-0.09,56.92,-23.87,5.24,0.08,56.98,-30.17,5.52,0.97,57.07,11.14,5.08,-0.12,57.09,23.42,5.44,-0.07,57.15,-37.62,4.3,-0.04,57.15,-20.9,5.81,1.6,57.16,0.23,5.91,1.22,57.28,43.96,5.95,0.28,57.29,24.05,3.62,-0.07,57.3,24.14,5.05,-0.08,57.31,70.87,5.4,0.1,57.36,-36.2,4.17,0.93,57.38,65.53,4.39,1.87,57.39,33.09,5.14,0.06,57.4,63.3,5.82,0.19,57.52,44.97,5.65,0.78,57.58,25.58,5.24,0.23,57.59,71.33,4.59,0.06,57.97,34.36,5.78,-0.04,58,6.53,5.66,0.05,58.17,-5.36,5.48,-0.09,58.29,17.33,5.97,0.35,58.39,-46.89,5.93,1.22,58.41,48.65,5.76,1.04,58.41,-34.73,5.11,-0.13,58.43,-24.61,4.64,-0.14,58.43,57.98,5.8,0.18,58.53,31.88,2.84,0.27,58.57,-2.95,4.46,0.67,58.6,-40.36,5.7,0.6,58.82,-12.1,5.99,0.32,58.99,47.87,5.39,-0.07,59.12,35.08,5.49,-0.06,59.15,50.7,5.28,0.43,59.22,22.48,5.62,0.35,59.28,61.11,4.99,1.44,59.36,63.07,4.95,-0.07,59.46,40.01,2.9,-0.2,59.51,-13.51,2.97,1.59,59.69,-61.4,4.56,1.59,59.72,-5.47,5.85,1,59.74,35.79,3.98,0.02,59.88,-12.57,5.61,1.48,59.98,-24.02,4.62,-0.12,60.17,-30.49,5.93,0.04,60.17,12.49,3.41,-0.1,60.2,18.19,5.89,0.32,60.22,-62.16,4.48,1.5,60.33,-61.08,4.97,1.39,60.38,-1.55,5.28,-0.13,60.44,10,5.67,0.01,60.65,-0.27,5.38,0.52,60.79,5.99,3.91,0.03,60.94,5.44,5.32,-0.08,60.99,8.2,5.45,0.37,61.04,2.83,5.36,0.51,61.09,24.11,5.46,0.81,61.09,-12.79,5.62,1.06,61.11,59.16,5,0.5,61.17,22.08,4.36,1.06,61.33,22.01,5.9,0.62,61.41,-27.65,5.59,0.32,61.51,68.68,5.88,1.54,61.65,50.35,4.25,-0.01,61.65,27.6,5.18,-0.12,61.75,29,5.21,0.36,62,17.34,5.89,1.5,62.15,38.04,5.52,0.52,62.17,47.71,3.96,-0.02,62.26,13.4,5.94,0.05,62.29,19.61,5.51,1.08,62.32,-16.39,5.45,-0.15,62.51,86.63,5.84,0.39,62.51,80.7,5.1,0.59,62.59,-6.92,5.44,0.94,62.7,-8.82,5.7,1.06,62.71,26.48,5.39,0.35,62.71,-41.99,4.93,0.33,62.75,33.59,5.75,1.41,62.83,5.52,5.71,0.36,62.9,-20.36,5.8,0.17,62.97,-6.84,4.04,0.33,63.39,7.72,5.29,0.37,63.48,9.26,4.84,0.8,63.5,-42.29,3.85,1.09,63.6,-10.26,4.87,1.16,63.61,-62.47,3.33,0.92,63.65,10.01,5.22,-0.08,63.7,-62.19,5.45,1.11,63.72,40.48,4.67,1.01,63.72,48.41,4.12,0.94,63.82,-7.65,4.43,0.82,63.88,8.89,4.27,-0.05,64.01,-51.49,4.26,0.31,64.12,-59.3,4.44,1.08,64.18,53.61,5.2,0.05,64.22,61.85,5.69,-0.12,64.28,57.86,5.72,1.11,64.32,20.58,4.93,0.26,64.33,-6.47,5.95,1.08,64.42,-63.26,5.88,-0.06,64.47,-33.8,3.55,-0.11,64.5,-80.21,5.67,0.84,64.56,50.3,4.6,0.04,64.57,-20.72,6,1.6,64.6,21.58,5.64,0.28,64.81,50.05,5.46,0.24,64.82,-44.27,5.33,1.07,64.86,21.14,5.5,-0.07,64.9,21.77,5.34,-0.11,64.95,15.63,3.65,0.98,64.99,14.04,5.58,0.28,65.05,50.92,5.55,-0.03,65.06,41.81,5.95,0.96,65.09,27.35,4.97,1.15,65.1,34.57,4.93,0.95,65.15,15.1,5.26,0.23,65.16,-20.64,5.38,-0.03,65.17,65.14,5.26,0.82,65.17,6.13,5.76,0.91,65.18,-7.59,5.85,-0.12,65.24,-81.58,5.78,0.36,65.36,-0.1,5.86,1.32,65.39,46.5,4.8,-0.02,65.45,60.74,5.4,1.5,65.47,56.51,5.91,0.11,65.47,-63.39,5.24,0.96,65.51,14.08,5.72,0.32,65.59,20.82,5.91,1.66,65.65,25.63,5.38,-0.04,65.73,17.54,3.77,0.98,65.77,-24.89,5.81,1.51,65.85,16.78,5.64,0.31,65.88,20.98,6,0.03,65.92,-3.75,5.17,0.07,65.97,9.46,5.1,0.07,66.01,-34.02,3.97,1.47,66.02,17.44,4.8,0.15,66.12,34.13,5.73,-0.05,66.16,33.96,5.77,0.4,66.24,19.04,5.97,0.38,66.27,-61.24,5.94,1.53,66.34,22.29,4.21,0.14,66.35,22.2,5.27,0.25,66.37,17.93,4.3,0.05,66.53,31.44,5.29,0.99,66.58,22.81,4.28,0.26,66.59,15.62,4.48,0.26,66.65,14.71,4.69,0.98,66.76,80.82,5.42,1.18,66.82,23,5.53,-0.1,66.87,11.21,5.87,0.05,66.94,-62.52,5.74,1,67,21.62,5.72,0.27,67.06,83.81,5.51,-0.11,67.1,14.74,5.9,0.33,67.11,16.36,4.96,1.14,67.13,1.38,5.53,-0.1,67.14,15.96,3.84,0.95,67.15,19.18,3.53,1.01,67.16,-19.46,5.95,1.22,67.17,15.87,3.4,0.18,67.21,13.05,5.02,0.22,67.28,-13.05,5.61,-0.2,67.5,83.34,5.47,0.86,67.54,15.64,5.58,0.32,67.64,16.19,4.78,0.17,67.66,13.72,5.4,0.26,67.66,15.69,5.47,0.26,67.67,-35.65,5.95,1,67.71,-44.95,5.07,-0.19,67.97,-0.04,4.91,1.32,68.01,53.91,5.78,0.12,68.16,-3.21,5.76,-0.12,68.38,72.53,5.94,0.31,68.38,-29.77,4.49,0.97,68.39,-62.82,5.79,1.03,68.46,14.84,4.65,0.26,68.48,-6.74,5.71,-0.13,68.5,-55.04,3.3,-0.08,68.53,5.57,5.67,0.06,68.55,-8.23,5.2,1.71,68.55,-8.97,5.24,1.47,68.66,28.96,5.88,-0.05,68.89,-30.56,3.81,0.96,68.91,10.16,4.25,0.18,68.98,16.51,0.87,1.54,69.08,-3.35,3.93,-0.21,69.1,64.26,5.91,-0.01,69.17,41.26,4.25,1.17,69.19,-62.08,5.59,1.5,69.31,1,5.32,-0.11,69.4,-2.47,5.22,0.28,69.54,16.03,5.78,0.31,69.54,12.51,4.27,0.12,69.55,-14.3,3.86,1.08,69.57,20.68,5.85,-0.02,69.72,-12.12,4.99,0.07,69.78,7.87,5.38,0.26,69.79,15.8,5.08,0.14,69.82,15.92,4.67,0.15,69.83,-14.36,5.46,1.05,69.98,53.08,5.07,1.08,69.99,53.47,5.36,0.33,70.01,12.2,5.45,-0.12,70.03,-24.48,5.56,0.93,70.11,-19.67,4.32,1.6,70.14,-41.86,4.44,0.34,70.33,28.62,5.73,0.02,70.35,48.3,5.66,0,70.46,38.28,5.97,0.59,70.51,-37.14,5.04,0.39,70.56,22.96,4.27,-0.11,70.69,-50.48,5.3,0.98,70.73,43.37,5.3,0.03,70.77,-70.93,5.53,-0.11,70.79,-30.77,5.66,1.39,70.84,49.97,5.86,0.01,70.89,-8.79,5.98,0.65,71.02,-8.5,5.78,-0.08,71.03,-18.67,5.53,0.03,71.09,-59.73,5.28,0.21,71.11,11.15,5.39,0.25,71.27,-21.28,5.72,1.48,71.38,-3.25,4.01,-0.15,71.51,11.71,5.35,0.2,71.57,18.73,5.99,1.22,71.69,40.31,5.99,0.93,71.9,-16.93,5.49,0.63,72,56.76,5.29,0.25,72.14,-16.33,5.76,0.54,72.15,-5.67,5.77,0.63,72.21,75.94,5.96,0.28,72.3,31.44,5.57,1.13,72.33,32.59,5.84,0.25,72.46,6.96,3.19,0.48,72.48,37.49,4.89,1.45,72.55,-16.22,5.03,0.99,72.65,8.9,4.35,0.01,72.73,-53.46,5.58,0.34,72.79,48.74,5.64,1.01,72.8,5.61,3.68,-0.16,72.84,18.84,5.08,0.21,72.87,-34.91,5.82,0.11,73.02,63.51,5.47,1.56,73.13,14.25,4.71,1.77,73.16,36.7,4.79,1.41,73.2,27.9,5.97,0.37,73.2,42.59,5.68,0.12,73.22,-5.45,4.36,0.26,73.34,2.51,5.33,1.63,73.51,66.34,4.26,-0.01,73.56,2.44,3.71,-0.18,73.7,11.43,5.18,0.12,73.7,7.78,5.33,1.21,73.71,0.47,5.98,-0.12,73.72,10.15,4.64,0.09,73.76,55.26,5.52,0.02,73.78,-16.74,5.71,0.95,73.8,-74.94,5.47,1.52,73.83,-16.42,5.71,0.87,73.96,15.04,5.79,-0.08,74.03,52.87,5.75,0.11,74.09,13.51,4.06,1.16,74.1,-5.17,5.5,-0.12,74.25,33.17,2.69,1.49,74.32,53.75,4.43,-0.02,74.34,17.15,5.51,1.3,74.45,23.95,5.79,1.11,74.54,25.05,5.79,0.02,74.64,1.71,4.47,1.37,74.71,-82.47,5.84,0.93,74.76,-16.38,5.65,0.45,74.81,37.89,4.93,0.04,74.96,-10.26,5.39,0.8,74.98,-12.54,4.78,0.27,75.08,39.39,5.95,0.42,75.09,81.19,5.09,1.3,75.36,-20.05,4.91,-0.05,75.36,-7.17,4.8,-0.16,75.46,0.72,5.91,1.27,75.49,43.82,3.03,0.54,75.54,-26.27,5.01,1.06,75.6,-31.77,5.92,1.17,75.62,41.08,3.69,1.15,75.68,-71.31,5.3,1,75.69,-22.8,5.74,1.19,75.69,-4.21,5.86,1.21,75.7,-49.15,5.37,0.42,75.77,21.59,4.62,0.16,75.85,60.44,4.03,0.92,75.97,-24.39,5.61,0.09,76.1,-35.48,4.55,1.18,76.14,15.4,4.65,-0.06,76.24,-49.58,5.05,1.48,76.32,-26.15,5.71,1.17,76.37,-22.37,3.19,1.46,76.38,-57.47,4.71,0.53,76.54,58.97,5.22,-0.08,76.62,61.17,6,1.38,76.63,41.23,3.18,-0.15,76.67,51.6,4.98,0.34,76.69,-4.66,5.12,-0.06,76.85,-12.49,5.97,0.61,76.86,18.65,4.91,0.66,76.89,-63.4,5.19,1.65,76.95,20.42,5.28,0.12,76.96,-5.09,2.78,0.16,76.97,8.5,5.33,0.34,76.98,21.7,5.84,0.17,77.03,24.27,5.5,0.03,77.08,-8.67,5.8,-0.06,77.18,-4.46,5.11,0.46,77.29,-8.75,4.25,-0.19,77.33,9.83,5.43,0.25,77.42,15.6,4.81,0.31,77.44,28.03,5.93,0.31,77.68,46.96,5.67,0.45,77.83,-2.49,5.89,0.46,77.85,-11.85,5.6,1.35,77.92,16.05,5.18,1.53,77.94,1.04,5.88,0.66,78.07,-11.87,4.45,-0.1,78.09,73.95,5.44,-0.11,78.2,-6.06,5.9,0.96,78.23,-16.21,3.29,-0.11,78.31,-12.94,4.36,-0.09,78.32,2.86,4.46,1.17,78.36,38.48,4.82,0.19,78.44,-67.19,4.81,1.27,78.62,-35.98,5.75,1.01,78.63,-8.2,0.18,-0.03,78.68,5.16,5.5,1.37,78.85,32.69,5.01,0.22,78.85,-26.94,5.06,-0.07,79.02,11.34,5.52,-0.01,79.08,34.31,5.99,0.2,79.17,46,0.08,0.8,79.37,-34.9,4.81,0.99,79.4,-6.84,3.59,-0.11,79.42,-13.52,5.48,0.93,79.54,33.37,4.54,1.25,79.56,73.27,5.81,-0.02,79.57,42.79,5.55,1.49,79.71,-18.13,5.96,0.57,79.75,33.75,5.38,-0.17,79.79,40.1,4.69,0.63,79.8,2.6,5.34,0.41,79.82,22.1,4.96,0.94,79.84,-50.61,5.44,0.52,79.85,-27.37,5.98,-0.02,79.89,-13.18,4.29,-0.23,80,-12.32,5.29,-0.1,80,33.96,5.05,0.29,80.06,41.09,5.46,0.12,80.09,62.65,5.64,1.73,80.11,-21.24,4.7,-0.05,80.3,29.57,5.66,0.06,80.38,-0.42,5.68,-0.12,80.43,8.43,5.78,-0.11,80.44,-0.38,4.72,-0.17,80.44,-24.77,5.06,0.66,80.45,41.8,5.22,-0.13,80.64,79.23,5.08,0.51,80.71,3.54,4.99,-0.1,80.71,41.03,5.54,0.13,80.83,-8.42,5.99,-0.04,80.85,-39.68,5.73,1.63,80.87,57.54,5.24,-0.01,80.88,-13.93,5.25,-0.22,80.93,-0.16,5.69,-0.21,80.99,-7.81,4.13,0.94,81.11,17.38,5,0.54,81.12,-16.98,5.64,0,81.12,-2.4,3.35,-0.24,81.12,-0.89,5.07,0.96,81.16,31.14,5.94,0.03,81.16,37.39,5.02,1.45,81.19,1.85,4.89,-0.2,81.26,-10.33,5.6,1.54,81.28,6.35,1.64,-0.22,81.5,-19.7,5.78,0.44,81.57,28.61,1.65,-0.13,81.58,-58.91,5.14,0.99,81.7,34.39,5.92,0.14,81.71,3.1,4.59,-0.2,81.77,-40.94,5.86,0.24,81.78,30.21,5.69,0.18,81.79,17.96,5.4,-0.09,81.91,21.94,4.88,-0.14,81.91,34.48,5.08,1.4,81.94,15.87,5.52,0.02,82.01,17.24,5.77,1.63,82.06,-20.76,2.81,0.81,82.06,-37.23,5.56,0.03,82.32,25.15,5.47,-0.04,82.35,-3.45,5.8,1.15,82.43,-1.09,4.71,1.59,82.48,1.79,5.77,-0.19,82.54,-47.08,5.46,0.62,82.54,63.07,5.43,1.7,82.61,15.36,5.93,0.1,82.7,5.95,4.2,-0.14,82.7,41.46,5.99,1.11,82.78,-20.86,5.53,0.01,82.8,-35.47,3.86,1.13,82.81,3.29,5.46,-0.18,82.9,-45.93,5.86,1.35,82.97,-76.34,5.18,1.13,82.98,-7.3,4.62,-0.26,83,-0.3,2.25,-0.17,83.05,18.59,4.32,2.06,83.06,17.06,5.5,0,83.17,-1.59,5.34,-0.19,83.18,32.19,4.71,0.28,83.18,-17.82,2.58,0.21,83.21,-38.51,5.45,1.22,83.25,-64.23,5.34,1.04,83.28,-35.14,5.75,1.09,83.38,-1.16,5.36,-0.17,83.38,18.54,5.67,-0.02,83.41,-62.49,3.76,0.64,83.48,14.31,5.6,-0.12,83.52,-1.47,5.92,1.54,83.57,3.77,5.32,0.05,83.69,-73.74,5.79,1.72,83.71,9.49,4.39,-0.16,83.75,-6.01,5.67,-0.23,83.76,-6,4.78,-0.25,83.78,9.93,3.39,-0.16,83.81,10.24,5.6,0.15,83.81,-33.08,5.76,1.12,83.82,-5.39,4.98,0.6,83.82,-5.39,5.13,0.02,83.85,-5.42,4.98,-0.1,83.85,-4.84,4.58,-0.18,83.86,-5.91,2.75,-0.21,83.86,24.04,5.37,-0.09,83.91,-4.86,5.24,0.27,84.05,-1.2,1.69,-0.18,84.15,54.43,5.74,1.67,84.15,-6.06,5.71,-0.21,84.23,9.29,4.09,0.95,84.27,17.04,5.53,0.24,84.27,11.04,5.97,1.59,84.29,-80.47,5.65,0.6,84.29,26.92,5.83,-0.07,84.41,21.14,2.97,-0.15,84.44,-28.69,5.28,0.49,84.5,7.54,5.87,-0.06,84.66,-6.57,5.96,-0.22,84.66,30.49,5.4,0.45,84.68,-40.71,5.81,-0.08,84.69,-2.6,3.77,-0.19,84.72,-7.21,4.77,0.14,84.8,4.12,4.5,-0.1,84.83,29.22,5.98,0.14,84.88,-3.56,5.99,0.29,84.91,-34.07,2.65,-0.12,84.93,25.9,5.18,-0.15,84.96,-32.63,5.44,0.91,85.19,-1.94,1.74,-0.2,85.21,-1.13,4.95,-0.2,85.27,0.34,5.93,0.31,85.32,16.53,4.84,-0.12,85.56,-22.37,5.88,0.08,85.56,-34.67,5.29,-0.03,85.61,65.7,5.62,1.25,85.62,1.47,4.9,1.14,85.72,-6.8,5.97,0.45,85.84,-18.56,5.73,-0.01,86.12,-22.45,3.59,0.48,86.19,-65.74,4.34,0.22,86.48,49.83,5.46,0.03,86.5,-32.31,5.18,-0.27,86.61,-46.6,5.31,1.04,86.63,56.12,5.93,0.16,86.65,1.17,5.95,0.77,86.69,15.82,6,-0.06,86.72,9.52,5.78,0.89,86.74,-14.82,3.55,0.1,86.8,14.49,5.72,0.08,86.82,-51.07,3.85,0.17,86.86,17.73,5.47,0.3,86.93,13.9,5.28,-0.16,86.94,-9.67,2.07,-0.17,87,6.45,5.26,0.23,87.15,-4.09,5.97,0.64,87.25,24.57,4.88,1.02,87.29,39.18,4.51,0.95,87.39,12.65,4.89,-0.07,87.4,-14.48,5.49,0.87,87.46,-56.17,4.5,1.08,87.47,-22.97,5.87,0.06,87.47,-66.9,5.1,-0.13,87.51,9.87,5.79,0.88,87.55,4.42,5.96,1.36,87.57,-79.36,5.46,-0.08,87.62,14.31,5.54,1.01,87.63,2.02,5.97,0.95,87.72,-52.11,5.16,0.96,87.74,-35.77,3.12,1.15,87.74,27.97,5.6,0.98,87.76,37.31,4.72,1.62,87.83,-20.88,3.76,0.98,87.84,-7.52,5.36,-0.19,87.87,39.15,3.97,1.13,88.03,-9.04,5.95,0.1,88.08,-57.16,5.93,0.66,88.09,14.17,5.6,-0.05,88.1,19.87,5.96,0.55,88.11,1.86,4.76,1.38,88.14,-37.63,5.62,1.05,88.28,-33.8,4.88,-0.15,88.33,27.61,4.56,-0.01,88.53,-63.09,4.65,1.02,88.6,20.28,4.39,0.59,88.68,-11.77,5.62,1.52,88.68,0.97,5.99,1.33,88.71,-52.64,5.29,0.3,88.71,55.71,4.96,0.05,88.72,-39.96,5.55,1.52,88.74,19.75,5.92,-0.14,88.74,59.89,5.2,0.01,88.75,31.7,5.9,0.14,88.79,7.41,0.45,1.5,88.87,-37.12,4.97,1.1,88.88,-4.62,5.87,1.17,89.06,-22.84,5.95,1.11,89.09,-31.38,5.52,0.38,89.1,-14.17,3.71,0.34,89.12,9.51,5.97,-0.04,89.21,11.52,5.89,1.11,89.38,-35.28,4.36,-0.16,89.5,25.95,4.81,-0.09,89.6,1.84,5.89,0.22,89.66,-44.03,5.81,1.06,89.71,0.55,5.21,0.01,89.72,12.81,5.7,0.87,89.77,-9.56,5.04,0.19,89.79,-42.82,3.96,1.15,89.84,49.92,5.9,1.19,89.88,54.28,3.72,1.01,89.88,44.95,1.9,0.08,89.93,37.21,2.65,-0.08,89.98,45.94,4.3,1.7,90.01,-3.07,4.53,1.2,90.2,-51.22,5.65,0.21,90.24,47.9,5.71,-0.01,90.32,-33.91,5.54,1.58,90.43,48.96,5.98,1.44,90.46,-10.6,4.92,-0.13,90.6,9.65,4.12,0.17,90.82,-26.28,5.03,1.34,90.86,19.69,5.14,-0.1,90.98,20.14,4.64,0.24,91.03,23.26,4.16,0.84,91.06,-6.71,5.19,-0.07,91.08,-32.17,5.65,-0.19,91.17,-45.08,5.93,0.49,91.24,5.42,5.67,1.05,91.24,4.16,5.63,1.04,91.25,-16.48,4.92,0.2,91.26,42.98,5.9,0.36,91.36,-10.24,5.88,0.37,91.36,-35.51,5.8,0.03,91.52,-29.76,5.79,0.04,91.54,-66.04,5.72,-0.02,91.54,-14.94,4.67,0.05,91.63,-23.11,5.46,0.06,91.65,38.48,5.35,0.25,91.66,-4.19,5.37,-0.12,91.74,-21.81,5.74,1.58,91.76,-62.15,5.04,1.26,91.77,-34.31,5.82,-0.14,91.88,-37.25,5,-0.09,91.89,14.77,4.42,-0.16,91.92,-19.17,5.28,1.66,91.97,-42.15,5.5,0.01,92.18,-68.84,5.06,-0.07,92.24,-22.43,5.49,-0.01,92.24,2.5,5.7,0.07,92.39,22.19,5.93,1.63,92.39,-14.58,5.56,1.15,92.43,23.11,5.75,0.19,92.45,-22.77,5.71,0.45,92.5,58.94,5.35,1.1,92.54,-40.35,5.54,1.67,92.56,-74.75,5.08,0.71,92.57,-54.97,4.72,-0.23,92.64,-27.15,5.72,1.07,92.81,-65.59,5.01,1.6,92.88,24.42,5.83,1.11,92.9,48.71,5.78,0.1,92.97,-6.55,5.06,-0.2,92.99,14.21,4.45,-0.18,93.01,19.79,5.76,-0.07,93.01,16.13,4.95,-0.15,93.08,32.69,5.78,1.65,93.21,65.72,5.36,1.34,93.48,-3.74,5.83,0.91,93.62,17.91,5.86,0.25,93.65,-4.57,5.83,-0.15,93.71,19.16,5.2,0.43,93.71,-6.27,3.99,1.32,93.72,22.51,3.31,1.6,93.79,13.85,5.91,-0.23,93.79,-20.27,5.88,1.32,93.82,-18.48,5.99,1.06,93.84,29.5,4.32,1.02,93.85,16.14,5.34,-0.1,93.87,-4.91,5.99,0.1,93.89,-0.51,5.62,0.51,93.92,60,5.37,1.34,93.94,-13.72,5,-0.08,93.94,12.55,5.44,0.02,94.03,-16.62,5.97,-0.17,94.11,12.27,5.04,0.43,94.14,-35.14,4.37,0.98,94.15,-39.26,6,0.16,94.26,-37.74,5.54,1.13,94.28,9.94,5.39,0.11,94.29,-37.25,5.88,0.14,94.32,5.1,5.7,0.61,94.42,-16.82,5.15,1.29,94.48,61.52,5.01,1.84,94.56,-19.97,5.51,-0.16,94.71,-9.39,5.36,1.24,94.71,69.32,4.76,0.03,94.75,-20.93,5.79,-0.15,94.91,59.01,4.44,0.03,94.92,-34.4,5.76,-0.08,94.93,-7.82,5.27,-0.18,95,-2.94,4.91,1.61,95.02,14.65,5.67,1.58,95.08,-30.06,3.02,-0.16,95.15,-34.14,5.55,-0.18,95.35,-11.77,5.48,0,95.44,53.45,5.34,0.45,95.53,-33.44,3.85,0.86,95.65,12.57,6,0.32,95.66,-69.98,5.56,1.51,95.67,-17.96,1.98,-0.24,95.73,-56.37,5.6,0.24,95.74,22.51,2.87,1.62,95.94,4.59,4.39,0.22,95.98,-25.58,5.61,1.56,95.99,-52.7,-0.62,0.16,96,-36.71,5.62,1.03,96.04,-11.53,5.21,1.23,96.06,-60.28,5.78,0,96.22,49.29,4.92,1.91,96.32,-0.95,5.88,0.56,96.37,-69.69,5.37,0.97,96.43,-48.18,5.76,-0.06,96.61,56.29,5.53,0.24,96.66,-1.51,5.87,0.07,96.7,58.42,5.21,1.54,96.77,-58,5.82,1.28,96.81,0.3,5.19,1.19,96.82,-0.28,5.55,1.38,96.84,2.91,5.55,1.03,96.99,-4.76,5.06,-0.17,97.04,-32.58,4.47,-0.17,97.14,30.49,5.75,0.78,97.16,-17.47,5.76,1.12,97.16,-32.37,5.74,-0.16,97.2,-7.03,3.76,-0.11,97.24,20.21,4.13,-0.11,97.37,-56.85,5.2,1.09,97.45,-50.24,5.28,0.37,97.51,46.69,5.88,1.45,97.55,-10.08,5.92,1.37,97.69,-27.77,5.92,-0.16,97.7,58.16,5.86,0.93,97.8,-35.26,5.82,0.81,97.83,-51.83,5.58,0.53,97.85,-12.39,5.16,1.26,97.95,11.54,5.22,0.19,97.96,-8.16,5.43,1.37,97.96,-23.42,4.34,-0.24,97.99,-58.75,5.69,-0.06,98.08,4.86,5.88,1,98.09,-37.7,5.25,0.98,98.1,-5.87,5.6,0.26,98.11,32.45,5.82,0.19,98.16,-32.03,5.73,-0.18,98.23,7.33,4.47,0.02,98.4,14.16,5.57,1.11,98.41,-1.22,5.09,-0.13,98.46,-36.23,5.42,1.42,98.65,-32.72,5.62,-0.08,98.74,-52.98,4.35,-0.02,98.76,-22.96,4.54,-0.04,98.8,28.02,5.26,-0.01,98.82,0.89,5.78,0,98.82,9.99,5.93,1.51,98.85,-36.78,5.59,-0.13,99.1,-18.66,5.71,0.85,99.14,38.45,5.4,2.77,99.15,-5.21,5.52,-0.08,99.17,-19.26,3.95,1.04,99.19,-13.32,5.95,1.56,99.31,-36.99,5.72,-0.11,99.41,56.86,5.87,0.01,99.42,61.48,5.94,0.9,99.43,16.4,1.93,0,99.44,-43.2,3.17,-0.1,99.45,-32.34,5.25,1.18,99.47,-18.24,4.42,1.14,99.6,28.98,5.76,0,99.66,-48.22,5.05,1,99.66,39.39,5.7,1.37,99.7,39.9,5.34,-0.07,99.82,-14.15,4.82,1.46,99.83,42.49,4.8,1.24,99.93,-30.47,5.7,1.13,99.95,12.98,5.99,0.06,100.01,-80.81,5.61,0.21,100.12,78,5.75,1.49,100.13,71.75,5.88,1.22,100.24,9.9,4.66,-0.23,100.27,0.5,5.79,-0.09,100.48,-9.17,5.21,1.53,100.6,17.65,5.2,0.06,100.77,44.52,5.04,1.48,100.91,3.93,5.88,-0.05,100.98,25.13,3.06,1.38,101,13.23,4.49,1.17,101.12,-31.07,5.23,-0.13,101.19,28.97,5.42,1.45,101.29,-16.72,-1.44,0.01,101.32,12.9,3.35,0.44,101.35,-31.79,5.92,0.49,101.38,-30.95,5.62,-0.14,101.47,-52.41,5.81,1.55,101.5,-14.8,5.3,0.08,101.56,59.44,4.86,0.08,101.56,79.56,5.44,0.53,101.64,8.59,5.92,-0.17,101.66,-10.11,5.66,-0.05,101.68,43.58,5.24,0.57,101.71,57.17,5.34,0.96,101.71,-14.43,5.28,-0.02,101.72,-51.27,5.39,1.33,101.83,-55.54,5.6,1.55,101.83,8.04,4.77,1.4,101.84,-37.93,5.27,-0.08,101.91,-9,5.08,1.8,101.91,48.79,5.22,1.13,101.97,2.41,4.48,1.1,102.05,-61.94,3.24,0.23,102.05,55.7,5.54,0.6,102.08,-1.32,5.75,0.29,102.24,-15.14,5.39,-0.1,102.32,-2.27,5.75,-0.1,102.42,32.61,5.72,1.3,102.46,16.2,5.87,-0.14,102.46,-32.51,3.5,-0.12,102.46,-53.62,4.41,0.9,102.48,-46.61,5.14,0.46,102.48,-50.61,2.94,1.21,102.59,-17.08,5.77,1.44,102.6,-31.71,5.74,0.09,102.61,13.41,5.68,1.33,102.69,41.78,4.99,1.26,102.71,-0.54,5.78,0.4,102.72,-34.37,4.99,1.38,102.74,67.57,5.14,-0.15,102.86,-70.96,5.41,-0.11,102.89,21.76,5.28,-0.02,102.93,-36.23,5.94,0.18,103,23.6,5.68,1.47,103.2,33.96,3.6,0.1,103.21,8.38,5.75,0.27,103.27,59.45,5.34,0.68,103.33,-19.03,5.65,0.28,103.39,-20.22,4.82,-0.21,103.43,68.89,5.11,-0.11,103.53,-24.18,3.89,1.74,103.55,-12.04,4.08,1.42,103.6,-1.13,5.44,0.17,103.66,13.18,4.73,0.32,103.76,-20.4,5.8,0.05,103.83,25.38,5.74,0.57,103.91,-20.14,4.66,0.37,103.95,-22.94,5.29,-0.16,104.03,-14.04,5,1.18,104.03,-17.05,4.36,-0.06,104.07,-48.72,4.94,1.67,104.11,9.96,5.9,-0.08,104.13,46.27,5.85,-0.08,104.14,-79.42,5.45,0.04,104.23,46.71,5.88,1.09,104.25,33.68,5.91,0.88,104.32,58.42,4.35,0.85,104.39,-24.63,5.45,0.39,104.4,45.09,4.9,0.03,104.6,-34.11,5.07,-0.15,104.65,-25.41,5.59,-0.16,104.66,-28.97,1.5,-0.21,104.74,3.6,5.96,1.06,104.96,-67.92,5.18,1.4,105.02,76.98,4.55,1.37,105.07,16.08,5.73,1.64,105.1,-8.41,5.95,-0.07,105.21,-51.4,5.14,1.65,105.27,-25.22,5.64,-0.16,105.34,70.81,5.69,1.34,105.43,-27.93,3.49,1.73,105.48,-5.72,5.22,1.69,105.57,15.34,5.78,1.14,105.6,24.22,5.2,0.95,105.61,17.76,5.96,1.52,105.64,16.67,5.86,1.66,105.73,-4.24,4.99,-0.19,105.76,-23.83,3.02,-0.08,105.81,-59.18,5.5,-0.12,105.82,9.14,5.96,0.13,105.88,29.34,5.93,0.6,105.91,10.95,5.14,1.39,105.94,-15.63,4.11,-0.11,105.97,-49.58,4.92,0.14,105.99,-43.61,5.56,0.62,106.01,-42.34,5.2,0.2,106.02,-5.32,5.63,1.29,106.03,20.57,4.01,0.9,106.08,-56.75,5.14,-0.03,106.33,22.64,6,-0.03,106.41,9.19,5.78,1.51,106.55,34.47,5.55,0.91,106.67,-11.29,5.41,0.03,106.78,-40.89,5.8,-0.16,106.81,-51.97,5.96,1,106.84,34.01,5.94,1.51,106.84,-23.84,5.75,-0.12,106.96,7.47,5.74,1.18,107.09,15.93,5.47,1.02,107.1,-26.39,1.83,0.67,107.18,-70.5,5.68,0.44,107.19,-70.5,3.78,1.01,107.21,-39.66,4.83,-0.18,107.39,-16.23,6,0.04,107.43,-25.23,5.69,-0.16,107.56,-4.24,4.91,1.02,107.58,-27.49,5.46,1,107.7,-48.93,5.12,1.25,107.78,30.25,4.41,1.26,107.85,26.86,5.75,0.13,107.85,-0.3,5.44,0.31,107.91,39.32,4.91,1.45,107.92,-20.88,5.84,-0.04,107.97,-0.49,4.15,0,108.05,-25.94,5.91,-0.17,108.07,-40.5,5.3,0.07,108.11,-36.54,5.94,-0.14,108.11,24.13,5.85,0.4,108.14,-46.76,4.49,0.32,108.28,-11.25,5.77,1.51,108.31,-45.18,4.87,0,108.34,16.16,5.07,1.65,108.35,51.43,5.46,1.64,108.35,-22.67,5.99,1.48,108.38,-44.64,4.42,1.33,108.55,-3.9,5.8,1.59,108.56,-26.35,4.42,-0.17,108.56,-9.95,5.9,1.53,108.58,3.11,5.36,1.19,108.64,12.12,5.71,1.01,108.66,-48.27,4.75,-0.09,108.67,24.89,5.84,1.55,108.69,-46.85,5.72,-0.11,108.7,-26.77,4.01,-0.15,108.71,-27.04,5.58,1.22,108.74,-41.43,5.95,-0.15,108.84,-30.69,5.36,-0.15,108.84,-52.5,5.96,1.1,108.91,7.98,5.78,1.54,108.93,-10.58,5.95,1.17,108.96,47.24,5.54,0.58,108.98,59.64,5.2,1.08,108.99,27.9,5.75,1.61,109.06,-15.59,5.46,0.08,109.06,-46.77,5.64,1.44,109.13,-38.32,5.81,-0.13,109.15,-27.88,4.66,1.59,109.15,-23.32,4.83,1.6,109.21,-36.59,5.03,-0.16,109.21,-67.96,3.97,0.76,109.29,-37.1,2.71,1.62,109.39,52.13,5.93,1.26,109.51,40.88,5.87,0.18,109.52,-43.99,5.86,-0.12,109.52,16.54,3.58,0.11,109.58,-36.73,4.65,-0.1,109.63,49.46,5,0.09,109.64,-39.21,5.24,0.03,109.66,-36.74,5.11,-0.17,109.67,-24.56,4.88,-0.16,109.68,-24.95,4.37,-0.13,109.71,-26.59,5.29,0.96,109.84,2.74,5.9,1.07,109.87,-16.4,5.7,0.35,109.95,7.14,5.91,0.54,110.03,21.98,3.5,0.37,110.09,-52.31,5.5,0.48,110.16,-52.09,5.38,-0.07,110.23,-26.96,6,-0.17,110.24,-14.36,5.59,0.97,110.27,-25.89,5.87,1.6,110.32,45.23,5.74,0.34,110.49,20.44,5.09,1.53,110.51,36.76,5.12,1.08,110.51,0.18,5.99,-0.07,110.56,-19.02,4.94,-0.04,110.61,-5.98,5.83,0.35,110.72,55.28,5.8,-0.08,110.75,-31.92,5.4,-0.16,110.87,25.05,5.04,0.9,110.87,-27.83,5.37,1.54,110.88,-32.2,5.41,-0.17,111.02,-29.3,2.45,-0.08,111.04,40.67,5.23,1.25,111.14,27.64,5.77,0.37,111.17,-16.2,5.18,-0.04,111.18,-31.81,5.35,1.07,111.24,51.89,5.8,1.61,111.24,11.67,5.37,0.11,111.28,-13.75,5.79,0.43,111.36,-25.22,5.79,-0.1,111.41,-79.09,5.54,1.28,111.41,9.28,4.99,0.99,111.43,27.8,3.78,1.02,111.46,-5.77,5.98,0.9,111.59,-51.02,5.09,1.04,111.68,-34.14,5.9,-0.15,111.68,49.21,4.61,0,111.73,20.26,5.94,0.34,111.75,-23.09,5.65,-0.13,111.78,-17.86,5.6,0.31,111.79,8.29,2.89,-0.1,111.93,-22.86,5.98,-0.09,111.93,21.45,5.2,0.46,111.97,-11.56,5.79,0.58,112,-29.16,5.55,-0.05,112.01,6.94,5.22,0.22,112.04,8.93,4.33,1.43,112.21,-31.85,5.95,-0.16,112.21,48.18,5.7,-0.09,112.27,-31.46,5.78,-0.18,112.27,-38.81,5.41,-0.15,112.28,31.78,4.16,0.32,112.31,-43.3,3.25,1.51,112.33,-1.91,5.6,1.49,112.34,28.12,5.07,0.12,112.34,-10.33,5.75,1.62,112.36,-7.55,5.86,0.49,112.45,12.01,4.55,1.28,112.45,27.92,5.01,1.12,112.46,-23.02,4.85,0.24,112.48,49.67,5.35,0.47,112.5,-52.65,5.87,1.01,112.63,-54.4,5.95,1.59,112.68,-30.96,4.65,0.9,112.72,68.47,5.63,1.1,112.77,82.41,4.92,1.63,112.95,17.09,5.45,1.13,113.02,-8.88,5.9,0.54,113.02,1.91,5.24,0.23,113.29,-24.71,5.84,0.16,113.3,3.29,5.59,0.32,113.33,-19.41,5.64,1.12,113.4,15.83,5.27,0.06,113.45,-14.52,4.82,1.36,113.46,-36.34,5.42,-0.08,113.51,-22.3,4.44,0.52,113.57,3.37,5.83,-0.02,113.58,-23.47,5.06,0.47,113.65,-27.01,5.78,1.05,113.65,31.89,1.58,0.03,113.79,30.96,5.34,1.01,113.85,-28.37,4.65,-0.11,113.92,-52.53,4.93,1.37,113.98,26.9,4.06,1.54,114.02,-14.49,5.66,-0.07,114.13,46.18,5.66,1.56,114.14,5.86,5.89,0.6,114.17,-19.7,5.69,-0.16,114.18,-48.83,5.69,-0.04,114.2,55.76,5.93,1.12,114.32,-4.11,5.14,0.44,114.34,-34.97,4.53,-0.08,114.47,48.77,5.93,0.22,114.58,-25.36,4.69,-0.1,114.58,-48.6,5.68,0.68,114.64,35.05,5.58,0.92,114.68,-36.5,5.78,-0.15,114.71,-26.8,3.8,-0.16,114.79,34.58,4.89,0.41,114.83,5.23,0.4,0.43,114.86,-38.31,4.84,-0.19,114.87,17.67,5.04,1.62,114.93,-38.14,5.73,-0.12,114.95,-38.26,5.76,-0.07,114.99,-37.58,5.99,-0.04,115.06,-19.66,5.92,1.16,115.06,38.34,5.77,1.65,115.1,-15.26,4.98,1.54,115.13,87.02,5.05,1.6,115.24,23.02,5.93,1.56,115.3,48.13,5.58,1.01,115.31,-9.55,3.94,1.02,115.32,-38.53,5.41,-0.13,115.4,3.62,5.95,-0.03,115.46,-72.61,3.93,1.03,115.47,13.48,5.79,1.67,115.51,14.21,5.55,1.64,115.7,-26.35,5.64,0.99,115.74,-45.17,5.04,0.77,115.75,58.71,4.93,0.1,115.8,-36.05,5.6,-0.13,115.83,28.88,4.23,1.12,115.88,-28.41,4.63,1.63,115.92,-40.93,5.12,1.1,115.95,-28.95,3.94,0.16,116.02,50.43,5.31,0,116.03,25.78,5.3,1.54,116.04,-36.06,5.8,0.32,116.11,24.4,3.57,0.93,116.14,-24.67,5.62,-0.19,116.14,-37.94,5.89,-0.11,116.31,-37.97,3.62,1.71,116.33,28.03,1.16,0.99,116.4,-34.17,5.36,0.59,116.49,-14.56,5.03,0.34,116.51,-6.77,5.49,1.38,116.53,18.51,4.89,1.43,116.54,-37.93,5.87,-0.11,116.57,10.77,5.25,0.02,116.66,37.52,5.15,1.59,116.67,65.46,5.93,1.18,116.8,-22.52,5.9,-0.18,116.85,-38.51,5.07,-0.11,116.88,33.42,5.14,1.64,116.88,-46.61,5.22,-0.15,116.99,-12.19,5.48,0.48,117.02,-25.94,4.4,-0.07,117.08,-47.08,4.69,1.04,117.26,-24.91,5.32,0.75,117.28,-56.41,5.57,1.12,117.3,-46.86,5.82,-0.14,117.3,-60.28,5.78,0.43,117.31,-46.37,4.1,-0.16,117.31,-35.24,5.94,-0.05,117.32,-24.86,3.34,1.22,117.4,-33.29,5.61,1.62,117.42,-66.2,5.78,-0.04,117.42,-17.23,5.17,1.28,117.54,-9.18,5.6,1.45,117.6,-50.51,5.89,1.09,117.93,1.77,5.12,-0.12,117.93,-21.17,5.62,0.96,117.94,-13.9,5.16,0.6,118.05,-40.58,3.71,1.01,118.07,-34.71,5.01,0.47,118.08,-14.85,5.69,0.37,118.12,-54.37,5.7,-0.15,118.16,-38.86,4.49,-0.19,118.2,-5.43,5.76,0.41,118.26,-36.36,5.44,1.16,118.27,-49.61,4.63,-0.23,118.33,-48.1,4.22,-0.13,118.37,26.77,4.97,0.1,118.55,-35.88,5.48,-0.17,118.68,47.56,5.47,1.46,118.72,-57.3,5.62,1.3,118.88,8.86,5.86,0.37,118.92,19.88,5.38,-0.04,119.08,-60.53,5.74,1.55,119.19,-52.98,3.46,-0.18,119.21,-22.88,4.2,0.72,119.24,-43.5,5.36,-0.17,119.25,15.79,5.8,1.29,119.33,-44.11,5.08,-0.17,119.42,-30.33,4.76,0.15,119.45,-60.3,5.59,0.57,119.47,-45.58,5.14,1.26,119.56,-49.24,4.47,-0.18,119.59,2.22,5.3,0.93,119.71,-60.82,5.77,-0.08,119.76,-45.22,5.98,-0.14,119.77,-23.31,5.09,1.11,119.87,-39.3,5.22,0.4,119.91,-60.59,5.19,1.76,119.93,-3.68,4.93,1.21,119.97,-18.4,4.61,0.09,120.05,73.92,5.37,1.42,120.08,-63.57,4.81,-0.17,120.2,17.31,5.6,1.32,120.21,-54.15,5.87,-0.13,120.23,25.39,5.87,1.02,120.31,-1.39,4.69,1.48,120.31,4.88,5.65,0.01,120.34,59.05,5.78,0.42,120.38,16.46,5.99,-0.02,120.41,-37.28,5.9,0.15,120.57,2.33,4.39,1.25,120.69,-41.31,5.52,-0.15,120.77,-32.46,5.83,1.23,120.88,27.79,4.94,1.13,120.9,-40,2.21,-0.27,121.07,-32.67,5.25,1.88,121.18,-50.59,5.96,1.21,121.2,79.48,5.39,-0.04,121.27,-53.11,5.52,1.35,121.27,13.12,5.14,0.02,121.58,22.64,5.96,1.65,121.67,-45.27,5.04,1.49,121.83,-20.55,5.33,0.1,121.89,-24.3,2.83,0.46,121.94,21.58,5.3,0.64,121.98,-68.62,4.35,-0.11,122.11,51.51,4.78,0.05,122.15,-2.98,4.36,0.97,122.25,-61.3,4.74,0.44,122.26,-19.24,4.4,-0.16,122.29,-48.68,5.66,-0.1,122.37,-16.25,5.66,-0.15,122.38,-47.34,1.75,-0.14,122.39,-56.09,5.66,0.2,122.4,-44.12,5.2,-0.17,122.43,-47.94,5.23,-0.2,122.52,58.25,5.91,1.37,122.61,25.51,5.73,0.83,122.67,-13.8,5.53,0.49,122.8,-48.46,5.83,-0.15,122.82,-12.93,4.72,0.94,122.84,-39.62,4.44,1.59,122.86,-42.99,4.73,0.16,122.89,-7.77,5.36,0.89,123,-46.64,5.77,0.63,123.05,17.65,4.67,0.53,123.13,-46.26,6,-0.11,123.2,68.47,5.34,1.04,123.29,29.66,5.62,-0.07,123.33,-15.79,4.99,1.07,123.37,-35.9,4.78,-0.11,123.39,-50.2,5.52,1.65,123.4,-46.99,5.14,-0.14,123.46,56.45,5.88,1.02,123.49,-36.32,5.09,-0.18,123.51,-40.35,4.42,1.17,123.56,-35.49,5.77,1.02,123.6,-45.83,5.86,-0.18,123.82,-62.92,5.16,0.09,124.13,9.19,3.53,1.48,124.46,59.57,5.63,0.18,124.57,-35.45,5.59,1.25,124.58,-65.61,5.06,1.13,124.6,-12.63,5.95,0.75,124.63,-76.92,4.05,0.41,124.64,-36.66,4.44,0.22,124.82,62.51,5.73,0.89,124.88,75.76,5.55,0.9,124.95,-71.51,5.33,-0.06,125,-71.51,5.63,-0.1,125.02,27.22,5.13,0.49,125.09,20.75,5.8,1.14,125.11,57.74,5.89,0.42,125.13,24.02,5.92,-0.04,125.16,-77.48,4.34,1.16,125.17,72.41,6,1.54,125.3,-57.97,5.96,-0.09,125.34,-36.48,5.18,-0.19,125.34,-20.08,5.58,0.77,125.35,-33.05,4.83,1.42,125.48,-17.59,5.71,1.05,125.52,-73.4,5.28,0.01,125.63,-59.51,1.86,1.2,125.63,-48.49,4.79,-0.15,125.71,-26.35,5.88,0.38,125.71,43.19,4.25,1.55,125.73,-7.54,5.92,1.64,125.73,-52.12,5.89,0.02,125.84,18.33,5.94,0.18,125.95,53.22,5.52,0.13,126.08,-80.91,5.67,1.02,126.15,-3.75,5.61,0.48,126.23,-23.15,5.67,0.07,126.24,-42.77,5.97,-0.16,126.27,-24.05,5.32,1.48,126.38,-51.73,5.18,-0.16,126.4,2.1,5.74,1.53,126.42,-3.91,3.91,-0.01,126.43,-66.14,3.77,1.13,126.47,-64.6,5.95,0.97,126.47,-42.15,5.45,-0.14,126.48,7.56,5.13,0.93,126.48,-14.93,5.96,0.17,126.61,-3.99,5.6,0.22,126.62,27.89,5.58,1.42,126.67,-12.53,5.52,1.17,126.68,12.65,5.56,1.61,126.82,-70.09,5.51,-0.02,126.9,-53.09,5.08,0.26,127,-35.11,5.75,-0.15,127.16,14.21,5.94,0.2,127.27,-47.93,5.33,-0.14,127.28,-44.16,5.82,-0.16,127.36,-44.72,5.03,-0.17,127.44,-46.33,5.98,-0.13,127.44,67.3,5.89,0.97,127.57,60.72,3.35,0.86,127.62,-32.16,5.61,1.51,127.88,24.08,5.71,0.33,127.88,-19.58,5.42,-0.06,127.9,18.09,5.33,1.57,128.02,-53.21,5.68,0.58,128.18,20.44,5.33,1.25,128.23,38.02,5.88,1.11,128.41,-38.85,5.92,-0.11,128.43,4.76,5.89,1.07,128.51,-2.15,5.8,0.01,128.65,65.15,5.47,0.21,128.68,-49.94,5.01,1.3,128.68,36.42,5.76,0.05,128.81,-58.22,5.27,-0.13,128.83,-58.01,4.84,0.98,128.87,-7.98,5.72,0,128.87,-26.84,5.95,0.39,128.96,6.62,5.91,0.53,128.97,-50.97,5.79,-0.13,129.27,9.66,5.92,0.08,129.33,-62.85,5.45,1.01,129.41,-42.99,4.11,0.11,129.41,5.7,4.14,0,129.47,-26.25,5.24,-0.03,129.58,32.8,5.96,1.11,129.59,53.4,5.66,0.96,129.69,3.34,4.45,1.22,129.77,-70.39,5.19,0.01,129.78,-22.66,5.05,0.72,129.8,65.02,5.63,0.62,129.82,52.71,5.91,1.17,129.85,-53.44,5.45,-0.13,129.93,-29.56,4.86,0.9,129.99,-53.05,5.18,-0.15,130.01,-12.48,4.98,1.42,130.03,-35.31,3.97,0.94,130.05,64.33,4.59,1.18,130.07,-53.02,5.56,-0.12,130.07,-52.92,3.6,-0.17,130.08,-40.26,5.2,-0.03,130.15,-45.19,5.67,1.66,130.15,-59.76,4.31,-0.12,130.16,-46.65,3.77,0.67,130.25,45.83,5.35,0.99,130.27,-48.92,5.9,-0.19,130.3,-47.32,4.74,0.14,130.33,-78.96,5.46,-0.1,130.43,-15.94,4.87,1.06,130.49,-45.41,5.2,0.17,130.57,-48.1,5.48,-0.17,130.58,-53.1,5.49,-0.13,130.61,-53.11,4.83,-0.17,130.8,12.68,5.62,0.44,130.81,3.4,4.3,-0.19,130.82,21.47,4.66,0.01,130.9,-33.19,3.68,-0.18,130.92,-49.82,5.15,-0.2,130.92,-7.23,4.63,0.84,131.1,-42.65,4.05,0.87,131.17,18.15,3.94,1.08,131.18,-54.71,1.93,0.04,131.19,10.08,5.63,-0.07,131.22,-37.15,5.74,-0.14,131.48,-79.5,5.79,1.6,131.51,-46.04,3.87,0.02,131.51,-2.05,5.7,1.1,131.59,-13.55,4.32,0.9,131.63,-45.91,5.43,0.24,131.67,28.76,4.03,1.01,131.68,-56.77,4.5,-0.17,131.69,6.42,3.38,0.69,131.73,12.11,5.89,0.12,131.81,-1.9,5.28,0.06,131.83,-46.16,5.71,0.55,132.11,5.84,4.35,-0.04,132.34,-3.44,5.3,-0.08,132.41,-40.32,5.47,0.07,132.45,-45.31,4.94,0.04,132.46,-32.78,5.19,0.88,132.51,-29.46,5.86,0.95,132.59,-42.09,6,-0.11,132.63,-27.71,4.02,1.27,132.64,-46.53,5.09,-0.2,132.65,-66.79,5.34,0.42,132.89,-7.18,5.55,0.15,132.9,-57.63,5.59,-0.1,132.99,43.73,5.15,0.97,133.04,42,5.98,1.25,133.05,45.31,5.96,1.23,133.14,32.47,5.67,0.22,133.15,28.33,5.96,0.87,133.16,-48.36,5.92,-0.15,133.2,-38.72,5.79,1.51,133.34,61.96,5.72,0.31,133.45,-60.35,5.78,-0.09,133.46,-47.52,5.31,0.28,133.56,30.58,5.4,1.05,133.76,-60.64,3.84,-0.1,133.8,-54.97,5.7,0.48,133.8,-18.24,5.75,1.33,133.85,5.95,3.11,0.98,133.88,-27.68,4.87,0.14,133.92,27.93,5.23,1,133.98,11.63,5.44,1.46,134.08,-52.72,4.68,-0.11,134.13,40.2,5.9,0.38,134.14,-16.71,5.95,1.54,134.16,64.6,5.57,0.88,134.17,-85.66,5.43,0.31,134.21,45.63,5.72,1.13,134.24,32.91,5.44,0.18,134.24,-59.23,4.93,-0.18,134.31,15.32,5.22,0.15,134.4,15.58,5.68,0.21,134.48,-48.57,5.88,1.06,134.62,11.86,4.26,0.14,134.68,-16.13,5.8,0.52,134.72,-47.23,5.17,0.27,134.8,48.04,3.12,0.22,134.85,-59.08,5.17,0.42,134.89,32.42,5.23,0.91,135.02,-41.25,4.45,0.65,135.16,41.78,3.96,0.46,135.19,-60.96,5.8,1.21,135.29,-68.68,5.89,1.63,135.34,-41.86,5.56,-0.13,135.35,32.25,5.89,0.09,135.44,-52.19,5.23,-0.12,135.49,-0.48,5.64,1.16,135.61,-66.4,4,0.14,135.64,67.63,4.74,1.54,135.68,24.45,5.45,-0.04,135.69,7.3,5.85,1.1,135.91,47.16,3.57,0.01,136,54.28,5.74,0.03,136.04,-47.1,3.75,1.17,136.29,-72.6,4.47,0.61,136.35,48.53,5.48,0.48,136.41,-70.54,4.66,-0.15,136.49,5.09,4.99,1.19,136.63,38.45,4.56,1.04,136.94,10.67,5.23,-0.09,137,-43.43,2.23,1.67,137,29.65,5.42,0.89,137.01,-25.86,4.62,1.59,137.1,66.87,5.15,1.51,137.18,-8.59,5.6,-0.06,137.2,26.63,5.95,0.65,137.21,33.88,5.95,0.59,137.22,51.6,4.46,0.29,137.27,-18.33,5.73,0,137.3,-12.36,5.76,0.94,137.34,22.05,5.16,0.97,137.4,-8.79,5.47,1,137.49,-30.37,5.59,0.18,137.6,67.13,4.8,0.49,137.73,63.51,4.67,0.38,137.74,-58.97,3.43,-0.19,137.77,-44.87,4.99,0.22,137.82,-62.32,3.96,-0.18,137.89,-46.58,5.78,-0.22,137.99,-19.75,5.72,0.98,138.13,-43.61,5.56,-0.11,138.23,-59.41,5.54,0.85,138.3,-69.72,1.67,0.07,138.39,-47.34,5.92,-0.05,138.45,43.22,5.3,-0.13,138.53,-44.15,5.85,-0.11,138.57,-55.57,5.26,0.98,138.59,61.42,5.18,0.61,138.59,2.31,3.89,-0.06,138.6,-43.23,5.24,-0.14,138.74,-37.6,5.85,0.83,138.81,14.94,5.36,1.32,138.81,34.63,5.98,0.84,138.9,-38.57,4.92,1.08,138.94,-37.41,4.63,0.47,138.96,56.74,5.28,1.57,138.97,72.95,5.93,0.18,139.05,54.02,4.8,0.2,139.05,-57.54,4.34,1.6,139.1,-44.27,5.12,1.64,139.17,-8.74,5.49,-0.08,139.17,-6.35,5.24,1.17,139.24,-39.4,5.31,1.17,139.27,-59.28,2.21,0.19,139.28,-14.57,5.83,1.05,139.32,-68.69,5.38,0.42,139.35,-74.89,5.28,0.02,139.36,-74.73,5.86,-0.02,139.38,46.82,5.96,0.06,139.52,-51.05,5.26,-0.06,139.61,35.36,5.94,0.18,139.68,-51.56,5.83,0.47,139.71,36.8,3.82,0.07,139.89,-15.83,5.79,1.29,139.94,-11.97,4.77,0.93,140.12,-9.56,4.8,0.91,140.24,-62.4,4.79,0.93,140.26,34.39,3.14,1.55,140.37,-25.97,4.71,1.63,140.43,56.7,5.79,1.51,140.46,-55.51,5.61,0.19,140.46,-42.19,5.56,1.64,140.53,-55.01,2.47,-0.14,140.6,-46.05,5.74,0.9,140.8,-28.83,4.71,0.89,141.02,-61.65,5.99,1.06,141.04,-80.79,5.34,0.45,141.16,26.18,4.47,1.22,141.35,-5.12,5.6,1.52,141.36,-61.95,5.77,0.14,141.57,-53.38,5.09,-0.1,141.78,-71.6,5.46,1.08,141.83,-22.34,4.72,1.15,141.9,-8.66,1.99,1.44,141.94,-6.07,5.38,0.64,142.11,9.06,5.4,0.61,142.12,8.19,5.72,1.05,142.13,-66.7,5.9,0.01,142.17,45.6,5.4,0.99,142.2,-62.27,5.91,1.1,142.29,-2.77,4.59,0.41,142.3,-20.75,5.66,1.59,142.31,-35.95,4.51,1.41,142.48,-26.59,5.49,1.35,142.52,-51.52,5.45,-0.08,142.59,-15.58,5.86,1.19,142.6,-58.36,5.88,1.68,142.68,-40.47,3.6,0.37,142.68,33.66,5.87,1.03,142.69,-31.89,5.75,0.07,142.81,-57.03,3.16,1.54,142.88,63.06,3.65,0.36,142.88,-31.87,5.91,0.26,142.89,35.1,5.39,1.54,142.89,-35.71,5.86,1.29,142.9,-73.08,5.46,1.56,142.93,22.97,4.32,1.54,142.99,11.3,4.99,1.05,142.99,9.72,5.07,1.36,143,-1.18,4.54,0.11,143.08,-40.65,5.35,0.9,143.09,-19.4,5.74,0.14,143.21,51.68,3.17,0.48,143.23,-13.52,5.95,1.5,143.3,-21.12,5.02,1.02,143.36,-22.86,5.92,0.02,143.44,-49.01,5.12,-0.11,143.47,-80.94,5.07,-0.14,143.54,-51.26,5.01,-0.18,143.56,36.4,4.54,0.91,143.61,-59.23,4.08,-0.01,143.62,69.83,4.54,0.78,143.64,-5.91,5.56,1.16,143.71,52.05,4.47,0.03,143.72,72.21,5.77,0.53,143.77,39.62,4.81,0.99,143.91,35.81,5.4,0.77,144.18,31.16,5.57,1.59,144.21,-49.35,4.34,0.17,144.25,-25.3,5.68,1.12,144.26,16.44,5.73,1.22,144.27,81.33,4.28,1.49,144.29,-32.18,5.62,1.02,144.3,-53.67,5.44,0.14,144.3,6.84,5,1.05,144.37,-36.1,5.96,1.12,144.51,-43.19,5.51,0.99,144.59,40.24,5.28,0.22,144.61,4.65,4.68,1.31,144.84,-61.33,4.51,-0.07,144.87,67.27,5.96,1.53,144.96,-1.14,3.9,1.31,145.08,-14.33,5.07,-0.15,145.18,-57.98,5.3,0.2,145.26,-57.26,5.8,1.08,145.29,9.89,3.52,0.52,145.32,-23.59,4.76,-0.12,145.4,31.28,5.9,1.58,145.45,-55.21,5.99,-0.12,145.5,39.76,5.61,0.95,145.56,-23.92,4.93,0.53,145.56,69.24,5.72,1.13,145.74,72.25,5.15,1.03,145.89,29.97,5.64,0.11,145.93,-53.89,5.56,-0.04,145.93,14.02,5.36,1.61,146.05,-27.77,4.78,0.52,146.31,-62.51,3.69,1.01,146.46,23.77,2.97,0.81,146.54,6.71,5.8,1.64,146.59,-76.78,5.43,0.9,146.6,11.81,5.67,1.49,146.6,1.79,5.65,0.34,146.63,-44.76,5.58,-0.18,146.63,57.13,5.09,1.59,146.78,-65.07,2.92,0.27,147.15,46.02,5.08,0.62,147.37,-37.19,5.95,1.25,147.49,-45.73,5.09,-0.1,147.67,-46.93,5.72,1.09,147.73,-62.75,5.56,1.32,147.75,59.04,3.78,0.29,147.8,-59.43,5.79,1.35,147.83,-46.19,5.62,1.17,147.87,-14.85,4.11,0.92,147.92,-46.55,4.58,1.17,147.97,24.4,5.29,0.23,148.03,54.06,4.55,0.04,148.13,-8.1,5.07,0.04,148.19,26.01,3.88,1.22,148.43,5.96,5.9,1.66,148.46,-51.15,5.95,-0.15,148.55,-25.93,4.87,1.2,148.57,-45.28,5.72,-0.11,148.71,-50.24,5.71,0.01,148.72,-19.01,4.94,1.56,148.93,49.82,5.27,0.09,149.11,8.93,5.85,1.13,149.15,-33.42,5.83,1.2,149.22,-54.57,3.52,-0.07,149.31,57.42,5.97,0.9,149.42,41.06,5.11,0.48,149.56,12.44,5.26,-0.04,149.59,72.88,5.86,1.16,149.72,-35.89,5.23,0.3,149.9,29.65,5.75,1.06,149.97,56.81,5.5,1.49,150.05,8.04,4.68,1.59,150.18,-82.21,5.53,0.04,150.25,31.92,5.37,0.68,150.5,-60.42,5.93,0.26,150.7,21.95,5.68,-0.18,151.09,-24.29,5.7,0.3,151.15,53.89,5.71,0.51,151.28,-13.06,4.6,-0.09,151.55,-47.37,5.06,0.88,151.79,-17.14,5.59,1.49,151.83,16.76,3.48,-0.03,151.86,35.24,4.49,0.19,151.98,10,4.39,1.45,151.98,-0.37,4.48,-0.03,152.09,11.97,1.36,-0.09,152.18,-65.82,5.26,0.97,152.23,-51.81,4.85,-0.12,152.38,-68.68,5.8,0.02,152.52,-12.82,5.3,0.37,152.53,-8.41,5.91,0.03,152.65,-12.35,3.61,1.01,152.66,-41.72,5.98,1.24,152.73,-8.42,5.64,1.3,152.8,37.4,5.86,1.28,152.94,-58.06,5.7,-0.12,153.2,4.61,5.77,1.18,153.35,-51.23,5.27,0.26,153.37,-51.76,5.78,0.14,153.38,-66.37,5.15,0.22,153.43,-70.04,3.29,-0.07,153.44,-40.35,5.91,1.2,153.68,-42.12,3.85,0.05,153.88,-43.11,5.59,1.52,154.06,29.31,5.49,0.02,154.13,23.5,5.95,0.66,154.17,13.73,5.42,1.65,154.17,23.42,3.43,0.31,154.17,25.37,5.84,1.21,154.27,-61.33,3.39,1.54,154.27,42.91,3.45,0.03,154.31,23.11,5.81,0.5,154.41,-8.07,5.25,0.34,154.51,65.11,5.74,0.16,154.53,-28.99,5.52,0.28,154.62,-41.67,5.97,-0.06,154.66,-56.11,5.8,0.48,154.77,-64.68,5.66,0.04,154.86,48.4,6,1.02,154.9,-55.03,4.59,1.6,154.93,19.47,4.78,0.45,154.99,19.84,2.01,1.13,155.07,-47.7,5.66,1.67,155.23,-56.04,4.5,-0.1,155.26,68.75,5.88,0.24,155.54,41.23,5.73,0.53,155.58,-41.65,4.82,1.1,155.58,41.5,3.06,1.6,155.74,-66.9,4.97,-0.13,155.78,33.91,5.89,0.15,155.86,-4.07,5.93,-0.05,155.87,-38.01,5.34,0.25,156.03,65.57,4.94,-0.05,156.04,33.72,5.52,1.19,156.1,-74.03,3.99,0.37,156.25,-58.58,5.93,0.32,156.31,8.78,5.61,1.63,156.43,-7.06,5.6,1.53,156.48,33.8,4.72,0.26,156.52,-16.84,3.83,1.46,156.7,-54.88,5.58,1.56,156.79,-31.07,4.28,1.43,156.85,-57.64,4.65,0.47,156.86,-65.7,6,0.09,156.87,41.6,6,0.17,156.97,-58.74,3.81,0.32,156.97,36.71,4.2,0.91,157.22,-64.17,5.27,1.86,157.37,-2.74,5.19,-0.05,157.37,-29.66,5.58,1.42,157.4,-30.61,5.57,-0.04,157.42,84.25,5.52,0.24,157.53,38.93,5.79,0.09,157.57,-0.64,5.08,-0.14,157.58,-71.99,4.72,0.04,157.66,55.98,4.82,0.54,157.75,-13.59,5.59,-0.03,157.76,-73.22,4.94,1.68,157.77,82.56,5.25,0.4,157.84,-53.72,4.89,0.5,157.96,32.38,5.9,0.11,157.99,-45.07,5.76,-0.19,158.01,-61.69,3.3,-0.09,158.05,14.14,5.43,1.7,158.14,-44.62,5.91,0.92,158.2,-58.67,5.98,0.29,158.2,9.31,3.84,-0.15,158.24,-47,5.02,1.05,158.31,40.43,4.72,0.22,158.38,34.99,5.57,0.03,158.5,-23.75,5.08,1.6,158.7,6.95,5.07,0.92,158.76,8.65,5.67,0.06,158.77,75.71,4.86,0.96,158.79,57.08,5.16,0.35,158.8,-39.56,5.5,3.02,158.87,-78.61,4.11,1.58,158.9,-57.56,4.45,1.6,159.09,-59.56,5.08,1.17,159.13,-12.23,5.71,0.53,159.31,-27.41,4.87,1.63,159.33,-48.23,3.84,0.3,159.36,-58.73,5.47,0.5,159.39,-13.38,4.89,2.8,159.51,-57.26,5.89,-0.13,159.65,-16.88,4.91,0.92,159.68,31.98,4.68,0.82,159.69,-59.18,4.69,1.56,159.75,-58.82,5.96,1.69,159.77,53.67,5.55,1.27,159.78,37.91,5.84,0.6,159.83,-55.6,4.29,1.02,160.05,-65.1,5.51,-0.16,160.45,68.44,5.74,1.32,160.46,-79.78,5.97,-0.07,160.49,65.72,5.12,1.21,160.56,-64.47,4.76,-0.14,160.67,-59.22,5.36,0.21,160.68,-32.72,5.63,0.01,160.74,-64.39,2.74,-0.22,160.76,26.33,5.51,0.16,160.77,69.08,5.01,1.41,160.84,4.75,5.77,1.17,160.85,23.19,5.08,0.04,160.88,-60.57,4.58,1.7,160.89,46.2,5.18,0.32,160.93,57.2,5.79,-0.04,160.96,-64.25,5.74,0.01,161.03,-63.96,4.8,-0.13,161.27,67.41,5.95,2.38,161.32,-80.47,5.46,0.96,161.45,-80.54,4.45,-0.19,161.47,30.68,5.36,-0.05,161.57,-64.51,5.33,-0.1,161.6,18.89,5.5,1.13,161.61,14.19,5.49,0.91,161.62,-64.26,5.23,-0.08,161.69,-49.42,2.69,0.9,161.71,-64.38,4.87,-0.15,161.72,-17.3,5.44,0.11,161.74,-56.76,5.14,-0.08,162.02,-59.92,5.98,0.27,162.06,-31.69,5.87,0.03,162.17,-1.96,5.92,1.61,162.31,10.55,5.32,0.04,162.35,-59.32,5.85,0.01,162.41,-16.19,3.11,1.23,162.43,-9.85,5.85,1.07,162.49,-34.06,5.61,0.04,162.58,-8.9,5.8,0.16,162.77,-3.09,5.95,1.48,162.8,56.58,5.66,1.13,162.85,59.32,5.57,1.16,163.13,-57.24,5.26,0.13,163.33,34.21,3.79,1.04,163.37,-20.14,5.23,0.48,163.37,-58.85,3.78,0.95,163.38,69.85,5.91,1.01,163.39,54.59,5.12,1.36,163.43,-70.72,5.99,-0.02,163.43,-2.13,5.45,0.97,163.49,43.19,4.66,-0.04,163.57,-13.76,5.65,0.83,163.62,-61.83,5.95,1.74,163.74,34.03,5.73,1.03,163.82,-60.52,5.93,1.07,163.9,24.75,4.3,0.02,163.93,0.74,5.91,0.43,163.93,33.51,5.02,1.1,164.01,6.19,5.91,1.26,164.18,-37.14,4.6,1.01,164.28,-50.76,5.9,0.17,164.81,-33.74,5.7,0.37,164.87,40.43,5.03,0.62,164.88,-16.35,5.88,1.6,164.89,36.09,5.99,1.6,164.94,-18.3,4.08,1.08,165,-43.81,5.81,-0.06,165.04,-42.23,4.37,0.12,165.05,-14.08,5.86,1.5,165.06,45.53,5.47,1.47,165.14,3.62,4.84,1.14,165.19,6.1,4.98,0.17,165.21,39.21,5.06,0.26,165.46,-2.48,4.73,1.59,165.46,56.38,2.34,0.03,165.58,20.18,4.42,0.05,165.81,-11.3,5.51,0.94,165.9,0,5.95,1.22,165.93,61.75,1.81,1.06,166.13,-47.68,5.67,0.26,166.23,-35.8,5.43,0.02,166.25,7.34,4.62,0.33,166.33,-27.29,4.92,0.37,166.49,-27.29,5.69,-0.07,166.64,-62.42,4.62,0.99,166.71,-70.88,5.58,-0.07,166.73,1.96,5.52,0.96,166.82,-42.64,5.15,0.03,167.14,-61.95,5.11,0.2,167.15,-58.97,3.93,1.23,167.18,-28.08,5.43,0.07,167.2,24.66,5.7,0.08,167.33,36.31,5.71,1.4,167.41,43.21,5.89,1.56,167.42,44.5,3,1.14,167.47,-32.37,5.79,0.03,167.91,-22.83,4.46,0.03,168.14,-49.1,5.37,0.18,168.15,-60.32,4.59,0.54,168.19,-64.17,5.22,-0.08,168.31,-44.37,5.77,1.66,168.38,-59.62,5.74,-0.11,168.41,-53.23,5.75,1.31,168.44,-0.07,5.4,-0.02,168.51,8.06,5.79,1.13,168.53,20.52,2.56,0.13,168.56,15.43,3.33,0,168.8,23.1,4.56,1.66,168.97,13.31,5.31,1.19,169.17,-3.65,4.45,0.21,169.17,49.48,5.88,1.1,169.32,2.01,5.18,1.51,169.55,31.53,3.79,0.61,169.62,33.09,3.49,1.4,169.73,1.65,5.9,1.04,169.78,38.19,4.76,0.11,169.82,-64.58,5.99,0.47,169.84,-14.78,3.56,1.11,170.25,-54.49,3.9,-0.16,170.28,6.03,4.05,-0.06,170.71,43.48,4.99,1,170.78,-56.78,5.82,0,170.8,-36.16,5,1.46,170.84,-64.95,5.09,-0.06,170.84,-18.78,5.08,0.44,170.98,10.53,4,0.42,171.01,1.41,5.39,0.94,171.05,-72.26,5.55,0.02,171.15,-10.86,4.81,1.56,171.22,-17.68,4.06,0.22,171.25,11.43,5.8,1.38,171.37,-36.06,5.21,0.98,171.39,-37.75,5.87,1.5,171.4,16.46,5.58,0.39,171.43,-63.97,5.18,0.5,171.49,55.85,5.73,0.99,171.65,-61.12,5.22,-0.08,171.7,-53.16,5.8,0.52,171.79,-12.36,5.93,0.49,171.98,2.86,4.95,1,172.15,-42.67,5.14,-0.03,172.27,39.34,5.3,0.02,172.27,61.78,5.83,0.38,172.41,-24.46,5.77,0.07,172.42,15.41,5.74,1.37,172.58,-3,4.77,1.53,172.62,18.41,5.54,1.06,172.63,43.17,5.94,0.52,172.85,69.33,3.82,1.61,172.94,-59.44,5.07,1.03,172.95,-59.52,5.12,0.43,173.07,-29.26,4.93,0.54,173.08,-66.96,5.89,1.14,173.09,61.08,5.46,0.52,173.2,-7.83,5.94,1.38,173.2,-40.44,5.64,1.58,173.23,-31.09,5.13,1.58,173.25,-31.86,3.54,0.95,173.41,-40.59,5.39,0.12,173.59,3.06,5.76,0.48,173.62,-32.83,5.96,0.81,173.68,16.8,5.95,-0.16,173.69,-54.26,4.62,-0.08,173.74,-49.14,5.5,1.04,173.77,54.79,5.63,1.03,173.81,-47.37,5.64,1.68,173.95,-63.02,3.11,-0.04,173.98,-47.64,5.26,0.26,174.01,69.32,5.19,0.97,174.07,27.78,5.8,0.25,174.09,-61.05,5.84,-0.1,174.15,-33.57,5.71,1.02,174.17,-9.8,4.7,-0.07,174.24,-0.82,4.3,0.98,174.25,-61.28,5.14,1.11,174.32,-75.9,5.64,0.36,174.39,-47.75,5.46,1.23,174.45,-67.62,5.94,1.01,174.53,-61.83,5.15,-0.04,174.59,43.63,5.56,0.35,174.62,8.13,5.24,1.5,174.67,-13.2,5.48,0.52,174.87,-65.4,5.01,0.8,175.05,-34.74,4.7,-0.07,175.18,-53.97,5.95,1.67,175.2,21.35,5.26,0.98,175.22,-62.09,4.93,1.11,175.26,34.2,5.31,0.72,175.33,-43.1,5.54,0.04,175.39,31.75,5.73,0.44,175.43,-32.5,5.2,1.48,175.62,66.74,5.32,1.27,175.86,-37.19,5.98,1.45,175.88,-62.49,5,0.78,176.19,-18.35,4.71,0.96,176.32,8.26,4.84,0.17,176.4,-66.73,3.63,0.16,176.43,-45.69,5.28,-0.12,176.46,6.53,4.04,1.5,176.51,47.78,3.69,1.18,176.63,-61.18,4.11,0.9,176.63,-40.5,4.89,0.66,176.73,55.63,5.27,1.28,176.83,-57.7,5.42,1.66,176.98,8.25,5.31,0.04,177,20.22,4.5,0.55,177.06,-66.81,4.75,1.52,177.16,14.28,5.9,0.3,177.19,-26.75,5.1,1.59,177.26,14.57,2.14,0.09,177.42,-63.79,4.3,-0.15,177.42,34.93,5.73,0.47,177.49,-70.23,4.98,1.36,177.61,-62.65,5.68,0.23,177.67,1.76,3.59,0.52,177.76,-5.33,5.62,1.06,177.79,-45.17,4.47,1.28,177.92,-30.83,5.85,0.55,177.96,-65.21,4.89,-0.12,178.04,-56.99,5.56,0.07,178.23,-33.91,4.29,-0.1,178.46,53.69,2.41,0.04,178.68,-25.71,5.26,0.88,178.75,-63.28,5.89,0.21,178.76,8.44,5.58,0.94,178.92,-28.48,5.93,1.5,178.92,15.65,5.53,0.12,178.99,56.6,5.83,1.1,179,-17.15,5.17,-0.02,179.42,-62.45,5.59,-0.15,179.56,-56.32,5.44,-0.06,179.7,-64.34,5.59,0.17,179.82,33.17,5.95,1.15,179.91,-78.22,4.88,-0.05,179.99,3.66,5.36,0,-179.81,-10.45,5.54,0.76,-179.79,-19.66,5.28,-0.19,-179.78,6.61,4.65,0.12,-179.59,36.04,5.59,1.02,-179.47,43.05,5.22,0.28,-179.34,-69.19,5.89,-0.08,-179.24,-63.31,4.32,0.28,-179.09,-42.43,5.15,0.42,-178.93,21.46,5.89,0.25,-178.92,-63.17,4.72,-0.08,-178.84,-68.33,5.34,-0.01,-178.81,-76.52,5.04,1.49,-178.76,-60.97,5.95,1.69,-178.7,8.73,4.12,0.97,-178.69,76.91,5.78,1.03,-178.4,-65.71,5.95,0.61,-178.28,-64.61,4.14,0.35,-178.04,-75.37,5.17,1.28,-177.98,-50.66,4.46,-0.16,-177.94,-48.69,5.34,-0.01,-177.91,-50.72,2.58,-0.13,-177.9,-24.73,4.02,0.33,-177.78,-44.33,5.75,0.24,-177.77,-41.23,5.51,-0.1,-177.58,1.9,5.95,1.12,-177.49,5.81,5.72,0.35,-177.47,-22.62,3.02,1.33,-177.25,81.71,6,1.62,-177.23,-23.6,5.45,0.06,-177.09,-52.37,3.97,-0.16,-177.04,25.87,5.66,1.4,-176.96,20.54,5.6,0.96,-176.95,77.62,5.14,0.36,-176.91,-62.95,5.91,0.25,-176.65,-38.93,5.77,-0.14,-176.64,10.26,5.85,0.26,-176.49,-45.72,5.31,1.4,-176.25,-20.84,5.82,1.05,-176.21,70.2,5.72,1.18,-176.21,-58.75,2.79,-0.19,-176.14,57.03,3.32,0.08,-176.05,-17.54,2.58,-0.11,-176,14.9,5.09,0.07,-175.97,40.66,5.69,1.59,-175.91,23.95,4.93,0.96,-175.87,33.06,4.99,1.14,-175.63,53.19,5.8,1.33,-175.62,28.94,5.71,0.16,-175.61,-67.96,4.06,1.6,-175.41,-79.31,4.24,-0.12,-175.39,-64,4.06,-0.17,-175.33,-0.79,5.9,0.17,-175.29,75.16,5.47,0.05,-175.25,-55.14,5.01,1.6,-175.05,48.98,5.28,1.62,-175.02,-0.67,3.89,0.03,-174.96,-22.18,5.94,0.82,-174.92,26.62,5.52,1.09,-174.91,3.31,4.97,1.17,-174.86,-22.22,5.2,-0.09,-174.82,17.79,4.72,1.01,-174.79,57.86,5.54,1.45,-174.77,-13.57,5.14,1.05,-174.66,-60.4,3.59,1.39,-174.51,-56.37,5.91,1.53,-174.47,-67.52,5.15,0.2,-174.45,-68.31,5.73,1.04,-174.37,25.85,4.78,0.52,-174.29,-57.68,5.38,-0.1,-174.16,-24.84,5.66,1.15,-174.1,-35.41,5.32,-0.07,-174.06,-38.91,5.79,-0.06,-173.99,51.56,4.76,0.88,-173.92,26.1,5.17,0.08,-173.74,56.78,5.82,1.62,-173.7,-11.61,5.95,0.04,-173.66,-35.19,5.71,-0.07,-173.54,39.02,5.01,0.96,-173.4,27.27,4.92,0.28,-173.37,-51.45,4.82,-0.14,-173.35,-63.1,0.77,-0.24,-173.28,-32.83,5.56,0.01,-173.27,28.27,4.35,1.13,-173.25,26.83,4.98,0.09,-173.13,-58.99,5.38,1.54,-173.1,55.71,5.68,1.58,-172.99,-50.23,3.91,-0.19,-172.91,-39.04,5.45,-0.07,-172.77,25.91,5.29,-0.06,-172.64,24.11,5.47,0.45,-172.57,20.9,5.68,0.09,-172.53,-16.52,2.94,-0.01,-172.52,-56.52,5.78,1.57,-172.51,58.41,5.37,0.21,-172.51,-41.74,6,1.52,-172.47,69.2,5.01,1.62,-172.43,-23.7,5.63,1.67,-172.25,24.57,5.47,0.06,-172.21,-57.11,1.59,1.6,-172.08,-59.42,5.49,0.62,-172.02,-63.51,5.96,0.26,-171.98,-16.2,4.3,0.39,-171.96,-73,5.88,1.08,-171.88,-72.13,3.84,-0.16,-171.85,-13.86,5.74,0.38,-171.63,69.79,3.85,-0.12,-171.61,-12.83,5.58,0.86,-171.59,33.25,5.42,1.01,-171.56,41.36,4.24,0.59,-171.56,-9.45,5.48,-0.04,-171.4,-23.4,2.65,0.89,-171.32,-44.67,5.76,0.68,-171.32,70.02,4.95,1.31,-171.29,22.63,4.8,0.01,-171.22,18.38,5.03,1.15,-171.22,21.88,5.86,1.24,-171.06,-41.02,5.12,0.22,-171,-39.87,5.78,0,-170.8,-5.83,5.88,0.07,-170.76,17.09,5.7,1.44,-170.7,-69.14,2.69,-0.18,-170.57,-27.14,5.41,0.33,-170.57,-48.54,3.85,0.05,-170.41,1.85,5.68,1.59,-170.31,-18.25,6,0.31,-170.24,-30.42,5.86,1.21,-170.22,21.06,5.49,0.98,-170.19,-8,4.66,1.24,-170.03,-39.99,4.63,-0.08,-169.68,-13.01,5.17,0.43,-169.65,-46.15,5.84,1.48,-169.62,-48.96,2.2,-0.02,-169.58,-1.45,2.74,0.37,-169.53,10.24,4.88,0.08,-169.51,-59.69,4.91,-0.04,-169.51,6.81,5.57,0,-169.35,-48.81,4.66,1.08,-169.29,-63.06,5.27,0.2,-169.21,-56.18,5.99,-0.07,-169.09,-1.58,5.91,0.85,-169,-28.32,5.46,1.35,-168.75,39.28,5.95,0.56,-168.72,45.44,5.42,2.99,-168.6,7.67,5.22,0.32,-168.59,-60.98,4.69,1.05,-168.43,-68.11,3.04,-0.18,-168.41,9.54,5.65,0.99,-168.41,-56.49,4.62,-0.15,-168.34,16.58,5.12,1.35,-168.31,-33.32,5.87,1.33,-168.17,62.78,5.88,0.22,-168.11,66.79,5.43,1.57,-168.07,-59.69,1.25,-0.24,-167.89,-27.6,5.65,0.95,-167.84,60.32,5.83,0.47,-167.77,14.12,5.71,0.02,-167.72,83.42,5.92,0.02,-167.69,83.41,5.38,0.03,-167.68,27.55,5.76,0.05,-167.56,-71.99,5.55,1.15,-167.46,37.52,5.87,0.17,-167.33,-34,4.9,-0.03,-167.26,-52.79,5.7,0.13,-167.18,-60.33,5.71,0.34,-167.08,27.54,4.93,0.68,-167.01,-39.68,5.99,-0.1,-166.73,-54.95,5.91,1.31,-166.72,-48.94,4.33,1.34,-166.68,21.24,4.89,0.9,-166.66,-60.33,5.75,0.3,-166.64,-40.18,4.25,0.22,-166.55,-60.38,5.89,0.2,-166.49,55.96,1.76,-0.02,-166.42,-11.65,6,0.07,-166.41,-9.54,4.77,1.59,-166.35,-57.18,4.03,-0.18,-166.35,-57.17,5.08,-0.09,-166.34,-59.15,4.62,-0.15,-166.26,47.2,5.75,1.45,-166.25,-85.12,5.45,0.99,-166.26,-44.15,5.89,0.63,-166.17,-42.92,5.46,1.67,-166.13,65.44,5.23,0.3,-166.1,3.4,3.39,1.57,-166.01,-56.84,5.34,0.01,-166,38.31,5.61,0.34,-165.99,38.32,2.89,-0.11,-165.93,54.1,5.84,0.2,-165.87,-72.19,5.93,1.12,-165.73,-51.2,5.17,-0.07,-165.3,75.47,6,1.03,-165.27,17.41,4.76,1.57,-165.09,-3.81,5.79,0.2,-165.02,66.6,5.37,1.28,-164.93,30.79,4.88,1.17,-164.85,-3.37,5.99,1.12,-164.82,56.37,4.93,0.37,-164.71,17.12,5.97,0.97,-164.46,10.96,2.85,0.93,-164.43,-71.55,3.61,1.19,-164.23,-71.48,5.93,0,-164.11,-49.53,4.83,0.03,-164.06,-20.58,5.58,0.55,-163.56,35.8,5.2,-0.06,-163.53,45.27,5.64,1.14,-163.43,-48.46,4.71,-0.15,-163.41,21.15,6,0.39,-163.41,22.62,5.53,1.46,-163.35,-41.59,5.59,1.05,-163.27,-35.86,5.63,0.05,-163.27,-49.91,4.27,-0.18,-163.21,27.62,4.8,1.48,-163.15,-59.86,5.98,0.44,-163.09,-53.46,5.7,-0.06,-163.03,-10.74,5.15,1.14,-162.97,-65.31,5.44,-0.03,-162.86,-8.98,5.57,1.18,-162.74,-23.12,4.94,1.05,-162.7,10.02,5.79,1.02,-162.56,-10.33,5.95,1.49,-162.55,16.85,5.91,1.45,-162.51,-5.54,4.38,-0.01,-162.5,17.53,4.32,0.46,-162.49,38.5,5.91,0.29,-162.21,-42.23,5.78,0.52,-162.15,-43.37,5.24,1.05,-162.04,-69.94,5.92,0.42,-162.03,27.88,4.23,0.57,-161.99,-16.2,5.04,0.46,-161.99,-37.8,4.85,0.69,-161.93,-59.92,4.58,-0.07,-161.86,11.56,5.76,1.5,-161.8,-66.23,5.91,0.05,-161.65,-50.7,5.9,-0.01,-161.57,40.15,4.94,1.06,-161.45,-19.93,5.31,0.86,-161.45,-58.68,5.91,1.08,-161.44,-59.1,4.9,0.49,-161.43,-78.45,5.84,1.04,-161.37,11.33,5.64,1.51,-161.32,-48.96,5.84,1.06,-161.19,-67.89,4.79,-0.08,-161.12,40.86,5.77,0.2,-161.01,-19.94,5.21,1.01,-160.81,9.42,5.19,0.59,-160.78,-31.51,5.1,0.96,-160.7,-66.78,4.86,1.48,-160.69,-43.98,5.82,0.19,-160.68,13.68,5.33,1.3,-160.61,40.57,4.72,0.31,-160.6,5.47,4.78,1.64,-160.44,49.68,5.14,-0.05,-160.4,-18.31,4.74,0.71,-160.38,34.1,5.81,1.37,-160.27,-23.17,2.99,0.92,-159.92,40.15,5.6,1.2,-159.85,-36.71,2.75,0.07,-159.84,-52.75,5.47,-0.12,-159.8,-55.8,6,0.24,-159.76,-46.88,5.76,1.11,-159.58,2.09,5.69,0.05,-159.46,5.15,5.89,0.11,-159.43,-52.18,5.81,0.07,-159.34,-60.99,4.52,-0.14,-159.25,-17.74,5.36,0.99,-159.17,-4.92,5.88,1.43,-159.02,54.93,2.23,0.06,-159,-64.54,4.52,0.82,-158.86,-5.16,5.76,0.42,-158.72,23.85,5.75,0.09,-158.72,-74.89,5.04,1.11,-158.7,-11.16,0.98,-0.23,-158.69,54.99,3.99,0.17,-158.69,-64.49,5.32,0.41,-158.54,-70.63,5.65,-0.02,-158.47,-39.76,5.11,1.18,-158.47,72.39,5.82,1.65,-158.45,-1.19,5.97,0.18,-158.43,46.03,5.88,0.99,-158.32,-12.71,5.27,1.48,-158.27,-41.5,5.69,1.48,-158.26,78.64,5.74,0.77,-158.14,-15.97,4.76,1.1,-157.89,13.78,4.97,0.71,-157.89,59.95,5.4,-0.01,-157.7,10.82,5.65,1.05,-157.64,-51.17,5.04,0.06,-157.24,-39.41,3.9,1.19,-157.01,-6.26,4.68,1.61,-156.85,-28.69,5.69,0.04,-156.78,-15.36,5.52,1.23,-156.76,-10.16,5.21,0.96,-156.47,55.35,5.6,-0.01,-156.47,3.66,4.92,0.03,-156.39,49.02,4.68,0.13,-156.33,-13.21,5.92,0.02,-156.33,-0.6,3.38,0.11,-156.3,37.18,4.91,0.4,-156.12,-5.4,5.7,0.95,-155.8,-26.5,5.73,0.22,-155.75,24.61,5.72,1.59,-155.72,-44.14,5.96,0.94,-155.7,71.24,5.5,1.22,-155.7,-61.69,5.63,0.49,-155.65,-46.43,5.91,-0.11,-155.63,36.29,4.82,0.24,-155.32,-29.56,5.81,0.43,-155.3,-57.62,6,1.14,-155.12,52.92,5.46,0.11,-155.11,10.75,5.57,0.35,-155.05,-40.05,5.61,1.3,-155.03,-53.47,2.29,-0.17,-155,-49.95,5.74,1.5,-154.96,-64.58,5.79,0.4,-154.83,19.96,5.73,0.02,-154.82,54.68,4.63,1.63,-154.77,-85.79,5.56,0.18,-154.74,22.5,5.63,1.01,-154.63,64.82,5.85,0.07,-154.6,-8.7,5.03,1.62,-154.56,-54.56,4.99,-0.05,-154.5,-58.79,5.38,-0.03,-154.4,82.75,5.92,0.99,-154.34,78.06,5.91,1,-154.32,34.99,5.98,0.86,-154.27,-41.4,5.96,1.02,-154.27,-56.77,6,-0.1,-154.23,3.54,5.35,1.09,-154.08,-42.07,5.96,-0.07,-153.88,-16.18,5.55,0.81,-153.6,-26.12,5.81,0.02,-153.58,-33.04,4.23,0.39,-153.52,-12.43,5.5,0.9,-153.44,41.09,5.88,0.21,-153.42,38.5,5.92,0.95,-153.35,54.43,5.68,-0.04,-153.34,-51.43,4.64,0.96,-153.32,25.7,5.97,0.52,-153.27,-36.25,5.15,-0.01,-153.25,38.54,5.51,1.04,-153.18,17.46,4.5,0.51,-153.14,-17.86,5.41,1.62,-153.13,-50.25,5.92,0.28,-153.11,49.31,1.85,-0.1,-153.09,-50.32,5.46,1.35,-152.84,31.19,5.61,1.03,-152.64,-34.45,4.19,1.52,-152.63,15.8,4.05,1.52,-152.62,-41.69,3.41,-0.22,-152.6,-42.47,3.47,-0.17,-152.57,21.26,4.92,1.43,-152.56,61.49,5.97,0.97,-152.53,-18.13,4.96,1.06,-152.4,5.5,6,0.9,-152.21,34.66,5.89,1.64,-152.14,64.72,4.58,1.57,-152.05,-46.9,5.77,-0.15,-152.05,-69.4,5.73,1.7,-152.05,34.44,4.76,1.61,-152.04,-32.99,4.32,-0.15,-151.98,-52.81,5.26,-0.08,-151.71,28.65,5.91,0.2,-151.7,-31.93,4.75,-0.11,-151.7,17.93,5.71,0.85,-151.61,-35.66,5.53,0.44,-151.57,-53.37,5.87,0.01,-151.54,53.73,5.7,-0.03,-151.51,-47.13,5.83,-0.05,-151.33,18.4,2.68,0.58,-151.32,-1.5,5.16,1.09,-151.3,-67.65,5.74,1.49,-151.2,-52.16,5.66,-0.07,-151.12,-47.29,2.55,-0.18,-151.09,-82.67,5.95,1.41,-150.92,-46.59,5.82,1.14,-150.88,1.05,5.9,0.22,-150.86,-54.7,6,0.78,-150.86,27.49,5.02,1.44,-150.59,-63.69,4.71,1.08,-150.43,-42.1,3.83,-0.22,-150.37,-24.97,5.2,-0.09,-150.34,21.7,5.76,0,-150.33,-44.8,3.87,-0.21,-150.18,-50.37,5.92,0.96,-150,-25.01,5.77,0.48,-149.78,-66.27,5.96,0.35,-149.66,8.89,5.98,0.09,-149.59,1.54,4.23,0.12,-149.57,-45.6,4.34,0.6,-149.41,-27.43,5.47,1.33,-149.14,-56.21,5.93,1.21,-149.04,-60.37,0.61,-0.23,-148.9,64.38,3.67,-0.05,-148.67,-76.8,5.69,1.24,-148.49,-41.18,4.36,-0.2,-148.41,-26.68,3.25,1.09,-148.33,-36.37,2.06,1.01,-148.32,-9.31,5.46,0.35,-148.02,43.85,5.13,1.49,-147.93,49.46,5.26,1.64,-147.79,77.55,4.8,1.37,-147.6,-51.5,5.96,-0.05,-147.52,-53.44,4.74,0.94,-147.4,25.09,4.82,0.54,-147.29,-16.3,4.93,1.68,-146.98,69.43,5.18,1.6,-146.93,2.41,4.99,-0.12,-146.81,-27.26,5.07,1.13,-146.78,-10.27,4.18,1.32,-146.68,-53.67,5.53,1.44,-146.63,51.79,4.53,0.23,-146.58,-0.85,5.89,0.49,-146.48,12.96,5.53,0.54,-146.32,-41.84,5.61,0.93,-146.29,10.1,5.29,1.01,-146.26,-57.09,5.03,-0.07,-146.15,-18.2,5.53,0,-146.08,19.18,-0.05,1.24,-146,-6,4.07,0.51,-145.96,51.37,4.75,0.24,-145.9,46.09,4.18,0.09,-145.84,-66.59,5.72,-0.09,-145.63,15.26,5.84,1.68,-145.5,35.51,4.8,1.06,-145.44,-81.01,4.89,0.24,-145.34,-18.72,5.86,0.01,-145.25,-25.82,5.87,0.52,-145.22,-13.37,4.52,0.13,-145.18,13,5.41,0.39,-145.15,-37,5.93,0.08,-145.15,-46.06,3.55,-0.18,-145.11,-2.27,5.14,1.02,-145.06,16.31,4.84,1.23,-145.04,-61.27,5.22,0.28,-144.96,-43.06,5.55,0.91,-144.92,-56.39,4.3,0.08,-144.86,-37.89,4.05,-0.03,-144.82,-45.19,4.78,0.31,-144.42,-34.79,5.57,-0.09,-144.4,-80.11,5.06,-0.11,-144.35,-58.46,4.76,0.8,-144.24,-39.51,4.41,-0.18,-144.23,-27.75,4.78,1.3,-144.16,8.45,4.86,0.01,-144.05,-53.18,5.99,1.1,-144,8.24,5.94,0.07,-143.95,5.82,5.1,0.12,-143.8,-24.81,5.34,0.96,-143.72,-68.2,5.56,0.44,-143.7,51.85,4.04,0.5,-143.47,-45.22,4.56,-0.15,-143.45,-45.38,4.33,0.43,-143.39,19.23,5.4,0.23,-143.27,-83.67,4.31,1.3,-143.22,-65.82,5.87,1.5,-143.2,-46.13,5.83,0.31,-143.12,75.7,4.25,1.43,-142.96,-29.49,4.97,-0.07,-142.95,-2.23,4.81,0.69,-142.84,49.84,5.58,0.86,-142.83,-6.9,5.42,1.49,-142.54,0.83,5.96,0.16,-142.46,-45.32,5.51,-0.09,-142.41,-49.52,5.38,0.06,-142.2,-38.87,5.99,1.06,-142.18,-67.72,5.84,1.01,-142.04,30.37,3.57,1.3,-141.98,38.31,3.04,0.19,-141.92,26.68,6,0.23,-141.87,55.4,5.74,1.53,-141.86,22.26,5.91,0.39,-141.85,-50.46,4.44,-0.18,-141.63,-52.68,5.86,1.09,-141.62,-55,5.86,0.48,-141.33,49.37,5.74,1.56,-141.33,29.75,4.47,0.36,-141.12,-42.16,2.33,-0.16,-141.12,-41.52,5.88,-0.08,-140.92,-46.25,5.55,1.49,-140.82,-40.21,5.74,-0.11,-140.67,-46.13,5.39,0.93,-140.53,-49.43,4.05,-0.15,-140.45,43.64,5.74,1.48,-140.44,18.3,5.9,1.1,-140.44,54.02,5.83,0.01,-140.29,44.4,5.39,0.03,-140.1,-60.84,1.35,0.9,-140.1,-60.83,-0.01,0.71,-139.82,13.53,5.93,0.24,-139.82,16.42,4.49,0,-139.74,-36.13,5.67,-0.08,-139.71,13.73,3.78,0.04,-139.59,8.16,4.86,0.99,-139.57,11.66,5.55,0.94,-139.52,-47.39,2.3,-0.15,-139.51,-37.79,4.01,-0.16,-139.37,-64.98,3.18,0.26,-139.23,-5.66,3.87,0.39,-139.19,-25,5.7,0.01,-139.14,26.53,4.8,1.67,-139.09,-35.17,4.06,1.36,-139.06,40.46,5.72,1.4,-138.75,-35.19,4.92,0.01,-138.75,27.07,2.35,0.97,-138.69,16.96,4.6,0.97,-138.68,-62.88,5.36,0.31,-138.62,0.72,5.68,-0.02,-138.5,-25.44,5.15,0.32,-138.48,15.13,5.78,1.34,-138.47,-23.15,5.8,0.98,-138.44,1.89,3.73,0,-138.38,-47.44,5.74,0.07,-138.24,-52.38,5.22,0.98,-138.23,-38.29,5.9,1.34,-138.16,-25.62,5.61,-0.04,-138.06,-26.09,5.23,0.94,-138.03,-79.04,3.83,1.43,-138.01,-26.65,5.76,-0.01,-137.84,-36.63,5.89,1.37,-137.81,-66.59,5.91,-0.11,-137.67,46.12,5.76,0.48,-137.67,-24.25,5.68,1.27,-137.67,-14.15,5.32,0.07,-137.58,48.72,5.68,0.5,-137.51,28.62,5.8,0.05,-137.43,23.91,5.86,0.58,-137.43,-27.96,4.42,1.37,-137.41,82.51,5.63,0.67,-137.38,37.27,5.47,1.03,-137.33,-16,5.15,0.4,-137.32,74.16,2.07,1.47,-137.28,-16.04,2.75,0.15,-137.25,-2.3,4.93,0.99,-137.15,19.1,4.54,0.72,-137.14,59.29,5.48,1.37,-137.09,-43.58,4.32,-0.15,-136.85,-63.81,5.91,0.66,-136.79,-37.8,5.02,-0.15,-136.69,-73.19,5.59,0.82,-136.65,19.15,6,0.84,-136.42,-24.64,5.27,1.34,-136.4,-11.9,5.78,0.98,-136.34,-33.3,5.85,1.43,-136.11,-60.11,5.18,1.16,-136.06,-33.86,5.32,0.05,-135.94,14.45,5.9,-0.03,-135.93,-52.81,5.38,0.14,-135.9,49.63,5.63,0.53,-135.87,-47.88,5.62,-0.04,-135.82,-62.78,5.08,-0.02,-135.81,-11.41,5.48,1.49,-135.7,-4.35,4.47,0.32,-135.7,16.39,5.72,0.95,-135.63,-21.42,5.72,1.02,-135.61,-0.17,5.51,1.13,-135.6,65.93,4.63,1.59,-135.53,-76.66,5.37,1.44,-135.37,-43.13,2.68,-0.18,-135.34,-27.66,5.65,0.26,-135.28,-11.14,5.88,1.27,-135.21,-42.1,3.13,-0.21,-135.15,4.57,5.91,1.62,-135.1,39.27,5.64,0.34,-134.95,-77.16,5.92,1.05,-134.76,-8.52,4.91,0,-134.7,-38.06,5.88,1.25,-134.67,-2.75,5.52,1.69,-134.64,60.2,5.91,0.11,-134.55,-0.14,5.71,1.51,-134.54,-83.23,5.65,0.96,-134.51,40.39,3.49,0.96,-134.47,-28.06,5.83,0.16,-134.47,25.01,4.8,1.51,-134.27,2.09,4.39,1.03,-134.25,-32.64,5.45,-0.13,-134.22,35.21,5.52,1.02,-134.05,47.65,4.83,0.65,-133.98,-25.28,3.25,1.67,-133.89,26.95,4.52,1.24,-133.8,-83.04,5.65,1.27,-133.8,-64.03,5.16,0.94,-133.72,-47.05,3.91,-0.14,-133.67,-41.07,5.13,1.01,-133.64,48.15,5.59,0,-133.43,54.56,5.24,0.96,-133.36,-30.92,5.97,-0.08,-133.34,-16.26,5.19,1.59,-133.17,24.87,4.93,0.43,-133.14,-49.09,5.77,0.92,-132.95,-40.58,5.75,-0.11,-132.9,26.3,5.67,1.24,-132.85,25.11,5.82,1.23,-132.84,-42.87,5.85,-0.12,-132.79,-45.28,4.07,-0.16,-132.63,-67.08,5.76,0.68,-132.47,-38.79,5.98,0.87,-132.42,-26.33,5.75,1.05,-132.21,-84.79,5.88,-0.03,-132.18,-55.35,5.45,1.12,-132.02,-48.74,3.88,-0.03,-132.01,-48.74,5.7,0.14,-131.98,18.98,5.9,1.41,-131.94,-19.79,4.54,-0.07,-131.93,-52.1,3.41,0.92,-131.79,-44.5,4.83,-0.18,-131.53,-26.19,5.84,1.14,-131.47,31.79,5.98,1.55,-131.42,-70.08,5.75,3.27,-131.38,29.16,5.28,0.06,-131.34,-31.52,4.91,0.37,-131.34,67.35,5.15,0.55,-131.2,4.94,5.32,1.09,-131.12,33.31,3.46,0.96,-131.05,0.37,5.62,0.18,-131.03,-48.07,5.96,0.21,-130.98,-41.49,5.15,0.56,-130.9,-22.4,5.52,1.36,-130.85,-60.9,5.74,-0.06,-130.76,-60.96,5.04,-0.08,-130.75,-9.38,2.61,-0.07,-130.73,71.82,5.02,1.37,-130.62,-58.8,4.07,0.09,-130.59,-63.61,4.85,1.26,-130.54,-30.15,4.35,1.1,-130.4,20.57,5.68,0.97,-130.39,-0.46,5.88,1.51,-130.37,-47.88,4.27,-0.09,-130.3,-60.5,5.43,-0.09,-130.27,-68.68,2.87,0.01,-130.27,-40.79,5.59,-0.1,-130.17,1.77,5.04,0.54,-129.98,51.96,5.65,0.12,-129.96,29.62,5.51,1.01,-129.82,71.83,3,0.06,-129.74,0.72,5.35,1.19,-129.72,-5.82,5.54,1.05,-129.66,-40.65,3.22,-0.23,-129.55,-36.26,3.57,1.53,-129.55,32.93,5.38,-0.05,-129.55,-48.32,5.65,0.64,-129.47,-47.93,4.99,0.52,-129.34,62.05,5.99,-0.03,-129.34,39.58,5.56,1.63,-129.34,63.34,5.72,1.32,-129.33,-44.69,3.37,-0.19,-129.21,-36.86,4.54,-0.15,-129.21,-60.66,5.65,0.49,-129.2,30.29,4.99,0.58,-129.16,-59.32,4.48,0.17,-129.03,-12.37,5.72,1.04,-128.95,-10.32,4.92,0.45,-128.88,37.38,4.31,0.31,-128.81,-39.71,5.36,-0.09,-128.77,58.97,3.29,1.17,-128.67,-38.73,4.6,0,-128.55,15.43,5.16,1.65,-128.44,-68.31,5.89,1,-128.43,34.34,5.46,1.41,-128.17,-36.77,5.46,-0.15,-128.11,-64.53,5.71,1.65,-128.04,29.11,3.66,0.32,-128.04,60.67,5.9,1.44,-127.94,-16.72,5.64,1.55,-127.84,1.84,5.15,0.25,-127.65,-46.73,5.26,1.73,-127.33,-16.61,5.82,1.06,-127.27,40.83,5.04,1.59,-127.27,64.21,5.74,0.98,-127.15,77.35,5,1.55,-127.12,-73.39,5.4,-0.15,-127.05,40.9,4.98,0.09,-126.85,-19.67,5.5,0.2,-126.77,-16.85,5.53,-0.15,-126.77,31.36,4.14,-0.13,-126.76,-1.19,5.5,1.09,-126.49,-40.07,5.82,1.7,-126.46,-10.06,4.61,1,-126.39,-9.18,5.16,-0.09,-126.34,-28.05,5.13,1.31,-126.33,26.71,2.22,0.03,-126.3,10.54,3.8,0.27,-126.21,-41.17,2.8,-0.22,-126.19,39.01,5.14,1.65,-126.18,53.92,5.97,1.18,-126.12,-14.79,3.91,1.01,-126.03,-44.96,4.55,-0.17,-126.01,54.63,5.77,0.05,-125.95,-44.4,5.44,1.5,-125.88,16.12,5.93,0.35,-125.88,10.01,5.26,0.93,-125.82,-66.32,4.11,1.16,-125.74,-28.14,3.6,1.36,-125.62,54.51,5.85,1.1,-125.59,69.28,5.65,1.37,-125.55,-23.14,5.79,1.07,-125.54,40.35,5.25,0.89,-125.49,-42.57,4.34,1.41,-125.43,46.8,5.76,0.35,-125.43,-21.02,5.82,1.08,-125.36,50.42,5.84,0.85,-125.34,-29.78,3.66,-0.18,-125.29,-52.37,5.43,0.01,-125.27,-19.3,5.36,0.88,-125.16,36.64,4.64,-0.1,-125.06,-34.41,4.66,0.96,-125.01,-59.91,5.95,0.51,-124.93,-23.82,4.97,1.3,-124.91,-73.45,5.64,-0.04,-124.75,16.02,6,0.91,-124.7,-44.66,4.64,0.41,-124.61,19.67,4.51,0.06,-124.55,12.85,5.34,0.03,-124.52,-76.08,5.95,-0.03,-124.52,18.46,5.8,0.21,-124.51,-19.68,4.75,1.57,-124.34,-37.42,5.23,0.99,-124.33,-34.71,4.75,-0.15,-124.31,26.3,3.81,0.02,-124.29,52.36,5.48,-0.04,-124.18,-84.47,5.57,0.12,-124,32.52,5.57,1.08,-123.99,2.52,5.86,0.68,-123.99,77.79,4.29,0.04,-123.98,-15.67,5.41,0.24,-123.93,6.43,2.63,1.17,-123.91,-41.82,5.93,-0.01,-123.65,5.45,5.57,0.04,-123.48,-1.8,5.39,-0.04,-123.45,15.42,3.65,0.07,-123.39,7.35,4.42,0.6,-123.36,55.47,5.94,1.4,-123.33,62.6,5.19,0.06,-123.32,-34.68,5.61,-0.12,-123.18,14.12,5.71,0.09,-123.09,55.38,5.85,0.25,-123.03,-65.44,5.54,0.23,-122.94,13.79,5.98,1.27,-122.86,28.16,5.89,0.61,-122.82,18.14,4.09,1.62,-122.76,-3.82,5.53,0.12,-122.6,26.07,4.59,0.79,-122.59,-3.43,3.54,-0.04,-122.51,-48.91,5.86,0.07,-122.47,-53.21,5.78,-0.08,-122.43,2.2,5.21,1.02,-122.3,4.48,3.71,0.15,-122.26,-33.63,3.97,-0.04,-122.26,-25.75,4.63,-0.07,-122.22,-55.06,5.74,0.02,-122.19,35.66,4.79,1,-122.18,-3.09,5.09,0.14,-122.18,20.98,4.74,1.53,-122.12,-47.06,6,1.15,-121.93,55.83,5.81,0.97,-121.83,42.45,4.6,0.56,-121.67,-20.17,5.04,-0.01,-121.6,-25.33,4.59,-0.07,-121.54,-16.73,4.13,1,-121.53,-24.53,5.38,-0.01,-121.52,-23.98,5.41,-0.03,-121.36,20.31,5.45,1.59,-121.34,43.14,5.35,1.65,-121.34,-25.24,5.87,-0.06,-121.25,-19.38,5.95,-0.01,-121.21,-63.43,2.83,0.32,-121.13,-68.6,5.11,1.11,-121.12,-26.27,5.63,0.14,-121.12,42.57,5.73,-0.1,-121.12,-60.18,5.78,0.36,-121.05,37.95,5.43,0.35,-120.98,-60.48,5.76,0.09,-120.89,15.66,3.85,0.48,-120.78,-29.21,3.87,-0.2,-120.78,-33.97,5.14,0.13,-120.77,-33.96,5.59,0.07,-120.69,14.41,5.54,1.14,-120.66,-36.19,5.78,1.1,-120.6,26.88,4.14,1.23,-120.58,-20.98,5.84,0.01,-120.55,54.75,4.96,0.27,-120.45,-14.28,4.95,-0.08,-120.35,-24.83,5.43,-0.09,-120.29,-26.11,2.89,-0.18,-120.26,36.64,5.61,1.53,-120.26,-65.04,5.74,-0.07,-120.12,-41.74,4.99,0.99,-119.97,-38.4,3.42,-0.21,-119.92,-16.53,5.47,0.52,-119.92,-22.62,2.29,-0.12,-119.8,-8.41,5.53,0.04,-119.79,4.43,5.82,1,-119.74,33.3,5.39,0.61,-119.69,17.82,5.1,0.99,-119.64,29.85,4.98,-0.05,-119.53,58.57,4.01,0.53,-119.48,52.92,5.93,1.5,-119.43,22.8,4.82,0.07,-119.3,46.04,4.72,-0.09,-119.2,-49.23,4.65,0.9,-119.17,36.63,5.79,0.59,-119.16,-25.87,4.96,1.23,-119.15,-38.6,4.9,-0.15,-119.12,76.79,5.73,0.05,-119.12,-57.78,4.63,0.25,-119.11,-32,6,0.47,-118.91,-11.37,4.16,0.46,-118.85,-37.86,5.91,0.41,-118.64,-19.81,2.56,-0.06,-118.64,-19.8,4.9,-0.02,-118.52,-72.4,5.7,1.17,-118.47,-23.61,5.9,-0.07,-118.42,67.81,5.44,-0.02,-118.38,-45.17,4.73,0.23,-118.35,-36.8,4.22,-0.18,-118.3,-20.67,3.93,-0.05,-118.18,-36.76,5.72,0.3,-118.15,-20.87,4.31,0.83,-118.1,-12.75,5.75,0.02,-118.09,9.89,5.63,0.2,-117.98,17.05,5,0.93,-117.97,-26.33,5.35,1.64,-117.88,8.53,5.69,1.58,-117.82,-23.69,5.86,0.02,-117.81,44.93,4.23,-0.04,-117.76,36.49,4.73,1.01,-117.75,3.45,5.93,1.47,-117.7,6.38,5.93,0.99,-117.67,-57.93,5.57,-0.02,-117.54,-3.47,5.39,1.45,-117.53,-33.55,5.5,-0.07,-117.29,75.88,5.48,-0.09,-117.24,-29.42,5.09,1.13,-117.18,-41.12,5.86,0.27,-117.09,23.49,5.74,1.52,-117.05,42.37,5.89,1.46,-117.05,36.43,5.62,1.35,-117,-19.46,4,0.08,-117,-10.06,4.93,0.09,-116.97,-8.55,5.43,0.12,-116.93,-28.42,5.67,0.01,-116.92,-27.93,4.58,-0.17,-116.69,5.02,5.46,1.47,-116.66,-55.54,5.78,0.37,-116.63,-54.63,4.95,1.02,-116.54,-11.84,5.24,1.39,-116.41,-3.69,2.73,1.58,-116.41,-33.01,5.91,1.02,-116.33,33.86,5.23,0.6,-116.19,-47.37,5.13,-0.11,-116.14,-63.69,3.86,1.11,-116.13,18.81,5.72,1.13,-116.09,-8.37,5.49,0.65,-116.04,-57.91,5.61,0.14,-115.82,-53.81,5.45,1.7,-115.81,29.15,5.8,0.06,-115.75,-50.07,4.97,0.79,-115.73,-67.94,5.95,0.16,-115.69,59.76,5.37,1.55,-115.62,75.76,4.95,0.39,-115.43,-28.61,4.8,0.01,-115.42,-4.69,3.23,0.97,-115.25,-14.87,5.97,1.48,-115.2,49.04,5.93,1.37,-115.18,-42.67,5.44,0.1,-115.11,-30.91,5.53,0.47,-115.06,46.31,3.91,-0.15,-115.04,-50.16,4.01,1.08,-115.02,39.71,5.48,0.41,-114.91,-78.7,4.68,1.68,-114.89,-55.14,5.76,0.97,-114.89,-78.67,5.27,1.41,-114.84,-24.17,4.55,0.76,-114.7,-25.59,2.9,0.3,-114.55,69.11,5.26,1.12,-114.52,19.15,3.74,0.3,-114.48,1.03,4.82,0.34,-114.48,30.89,4.86,0.97,-114.41,33.8,5.2,1.63,-114.38,-49.57,5.32,-0.05,-114.38,-43.91,5.89,1.12,-114.38,33.7,5.4,1.52,-114.05,61.7,5.67,0.96,-114,61.51,2.73,0.91,-113.99,-39.19,5.37,0.63,-113.97,-20.04,4.48,1,-113.95,6.95,5.83,0.02,-113.89,55.21,5.75,0,-113.87,-37.57,5.42,-0.1,-113.83,-29.7,5.4,0.63,-113.65,37.39,5.53,0.17,-113.65,14.03,4.57,0,-113.6,-23.45,4.57,0.23,-113.57,78.96,5.55,0.25,-113.24,-18.46,4.22,0.22,-113.2,-47.55,4.46,-0.07,-113.07,-7.6,5.24,1.72,-113.05,-8.37,4.62,0.19,-113.01,-64.06,5.28,0.38,-113,68.77,4.94,-0.05,-112.94,-37.18,5.79,1.1,-112.94,-58.6,5.67,0.01,-112.88,-70.08,4.9,0.56,-112.86,0.67,5.41,1.46,-112.84,41.88,4.83,1.29,-112.65,-26.43,1.06,1.87,-112.57,-46.24,5.35,0.49,-112.55,-14.55,5.66,0.82,-112.45,-25.12,4.79,-0.12,-112.44,21.49,2.78,0.95,-112.36,20.48,5.24,1.27,-112.29,-61.63,5.19,1.24,-112.27,1.98,3.82,0.02,-112.22,-16.61,4.29,0.92,-112.19,22.2,5.76,1.61,-112.15,-34.7,4.24,-0.17,-112.08,-41.82,5.31,0.3,-112.05,45.6,5.61,0.13,-111.97,-21.47,4.45,0.13,-111.89,60.82,5.92,0.04,-111.85,5.52,5.63,-0.04,-111.85,11.49,4.84,1.5,-111.64,-78.9,3.86,0.92,-111.48,-44.05,4.86,0.05,-111.47,42.44,4.2,-0.01,-111.42,-70.99,5.5,1.24,-111.06,-65.5,5.5,0.95,-111.03,-28.22,2.82,-0.21,-110.95,46.61,5.83,1.04,-110.95,52.9,5.53,-0.06,-110.94,52.92,5.07,-0.03,-110.91,-2.32,5.77,0.83,-110.91,-35.26,4.18,1.54,-110.91,-42.86,5.46,0.34,-110.71,-10.57,2.54,0.04,-110.5,56.02,5.28,1.06,-110.39,-43.4,5.83,-0.05,-110.31,48.93,4.86,1.56,-110.23,-37.22,5.93,-0.04,-109.84,4.22,5.77,0,-109.77,64.59,4.84,1.21,-109.68,31.6,2.81,0.65,-109.66,-48.76,5.57,0.17,-109.65,-68.3,5.89,-0.08,-109.61,-17.74,4.91,1.1,-109.6,26.92,5.92,0.4,-109.58,-49.65,5.62,-0.04,-109.57,1.18,5.74,0.34,-109.56,-33.15,5.84,0.65,-109.53,-19.92,5.55,0.44,-109.28,38.92,3.48,0.92,-109.23,-77.52,4.23,1.06,-109.22,77.51,5.99,0.43,-108.83,-53.15,5.96,1.23,-108.82,-40.84,5.64,-0.09,-108.75,-28.51,5.99,0.1,-108.68,56.78,4.84,0.38,-108.66,15.75,5.6,1.64,-108.54,8.58,5.15,1.54,-108.51,82.04,4.21,0.9,-108.41,-58.5,5.74,-0.1,-108.33,-67.11,5.1,-0.08,-108.3,-39.38,5.48,0.98,-108.17,-58.34,5.55,-0.1,-108.17,42.24,5.86,1.5,-108.06,5.25,5.22,0,-107.83,-69.03,1.91,1.45,-107.69,45.98,4.82,0.09,-107.61,13.26,5.91,0.02,-107.55,-59.04,3.77,1.56,-107.54,-10.78,4.64,0.48,-107.46,-34.29,2.29,1.14,-107.42,7.25,5.48,0.11,-107.34,29.81,5.73,1.63,-107.15,1.22,5.51,0.06,-107.11,-41.23,5.23,0.05,-107.06,24.66,5.03,1.25,-107.03,-38.05,3,-0.2,-106.92,-38.02,3.56,-0.21,-106.76,31.7,5.34,0.32,-106.68,47.42,5.99,1.33,-106.64,-20.42,5.86,0.69,-106.57,-43.05,5.95,1.64,-106.5,-42.36,4.7,0.44,-106.5,-57.91,5.91,1.59,-106.5,10.17,4.39,-0.09,-106.49,-41.81,5.46,0.18,-106.39,-42.48,5.84,0.63,-106.35,-42.36,3.62,1.39,-106.35,-6.15,5.23,1.1,-106.27,20.96,5.39,0.97,-106.26,-41.15,5.78,0.13,-106.16,18.43,5.35,1.41,-106.15,-63.27,5.99,0.06,-105.99,65.13,4.88,0.48,-105.88,-52.28,5.94,-0.07,-105.8,-23.15,5.57,-0.02,-105.7,-33.26,5.48,1.61,-105.58,9.38,3.19,1.16,-105.43,-50.64,5.53,0.02,-105.34,-55.99,3.12,1.55,-105.11,-69.27,5.79,-0.1,-105.1,-53.16,4.06,1.45,-105.01,-25.09,5.88,1.61,-104.97,-54.6,5.64,0.19,-104.96,-24.99,5.74,0.41,-104.93,30.93,3.92,-0.02,-104.89,-48.65,5.98,0.88,-104.85,-35.93,5.95,1.16,-104.76,22.63,5.69,1.33,-104.73,-4.22,4.82,1.48,-104.6,33.57,5.27,0.03,-104.53,-32.14,5.03,-0.1,-104.42,25.51,5.76,1.02,-104.22,14.09,4.97,1.6,-104.21,-53.24,5.27,0.5,-104.09,13.61,5.91,0.01,-104.04,-38.15,5.91,0.41,-103.9,-57.71,5.73,-0.1,-103.79,-34.12,4.83,0.26,-103.68,0.7,6,0.58,-103.67,54.47,4.91,0.47,-103.66,12.74,4.89,0.13,-103.62,-0.89,5.63,0.1,-103.42,22.08,5.56,1.3,-103.42,-37.23,5.98,0.08,-102.99,35.94,5.41,0.31,-102.94,-17.61,5.98,1.01,-102.8,65.71,3.17,-0.12,-102.8,-30.4,5.93,0.28,-102.61,40.78,5.07,1.27,-102.55,-10.52,5.43,0.47,-102.41,-15.72,2.43,0.06,-102.32,-44.56,5.06,0.87,-102.09,-48.87,5.94,1.79,-101.96,-43.24,3.32,0.44,-101.93,-39.51,5.66,0.04,-101.88,10.59,5.32,1.59,-101.86,62.87,5.54,0.22,-101.76,-32.44,5.95,0.07,-101.68,-67.2,5.87,1.07,-101.34,14.39,2.78,1.16,-101.24,24.84,3.12,0.08,-101.24,36.81,3.16,1.44,-101.17,-33.55,5.6,-0.06,-101.17,-14.58,5.98,1.1,-101.16,-26.6,4.33,0.86,-101.1,-38.59,5.95,0.58,-101.08,23.74,5.99,1.34,-100.87,1.21,5.89,0.02,-100.85,-0.45,4.72,1.12,-100.73,-32.66,5.53,0.51,-100.67,33.1,4.8,-0.17,-100.58,37.29,4.64,0.04,-100.5,-24.29,5.14,1.05,-100.48,17.32,6,0.02,-100.4,38.81,5.97,1.01,-100.35,10.86,5.03,1.54,-100.3,-44.13,5.76,-0.05,-100.3,28.82,5.68,0.98,-100.26,-34.99,5.91,1.08,-100.23,-46.64,5.47,0.76,-100.2,-59.69,5.93,1.39,-100.1,80.14,5.74,1.5,-99.96,25.54,5.36,0.06,-99.92,18.06,5.01,1.65,-99.91,46.24,5.51,1.59,-99.84,32.47,5.38,0.62,-99.79,-12.85,4.32,0.04,-99.77,24.5,5.13,0,-99.75,-21.11,4.39,0.39,-99.57,39.97,5.55,0.67,-99.56,53.42,5.69,1.46,-99.5,-67.77,4.76,1.19,-99.5,-25,3.27,-0.19,-99.48,-70.12,5.39,-0.04,-99.27,-37.22,5.91,1.08,-99.27,-58.01,5.86,1.08,-99.22,-56.53,5.76,0.99,-99.18,-47.47,5.21,-0.1,-99.16,-28.14,5.3,1.55,-99.08,37.15,4.15,-0.01,-99.01,8.85,5.77,1.25,-99,-62.86,5.69,-0.15,-98.97,22.96,5.7,0.23,-98.95,-44.16,5.1,-0.05,-98.92,-60.67,5.76,-0.07,-98.87,16.3,5.75,0.07,-98.82,-21.44,5.82,0.94,-98.67,-55.53,2.84,1.48,-98.65,-56.38,3.31,-0.15,-98.58,60.05,5.65,0.02,-98.5,-50.63,5.19,1.06,-98.41,-24.18,4.16,0.28,-98.37,4.14,4.34,1.48,-98.34,-5.09,4.53,0.39,-98.32,48.26,5.83,0.12,-98.31,34.7,5.94,-0.02,-98.3,20.08,5.52,-0.12,-98.28,-45.84,5.28,-0.06,-98.2,-50.63,5.9,0.06,-98.16,-29.87,4.28,0.4,-98.09,-29.72,5.98,0.01,-98.01,-52.3,5.72,1.17,-97.84,-55.17,5.93,1.11,-97.79,0.33,5.41,0.24,-97.77,-36.78,5.98,1.11,-97.4,-1.06,5.31,0.72,-97.39,52.3,2.79,0.95,-97.32,26.11,4.41,1.43,-97.31,-37.3,2.7,-0.18,-97.3,86.97,5.78,0.24,-97.27,31.16,5.63,0.96,-97.23,-60.68,3.6,-0.1,-97.16,2.72,5.57,0.84,-97.15,-56.92,5.99,-0.04,-97.15,-23.96,4.78,0.02,-97.14,-80.86,5.83,1.62,-97.04,28.41,5.66,0,-97.04,-49.88,2.84,-0.14,-97.01,68.14,5.07,1.08,-96.96,55.18,4.89,0.25,-96.95,86.59,4.35,0.02,-96.93,55.17,4.86,0.28,-96.72,41.24,5.72,1.09,-96.72,-41.17,5.84,0.04,-96.65,19.26,5.65,0.51,-96.63,-5.74,5.61,0.19,-96.6,-37.1,1.62,-0.23,-96.59,16.32,5.68,1,-96.35,9.59,5.8,0.04,-96.32,-32.58,5.69,0.05,-96.31,-11.24,5.54,0.01,-96.27,12.56,2.08,0.16,-96.25,61.87,5.23,0.6,-96.08,-46.51,4.56,-0.02,-95.86,-38.64,4.26,1.08,-95.84,48.59,5.35,1.14,-95.76,68.76,4.77,0.43,-95.71,72.46,5.87,1.02,-95.67,-43,1.86,0.41,-95.64,-50.06,5.89,1.11,-95.62,24.31,5.76,0.11,-95.6,-15.4,3.54,0.26,-95.6,-15.57,5.94,0.36,-95.54,-8.12,4.58,0.13,-95.48,-54.5,5.25,0.2,-95.46,-10.93,5.74,1.23,-95.13,46.01,3.82,-0.18,-94.9,-49.42,4.76,0.42,-94.68,-46.92,5.78,0,-94.66,51.82,6,1.07,-94.65,-12.88,4.24,0.09,-94.62,6.31,5.97,1.27,-94.52,72.15,4.57,0.43,-94.51,72.16,5.81,0.53,-94.51,15.95,5.54,0.39,-94.38,24.56,5.56,1.44,-94.38,-39.03,2.39,-0.17,-94.29,-36.95,5.53,1.55,-94.16,24.33,5.73,0.68,-94.14,-21.68,4.86,0.47,-94.13,4.57,2.76,1.17,-94,53.8,5.75,0.02,-93.96,-51.83,5.12,0.69,-93.82,-42.73,5.87,0.16,-93.77,-57.55,5.97,0.91,-93.57,-64.72,3.61,1.16,-93.39,27.72,3.42,0.75,-93.22,17.7,5.61,0.04,-93.11,-27.83,4.53,0.6,-93.1,-40.13,2.99,0.51,-93.1,-14.73,5.93,0.01,-93.03,2.71,3.75,0.04,-92.9,20.57,5.69,0.94,-92.8,25.62,5.09,1.14,-92.73,50.78,5.02,0.04,-92.71,-31.7,4.79,-0.03,-92.64,76.96,5.02,0.52,-92.54,-37.04,3.19,1.19,-92.45,-40.09,4.78,0.26,-92.4,29.32,5.51,1.07,-92.38,-53.61,5.68,-0.1,-92.11,-40.77,5.94,1.57,-92.1,-60.16,5.78,1.01,-91.94,-34.8,5.88,-0.11,-91.92,-34.42,5.84,1.13,-91.85,1.31,5.91,1.57,-91.69,6.1,5.77,0.43,-91.67,40.01,5.17,1.17,-91.65,-34.9,5.58,1.1,-91.62,56.87,3.73,1.18,-91.52,-34.75,6,-0.06,-91.2,72.01,5.43,0.34,-91.14,26.05,5.47,0.34,-91.04,22.46,5.62,1.25,-90.94,37.25,3.86,1.35,-90.92,0.67,5.82,0.06,-90.92,-15.81,5.93,0.02,-90.85,51.49,2.24,1.52,-90.83,-28.07,5.76,0.21,-90.8,-44.34,4.85,1.18,-90.8,-4.08,5.44,1.16,-90.73,0.07,5.95,0.11,-90.56,29.25,3.7,0.94,-90.55,-41.72,4.88,1.62,-90.37,30.19,4.41,0.38,-90.34,-28.76,5.99,-0.08,-90.27,-36.86,5.74,0.92,-90.24,-9.77,3.32,0.99,-90.23,-30.25,5,1.65,-90.1,-4.82,5.86,1.56,-90.05,-23.82,4.74,-0.03,-90.02,45.5,5.69,1.56,-89.99,16.75,4.67,1.25,-89.96,80,5.74,0.52,-89.93,4.37,4.79,-0.1,-89.88,-3.69,4.62,0.39,-89.84,2.93,3.93,0.03,-89.62,21.6,4.26,0.41,-89.56,1.31,4.42,0.05,-89.52,-22.78,5.72,-0.03,-89.4,20.83,5.25,-0.1,-89.29,-24.28,5.37,0.5,-89.23,-8.18,4.77,0.41,-89.03,-24.36,5.89,0.03,-88.79,-35.9,5.98,1.16,-88.74,-29.58,4.66,0.77,-88.64,2.5,4.03,0.86,-88.55,-30.42,2.98,0.98,-88.54,32.23,5.72,1.18,-88.49,22.22,4.96,1.66,-88.47,-8.32,5.84,0.18,-88.44,-4.75,5.74,0.97,-88.4,-36.02,5.94,0.62,-88.34,-50.09,3.65,-0.1,-88.29,-43.43,4.92,0.26,-88.24,30.56,5.05,0.53,-88.17,8.73,4.64,0.95,-88.16,9.56,3.71,0.16,-88.13,43.46,5,0.91,-88.11,28.76,3.84,-0.02,-88.05,-17.15,5.52,1.13,-88.04,26.1,5.79,0.13,-88.04,26.1,5.83,0.16,-87.99,36.4,5.49,1.16,-87.98,-28.46,4.55,0.94,-87.85,-63.67,4.33,0.23,-87.81,20.81,4.37,-0.16,-87.78,20.05,5.1,0.18,-87.61,3.99,5.71,0.36,-87.52,3.12,5.67,0.49,-87.5,36.47,5.57,0.92,-87.48,-30.73,5.53,0.98,-87.39,-62,5.47,0.59,-87.37,54.29,5.97,0.94,-87.33,3.32,5.5,1.2,-87.23,-41.36,5.86,0.3,-87.19,-45.95,4.52,1.01,-87.18,-75.89,5.86,1.25,-87.07,-23.7,4.96,1.06,-87.06,33.45,5.98,0.05,-87.02,31.41,4.96,1.64,-86.86,-73.67,5.86,0.46,-86.7,-41.34,5.47,-0.15,-86.56,-21.06,3.84,0.2,-86.53,64.4,4.99,0.44,-86.43,-21.71,5.49,1.53,-86.2,-20.73,5.29,0.01,-86.2,-20.39,5.96,-0.02,-86.18,68.76,5.96,1.06,-86.09,42.16,5.56,-0.11,-86.08,-63.06,5.58,0.94,-86.03,-44.21,5.45,0.96,-85.78,-3.01,5.99,0.89,-85.72,-56.02,5.36,-0.05,-85.7,-17.37,5.81,1.57,-85.59,-36.76,3.1,1.58,-85.49,-27.04,4.66,1.63,-85.21,7.26,5.41,1.08,-85.21,24.45,5.3,1.51,-85.03,36.06,4.33,1.16,-84.96,-15.83,5.39,1.47,-84.93,21.96,4.92,1.59,-84.81,71.34,4.22,-0.09,-84.78,3.38,4.85,0.91,-84.76,29.86,5.61,0.23,-84.75,-29.83,2.72,1.38,-84.75,28.87,5.12,0.21,-84.74,72.73,3.55,0.49,-84.67,-2.9,3.23,0.94,-84.65,-18.86,5.76,0.67,-84.61,49.12,5.02,1.62,-84.46,23.29,5.41,1.63,-84.42,-38.66,5.09,1.5,-84.35,12.03,5.99,0.06,-84.3,17.83,5.25,1.25,-84.28,-36.67,5.33,-0.12,-84.2,-12.01,5.71,0.01,-84.19,-61.49,4.35,1.46,-84.13,-36.24,5.52,1.01,-84.1,-75.04,5.47,0.04,-84.09,-8.93,4.66,0.93,-84.08,21.77,3.85,1.17,-84.02,58.8,4.98,0.08,-83.96,-34.38,1.79,-0.03,-83.94,39.51,5.11,0.05,-83.92,-44.11,5.24,-0.16,-83.74,-30.76,5.58,1.14,-83.66,-20.54,4.81,1.31,-83.59,8.03,5.64,0.88,-83.51,29.83,5.81,0.07,-83.5,65.56,4.82,1.18,-83.27,-48.12,5.44,0.86,-83.26,-45.97,3.49,-0.18,-83.2,0.2,5.2,0.49,-83.04,-29.82,5.9,0.52,-83.01,-25.42,2.82,1.02,-83.01,6.19,5.71,-0.03,-82.89,-39,5.63,0.14,-82.79,-49.07,4.1,1,-82.7,-14.57,4.67,0.08,-82.67,-80.23,5.95,1.17,-82.6,23.87,5.87,-0.1,-82.58,-1.99,5.38,0.96,-82.56,77.55,5.65,1.19,-82.52,-47.22,5.69,1.26,-82.51,-57.52,5.74,0.99,-82.45,-18.73,5.63,1.06,-82.23,16.93,5.76,0.05,-82.23,-32.99,5.37,0.18,-82.16,-62.28,4.63,-0.12,-82.14,-10.8,5.77,0.38,-82.14,-18.4,5.12,0.02,-82.06,-45.91,4.92,-0.1,-82.02,-43.51,5.71,1.32,-82.01,-1,5.93,0.17,-81.99,-45.76,5.07,-0.13,-81.91,-39.7,5.16,0.08,-81.86,57.05,4.77,0.61,-81.82,-14.87,5.47,2,-81.81,23.62,5.88,1.49,-81.79,30.55,5.47,-0.08,-81.77,-73.97,5.88,0.99,-81.65,-38.73,5.67,-0.06,-81.62,-42.31,4.62,0.99,-81.59,-14.85,5.74,0.04,-81.53,-24.03,5.49,1.8,-81.51,52.35,5.38,1.09,-81.51,-33.02,5.28,-0.11,-81.24,-10.98,5.12,0.93,-81.2,-8.24,3.85,1.32,-81.2,18.2,5.79,0.01,-81.12,23.61,5.62,1.01,-80.88,9.12,5.38,0.39,-80.84,33.47,5.41,-0.1,-80.84,6.67,5.43,0.39,-80.77,38.78,0.03,0,-80.61,62.53,5.74,-0.04,-80.6,-0.31,5.76,0.07,-80.52,-21.4,5.93,0.19,-80.37,-23.5,5.78,-0.02,-80.28,-21.05,5.85,0.67,-80.19,-47.91,5.84,0.23,-80.1,-43.19,5.42,1.65,-80.03,52.2,6,-0.07,-80,-7.79,5.82,1.54,-79.43,-9.05,4.7,0.36,-79.34,55.54,5.03,-0.07,-79.24,-71.43,4.01,1.13,-79.12,-8.28,4.88,1.11,-79.09,-64.55,5.76,0.97,-79.05,-38.32,5.11,0.08,-79.03,31.93,5.68,0.36,-78.92,-35.64,4.86,-0.17,-78.92,39.67,4.67,0.17,-78.91,39.61,4.59,0.18,-78.81,37.61,4.34,0.19,-78.8,37.59,5.73,0.28,-78.79,-25.01,5.82,0.03,-78.79,2.06,5.02,-0.05,-78.76,-39.69,5.4,0.85,-78.64,-64.87,4.78,0.2,-78.63,5.5,5.82,0.04,-78.59,-26.99,3.17,-0.11,-78.58,20.55,4.19,0.48,-78.56,74.09,5.25,0.95,-78.48,26.66,4.83,1.2,-78.41,-22.39,5.37,1.59,-78.41,75.43,5.37,0.05,-78.38,-0.96,5.89,0.13,-78.32,52.99,5.91,-0.1,-78.32,-10.12,5.69,0.58,-78.24,18.18,4.34,0.15,-78.21,-4.75,4.22,1.09,-78.13,-5.71,5.38,1.28,-78.06,-40.41,5.2,0.78,-77.84,-65.08,5.71,0.27,-77.79,-43.68,5.46,0.13,-77.78,19.33,5.89,0.02,-77.64,-45.81,5.8,0.89,-77.6,-43.43,5.6,-0.08,-77.58,-20.32,5.22,1.4,-77.58,-5.91,5.99,1.57,-77.56,32.81,5.93,-0.15,-77.53,32.55,5.22,0.1,-77.48,33.36,3.52,0,-77.26,-9.77,5.82,0.59,-77.2,59.39,4.63,1.19,-77.1,52.98,5.51,0.84,-76.95,-62.19,4.22,-0.15,-76.93,21.43,5.43,-0.07,-76.89,-46.6,5.51,1.64,-76.83,-52.11,5.18,0.96,-76.69,50.71,4.92,0.9,-76.57,36.97,5.58,-0.14,-76.5,-21.36,5.68,1.21,-76.46,-22.74,4.86,1.41,-76.44,27.91,5.64,1.36,-76.4,71.3,4.82,1.15,-76.37,36.9,4.22,1.58,-76.32,-15.6,5.08,0.14,-76.31,22.65,4.57,0.78,-76.3,48.86,5.84,0.45,-76.3,-87.61,5.29,1.3,-76.28,41.6,5.46,1.03,-76.28,33.97,5.99,0.92,-76.22,-22.67,5,1.35,-76.18,-26.3,2.05,-0.13,-76.17,43.95,4.08,1.4,-76.14,6.62,5.58,1.04,-76.12,-16.38,5.56,0.45,-76,-23.17,5.91,-0.02,-75.97,18.11,5.69,1.09,-75.95,4.2,4.62,0.16,-75.94,4.2,4.98,0.2,-75.93,-42.71,5.35,1,-75.89,65.26,5.62,0.94,-75.83,-37.34,5.36,-0.15,-75.81,57.81,5.67,1.16,-75.76,-67.23,4.4,0.53,-75.74,32.9,5.2,0.59,-75.73,-5.85,4.83,1.06,-75.68,2.54,5.56,0,-75.66,-20.66,5.02,0.14,-75.57,-21.11,3.52,1.15,-75.49,38.27,5.89,-0.09,-75.44,17.36,5.33,0.73,-75.38,-52.94,4.85,-0.05,-75.35,-60.2,5.14,1.36,-75.32,-37.11,4.83,0.4,-75.3,13.91,5.91,0.25,-75.26,32.69,3.25,-0.05,-75.23,13.62,5.27,0.57,-75.15,-12.84,5.51,-0.04,-75.09,15.07,4.02,1.08,-75.06,26.23,5.26,1.23,-75,32.15,4.94,1.47,-74.99,-66.65,5.98,0.98,-74.94,50.53,5.39,-0.18,-74.82,55.66,5.51,0.86,-74.68,26.29,5.69,-0.09,-74.64,46.93,5,0.19,-74.58,-5.74,4.02,1.08,-74.38,-24.85,5.63,1.23,-74.35,-29.88,2.6,0.06,-74.27,-3.7,5.4,0,-74.23,-19.25,5.96,1.16,-74.22,-42.1,4.74,-0.03,-74.18,-38.25,5.73,0.33,-74.13,-68.76,5.89,0.55,-74.12,1.82,5.82,0.18,-74.01,-51.02,5.93,1.24,-73.9,-31.05,5.49,0.03,-73.83,-21.74,3.76,1.01,-73.77,53.4,5.4,-0.01,-73.76,-4.03,5.4,1.12,-73.76,31.74,5.63,1.55,-73.65,13.86,2.99,0.01,-73.58,-15.66,5.93,-0.01,-73.44,-4.88,3.43,-0.1,-73.42,-52.34,5.17,0.53,-73.4,-37.06,4.23,0.52,-73.34,28.63,5.53,0.3,-73.34,24.25,5.78,0.1,-73.28,-16.23,6,-0.02,-73.27,-48.3,5.95,-0.02,-73.26,-27.67,3.32,1.17,-73.26,11.07,5.07,-0.05,-73.17,36.1,5.25,-0.11,-73.14,32.5,5.2,0.37,-72.93,-19.29,5.56,-0.09,-72.91,-40.5,4.57,1.07,-72.89,52.43,5.88,1.09,-72.75,6.07,5.23,0.35,-72.71,76.56,5.11,0.31,-72.63,-37.9,4.11,0.04,-72.56,-21.02,2.88,0.38,-72.53,-68.42,5.31,0.9,-72.51,-41.89,5.86,-0.08,-72.49,-39.34,4.1,1.16,-72.08,56.86,5.13,1.01,-72.06,31.28,5.93,-0.06,-71.98,49.86,5.85,0.67,-71.86,67.66,3.07,0.99,-71.83,-7.94,5.35,0.09,-71.69,-25.91,5.79,1.39,-71.69,-12.28,5.51,1.44,-71.57,2.29,5.14,-0.07,-71.56,39.15,4.43,-0.15,-71.52,57.71,5,1.16,-71.34,-45.19,5.91,0.9,-71.18,21.23,5.65,0.12,-71.17,15.08,5.58,1.07,-71.15,30.53,5.88,1.67,-71.11,-25.26,4.86,0.57,-71.11,73.36,4.45,1.26,-70.95,21.39,4.76,-0.06,-70.91,-45.47,5.38,1.35,-70.91,38.13,4.35,1.26,-70.89,14.54,5.65,-0.02,-70.87,4.83,5.59,0.1,-70.72,53.37,3.8,0.95,-70.7,-66.66,5.52,0.17,-70.59,-18.95,4.88,1.01,-70.57,23.03,5.46,0.02,-70.55,11.6,5.28,0.2,-70.36,1.09,5.1,1.14,-70.09,12.37,5.53,0.27,-70.08,-35.42,5.59,-0.12,-69.93,57.65,5.91,1.63,-69.86,-5.42,4.98,0.94,-69.85,-0.89,5.46,-0.04,-69.84,-22.4,5.59,0.28,-69.83,65.71,4.6,0.03,-69.58,-17.85,3.92,0.23,-69.57,-15.95,4.52,0.08,-69.54,-18.31,5.84,1.06,-69.41,-0.25,5.81,1.09,-69.34,-44.46,3.96,-0.08,-69.29,26.26,5.22,-0.12,-69.29,-54.42,5.03,0.02,-69.2,-44.8,4.27,0.35,-69.03,-40.62,3.96,-0.1,-69.01,43.39,5.85,0.92,-68.97,29.62,4.99,-0.12,-68.76,11.94,5.17,0.76,-68.73,-29.31,5.91,1.28,-68.68,-24.51,5.02,0.24,-68.66,-13.9,5.72,1.37,-68.63,19.8,5.14,1,-68.63,3.11,3.36,0.32,-68.63,-23.96,5.45,1.44,-68.46,36.32,5.17,-0.12,-68.45,-15.05,5.71,0.01,-68.44,20.1,5.6,-0.01,-68.42,-21.78,5.57,1.23,-68.4,13.02,5.76,0.46,-68.38,19.89,5.84,1.56,-68.37,0.34,4.64,0.58,-68.26,-29.74,5.66,-0.01,-68.14,52.32,5.73,0,-68.05,-54.33,5.7,1.41,-67.91,2.93,5.84,0,-67.82,24.66,4.44,1.5,-67.76,24.77,5.82,1.02,-67.75,1.95,5.79,0.09,-67.66,14.6,5.57,1.05,-67.65,-43.45,5.7,0.21,-67.57,51.73,3.76,0.15,-67.53,-26.99,5.46,1.12,-67.33,-2.79,5.03,1.77,-67.32,27.96,3.05,1.09,-67.31,27.97,5.12,-0.09,-67.2,-68.43,5.98,1.64,-67.17,50.31,5.55,1.27,-67.16,26.62,5.89,0.92,-67.06,34.45,4.74,-0.15,-66.91,69.66,4.67,0.79,-66.78,-53.19,5.76,0.3,-66.66,-45.27,5.59,-0.02,-66.58,49.26,6,1.55,-66.48,7.38,4.45,1.18,-66.46,-40.03,5.89,0.11,-66.42,51.24,5.71,0.48,-66.35,19.77,5,-0.09,-66.33,42.41,5.34,0.06,-66.29,29.46,5.39,0.58,-66.22,-10.56,5.12,1.12,-66.2,-48.1,4.88,1.1,-65.99,-24.72,5.64,0.19,-65.89,50.22,4.49,0.4,-65.84,44.69,5.17,0.93,-65.82,-24.88,4.59,-0.07,-65.82,-1.29,4.36,-0.08,-65.78,11.27,5.98,0.88,-65.78,-7.03,4.93,-0.05,-65.74,-18.23,5.66,1.24,-65.68,16.46,5.67,1.01,-65.61,-14.3,5.46,0.5,-65.55,-4.65,5.45,0.43,-65.33,54.97,5.89,0.48,-65.2,5.4,5.18,0,-65.16,30.15,4.68,0.97,-65.14,42.82,5.41,-0.06,-64.98,18.01,4.39,0.78,-64.97,-23.43,5.97,1.04,-64.82,-0.62,5.64,0.12,-64.82,-16.29,5.3,1.11,-64.79,45.52,5.06,0.43,-64.74,17.48,4.39,1.04,-64.73,13.82,5.98,-0.08,-64.55,50.53,5.99,0.64,-64.37,-16.12,5.06,0.32,-64.36,11.83,5.28,0.57,-64.31,32.43,5.93,0.12,-64.11,-15.47,5.49,0.46,-64.07,25.77,5.5,0.94,-64.06,41.77,5.86,1.6,-63.93,37.35,4.89,0.95,-63.92,69.34,5.9,0.07,-63.76,45.13,2.86,0,-63.58,7.61,5.89,0.18,-63.49,-31.91,5.51,0.02,-63.44,10.61,2.72,1.51,-63.41,-19.76,4.87,1.06,-63.39,33.73,5,0.48,-63.15,18.53,3.68,1.31,-63.13,38.41,5.83,-0.09,-63.05,25.38,6,0.99,-62.99,-56.36,5.33,0.2,-62.96,70.27,3.84,0.89,-62.82,11.82,5.75,0.55,-62.76,19.14,5.01,0.1,-62.74,-10.87,6,1.23,-62.64,-72.5,5.39,0.23,-62.44,-47.56,5.91,1.68,-62.36,38.72,5.18,1.67,-62.34,40.6,5.68,-0.06,-62.34,52.99,5.03,1.29,-62.31,-59.19,5.41,0.08,-62.3,8.87,0.76,0.22,-62.31,-10.76,5.38,0.4,-62.24,10.42,5.12,0.56,-62.23,22.61,4.9,-0.15,-62.04,-39.87,5.32,-0.04,-62,47.03,5.6,-0.08,-61.99,24.99,5.54,0.68,-61.97,47.93,5.91,-0.17,-61.95,-19.05,5.88,0.98,-61.88,1.01,3.87,0.63,-61.84,-54.97,5.76,0.92,-61.68,57.52,5.14,-0.12,-61.67,-3.11,5.63,0.23,-61.63,24.08,4.57,-0.05,-61.47,-8.57,5.76,1.66,-61.44,8.46,4.71,1.02,-61.37,24.32,5.56,-0.02,-61.34,-8.23,5.7,-0.08,-61.31,0.27,5.6,0.1,-61.3,37,5.79,0.77,-61.18,-41.87,4.12,1.06,-61.17,6.41,3.71,0.86,-61.09,52.44,4.91,0.12,-61.04,-26.3,4.7,0.75,-61.03,38.49,4.95,-0.09,-61.02,58.85,4.98,1.58,-60.99,16.63,5.71,0.9,-60.94,11.42,5.28,0.01,-60.92,35.08,3.89,1.02,-60.76,-27.17,4.54,1.46,-60.72,-58.9,5.24,0.01,-60.69,40.37,5.46,-0.09,-60.56,16.79,5.54,-0.05,-60.51,-15.49,5.01,0.06,-60.34,30.98,5.51,-0.06,-60.33,-69.16,5.74,0.22,-60.31,19.49,3.51,1.57,-60.26,-26.2,4.84,0.88,-60.21,23.1,5.68,0.35,-60.16,45.77,5.92,0.19,-60.07,-35.28,4.37,-0.15,-60.05,-9.96,5.87,0.6,-60.04,-34.7,5.3,0.17,-60.02,37.04,5.15,-0.13,-59.99,17.52,5.33,1.58,-59.93,-37.7,5.95,0.99,-59.92,-33.7,5.65,0.5,-59.9,-66.95,5.75,1.03,-59.85,-72.91,3.97,-0.03,-59.8,-45.11,5.8,0.3,-59.75,8.56,5.9,1.53,-59.72,27.75,4.66,0.18,-59.66,50.1,5.06,1.12,-59.63,64.82,5.22,1.6,-59.56,-59.38,4.95,1.36,-59.56,24.8,5.88,-0.13,-59.53,-66.94,5.32,1.22,-59.51,-13.64,5.69,0.08,-59.49,24.94,5.23,0.37,-59.34,-27.71,4.43,1.64,-59.3,67.87,4.51,1.31,-59.18,18.5,5.99,1.42,-59.12,16.03,5.73,-0.09,-59.11,-37.94,4.77,1.42,-59.09,29.9,5.73,0.75,-58.97,17.07,5.8,0.6,-58.97,7.28,5.51,1.06,-58.92,-32.06,4.99,1.21,-58.9,-0.71,5.67,1.3,-58.85,32.22,5.62,0.76,-58.71,19.99,5.09,1.06,-58.61,62,5.4,1.19,-58.44,53.17,5.81,0.45,-58.41,35.97,5.38,0.85,-58.28,23.61,5.08,-0.16,-58.15,-52.88,4.93,1.59,-57.99,-0.68,5.97,1.02,-57.82,-66.18,3.55,0.75,-57.78,77.71,4.38,-0.05,-57.64,36.84,4.93,-0.14,-57.36,26.9,5.51,0.09,-57.2,-36.1,5.32,0.87,-57.17,-0.82,3.24,-0.07,-57.1,62.08,5.7,0.53,-57.05,26.81,5.51,1.4,-57,26.48,5.91,-0.11,-56.89,-12.62,5.84,0.48,-56.69,-1.01,5.44,1.43,-56.67,46.82,4.8,0.1,-56.65,56.57,4.28,0.11,-56.63,60.64,5.81,1.48,-56.59,46.74,3.8,1.27,-56.44,28.69,5.19,0.19,-56.43,15.2,4.94,0.07,-56.42,-52.45,5.65,1.5,-56.37,36.81,4.93,0.15,-56.18,25.59,4.79,-0.18,-56.18,-27.03,5.73,0.88,-56.15,33.73,5.7,0.93,-56.13,47.71,3.96,1.45,-56.12,23.51,5.18,1.02,-56.06,27.81,4.5,1.26,-56,45.58,5.87,0.45,-55.8,24.67,5.3,0.95,-55.77,40.37,5.27,1.65,-55.62,66.85,5.91,0.6,-55.59,-12.51,4.3,0.93,-55.55,38.03,4.77,0.38,-55.49,-21.81,5.86,1,-55.49,-12.54,3.58,0.88,-55.47,40.73,5.83,0.07,-55.4,55.4,5.76,0.12,-55.38,37,5.58,0.06,-55.34,34.98,5.14,0.66,-55.15,-19.12,5.28,1.39,-55.1,62.26,5.71,-0.04,-55,13.55,5.96,0.3,-54.97,68.88,5.59,1.47,-54.91,17.79,5.82,1.5,-54.83,-12.76,4.77,-0.05,-54.75,-14.78,3.05,0.79,-54.7,63.98,5.69,1.56,-54.49,24.45,5.5,-0.09,-54.48,45.8,5.58,1.08,-54.44,40.26,2.23,0.67,-54.39,-42.05,5.6,0,-54.31,41.03,5.95,1.63,-54.21,5.34,5.3,0.98,-54.07,37.48,5.87,-0.17,-54.03,32.19,4.43,1.33,-54.03,-42.42,5.64,0.2,-53.64,-28.66,5.86,1.1,-53.59,-56.74,1.94,-0.12,-53.58,21.41,5.68,0.92,-53.24,49.38,5.73,0.34,-53.17,-18.21,5.08,-0.05,-53.11,38.44,5.63,0.07,-52.94,81.42,5.38,1.01,-52.78,-17.81,4.77,0.39,-52.66,36.45,5.9,0.41,-52.65,30.37,4.01,0.4,-52.64,81.09,5.96,0.94,-52.64,56.07,5.89,-0.05,-52.6,62.99,4.21,0.2,-52.59,-2.89,4.91,1.16,-52.53,-18.58,5.94,0.06,-52.49,48.95,4.94,-0.09,-52.17,49.22,5.44,1.57,-52.12,74.95,5.18,0.1,-51.9,-9.85,5.66,0.69,-51.7,11.3,4.03,-0.12,-51.68,-80.96,5.76,1.12,-51.52,35.25,4.61,1.59,-51.52,46.69,5.78,-0.14,-51.52,-44.52,5.12,1,-51.51,13.03,5.39,0.09,-51.17,14.67,4.64,0.12,-51.1,-60.58,4.75,0.29,-50.82,-2.55,4.91,1.61,-50.73,26.46,5.59,-0.05,-50.61,14.6,3.64,0.43,-50.61,-47.29,3.11,1,-50.6,-61.53,4.86,0.45,-50.55,11.38,5.42,0.05,-50.42,-81.29,5.89,1.69,-50.42,-1.11,4.31,0.95,-50.37,21.2,4.81,-0.03,-50.37,24.12,5.06,-0.13,-50.35,23.68,5.91,0.95,-50.32,13.32,5.69,1.51,-50.25,30.33,5.68,1.09,-50.23,15.84,5.99,-0.14,-50.22,10.09,5.07,0.7,-50.18,-14.95,5.24,-0.13,-50.15,0.49,5.15,1.06,-50.09,15.91,3.77,-0.06,-49.99,-60.55,5.11,0.54,-49.99,-18.14,5.15,1.65,-49.99,43.46,5.97,1.19,-49.92,-33.43,5.47,1.12,-49.86,-16.12,5.79,1,-49.74,32.31,5.53,0.87,-49.65,-31.6,5.75,1.55,-49.64,45.28,1.25,0.09,-49.51,41.72,5.68,-0.11,-49.51,-66.76,5.14,-0.06,-49.49,-76.18,5.99,0.45,-49.45,50.34,5.41,-0.11,-49.35,82.53,5.75,0,-49.2,66.66,5.59,0.22,-49.14,15.07,4.43,0.3,-48.99,-51.92,4.51,0.28,-48.91,56.49,5.91,1.64,-48.78,25.27,4.92,1.18,-48.76,-66.2,3.42,0.16,-48.68,61.84,3.41,0.91,-48.66,57.58,4.52,0.54,-48.58,30.72,4.22,1.05,-48.48,-25.27,4.13,0.43,-48.46,-21.51,5.91,0.07,-48.45,33.97,2.48,1.02,-48.42,-39.2,5.48,-0.08,-48.34,16.12,5.15,0.5,-48.34,16.12,4.27,1.04,-48.21,34.37,4.93,1.29,-48.15,36.49,4.53,-0.08,-48.11,80.55,5.36,1.14,-48.08,-9.5,3.78,0,-48.07,-5.03,4.43,1.64,-48.05,6.01,5.57,-0.01,-48.04,47.83,5.6,1.47,-47.88,-43.99,5.11,0.36,-47.77,46.11,4.81,0.57,-47.68,-25.78,5.86,-0.07,-47.67,-68.78,5.41,1.12,-47.63,-46.23,4.9,1.49,-47.51,-33.78,4.89,1,-47.48,44.06,5.06,0.2,-47.33,-12.54,5.87,1.08,-47.25,-37.91,5.52,1.38,-47.14,-5.63,5.99,0.46,-47.13,28.25,5.66,0.62,-47.12,-51.61,5.06,1.13,-47.09,-62.43,5.67,0.2,-47.04,-26.92,4.12,1.63,-46.97,27.1,4.56,0.84,-46.96,-5.51,5.55,-0.08,-46.84,-8.98,4.73,0.33,-46.69,44.39,4.8,-0.13,-46.67,45.18,5.48,1.09,-46.58,-39.81,5.34,1.32,-46.53,33.44,5.47,1.52,-46.36,28.06,5.03,1.48,-46.32,75.93,5.99,0.95,-46.3,-17.92,5.78,1.12,-46.3,-58.45,3.67,1.25,-46.1,13.72,5.19,1.12,-46.09,12.57,5.54,0.13,-46.04,47.42,5.68,0.41,-45.89,50.73,5.83,0.34,-45.89,49.2,5.92,1.05,-45.86,44.92,5.96,0.02,-45.8,-26.3,5.7,0.51,-45.77,-9.7,5.49,1.47,-45.71,41.17,3.94,0.03,-45.58,-16.03,5.89,0.18,-45.43,22.33,5.3,1.42,-45.42,44.47,5.55,0.97,-45.39,10.84,5.51,0.93,-45.37,50.46,5.59,-0.14,-45.33,-14.48,5.95,0.24,-45.23,4.29,5.3,0.46,-45.23,4.29,5.24,0.46,-45.14,59.44,5.54,1.41,-45.04,47.52,4.74,-0.08,-44.98,7.52,5.98,0.28,-44.91,-51.27,5.76,0.48,-44.88,19.33,5.69,1.59,-44.7,46.16,5.38,-0.21,-44.68,-32.26,4.67,0.89,-44.46,56.67,5.83,-0.06,-44.39,-38.53,5.93,1.11,-44.26,-38.63,5.32,0.42,-44.05,53.29,5.93,1,-43.98,-5.82,5.53,0.68,-43.9,-19.85,4.82,0.17,-43.86,5.5,5.63,1.65,-43.82,-77.02,5.13,0.49,-43.77,43.93,3.72,1.61,-43.69,-54.73,5.17,1.2,-43.64,5.96,5.94,0.54,-43.63,78.13,5.91,-0.06,-43.51,-17.23,4.08,-0.01,-43.5,-30.13,5.69,1.05,-43.4,71.43,5.88,0.39,-43.4,-32.34,5.2,1.1,-43.39,-41.39,5.55,1.35,-43.37,31.18,5.77,0.55,-43.35,47.65,4.56,1.57,-43.28,38.75,5.2,1.07,-43.22,-25.01,4.49,1.6,-42.86,-63.93,5.75,1.18,-42.86,-21.19,5.3,0,-42.84,30.21,5.6,-0.05,-42.8,-88.96,5.45,0.28,-42.66,-73.17,5.67,0.59,-42.6,-11.37,4.5,0.93,-42.44,53.56,5.75,-0.11,-42.41,10.13,4.7,0.26,-42.05,59.99,5.64,0.11,-41.94,-40.27,5.83,0.45,-41.77,30.23,3.21,0.99,-41.74,-39.42,5.25,0.46,-41.68,-27.62,5.41,1.43,-41.67,-36.42,5.97,0.97,-41.66,-70.13,5.06,1.58,-41.38,10.01,4.47,0.53,-41.3,38.05,3.74,0.39,-41.09,-20.65,5.17,1.16,-41.07,77.01,5.92,1.53,-41.06,-15.17,5.31,1.64,-41.06,-53.26,5.73,0.19,-41.04,5.25,3.92,0.55,-40.69,55.8,6,1.45,-40.65,39.39,4.22,0.1,-40.52,34.9,4.41,-0.1,-40.52,-32.17,4.71,0.07,-40.51,-17.99,5.4,-0.12,-40.45,-4.52,5.83,-0.13,-40.39,43.95,5.04,-0.06,-40.36,62.59,2.45,0.26,-40.28,11.2,5.97,1.61,-40.18,58.62,5.51,1.11,-40.16,64.87,5.19,-0.04,-40.16,38.24,5.89,0.51,-40.13,49.51,5.75,-0.12,-40.03,-53.45,4.39,0.19,-39.81,-40.81,4.8,0.03,-39.73,23.86,5.58,1.06,-39.73,-4.56,5.87,0.91,-39.73,7.35,5.81,1.66,-39.5,49.39,5.68,1.1,-39.48,19.8,4.08,1.11,-39.44,-16.83,4.28,0.89,-39.28,6.81,5.16,0.06,-39.27,-9.32,5.99,1.52,-39.25,-22.67,5.63,1.64,-39,24.27,5.7,0.31,-38.96,-20.85,5.38,1.18,-38.95,-12.88,5.48,0.3,-38.9,-41.01,5.76,-0.04,-38.86,26.17,5.67,0.32,-38.79,80.52,5.97,0.95,-38.7,-9.75,5.71,0.21,-38.68,-3.56,5.48,1.45,-38.67,46.71,5.59,0.34,-38.55,36.67,5.93,0.03,-38.4,-37.83,5.64,1.19,-38.39,-65.37,4.21,0.49,-38.33,-22.41,3.77,1,-38.28,48.84,5.29,0.11,-38.24,-42.55,5.5,0.39,-38.19,-21.2,5.78,1.44,-38.16,37.12,5.3,-0.14,-38.08,27.61,5.39,0.05,-38.06,66.81,5.42,-0.1,-37.97,32.23,5.75,0.33,-37.83,70.56,3.23,-0.2,-37.82,-21.81,4.5,0.89,-37.81,-69.51,5.47,1.55,-37.75,22.18,5.84,1.37,-37.64,46.54,5.22,0.97,-37.51,23.64,4.52,1.62,-37.25,60.46,5.53,0.1,-37.11,-5.57,2.9,0.83,-36.98,-41.18,5.29,1.11,-36.94,-33.94,5.97,0.05,-36.76,49.98,5.77,-0.04,-36.65,-44.85,5.57,1.04,-36.5,45.59,3.98,0.89,-36.31,38.53,4.87,1.09,-36.29,-20.08,5.7,0.42,-36.18,-3.98,5.79,1.11,-35.99,45.37,5.96,1.34,-35.95,-26.17,5.73,0.23,-35.76,40.41,5.04,0.2,-35.73,-19.47,4.51,-0.18,-35.56,-7.85,4.68,0.18,-35.56,19.32,5.46,0.32,-35.52,62.08,4.76,0.25,-35.37,5.77,5.66,0.27,-35.26,57.49,5.74,0.2,-35.24,20.27,5.77,0.31,-35.11,2.24,5.1,1.03,-34.98,-16.66,3.69,0.32,-34.95,43.27,5.09,1.6,-34.63,-77.39,3.73,1.01,-34.61,-14.05,5.16,0.67,-34.52,71.31,4.55,1.11,-34.5,-23.26,5.24,0.99,-34.5,35.51,5.98,2.5,-34.48,51.19,4.69,-0.12,-34.46,1.29,5.66,1.45,-34.44,5.68,5.3,1.65,-34.4,41.08,5.73,0.06,-34.34,-18.87,4.72,0.87,-34.23,72.32,5.18,1.06,-34.23,-14.4,5.88,0.26,-34.22,41.16,5.51,1.62,-34.14,38.28,5.69,-0.01,-34.12,58.78,4.23,2.24,-34,-14.75,5.96,0.22,-33.96,28.74,4.49,0.51,-33.95,9.88,2.38,1.52,-33.87,17.35,4.34,1.16,-33.87,14.77,5.96,0.59,-33.84,25.65,4.14,0.43,-33.78,62.46,5.94,0.31,-33.76,-33.03,4.35,-0.05,-33.75,-9.08,5.1,1.11,-33.64,61.12,4.25,0.47,-33.48,22.95,5.29,1.38,-33.43,-9.28,6,1.63,-33.37,-11.37,5.57,0,-33.3,49.31,4.23,-0.12,-33.24,-16.13,2.85,0.18,-33.19,2.69,5.63,0.01,-33.14,60.69,5.53,1.58,-33.07,-30.9,5.02,0.04,-32.93,-47.3,5.57,0.6,-32.54,30.17,5.07,0.01,-32.5,-64.71,5.62,1.02,-32.46,17.29,5.34,0.39,-32.3,-69.63,5.52,1.38,-32.27,-82.72,5.27,0.76,-32.11,19.83,5.78,-0.1,-32,55.8,5.7,-0.08,-31.88,28.79,5.52,0.43,-31.73,25.93,5.09,-0.15,-31.68,-13.55,5.08,0.38,-31.59,19.67,5.69,0.01,-31.52,-37.36,3,-0.08,-31.46,-4.28,5.71,1.19,-31.28,56.61,5.74,0.66,-31.2,-61.89,5.92,0.39,-31.12,65.32,5.84,-0.04,-30.91,-37.25,5.45,0.08,-30.84,63.63,5.11,1.55,-30.77,12.08,5.54,0.05,-30.52,-54.99,4.4,0.3,-30.28,62.7,5.96,1.64,-30.19,73.18,5.04,0.44,-30.18,-38.4,5.5,1,-29.97,6.72,6,-0.11,-29.79,-28.45,5.43,-0.09,-29.73,0.6,5.6,1.28,-29.73,13.12,5.61,0.34,-29.71,8.26,5.65,1.44,-29.54,52.88,5.79,-0.11,-29.48,58,5.55,0.02,-29.26,44.65,5.57,-0.03,-29.23,-76.12,5.94,0.4,-29.18,-6.52,5.55,0.96,-29.16,-56.79,4.69,1.06,-29.17,-2.16,4.74,-0.1,-29.17,11.39,5.83,-0.05,-29.05,64.63,4.26,0.38,-29.03,63.12,5.26,1.56,-28.85,-26.82,5.97,-0.17,-28.8,-0.91,5.29,0.23,-28.75,62.79,5.27,1.41,-28.71,62.28,5.07,0.24,-28.7,26.67,5.75,1.25,-28.61,28.96,5.69,-0.05,-28.58,5.06,4.86,1.44,-28.55,-0.32,2.95,0.97,-28.54,-59.64,5.62,1.47,-28.49,45.01,5.09,1.57,-28.47,-39.54,4.47,1.35,-28.39,-13.87,4.29,-0.07,-28.25,25.35,3.77,0.44,-28.13,19.48,5.74,0.33,-28.04,21.7,5.79,-0.08,-27.94,-46.96,1.73,-0.07,-27.9,-32.99,4.5,0.05,-27.89,-34.04,4.99,1.5,-27.75,-18.52,5.8,-0.15,-27.69,33.17,5.58,0.99,-27.55,72.34,4.79,0.92,-27.52,-34.01,5.37,0.24,-27.5,33.18,4.28,0.47,-27.46,-32.55,4.94,0.49,-27.45,6.2,3.52,0.09,-27.36,-4.27,5.98,0.98,-27.34,11.62,5.78,1.62,-27.34,-11.56,5.43,-0.12,-27.34,70.13,5.52,0.39,-27.29,58.2,3.39,1.56,-27.21,50.82,5.38,0.15,-27.12,59.41,5.05,0.19,-27.05,56.84,5.24,0.53,-27.04,16.04,5.93,0.95,-26.99,60.76,5.37,1.18,-26.97,24.95,5.97,1.5,-26.91,63.29,5.76,1.65,-26.8,34.6,5.34,1.13,-26.71,86.11,5.27,-0.03,-26.59,28.61,5.87,1.17,-26.56,-25.18,5.58,0.5,-26.54,45.44,5.53,0.02,-26.53,39.71,4.5,1.39,-26.42,-21.07,5.33,0.81,-26.42,-27.77,5.45,-0.12,-26.32,42.95,5.72,0.01,-26.24,57.04,4.18,0.28,-26.1,-41.35,4.79,0.79,-26.01,37.75,4.14,1.45,-25.89,57.22,5.88,0.95,-25.89,-41.63,5.11,0.93,-25.8,-12.83,5.34,1.13,-25.79,-7.78,4.17,0.98,-25.78,-9.04,5.8,1.16,-25.72,-5.39,5.75,0.88,-25.54,-77.51,5.49,0.31,-25.45,62.8,5.75,1.26,-25.43,-53.63,5.36,0.61,-25.37,-60.26,2.87,1.39,-25.25,-13.3,5.96,1.08,-24.99,-80.44,5.09,1.28,-24.95,-7.82,5.35,-0.05,-24.89,5.79,5.37,-0.04,-24.74,46.54,4.55,-0.1,-24.67,28.33,4.78,-0.01,-24.62,12.21,4.82,-0.13,-24.6,-21.6,5.12,1.06,-24.59,-1.39,3.86,-0.06,-24.22,-45.93,5.62,0.37,-24.12,-24.76,5.53,0.98,-24.12,-7.19,5.92,1,-24.11,52.23,4.42,1.01,-23.97,-4.84,5.79,-0.03,-23.89,-13.53,5.76,0.97,-23.87,49.48,4.55,0.09,-23.85,-72.26,5.28,0.66,-23.76,-57.8,5.31,0.67,-23.71,-70.43,5.78,0.4,-23.68,1.38,4.8,-0.17,-23.5,70.77,5.47,1.22,-23.36,-16.74,5.55,0.62,-23.34,4.39,5.76,0.52,-23.32,78.79,5.83,0.17,-23.23,65.13,5.52,0.3,-23.17,-64.97,4.51,-0.03,-23.06,31.84,6,1.44,-23.04,4.7,4.78,1.04,-22.84,-67.49,5.56,0.21,-22.84,-39.13,5.47,0.96,-22.79,-0.02,3.65,0.41,-22.72,9.13,5.6,1.58,-22.71,58.42,4.07,0.78,-22.71,26.76,5.79,1.25,-22.68,-43.5,3.97,1.02,-22.62,47.71,4.34,1.68,-22.56,-43.75,4.12,1.57,-22.56,-27.11,5.95,0.36,-22.53,78.82,5.45,0.09,-22.51,4.43,5.51,0.39,-22.49,32.57,5.64,-0.03,-22.38,43.12,4.52,-0.09,-22.34,-10.68,4.82,-0.05,-22.18,50.28,3.76,0.03,-22.12,-32.35,4.29,0.01,-22.09,-85.97,5.76,1.02,-21.93,76.23,5.7,0.02,-21.89,39.78,5.88,0.17,-21.75,-61.98,4.91,1.61,-21.58,56.62,5.72,0.97,-21.49,-1.57,5.88,0.98,-21.33,-20.71,5.21,0.45,-21.16,-0.12,4.04,-0.08,-21.1,-23.99,5.97,0.98,-21.06,73.64,5.08,0.4,-21.03,39.63,5.73,-0.16,-20.85,-31.66,5.82,1.07,-20.75,-40.59,5.85,0.06,-20.7,75.37,5.8,1.59,-20.66,51.55,4.64,0.25,-20.56,-4.23,5.04,1.14,-20.34,56.8,5.11,1.54,-20.34,63.58,5.19,0.08,-20.29,-33.08,5.66,0.04,-20.28,19.52,5.84,0.92,-20.18,39.05,4.89,-0.21,-19.92,53.85,5.94,0.95,-19.91,-30.66,5.88,1.3,-19.87,44.28,4.5,1.32,-19.84,-27.04,4.18,-0.1,-19.8,-57.42,5.98,1.45,-19.78,14.55,5.72,0.72,-19.63,10.83,3.41,-0.09,-19.63,40.23,5.25,-0.14,-19.6,41.55,5.93,1,-19.56,29.31,4.8,-0.01,-19.51,14.52,5.92,1.11,-19.35,-47.21,5.99,0.58,-19.33,-46.88,2.07,1.61,-19.25,30.22,2.93,0.85,-19.13,-41.41,4.84,1.03,-19.1,-18.83,4.68,1.36,-18.98,39.47,5.93,1.49,-18.98,41.82,5.11,0.96,-18.59,-53.5,4.84,1.18,-18.58,-46.55,5.52,1.3,-18.49,-81.38,4.13,0.21,-18.46,44.55,5.84,0.36,-18.37,23.57,3.97,1.07,-18.33,12.17,4.2,0.5,-18.13,83.15,4.77,1.26,-18.11,-19.61,5.24,0.94,-18.07,-14.06,5.68,-0.02,-17.95,37.42,5.82,1.02,-17.86,-51.32,3.49,0.08,-17.6,-13.59,4.05,1.57,-17.58,66.2,3.5,1.05,-17.56,55.9,5.43,1.17,-17.5,24.6,3.51,0.93,-17.41,41.95,5.91,0.06,-17.4,-80.12,5.32,-0.13,-17.24,-39.16,5.43,1.44,-17.24,85.37,5.89,1.34,-17.16,-29.54,5.99,0.91,-17.16,61.7,5.61,0.78,-16.99,43.31,4.95,1.56,-16.9,9.84,5.16,0.49,-16.87,-32.88,4.46,-0.04,-16.85,-7.58,3.73,1.63,-16.74,16.84,5.86,1.13,-16.63,-11.62,5.8,-0.08,-16.58,44.75,5.79,0.28,-16.47,40.38,5.82,1.14,-16.4,84.35,4.7,1.42,-16.34,-15.82,3.27,0.07,-16.31,-16.27,5.53,1.11,-16.24,37.08,5.91,0.4,-16.2,-4.99,5.72,0.88,-16.19,8.82,4.91,0,-16.06,36.35,5.73,-0.05,-16.01,-32.54,4.2,0.95,-15.9,41.6,5.6,-0.15,-15.89,49.73,4.99,1.78,-15.8,-47.97,5.72,0.23,-15.73,48.68,5.34,-0.1,-15.63,20.77,5.45,0.67,-15.59,-29.62,1.17,0.14,-15.2,11.73,5.76,0.29,-15.14,0.96,5.43,0.98,-15.1,-29.46,5.51,0.27,-14.98,56.95,5.1,1.01,-14.98,-25.16,5.66,1.25,-14.82,3.01,5.85,1.34,-14.78,-52.75,4.11,0.96,-14.72,-50.95,5.68,1.41,-14.67,-28.85,5.55,1.35,-14.62,-4.71,5.94,0.99,-14.52,42.33,3.62,-0.1,-14.35,42.76,5.09,0.09,-14.32,-20.87,5.97,0.95,-14.13,-34.75,5.12,0.31,-14.11,67.21,5.25,1.25,-14.06,28.08,2.44,1.66,-14.03,3.82,4.48,-0.11,-14,-41.48,5.79,1.07,-13.95,50.05,4.64,1.06,-13.83,-53.96,5.37,1.45,-13.81,15.21,2.49,0,-13.78,-68.82,5.53,0.4,-13.71,-7.69,5.44,0.31,-13.35,59.42,4.84,-0.06,-13.33,-23.74,4.48,0.89,-13.28,-43.52,4.28,0.42,-13.28,-38.89,5.62,0.01,-13.25,9.41,4.54,1.56,-13.22,25.47,4.76,1.29,-13.19,-50.69,5.81,0.49,-13.13,21.13,5.97,0.26,-13.09,46.39,5.3,1.41,-13.06,49.3,5.68,0.45,-13.03,75.39,4.41,0.8,-12.91,-28.82,5.6,0.88,-12.83,2.13,5.42,0.91,-12.64,-21.17,3.68,1.2,-12.62,8.68,5.05,1.48,-12.57,59.33,5.68,0.32,-12.56,-28.09,5.88,1.31,-12.52,-22.46,4.71,0.67,-12.51,-42.86,5.83,0.48,-12.49,9.82,5.39,-0.07,-12.46,-40.59,5.9,1.57,-12.41,-45.25,3.88,1,-12.39,43.54,5.91,0.45,-12.32,17.59,5.68,1.33,-12.07,8.72,5.15,0.14,-11.86,49.41,4.53,0.3,-11.68,57.17,5.57,1,-11.64,11.07,5.85,1,-11.42,-6.05,4.22,1.55,-11.35,74.23,5.89,-0.01,-11.26,-41.11,5.77,1.16,-11.11,-3.5,5.56,0.06,-11.09,70.89,5.55,0.26,-11.03,-9.09,4.24,1.11,-10.83,-44.49,5.92,1.05,-10.82,53.21,5.58,0.56,-10.79,-7.73,4.93,1.61,-10.76,-62,5.64,0.52,-10.71,3.28,3.7,0.92,-10.64,-58.24,3.99,0.41,-10.56,49.02,4.82,1.67,-10.52,-9.18,4.41,-0.14,-10.46,-40.82,5.54,0.45,-10.4,41.77,5.98,0.22,-10.34,68.11,4.75,0.84,-10.29,-32.53,4.41,1.11,-10.26,-9.61,4.99,-0.02,-10.22,-13.45,5.19,0.9,-10.22,-13.46,5.2,0.79,-10.15,-5.12,5.56,0.39,-10.15,-18.08,5.96,1.53,-10.13,48.63,5.44,1.01,-10.03,42.08,5.81,1.51,-9.91,5.38,5.05,1.2,-9.84,23.74,4.58,0.18,-9.79,30.41,5.58,1.5,-9.78,38.18,5.77,0.47,-9.69,-26.99,5.65,0.82,-9.52,31.81,5.35,-0.1,-9.36,60.13,5.56,1.68,-9.34,-15.04,5.19,0.2,-9.26,-20.1,3.96,1.08,-9.23,12.31,5.09,1.32,-8.94,-51.89,5.75,1.61,-8.79,62.28,4.96,1.68,-8.79,32.38,5.56,-0.07,-8.67,-56.85,5.6,1.06,-8.66,23.4,4.42,0.62,-8.49,-20.64,4.38,1.46,-8.35,-52.72,5.53,0.41,-8.27,1.26,4.95,0.04,-8.25,87.31,5.56,0.25,-8.22,42.91,5.75,-0.01,-8.19,-58.48,5.63,0.98,-8.18,70.36,5.6,0.16,-8.08,25.17,5.99,-0.07,-8.01,6.38,4.27,1.06,-7.98,-87.48,5.5,1.28,-7.75,-63.11,5.66,-0.14,-7.71,12.76,4.54,0.94,-7.49,58.55,4.89,-0.12,-7.18,39.24,5.22,1.03,-6.76,-37.82,4.38,-0.09,-6.68,-20.91,4.7,0.02,-6.67,-77.39,5.82,0.68,-6.63,22.5,5.33,1.48,-6.51,31.33,4.97,1.38,-6.46,-1.25,5.91,0.3,-6.34,40.24,5.55,0.1,-6.34,33.5,5.63,1.04,-6.29,-15.25,5.95,1.35,-6.25,71.64,5.86,1.68,-6.23,-42.62,4.69,0.08,-5.9,2.1,5.68,0.45,-5.62,44.43,5.81,-0.06,-5.61,46.46,3.81,0.98,-5.59,-13.06,5.66,1.02,-5.54,-45.49,4.74,0.08,-5.51,18.4,5.49,0.01,-5.47,43.27,4.29,-0.08,-5.4,-76.87,5.99,0.91,-5.22,50.47,5.35,-0.06,-5.21,75.29,5.95,0.12,-5.16,77.63,3.21,1.03,-5.16,74,5.98,0.89,-5.05,-14.22,4.97,0.26,-5.02,9.68,5.99,0.21,-5.01,5.63,4.13,0.51,-4.9,44.33,4.15,-0.07,-4.84,-32.07,5.3,0.97,-4.71,-11.68,5.89,0.98,-4.61,-18.03,5.36,1.58,-4.56,-17.82,4.82,0.82,-4.51,7.25,5.89,0.1,-4.49,1.78,4.49,0.2,-4.38,-15.45,5.27,1.34,-4.32,-14.54,4.49,-0.03,-4.16,10.33,5.09,1.69,-4,29.36,4.93,0.94,-3.95,-64.4,5.73,1.39,-3.95,-18.28,5.24,-0.08,-3.83,-78.79,5.74,1.11,-3.5,-18.68,5.28,0.3,-3.49,46.42,4.97,1.09,-3.4,3.49,4.95,2.51,-3.35,66.78,5.95,-0.05,-3.24,57.45,5.55,1.63,-3.24,58.65,4.88,1.12,-3.18,-11.91,5.74,1.07,-3.18,-50.23,5.18,-0.16,-3.02,67.81,5.05,0.01,-3.01,-2.76,5.49,0.94,-2.79,62.21,5.43,0.67,-2.77,-28.13,4.59,0,-2.64,1.08,5.77,0.17,-2.59,28.84,5.95,0.19,-2.58,36.43,5.86,0.81,-2.44,-9.97,5.93,1.13,-2.36,-14.4,5.7,1.49,-2.16,9.31,5.77,1.66,-2.16,-18.91,5.17,-0.12,-2.01,2.93,5.59,1.53,-1.97,-82.02,5.1,0.93,-1.88,19.12,5.06,1.59,-1.87,-14.25,5.85,1.25,-1.85,10.95,5.3,0.19,-1.79,-9,5.76,1.17,-1.77,-3.16,5.93,1.07,-1.4,57.5,4.51,1.19,-1.31,0.11,5.78,1.47,-0.71,55.71,5.57,0.48,-0.67,-62.96,5.95,0.1,-0.61,-82.17,5.72,1.06,-0.6,-64.3,5,0.06,-0.56,25.14,4.63,1.58,-0.33,-3.56,4.88,0.93,-0.27,-52.75,5.13,1.12,-0.25,55.75,4.88,-0.07,-0.17,6.86,4.03,0.42,-0.13,-29.49,5.59,1.6,-0.13,33.72,5.81,0.54,-0.02,-65.58,4.49,-0.07]`),pu=document.getElementById(`track`),mu=[...pu.querySelectorAll(`.page`)],hu=mu.length,gu=hu-1;document.documentElement.style.setProperty(`--pages`,String(hu));var _u=e=>String(e).padStart(2,`0`);document.getElementById(`folio-total`).textContent=_u(hu);var vu=document.getElementById(`folio-current`),yu=document.getElementById(`folio-ticks`),bu=mu.map(()=>yu.appendChild(document.createElement(`li`))),xu=document.getElementById(`pager-next`),Su=document.getElementById(`pager-prev`),Cu=new Dl({canvas:document.getElementById(`webgl`),antialias:!0});Cu.setSize(window.innerWidth,window.innerHeight),Cu.setPixelRatio(Math.min(window.devicePixelRatio,2));var wu=new Nt;wu.fog=new Mt(526344,15,40);var Tu=5,Eu=new Na(75,window.innerWidth/window.innerHeight,.1,100);Eu.position.set(0,0,Tu),wu.add(Eu);function Du(e){let t=2*(Tu-e)*Math.tan(ke.degToRad(Eu.fov/2));return{w:t*Eu.aspect,h:t}}var Ou=Du(0).w,ku=[];function Au(e,{size:t,z:n=0}){return wu.add(e),ku.push({object:e,size:t,z:n}),e}var ju=[];function Mu(e,t){let n=new Gl().fromEdgesGeometry(new Ar(e)),r=new Kl({color:t,linewidth:3,resolution:new G(window.innerWidth,window.innerHeight)});return ju.push(r),new du(n,r)}function Nu(e,t,n,r){return Au(Mu(e,t),{size:n,z:r})}var Pu=.3,Fu=1,Iu=-1.8,Lu=.9,Ru=new si;Ru.moveTo(-.3,Fu),Ru.lineTo(Pu,Fu),Ru.lineTo(Pu,.7),Ru.lineTo(Lu,.7),Ru.lineTo(Lu,.10000000000000003),Ru.lineTo(Pu,.10000000000000003),Ru.lineTo(Pu,Iu),Ru.lineTo(-.3,Iu),Ru.lineTo(-.3,.10000000000000003),Ru.lineTo(-.9,.10000000000000003),Ru.lineTo(-.9,.7),Ru.lineTo(-.3,.7),Ru.closePath();var zu=new Gi(Ru,{depth:.4,bevelEnabled:!1});zu.center();var Bu=Nu(zu,6514417,2.8,0),Vu=3462041,Hu=new wt,Uu=Mu(new Cr(.45,2.2,.45),Vu),Wu=Mu(new Ji(.38,1),Vu);Uu.position.y=-.3,Wu.position.y=1.3,Hu.add(Uu,Wu),Au(Hu,{size:3.2,z:-1});var Gu=Nu(new Ji(1.3,0),2282478,2.6,-1),Ku=Nu(new Tr(1.3,0),14423100,2.6,-1),qu=Nu(new Zi(1.5,0),16498468,2.6,-1),Ju=Nu(new Yi(1.3),10980346,2.6,0);ku.length!==hu&&console.warn(`[manga] ${hu} pages but ${ku.length} meshes — some pages will have an empty art panel.`);function Yu(){Ou=Du(0).w;let e=window.innerWidth,t=window.innerHeight;ku.forEach((n,r)=>{let i=mu[r]?.querySelector(`[data-art]`);if(!i){n.object.visible=!1;return}let a=i.offsetLeft+i.offsetWidth/2,o=i.offsetTop+i.offsetHeight/2,s=a/e*2-1,c=-(o/t*2-1),l=Du(n.z),u=-r*Ou;n.object.position.set(u+s*l.w/2,c*l.h/2,n.z);let d=Math.min(i.offsetWidth/e*l.w,i.offsetHeight/t*l.h);n.object.scale.setScalar(d*.55/n.size)})}var Xu=60,Zu=matchMedia(`(prefers-reduced-motion: reduce)`).matches?1:240,Qu=2,$u=-new Date().getTimezoneOffset()/60*15,ed=Date.now();function td(e){let t=280.46061837+360.98564736629*(e/864e5+2440587.5-2451545)+$u;return ke.degToRad((t%360+360)%360)}var nd=new Z(11190271),rd=new Z(16774892),id=new Z(16763274);function ad(e,t){return e<.6?t.copy(nd).lerp(rd,ke.clamp((e+.3)/.9,0,1)):t.copy(rd).lerp(id,ke.clamp((e-.6)/1,0,1))}var od=fu.length/4,sd=new Float32Array(od*3),cd=new Float32Array(od*3),ld=new Float32Array(od),ud=new Float32Array(od),dd=new Z;for(let e=0;e<od;e++){let t=ke.degToRad(fu[e*4]),n=ke.degToRad(fu[e*4+1]),r=fu[e*4+2];sd[e*3]=Xu*Math.cos(n)*Math.cos(t),sd[e*3+1]=Xu*Math.sin(n),sd[e*3+2]=-60*Math.cos(n)*Math.sin(t),ad(fu[e*4+3],dd).toArray(cd,e*3),ld[e]=1.1+Math.max(0,6-r)*.55,ud[e]=ke.clamp(.3+(6-r)*.12,.3,1)}var fd=new On;fd.setAttribute(`position`,new pn(sd,3)),fd.setAttribute(`color`,new pn(cd,3)),fd.setAttribute(`size`,new pn(ld,1)),fd.setAttribute(`alpha`,new pn(ud,1));var pd=new ca({uniforms:{uPixelRatio:{value:Cu.getPixelRatio()}},vertexShader:`
    attribute float size;
    attribute float alpha;
    varying vec3 vColor;
    varying float vAlpha;
    uniform float uPixelRatio;
    void main() {
      vColor = color;
      vAlpha = alpha;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * uPixelRatio; // fixed pixels: stars don't scale with distance
    }`,fragmentShader:`
    varying vec3 vColor;
    varying float vAlpha;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      float a = smoothstep(0.5, 0.15, d) * vAlpha; // soft round disc
      if (a < 0.01) discard;
      gl_FragColor = vec4(vColor, a);
    }`,vertexColors:!0,transparent:!0,depthWrite:!1}),md=new wt;md.rotation.x=ke.degToRad(45);var hd=new wt,gd=new _r(fd,pd);gd.renderOrder=-1,hd.add(gd),md.add(hd),wu.add(md);function _d(e,t){md.position.copy(Eu.position);let n=ed+(e*Zu+t*Qu*3600)*1e3;hd.rotation.y=Math.PI/2-td(n)}var vd=800,yd=new Float32Array(vd*3),bd=Ou*(hu+2);for(let e=0;e<vd;e++)yd[e*3]=Ou-Math.random()*bd,yd[e*3+1]=(Math.random()-.5)*14,yd[e*3+2]=(Math.random()-.5)*12-3;var xd=new On;xd.setAttribute(`position`,new pn(yd,3)),wu.add(new _r(xd,new fr({color:16777215,size:.025,sizeAttenuation:!0})));var Sd={x:0,y:0},Cd={x:0,y:0};window.addEventListener(`mousemove`,e=>{Sd.x=(e.clientX/window.innerWidth-.5)*2,Sd.y=-(e.clientY/window.innerHeight-.5)*2});var wd=new Hl({lerp:.085,gestureOrientation:`both`,virtualScroll:e=>(Md=null,e.deltaX=-e.deltaX,!0)}),Td=()=>wd.limit>0?wd.scroll/wd.limit:0,Ed=()=>wd.limit/gu,Dd=140,Od=e=>1-(1-e)**3,kd=0;function Ad(){return Math.round(Td()*gu)}function jd(){let e=Ad()*Ed();Math.abs(e-wd.scroll)<1||wd.scrollTo(e,{duration:.8,easing:Od})}wd.on(`scroll`,()=>{clearTimeout(kd),kd=setTimeout(jd,Dd)});var Md=null;function Nd(e){let t=ke.clamp(e,0,gu);Md=t,wd.scrollTo(t*Ed(),{duration:1.1,easing:Od,onComplete:()=>{Md===t&&(Md=null)}})}function Pd(e){Nd((Md??Ad())+e)}var Fd=new Set([`ArrowLeft`,`ArrowDown`,`PageDown`]),Id=new Set([`ArrowRight`,`ArrowUp`,`PageUp`]);window.addEventListener(`keydown`,e=>{if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.target instanceof HTMLElement?e.target:null;if(t?.closest(`input, textarea, select, [contenteditable]`))return;let n=0;if(Fd.has(e.key))n=1;else if(Id.has(e.key))n=-1;else if(e.key===` `){if(t?.closest(`button, a`))return;n=e.shiftKey?-1:1}else if(e.key===`Home`){e.preventDefault(),Nd(0);return}else if(e.key===`End`){e.preventDefault(),Nd(gu);return}n&&(e.preventDefault(),Pd(n))}),xu.addEventListener(`click`,()=>Pd(1)),Su.addEventListener(`click`,()=>Pd(-1));var Ld=40,Rd=null;window.addEventListener(`touchstart`,e=>{if(e.touches.length!==1){Rd=null;return}let t=e.touches[0];Rd={x:t.clientX,y:t.clientY}},{passive:!0}),window.addEventListener(`touchend`,e=>{if(!Rd)return;let t=e.changedTouches[0],n=t.clientX-Rd.x,r=t.clientY-Rd.y;Rd=null,!(Math.abs(n)<Ld||Math.abs(n)<Math.abs(r)*1.2)&&Pd(n>0?1:-1)},{passive:!0}),window.addEventListener(`touchcancel`,()=>{Rd=null},{passive:!0});function zd(e){vu.textContent=_u(e+1),bu.forEach((t,n)=>{t.classList.toggle(`is-read`,n<e),t.classList.toggle(`is-current`,n===e)}),xu.disabled=e>=gu,Su.disabled=e<=0}window.__manga={lenis:wd,goToPage:Nd,turn:Pd,progress:Td,PAGE_COUNT:hu};var Bd=new Ba,Vd=-1;function Hd(e){wd.raf(e),Bd.update(e);let t=Td()*gu;pu.style.transform=`translate3d(${t*100}vw, 0, 0)`,Cd.x+=(Sd.x-Cd.x)*.05,Cd.y+=(Sd.y-Cd.y)*.05,Eu.position.x=-t*Ou+Cd.x*.25,Eu.position.y=Cd.y*.2;let n=Math.round(t);n!==Vd&&(zd(n),Vd=n);let r=Bd.getElapsed();Bu.rotation.y=r*.5,Bu.rotation.x=Math.sin(r*.5)*.15,Hu.rotation.y=r*.4,Hu.rotation.z=Math.sin(r*.5)*.15,Gu.rotation.x=r*.5,Gu.rotation.y=r*.3,Ku.rotation.x=r*.35,Ku.rotation.y=r*.45,qu.rotation.x=r*.4,qu.rotation.z=r*.25,Ju.rotation.x=r*.2,Ju.rotation.y=r*.45,_d(r,t),Cu.render(wu,Eu),requestAnimationFrame(Hd)}Yu(),requestAnimationFrame(Hd),window.addEventListener(`resize`,()=>{let e=Ad();Eu.aspect=window.innerWidth/window.innerHeight,Eu.updateProjectionMatrix(),Cu.setSize(window.innerWidth,window.innerHeight),Cu.setPixelRatio(Math.min(window.devicePixelRatio,2)),pd.uniforms.uPixelRatio.value=Cu.getPixelRatio(),ju.forEach(e=>e.resolution.set(window.innerWidth,window.innerHeight)),wd.resize(),Yu(),wd.scrollTo(e*Ed(),{immediate:!0})});