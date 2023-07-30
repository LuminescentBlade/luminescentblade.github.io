"use strict";(self.webpackChunkLuminescentBlade=self.webpackChunkLuminescentBlade||[]).push([[657],{9657:(Re,L,g)=>{g.r(L),g.d(L,{ART_FEATURE_KEY:()=>T,ArtModule:()=>je,MainComponent:()=>Y,artReducer:()=>D,artRoutes:()=>U,getFilteredArt:()=>J,getRenderOrder:()=>R,getUnfilteredRenderOrder:()=>$,initArt:()=>x,initialArtState:()=>H,loadArtFailure:()=>k,loadArtSuccess:()=>I,selectArt:()=>A,selectArtError:()=>se,selectArtLoaded:()=>ie,selectArtState:()=>_,selectFilters:()=>B,selectGroups:()=>S,selectTagConfig:()=>z,selectTags:()=>Z});var p=g(4221),w="NOT_FOUND",te=function(r,t){return r===t};function re(n,r){var t="object"==typeof r?r:{equalityCheck:r},a=t.equalityCheck,i=t.maxSize,c=void 0===i?1:i,s=t.resultEqualityCheck,l=function ne(n){return function(t,a){if(null===t||null===a||t.length!==a.length)return!1;for(var o=t.length,i=0;i<o;i++)if(!n(t[i],a[i]))return!1;return!0}}(void 0===a?te:a),u=1===c?function V(n){var r;return{get:function(a){return r&&n(r.key,a)?r.value:w},put:function(a,o){r={key:a,value:o}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(l):function ee(n,r){var t=[];function a(s){var l=t.findIndex(function(d){return r(s,d.key)});if(l>-1){var u=t[l];return l>0&&(t.splice(l,1),t.unshift(u)),u.value}return w}return{get:a,put:function o(s,l){a(s)===w&&(t.unshift({key:s,value:l}),t.length>n&&t.pop())},getEntries:function i(){return t},clear:function c(){t=[]}}}(c,l);function d(){var y=u.get(arguments);if(y===w){if(y=n.apply(null,arguments),s){var b=u.getEntries().find(function(C){return s(C.value,y)});b&&(y=b.value)}u.put(arguments,y)}return y}return d.clearCache=function(){return u.clear()},d}function oe(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];return function(){for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];var d,u=0,y={memoizeOptions:void 0},h=s.pop();if("object"==typeof h&&(y=h,h=s.pop()),"function"!=typeof h)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var C=y.memoizeOptions,P=void 0===C?t:C,$e=Array.isArray(P)?P:[P],F=function ae(n){var r=Array.isArray(n[0])?n[0]:n;if(!r.every(function(a){return"function"==typeof a})){var t=r.map(function(a){return"function"==typeof a?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return r}(s),q=n.apply(void 0,[function(){return u++,h.apply(null,arguments)}].concat($e)),W=n(function(){for(var X=[],Je=F.length,N=0;N<Je;N++)X.push(F[N].apply(null,arguments));return d=q.apply(null,X)});return Object.assign(W,{resultFunc:h,memoizedResultFunc:q,dependencies:F,lastResult:function(){return d},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),W}}var m=oe(re);const x=(0,p.PH)("[Art Page] Init"),I=(0,p.PH)("[Art/API] Load Art Success",(0,p.Ky)()),k=(0,p.PH)("[Art/API] Load Art Failure",(0,p.Ky)()),T="art",H={loaded:!1,filters:{tags:[]},art:{},groups:{},tags:{}},le=(0,p.Lq)(H,(0,p.on)(x,n=>({...n,loaded:!1,error:null})),(0,p.on)(I,(n,{art:r,groups:t})=>({...n,loaded:!0,art:r,groups:t})),(0,p.on)(k,(n,{error:r})=>({...n,error:r})));function D(n,r){return le(n,r)}const _=(0,p.ZF)(T),ie=m(_,n=>n.loaded),se=m(_,n=>n.error),A=m(_,n=>n.art),S=m(_,n=>n.groups),z=m(_,n=>n.tags),Z=m(z,n=>Object.entries(n).map(([r,t])=>({name:r,count:t.count}))),B=m(_,n=>n.filters),j=m(B,n=>n.tags.length>0),$=m(A,S,(n,r)=>{const t=[],a=new Set;return Object.values(n).forEach(o=>{if(o.group){const i=o.group.id,c=r[i];a.has(i)||(t.push({id:i,url:n[c.pieces[0]].thumbnail||n[c.pieces[0]].url,isGroup:!0}),a.add(i))}else t.push({id:o.id,url:o.thumbnail||o.url,isGroup:!1})}),function ce(n,r,t){return n.sort((a,o)=>{const i=l=>(l.isGroup?r[t[l.id].pieces[0]].year:r[l.id].year)||0,c=i(a);return i(o)-c})}(t,n,r)}),J=m(j,n=>[]),R=m(j,$,J,(n,r,t)=>n?t:r);var f=g(6814),v=g(9945),e=g(5879);function ue(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"a",4),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(2),c=i.$implicit,s=i.index,l=e.oxw();return e.KtG(l.selectItem.emit({$event:o,item:c,index:s}))}),e._UZ(2,"img"),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.uIk("href",t.routePath,e.LSH)("aria-label",t.actionText),e.xp6(1),e.uIk("src",t.url,e.LSH)}}const de=function(n){return[n]};function ge(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",5),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(2),c=i.$implicit,s=i.index,l=e.oxw();return e.KtG(l.selectItem.emit({$event:o,item:c,index:s}))}),e._UZ(1,"img"),e.qZA()}if(2&n){const t=e.oxw(2).$implicit;e.Q6J("routerLink",e.VKq(3,de,t.routePath)),e.uIk("aria-label",t.actionText),e.xp6(1),e.uIk("src",t.url,e.LSH)}}function pe(n,r){if(1&n&&(e.ynx(0),e.YNc(1,ue,3,3,"ng-container",1),e.YNc(2,ge,2,5,"ng-template",null,3,e.W1O),e.BQk()),2&n){const t=e.MAs(3),a=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",a.external)("ngIfElse",t)}}function me(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(o){e.CHM(t);const i=e.oxw(),c=i.$implicit,s=i.index,l=e.oxw();return e.KtG(l.selectItem.emit({$event:o,item:c,index:s}))}),e._UZ(1,"img"),e.qZA()}if(2&n){const t=e.oxw().$implicit;e.uIk("aria-label",t.actionText),e.xp6(1),e.uIk("src",t.url,e.LSH)}}function ye(n,r){if(1&n&&(e.ynx(0),e.YNc(1,pe,4,2,"ng-container",1),e.YNc(2,me,2,2,"ng-template",null,2,e.W1O),e.BQk()),2&n){const t=r.$implicit,a=e.MAs(3);e.xp6(1),e.Q6J("ngIf",t.routePath)("ngIfElse",a)}}let he=(()=>{class n{constructor(){this.items=[],this.selectItem=new e.vpe}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["lib-gallery-layout"]],inputs:{items:"items"},outputs:{selectItem:"selectItem"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["button",""],["internal",""],["target","_blank",1,"lib-gallery-layout__link","lib-gallery-layout__item",3,"click"],["routerLinkActive","lib-gallery-layout__link--active",1,"lib-gallery-layout__link","lib-gallery-layout__item",3,"routerLink","click"],[1,"lib-gallery-layout__button","lib-gallery-layout__item",3,"click"]],template:function(t,a){1&t&&e.YNc(0,ye,4,2,"ng-container",0),2&t&&e.Q6J("ngForOf",a.items)},dependencies:[f.sg,f.O5,v.rH,v.Od],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(var(--lb-gallery-item-min-size, 150px),1fr));justify-content:space-evenly;gap:var(--lb-gallery-item-gap, 12px)}.lib-gallery-layout__item[_ngcontent-%COMP%]{position:relative;display:flex;aspect-ratio:1/1;cursor:pointer;border:var(--lb-gallery-layout-icon-border, 1px solid var(--lb-gallery-layout-icon-border-color, white));border-radius:var(--lb-gallery-layout-border-radius, 0)}.lib-gallery-layout__item[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;mix-blend-mode:var(--lb-gallery-item-hover-blend, overlay);background-color:var(--lb-gallery-item-hover-color, white);transition:opacity .3s ease-in-out}.lib-gallery-layout__item[_ngcontent-%COMP%]:hover{border-color:var(--lb-gallery-layout-icon-border-hover, white)}.lib-gallery-layout__item[_ngcontent-%COMP%]:hover:before{opacity:.7}.lib-gallery-layout__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}'],changeDetection:0}),n})();var G=g(590);let fe=(()=>{class n{constructor(){}setup(t){return new _e(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class _e{constructor(r){this.data=r,this.focusableElementString="a[href], button:not([disabled]), [tabindex='0']",this.eventCache={tabEvent:null},this.baseElement=r.baseElement,this.focusTrapParents=r.focusTrapElements,this.init()}init(){document.body.classList.add("overlay-visible"),this.setFocusableElements();const r=this.getTentativeDefaultFocusElement();this.setDefaultFocusElement(r),this.defaultFocusElement.focus(),this.eventCache.tabEvent=this.onTab.bind(this),this.baseElement.nativeElement.addEventListener("keydown",this.eventCache.tabEvent)}updateFocusableElements(){this.setFocusableElements(),this.setDefaultFocusElement(this.defaultFocusElement),this.hasLastFocusElement()||this.defaultFocusElement.focus()}onTab(r){if("Tab"!==r.key)return;let t;if(this.focusableElements.length){if(this.hasLastFocusElement()){const a=this.focusableElements[0],o=this.focusableElements[this.focusableElements.length-1];r.shiftKey&&document.activeElement===a?t=o:!r.shiftKey&&document.activeElement===o&&(t=a)}}else t=this.defaultFocusElement;t&&(r.preventDefault(),setTimeout(()=>{t.focus()},0))}teardown(){document.body.classList.remove("overlay-visible"),this.baseElement.nativeElement.removeEventListener("keydown",this.eventCache.tabEvent)}getTentativeDefaultFocusElement(){let r;return r=this.data.focusElement?this.data.focusElement:this.data.focusElementSelector&&this.data.baseElement.nativeElement.querySelector(this.data.focusElementSelector)||this.baseElement.nativeElement,r}setFocusableElements(){this.focusableElements=this.focusTrapParents.reduce((r,t)=>{t.nativeElement.matches(this.focusableElementString)&&r.push(t.nativeElement);const a=Array.from(t.nativeElement.querySelectorAll(this.focusableElementString));return r.concat(a)},[]),this.focusableElementSet=new Set(this.focusableElements)}setDefaultFocusElement(r){if(r.matches(this.focusableElementString))this.defaultFocusElement=r;else{if(!this.focusableElements.length)throw new Error("no focusable elements within this modal!");this.defaultFocusElement=this.focusableElements[0]}}hasLastFocusElement(){return this.focusableElementSet.has(document.activeElement)}}var ve=g(5411),Q=g(5597);const be=["defaultFocus"];function we(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onGoPrevious())}),e._UZ(1,"fa-icon",3),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faArrowLeft)}}function xe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onGoNext())}),e._UZ(1,"fa-icon",3),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faArrowRight)}}const Oe=["*"];let Ce=(()=>{class n{escape(){this.closeOverlay.emit()}goPrev(){this.enablePrevious&&this.onGoPrevious()}goNext(){this.enableNext&&this.onGoNext()}constructor(t,a){this.element=t,this.overlay=a,this.enablePrevious=!1,this.enableNext=!1,this.previous=new e.vpe,this.next=new e.vpe,this.closeOverlay=new e.vpe,this.baseClass=!0,this.faClose=G.YIN,this.faArrowLeft=G.acZ,this.faArrowRight=G.eFW}ngAfterViewInit(){this.defaultFocusElement=this.inputFocusElement||this.backupFocusDefault.nativeElement,this.overlayData=this.overlay.setup({baseElement:this.element,focusTrapElements:[this.element],focusElement:this.defaultFocusElement})}ngOnChanges(t){(t.enablePrevious||t.enableNext)&&setTimeout(()=>{this.overlayData?.updateFocusableElements()},0)}ngOnDestroy(){this.overlayData.teardown()}onGoPrevious(){this.previous.emit(),this.defaultFocusElement.focus()}onGoNext(){this.next.emit(),this.defaultFocusElement.focus()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(fe))},n.\u0275cmp=e.Xpm({type:n,selectors:[["lib-gallery-overlay"]],viewQuery:function(t,a){if(1&t&&e.Gf(be,5),2&t){let o;e.iGM(o=e.CRH())&&(a.backupFocusDefault=o.first)}},hostVars:2,hostBindings:function(t,a){1&t&&e.NdJ("keydown.escape",function(){return a.escape()},!1,e.evT)("keydown.arrowleft",function(){return a.goPrev()},!1,e.evT)("keydown.arrowright",function(){return a.goNext()},!1,e.evT),2&t&&e.ekj("lib-gallery-overlay",a.baseClass)},inputs:{enablePrevious:"enablePrevious",enableNext:"enableNext",inputFocusElement:"inputFocusElement"},outputs:{previous:"previous",next:"next",closeOverlay:"closeOverlay"},features:[e.TTD],ngContentSelectors:Oe,decls:7,vars:4,consts:[["aria-hidden","true",1,"lib-gallery-overlay__backdrop",3,"show","click"],["aria-label","close gallery",1,"lib-gallery-overlay__exit",3,"click"],["defaultFocus",""],["aria-hidden","true",3,"icon"],["class","lib-gallery-overlay__navigation lib-gallery-overlay__prev","aria-label","previous",3,"click",4,"ngIf"],["class","lib-gallery-overlay__navigation lib-gallery-overlay__next","aria-label","next",3,"click",4,"ngIf"],["aria-label","previous",1,"lib-gallery-overlay__navigation","lib-gallery-overlay__prev",3,"click"],["aria-label","next",1,"lib-gallery-overlay__navigation","lib-gallery-overlay__next",3,"click"]],template:function(t,a){1&t&&(e.F$t(),e.TgZ(0,"lib-overlay",0),e.NdJ("click",function(){return a.closeOverlay.emit()}),e.qZA(),e.TgZ(1,"button",1,2),e.NdJ("click",function(){return a.closeOverlay.emit()}),e._UZ(3,"fa-icon",3),e.qZA(),e.YNc(4,we,2,1,"button",4),e.Hsn(5),e.YNc(6,xe,2,1,"button",5)),2&t&&(e.Q6J("show",!0),e.xp6(3),e.Q6J("icon",a.faClose),e.xp6(1),e.Q6J("ngIf",a.enablePrevious),e.xp6(2),e.Q6J("ngIf",a.enableNext))},dependencies:[f.O5,ve.B,Q.BN],styles:["[_nghost-%COMP%]{--lb-gallery-arrow-margin: 16px;--lb-gallery-default-icon-size: 2.4rem;position:fixed;display:flex;height:100%;width:100%;top:0;left:0;z-index:100;padding:var(--lb-gallery-padding-size, 64px)}.lib-gallery-overlay__backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1}.lib-gallery-overlay__display[_ngcontent-%COMP%]{margin:auto;padding:0;position:relative}.lib-gallery-overlay__exit[_ngcontent-%COMP%], .lib-gallery-overlay__navigation[_ngcontent-%COMP%]{position:absolute;color:var(--lb-gallery-icon-base, white);font-size:var(--lb-gallery-default-icon-size);display:flex;align-items:center;justify-content:center}.lib-gallery-overlay__exit[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .lib-gallery-overlay__navigation[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{transition:color .2s}.lib-gallery-overlay__exit[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .lib-gallery-overlay__exit[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, .lib-gallery-overlay__exit[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:active, .lib-gallery-overlay__navigation[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .lib-gallery-overlay__navigation[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, .lib-gallery-overlay__navigation[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:active{color:var(--lb-gallery-icon-hover, gray)}.lib-gallery-overlay__exit[_ngcontent-%COMP%]{top:var(--lb-gallery-arrow-margin);right:var(--lb-gallery-arrow-margin)}.lib-gallery-overlay__navigation[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);z-index:2}.lib-gallery-overlay__info[_ngcontent-%COMP%]{margin:8px auto;display:flex;align-items:center;justify-content:center}.lib-gallery-overlay__info-button[_ngcontent-%COMP%]{margin-left:6px}.lib-gallery-overlay__prev[_ngcontent-%COMP%]{left:var(--lb-gallery-arrow-margin)}.lib-gallery-overlay__next[_ngcontent-%COMP%]{right:var(--lb-gallery-arrow-margin)}.lib-gallery-overlay__next[_ngcontent-%COMP%]   .lb-icon__arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}@media screen and (max-width: 768px){[_nghost-%COMP%]{--lb-gallery-arrow-margin: 14px;--lb-gallery-default-icon-size: 3.6rem;padding:0}.lib-gallery-overlay__display[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100vw}.lib-gallery-overlay__exit[_ngcontent-%COMP%], .lib-gallery-overlay__navigation[_ngcontent-%COMP%]{box-sizing:content-box;padding:4px;border-radius:50%;background-color:#000000b3;width:var(--lb-gallery-default-icon-size);height:var(--lb-gallery-default-icon-size);box-shadow:-1px 2px 5px 1px #0000004d}.lib-gallery-overlay__exit[_ngcontent-%COMP%]{top:var(--lb-gallery-arrow-margin);right:var(--lb-gallery-arrow-margin)}.lib-gallery-overlay__prev[_ngcontent-%COMP%]{left:var(--lb-gallery-arrow-margin)}.lib-gallery-overlay__next[_ngcontent-%COMP%]{right:var(--lb-gallery-arrow-margin)}}"],changeDetection:0}),n})();const Ee=function(){return["/art"]};let Ie=(()=>{class n{constructor(){this.displayItems=null,this.group=null,this.closeOverlay=new e.vpe,this.previous=new e.vpe,this.next=new e.vpe,this.currentItemIndex=0}onClose(){this.currentItemIndex=0,this.closeOverlay.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["lbart-gallery-display"]],inputs:{displayItems:"displayItems",group:"group",enablePrevious:"enablePrevious",enableNext:"enableNext"},outputs:{closeOverlay:"closeOverlay",previous:"previous",next:"next"},decls:4,vars:7,consts:[[3,"enableNext","enablePrevious","inputFocusElement","next","previous","closeOverlay"],[1,"lbart-gallery-display__art-link",3,"routerLink"],["art",""],["aria-live","assertive",1,"lbart-gallery-display__art"]],template:function(t,a){if(1&t&&(e.TgZ(0,"lib-gallery-overlay",0),e.NdJ("next",function(){return a.next.emit()})("previous",function(){return a.previous.emit()})("closeOverlay",function(){return a.closeOverlay.emit()}),e.TgZ(1,"a",1,2),e._UZ(3,"img",3),e.qZA()()),2&t){const o=e.MAs(2);e.Q6J("enableNext",a.enableNext)("enablePrevious",a.enablePrevious)("inputFocusElement",o),e.xp6(1),e.Q6J("routerLink",e.DdM(6,Ee)),e.xp6(2),e.uIk("src",a.displayItems[a.currentItemIndex].url,e.LSH)("alt",a.displayItems[a.currentItemIndex].altText)}},dependencies:[v.rH,Ce],styles:["[_nghost-%COMP%]{--lb-gallery-padding-size: 64px;--lb-gallery-icon-base: white;--lb-gallery-icon-hover: var(--lb-theme-icon-hover)}.lbart-gallery-display__art-link[_ngcontent-%COMP%]{margin:auto;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.lbart-gallery-display__art[_ngcontent-%COMP%]{max-width:calc(100vw - 2 * var(--lb-gallery-padding-size));max-height:calc(100vh - 2 * var(--lb-gallery-padding-size))}@media screen and (max-width: 768px){.lbart-gallery-display__art[_ngcontent-%COMP%]{max-width:100%;max-height:100%}}"],changeDetection:0}),n})();function ke(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"lbart-gallery-display",4),e.NdJ("closeOverlay",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.closeOverlay())})("next",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.selectItemByIndex(o.selectedIndex+1))})("previous",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.selectItemByIndex(o.selectedIndex-1))}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("displayItems",t.selectedItems)("group",t.selectedGroup)("enablePrevious",t.enablePrevious)("enableNext",t.enableNext)}}function Te(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"lib-gallery-layout",2),e.NdJ("selectItem",function(o){e.CHM(t);const i=e.oxw();return e.KtG(i.selectItem(o))}),e.qZA(),e.YNc(2,ke,1,4,"lbart-gallery-display",3),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("items",t.renderOrder),e.xp6(1),e.Q6J("ngIf",t.selectedItems)}}function Ae(n,r){1&n&&e._uU(0," Loading...\n")}let Se=(()=>{class n{constructor(){this.filter=new e.vpe,this.selectedIndex=-1,this.enablePrevious=!1,this.enableNext=!1}selectItem(t){t.$event.preventDefault(),t.$event.stopPropagation(),this.selectItemByIndex(t.index)}closeOverlay(){this.selectedGroup=null,this.selectedItems=null,this.selectedIndex=-1}selectItemByIndex(t){this.selectedIndex=t;const a=this.renderOrder[t];a.isGroup?(this.selectedGroup=this.groupStore[a.id],this.selectedItems=this.selectedGroup.pieces.map(o=>this.artStore[o])):this.selectedItems=[this.artStore[a.id]],this.enableNext=t<this.renderOrder.length-1,this.enablePrevious=t>0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["lbart-gallery"]],inputs:{artStore:"artStore",groupStore:"groupStore",renderOrder:"renderOrder",tags:"tags"},outputs:{filter:"filter"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"items","selectItem"],[3,"displayItems","group","enablePrevious","enableNext","closeOverlay","next","previous",4,"ngIf"],[3,"displayItems","group","enablePrevious","enableNext","closeOverlay","next","previous"]],template:function(t,a){if(1&t&&(e.YNc(0,Te,3,2,"ng-container",0),e.YNc(1,Ae,1,0,"ng-template",null,1,e.W1O)),2&t){const o=e.MAs(2);e.Q6J("ngIf",a.artStore&&a.groupStore&&a.renderOrder&&a.tags)("ngIfElse",o)}},dependencies:[f.O5,he,Ie],changeDetection:0}),n})(),Y=(()=>{class n{constructor(t){this.store=t,t.dispatch(x()),this.renderOrder$=t.select(R),this.art$=t.select(A),this.group$=t.select(S),this.tags$=t.select(Z)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["lbart-main"]],decls:5,vars:12,consts:[[3,"artStore","groupStore","renderOrder","tags"]],template:function(t,a){1&t&&(e._UZ(0,"lbart-gallery",0),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async"),e.ALo(4,"async")),2&t&&e.Q6J("artStore",e.lcZ(1,4,a.art$))("groupStore",e.lcZ(2,6,a.group$))("renderOrder",e.lcZ(3,8,a.renderOrder$))("tags",e.lcZ(4,10,a.tags$))},dependencies:[Se,f.Ov]}),n})();const U=[{path:"",pathMatch:"full",component:Y}];var O=g(7483),Ge=g(4664),K=g(2096),Me=g(6306),M=function(n){return n.Illustration="illustration",n.Design="design",n.Pixel="pixel",n}(M||{});const Ne=[{type:M.Illustration,subPath:"/illustrations",files:[{title:"Meteor Strike",id:"meteor-strike",altText:"Swordfighter woman with long black hair and blue robes doing a backflip above a fiery battlefield about to obliterate her enemy",year:2016,fileName:"ayra.png",description:"Ayra unleashing her special Meteor Sword technique on some poor schmuck."},{title:"Death From Above",id:"death-from-above",altText:"Pirate assassin jumping from a mast with wrist knife and sword to pounce on his target.",year:2013,fileName:"edward.png",description:"Drew this for an official AC Black Flag art competition and made it to the finalists."},{title:"24 Hour Judgement",id:"24-hr-judgement",altText:"Two men, one in a leather biker outfit and holding an electric guitar, the other in a sparkly idol outfit, perform a song on a well-lit stage",fileName:"24hrjudgement.png",year:2022,description:" \n        Sunao ni I love you <br/>\n        Kowase"},{title:"Shannan's Training",id:"shannans-training",altText:"A woman in a purple robe is adjusting the posture of her child nephew, who is practicing striking with a sword.",fileName:"ayrashannan.png",year:2020,description:'Drew this for <a href="https://hyphenzines.tumblr.com/master-post">Kith & Kine Zine</a> depicting Ayra correcting\n        Shannan\'s form in his training.'},{title:"Dark Blade of Od",id:"dark-blade-of-od",altText:"A brawny white haired swordsman charging foward with a spiral sword with green motion light lines and a moon in the background",fileName:"galzus.png",year:2017,description:"Drew Galzus for the FE Compendium project. Galz is one of my favorites from Thracia 776."},{title:"Hell Stew Eagles",id:"hell-stew-eagles",altText:"Black haired man on vocals, White haired woman on guitar, Ginger guy with long hair on keyboard, all in death metal outfits on a fiery stage",fileName:"hellstewbert.png",year:2023,description:'If I had a nickel for Robbie Daymond voicing one of my favorite characters from a game, <br/>\n        <a href="https://www.youtube.com/watch?v=ElVlr2MaMFo" target="_blank">Hell Stew</a>'},{title:"Carefree Saint",id:"carefree-saint",altText:"Young woman with short black hair, white clerical robes, and a blue gem necklace, as a digital painting that replicates an oil-on-canvas feel.",year:2021,fileName:"laura.png",description:"Secret Santa present for one of my good friends---Figured it'd be fun to draw one of his favorite characters like it was oil on canvas but digital."},{title:"Nj\xf6run",id:"njorun",altText:"Brown hair woman with blue robes and white armor swinging a very ornate lance in a circle in front of her.",fileName:"njorun.png",year:2020,description:"Another FE Compendium entry, this time Quan, Leif, and Altena's ancestor Nj\xf6run. I s2g Gae Bolg was the biggest pain in the ass to draw"},{title:"Beyond the River",id:"beyond-the-river",altText:"Man with magic tome riding a horse handing a sword to his sister, whom he is facing",fileName:"reinolwen.png",year:2019,description:'Did this for <a href="https://invinciblezine.gumroad.com/l/sbEnS?layout=profile" target="_blank">Invincible Zine</a> depicting\n        Rein and Olwen\'s conversation in chapter 22 of Thracia.'},{title:"Two Sword Princes",id:"two-sword-princes",altText:"One guy with long lion-mane-like brown hair and red armor, going from bottom right toward top left, drawing his sword surrounded by a white dragon. One guy with purple robes and long straight black hair going from top left down to bottom right, sword out, surrounded by 5 streaks of green light",year:2018,fileName:"ryoshan.png",description:'Drew Ryoma and Shannan for <a href="https://www.tumblr.com/togetherweridefanzine" target="_blank">Together We Ride</a> which is themed around putting classic and newer gen Fire Emblem characters together. \n        I chose Ryoma and Shannan for a bunch of reasons: they\'re both some of my favorites in all of FE, they\'re long hair princes that became kings of their respective country with a holy sword, and they have crippling guilt complexes over something \n        that happened when they\'re too young to actually do anything about it.'}]},{type:M.Design,subPath:"/designs",files:[{title:"Glamrock Meteor",id:"glamrock-meteor",altText:"Woman with long black hair, cropped studded leather jacket, purple leotard, cutout leather pants with fishnets filling, and white thigh-high leather boots, playing guitar",fileName:"glamayra.png",year:2018,description:"In 2018 there was a fan initiative to draw Fire Emblem characters as if there were members of glamrock bands. \n        Naturally, I drew Ayra. Her design was partially inspired by the outfit Alissa White-Gluz of the death metal band Arch Enemy wore at their 2018 NYC concert."},{title:"Thyra Unarmored",id:"thyra-designs-unarmored",altText:"Buff woman with long black ponytail and chinese style hairpins. she is dressed in an ornate blue fantasy-wuxia style coat with dragon brocade, red fabric under a gold ornate belt, and a large dragon sword with a blue center. She wears light blue guard on her wrist and shins.",fileName:"thyra1.png",year:2016,description:"",groupId:"thyra-designs",groupOrder:0},{title:"Thyra Armored",id:"thyra-designs-armored",altText:"Buff woman with long black ponytail and chinese style hairpins. she is dressed in an ornate blue fantasy-wuxia style coat with dragon brocade under a blue-and-black-armor with some black scales. She has a red sash peaks out under the armor, a scarf that flows back similar to a cape, and a large sword with a dragon hilt and a blue center.",year:2016,fileName:"thyra2.png",description:"",groupId:"thyra-designs",groupOrder:1},{title:"Long Xuanjun Armored/Unarmored",id:"essa",altText:"Very Buff woman with wavy black hair in a ponytail. In her unarmored version she wears a long red coat with dragon brocade, with no shirt and only sarashi around her chest. She has a 6pack and a shallow scar across it. She wears a single dragon head pauldron on her right, white pants, and black boots. Her left arm is heavily tattooed. Her armored version she wears a more ornate headpiece and does put on a shirt under the armor, with the same coat. She wears a black and purple plate set with eastern visuals, and a teal cape.",year:2016,fileName:"essa.png",groupId:"essa-designs",groupOrder:0},{id:"essa-unarmored-1",fileName:"essa_unarmored_1.png",altText:"unarmored breakdown page 1",title:"Unarmored 1",groupId:"essa-designs",groupOrder:1},{id:"essa-unarmored-2",fileName:"essa_unarmored_2.png",altText:"unarmored breakdown page 2",title:"Unarmored 2",groupId:"essa-designs",groupOrder:2},{id:"essa-armored-1",fileName:"essa_armored_1.png",altText:"armored breakdown page 1",title:"Armored 1",groupId:"essa-designs",groupOrder:3},{id:"essa-armored-2",fileName:"essa_armored_2.png",altText:"armored breakdown page 2",title:"Armored 2",groupId:"essa-designs",groupOrder:4},{id:"essa-armored-3",fileName:"essa_armored_3.png",altText:"armored breakdown page 1",title:"Armored 3",groupId:"essa-designs",groupOrder:5},{id:"essa-armored-4",fileName:"essa_armored_4.png",altText:"armored breakdown page 4",title:"Armored 4",groupId:"essa-designs",groupOrder:6},{id:"essa-accessories",fileName:"essa_accessories.png",altText:"accessories set",title:"Accessories",groupId:"essa-designs",groupOrder:7},{title:"Long Xuanli",id:"destin",altText:"Sketch of a slim guy with a high ponytail and an ornate bird hairpiece. He has red eyeliner and a teal coat with maroon trim and a lot of gems. The tail of the coat is split and fans out like a feather tail. He wears a qing-dynasty style high collar shirt under the coat with frog buttons, with one side of it being black and the other being white. He has high gloves, also one black and one white, but on opposite sides of the shirt to create symmetry.",year:2016,fileName:"destin.png",description:""}]}],Le={"thyra-designs":{title:"Thyra Designs",description:""},"essa-designs":{title:"Long Xuanjun",description:""}};let He=(()=>{class n{constructor(){this.baseUrl="/assets/art"}loadImages(){const t={art:{},groups:{},tags:{}},a={};return Ne.forEach(o=>{const i=o.type,c=o.subPath;o.files.forEach(s=>{const l=this.initArtObject(s,i,c);if(t.art[l.id]=l,s.groupId&&null!=s.groupOrder){l.group={id:s.groupId,order:s.groupOrder};const u=a[s.groupId]||{items:{},tags:new Set};u.items[s.groupOrder]=s.id,u.tags=new Set([...u.tags,...l.tags]),a[s.groupId]=u}else l.tags.forEach(u=>{const d=t.tags[u]||{ids:new Set,groupIds:new Set,count:0};d.ids.add(l.id),d.count++,t.tags[u]=d})})}),Object.entries(a).forEach(([o,i])=>{t.groups[o]=(({title:s,description:l})=>({id:o,title:s,description:l,pieces:Object.values(i.items),tags:i.tags}))(Le[o]),i.tags.forEach(s=>{const l=t.tags[s]||{ids:new Set,groupIds:new Set,count:0};l.groupIds.add(o),l.count++,t.tags[s]=l})}),t}initArtObject(t,a,o){const i=`${this.baseUrl}${o}/${t.fileName}`,c=new Image;c.src=i;const s=(t.tags||[]).map(u=>u.toLowerCase()),l=(({id:u,title:d,description:y,altText:h,year:b})=>({id:u,title:d,description:y,altText:h,url:i,image:c,type:a,year:b,tags:new Set(s)}))(t);if(l.tags.add(a),!t.useImageAsThumbnail){const u=`${this.baseUrl}${o}/th/${t.fileName}`,d=new Image;d.src=u,l.thumbnail=u,l.thImage=d}return l}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),De=(()=>{class n{constructor(t){this.artLoader=t,this.actions$=(0,e.f3M)(O.eX),this.init$=(0,O.GW)(()=>this.actions$.pipe((0,O.l4)(x),(0,Ge.w)(()=>{const a=this.artLoader.loadImages();return(0,K.of)(I(a))}),(0,Me.K)(a=>(console.error("Error",a),(0,K.of)(k({error:a}))))))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(He))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,v.Bz]}),n})();var Ze=g(9108);let Be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,Ze.U,v.Bz,Q.uH]}),n})(),je=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,p.Aw.forFeature(T,D),O.sQ.forFeature(De),v.Bz.forChild(U),ze,Be]}),n})()}}]);