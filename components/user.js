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
                <table className="table">
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
                                <td className="table-warning"> {status}</td>
                            ) : (
                                status === "ACCEPTED" ?  
                                    <td className="table-success"> {status}</td>: 
                                <td className="table-danger"> {status}</td>

                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default User;
