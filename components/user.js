import styles from "../styles/Home.module.css";

const User = ({ name, CURP, url }) => {

  return (
     <div>
      <div className="customers-list-item">
        <div className="field">
          <Link to ={`${urlpath}${dni}`}> {name}</Link>
        </div>
        <div className="field">
          <Link to ={`${urlpath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to ={`${urlpath}${dni}/del`}>{delAction}</Link>
        </div>
      </div> 
    </div>
    <div className={styles.container}>

      <main className={styles.main}>
        <div>
          <h1>useEffect {name}</h1>
          <h2> {CURP} </h2>
        </div>
      </main>
    </div>
  );
};
export default User;
