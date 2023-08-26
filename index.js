
const elem = document.createElement('span');
elem.textContent = 'Najam Ul Haq';
elem.style.color = '#333';
elem.style.fontWeight = 'bold'
const intro = `My name is ${elem.innerHTML} and I am a full stack developer, solving real world problems with code.`;
const typeWriter = document.querySelector('.type-writer');
const typingSpeed = 10;
let currIndex = 0


function typePara() {
    if(currIndex < intro.length) {
        typeWriter.textContent += intro.charAt(currIndex);
        currIndex++
        setTimeout(typePara, typingSpeed)
    }
}

typePara();

const icon = document.querySelector('.icon');
const navigation = document.querySelector('.navigation');

icon.addEventListener('click', () => {

    if(icon.classList.contains('icon-rotate') && navigation.classList.contains('navigation-enter')){
        icon.classList.remove('icon-rotate')
        navigation.classList.remove('navigation-enter')
    } else {
        icon.classList.add('icon-rotate')
        navigation.classList.add('navigation-enter')
    }

})







