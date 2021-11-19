(()=>{"use strict";const e=class{constructor({sliderItemsClass:e,leftArrowClass:t,rightArrowClass:s,highResolutionSlides:i,lowResolutionSlides:l}){this.activeSlideClass="active-slide",this.highResolutionMode="high resolution mode",this.lowResolutionMode="low resolution mode",this.slidesList=document.querySelectorAll(`.${e}`),this.leftArrow=document.querySelector(`.${t}`),this.rightArrow=document.querySelector(`.${s}`),this.highResolutionSlides=i,this.lowResolutionSlides=l,this.currentResolutionMode=null,this.maxSlidesToShow=null,this.currentActiveSlide=0,this.checkCurrentResolution(),this.listenToEvents()}checkCurrentResolution(){document.documentElement.clientWidth>576?this.currentResolutionMode!=this.highResolutionMode&&(this.currentResolutionMode=this.highResolutionMode,this.maxSlidesToShow=this.highResolutionSlides,this.showSlides()):this.currentResolutionMode!=this.lowResolutionMode&&(this.currentResolutionMode=this.lowResolutionMode,this.maxSlidesToShow=this.lowResolutionSlides,this.showSlides())}listenToEvents(){this.leftArrow.addEventListener("click",(()=>this.showPrevSlide())),this.rightArrow.addEventListener("click",(()=>this.showNextSlide())),window.addEventListener("resize",(()=>this.checkCurrentResolution()))}showSlides(){for(const e of this.slidesList)e.classList.remove(this.activeSlideClass);const e=Math.min(this.currentActiveSlide+this.maxSlidesToShow,this.slidesList.length);for(let t=this.currentActiveSlide;t<e;t++)this.slidesList[t].classList.add(this.activeSlideClass);this.showHideArrows()}showNextSlide(){this.lastActiveSlide()<this.slidesList.length-1&&(this.slidesList[this.currentActiveSlide].classList.remove(this.activeSlideClass),this.currentActiveSlide++,this.slidesList[this.lastActiveSlide()].classList.add(this.activeSlideClass),this.showHideArrows())}showPrevSlide(){this.currentActiveSlide>0&&(this.slidesList[this.lastActiveSlide()].classList.remove(this.activeSlideClass),this.currentActiveSlide--,this.slidesList[this.currentActiveSlide].classList.add(this.activeSlideClass),this.showHideArrows())}showHideArrows(){switch(this.currentActiveSlide){case 0:this.leftArrow.style.opacity=0,this.rightArrow.style.opacity=1;break;case this.slidesList.length-this.maxSlidesToShow:this.rightArrow.style.opacity=0,this.leftArrow.style.opacity=1;break;default:this.leftArrow.style.opacity=1,this.rightArrow.style.opacity=1}}lastActiveSlide(){return this.currentActiveSlide+this.maxSlidesToShow-1}};new class{constructor({orderCallBtnClass:e,orderCallMeasurerBtnsClass:t,modalWindowClass:s,modalMeasurerClass:i,closeModalBtnsAttr:l,overlayCLass:o}){this.orderCallBtn=document.querySelector(`.${e}`),this.orderCallMeasurerBtns=document.querySelectorAll(`.${t}`),this.modalWindow=document.querySelector(`.${s}`),this.modalMeasurer=document.querySelector(`.${i}`),this.closeModalBtns=document.querySelectorAll(`${l}`),this.overlay=document.querySelector(`.${o}`),this.eventListeners()}eventListeners(){this.orderCallBtn.addEventListener("click",(()=>{this.overlay.style.display="block",this.modalWindow.style.display="block"})),this.orderCallMeasurerBtns.forEach((e=>{e.addEventListener("click",(()=>{this.overlay.style.display="block",this.modalMeasurer.style.display="block"}))})),this.closeModalBtns.forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains(this.modalWindow)?this.modalWindow.style.display="none":this.modalMeasurer.style.display="none",this.overlay.style.display="none"}))}))}}({orderCallBtnClass:"btn-block.fancyboxModal",orderCallMeasurerBtnsClass:"btn-sm.fancyboxModal",modalWindowClass:"header-modal--opened",modalMeasurerClass:"services-modal--opened",closeModalBtnsAttr:'[title="Close"]',overlayCLass:"header-modal--opened"}),new e({sliderItemsClass:"service-slide",leftArrowClass:"services__arrow--left",rightArrowClass:"services__arrow--right",highResolutionSlides:2,lowResolutionSlides:1}),new e({sliderItemsClass:"benefits__item",leftArrowClass:"benefits__arrow--left",rightArrowClass:"benefits__arrow--right",highResolutionSlides:3,lowResolutionSlides:1}),new class{constructor({deadline:e,timerDaysQuerySelector:t,timerHoursQuerySelector:s,timerMinutesQuerySelector:i,timerSecondsQuerySelector:l}){this.timerDaysQuerySelector=document.querySelector(t),this.timerHoursQuerySelector=document.querySelector(s),this.timerMinutesQuerySelector=document.querySelector(i),this.timerSecondsQuerySelector=document.querySelector(l),this.deadline=e,this.idInterval=setInterval((()=>this.updateTimer()),1e3)}getTimeRemaining(){this.dateStop=new Date(this.deadline).getTime(),this.dateNow=(new Date).getTime();const e=(this.dateStop-this.dateNow)/1e3,t=Math.floor(e/60/60/24);return{timeRemaining:e,daysTillDeadline:t,hoursTillDeadline:Math.floor(e/60/60-24*t),minutesTillDeadline:Math.floor(e/60%60),secondsTillDeadline:Math.floor(e%60)}}updateTimer(){let{timeRemaining:e,daysTillDeadline:t,hoursTillDeadline:s,minutesTillDeadline:i,secondsTillDeadline:l}=this.getTimeRemaining();this.timerDaysQuerySelector.textContent=this.addZeroBeforeNumber(t),this.timerHoursQuerySelector.textContent=this.addZeroBeforeNumber(s),this.timerMinutesQuerySelector.textContent=this.addZeroBeforeNumber(i),this.timerSecondsQuerySelector.textContent=this.addZeroBeforeNumber(l),e<=0&&(clearInterval(this.idInterval),this.timerDaysQuerySelector.textContent="00",this.timerHoursQuerySelector.textContent="00",this.timerMinutesQuerySelector.textContent="00",this.timerSecondsQuerySelector.textContent="00")}addZeroBeforeNumber(e){return String(e).length>1?e:("00"+e).slice(-2)}}({deadline:"31 december 2021",timerDaysQuerySelector:"div.count_1 span",timerHoursQuerySelector:"div.count_2 span",timerMinutesQuerySelector:"div.count_3 span",timerSecondsQuerySelector:"div.count_4 span"}),new class{constructor({scrollBtnClass:e,blockID:t}){this.scrollBtnClass=document.querySelector(`.${e}`),this.blockID=document.querySelector(`#${t}`),this.scrollBtnClass.style.display="none",this.eventListeners()}eventListeners(){this.scrollBtnClass.addEventListener("click",(()=>this.smoothScrollMenu())),window.addEventListener("scroll",(()=>this.showScrollBtn()))}smoothScrollMenu(){this.blockID.scrollIntoView({behavior:"smooth",block:"start"})}showScrollBtn(){pageYOffset<document.documentElement.clientHeight?this.scrollBtnClass.style.display="none":this.scrollBtnClass.style.display="block"}}({scrollBtnClass:"smooth-scroll",blockID:"header"})})();