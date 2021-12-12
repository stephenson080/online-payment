function payWithPaystack() {
    const email = document.getElementById("email").value
    const amount = document.getElementById("amount").value
    let handler = PaystackPop.setup({
        key: 'pk_test_fcf99343fc472d939ef5bbe6ddca897535f30027', // Replace with your public key
        email: email,
        amount: amount * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function () {
            alert('Window closed.');
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            console.log(response.reference)
            const ref = {
                reference: response.reference
            }
            fetch('http://localhost:3000/verify-payment', {
                method: 'POST',
                body: JSON.stringify(ref),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                return res.json()
            })
            .then(resData =>{
                console.log(resData)
            })
            .catch(err => console.log(err))
            // const res = await fetch('http://localhost:3000/verify-payment', {
            //     method: 'POST',
            //     body: JSON.stringify(response)
            // })
            // if (!res.ok) {
            //     alert('Something went wrong')
            //     return
            // }
            // const resdata = await res.json()
            // console.log(resdata)
        }
    });
    handler.openIframe();
}

// function test() {
//     fetch('http://localhost:3000/verify-payment', {
//         method: 'POST',
//         body: JSON.stringify({
//             great: 'hello'
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(resData => console.log(resData))
// }