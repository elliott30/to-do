export default async (req, res) => {
    if (!req.query.todo) {
      return res.status(400).send("todo parameter required.");
    }
    let todo = encodeURI(req.query.todo);
  
    const token = process.env.TOKEN;
    const url = "https://us1-brave-bee-38177.upstash.io/lpush/todo/" + todo + "?_token=" + token;

    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };