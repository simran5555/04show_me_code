import { useState } from "react";

const User = () => {

    const [users, setUsers] = useState(<nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page"
                    >Nav 1 <span class="visually-hidden">(current)</span></a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Nav 2</a>
            </li>
        </ul>
    </nav>
    )

    return (
        <div className="user-card">
            <h2>name</h2>
            <h3>location</h3>
            <h3>contact</h3>
            <h4>github link</h4>
        </div>
    )
}

export default User;