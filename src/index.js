
var  mercadopago = require('mercadopago');

var accessToken = 'TEST-1084324422053379-062110-3d542986ad7bc28a33db0dba7ef1fef3-445880603';


mercadopago.configure({
  sandbox: true,
  access_token: accessToken
});

//mercadopago.configurations.setAccessToken( accessToken );

var payment_data = {
  transaction_amount: 100,
  token: '1b1f3870b55ccb16971edd8661254349',
  description: 'Synergistic Wool Keyboard',
  installments: 1,
  payment_method_id:'visa',
  issuer_id: 310,
  payer: {
    email: 'vtorres@imaquio.com'
  }
};

// Guarda y postea el pago
mercadopago.payment.save(payment).then(function (data) {
  // ...    
  // Imprime el estado del pago
  Console.log(payment.status);
}).catch(function (error) {
  // ...
});


console.log('Hola Vale');