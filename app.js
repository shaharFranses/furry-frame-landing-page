
$(function() {
   
    $("form[name='contact']").validate({
      
      rules: {
        
        fullName:  {
        required:true,
        minlength:2},
        eMail: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 10
        }
      },
      
      messages: {
        fullName: "Please enter your full name",
        eMail: "Please enter a valid email address",
        phone:"please enter your phone number"
      },
     
      submitHandler: function(form) {
        form.submit();
        window.location.href = "thanks.html";
      }
    });
  });