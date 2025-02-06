"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// update user
export async function updateUser(data: any) {
  // checking user logging or not
  const { userId } = await auth();
  if (userId) throw new Error("User not found");

  // query the database for the user
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId as string | undefined,
    },
  });

  // if the user is not in the database, throw an error
  if (!user) throw new Error("User not found");

  try {
    // update the user
    const result = await db.$transaction(
      async (tx) => {

        // find if industry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        
        // if industry does not exist, create a new one with default value - will be updated later
        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [], //default empty array
              growthRate: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: "NEUTRAL",
              keyTrends: [],
              recommendedSkills: [],
              lastUpdated: new Date(),
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            }
          });
        }

        // update the user
        const updatedUser = await tx.user.update({
          
          // find user by id
          where: {
            id: user.id,
          },
          data:{
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          }
        });

        // return the updated user
        return {updatedUser, industryInsight};
      },
      {
        timeout: 10000,
      }
  );
  
  // return the user
  return result;
  } catch (error) {
    console.error("Error updating user and industry:", error);
    throw new Error("Failed to update profile");
  }
}

// get user onboarding status
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    }
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    // query the database for the user
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      // select only the industry
      select: {
        industry: true,
      },
    });

    
    return {
      // return the user
      isOnboarded: !!user?.industry
    }
  } catch (error) {
    console.error("Error checking user onboarding status:", error);
    throw new Error("Failed to check onboarding status");
    
  }
}
