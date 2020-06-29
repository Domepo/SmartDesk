"use strict";
let form_box_class_name = "itemFormBox"

let create_multiple_form_box = function(id,class_name){   
    console.log(class_name);      
    //create a input box
    let form_box_input = document.createElement('input'); 

    //<input id="0" class="itemFormBox">
    form_box_input.setAttribute("id", id);
    form_box_input.setAttribute("class", class_name);

    //create some space
    let create_multiple_form_box_space = document.createElement("br");

    create_multiple_form_box_space.setAttribute("class",class_name);

    //append formbox to body
    document.body.appendChild(form_box_input);   
    document.body.appendChild(create_multiple_form_box_space)
                          

}

window.addEventListener("load",function(){
    //everytine the site is loaded
    //button for input box creator
    let show_all_inputs_button = document.getElementById("n_input_button");

    show_all_inputs_button.addEventListener("click",function(){
    
    //remove all form_box_class_name -> provide infinte loop
    const removeClass = (elms) => elms.forEach(el => el.remove());
    removeClass(document.querySelectorAll("."+form_box_class_name) );
    
    //how often do you want to fill in the input box
    let type_in_the_items_number = document.getElementById("n_input").value;

    for (let i = 0; i<type_in_the_items_number;i++){
        create_multiple_form_box(i,form_box_class_name);
    };

});


}); 
