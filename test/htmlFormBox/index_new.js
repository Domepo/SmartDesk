"use strict";

let can_frontend = document.createElement("div");

window.addEventListener("load",function(){

    function create_radio_box(){

        
        let create_div_for_radio_box    = document.createElement("div"),    
            radio_send_button           = document.createElement("input"),
            radio_recieve_button        = document.createElement("input"),
            label_for_send_button       = document.createElement("label"),
            label_for_recieve_button    = document.createElement("label");


        create_div_for_radio_box.setAttribute("id","radio-boxes");
        create_div_for_radio_box.setAttribute("class","radio-boxes-style");

        radio_send_button.setAttribute("type","radio");
        radio_recieve_button.setAttribute("type","radio");
        radio_recieve_button.setAttribute("name","recieve_and_send_radio");
        radio_send_button.setAttribute("name","recieve_and_send_radio");
        radio_send_button.setAttribute("id","radio-send-button-id");
        radio_recieve_button.setAttribute("id","radio-recieve-button-id")

        label_for_send_button.setAttribute("for","radio_send_button");
        label_for_recieve_button.setAttribute("for","radio_recieve_button");


        document.body.appendChild(can_frontend);
        can_frontend.appendChild(create_div_for_radio_box); 
        create_div_for_radio_box.appendChild(label_for_send_button);
        create_div_for_radio_box.appendChild(radio_send_button); 
        create_div_for_radio_box.appendChild(label_for_recieve_button);
        create_div_for_radio_box.appendChild(radio_recieve_button);



        label_for_send_button.innerHTML = "Receive";
        label_for_recieve_button.innerHTML = "Send";
    }
    //get input data
    function get_radio_data(){

        let box_listener = document.getElementById("radio-boxes");

        box_listener.addEventListener("click",  ()=>  {

            if (document.getElementById("radio-send-button-id").checked == true) {

                // provide infinte Loop
                const removeClass = (elms) => elms.forEach(el => el.remove());
                removeClass(document.querySelectorAll(".master-id-class") );

                create_id_name_master_field();
            }
            if (document.getElementById("radio-recieve-button-id").checked == true) {

                if ( document.getElementById("master-id-id") != null)   {
                document.getElementById("master-id-id").style.display = "none";
                }
            }
        
        });
    }
    function create_id_name_master_field(){


        let field_for_id_and_master = document.createElement("div"),
            master_id_field         = document.createElement("input"),
            master_name_field       = document.createElement("input"),
            label_for_id_field      = document.createElement("label"),
            label_for_name_field    = document.createElement("label"),
            n_filter                = document.createElement("input"),
            label_for_n_filter      = document.createElement("label");

        field_for_id_and_master.setAttribute("class","master-id-class");    
        field_for_id_and_master.setAttribute("id","master-id-id");   
        
        label_for_id_field.setAttribute("for","master_id_field");
        label_for_name_field.setAttribute("for","master_name_field");

        master_name_field.setAttribute("id","master-name-field");
        master_id_field.setAttribute("id","master-id-field");

        n_filter.setAttribute("type","number");
        n_filter.setAttribute("class","n_filter_style")
        n_filter.setAttribute("id","n-filter");

        label_for_id_field.setAttribute("for","n_filter");

        can_frontend.appendChild(field_for_id_and_master);
    
        field_for_id_and_master.appendChild(label_for_id_field);
        field_for_id_and_master.appendChild(master_id_field);
        field_for_id_and_master.appendChild(label_for_name_field);
        field_for_id_and_master.appendChild(master_name_field);
        field_for_id_and_master.appendChild(label_for_n_filter);
        field_for_id_and_master.appendChild(n_filter);
        



        label_for_name_field.innerHTML  = "Name : ";
        label_for_id_field.innerHTML    = "ID : ";
        label_for_n_filter.innerHTML    = "Wie viele? ";
    }



    create_radio_box();
    get_radio_data();


}); 
