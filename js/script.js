
// ------------All data

$(document).ready(function () {
  // var registration_main_id;
   var url = "https://glexas.com/hostel_data/API/test/new_admission_list.php";
   $.ajax({
     // dataType: "json",
     method: "GET",
     url: url,
     success: function (data) {
     console.log(data);
 
       var result = data;
        // console.log(result);
         
       
         
       if (result["status"] == true) {
         var data1 = result["response"];
         for (var i = 0; i < data1.length; i++) {
           var data2 = data1[i];
           $("#info").append(
             "<tr> <td>" +
               data2["registration_main_id"] +"</td> <td>" + data2["user_code"] + "</td> <td>" + data2["first_name"] +" </td> <td> " + data2["middle_name"] +" </td> <td> " + data2["last_name"] + "</td><td>" + data2["phone_number"] +"</td><td>" + data2["phone_country_code"] + "</td><td>" +data2["email"] +"</td><td> <button id='delete' class='btn btn-danger btn-sm' data-registration_main_id="+data2['registration_main_id']+">delete</button></td><td> <button id='update' class='btn btn-danger btn-sm1 update' data-registration_main_id="+data2['registration_main_id']+">update</button></td> </tr>");
        
         }
      
       }
       $("#example").DataTable();
       
     },
   });
 
 });
 
 
 //------------- Delete
 $("#info").on("click", "#delete", function () {
   var delete_id = $(this).data("registration_main_id");
   
   $.ajax({
     url: "https://glexas.com/hostel_data/API/test/new_admission_delete.php",
     method: "POST",
     data: {
       registration_main_id: delete_id,
     },
     success: function (data) {
       console.log(data);
       if (data.status === true) {
         //location.reload();
       } else {
         alert("Data couldn't be deleted !");
       }
     },
   });
 });
 //-----------------
// $(document).ready(function() {
//   // Initialize the International Telephone Input plugin
//   $("#phone_number").intlTelInput({
//     initialCountry: "us", // Set the initial country (optional)
//     separateDialCode: true, // Display the dial code separately (optional)
//     preferredCountries: ["us", "gb", "fr", "de"], // Set preferred countries (optional)
//     // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // URL of the utils.js file
//   });

//   $('#exampleModal').submit(function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get form values
//     var phoneNumber = $('#phone_number').val();

//     // Perform validation
//     if (!phoneNumber) {
//       alert('Please enter a phone number');
//       return;
//     }

//     // Make the AJAX API call
//     $.ajax({
//       url: 'your-api-url',
//       method: 'POST',
//       data: {
//         phoneNumber: phoneNumber
//       },
//       success: function(response) {
//         // Handle the API response
//         console.log('API response:', response);
//       },
//       error: function(xhr, status, error) {
//         // Handle API call errors
//         console.error('API call failed:', error);
//       }
//     });
//   });
// });

//---------------

//  $("#phone_number").intlTelInput({
//   initialCountry: "auto",
//   geoIpLookup: function(callback) {
//     jQuery.get('https://ipinfo.io',function(){}, "jsonp").always(function(resp){
//       var countryCode = (resp && resp.country) ? resp.country : "";
//       callback(countryCode);
//     })       
//   },
//    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//  })
//--------------------
//  var input = document.querySelector("input"),
//     form = document.querySelector("form"),
//     result = document.querySelector("#result");

// var iti = intlTelInput(input, {
//   initialCountry: "us"
// });

// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   var num = iti.getNumber(),
//       valid = iti.isValidNumber();
//   result.textContent = "Number: " + num + ", valid: " + valid;
// }, false);

// input.addEventListener("focus", function() {
//   result.textContent = "";
// }, false);

//-------------------
// var countryCodes = [
//   { code: '+1', name: 'United States' },
//   { code: '+44', name: 'United Kingdom' },
//   { code: '+91', name: 'India' },
//   // Add more country codes here
// ];
// $(document).ready(function() {
//   var dropdown = $('#countryCodeDropdown');
  
//   $.each(countryCodes, function(index,item) {
//       dropdown.append($('<option>', {
//           value: item.code,
//           text: item.name + ' ' + item.code
//       }));
//   });
// });



//---------------


//--------------------
//  $(function() {
//   $("#country").change(function() {
//     let countryCode = $(this).find('option:selected').data('country-code');
//     let value = "+" + $(this).val();
//     $('#txtPhone').val(value).intlTelInput("setCountry", countryCode);
//   });
  
//   var code = "+977";
//   $('#txtPhone').val(code).intlTelInput();
// });
 
 $(document).ready(function() {
 
     setTimeout(()=>{
       $(".update").on("click", function(){
         console.log("working");
         $("#popup").fadeIn();
 
         var row = $(this).closest("tr");
         var reg_id = row.find("td:nth-child(1)").text();
         var u_code = row.find("td:nth-child(2)").text();
         var f_name = row.find("td:nth-child(3)").text();
         // console.log(f_name);
         var m_name = row.find("td:nth-child(4)").text();
         var l_name = row.find("td:nth-child(5)").text();
         var ph_no = row.find("td:nth-child(6)").text();
         var ph_coun_code = row.find("td:nth-child(7)").text();
         var email = row.find("td:nth-child(8)").text();
 
         $("#u_registration_id").val(reg_id);
         $("#u_user_code").val(u_code);
         $("#u_first_name").val(f_name);
         $("#u_middle_name").val(m_name);
         $("#u_last_name").val(l_name);
         $("#u_phone_number").val(ph_no);
         $("#u_phone_country_code").val(ph_coun_code);
         $("#u_email").val(email);
         // console.log($("#first_name").val());
 
       });
       
       $("#closePopupBtn").click(function () {
         $("#popup").fadeOut();
       });
 
       $("#u_update").click(function(event){
         event.preventDefault();
         console.log($("#u_registration_id").val());
           $.ajax({
             url: "https://glexas.com/hostel_data/API/test/new_admission_update.php",
             method: "POST",
             data: {
               registration_main_id: $("#u_registration_id").val(),
               user_code: $("#u_user_code").val(),
               first_name: $("#u_first_name").val(),
               middle_name: $("#u_middle_name").val(),
               last_name: $("#u_last_name").val(),
               phone_number: $("#u_phone_number").val(),
               phone_country_code: $("#u_phone_country_code").val(),
               email: $("#u_email").val(),
             },
             success: function (data) {
               console.log(data);
               if (data.status === true) {
                 location.reload();
               } else {
                 alert("Data couldn't be deleted !");
               }
             },
           });
       });
 
     }, 2000);
 
 });
 

 //---------------new Add
