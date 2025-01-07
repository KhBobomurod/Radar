import React, { Component } from "react";

class PlayerModal extends Component {
  state = {};

  cancelBtn = () => {
    this.props.closeModal();
  };

  changeCurrentData(type, isInc) {
    this.props.changeCurrentData(type, isInc);
  }

  saveChanges = () => {
    this.props.saveChanges();
  };

  componentWillUnmount() {
    this.props.clearCurrentData();
  }

  render() {
    const { currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header">➕Add Users</div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-4">
              <h5>🚥Player's age:</h5>
              <div className="btn-group">
                <button
                  className="btn btn-danger"
                  onClick={() => this.changeCurrentData("age", false)}
                >
                  -
                </button>
                <button className="btn btn-warning">
                  {currentData ? currentData.age : 0}
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => this.changeCurrentData("age", true)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="col-4">
              <h5>Player's city:</h5>
              <div className="col">
                <select
                  name="country"
                  id="country"
                  value={currentData?.city || ""} 
                  onChange={(e) =>
                    this.changeCurrentData("city", e.target.value)
                  }
                >
                  <option value="">Select City</option>
                  <option value="russia">Russia</option>
                  <option value="xorazm">Xorazm</option>
                  <option value="fergana">Fergana</option>
                  <option value="Bukhora">Bukhora</option>
                  <option value="andijan">Andijan</option>
                  <option value="tashkent">Tashkent</option>
                </select>
              </div>
            </div>

            <div className="col-4">
              <h5>🚗Users Shtraf:</h5>
              <div className="btn-group">
                <button
                  className="btn btn-danger"
                  onClick={() => this.changeCurrentData("value", false)}
                >
                  -
                </button>

                <button className="btn">
                  ${currentData ? currentData.value : 0}0
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger m-1" onClick={this.cancelBtn}>
            Cancel
          </button>
          <button className="btn btn-secondary m-1" onClick={this.saveChanges}>
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

export default PlayerModal;
