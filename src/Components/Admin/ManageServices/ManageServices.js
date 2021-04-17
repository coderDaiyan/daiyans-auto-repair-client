import { useState } from "react";
import swal from "sweetalert";
import DashboardHeader from "../../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  fetch("http://localhost:5000/services")
    .then((res) => res.json())
    .then((data) => setServices(data));

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const remainServices = services.filter(
            (services) => services._id !== id
          );
          setServices(remainServices);
          swal("YAY!", "Product Deleted Successfully!", "success");
        }
      });
  };
  return (
    <section className="dashboard row">
      <div className="header col-12">
        <DashboardHeader />
      </div>
      <div className="d-flex">
        <div className="sidebar col-md-3">
          <Sidebar />
        </div>
        <div className="main_content col-md-9">
          <div className="main_content col-md-9 orders_table">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr>
                    <td>{service.title}</td>
                    <td>${service.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(`${service._id}`)}
                        className="btn btn-danger"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
