import SyncLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SyncLoader color="#3470FF" />
    </div>
  );
}
