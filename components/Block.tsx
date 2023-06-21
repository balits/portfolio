const regex = /^([^.\r\n!?]+)[.\r\n!?](.*)$/;

const Block = ({ str }: { str: string }) => {
  const match = regex.exec(str);

  return match ? (
    <p>
      <strong>{match[0].trim()}</strong>
      {match[2].trim()}
    </p>
  ) : (
    <p>{str}</p>
  );
};

export default Block;
