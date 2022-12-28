import { Link } from "@mui/material";
import { useRecordContext } from "react-admin";
import LaunchIcon from "@mui/icons-material/Launch";
type CustomUrlFieldProp = {
  source: string;
};

const CustomUrlField = ({ source }: CustomUrlFieldProp) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  );
};

export default CustomUrlField;
