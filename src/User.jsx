import {useParams, useLocation} from 'react-router-dom';
export default function User() {
    const { id } = useParams();

    const location = useLocation();
    const { name } = location.state || {};
  
    return (
      <div>
        <h1>User</h1>
        <p>User ID: {id}, name: {name  || "No name provided"}</p>
      </div>
    )
  }