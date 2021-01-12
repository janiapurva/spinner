//process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);


  

const spinner = () => {
  

  let array = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ' ];
  let counter = 0;
  let final;
  for (let i = 0; i < array.length; i++) {

 final = setTimeout(()=> {
      process.stdout.write(array[i]);
    },counter += 200);
 
  }
  return final;



};
spinner();


















