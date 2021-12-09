import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
} from "reactstrap";
import PropTypes from "prop-types";
import {
  getItems,
  deleteItem,
  editItem,
} from "../../redux_stuff/actions/itemActions";
import { connect } from "react-redux";

class EmployeeList extends Component {
  state = {
    modal: false,
    id: null,
    Name: "",
    Date_of_birth: "",
    Gender: "",
    Salary: "",
  };

  componentDidMount() {
    this.props.getItems();
  }

  deleteClicked = (id) => {
    this.props.deleteItem(id);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      editValue: "",
    });
  };

  //assign to.. what entered in the input field
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //submit
  onSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      _id: this.state._id,
      Name: this.state.name,
      Date_of_birth: this.state.birth_date,
      Gender: this.state.male,
      Salary: this.state.salary,
    };

    //Add item via editItem actions
    this.props.editItem(newPerson);

    //Reset back State
    this.setState({
      modal: !this.state.modal,
      _id: null,
      Name: "",
      Date_of_birth: "",
      Gender: "",
      Salary: "",
    });

    //Recall GET request to refresh all items
    this.props.getItems();
  };

  onClick = ({ _id, Name, Salary, Date_of_birth, Gender }) => {
    this.setState({
      modal: !this.state.modal,
      _id: _id,
      Name: Name,
      Date_of_birth: Date_of_birth,
      Gender: Gender,
      Salary: Salary,
    });
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          {/* EDIT MODAL SECTION */}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}> Edit Item </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
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

                <Button color="dark" style={{ marginBottom: "2rem" }} block>
                  Edit Item
                </Button>
              </Form>
            </ModalBody>
          </Modal>

          <ListGroup>
            {items.map(({ _id, Name }) => (
              <ListGroupItem>
                <Button
                  className="remove-btn float-right"
                  size="sm"
                  color="info"
                  onClick={this.onClick.bind(this, { _id, Name })}
                >
                  &#x2630;
                </Button>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.deleteClicked.bind(this, _id)}
                >
                  &times;
                </Button>
                {Name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapToProps = (state) => ({
  item: state.item,
});

export default connect(mapToProps, { getItems, deleteItem, editItem })(
  EmployeeList
);
