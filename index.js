// const button = document.getElementById('buttton');
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        alert('I was clicked!');
      });
}
addingEventListener()