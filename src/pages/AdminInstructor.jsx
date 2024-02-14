import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const AdminInstructor = () => {
  // Define handleAction function if needed
  const handleAction = (event) => {
    // Implement your action handling logic here
    console.log('Action:', event.target.value);
  };

  return (
    <div>
    <SideBar />
    <TopBar name="Instructor"/>
    <div className='table-container'>
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
  );
};

export default AdminInstructor;
