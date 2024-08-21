import{j as Rt,$ as Z,t as Pt,u as xt}from"./chunk-C6SIkxmN.js";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return t<0?-1:t===0?0:1}function Q(t,e,r){return(1-r)*t+r*e}function St(t,e,r){return r<t?t:r>e?e:r}function at(t,e,r){return r<t?t:r>e?e:r}function ft(t){return t=t%360,t<0&&(t=t+360),t}function Et(t,e){return ft(e-t)<=180?1:-1}function Nt(t,e){return 180-Math.abs(Math.abs(t-e)-180)}function ut(t,e){const r=t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],n=t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],a=t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2];return[r,n,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Vt=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],zt=[95.047,100,108.883];function dt(t,e,r){return(255<<24|(t&255)<<16|(e&255)<<8|r&255)>>>0}function Mt(t){const e=K(t[0]),r=K(t[1]),n=K(t[2]);return dt(e,r,n)}function Ct(t){return t>>16&255}function Dt(t){return t>>8&255}function It(t){return t&255}function qt(t,e,r){const n=Vt,a=n[0][0]*t+n[0][1]*e+n[0][2]*r,o=n[1][0]*t+n[1][1]*e+n[1][2]*r,c=n[2][0]*t+n[2][1]*e+n[2][2]*r,i=K(a),f=K(o),u=K(c);return dt(i,f,u)}function Ut(t){const e=W(Ct(t)),r=W(Dt(t)),n=W(It(t));return ut([e,r,n],$t)}function jt(t){const e=H(t),r=K(e);return dt(r,r,r)}function lt(t){const e=Ut(t)[1];return 116*wt(e/100)-16}function H(t){return 100*_t((t+16)/116)}function ht(t){return wt(t/100)*116-16}function W(t){const e=t/255;return e<=.040449936?e/12.92*100:Math.pow((e+.055)/1.055,2.4)*100}function K(t){const e=t/100;let r=0;return e<=.0031308?r=e*12.92:r=1.055*Math.pow(e,1/2.4)-.055,St(0,255,Math.round(r*255))}function Yt(){return zt}function wt(t){const e=.008856451679035631,r=24389/27;return t>e?Math.pow(t,1/3):(r*t+16)/116}function _t(t){const e=.008856451679035631,r=24389/27,n=t*t*t;return n>e?n:(116*t-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static make(e=Yt(),r=200/Math.PI*H(50)/100,n=50,a=2,o=!1){const c=e,i=c[0]*.401288+c[1]*.650173+c[2]*-.051461,f=c[0]*-.250268+c[1]*1.204414+c[2]*.045854,u=c[0]*-.002079+c[1]*.048952+c[2]*.953127,l=.8+a/10,p=l>=.9?Q(.59,.69,(l-.9)*10):Q(.525,.59,(l-.8)*10);let d=o?1:l*(1-1/3.6*Math.exp((-r-42)/92));d=d>1?1:d<0?0:d;const M=l,g=[d*(100/i)+1-d,d*(100/f)+1-d,d*(100/u)+1-d],b=1/(5*r+1),C=b*b*b*b,T=1-C,I=C*r+.1*T*T*Math.cbrt(5*r),P=H(n)/e[1],N=1.48+Math.sqrt(P),k=.725/Math.pow(P,.2),B=k,D=[Math.pow(I*g[0]*i/100,.42),Math.pow(I*g[1]*f/100,.42),Math.pow(I*g[2]*u/100,.42)],A=[400*D[0]/(D[0]+27.13),400*D[1]/(D[1]+27.13),400*D[2]/(D[2]+27.13)],x=(2*A[0]+A[1]+.05*A[2])*k;return new q(P,x,k,B,p,M,g,I,Math.pow(I,.25),N)}constructor(e,r,n,a,o,c,i,f,u,l){this.n=e,this.aw=r,this.nbb=n,this.ncb=a,this.c=o,this.nc=c,this.rgbD=i,this.fl=f,this.fLRoot=u,this.z=l}}q.DEFAULT=q.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,r,n,a,o,c,i,f,u){this.hue=e,this.chroma=r,this.j=n,this.q=a,this.m=o,this.s=c,this.jstar=i,this.astar=f,this.bstar=u}distance(e){const r=this.jstar-e.jstar,n=this.astar-e.astar,a=this.bstar-e.bstar,o=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(o,.63)}static fromInt(e){return L.fromIntInViewingConditions(e,q.DEFAULT)}static fromIntInViewingConditions(e,r){const n=(e&16711680)>>16,a=(e&65280)>>8,o=e&255,c=W(n),i=W(a),f=W(o),u=.41233895*c+.35762064*i+.18051042*f,l=.2126*c+.7152*i+.0722*f,p=.01932141*c+.11916382*i+.95034478*f,d=.401288*u+.650173*l-.051461*p,M=-.250268*u+1.204414*l+.045854*p,g=-.002079*u+.048952*l+.953127*p,b=r.rgbD[0]*d,C=r.rgbD[1]*M,T=r.rgbD[2]*g,I=Math.pow(r.fl*Math.abs(b)/100,.42),P=Math.pow(r.fl*Math.abs(C)/100,.42),N=Math.pow(r.fl*Math.abs(T)/100,.42),k=$(b)*400*I/(I+27.13),B=$(C)*400*P/(P+27.13),D=$(T)*400*N/(N+27.13),A=(11*k+-12*B+D)/11,x=(k+B-2*D)/9,w=(20*k+20*B+21*D)/20,j=(40*k+20*B+D)/20,U=Math.atan2(x,A)*180/Math.PI,z=U<0?U+360:U>=360?U-360:U,tt=z*Math.PI/180,et=j*r.nbb,J=100*Math.pow(et/r.aw,r.c*r.z),rt=4/r.c*Math.sqrt(J/100)*(r.aw+4)*r.fLRoot,ot=z<20.14?z+360:z,st=.25*(Math.cos(ot*Math.PI/180+2)+3.8),it=5e4/13*st*r.nc*r.ncb*Math.sqrt(A*A+x*x)/(w+.305),nt=Math.pow(it,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),yt=nt*Math.sqrt(J/100),bt=yt*r.fLRoot,At=50*Math.sqrt(nt*r.c/(r.aw+4)),Bt=(1+100*.007)*J/(1+.007*J),kt=1/.0228*Math.log(1+.0228*bt),Ot=kt*Math.cos(tt),Lt=kt*Math.sin(tt);return new L(z,yt,J,rt,bt,At,Bt,Ot,Lt)}static fromJch(e,r,n){return L.fromJchInViewingConditions(e,r,n,q.DEFAULT)}static fromJchInViewingConditions(e,r,n,a){const o=4/a.c*Math.sqrt(e/100)*(a.aw+4)*a.fLRoot,c=r*a.fLRoot,i=r/Math.sqrt(e/100),f=50*Math.sqrt(i*a.c/(a.aw+4)),u=n*Math.PI/180,l=(1+100*.007)*e/(1+.007*e),p=1/.0228*Math.log(1+.0228*c),d=p*Math.cos(u),M=p*Math.sin(u);return new L(n,r,e,o,c,f,l,d,M)}static fromUcs(e,r,n){return L.fromUcsInViewingConditions(e,r,n,q.DEFAULT)}static fromUcsInViewingConditions(e,r,n,a){const o=r,c=n,i=Math.sqrt(o*o+c*c),u=(Math.exp(i*.0228)-1)/.0228/a.fLRoot;let l=Math.atan2(c,o)*(180/Math.PI);l<0&&(l+=360);const p=e/(1-(e-100)*.007);return L.fromJchInViewingConditions(p,u,l,a)}toInt(){return this.viewed(q.DEFAULT)}viewed(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),c=e.aw*Math.pow(this.j/100,1/e.c/e.z),i=o*(5e4/13)*e.nc*e.ncb,f=c/e.nbb,u=Math.sin(a),l=Math.cos(a),p=23*(f+.305)*n/(23*i+11*n*l+108*n*u),d=p*l,M=p*u,g=(460*f+451*d+288*M)/1403,b=(460*f-891*d-261*M)/1403,C=(460*f-220*d-6300*M)/1403,T=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),I=$(g)*(100/e.fl)*Math.pow(T,1/.42),P=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),N=$(b)*(100/e.fl)*Math.pow(P,1/.42),k=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),B=$(C)*(100/e.fl)*Math.pow(k,1/.42),D=I/e.rgbD[0],A=N/e.rgbD[1],x=B/e.rgbD[2],w=1.86206786*D-1.01125463*A+.14918677*x,j=.38752654*D+.62144744*A-.00897398*x,G=-.0158415*D-.03412294*A+1.04996444*x;return qt(w,j,G)}static fromXyzInViewingConditions(e,r,n,a){const o=.401288*e+.650173*r-.051461*n,c=-.250268*e+1.204414*r+.045854*n,i=-.002079*e+.048952*r+.953127*n,f=a.rgbD[0]*o,u=a.rgbD[1]*c,l=a.rgbD[2]*i,p=Math.pow(a.fl*Math.abs(f)/100,.42),d=Math.pow(a.fl*Math.abs(u)/100,.42),M=Math.pow(a.fl*Math.abs(l)/100,.42),g=$(f)*400*p/(p+27.13),b=$(u)*400*d/(d+27.13),C=$(l)*400*M/(M+27.13),T=(11*g+-12*b+C)/11,I=(g+b-2*C)/9,P=(20*g+20*b+21*C)/20,N=(40*g+20*b+C)/20,B=Math.atan2(I,T)*180/Math.PI,D=B<0?B+360:B>=360?B-360:B,A=D*Math.PI/180,x=N*a.nbb,w=100*Math.pow(x/a.aw,a.c*a.z),j=4/a.c*Math.sqrt(w/100)*(a.aw+4)*a.fLRoot,G=D<20.14?D+360:D,U=1/4*(Math.cos(G*Math.PI/180+2)+3.8),tt=5e4/13*U*a.nc*a.ncb*Math.sqrt(T*T+I*I)/(P+.305),et=Math.pow(tt,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),J=et*Math.sqrt(w/100),rt=J*a.fLRoot,ot=50*Math.sqrt(et*a.c/(a.aw+4)),st=(1+100*.007)*w/(1+.007*w),ct=Math.log(1+.0228*rt)/.0228,it=ct*Math.cos(A),nt=ct*Math.sin(A);return new L(D,J,w,j,rt,ot,st,it,nt)}xyzInViewingConditions(e){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),c=e.aw*Math.pow(this.j/100,1/e.c/e.z),i=o*(5e4/13)*e.nc*e.ncb,f=c/e.nbb,u=Math.sin(a),l=Math.cos(a),p=23*(f+.305)*n/(23*i+11*n*l+108*n*u),d=p*l,M=p*u,g=(460*f+451*d+288*M)/1403,b=(460*f-891*d-261*M)/1403,C=(460*f-220*d-6300*M)/1403,T=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),I=$(g)*(100/e.fl)*Math.pow(T,1/.42),P=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),N=$(b)*(100/e.fl)*Math.pow(P,1/.42),k=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),B=$(C)*(100/e.fl)*Math.pow(k,1/.42),D=I/e.rgbD[0],A=N/e.rgbD[1],x=B/e.rgbD[2],w=1.86206786*D-1.01125463*A+.14918677*x,j=.38752654*D+.62144744*A-.00897398*x,G=-.0158415*D-.03412294*A+1.04996444*x;return[w,j,G]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{static sanitizeRadians(e){return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){const r=e/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(e){const r=Math.pow(Math.abs(e),.42);return $(e)*400*r/(r+27.13)}static hueOf(e){const r=ut(e,m.SCALED_DISCOUNT_FROM_LINRGB),n=m.chromaticAdaptation(r[0]),a=m.chromaticAdaptation(r[1]),o=m.chromaticAdaptation(r[2]),c=(11*n+-12*a+o)/11,i=(n+a-2*o)/9;return Math.atan2(i,c)}static areInCyclicOrder(e,r,n){const a=m.sanitizeRadians(r-e),o=m.sanitizeRadians(n-e);return a<o}static intercept(e,r,n){return(r-e)/(n-e)}static lerpPoint(e,r,n){return[e[0]+(n[0]-e[0])*r,e[1]+(n[1]-e[1])*r,e[2]+(n[2]-e[2])*r]}static setCoordinate(e,r,n,a){const o=m.intercept(e[a],r,n[a]);return m.lerpPoint(e,o,n)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,r){const n=m.Y_FROM_LINRGB[0],a=m.Y_FROM_LINRGB[1],o=m.Y_FROM_LINRGB[2],c=r%4<=1?0:100,i=r%2===0?0:100;if(r<4){const f=c,u=i,l=(e-f*a-u*o)/n;return m.isBounded(l)?[l,f,u]:[-1,-1,-1]}else if(r<8){const f=c,u=i,l=(e-u*n-f*o)/a;return m.isBounded(l)?[u,l,f]:[-1,-1,-1]}else{const f=c,u=i,l=(e-f*n-u*a)/o;return m.isBounded(l)?[f,u,l]:[-1,-1,-1]}}static bisectToSegment(e,r){let n=[-1,-1,-1],a=n,o=0,c=0,i=!1,f=!0;for(let u=0;u<12;u++){const l=m.nthVertex(e,u);if(l[0]<0)continue;const p=m.hueOf(l);if(!i){n=l,a=l,o=p,c=p,i=!0;continue}(f||m.areInCyclicOrder(o,p,c))&&(f=!1,m.areInCyclicOrder(o,r,p)?(a=l,c=p):(n=l,o=p))}return[n,a]}static midpoint(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2,(e[2]+r[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,r){const n=m.bisectToSegment(e,r);let a=n[0],o=m.hueOf(a),c=n[1];for(let i=0;i<3;i++)if(a[i]!==c[i]){let f=-1,u=255;a[i]<c[i]?(f=m.criticalPlaneBelow(m.trueDelinearized(a[i])),u=m.criticalPlaneAbove(m.trueDelinearized(c[i]))):(f=m.criticalPlaneAbove(m.trueDelinearized(a[i])),u=m.criticalPlaneBelow(m.trueDelinearized(c[i])));for(let l=0;l<8&&!(Math.abs(u-f)<=1);l++){const p=Math.floor((f+u)/2),d=m.CRITICAL_PLANES[p],M=m.setCoordinate(a,d,c,i),g=m.hueOf(M);m.areInCyclicOrder(o,r,g)?(c=M,u=p):(a=M,o=g,f=p)}}return m.midpoint(a,c)}static inverseChromaticAdaptation(e){const r=Math.abs(e),n=Math.max(0,27.13*r/(400-r));return $(e)*Math.pow(n,1/.42)}static findResultByJ(e,r,n){let a=Math.sqrt(n)*11;const o=q.DEFAULT,c=1/Math.pow(1.64-Math.pow(.29,o.n),.73),f=.25*(Math.cos(e+2)+3.8)*(5e4/13)*o.nc*o.ncb,u=Math.sin(e),l=Math.cos(e);for(let p=0;p<5;p++){const d=a/100,M=r===0||a===0?0:r/Math.sqrt(d),g=Math.pow(M*c,1/.9),C=o.aw*Math.pow(d,1/o.c/o.z)/o.nbb,T=23*(C+.305)*g/(23*f+11*g*l+108*g*u),I=T*l,P=T*u,N=(460*C+451*I+288*P)/1403,k=(460*C-891*I-261*P)/1403,B=(460*C-220*I-6300*P)/1403,D=m.inverseChromaticAdaptation(N),A=m.inverseChromaticAdaptation(k),x=m.inverseChromaticAdaptation(B),w=ut([D,A,x],m.LINRGB_FROM_SCALED_DISCOUNT);if(w[0]<0||w[1]<0||w[2]<0)return 0;const j=m.Y_FROM_LINRGB[0],G=m.Y_FROM_LINRGB[1],U=m.Y_FROM_LINRGB[2],z=j*w[0]+G*w[1]+U*w[2];if(z<=0)return 0;if(p===4||Math.abs(z-n)<.002)return w[0]>100.01||w[1]>100.01||w[2]>100.01?0:Mt(w);a=a-(z-n)*a/(2*z)}return 0}static solveToInt(e,r,n){if(r<1e-4||n<1e-4||n>99.9999)return jt(n);e=ft(e);const a=e/180*Math.PI,o=H(n),c=m.findResultByJ(a,r,o);if(c!==0)return c;const i=m.bisectToLimit(o,a);return Mt(i)}static solveToCam(e,r,n){return L.fromInt(m.solveToInt(e,r,n))}}m.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];m.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];m.Y_FROM_LINRGB=[.2126,.7152,.0722];m.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static from(e,r,n){return new R(m.solveToInt(e,r,n))}static fromInt(e){return new R(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(m.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(m.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(m.solveToInt(this.internalHue,this.internalChroma,e))}constructor(e){this.argb=e;const r=L.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=lt(e),this.argb=e}setInternalState(e){const r=L.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=lt(e),this.argb=e}inViewingConditions(e){const n=L.fromInt(this.toInt()).xyzInViewingConditions(e),a=L.fromXyzInViewingConditions(n[0],n[1],n[2],q.make());return R.from(a.hue,a.chroma,ht(n[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static harmonize(e,r){const n=R.fromInt(e),a=R.fromInt(r),o=Nt(n.hue,a.hue),c=Math.min(o*.5,15),i=ft(n.hue+c*Et(n.hue,a.hue));return R.from(i,n.chroma,n.tone).toInt()}static hctHue(e,r,n){const a=mt.cam16Ucs(e,r,n),o=L.fromInt(a),c=L.fromInt(e);return R.from(o.hue,c.chroma,lt(e)).toInt()}static cam16Ucs(e,r,n){const a=L.fromInt(e),o=L.fromInt(r),c=a.jstar,i=a.astar,f=a.bstar,u=o.jstar,l=o.astar,p=o.bstar,d=c+(u-c)*n,M=i+(l-i)*n,g=f+(p-f)*n;return L.fromUcs(d,M,g).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static ratioOfTones(e,r){return e=at(0,100,e),r=at(0,100,r),O.ratioOfYs(H(e),H(r))}static ratioOfYs(e,r){const n=e>r?e:r,a=n===r?e:r;return(n+5)/(a+5)}static lighter(e,r){if(e<0||e>100)return-1;const n=H(e),a=r*(n+5)-5,o=O.ratioOfYs(a,n),c=Math.abs(o-r);if(o<r&&c>.04)return-1;const i=ht(a)+.4;return i<0||i>100?-1:i}static darker(e,r){if(e<0||e>100)return-1;const n=H(e),a=(n+5)/r-5,o=O.ratioOfYs(n,a),c=Math.abs(o-r);if(o<r&&c>.04)return-1;const i=ht(a)-.4;return i<0||i>100?-1:i}static lighterUnsafe(e,r){const n=O.lighter(e,r);return n<0?100:n}static darkerUnsafe(e,r){const n=O.darker(e,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static isDisliked(e){const r=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,n=Math.round(e.chroma)>16,a=Math.round(e.tone)<65;return r&&n&&a}static fixIfDisliked(e){return pt.isDisliked(e)?R.from(e.hue,e.chroma,70):e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{static fromPalette(e){var r,n;return new h((r=e.name)!=null?r:"",e.palette,e.tone,(n=e.isBackground)!=null?n:!1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}constructor(e,r,n,a,o,c,i,f){if(this.name=e,this.palette=r,this.tone=n,this.isBackground=a,this.background=o,this.secondBackground=c,this.contrastCurve=i,this.toneDeltaPair=f,this.hctCache=new Map,!o&&c)throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!o&&i)throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(o&&!i)throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(e){return this.getHct(e).toInt()}getHct(e){const r=this.hctCache.get(e);if(r!=null)return r;const n=this.getTone(e),a=this.palette(e).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,a),a}getTone(e){const r=e.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(e),a=n.roleA,o=n.roleB,c=n.delta,i=n.polarity,f=n.stayTogether,l=this.background(e).getTone(e),p=i==="nearer"||i==="lighter"&&!e.isDark||i==="darker"&&e.isDark,d=p?a:o,M=p?o:a,g=this.name===d.name,b=e.isDark?1:-1,C=d.contrastCurve.getContrast(e.contrastLevel),T=M.contrastCurve.getContrast(e.contrastLevel),I=d.tone(e);let P=O.ratioOfTones(l,I)>=C?I:h.foregroundTone(l,C);const N=M.tone(e);let k=O.ratioOfTones(l,N)>=T?N:h.foregroundTone(l,T);return r&&(P=h.foregroundTone(l,C),k=h.foregroundTone(l,T)),(k-P)*b>=c||(k=at(0,100,P+c*b),(k-P)*b>=c||(P=at(0,100,k-c*b))),50<=P&&P<60?b>0?(P=60,k=Math.max(k,P+c*b)):(P=49,k=Math.min(k,P+c*b)):50<=k&&k<60&&(f?b>0?(P=60,k=Math.max(k,P+c*b)):(P=49,k=Math.min(k,P+c*b)):b>0?k=60:k=49),g?P:k}else{let n=this.tone(e);if(this.background==null)return n;const a=this.background(e).getTone(e),o=this.contrastCurve.getContrast(e.contrastLevel);if(O.ratioOfTones(a,n)>=o||(n=h.foregroundTone(a,o)),r&&(n=h.foregroundTone(a,o)),this.isBackground&&50<=n&&n<60&&(O.ratioOfTones(49,a)>=o?n=49:n=60),this.secondBackground){const[c,i]=[this.background,this.secondBackground],[f,u]=[c(e).getTone(e),i(e).getTone(e)],[l,p]=[Math.max(f,u),Math.min(f,u)];if(O.ratioOfTones(l,n)>=o&&O.ratioOfTones(p,n)>=o)return n;const d=O.lighter(l,o),M=O.darker(p,o),g=[];return d!==-1&&g.push(d),M!==-1&&g.push(M),h.tonePrefersLightForeground(f)||h.tonePrefersLightForeground(u)?d<0?100:d:g.length===1?g[0]:M<0?0:M}return n}}static foregroundTone(e,r){const n=O.lighterUnsafe(e,r),a=O.darkerUnsafe(e,r),o=O.ratioOfTones(n,e),c=O.ratioOfTones(a,e);if(h.tonePrefersLightForeground(e)){const f=Math.abs(o-c)<.1&&o<r&&c<r;return o>=r||o>=c||f?n:a}else return c>=r||c>=o?a:n}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(e){return h.tonePrefersLightForeground(e)&&!h.toneAllowsLightForeground(e)?49:e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.MONOCHROME=0]="MONOCHROME",t[t.NEUTRAL=1]="NEUTRAL",t[t.TONAL_SPOT=2]="TONAL_SPOT",t[t.VIBRANT=3]="VIBRANT",t[t.EXPRESSIVE=4]="EXPRESSIVE",t[t.FIDELITY=5]="FIDELITY",t[t.CONTENT=6]="CONTENT",t[t.RAINBOW=7]="RAINBOW",t[t.FRUIT_SALAD=8]="FRUIT_SALAD"})(v||(v={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,r,n,a){this.low=e,this.normal=r,this.medium=n,this.high=a}getContrast(e){return e<=-1?this.low:e<0?Q(this.low,this.normal,(e- -1)/1):e<.5?Q(this.normal,this.medium,(e-0)/.5):e<1?Q(this.medium,this.high,(e-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,r,n,a,o){this.roleA=e,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=o}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t.variant===v.FIDELITY||t.variant===v.CONTENT}function F(t){return t.variant===v.MONOCHROME}function Gt(t,e,r,n){let a=r,o=R.from(t,e,r);if(o.chroma<e){let c=o.chroma;for(;o.chroma<e;){a+=n?-1:1;const i=R.from(t,e,a);if(c>i.chroma||Math.abs(i.chroma-e)<.4)break;const f=Math.abs(i.chroma-e),u=Math.abs(o.chroma-e);f<u&&(o=i),c=Math.max(c,i.chroma)}}return a}function Jt(t){return q.make(void 0,void 0,t.isDark?30:80,void 0,void 0)}function gt(t,e){const r=t.inViewingConditions(Jt(e));return h.tonePrefersLightForeground(t.tone)&&!h.toneAllowsLightForeground(r.tone)?h.enableLightForeground(t.tone):h.enableLightForeground(r.tone)}class s{static highestSurface(e){return e.isDark?s.surfaceBright:s.surfaceDim}}s.contentAccentToneDelta=15;s.primaryPaletteKeyColor=h.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone});s.secondaryPaletteKeyColor=h.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone});s.tertiaryPaletteKeyColor=h.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone});s.neutralPaletteKeyColor=h.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone});s.neutralVariantPaletteKeyColor=h.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone});s.background=h.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});s.onBackground=h.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>s.background,contrastCurve:new y(3,3,4.5,7)});s.surface=h.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});s.surfaceDim=h.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:87,isBackground:!0});s.surfaceBright=h.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?24:98,isBackground:!0});s.surfaceContainerLowest=h.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?4:100,isBackground:!0});s.surfaceContainerLow=h.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?10:96,isBackground:!0});s.surfaceContainer=h.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?12:94,isBackground:!0});s.surfaceContainerHigh=h.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?17:92,isBackground:!0});s.surfaceContainerHighest=h.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?22:90,isBackground:!0});s.onSurface=h.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>s.highestSurface(t),contrastCurve:new y(4.5,7,11,21)});s.surfaceVariant=h.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0});s.onSurfaceVariant=h.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>s.highestSurface(t),contrastCurve:new y(3,4.5,7,11)});s.inverseSurface=h.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20});s.inverseOnSurface=h.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>s.inverseSurface,contrastCurve:new y(4.5,7,11,21)});s.outline=h.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>s.highestSurface(t),contrastCurve:new y(1.5,3,4.5,7)});s.outlineVariant=h.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7)});s.shadow=h.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0});s.scrim=h.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0});s.surfaceTint=h.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0});s.primary=h.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>F(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(3,4.5,7,11),toneDeltaPair:t=>new V(s.primaryContainer,s.primary,15,"nearer",!1)});s.onPrimary=h.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>F(t)?t.isDark?10:90:t.isDark?20:100,background:t=>s.primary,contrastCurve:new y(4.5,7,11,21)});s.primaryContainer=h.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>X(t)?gt(t.sourceColorHct,t):F(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.primaryContainer,s.primary,15,"nearer",!1)});s.onPrimaryContainer=h.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>X(t)?h.foregroundTone(s.primaryContainer.tone(t),4.5):F(t)?t.isDark?0:100:t.isDark?90:10,background:t=>s.primaryContainer,contrastCurve:new y(4.5,7,11,21)});s.inversePrimary=h.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>s.inverseSurface,contrastCurve:new y(3,4.5,7,11)});s.secondary=h.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(3,4.5,7,11),toneDeltaPair:t=>new V(s.secondaryContainer,s.secondary,15,"nearer",!1)});s.onSecondary=h.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>F(t)?t.isDark?10:100:t.isDark?20:100,background:t=>s.secondary,contrastCurve:new y(4.5,7,11,21)});s.secondaryContainer=h.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{const e=t.isDark?30:90;if(F(t))return t.isDark?30:85;if(!X(t))return e;let r=Gt(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark);return r=gt(t.secondaryPalette.getHct(r),t),r},isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.secondaryContainer,s.secondary,15,"nearer",!1)});s.onSecondaryContainer=h.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>X(t)?h.foregroundTone(s.secondaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>s.secondaryContainer,contrastCurve:new y(4.5,7,11,21)});s.tertiary=h.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(3,4.5,7,11),toneDeltaPair:t=>new V(s.tertiaryContainer,s.tertiary,15,"nearer",!1)});s.onTertiary=h.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?10:90:t.isDark?20:100,background:t=>s.tertiary,contrastCurve:new y(4.5,7,11,21)});s.tertiaryContainer=h.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(F(t))return t.isDark?60:49;if(!X(t))return t.isDark?30:90;const e=gt(t.tertiaryPalette.getHct(t.sourceColorHct.tone),t),r=t.tertiaryPalette.getHct(e);return pt.fixIfDisliked(r).tone},isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.tertiaryContainer,s.tertiary,15,"nearer",!1)});s.onTertiaryContainer=h.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>F(t)?t.isDark?0:100:X(t)?h.foregroundTone(s.tertiaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>s.tertiaryContainer,contrastCurve:new y(4.5,7,11,21)});s.error=h.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(3,4.5,7,11),toneDeltaPair:t=>new V(s.errorContainer,s.error,15,"nearer",!1)});s.onError=h.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>s.error,contrastCurve:new y(4.5,7,11,21)});s.errorContainer=h.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.errorContainer,s.error,15,"nearer",!1)});s.onErrorContainer=h.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?90:10,background:t=>s.errorContainer,contrastCurve:new y(4.5,7,11,21)});s.primaryFixed=h.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>F(t)?40:90,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.primaryFixed,s.primaryFixedDim,10,"lighter",!0)});s.primaryFixedDim=h.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>F(t)?30:80,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.primaryFixed,s.primaryFixedDim,10,"lighter",!0)});s.onPrimaryFixed=h.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>F(t)?100:10,background:t=>s.primaryFixedDim,secondBackground:t=>s.primaryFixed,contrastCurve:new y(4.5,7,11,21)});s.onPrimaryFixedVariant=h.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>F(t)?90:30,background:t=>s.primaryFixedDim,secondBackground:t=>s.primaryFixed,contrastCurve:new y(3,4.5,7,11)});s.secondaryFixed=h.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>F(t)?80:90,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.secondaryFixed,s.secondaryFixedDim,10,"lighter",!0)});s.secondaryFixedDim=h.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>F(t)?70:80,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.secondaryFixed,s.secondaryFixedDim,10,"lighter",!0)});s.onSecondaryFixed=h.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>s.secondaryFixedDim,secondBackground:t=>s.secondaryFixed,contrastCurve:new y(4.5,7,11,21)});s.onSecondaryFixedVariant=h.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>F(t)?25:30,background:t=>s.secondaryFixedDim,secondBackground:t=>s.secondaryFixed,contrastCurve:new y(3,4.5,7,11)});s.tertiaryFixed=h.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>F(t)?40:90,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.tertiaryFixed,s.tertiaryFixedDim,10,"lighter",!0)});s.tertiaryFixedDim=h.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>F(t)?30:80,isBackground:!0,background:t=>s.highestSurface(t),contrastCurve:new y(1,1,3,7),toneDeltaPair:t=>new V(s.tertiaryFixed,s.tertiaryFixedDim,10,"lighter",!0)});s.onTertiaryFixed=h.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>F(t)?100:10,background:t=>s.tertiaryFixedDim,secondBackground:t=>s.tertiaryFixed,contrastCurve:new y(4.5,7,11,21)});s.onTertiaryFixedVariant=h.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>F(t)?90:30,background:t=>s.tertiaryFixedDim,secondBackground:t=>s.tertiaryFixed,contrastCurve:new y(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static fromInt(e){const r=R.fromInt(e);return E.fromHct(r)}static fromHct(e){return new E(e.hue,e.chroma,e)}static fromHueAndChroma(e,r){return new E(e,r,E.createKeyColor(e,r))}constructor(e,r,n){this.hue=e,this.chroma=r,this.keyColor=n,this.cache=new Map}static createKeyColor(e,r){let a=R.from(e,r,50),o=Math.abs(a.chroma-r);for(let c=1;c<50;c+=1){if(Math.round(r)===Math.round(a.chroma))return a;const i=R.from(e,r,50+c),f=Math.abs(i.chroma-r);f<o&&(o=f,a=i);const u=R.from(e,r,50-c),l=Math.abs(u.chroma-r);l<o&&(o=l,a=u)}return a}tone(e){let r=this.cache.get(e);return r===void 0&&(r=R.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,r)),r}getHct(e){return R.fromInt(this.tone(e))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static of(e){return new S(e,!1)}static contentOf(e){return new S(e,!0)}static fromColors(e){return S.createPaletteFromColors(!1,e)}static contentFromColors(e){return S.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,r){const n=new S(r.primary,e);if(r.secondary){const a=new S(r.secondary,e);n.a2=a.a1}if(r.tertiary){const a=new S(r.tertiary,e);n.a3=a.a1}if(r.error){const a=new S(r.error,e);n.error=a.a1}if(r.neutral){const a=new S(r.neutral,e);n.n1=a.n1}if(r.neutralVariant){const a=new S(r.neutralVariant,e);n.n2=a.n2}return n}constructor(e,r){const n=R.fromInt(e),a=n.hue,o=n.chroma;r?(this.a1=E.fromHueAndChroma(a,o),this.a2=E.fromHueAndChroma(a,o/3),this.a3=E.fromHueAndChroma(a+60,o/2),this.n1=E.fromHueAndChroma(a,Math.min(o/12,4)),this.n2=E.fromHueAndChroma(a,Math.min(o/6,8))):(this.a1=E.fromHueAndChroma(a,Math.max(48,o)),this.a2=E.fromHueAndChroma(a,16),this.a3=E.fromHueAndChroma(a+60,24),this.n1=E.fromHueAndChroma(a,4),this.n2=E.fromHueAndChroma(a,8)),this.error=E.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(e){return _.lightFromCorePalette(S.of(e))}static dark(e){return _.darkFromCorePalette(S.of(e))}static lightContent(e){return _.lightFromCorePalette(S.contentOf(e))}static darkContent(e){return _.darkFromCorePalette(S.contentOf(e))}static lightFromCorePalette(e){return new _({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),outlineVariant:e.n2.tone(80),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static darkFromCorePalette(e){return new _({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),outlineVariant:e.n2.tone(30),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){t=t.replace("#","");const e=t.length===3,r=t.length===6,n=t.length===8;if(!e&&!r&&!n)throw new Error("unexpected hex "+t);let a=0,o=0,c=0;return e?(a=Y(t.slice(0,1).repeat(2)),o=Y(t.slice(1,2).repeat(2)),c=Y(t.slice(2,3).repeat(2))):r?(a=Y(t.slice(0,2)),o=Y(t.slice(2,4)),c=Y(t.slice(4,6))):n&&(a=Y(t.slice(2,4)),o=Y(t.slice(4,6)),c=Y(t.slice(6,8))),(255<<24|(a&255)<<16|(o&255)<<8|c&255)>>>0}function Y(t){return parseInt(t,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){let r=e.value;const n=r,a=t;e.blend&&(r=mt.harmonize(n,a));const c=S.of(r).a1;return{color:e,value:r,light:{color:c.tone(40),onColor:c.tone(100),colorContainer:c.tone(90),onColorContainer:c.tone(10)},dark:{color:c.tone(80),onColor:c.tone(20),colorContainer:c.tone(30),onColorContainer:c.tone(90)}}}const Kt=["light","dark"],Tt="mdui-custom-color-scheme-";let Wt=0;const Xt=t=>{const e=Ct(t),r=Dt(t),n=It(t);return[e,r,n].join(", ")},Zt=t=>{const e=Z(t);let r=e.get().map(a=>Array.from(a.classList)).flat();r=xt(r).filter(a=>a.startsWith(Tt)),e.removeClass(r.join(" "));const n=r.filter(a=>Z(`.${a}`).length===0);Z(n.map(a=>`#${a}`).join(",")).remove()},Qt=(t,e)=>{const r=Rt(),n=Z((e==null?void 0:e.target)||r.documentElement),a={light:_.light(t).toJSON(),dark:_.dark(t).toJSON()},o=S.of(t);Object.assign(a.light,{"surface-dim":o.n1.tone(87),"surface-bright":o.n1.tone(98),"surface-container-lowest":o.n1.tone(100),"surface-container-low":o.n1.tone(96),"surface-container":o.n1.tone(94),"surface-container-high":o.n1.tone(92),"surface-container-highest":o.n1.tone(90),"surface-tint-color":a.light.primary}),Object.assign(a.dark,{"surface-dim":o.n1.tone(6),"surface-bright":o.n1.tone(24),"surface-container-lowest":o.n1.tone(4),"surface-container-low":o.n1.tone(10),"surface-container":o.n1.tone(12),"surface-container-high":o.n1.tone(17),"surface-container-highest":o.n1.tone(22),"surface-tint-color":a.dark.primary}),((e==null?void 0:e.customColors)||[]).map(u=>{const l=Pt(u.name),p=Ht(t,{name:l,value:Ft(u.value),blend:!0});Kt.forEach(d=>{a[d][l]=p[d].color,a[d][`on-${l}`]=p[d].onColor,a[d][`${l}-container`]=p[d].colorContainer,a[d][`on-${l}-container`]=p[d].onColorContainer})});const c=(u,l)=>Object.entries(a[u]).map(([p,d])=>l(Pt(p),Xt(d))).join(""),i=Tt+`${t}-${Wt++}`,f=`.${i} {
  ${c("light",(u,l)=>`--mdui-color-${u}-light: ${l};`)}
  ${c("dark",(u,l)=>`--mdui-color-${u}-dark: ${l};`)}
  ${c("light",u=>`--mdui-color-${u}: var(--mdui-color-${u}-light);`)}

  color: rgb(var(--mdui-color-on-background));
  background-color: rgb(var(--mdui-color-background));
}

.mdui-theme-dark .${i},
.mdui-theme-dark.${i} {
  ${c("dark",u=>`--mdui-color-${u}: var(--mdui-color-${u}-dark);`)}
}

@media (prefers-color-scheme: dark) {
  .mdui-theme-auto .${i},
  .mdui-theme-auto.${i} {
    ${c("dark",u=>`--mdui-color-${u}: var(--mdui-color-${u}-dark);`)}
  }
}`;Zt(n),Z(r.head).append(`<style id="${i}">${f}</style>`),n.addClass(i)},vt=(t,e)=>{const r=Ft(t);Qt(r,e)};function te(){const t=document.querySelector("input[name=ColorScheme]"),e=document.querySelector("input[name=ColorSchemeCSS]"),r=t.value;if(!/^#[0-9a-f]{6}$/i.test(r)){e.value="";return}vt(r,{target:"#matecho-theme-handler"});const n=document.querySelector("style[id^=mdui-custom-color-scheme-]");if(!n)throw Error("Color scheme style not found.");const a=n.id,o=n.innerText.replaceAll("."+a,".matecho-theme-scheme");e.value=o}document.addEventListener("DOMContentLoaded",()=>{var t;(t=document.querySelector("form"))==null||t.addEventListener("submit",te)});
