import Spinner from "@atoms/Spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Spinner />
    </div>
  );
};

export default Loading;
