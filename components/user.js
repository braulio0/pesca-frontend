import styles from "../styles/User.module.css";

const User = ({ name, licenseFishing, fishing, status }) => {
    return (
        <>
            <div className={styles.container}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Hola {name}</h3>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Licensia</th>
                            <th scope="col">Zona de pesca</th>
                            <th scope="col">Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{licenseFishing}</td>
                            <td>{fishing}</td>
                            {status === "PENDING" ? (
                                <td class="table-warning"> {status}</td>
                            ) : (
                                status === "ACCEPTED" ?  
                                    <td class="table-success"> {status}</td>: 
                                <td class="table-danger"> {status}</td>

                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default User;
