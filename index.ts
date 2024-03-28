console.log('Hello world');

// V jednoduchém projektu s TypeScriptem bez bundleru vytvořte typy pro dle následujících pokynů.

// Vytvořte typ MaybeError s generickým parametrem T. Typ MaybeError bude sloužit k reprezentaci výsledku, který může skončit chybou. Bude mít dvě možnosti, buď hodnotu typu T nebo literál 'error'.
type MaybeError<T> = T | 'error';

// Implementujte funkci last pro získání posledního prvku pole pomocí MaybeError<T>. Funkce bude mít jeden parametr, pole libovolného typu, a bude vracet typ MaybeError<T>, kde T je typ prvků pole. Pokud je pole prázdné, funkce vrátí 'error'.
const last = <T>(arr: T[]): MaybeError<T> => {
  return arr.length === 0 ? 'error' : arr[arr.length - 1];
};

console.log(last([]));
console.log(last([1, 2, 3, 'eva']));

// Vytvořte typ Tripplet s generickým parametrem T pro reprezentaci trojice hodnot typu T. Tento typ bude mít tři vlastnosti, first, second a third, které budou mít typ T.
interface Triplet<T> {
  first: T;
  second: T;
  third: T;
}
// Implementuje funkci interpolate, která obdrží pole a vrátí jeho první prvek, prostřední prvek a poslední prvek. K implementaci použijte typ Tripplet<T>, kde T je typ prvků pole. Pokud má pole méně než tři prvky, funkce vrátí null.
const interpolate = <T>(arr: T[]): Triplet<T> | null => {
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
