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

//Calculator
function appendToDisplay(value) {
    document.getElementById('calculator_display').value += value;
  }

  function clearDisplay() {
    document.getElementById('calculator_display').value = '';
  }

  function calculate() {
    var expression = document.getElementById('calculator_display').value;
    try {
      var result = eval(expression);
      document.getElementById('calculator_display').value = result;
    } catch (error) {
      document.getElementById('calculator_display').value = 'Error';
    }
  }

//

//Popup to confirm link opening

function confirmOpen() {
  var confirmed = confirm("Do you want to open this link in a new tab?");
  return confirmed;
}

//