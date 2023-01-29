import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../../theme/theme";
import { Description } from "../../icons/Description";
import { Title } from "../../Title";
import { Color } from "../../../types/Color";
import { ProfileImage } from "./ProfileImage";
import { NestedContentContainer } from "../../layout/NestedContentContainer";

type IntroductionProps = {
  fullName: string;
  title: string;
  base64Image: string;
  about: string;
};

const useStyles = createUseStyles({
  introductionContainer: {
    background: ({ theme }) => theme.colors.dark,
    color: ({ theme }) => theme.colors.light,
  },
  textInfoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0.75rem",
  },
  fullName: {
    fontSize: "2rem",
  },
  about: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
  },
  titleContainer: {
    marginLeft: "2rem",
  },
});

export const Introduction: React.FC<IntroductionProps> = ({
  fullName,
  title,
  base64Image,
  about,
}) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.introductionContainer}>
      <div className={classes.headerContainer}>
        <ProfileImage base64Image={base64Image} fullName={fullName} />

        <div className={classes.titleContainer}>
          <div className={classes.fullName}>{fullName}</div>
          <div>{title}</div>
        </div>
      </div>

      <div>
        <Title color={Color.Light} Icon={Description}>
          About me
        </Title>
        <NestedContentContainer>
          <span className={classes.about}>{about}</span>
        </NestedContentContainer>
      </div>
    </div>
  );
};
