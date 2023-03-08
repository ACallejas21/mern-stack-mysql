
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <h1>
            REACT MySQL
        </h1>
        <ul>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/new'>Crate TASK</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar