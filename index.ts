import './style.css';

import {
  of,
  map,
  from,
  switchMap,
  delay,
  mergeMap,
  concatMap,
  exhaustMap,
} from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

function random(v: number) {
  let r = Math.floor(Math.random() * 10);
  console.log({ delay: r * 1000, value: v });
  return r * 1000;
}

// from([0, 1, 2, 3, 4, 5])
//   .pipe(concatMap((v: any) => of(v).pipe(delay(random(v)))))
//   .subscribe((value) => {
//     console.log('concat map', value);
//   });

console.log('-------------------------------------');

// from([0, 1, 2, 3, 4, 5])
//   .pipe(switchMap((v: any) => of(v).pipe(delay(random(v)))))
//   .subscribe((value) => {
//     console.log('switch map', value);
//   });

console.log('-------------------------------------');

// from([0, 1, 2, 3, 4, 5])
//   .pipe(mergeMap((v: any) => of(v).pipe(delay(random(v)))))
//   .subscribe((value) => {
//     console.log('merge map', value);
//   });

console.log('-------------------------------------');

// from([0, 1, 2, 3, 4, 5])
//   .pipe(exhaustMap((v: any) => of(v).pipe(delay(random(v)))))
//   .subscribe((value) => {
//     console.log('exhaust map', value);
//   });
