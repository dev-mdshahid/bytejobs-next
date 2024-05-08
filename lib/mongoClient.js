import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw Error("Please add MONGODB_URI in env file");

export const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = mongoClient.db("bytejobs");
export const usersCollection = db.collection("users");
export const jobsCollection = db.collection("jobs");
export const userJobsCollection = db.collection("user_jobs");
export const internshipCollection = db.collection("internship");
export const fulltimeJobCollection = db.collection("fulltime");
export const parttimeJobCollection = db.collection("parttime");
