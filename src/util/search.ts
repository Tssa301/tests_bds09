import { requestClients } from "./clients";

export const countClientsMatching = (partialName: string) => {

  const clients = requestClients();

  let count = 0;
  for (var i = 0; i < clients.length; i++) {
    if (clients[i].name.includes(partialName)) {
      count++;
    }
  }
  return count;
};
