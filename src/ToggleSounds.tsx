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

export default ToggleSounds;
