import { FC } from "react";

import Button from "../../components/Button";

const Home: FC = () => {
  return (
    <>
      <Button
        position="left"
        variant="contained"
        disableElevation
        color="secondary"
        size="medium"
        height="40px">
        Increment
      </Button>
      <Button
        position="right"
        variant="contained"
        disableElevation
        color="primary"
        size="medium"
        height="40px">
        Decrement
      </Button>
    </>
  );
};

export default Home;
