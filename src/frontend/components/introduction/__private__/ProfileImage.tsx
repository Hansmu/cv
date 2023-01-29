import { createUseStyles } from "react-jss";

type ProfileImageProps = {
  base64Image: string;
  fullName: string;
};

const useStyles = createUseStyles({
  profileImage: {
    borderRadius: "50%",
    width: "6rem",
    border: "0.125rem solid",
  },
});

export const ProfileImage: React.FC<ProfileImageProps> = ({
  base64Image,
  fullName,
}) => {
  const classes = useStyles();

  return (
    <img
      className={classes.profileImage}
      src={base64Image}
      alt={`${fullName} portrait`}
    />
  );
};
