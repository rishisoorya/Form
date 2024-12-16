



$("#register-form").validate(
    {
        rules:{
           name:{
            minlength:3, 
            maxlength:50,
             required:true
           },
          email:{
            required: true,
            email:true
           
          } ,
          phonenumber:{
            minlength:10,
             maxlength: 14,
              required:true

          },
          age:{
            
            required:true,
            number: true,
            min: 18,
            max: 120
          },
          gender:{
            minlength: 4,
             maxlength:15,
              required:true,
             
          },
          address:{
            maxlength:50,
            required:false
          }



        },
        messages:{
          name:{
            required:"please enter your name"
          },
          email:{
             required: "Please enter your email.",
          email: "Please enter a valid email address."
          },
          phonenumber:{
             required:"please enter your number" 
             
          },
          
          age:{
            required: "Please enter your age.",
            number: "Please enter a valid number.",
            min: "You must be at least 18 years old.",
            max: "Age must be less than or equal to 120."
          },
          gender:{
            required: "Please enter your gender(M/F/Others)"
          }
          
        }
    }
  );

