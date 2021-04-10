const appIcon = document.querySelector('.toggle-app');
const goggleIcons = document.querySelector('.google-icons');

appIcon.addEventListener('click', () => {
    goggleIcons.classList.toggle('active');
});