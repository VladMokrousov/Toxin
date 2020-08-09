var likeButton = document.querySelectorAll('.like-button');

for (var i = 0; i<likeButton.length; i++) {
  
  likeButton[i].addEventListener("click", function(){
    console.log(i);
    if(this.classList.contains('like-button--clicked')) {
      this.textContent = Number(this.textContent) - 1;
      this.classList.remove("like-button--clicked");
    }
    else {
      this.textContent = Number(this.textContent) + 1;
      this.classList.add("like-button--clicked");
    }
   
  });
}