//  function validate_user_code() {
//    var validate_user_code = new RegExp("^[a-zA-Z]+$");
//    user_code = $("#user_code").val();
//    if (validate_user_code.test(user_code)) {
//      user_code_error = false;
//      $("#user_code").css("border", "2px solid green");
//    } else {
//      $("#user_code").css("border", "2px solid red");
//      user_code_error = true;
//    }
//  }
//  function validate_first_name() {
//    var validate_first_name = new RegExp("^[a-zA-Z]+$");
//    first_name = $("#first_name").val();
//    if (validate_first_name.test(first_name)) {
//      first_name_error = false;
//      $("#first_name").css("border", "2px solid green");
//    } else {
//      first_name_error = true;
//      $("#first_name").css("border", "2px solid red");
//    }
//  }
 
//  function validate_middle_name() {
//    var validate_middle_name = new RegExp("^[a-zA-Z]+$");
//    middle_name = $("#middle_name").val();
//    if (validate_middle_name.test(middle_name)) {
//      middle_name_error = false;
//      $("#middle_name").css("border", "2px solid green");
//    } else {
//      $("#middle_name").css("border", "2px solid red");
//      middle_name_error = true;
//    }
//  }
 
//  function validate_last_name() {
//    var validate_last_name = new RegExp("^[a-zA-Z]+$");
//    last_name = $("#last_name").val();
//    if (validate_last_name.test(last_name)) {
//      last_name_error = false;
//      $("#last_name").css("border", "2px solid green");
//    } else {
//      $("#last_name").css("border", "2px solid red");
//      last_name_error = true;
//    }
//  }
 
//  function validate_phone_number() {
//    var validate_phone_number = new RegExp("^[+1-9][0-9]{2,12}$");
//    phone_number = $("#phone_number").val();
//    if (validate_phone_number.test(phone_number)) {
//      phone_number_error = false;
//      $("#phone_number").css("border", "2px solid green");
//    } else {
//      $("#phone_number").css("border", "2px solid red");
//      phone_number_error = true;
//    }
//  }
 
//  function validate_email() {
//    var validate_email = /^\S+@\S+\.\S+$/;
//    email = $("#email").val();
//    if (validate_email.test(email)) {
//      email_error = false;
//      $("#email").css("border", "2px solid green");
//    } else {
//      $("#email").css("border", "2px solid red");
//      email_error = true;
//    }
//  }

// function ckeck_usercode(){
//   var pattern=/^[a-zA-Z]*$/;
//   var user_code=$("#user_code").val();
//   if(pattern.test(user_code)&& user_code!==''){
// $("usercode_error_message").hide();
// $("#user_code").css("border","2px solid green");
//   }
//   else{
//     $("usercode_error_message").html("Should contain only characters");
//     $("usercode_error_message").show();
//     $("#user_code").css("border","2px solid red");
//     user_code_error=true;
//   }
// }


 $(document).ready(function(){
  $('#exampleModal').submit(function(event){
    event.preventDefault();

    var user_code=$('#user_code').val();

    if(!user_code){
      // alert('Valid');
      return;
    }

    var regex=/^[A-Za-z]+$/;
    if(!regex.test(user_code)){
      alert('Invalid Usercode');
      return;
    }
    $.ajax({
      url:'https://glexas.com/hostel_data/API/test/check_username.php',
      method:'POST',
      data:{user_code:user_code},
      success:function(data){
        if(data.status==true){
          alert('Valid');
        }
        else{
          alert('Invalid usercode');
        }
      }
    })
  })
 });

 $("#exampleModal").on(
   "click",
   "#add_entry",
   function (event) {
    //  var temp_phone_number;
    //  console.log("hello");
    //  event.preventDefault();
    // validate_user_code();
    //  validate_first_name();
    //  validate_middle_name();
    //  validate_last_name();
    //  validate_phone_number();
    //  validate_email();
 
     var user_code = $("#user_code").val();
     var first_name = $("#first_name").val();
     var middle_name = $("#middle_name").val();
     var last_name = $("#last_name").val();
 var phone_number=$('#phone').val();
  var phone_country_code=$('#phone_country_code').val();
    //  var temp_phone_number = $("#phone_number").val();
 
    //  var phone_country_code = temp_phone_number.slice(0, 3);
 
    //  var phone_number = temp_phone_number.slice(3);
 
     var email = $("#email").val();
 
     $.ajax({
       url: "https://glexas.com/hostel_data/API/test/new_admission_insert.php",
       method: "POST",
       data: {
         user_code: user_code,
         first_name: first_name,
         middle_name: middle_name,
         last_name: last_name,
         phone_number: phone_number,
         phone_country_code: phone_country_code,
         email: email,
        
       },
       success: function (data) {
      if(data.status===true){
        //location.reload();
      }
      else{
          alert("Data couldn't be deleted !");
        }

         }
      
    
   })
    })
 ;
