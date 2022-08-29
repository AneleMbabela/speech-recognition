const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {

    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('what is your name') || text.includes("whats your name")){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Anele, Yours?';
            texts.appendChild(p);
        }
        if(text.includes('open my YouTube channel')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening your channel';
            texts.appendChild(p);
            window.open('https://youtube.com')
        }
        if(text.includes('open Spotify')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening spotify';
            texts.appendChild(p);
            window.open('https://open.spotify.com/')
        }
        if(text.includes('open LinkedIn')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening LinkedIn';
            texts.appendChild(p);
            window.open('https://www.linkedin.com/')
        }
        if(text.includes('open Gmail')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Gmail';
            texts.appendChild(p);
            window.open('https://mail.google.com/')

        }
        p = document.createElement('p');
    }

    console.log(e);
})

recognition.addEventListener('end', ()=> {
    recognition.start();
})

recognition.start();
