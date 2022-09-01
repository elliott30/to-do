export default async (req, res) => {
    const token = process.env.UPSTASH_TOKEN;
    const url = "https://us1-brave-bee-38177.upstash.io/lrange/todo/0/100?_token=" + token;
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };