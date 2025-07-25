import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
  //const authInfo=useContext(AuthContext)
  //console.log(authInfo)
  const {createUser}=useContext(AuthContext)
  const handleOnSubmit1=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,email,password)
    //Create User in FireBase
   createUser(email,password)
   .then(result=>{
    console.log(result.user)
   })
   .catch(error=>{
    console.log(error)
  })
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleOnSubmit1} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
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
        
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;