import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[elastic-header]'
})
export class ElasticHeader {

  el : HTMLElement;
  scrollerHandle : any;
  header : any;
  headerHeight : any;
  translateAmt : any;
  scaleAmt : any;
  scrollTop : any;
  lastScrollTop : any;
  ticking : boolean;

    constructor(element: ElementRef){

        var me = this;
        this.el = element.nativeElement;

        element.nativeElement.style.backgroundColor = 'yellow';

        this.scrollerHandle = this.el.children[0];
        this.header = document.getElementById("elastic-header");
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.translateAmt = null;
        this.scaleAmt = null;
        this.scrollTop = null;
        this.lastScrollTop = null;
        this.ticking = false;
        this.header.style.webkitTransformOrigin = 'center bottom';





        window.addEventListener('resize', function() {
            me.headerHeight = me.scrollerHandle.clientHeight;
        }, false);

        this.scrollerHandle.addEventListener('scroll', function(){
            if(!me.ticking){
                window.requestAnimationFrame(function(){
                    me.updateElasticHeader();
                });
            }
            this.ticking = true;
        });

    }

    @HostListener('mouseenter')
    onMouseEnter() {
      this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    private highlight(color: string) {
      this.el.style.backgroundColor = color;
    }

    updateElasticHeader(){
        this.scrollTop = this.scrollerHandle.scrollTop;

        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        } else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }

        this.header.style.webkitTransform = 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')';

        this.ticking = false;
    }

}
// this.element.nativeElement.children[0];
