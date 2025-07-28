# Loanpad Backend Demo

This is a very basic GraphQL API to use as a springboard for the Loanpad coding challenge.

# Installation

Run the following commands from inside the root directory:

```bash
docker compose up -d
docker exec --tty LP_ShoppingList_API composer install
```

# Example

You should be able to POST the following to `http://localhost:8000`

```graphql
mutation {
  addItemToShoppingList(inventoryItemID: 1, quantity: 1) {
    id
    quantity
    totalPrice
    inventoryItem {
      id
      name
      price
      category
    }
  }
}
```

# Fetching the schema

When using Relay etc, it wants to generate queries etc based off a a GraphQL schema. This can be done programmatically from the API, see [this](https://graphql.org/learn/introspection/) if you're interested.

If make any changes to the API, run `docker exec --tty LP_ShoppingList_SchemaFetcher npm run get-schema`, you'll see a refreshed schema.graphql in the schema_fetcher folder.
