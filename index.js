async function getUser(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = response.json();
  return data;
}

const showUser = (data) => {
  document.getElementById("avatar_url").setAttribute("src", data.avatar_url);
  document.getElementById("login").innerHTML = data.login;
  document.getElementById("repos").innerHTML = data.public_repos;
  document.getElementById("gists").innerHTML = data.public_gists;
  document.getElementById("followers").innerHTML = data.followers;
};

getUser("Mapache-Code")
  .then((data) => showUser(data))
  .catch((error) => console.log(error));
