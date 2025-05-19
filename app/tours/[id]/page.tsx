const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1 className="text-4xl">ID: {params.id}</h1>
    </>
  );
};
export default page;
