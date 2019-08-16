const mapButtonOpen = document.getElementById('map-howTo-open');
const mapButtonClose = document.getElementById('map-howTo-close');
const mapExplanation = document.getElementById('map-explanation');
const mapOverlay = document.getElementById('map-overlay');

/* Map button functionality */
function mapExplanationOpen(){
  mapExplanation.style.display = 'block';
  mapButtonOpen.style.display = 'none';
  mapButtonClose.style.display = 'block';
  mapOverlay.style.display = 'block';
}

function mapExplanationClose(){
  mapExplanation.style.display = 'none';
  mapButtonOpen.style.display = 'block';
  mapButtonClose.style.display = 'none';
  mapOverlay.style.display = 'none';
}

/* Map listeners */
mapButtonOpen.addEventListener('click',mapExplanationOpen);
mapButtonClose.addEventListener('click',mapExplanationClose);
mapOverlay.addEventListener('click',mapExplanationClose);
