function i_learn_js () 
{
  console.log('я учу javascript!');
}
function year_check (years) 
{
  if (years >= 60) 
  {
    console.log('Ты пенсионер');
  }
  else 
  {
    console.log('Ты молодой');
  }
}
function loop1 () 
{
  for(let i = 1; i <= 10; i++)
  {
    console.log(i);
  }
}
function loop2 () 
{
  for(let i = 20; i >= 5; i--)
  {
    console.log(i);
  }
}
i_learn_js();
year_check(60);
year_check(6);
loop1();
loop2();
