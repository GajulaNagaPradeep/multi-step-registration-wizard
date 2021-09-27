import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const StepTwo = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      user_email: user.user_email,
      user_password: user.user_password,
    },
  });

  const onPrevious = () => {
    props.history.push("/first");
  };

  const onNext = (data) => {
    props.updateUser(data);
    props.history.push("/third");
  };

  return (
    <Form className="input-form">
      <motion.div
        className="col-lg-6 offset-lg-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="first_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            className={`${errors.user_email ? "input-error" : ""}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            ref={register({
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should have at-least 6 characters.",
              },
            })}
            className={`${errors.user_password ? "input-error" : ""}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>
      </motion.div>
      <Button variant="primary" type="submit" onClick={onPrevious}>
        Previous
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit(onNext)}
        style={{ float: "right" }}
      >
        Next
      </Button>
    </Form>
  );
};

export default StepTwo;
