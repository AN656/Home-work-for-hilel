function run_checks(letter) {
  let var_array = [1,0,-3];
  for (let i = 0; i < var_array.length; i++)
  {
    let a = var_array[i];
    console.log(`${a} ${letter} ${0}: ` + eval(`${a}${letter}${0}`));
  }
  console.log();
}
run_checks('==');
run_checks('>');
run_checks('<');
run_checks('>=');
run_checks('<=');