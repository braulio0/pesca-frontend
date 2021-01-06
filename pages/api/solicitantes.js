const getUrlByEmail = (email) => {
  var url = "http://localhost:8080/solicitante/";
  var user = `${email}`;
  const path = url + email;
  console.log(path);
  return user;
};
export default getUrlByEmail;
