import { SectionWrapper } from "./hoc"

const githubIcon = (
  <svg width="24" height="24" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
            id="github-[#142]"
          ></path>
        </g>
      </g>
    </g>
  </svg>
)

const linkedInIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
    <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.1,18H5V9.4h3.1V18z M6.5,8.4 L6.5,8.4C5.6,8.4,5,7.8,5,7s0.6-1.4,1.6-1.4c0.9,0,1.5,0.6,1.5,1.4S7.5,8.4,6.5,8.4z M19,18h-3.1v-4.7c0-1.3-0.8-1.6-1.1-1.6 s-1.3,0.2-1.3,1.6c0,0.2,0,4.7,0,4.7h-3.1V9.4h3.1v1.2c0.4-0.7,1.2-1.2,2.7-1.2s2.7,1.2,2.7,3.9L19,18L19,18z" />
  </svg>
)

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="py-8 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-bold mb-4 sm:mb-0">Beatriz, {getCurrentYear()}</div>

      <div className="flex gap-6">
        <a
          href="https://github.com/BRp99"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          {githubIcon}
        </a>

        <a
          href="https://www.linkedin.com/in/beatriz-pereira-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          {linkedInIcon}
        </a>
      </div>
    </div>
  )
}

export default SectionWrapper(Footer, "")
