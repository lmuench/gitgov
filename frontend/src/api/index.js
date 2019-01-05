const URL = 'http://localhost:3000';

const api = {
  post: {},
  get: {}
};

api.post.poll = poll => {
  fetch(`${URL}/polls`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(poll)
  });
} 

// api.get.polls = async () => {
//   const response = await fetch(`${URL}/polls`);
//   if (response.status === 200) return await response.json();
//   return [];
// }

export default api;
