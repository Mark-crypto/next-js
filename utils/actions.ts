"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};
export const createUser = async (prevState: any, formData: FormData) => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  //   const rawData = Object.fromEntries(formData);
  //   console.log(rawData);
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  console.log({ firstName, lastName });
  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return "user created successfully";
  } catch (error) {
    console.log(error);
    return "Failed to create user";
  }
  //redirect("/")
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf-8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
