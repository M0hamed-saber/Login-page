let wrapper = document.querySelector('.wrapper');
let registerlink = document.querySelector('.register-link');
let Loginlink = document.querySelector('.login-link');

registerlink.onclick = ()=> {
    wrapper.classList.add('active');
}
Loginlink.onclick = ()=> {
    wrapper.classList.remove('active');
}
