import { Switch, Text } from "react-native";
import { AreaMySwitchStyled, MySwitchStyled } from "./MySwith.styled";
export const MySwitchInput = ({ setChecked, isChecked, label }) => {
  return (
    <AreaMySwitchStyled>
      <MySwitchStyled>
        <Text>{label}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isChecked ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setChecked}
          value={isChecked}
        />
      </MySwitchStyled>
    </AreaMySwitchStyled>
  );
};
