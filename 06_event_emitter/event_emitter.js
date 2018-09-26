function MyEventEmitter() {
    this.events = {}
}

MyEventEmitter.prototype.addListener = function (evt, cb) {
    //WHY AM I NOT GETTING CB PARAM???????
    !this.events[evt] ?
        this.events[evt] = [cb] :
        this.events[evt].push(cb);
}

MyEventEmitter.prototype.emit = function (evt) {
    let args = [...arguments].slice(1);
    console.log(args);
    // console.log(this.events[evt])
}