import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { AiFillEyeInvisible,AiFillSkin } from "react-icons/ai";
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError,setRegisterError] = useState('');
    const [success,setSuccess] = useState('');
    const [showPassword,setShowPassword] = useState(false)
   


    const handleRegister = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       const accepted = e.target.terms.checked;
       console.log(accepted)
       
              setRegisterError('')
              setSuccess('')

       if(password.length <6){
        setRegisterError('Password should be at least 6 character or longer');
        return;
       }
      else if(!/[A-Z]/.test(password)){
        setRegisterError('Your password should have at lest one Upper case Character')
        return;
      }
      else if(!accepted){
        setRegisterError('please accept our terms and conditions')
        return;

      }


   
       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        console.log(result.user)
        setSuccess('user is created successfully')
        sendEmailVerification(result.user)
        
        .then( () =>{
            alert('please check your email and verify your account')
        })
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
                <br /> 
              <div className="relative">
              <input className="mb-4 w-3/4 bg-red-400" 
                required 
                type={showPassword ? "text" : "password"}
                 name="password"
                  id="" 
                 placeholder="Enter Password"  />
                <span className="absolute  -ml-8 text-2xl" onClick={()=>setShowPassword(!showPassword)}> 
                {
                 showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> :<AiFillSkin></AiFillSkin>
                
                }
                </span>
              </div>

                <br />
                <input type="checkBox" name="terms" id="terms"/>
                <label className="ml-4" htmlFor="terms">Accept our <a href="" >Terms and conditions</a></label>

                <br />
                <input className="btn btn-primary mt-4" type="submit" value="Register" />
            </form>
            {
                  registerError && <p className="text-red-500 mt-4">{registerError}</p>
            }
            {
                success && <p>{success}</p>
            }
            <p>Already have an account ? please Login <Link to="/login">Login</Link> </p>
          
            </div>
            
        </div>
    );
};

export default Register;