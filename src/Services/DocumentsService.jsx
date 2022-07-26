const URL = "http://localhost:5555/api/v1/docs";

function getDocument(ID) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/${ID}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  }).catch((err) => console.log(err));
}

export default { getDocument };
