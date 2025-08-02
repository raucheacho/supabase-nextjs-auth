import Image from "next/image";
import { Button } from "./ui/button";

const GoogleLogin = () => {
  return (
    <div>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
      >
        <Image src="/google.svg" alt="" width={20} height={20} />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default GoogleLogin;
