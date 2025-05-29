import { deleteUser, removeUser } from "@/utils/actions";

const DeleteBtn = ({ id }: { id: string }) => {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="Mark" />
      <button
        className="bg-red-500 text-xs text-white rounded p-2"
        type="submit"
      >
        Delete
      </button>
    </form>
  );
};
export default DeleteBtn;
