
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const {signInUser,googleSignInProvider}=useContext(AuthContext)
   const navigate=useNavigate()
    const handleOnSubmit=(e)=>{
      e.preventDefault()
      const email=e.target.email.value;
      const password=e.target.password.value;
      console.log(email,password)
      //Create User in FireBase
     signInUser(email,password)
     .then(result=>{
      console.log(result.user)
      e.target.reset()
      navigate("/")
     })
     .catch(error=>{
      console.log(error)
    })
    }
    const handleSignInWithGoogle=()=>{
      googleSignInProvider()
        .then((result) => {
    const user = result.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, ' | ',errorMessage)
  });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleOnSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input  className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      
      <button onClick={handleSignInWithGoogle} className="btn btn-primary">Sign In with google</button>
    </div>
  </div>
</div>
    );
};

export default Login;