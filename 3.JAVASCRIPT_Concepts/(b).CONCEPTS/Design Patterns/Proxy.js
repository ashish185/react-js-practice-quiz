function CurrencyApi(){
    this.getValue = function(curr){
        console.log("Calling External Api");
        switch(curr){
            case "Dollar":
            return "Rs75"
            case "Euro":
            return "Rs80"

        }
    }
}
/* const api = new CurrencyApi();
console.log(api.getValue("Dollar")); */
function getCurrencyApiProxy(){
    this.api = new CurrencyApi()
    this.cache = {}
    this.getValue1 = function(curr){
        if(this.cache[curr] === null){
            this.cache[curr] = this.api.getValue(curr);
        }
        return this.cache[curr];
    }
}
const proxyObj = new getCurrencyApiProxy();
console.log(proxyObj.getValue1("Dollar"))