import React from 'react';
import DataTable from 'react-data-table-component';
import '../../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import man from '../../../assets/images/man.png';
import woman from '../../../assets/images/woman.png';

function TicketsHistory() {
  

  //table columns
  const columns = [
    {
      name: 'Name',
      selector: row => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className='profile-image'
            src={row.profileImage}
            alt={row.name}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              marginRight: '10px'
            }}
          />
          {row.name}
        </div>
      ),
      sortable: true
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true
    },
    {
      name: 'Ticket Type',
      selector: row => row.ticketType,
      sortable: true
    },
    {
      name: 'Product Name',
      selector: row => row.productName,
      sortable: true
    }
  ];

  //table data
  const data = [
    {
      id: 1,
      name: 'John Doe',
      date: '28/08/2024 2:09 pm',
      role: 'Staff',
      ticketType: 'Small Ticket ($)',
      productName: 'Catalogue Special',
      profileImage: man,
      
    },
    {
      id: 2,
      name: 'George Doe',
      date: '28/08/2024 10:30 am',
      role: 'Staff',
      ticketType: 'Small Ticket (%)',
      productName: 'Catalogue Special',
      profileImage: woman,
     
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <h3>Users List</h3>
          <div className='top-filter'>
            <select name="" id="filter">
              <option value="">All Users</option>
              <option value="">Staffs</option>
              <option value="">Admins</option>
            </select>
            <input id='search-bar' type="text" placeholder='Search' />
           
          </div>
          <div className="container-content">
            <DataTable
              className="dataTables_wrapper"
              columns={columns}
              data={data}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default TicketsHistory;
