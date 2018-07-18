class ScrollUnique {
    constructor(selector) {
        this.ele = document.querySelectorAll(selector);
        this.screenHeight = document.documentElement.clientHeight;
        this.startPosition = { x: 0, y: 0 };
        this.movePosition = { x: 0, y: 0 };
        this.startTime = new Date().getTime();
        this.endTime = new Date().getTime();
        this.moveTimer = null;
        Array.from(this.ele).forEach((item, index) => {
            item.addEventListener('touchstart', this._touchStart.bind(this), { passive: false });
            item.addEventListener('touchmove', this._touchMove.bind(this), { passive: false });
            item.addEventListener('touchend', this._touchEnd.bind(this), { passive: false });
        });
    }
    _touchStart(e) {
        // 每次touchstart 都需要重置时间
        this.startTime = new Date().getTime();
        this.endTime = new Date().getTime();
        this.startPosition.y = e.touches[0].screenY;
    }
    _touchMove(e) {
        this.endTime = new Date().getTime();
        // 但是有个问题，如果每次滚动都大于500ms，那么永远不会执行touchMoveHander
        // so 需要在每次都不能执行时执行一次
        if (this.endTime - this.startTime > 300) {
            this.touchMoveHander(e);
            this.startTime = this.endTime;
        } else {
            // 如果之前move，清空，并且重新开始
            clearTimeout(this.moveTimer);
            this.moveTimer = null;
            this.moveTimer = setTimeout(() => {
                this.touchMoveHander(e);
            }, 300);
        }
    }
    touchMoveHander(e) {
        let scrollTop = this.ele.scrollTop;
        let scrollHeight = this.ele.scrollHeight;
        this.movePosition.y = e.touches[0].screenY;
        let deriction = (this.movePosition.y - this.startPosition.y < 0) ? 'down' : 'up';
        if (scrollTop + this.screenHeight >= scrollHeight && deriction == 'down' && e.cancelable) {
            e.stopPropagation();
            if (!e.defaultPrevented)
                e.preventDefault()
        }
    }
    _touchEnd(e) {

    }
}

export default ScrollUnique;