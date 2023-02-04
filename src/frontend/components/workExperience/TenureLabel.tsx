import { formatDate } from "../../utils/formatDate";
import { getTenureLabel } from "../../utils/getTenureLabel";

type TenureLabelProps = {
  start: string;
  end: string | null;
};

export const TenureLabel: React.FC<TenureLabelProps> = ({ start, end }) => {
  const tenureLabel = getTenureLabel(start, end);

  return (
    <span>
      {tenureLabel} ({formatDate(start)} - {formatDate(end)})
    </span>
  );
};
