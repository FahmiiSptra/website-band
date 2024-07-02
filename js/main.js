let index = 0;
next();

function next() {
  let x = document.getElementsByClassName('content-img');
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = 'block';
  setTimeout(next, 3500);
}
