import UserItem from "./UserItem";

const ListUser = ({ data }) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col"> Email</th>
                        <th scope="col">Licensia</th>
                        <th scope="col">Zona de pesca</th>
                        <th scope="col"> Club de pesca </th>
                        <th scope="col">Estatus</th>
                        <th scope ="col"> Responder </th>
                        <th scope="col"> Aceptar </th>
                    </tr>
                </thead>
                <tbody>
                  
                        {data.map(
                            ({
                                Username,
                                email,
                                licenseFishing,
                                fishing,
                                status,
                                clubName,
                            }) => (
                                <UserItem
                                    Username={Username}
                                    email={email}
                                    licenseFishing={licenseFishing}
                                    fishing={fishing}
                                    status={status}
                                    clubName={clubName}
                                />
                            )
                        )}
                
                </tbody>
            </table>
        </>
    );
};
export default ListUser;
