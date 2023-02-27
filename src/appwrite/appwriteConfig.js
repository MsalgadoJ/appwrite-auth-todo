import {Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("http://localhost/v1").setProject("63fb92219680a5f9358e")

export const account = new Account(client)

// Database

export const databases = new Databases(client, "63fb92219680a5f9358e")