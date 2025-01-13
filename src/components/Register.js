import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/confirmed', {  state: { email: emailRef.current.value, firstName: firstNameRef.current.value, lastName: lastNameRef.current.value } });
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>

        <label>
          First Name:
          <input type="text" name="firstName" ref={firstNameRef}/>
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" ref={lastNameRef}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
