window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //zera o tempo do audio pra que possa dar play antes do audio acabar
  audio.play();

  key.classList.add('playing'); //tem .remove e .toggle tbm
  //para retirar a classe playing poderia ser feito com o setTimeout mas ai teria que sempre sincronizar mudanças
  //do css no js. o que causa potenciais cagadas.
  //por isso, é possível colocar  um listener de quando a transição terminou ai remover.
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    //no for each pq é para cada elemento e não para o array de elementos
    key.addEventListener('transitionend', e => {
      if (!e.propertyName == 'transform') return;
      key.classList.remove('playing');
    });
  });
});
