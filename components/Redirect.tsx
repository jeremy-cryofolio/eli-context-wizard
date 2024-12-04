import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  to: string;
}

const Redirect = ({ to }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to, router]);

  return null;
};

export default Redirect;
