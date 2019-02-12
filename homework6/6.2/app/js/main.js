let addButton = document.getElementById('addbttn');
let container = document.getElementById('container');
let tagEl = document.querySelector('.tag-wrapper');
function createNewTag() {
	let tag = document.createElement('div');
  tag.className = "tag";
  tag.innerHTML = '<p>some Text</p>'
  tag.style.left = Math.random()*400 + "px"
  tag.style.bottom = Math.random()*350 + "px"
  container.appendChild(tag);
};

addButton.addEventListener("click", createNewTag);

//drag 

tagEl.onmousedown = function(e) {

  var coords = getCoords(tagEl);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  console.log(e.pageX, e.pageY,)
  tagEl.style.position = 'absolute';
  document.body.appendChild(tagEl);
  moveAt(e);

  tagEl.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    tagEl.style.left = Math.max(Math.min(e.pageX - shiftX), 0) + 'px';
    if (tagEl.style.left > "740px") {tagEl.style.left = "740px"}
    if (tagEl.style.left < "290px") {tagEl.style.left = "290px"}
    tagEl.style.top = Math.max(Math.min(e.pageY- shiftY), 0) + 'px';
    if (tagEl.style.top < "180px") {tagEl.style.top = "180px"}
    if (tagEl.style.top > "515px") {tagEl.style.top = "515px"}
    
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  tagEl.onmouseup = function() {
    document.onmousemove = null;
    tagEl.onmouseup = null;
  };

}

tagEl.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}