let month = 3;

// Note: If we dont write 'break' keyword, when the case gets match all the code below it also gets execute. Except default case.
switch (month) {
  case 1:
    console.log(`Jan`);
    break;
  case 2:
    console.log(`Feb`);
    break;
  case 3:
    console.log(`March`);
  // break;
  case 4:
    console.log(`April`);
  // break;
  case 5:
    console.log(`May`);
  // break;
  case 6:
    console.log(`June`);
  // break;
  case 7:
    console.log(`July`);
  // break;
  case 8:
    console.log(`Aug`);
  // break;
  case 9:
    console.log(`Sep`);
  // break;
  case 10:
    console.log(`Oct`);
  // break;
  case 11:
    console.log(`Nov`);
    break;
  case 12:
    console.log(`Dec`);
    break;

  default:
    console.log(`Enter a valid month Number`);
    break;
}
