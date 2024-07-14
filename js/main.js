

$('#Duration .box').click(function(){
    $('.content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

$('#getting-started').countdown('2028/11/20', function(event) {
    $(this).html(event.strftime('days :%M:%S'));
    $(this).html(event.strftime(`<div class="single-count"><h2>%D</h2><span>Days</span></div>
    <div class="single-count"><h2>%H</h2><span>Hours</span></div>
    <div class="single-count"><h2>%M</h2><span>Minutes</span></div>
    <div class="single-count"><h2>%S</h2><span>Seconds</span></div>

    `));
  });

   const textarea = document.getElementById('myTextarea');

   const characterCountDisplay = document.getElementById('characterCount');
   
   let counter = 100;
   
   textarea.addEventListener('input', updateCharacterCount);

   function updateCharacterCount() {
     const text = textarea.value.length;
     characterCountDisplay.textContent = `${counter} Remaining`;
     counter--;

     if(counter == 0){
        alert("You have reached your limit");
     }
   }
updateCharacterCount();




  let sidebarinnerWidth = $(".sideBar-inner").innerWidth();
  $("#sideBar").animate({left : - sidebarinnerWidth},1);



    $("#sideBar i").click(function(){
        if($("#sideBar").css('left')== "0px")
        {
            $("#sideBar").animate({left : -sidebarinnerWidth},500);
        }
        else{
            $("#sideBar").animate({left :0},500);
            
        }
    })


/********end sec 1**********/




