class FancyLogger{
    constructor(){
        if(FancyLogger.instance == null){
            this.arr=[];
            FancyLogger.instance=this;
        }
        return FancyLogger.instance;
    }
    log(msg){
        this.arr.push(msg);
    }
    printLogCount(){
        console.log("Log count", this.arrOfMsg.length);
    }
}
const logger= new FancyLogger();
Object.freeze(logger);
module.exports=logger;
/* let fl= new FancyLogger();
fl.log("Hi");
fl.printLogCount(); */`