class ScrollEvent {
    constructor({ ele = window, waitTime = 300, timeOut = 300, callback = null } = {}) {
        this.ele = ele == window ? window : document.querySelector(ele);
        this.startTime = this.endTime = new Date().getTime();
        this.callBack = callback;
        this.moveTimer = null;
        this.waitTime = waitTime; // 最长等待时间
        this.timeOut = timeOut; // 定时器 定时 时间
        this.bindEvent();
    }

    bindEvent() {
        this.ele.addEventListener('scroll', this.scrollHandler.bind(this), { passive: false });
    }

    removeEvent() {
        this.ele.removeEventListener('scroll', this.scrollHandler.bind(this), { passive: false });
    }

    scrollHandler(e) {
        this.endTime = new Date().getTime();
        // 但是有个问题，如果每次滚动都大于300ms，那么永远不会执行touchMoveHander
        // so 需要在每次都不能执行时执行一次
        if (this.endTime - this.startTime >= this.waitTime) {
            this.startTime = this.endTime;
            this.callBack && this.callBack();
        } else {
            // 如果之前move，清空，并且重新开始
            clearTimeout(this.moveTimer);
            this.moveTimer = null;
            this.moveTimer = setTimeout(() => {
                this.callBack && this.callBack();
            }, this.timeOut);
        }
    }
}

export default ScrollEvent;