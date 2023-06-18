
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
              data2["registration_main_id"] +"</td> <td>" + data2["user_code"] + "</td> <td>" + data2["first_name"] +" </td> <td> " + data2["middle_name"] +" </td> <td> " + data2["last_name"] + "</td><td>" + data2["phone_number"] +"</td><td>" + data2["phone_country_code"] + "</td><td>" +data2["email"] +"</td><td> <button id='delete' class='btn btn-danger btn-sm' data-registration_main_id="+data2['registration_main_id']+">delete</button></td><td> <button id='update' class='btn btn-danger btn-sm1' data-registration_main_id="+data2['registration_main_id']+">update</button></td> </tr>");
       
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

{/* <div data-role="popup" id="update" data-theme="a" class="ui-corner-all"> */}
//   <form>
//     <div style ="padding:10px 20px;">
//     <h2>update</h2>
//     <h3>P1ease sign ln</h3>
// <label for="un" class="ui-hidden-
// accessible">User_code </label>
// <input type="text" name=" user" id="un" value="" placeholder="user_code" data-theme="a">
{/* <label for="pw" class="ui-hidden-
accessible" >Pas sword : label>
<input type="password" name="pass" id="pw" value=
placeholder="password" data-theme="a">
un"
value= */}
{/* <button type="submit" class="ui-btn ui-corner-all
ui-shadow ui-btn-b ui-btn-icon-left ui-icon-check">Update</button>
</input>
</div>
  </form>
</div> */}
// // -----------------Update
// $("#info").on("click", "#update", function () {
//   var update_id = $(this).data("registration_main_id");})

$(document).ready(function() {
  $('#update').click(function() {
    $('#popup').fadeIn();
  });

//   $('#closePopupBtn').click(function() {
//     $('#popup').fadeOut();
//   });
});

// $("#info").on("click","#update",

// function fetchEditEntry(iterator){
//   var registration_main_id,tableData;
//   // tableData = data.response;
//   // document.getElementById("addentry").style.display = "none";
//  document.getElementById("update").style.display="block";

//  var user_code = document.getElementById("usercode");
//  var first_name = document.getElementById("first_name");
//  var middle_name = document.getElementById("middle_name");
//  var last_name = document.getElementById("last_name");
//  var phone_number = document.getElementById("phone_number");
//  var phone_country_code = document.getElementById("phone_country_code");
//  var email = document.getElementById("email");
 
//  registration_main_id = tableData[iterator].registration_main_id;
//  user_code.value = tableData[iterator].user_code;
//  first_name.value = tableData[iterator].first_name;
//  middle_name.value = tableData[iterator].middle_name;
//  last_name.value = tableData[iterator].last_name;
//  phone_number.value = tableData[iterator].phone_number;
//  phone_country_code.value = tableData[iterator].phone_country_code;
//  email.value = tableData[iterator].email;
// document.getElementById("update").innerText = "Update";
// },
// function update(){
//   $.ajax({
//       url: "https://glexas.com/hostel_data/API/test/new_admission_update.php",
//       method: "PUT",
//       data: {
//         registration_main_id: registration_main_id,
//         user_code: user_code.value,
//         first_name: first_name.value,
//         middle_name: middle_name.value,
//         last_name: last_name.value,
//         phone_number: phone_number.value,
//         phone_country_code: phone_country_code.value,
//         email: email.value,
      
//       },
//       success: function (data) {
//         console.log(data)
//         if (data.status === true) {
//           location.reload();
//         } else {
//           alert("Data couldn't be deleted !");
//         }
//       },
//     });
//     }
// )

 



// $("info").on("click", "#update", function () {
//   iterator = $(this).data("iterator");
//   console.log(iterator);

//   $("#update_entry").css("display", "block");
//   $("#add_entry").css("display", "none");

//   $("#registration_main_id").val(table_data[iterator].registration_main_id);
//   $("#user_code").val(table_data[iterator].user_code);
//   $("#first_name").val(table_data[iterator].first_name);
//   $("#middle_name").val(table_data[iterator].middle_name);
//   $("#last_name").val(table_data[iterator].last_name);

  
//   phone_country_code = table_data[iterator].phone_country_code;

//   $("#phone_number").val(
//     phone_country_code + table_data[iterator].phone_number
//   );

//   $("#email").val(table_data[iterator].email);

