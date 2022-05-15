
import countries from "../../test.json";

export default (req, res) => {
  res.status(200).json(countries);
}

