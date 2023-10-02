import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error.message)
       })

    }



    return (
        <div>
            <div className="mx-auto md:w-1/2">
            <h1 className="text-3xl">Register Page</h1>
            <br />
            <form onSubmit={handleRegister}>
                <input  className="mb-4 w-3/4 bg-red-400"  type="email" name="email" id="" placeholder="Enter Email"/>
                <br /> <br />
                <input className="mb-4 w-3/4 bg-red-400" type="password" name="password" id="" placeholder="Enter Password" />
                <br />
                <input className="btn btn-primary" type="submit" value="Register" />
            </form>
            </div>
            
        </div>
    );
};

export default Register;