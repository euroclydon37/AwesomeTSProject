# The Ants go Marching

In order to run this, you'll need to have your environment set up for React Native development.
1. Clone this repo.
2. `yarn install`
3. `yarn ios`

# Some Notes about the Project
Fetching the data from graphQL was very straight forward. However, when it came to the win chances and loading states, those values were all generated and controlled locally. In a real project, you would use the `useMutation` hook in order to update the data on the backend.
