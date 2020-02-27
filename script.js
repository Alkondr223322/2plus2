window.onload = function(){
  i1 = document.createElement("input");
  i1.type = 'text';
  i1.size="40";
  i1.id = 'in1';
  i2 = document.createElement("input");
  i2.type = 'text';
  i2.size="40";
  i2.id = 'in2';
  br = document.createElement('br');
  spn = document.createElement("span");
  spn.innerHTML = '<p> + </p>';
  res = document.createElement('input'); 
  res.id = 'butt';
  res.type = 'button';
  res.size = '40';
  res.value = 'Посчитать';
  res.onclick = function(){
    if(document.getElementById("errmsg")!=null)document.getElementById("errmsg").remove();
    if(document.getElementById("errmsg")!=null)document.getElementById("errmsg").remove();
    if(document.getElementById("result")!=null)document.getElementById("result").remove();
    let in1val = parseInt(document.getElementById("in1").value, 10);
    let in2val = parseInt(document.getElementById("in2").value, 10);
    if(isNaN(in1val)){
      let el = document.getElementById("in1");
      let err = document.createElement("div");
      err.id= "errmsg";
      err.innerHTML = "<p>Это не число</p>";
      el.after(err);
    }
    if(isNaN(in2val)){
      let el = document.getElementById("in2");
      let err = document.createElement("div");
      err.id= "errmsg";
      err.innerHTML = "<p>Это не число</p>";
      el.after(err);
    }
    if((isNaN(in2val) + isNaN(in1val)) == 0){
      let el = document.getElementById("butt");
      let res = document.createElement("div");
      res.id= "result";
      res.innerHTML = in1val + in2val;
      el.after(res);
    }
  };
  document.body.appendChild(i1);
  document.body.appendChild(spn);
  document.body.appendChild(i2);
  document.body.appendChild(br);
  document.body.appendChild(res);
}