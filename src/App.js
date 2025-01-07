import { Component } from "react";
import PlayerModal from "./components/PlayerModal";

class App extends Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
    city: "",
  };

  componentDidMount() {
    const players = [
      {
        firstName: "Bobomurod",
        age: 16,
        city: "Tashkent",
        value: 23,
      },
      {
        firstName: "Jony",
        age: 29,
        city: "London",
        value: 5,
      },
      {
        firstName: "Emin",
        age: 40,
        city: "Dubai",
        value: 100,
      },
      {
        firstName: "Daniel",
        age: 34,
        city: "Marcel",
        value: 10,
      },
    ];
    this.setState({
      players,
    });
  }
  removePlayer = (index) => {
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentDate = (type, isIncOrValue) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : { firstName: "none", age: 0, club: "none", value: 0, city: "none" };

    if (type === "age") {
      if (isIncOrValue) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;
      }
    }

    if (type === "value") {
      if (isIncOrValue) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--;
      }
    }

    if (type === "city") {
      newCurrentData.city = isIncOrValue;
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  saveChanges = () => {
    const { players, currentData } = this.state;
    players.push(currentData);
    currentData.firstName = "User";
    this.setState({
      players,
      modalVisibility: false,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="radar">
        <div className="container">
          <h1>📷 RADAR 👤users 🚓</h1>
          <div className="row">
            <div className="col">
              <button className="btn btn-dark m-2" onClick={this.openModal}>
                Add User
              </button>
            </div>
            {modalVisibility ? (
              <PlayerModal
                closeModal={this.closeModal}
                currentData={currentData}
                changeCurrentData={this.changeCurrentDate}
                saveChanges={this.saveChanges}
                clearCurrentData={this.clearCurrentData}
              />
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-sm m-1">
                <thead className="thead-light">
                  <tr>
                    <th>№</th>
                    <th>Name:</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Shtraf</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.age}</td>
                      <td>{item.city}</td>
                      <td>
                        <span className="badge bg-secondary">
                          💰${item.value}0
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.removePlayer(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
