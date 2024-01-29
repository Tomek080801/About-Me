document.addEventListener('DOMContentLoaded', function() {
    // handling display
    
    var boxes = document.querySelectorAll('.main_box_button');
    var displays = document.querySelectorAll('.main_display_section');
    
    boxes.forEach(function(box_button,box_index) {
        box_button.addEventListener('click', function() {
            displays.forEach(function(display_box,display_index) {
                if(box_index==display_index)
                {
                    display_box.style.display="flex";
                }
                else
                {
                    display_box.style.display="none";
                }
            });
        });
    });

    //
});