import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

const lableData = [
  {
    label: "Name",
    name: "username",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Role",
    name: "isAdmin",
    type: "text",
    placeholder: "Enter your role",
  },
];

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const handleRegistration = async (data) => {
    data.isAdmin = data.isAdmin === "admin" ? true : false;

    console.log("data:", data);
    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = response.json();
  
      if (response.ok) {
        console.log("Registration response:", responseData);
        navigate("/login");
      } else {
        console.error("Registration failed:", responseData.msg);
      }

      reset();
    } catch (error) {
      console.log("error:", error);
    }
  };
  const handleError = (errors) => {
    console.log(errors)
  }

  const registerOptions = {
    username:{
      required:"Name is required"
    },
    email:{
      required:"Email is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is not valid."
      },
  },
    password:{
      required:"Password is required",
      minLength:{
        value:6,
        message:"Password must have atleast 6 character",
      }
    },
    isAdmin:{
      required:"Role is required"
    },

  }
  return (
    <>
      <section>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 mt-lg-5">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-5">
                  <h1
                    className="lead fw-normal mb-0 me-3"
                    style={{ fontSize: "2rem" }}
                  >
                    Sign Up
                  </h1>
                </div>

                {/* Input Fields */}
                {lableData.map((data, index) => (
                  <div className="form-outline mb-4" key={index}>
                    <label className="form-label">{data.label}</label>
                    <input
                      type={data.type}
                      name={data.name}
                      className="form-control form-control-lg"
                      placeholder={data.placeholder}
                      {...register(data.name,registerOptions[data.name])}
                    />
                    {
                      errors[data.name] && (
                        <span className="text-danger">
                          {errors[data.name]?.message}
                        </span>
                      )
                    }
                  </div>
                ))}

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Sign Up
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    If you have an account?{" "}
                    <Link to="/login" className="link-danger">
                      LOGIN
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
