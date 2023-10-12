import { memo } from "react";

type Props = {
  allowSound: boolean;
  setAllowSound: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToggleSounds({ allowSound, setAllowSound }: Props) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

const MemoizedToggleSounds = memo(ToggleSounds);
export default MemoizedToggleSounds;
