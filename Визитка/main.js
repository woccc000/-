var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById("myBtn").addEventListener("click", function() {
    var email = document.querySelector(".in-put").value;
    var message = document.querySelector(".modal-content p");
    var title = document.querySelector(".modal-content h1");
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var image = document.querySelector(".modal-content img");
    
    if(emailRegex.test(email)) { title.textContent = "Спасибо за подписку!";
        message.innerHTML = "Письмо с подтверждением было отправлено на адрес: <pre>\t\t" + email + " </pre> Пожалуйста, откройте его и нажмите кнопку внутри, чтобы подтвердить подписку.";
                                image.src = "check.svg";
    } else { title.textContent = "Подписка не выполнена!";
        message.textContent = "Пожалуйста, введите действительный адрес электронной почты.";
            image.src = "svgrepo.svg";
    }
});
