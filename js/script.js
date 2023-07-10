// ------------All data

$(document).ready(function() {
    var html,
        registration_main_id,
        user_code,
        first_name,
        middle_name,
        last_name,
        phone_number,
        phone_country_code,
        email;
    // var registration_main_id;
    var url = "https://glexas.com/hostel_data/API/test/new_admission_list.php";
    $.ajax({
        // dataType: "json",
        method: "GET",
        url: url,
        success: function(data) {
            console.log(data);

            //var result = data;
            // console.log(result);
            if (data.status === true) {
                var table_data = data.response;
                var length = table_data.length;

                // looping through the recieved data
                for (var i = 0; i < length; i++) {
                    //storing data in variables
                    registration_main_id = table_data[i].registration_main_id;
                    user_code = table_data[i].user_code;
                    first_name = table_data[i].first_name;
                    middle_name = table_data[i].middle_name;
                    last_name = table_data[i].last_name;
                    phone_number = table_data[i].phone_number;
                    phone_country_code = table_data[i].phone_country_code;
                    email = table_data[i].email;
                    created_time = table_data[i].created_time;

                    // adding the data variables into the html page
                    html += "<tr>";
                    html += "<td>" + registration_main_id + "</td>";
                    html += "<td>" + user_code + "</td>";
                    html += "<td>" + first_name + "</td>";
                    html += "<td>" + middle_name + "</td>";
                    html += "<td>" + last_name + "</td>";
                    html += "<td>" + phone_country_code + "</td>";
                    html += "<td>" + phone_number + "</td>";
                    html += "<td>" + email + "</td>";
                    html += "<td>" + created_time + "</td>";

                    // difference of two dates
                    var entry_create_time = new Date(table_data[i].created_time);
                    var current_date = new Date();
                    var time_diff =
                        Math.abs(current_date - entry_create_time) / (1000 * 60 * 60 * 24);
                    // console.log(time_diff);
                    if (time_diff < 1) {
                        html +=
                            "<td>" +
                            `<button class="btn btn-danger" data-registration_id="${registration_main_id}" id="delete">delete</button>` +
                            "</td>";
                    } else {
                        html +=
                            " <td>" +
                            `<button class="btn btn-danger" data-registration_id="${registration_main_id}" id="delete">delete</button>` +
                            "</td> <td>" +
                            `<button class="btn btn-danger" data-registration_id="${registration_main_id}" id="update">update</button>` +
                            "</td> ";
                    }

                    html += "</tr>";

                    //appending the changes into the html page
                    $("tbody").html(html);
                }
                // $("#example").DataTable();
                $("#loader").hide();
                $(".data-table").show();
            } else {
                alert("Some error occurred while fetching the data from server");
            }
            //       if (result["status"] == true) {
            //         var data1 = result["response"];
            //         for (var i = 0; i < data1.length; i++) {
            //           var data2 = data1[i];
            //           $("#info").append(
            //             "<tr> <td>" +
            //               data2["registration_main_id"] +
            //               "</td> <td>" +
            //               data2["user_code"] +
            //               "</td> <td>" +
            //               data2["first_name"] +
            //               " </td> <td> " +
            //               data2["middle_name"] +
            //               " </td> <td> " +
            //               data2["last_name"] +
            //               "</td><td>" +
            //               data2["phone_number"] +
            //               "</td><td>" +
            //               data2["phone_country_code"] +
            //               "</td><td>" +
            //               data2["email"] +
            //               "</td> <td>" + data2["created_time"] +"</td><td> <button id='delete' class='btn btn-danger btn-sm' data-registration_main_id=" +
            //               data2["registration_main_id"] +
            //               ">delete</button></td></tr>"

            console.log(time_diff);
        },
        beforeSend: function() {
            $("#loader").show();
        },
    });

    $("tbody").on("click", "#delete", function() {
        var delete_id = $(this).data("registration_id");
        $(".data-table").hide();
        // $(".loader").show();
        $.ajax({
            url: "https://glexas.com/hostel_data/API/test/new_admission_delete.php",
            method: "POST",
            data: {
                registration_main_id: delete_id,
            },
            success: function(data) {
                if (data.status === true) {
                    location.reload();
                    $(".data-table").show();
                } else {
                    alert("Data couldn't be deleted !");
                }
                $("#loader").hide();
            },

            beforeSend: function() {
                $("#loader").show();
            },
        });
    });

    $(document).ready(function() {
        setTimeout(() => {
            $("tbody").on("click", "#update", function() {
                console.log("working");

                // var now = moment();

                $("#popup").fadeIn();

                var row = $(this).closest("tr");
                var reg_id = row.find("td:nth-child(1)").text();
                var u_code = row.find("td:nth-child(2)").text();
                var f_name = row.find("td:nth-child(3)").text();
                // console.log(f_name);
                var m_name = row.find("td:nth-child(4)").text();
                var l_name = row.find("td:nth-child(5)").text();

                var ph_coun_code = row.find("td:nth-child(6)").text();
                var ph_no = row.find("td:nth-child(7)").text();
                var email = row.find("td:nth-child(8)").text();
                // var created_time = row.find("td:nth-child(9)").text();
                // console.log("helloupdate");
                // var abc1 = $(".iti__selected-flag").text();
                // console.log(abc1);
                $("#u_registration_id").val(reg_id);
                $("#u_user_code").val(u_code);
                $("#u_first_name").val(f_name);
                $("#u_middle_name").val(m_name);
                $("#u_last_name").val(l_name);
                $("#u_phone_number").val(ph_no);
                $("#u_phone_country_code").val(ph_coun_code);
                $("#u_email").val(email);
            });

            $("#closePopupBtn").click(function() {
                $("#popup").fadeOut();
            });

            $("#u_update").click(function(event) {
                event.preventDefault();
                console.log($("#u_registration_id").val());
                var f_name = $("#u_first_name").val();
                var validate_name1 = /^[A-Za-z]+$/;
                if (f_name === "" || !validate_name1.test(f_name)) {
                    $("#errorMessage6").show();
                    console.log("gau");
                    //  displayErrorMessage('Please enter a name');
                    return;
                }

                var m_name = $("#u_middle_name").val();
                if (m_name === "" || !validate_name1.test(m_name)) {
                    $("#errorMessage7").show();
                    //  displayErrorMessage('Please enter a name');
                    return;
                }

                var l_name = $("#u_last_name").val();
                if (l_name === "" || !validate_name1.test(l_name)) {
                    $("#errorMessage8").show();
                    //  displayErrorMessage('Please enter a name');
                    return;
                }

                var ph_no = $("#u_phone_number").val();
                //  var validate_phone_number = /^[0-9]+$/;
                var phonePattern1 = /^\d{10}$/;
                if (ph_no === "" || !phonePattern1.test(ph_no)) {
                    $("#errorMessage9").show();
                    //  displayErrorMessage('Please enter a name');
                    return;
                }

                //   //email validation

                var email = $("#email").val();
                var emailPattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Only allow alphabets
                if (!emailPattern1.test(email)) {
                    $("#errorMessage10").show();
                    return;
                }
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
                        // created_time: $("#u_created_time").val(),
                    },

                    success: function(data) {
                        console.log(data);
                        if (data.status === true) {
                            location.reload();
                        } else {
                            alert("Data couldn't be deleted !");
                        }
                        $("#loader").hide();
                    },

                    beforeSend: function() {
                        $("#loader").show();
                    },
                });
            });
        }, 2000);
    });

    $("#exampleModal").on("click", "#add_entry", function() {
        //  var temp_phone_number;
        //  console.log("hello");
        //  event.preventDefault();
        // validate_user_code();
        //  validate_first_name();
        //  validate_middle_name();

        //  validate_phone_number();
        //  validate_email();
        console.log("hello");
        var abc = $(".iti__selected-flag").text();
        console.log(abc);

        var user_code = $("#user_code").val();

        var first_name = $("#first_name").val();

        var middle_name = $("#middle_name").val();
        var last_name = $("#last_name").val();

        var phone_number = $("#phone_number").val();

        var phone_country_code = abc;

        var email = $("#email").val();

        var regex = /^[A-Za-z0-9]+$/; // Only allow alphabets
        if (!regex.test(user_code)) {
            // Validation failed
            $("#errorMessage").show();
            // alert('User code can only contain alphabets.');
            return;
        } else {
            $("#errorMessage").hide();

            $.ajax({
                url: "https://glexas.com/hostel_data/API/test/check_username.php",
                method: "POST",
                data: {
                    user_code: user_code,
                },

                success: function(data) {
                    if (data.message === "available") {
                        console.log("no");
                        //  alert("User Code Already Taken");
                        $("#availability").html(
                            '<span class="text-danger">User Code Already Taken</span>'
                        );
                    } else {
                        var validate_name = /^[A-Za-z]+$/;
                        if (first_name === "" || !validate_name.test(first_name)) {
                            $("#errorMessage1").show();
                            //  displayErrorMessage('Please enter a name');
                            return;
                        }

                        if (middle_name === "" || !validate_name.test(middle_name)) {
                            $("#errorMessage2").show();
                            //  displayErrorMessage('Please enter a name');
                            return;
                        }
                        if (last_name === "" || !validate_name.test(last_name)) {
                            $("#errorMessage3").show();
                            //  displayErrorMessage('Please enter a name');
                            return;
                        }

                        //  var validate_phone_number = /^[0-9]+$/;
                        var phonePattern = /^\d{10}$/;
                        if (phone_number === "" || !phonePattern.test(phone_number)) {
                            $("#errorMessage4").show();
                            //  displayErrorMessage('Please enter a name');
                            return;
                        }

                        // -----   //email validation
                        var email = $("#email").val();
                        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Only allow alphabets
                        if (!emailPattern.test(email)) {
                            $("#errorMessage5").show();
                            return;
                        }

                        console.log("yes");

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

                            success: function(data) {
                                console.log("hi");

                                if (data.status === true) {
                                    console.log(user_code);

                                    console.log("hiii");

                                    location.reload();
                                    $(".data-table").show();
                                    //  location.reload();
                                } else {
                                    alert("Data couldn't be deleted !");
                                }
                                $("#loader").hide();
                            },
                            beforeSend: function() {
                                $("#loader").show();
                            },
                        });
                    }
                },
            });
        }

        console.log(phone_number);
    });
    console.log("hello");
});