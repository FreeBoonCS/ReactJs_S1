import { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h3 className=" text-success text-center fw-bold">Welcome to My Project on Nested Routing in React JS</h3>
                    <p className=" text-center fw-boldx">Using following imports:</p>
                    <div className="row  text-center text-secondary">
                        <div className="col-lg-4"><div className=" bg-light p-2">Link</div></div>
                        <div className="col-lg-4"><div className=" bg-light p-2">Switch</div></div>
                        <div className="col-lg-4"><div className=" bg-light p-2">Route</div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;