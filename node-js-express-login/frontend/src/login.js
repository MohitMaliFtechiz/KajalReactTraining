import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const lableData = [
  {
    lable: "Name",
    name: "username",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    lable: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("Registration data:", data);
    reset();
  };
  const handleError = (errors) => {};

  const loginoptions = {
    name: { required: "UserName is Required" },
    password: {
      required: "password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
    <>
      <section className="mt-lg-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(handleLogin, handleError)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-5">
                  <h1
                    className="lead fw-normal mb-0 me-3"
                    style={{ fontSize: "2rem" }}
                  >
                    LOGIN
                  </h1>
                </div>

                {/* <!-- input --> */}
                {lableData.map((data, index) => {
                  return (
                    <>
                      <div
                        data-mdb-input-init
                        className="form-outline mb-4"
                        key={index}
                      >
                        <label className="form-label">{data.lable}</label>
                        <input
                          type={data.type}
                          name={data.name}
                          id="form3Example3"
                          className="form-control form-control-lg"
                          placeholder={data.placeholder}
                          // value={inputs[data.name]}
                          {...register(data.name)}
                          // onChange={inputsHandler}
                        />
                        {errors?.name && errors.registerOptions.message}
                      </div>
                    </>
                  );
                })}

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    LOGIN
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/registration" className="link-danger">
                      SIGN UP
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

export default Login;
