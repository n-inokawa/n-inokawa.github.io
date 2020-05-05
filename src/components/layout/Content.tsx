import { SPACING } from "../../constants/styles";

const Component: React.FC<{}> = ({ children }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          flex: 1;
          width: 100%;
          max-width: 1024px;
          margin: auto;
          padding-top: 0px;
          padding-bottom: ${SPACING * 2}px;
          padding-left: ${SPACING * 2}px;
          padding-right: ${SPACING * 2}px;
        }
      `}
    </style>
  </div>
);

export default Component;
