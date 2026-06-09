(() => {
  const DATA_URL = '/assets/projects/2024-camel/samples.json';
  const TYPING_WORD_DELAY = 111; 
  const PAUSE_AFTER_COMPLETE = 1200; 
  const ERASE_FAST_DELAY = 25; 
  const TRANSITION_DELAY = 400; 

  const classLabelEl = document.getElementById('class-label');
  const imageEl = document.getElementById('sample-image');
  const symptomTextEl = document.getElementById('symptom-text');
  const classWrap = document.querySelector('.class-wrap');
  const imageWrap = document.querySelector('.image-wrap');
  const symptomWrap = document.querySelector('.symptom-wrap');

  let samples = [];
  let idx = 0;
  let running = true;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  fetch(DATA_URL).then(res => res.json()).then(data => {
    samples = data;
    if (!samples || samples.length === 0) return;
    samples.forEach(s => { const i = new Image(); i.src = s.image; });
    playLoop();
  }).catch(err => {
    console.error('Failed to load samples.json', err);
  });

  async function playLoop() {
    while (running) {
      const s = samples[idx];
      await showSample(s);
      idx = (idx + 1) % samples.length;
    }
  }

  async function showSample(sample) {
    classWrap.classList.add('fade-out');
    imageWrap.classList.add('fade-out');
    symptomWrap.classList.add('fade-out');
    await sleep(TRANSITION_DELAY);

    classLabelEl.textContent = sample.class.toUpperCase();
    imageEl.src = sample.image;
    symptomTextEl.innerHTML = '';

    classWrap.classList.remove('fade-out'); classWrap.classList.add('fade-in');
    imageWrap.classList.remove('fade-out'); imageWrap.classList.add('fade-in');
    symptomWrap.classList.remove('fade-out'); symptomWrap.classList.add('fade-in');

    const words = sample.symptom.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
      symptomTextEl.innerText += (i === 0 ? '' : ' ') + words[i];
      await sleep(TYPING_WORD_DELAY);
    }

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    symptomTextEl.appendChild(cursor);

    await sleep(PAUSE_AFTER_COMPLETE);

    if (cursor.parentNode) cursor.parentNode.removeChild(cursor);

    for (let i = words.length - 1; i >= 0; i--) {
      const currentText = symptomTextEl.innerText.trim();
      const newText = currentText.split(/\s+/).slice(0, i).join(' ');
      symptomTextEl.innerText = newText;
      await sleep(ERASE_FAST_DELAY);
    }

    classWrap.classList.remove('fade-in');
    imageWrap.classList.remove('fade-in');
    symptomWrap.classList.remove('fade-in');
    await sleep(TRANSITION_DELAY);
  }
})();
