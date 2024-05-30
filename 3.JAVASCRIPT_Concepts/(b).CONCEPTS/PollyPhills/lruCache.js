class LruCache {

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.cacheMap = new Map();
  }

  printCache() {
    console.log('printCache', this.cacheMap);
  }

  cacheSize() {
    return this.cacheMap.size;
  }

  set(key, value) {
    if (this.cacheMap.has(key)) {
      this.cacheMap.delete(key);
    } else if (this.cacheSize() === this.maxSize) {
      this.cacheMap.delete(this.firstItem());
    }
    this.cacheMap.set(key, value);
  }

  firstItem() {
    return this.cacheMap.keys().next().value;
  }

  get(key) {
    const value = this.cacheMap.get(key);
    if (this.cacheMap.has(key)) {
      this.set(key, value);
      return value;
    }
    return new Error(`${key} is not defined`);
  }
}

// Case1: When we setting the keys if Cache is full
/* const cacheObj = new LruCache(2);
cacheObj.set('1', 'Orange');
cacheObj.set('2', 'Apple');
cacheObj.set('1', 'Banana');

console.log(cacheObj.getCache()); // { '2' => 'Apple', '1' => 'Banana' }
 */


const cacheObj2 = new LruCache(4);
cacheObj2.set('1', 'Orange');
cacheObj2.set('2', 'Apple');
cacheObj2.set('3', 'Banana');
cacheObj2.set('4', 'Watermelon');


cacheObj2.printCache();// { '1' => 'Orange', '2' => 'Apple', '3' => 'Banana','4' => 'Watermelon'}
console.log(cacheObj2.get('3'));
cacheObj2.printCache(); //{ '1' => 'Orange', '2' => 'Apple', '4' => 'Watermelon', '3' => 'Banana'}









































/* 
The question is basically create LRU cache
size is 4

[10,20,10,30, 40,50, 30, 40, 60,30];
size is 4

[10]
[20, 10]
[10, 20]
[30, 10, 20]
[40, 30, 10, 20]
[50, 40, 30, 10]
[60, 50, 40, 30];
[30, 60, 50, 10];
*/

