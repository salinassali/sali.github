let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelector(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")){
        count--;
      }
     value.textContent = count;
    });
});
