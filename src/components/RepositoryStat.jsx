import { View } from "react-native";
import Text from "./Text";
import { convertNumber } from "../utils/convertNumber";
import PropTypes from "prop-types";

const RepositoryStat = ({ statNumber, statName }) => {
  statNumber = convertNumber(statNumber);
  return (
    <View style={{ alignItems: "center", gap: 5 }}>
      <Text fontWeight="bold">{statNumber}</Text>
      <Text color="textSecondary">{statName}</Text>
    </View>
  );
};

export default RepositoryStat;

RepositoryStat.propTypes = {
  statNumber: PropTypes.number.isRequired,
  statName: PropTypes.string.isRequired,
};
