let n = 0;
let i = 0;

function cont(Variavel) {
  if (Variavel == 1) {
    n++;
    document.querySelector('#cont').innerText = n;
  }
  if (Variavel == 2) {
    i++;
    document.querySelector('#cont2').innerText = i;
  }
}

function limpar(event) {
  if (event.target.id === 'bt1') {
    n = -1;
    document.querySelector('#cont').innerText = n;
  } else if (event.target.id === 'bt2') {
    i = -1;
    document.querySelector('#cont2').innerText = i;
  }
}
