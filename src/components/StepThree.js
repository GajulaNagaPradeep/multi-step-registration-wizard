import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../utils/constants";

const StepThree = (props) => {
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .catch((error) => console.error("Error", error));
    setAddress(address);
  };

  const onPrevious = () => {
    props.history.push("/second");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = props;
      const updatedData = { address };

      await axios.post(`${BASE_API_URL}/register`, {
        ...user,
        ...updatedData,
      });
      Swal.fire("Awesome!", "You're successfully registered!", "success").then(
        (result) => {
          if (result.isConfirmed || result.isDismissed) {
            props.resetUser();
            props.history.push("/");
          }
        }
      );
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log("error", error.response.data);
      }
    }
  };

  return (
    <Form className="input-form">
      <motion.div
        className="col-lg-6 offset-lg-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            googleCallbackName="myCallbackFunc"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Address ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </Form.Group>
      </motion.div>
      <Button variant="primary" type="submit" onClick={onPrevious}>
        Previous
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        style={{ float: "right" }}
      >
        Register
      </Button>
    </Form>
  );
};

export default StepThree;
