let reserveName = document.querySelector("#reserve-name")
let reservePhone = document.querySelector("#reserve-phone")
let reserveEmail = document.querySelector("#reserve-email")
let reserveID = document.querySelector("#reserve-unique-id")



// creating an object and sending it to the backend
$(".submit-btn").click(function () {
    e.preventDefault()
    console.log('button clicked')

    let newReservation = {
        name: reserveName.val().trim(),
        phone: reservePhone.val().trim(),
        email: reserveEmail.val().trim(),
        uniqueID: reserveID.val().trim(),
    }

    //$.post(URL,data,callback);
    $.post("/api/tables", //URL
        newReservation, //Data
        function (data) { //Successful 
            if(data){
                alert("Data was posted to the server")
            } else {
                alert("You are waited listed")
            }
            $("#reserve-name").val("");
            $("#reserve-phone").val("");
            $("#reserve-email").val("");
            $("#reserve-unique-id").val("");
        })
})

//     fetch("/api/tables", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newReservation)
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             alert(`Adding reservation: ${data.name}`)
//         })
//         .catch((err) => {
//             console.log("error", err)
//         })
// })
