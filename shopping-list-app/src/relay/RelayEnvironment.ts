import { Environment, Network, RecordSource, Store, FetchFunction } from "relay-runtime";

const fetchQuery: FetchFunction = async (operation, variables) => {
  const response = await fetch("http://192.168.0.6:8000/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });

  return await response.json();
};

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});
