import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function loading() {
  return (
    <div className="text-xl p-4 mt-8">
      <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
    </div>
  );
}
