import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import axios from "axios";

const UserItem = ({
    Username,
    email,
    licenseFishing,
    fishing,
    status,
    clubName,
}) => {
    const router = useRouter();
    const [user, setUser] = useState([]);
    const { register, handleSubmit, error } = useForm();
    const onSubmit = (formData) => {
        setUser(formData);
        console.log(user);
        axios.put(`http://localhost:8080/solicitante/${formData.email}/actualizar`, { status: `${formData.status}` }).then( res=> {
            console.log(res);
            router.reload();
        } ).catch((error)=>{
            console.log(error);
        });
    };

    return (
        <>
            <tr>
                <td>{Username}</td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="email"
                            ref={register}
                            value={email}
                            readOnly={true}
                        />
                    </form>
                </td>
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
                <td>
                    <label htmlFor="status">Aceptar</label>
                    <input
                        name="status"
                        type="radio"
                        value="ACCEPTED"
                        ref={register({ required: true })}
                    />
                    <label htmlFor="status">Rechazar</label>
                    <input
                        name="status"
                        type="radio"
                        value="REJECTED"
                        ref={register({ required: true })}
                    />
                </td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="submit" />
                    </form>
                </td>
            </tr>
        </>
    );
};
export default UserItem;
