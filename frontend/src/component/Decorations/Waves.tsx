import { Box, styled } from "@mui/system"
const Wave =styled(Box)({
    height:'150px',
    paddingTop: '50px',
    background: `linear-gradient(90deg,rgba(0,59,97,1)  0% , rgba(4,105,151,1) 30%,  rgba(49,141,178,1) 50%,rgba(55,175,247,1) 70%, rgba(48,177,206,1) 100%)`,
})

const Waves = () => {
  return (
    <>
    <Wave>
    <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 250 30"
          width="1550"
          height="150"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-60 48c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="28" y="0" fill="rgba(255,255,255,0.7)">
              <animate
                attributeName="x"
                values="28; 0; -28"
                dur="25s"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#gentle-wave" x="28" y="3" fill="rgba(255,255,255,0.5)">
              <animate
                attributeName="x"
                values="28; 0; -28"
                dur="7s"
                repeatCount="indefinite"
                begin="-2s"
              />
            </use>
            <use xlinkHref="#gentle-wave" x="28" y="5" fill="rgba(255,255,255,0.3)">
              <animate
                attributeName="x"
                values="28; 0; -28"
                dur="10s"
                repeatCount="indefinite"
                begin="-3s"
              />
            </use>
            <use xlinkHref="#gentle-wave" x="28" y="7" fill="#fff">
              <animate
                attributeName="x"
                values="28; 0; -28"
                dur="13s"
                repeatCount="indefinite"
                begin="-4s"
              />
            </use>
          </g>
        </svg>

    </Wave>
    </>
    )
}

export default Waves