//   $("#modalLabel").text("Edit Entry");
// });
// $("#exampleModal").on("click", "#update_entry", function (event) {
// event.preventDefault();
// registration_main_id = $("#registration_main_id").val();
// user_code = $("#user_code").val();
// first_name = $("#first_name").val();
// middle_name = $("#middle_name").val();
// last_name = $("#last_name").val();

// temp_phone_number = $("#phone_number").val();

// phone_country_code = temp_phone_number.slice(0, 3);

// phone_number = temp_phone_number.slice(3);

// email = $("#email").val();

// $.ajax({
//   url: "https://glexas.com/hostel_data/API/test/new_admission_update.php",
//   method: "POST",
//   data: {
//     registration_main_id: registration_main_id,
//     user_code: user_code,
//     first_name: first_name,
//     middle_name: middle_name,
//     last_name: last_name,
//     phone_number: phone_number,
//     phone_country_code: phone_country_code,
//     email: email,
  
//   },
//   success: function (data) {
//     if (data.status === true) {
//       location.reload();
//     } else {
//       alert("Data couldn't be deleted !");
//     }
//   },
// });
// });

// $("tfoot").on("click", "#btm-sm", function () {
// $("#update_entry").css("display", "none");
// $("#add_entry").css("display", "block");
// $("#modalLabel").text("Add New Entry");
// $("#registration_main_id").css("display", "none");
// });

//---------------new Add
function validate_user_code() {
  var validate_user_code = new RegExp("^[a-zA-Z_.,!@#$%^&*₹]+$");
  user_code = $("#user_code").val();
  if (validate_user_code.test(user_code)) {
    user_code_error = false;
    $("#user_code").css("border", "2px solid green");
  } else {
    $("#user_code").css("border", "2px solid red");
    user_code_error = true;
  }
}
function validate_first_name() {
  var validate_first_name = new RegExp("^[a-zA-Z]+$");
  first_name = $("#first_name").val();
  if (validate_first_name.test(first_name)) {
    first_name_error = false;
    $("#first_name").css("border", "2px solid green");
  } else {
    first_name_error = true;
    $("#first_name").css("border", "2px solid red");
  }
}

function validate_middle_name() {
  var validate_middle_name = new RegExp("^[a-zA-Z]+$");
  middle_name = $("#middle_name").val();
  if (validate_middle_name.test(middle_name)) {
    middle_name_error = false;
    $("#middle_name").css("border", "2px solid green");
  } else {
    $("#middle_name").css("border", "2px solid red");
    middle_name_error = true;
  }
}

function validate_last_name() {
  var validate_last_name = new RegExp("^[a-zA-Z]+$");
  last_name = $("#last_name").val();
  if (validate_last_name.test(last_name)) {
    last_name_error = false;
    $("#last_name").css("border", "2px solid green");
  } else {
    $("#last_name").css("border", "2px solid red");
    last_name_error = true;
  }
}

function validate_phone_number() {
  var validate_phone_number = new RegExp("^[+1-9][0-9]{2,12}$");
  phone_number = $("#phone_number").val();
  if (validate_phone_number.test(phone_number)) {
    phone_number_error = false;
    $("#phone_number").css("border", "2px solid green");
  } else {
    $("#phone_number").css("border", "2px solid red");
    phone_number_error = true;
  }
}

function validate_email() {
  var validate_email = /^\S+@\S+\.\S+$/;
  email = $("#email").val();
  if (validate_email.test(email)) {
    email_error = false;
    $("#email").css("border", "2px solid green");
  } else {
    $("#email").css("border", "2px solid red");
    email_error = true;
  }
}

$("#exampleModal").on(
  "click",
  "#add_entry",
  function (event) {
    var temp_phone_number;
    console.log("hello");
    event.preventDefault();
    validate_user_code();
    validate_first_name();
    validate_middle_name();
    validate_last_name();
    validate_phone_number();
    validate_email();

    var user_code = $("#user_code").val();
    var first_name = $("#first_name").val();
    var middle_name = $("#middle_name").val();
    var last_name = $("#last_name").val();

    temp_phone_number = $("#phone_number").val();

    phone_country_code = temp_phone_number.slice(0, 3);

    phone_number = temp_phone_number.slice(3);

    email = $("#email").val();

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
        console.log(data);
        if (data.status === true) {
          // location.reload();
        } else {
          alert("Data couldn't be deleted !");
        }
      },
    });
  }
  //}
);

$(document).ready(function() {
  $('#openPopupBtn').click(function() {
    $('#popup').fadeIn();
  });

  $('#closePopupBtn').click(function() {
    $('#popup').fadeOut();
  });
});