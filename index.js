function fibMemo(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}
fibMemo(50); //12586269025

//Memoized Fibonacci it have a cache or memory of all numbers that already calculated.
// When trying to calculate the next Fibonacci number it check to see if it already exist in the cache.
// If it does will use the number found in cache.if number does not exist in the cache then calculate it and put it into the cash.
