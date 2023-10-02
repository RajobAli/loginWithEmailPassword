import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";


const Register = () => {
    const [registerError,setRegisterError] = useState('');
    const [success,setSuccess] = useState('');


    const handleRegister = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       
              setRegisterError('')
              setSuccess('')
              
       if(password.length <6){
        setRegisterError('Password should be at least 6 character or longer');
        return;
       }


   
       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        console.log(result.user)
        setSuccess('user is created successfully')
       })
       .catch(error =>{
        console.log(error.message)
        setRegisterError(error.message)
       })

    }



    return (
        <div>
            <div className="mx-auto md:w-1/2">
            <h1 className="text-3xl">Register Page</h1>
            <br />
            <form onSubmit={handleRegister}>
                <input  className="mb-4 w-3/4 bg-red-400"  required  type="email" name="email" id="" placeholder="Enter Email"/>
                <br /> <br />
                <input className="mb-4 w-3/4 bg-red-400" required type="password" name="password" id="" placeholder="Enter Password" />
                <br />
                <input className="btn btn-primary" type="submit" value="Register" />
            </form>
            {
                  registerError && <p className="text-red-500 mt-4">{registerError}</p>
            }
            {
                success && <p>{success}</p>
            }
          
            </div>
            
        </div>
    );
};

export default Register;