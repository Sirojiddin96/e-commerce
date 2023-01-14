import "./Profile.css";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";
import FacebookIcon from "../../assets/icons/FacebookIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextData } from "../../context/Context";

function Profile(){
    const {setAdminlog} = useContext(ContextData);
    const nav = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function InputHandler(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    function SubmitHandler(e){
        e.preventDefault();
        if(user.email === "admin@gmail.com" && user.password === "123456789"){
            nav("/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja");
            setAdminlog(true);
        }else{
            alert("Incorrect");
        }
    }
    return(        
        <div className="ProfilePage">
            <div className="LoginHolder">
                <p>Welcome to E-comm</p>
                <p>Sign in</p>
                <form onSubmit={(e)=>SubmitHandler(e)} className="SigninForm"> 
                    <input onInput={(e)=>InputHandler(e)} name="email" type="email" value={user.email} placeholder="Your Email"/>
                    <input onInput={(e)=>InputHandler(e)} name="password" type="password" value={user.password} placeholder="Password"/>
                    <button>Sign In</button>
                </form>
                <div className="OrDevision">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <div className="LoginWithGoogle">
                    <figure>
                        <img src={GoogleIcon} alt="GoogleIcon" />
                    </figure>
                    <p>Login with Google</p>
                </div>
                <div className="LoginWithFacebook">
                    <figure>
                        <img src={FacebookIcon} alt="FacebookIcon" />
                    </figure>
                    <p>Login with Facebook</p>
                </div>
                <div className="CannotLog">
                <p>Forgot Password?</p>
                <p>Don't have a account? <span>Register</span></p>
                </div>
            </div>
        </div>
    )
}
export default Profile;