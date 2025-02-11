/* top 버튼 */
window.onscroll = function(){
    const btn = document.getElementById("top_btn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100){
    btn.style.display = "block";
    }else{
    btn.style.display = "none";
    }
};

document.getElementById('top_btn').addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});

/* ripple 효과 */
function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${button.clientWidth / 2 - radius}px`;
    circle.style.top = `${button.clientHeight / 2 - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
}

const buttons = document.getElementsByClassName("ripple-button");
for (const button of buttons) {
    button.addEventListener("mouseenter", createRipple);
}