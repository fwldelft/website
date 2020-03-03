import { css, jsx } from "@emotion/core"
import { NextPage } from "next"
import { Title } from "../../components/Sections/Landing/Title"
import { colors } from "../../theme"

const ApplyFormPage: NextPage = () => (
  <Title>
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
      `}
    >
      <form
        method="POST"
        data-netlify={true}
        data-netlify-recaptcha={true}
        css={css`
          background: ${colors.white};
          padding: 1em 0.5em;
          text-align: center;
          color: ${colors.black};
          font-size: 1.4em;
        `}
      >
        <p>
          Signup for Falling Walls Lab Delft 2020 is not open yet. However, you
          can enter your email here and we will send you a message as soon as
          you can apply!
        </p>
        <p>
          <input
            type="email"
            autoComplete="email"
            name="email"
            placeholder="Email"
            css={css`
              font-size: 0.9em;
              text-align: center;
              border: none;
              border-bottom: 1px solid ${colors.black};
              border-radius: 0;
            `}
          />
          <br />
          <input
            type="submit"
            css={css`
              font-size: 1em;
              text-align: center;
            `}
          />
        </p>
      </form>
    </div>
  </Title>
)

export default ApplyFormPage
