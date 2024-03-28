console.log('Hello world');
// Implementujte funkci last pro získání posledního prvku pole pomocí MaybeError<T>. Funkce bude mít jeden parametr, pole libovolného typu, a bude vracet typ MaybeError<T>, kde T je typ prvků pole. Pokud je pole prázdné, funkce vrátí 'error'.
var last = function (arr) {
    return arr.length === 0 ? 'error' : arr[arr.length - 1];
};
console.log(last([]));
console.log(last([1, 2, 3, 'eva']));
// Implementuje funkci interpolate, která obdrží pole a vrátí jeho první prvek, prostřední prvek a poslední prvek. K implementaci použijte typ Tripplet<T>, kde T je typ prvků pole. Pokud má pole méně než tři prvky, funkce vrátí null.
var interpolate = function (arr) {
    return arr.length < 3
        ? null
        : { first: arr[0], second: arr[1], third: arr[2] };
    // if (arr.length < 3) {
    //   return null;
    // }
    // const [first, second, third] = arr;
    // return { first, second, third };
};
console.log(interpolate([1, 2, 3, 1, 4, 4]));
