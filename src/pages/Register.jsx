import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const {createUser, setUser, updateUser} = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigation = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = e.target;
    const name = form.name.value;
    if(name.length < 5){
      setNameError("Name should be more than 5 character");
      return;
    }
    else{
      setNameError("")
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,photo,email,password})
    createUser(email, password)
    .then(result => {
      const user = result.user;
      // console.log(user)
      updateUser({displayName: name, photoURL: photo})
      .then(() => {
        setUser({...user, displayName: name, photoURL: photo });
        navigation("/")
      })
      .catch((error) => {
        console.log(error)
        setUser(user)
      });
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage, errorCode)
    // ..
  });
  }
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input type="text" required name='name' className="input" placeholder="Name" />
            {nameError && <p className='text-xs text-red-400'>{nameError}</p>}
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" required name='photo' className="input" placeholder="Photo URL" />
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" required name='email' className="input" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" required name='password' className="input" placeholder="Password" />
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center py-5">Already have Account ? <Link to="/auth/login" className="text-secondary"> Login </Link></p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;