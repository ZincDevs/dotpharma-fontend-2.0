/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';

function Medicine() {
  return (
    <div>
      <div className="card mb-grid">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="card-header-title">Manage medicines</div>
          <form className="form-inline form-quicksearch d-none d-md-block mx-auto">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-icon">
                  <i data-feather="search" />
                </div>
              </div>
              <input type="text" className="form-control" id="search" placeholder="Type to search..." />
            </div>
          </form>
          <button className="btn btn-sm btn-primary">Add medicine</button>
        </div>
        <div className="table-responsive-md">
          <table className="table table-actions table-striped table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">
                  <label className="custom-control custom-checkbox m-0 p-0">
                    <input type="checkbox" className="custom-control-input table-select-all" />
                    <span className="custom-control-indicator" />
                  </label>
                </th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Roles</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label className="custom-control custom-checkbox m-0 p-0">
                    <input type="checkbox" className="custom-control-input table-select-row" />
                    <span className="custom-control-indicator" />
                  </label>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <span className="badge badge-pill badge-primary">Admin</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="custom-control custom-checkbox m-0 p-0">
                    <input type="checkbox" className="custom-control-input table-select-row" />
                    <span className="custom-control-indicator" />
                  </label>
                </th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <span className="badge badge-pill badge-primary">Author</span>
                  <span className="badge badge-pill badge-primary">Developer</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label className="custom-control custom-checkbox m-0 p-0">
                    <input type="checkbox" className="custom-control-input table-select-row" />
                    <span className="custom-control-indicator" />
                  </label>
                </th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <span className="badge badge-pill badge-danger">Inactive</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Medicine;
