function clockStart(){
  if(!document.getElementById("clocks")){
  var clocks = document.createElement('div');
  clocks.id = "clocks";
  clocks.innerHTML = '<span id="hours"></span><span>:</span><span id="mins"></span><span>:</span><span   id="secs"></span>';
  document.body.appendChild(clocks);
  }
  function update(){
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var secs = new Date().getSeconds();
    function addZero(e){
      if(e < 10) return e = "0" + e;
      return e;
    }   
     document.getElementById('hours').textContent = addZero(hours);    
     document.getElementById('mins').textContent = addZero(minutes);     
     document.getElementById('secs').textContent = addZero(secs); 
  }
  window.timerId = setInterval(update, 1000);
  update();
}
  function clockStop(){
  clearInterval(timerId);  
}