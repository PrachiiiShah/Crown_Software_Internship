//if usercode is alreadt taken by another user then it shows the error and this form's data can not be saved in datatable. write this code in jquery and ajax.
// $(document).ready(function () {
//     $("#usercode").blur(function () {
//         var usercode = $(this).val();
//         $.ajax({
//             url: "checkusercode.php",
//             method: "POST",
//             data: {
//                 usercode: usercode
//             },
//             dataType: "text",
//             success: function (html) {
//                 $('#usercode').html(html);
//             }
//         });
//     });
// });
//
// $(document).ready(function () {
//     $("#usercode").blur(function () {