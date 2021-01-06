import { useState } from 'react';

export default function useUser(props){
	const [ user, setUser ] = useState([]);
  setUser(this.props) 
    console.log(user)
    return user;

};
