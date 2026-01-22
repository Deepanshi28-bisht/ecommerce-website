import { useContext, useState } from "react";
import { NameContext } from "../../../hooks/nameContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const { name, setName } = useContext(NameContext);
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  console.log("====================================");
  console.log(name, "mannnn");
  console.log("====================================");
const navigate=useNavigate();
  const validate = () => {
    let isValid = true;

    if (!userName) {
      setUserNameErr("Please enter your username");
      isValid = false;
    } else if (userName.length < 3) {
      setUserNameErr("Please enter correct username");
      isValid = false;
    } else {
      setUserNameErr("");
    }
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!password) {
      setPasswordErr("Please enter your password");
      isValid = false;
    } else if (!passwordRegex.test(password)){
      setPasswordErr("Please enter valid password");
      isValid = false;
    }else{
      setPasswordErr("");                 
    }
    return isValid;
  };
  const handleBtn = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Logged in successfully.");
      setName(userName);
     navigate('/products');
    }
  };
  return (
    <div className="login-wrapper">
      <div className="form-container">
        <h2 className="form-title">Login Form</h2>
        <div className="input-container2">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span className="errTextMsg">{userNameErr}</span>
        </div>
        <div className="input-container2">
          <label>Password</label>
          <input type="text" placeholder="Enter your password" name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <span className="errTextMsg">{passwordErr}</span>
        </div>
        <button className="btnSubmit2" onClick={(e)=>handleBtn(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
