
for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnselected= this.innerHTML;
        fun(btnselected);
        animation(btnselected);
    });
        
     
}

document.addEventListener("keypress",function(Event){
    fun(Event.key);
    animation(Event.key);
});
function fun(key)
{
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

         case "j":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break; 

        case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
             audio.play();
            break;
                
        case "l":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;


        default:
            break;
    }


}
function animation(key)
{
    var animationbtn=document.querySelector("." + key);
    animationbtn.classList.add("pressed");
      
    setTimeout(function (){
        animationbtn.classList.remove("pressed");
    },100);

}



