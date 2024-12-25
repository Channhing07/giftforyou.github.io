const wrapper = document.querySelector(".wrapper ");
const qs = document.querySelector(".qs");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
    qs.innerHTML = "I love you too!";
    gif.src = "https://th.bing.com/th/id/R.f65a469e321b4521833229ae94b00283?rik=arv0DjFxY66laQ&pid=ImgRaw&r=0"
});
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomX + "px";

});