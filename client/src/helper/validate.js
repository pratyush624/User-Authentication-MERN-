import toast from "react-hot-toast";

/** validate username */
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required...!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
  return error;
};
/** validate login page username */
export const usernameValidate = (values) => {
  const errors = usernameVerify({}, values);
  return errors;
};

/** ========================================= */

/** validate password */
const passwordVerify = (errors = {}, values) => {
  if (!values.password) {
    errors.password = toast.error("Password Required...!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4 characters", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
  return errors;
};
/** validate login page password */
export const passwordValidate = (values) => {
  const errors = passwordVerify({}, values);
  return errors;
};
