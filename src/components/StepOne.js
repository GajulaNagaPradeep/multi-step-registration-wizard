import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const StepOne = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
    },
  });

  const onNext = (data) => {
    props.updateUser(data);
    props.history.push("/second");
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: "First name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "First name should contain only characters.",
              },
            })}
            className={`${errors.first_name ? "input-error" : ""}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: "Last name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Last name should contain only characters.",
              },
            })}
            className={`${errors.last_name ? "input-error" : ""}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>
      </motion.div>
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

export default StepOne;
