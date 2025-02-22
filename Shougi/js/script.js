document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.draggable');

  draggables.forEach(draggable => {
      draggable.addEventListener('mousedown', onMouseDown);

      function onMouseDown(e) {
          e.preventDefault();
          
          let shiftX = e.clientX - draggable.getBoundingClientRect().left;
          let shiftY = e.clientY - draggable.getBoundingClientRect().top;

          draggable.style.position = 'absolute';
          draggable.style.zIndex = 1000;
          document.body.append(draggable);

          moveAt(e.pageX, e.pageY);

          function moveAt(pageX, pageY) {
              draggable.style.left = pageX - shiftX + 'px';
              draggable.style.top = pageY - shiftY + 'px';
          }

          function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
          }

          document.addEventListener('mousemove', onMouseMove);

          draggable.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              draggable.onmouseup = null;
          };
      }

      draggable.ondragstart = function() {
          return false;
      };
  });
});
