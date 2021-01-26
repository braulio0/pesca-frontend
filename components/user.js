import styles from "../styles/User.module.css";

const User = ({ Username, licenseFishing, fishing, status, clubName }) => {
    return (
        <>

            <section className={styles.bg}>
                <div >
                    <div className="container container d-flex align-items-center" style={{ height: "100vh", position: "relative", zIndex: "3" }}>
                        <div className="row w-100 p-5 border border-dark shadow-lg bg-transparent rounded rounded-lg">
                            <div className="col-md-12">
                                <div className="row m-0 justify-content-between">
                                    <h3 className="h1 font-weight-bold text-white">🎣 Hola {Username} !</h3>
                                    <a className="btn btn-danger px-4 align-self-center" type="button" href="\">Salir</a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <table className="table table-hover table-light mt-3 shadow">
                                    <thead>
                                        <tr>
                                            <th scope="col">Licencia</th>
                                            <th scope="col">Zona de Pesca</th>
                                            <th scope="col"> Club de Pesca </th>
                                            <th scope="col">Estatus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{licenseFishing}</td>
                                            <td>{fishing}</td>
                                            <td>{clubName}</td>
                                            {status === "PENDING" ? (
                                                <td className="table-warning"> {status}</td>
                                            ) : status === "ACCEPTED" ? (
                                                <td className="table-success"> {status}</td>
                                            ) : (
                                                <td className="table-danger"> {status}</td>
                                             )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

  
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default User;
