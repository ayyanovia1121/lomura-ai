import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  // checking user logging or not
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // query the database for the user
  try {
    // check if the user is already in the database or not
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // if the user is already in the database, return the user 
    if (loggedInUser) {
      return loggedInUser;
    }

    // if the user is not in the database, create a new user
    const name = `${user.firstName} ${user.lastName}`;

    // create a new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};
