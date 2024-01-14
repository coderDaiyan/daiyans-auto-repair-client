import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import PreLoader from "../../../assets/preloader.gif";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://me-auto-repair.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://me-auto-repair.onrender.com/delete/${id}`, {
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
      <Dashboard />
      <div className="d-flex">
        <Sidebar />
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
              {services.length !== 0 ? (
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
              ) : (
                <img
                  style={{
                    marginTop: "-150px",
                    marginLeft: "-50px",
                  }}
                  className="text-center"
                  src={PreLoader}
                  alt="loading..."
                />
              )}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
