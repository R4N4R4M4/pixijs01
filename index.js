function index_init()
  {
  geolocation();
  var stage = new PIXI.Stage(0xDEF7F7, true);
  var renderer PIXI.autoDetectRenderer(500, 700);
  document.body.appendChild(renderer.view);
  requestAnimFrame(animate);
  }
  
function index_body()
  {
  document.write('<div id="geolocation">Calcul en cours...</div>');
  }
  
function animate() {requestAnimFrame(animate); renderer.render(stage);}
