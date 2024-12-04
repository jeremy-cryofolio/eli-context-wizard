"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  backPath?: string;
  nextPath?: string;
  isFormValid?: boolean;
  onFinish?: () => void;
}

const NavButtons = ({ backPath, nextPath, isFormValid, onFinish }: Props) => {
  const router = useRouter();

  const renderBackButton = () => {
    if (backPath) {
      return (
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push(backPath)}
        >
          Back
        </Button>
      );
    }
  };

  const renderNextButton = () => {
    if (nextPath) {
      return (
        <Button
          type="submit"
          onClick={() => isFormValid && router.push(nextPath)}
        >
          Next
        </Button>
      );
    }
  };

  const renderFinishButton = () => {
    if (onFinish) {
      return (
        <Button type="submit" onClick={onFinish}>
          Finish
        </Button>
      );
    }
  };

  return (
    <div className="flex gap-4">
      {renderBackButton()}
      {renderNextButton()}
      {renderFinishButton()}
    </div>
  );
};

export default NavButtons;
