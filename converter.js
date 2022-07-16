document.getElementById('button').onclick = function(){
  let celsius = document.getElementById('temp').value;

  celsius = Math.floor(celsius);

  let kelvin =  celsius +273 ;
  let fahrenheit = celsius* (9/5) + 32;
  fahrenheit = Math.floor(fahrenheit);
  //round fahrenheit's number
  let newton = celsius* (33/100);
  newton = Math.floor(newton);
  //round fahrenheit's number

  var results = document.getElementById("results")
  var f = document.getElementById("f")
  var k = document.getElementById("k")
  var n = document.getElementById("n")

  results.innerHTML = "Converted Results:"
  f.innerHTML = `Fahrenheit temperature : ${fahrenheit} °F`
  k.innerHTML = `Kelvin Temperature : ${kelvin} K`
  n.innerHTML = `Newton scale : ${newton} °N`
  //print results on html

}
