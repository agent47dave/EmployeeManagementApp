import React, { Component, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../../redux_stuff/actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    Name: "",
    Date_of_birth: "",
    Gender: "",

    Salary: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  //assign to.. what entered in the input field
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //submit
  onSubmit = (entered) => {
    entered.preventDefault();

    const newPerson = {
      Name: this.state.name,
      Date_of_birth: this.state.birth_date,
      Gender: this.state.male,
      Salary: this.state.salary,
    };
    //add person via addItem action
    this.props.addItem(newPerson);

    //close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "3rem" }}
          onClick={this.toggle}
        >
          Add Employee
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Employee registration form
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup className="m-left">
                {/* firstName */}
                <div className="m-bottom">
                  <Label for="firstName" className="m-right m-top">
                    FullName
                  </Label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Name"
                    onChange={this.onChange}
                  />
                </div>

                {/* Birthdate */}
                <div className="m-bottom">
                  <Label for="birth_date" className="m-right">
                    Birthdate
                  </Label>
                  <input
                    type="date"
                    name="birth_date"
                    id="birth_date"
                    onChange={this.onChange}
                  />
                </div>

                {/* Gender */}
                <div className="m-bottom">
                  <Label className="m-right">Gender</Label>
                  <Label for="male" style={{ marginRight: "0.7rem" }}>
                    Male{" "}
                  </Label>
                  <input
                    type="radio"
                    id="male"
                    name="Gender"
                    className="m-right"
                    onChange={this.onChange}
                  />
                  <Label for="female" style={{ marginRight: "0.7rem" }}>
                    Female{" "}
                  </Label>
                  <input
                    type="radio"
                    id="female"
                    name="Gender"
                    onChange={this.onChange}
                  />
                </div>

                {/* Salary */}
                <div className="m-bottom">
                  <Label className="m-right">Salary</Label>
                  <input type="number" onChange={this.onChange} id="salary" />
                </div>

                {/* registration button */}
                <Button
                  color="dark"
                  className="m-top m-bottom"
                  style={{ marginLeft: "7rem" }}
                >
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapToProps = (state) => ({
  item: state.item,
});

export default connect(mapToProps, { addItem })(ItemModal);
