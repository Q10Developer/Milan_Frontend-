import { Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="card-stats">
            <Card.Body>
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-chart text-warning"></i>
                  </div>
                </div>
                <div className="col-7">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <Card.Title as="h4">150GB</Card.Title>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="card-stats">
            <Card.Body>
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-light-3 text-success"></i>
                  </div>
                </div>
                <div className="col-7">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <Card.Title as="h4">150GB</Card.Title>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="card-stats">
            <Card.Body>
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-vector text-danger"></i>
                  </div>
                </div>
                <div className="col-7">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <Card.Title as="h4">150GB</Card.Title>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="card-stats">
            <Card.Body>
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-favourite-28 text-primary"></i>
                  </div>
                </div>
                <div className="col-7">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <Card.Title as="h4">150GB</Card.Title>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
