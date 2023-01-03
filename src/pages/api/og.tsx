import { ImageResponse } from '@vercel/og'
import { BackgroundRipple } from '@/assets/BackgroundRipple'

export const config = {
  runtime: 'experimental-edge'
}

export default async function handler() {
  const interRegular = fetch(
    new URL('../../assets/fonts/Inter-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const nunitoExtraBold = fetch(
    new URL('../../assets/fonts/Nunito-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  try {
    const fontDisplay = await nunitoExtraBold
    const fontBody = await interRegular

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: '#13111C'
          }}
        >
          <svg
            style={{
              position: 'absolute',
              top: 0
            }}
            width={1540}
            viewBox="0 0 1540 1537"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_500_368)">
              <path
                d="M361.5 1277C640.68 1277 867 1048.89 867 767.5C867 486.111 640.68 258 361.5 258C82.32 258 -144 486.111 -144 767.5C-144 1048.89 82.32 1277 361.5 1277Z"
                fill="#1F89DB"
                fill-opacity="0.06"
              />
              <path
                d="M1259.29 1250.03C1508.53 1250.03 1710.58 1046.31 1710.58 795.005C1710.58 543.703 1508.53 339.982 1259.29 339.982C1010.05 339.982 808 543.703 808 795.005C808 1046.31 1010.05 1250.03 1259.29 1250.03Z"
                fill="#F42A8B"
                fill-opacity="0.06"
              />
              <path
                d="M91 640C399.175 640 649 388.16 649 77.5C649 -233.16 399.175 -485 91 -485C-217.175 -485 -467 -233.16 -467 77.5C-467 388.16 -217.175 640 91 640Z"
                fill="#F42A8B"
                fill-opacity="0.06"
              />
              <path
                d="M1441.24 805C1681.76 805 1876.74 608.453 1876.74 366C1876.74 123.547 1681.76 -73 1441.24 -73C1200.72 -73 1005.74 123.547 1005.74 366C1005.74 608.453 1200.72 805 1441.24 805Z"
                fill="#1F89DB"
                fill-opacity="0.06"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_500_368"
                x="-727"
                y="-745"
                width="2863.74"
                height="2282"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="130"
                  result="effect1_foregroundBlur_500_368"
                />
              </filter>
            </defs>
          </svg>
          <div tw="flex h-full w-full flex-col items-center justify-center">
            <div tw="flex absolute top-0 right-0 w-7/12 max-w-2xl">
              <BackgroundRipple />
            </div>
            <p
              style={{
                fontFamily: 'Display',
                backgroundImage: 'linear-gradient(to right, #F42A8B, #9D4CCE)',
                backgroundClip: 'text',
                //@ts-ignore
                '-webkit-background-clip': 'text',
                color: 'transparent'
              }}
              tw="pb-2 font-extrabold text-8xl"
            >
              Ernesto Resende
            </p>
            <p
              style={{ fontFamily: 'Body', color: '#F1F1F2' }}
              tw="text-4xl max-w-xl text-center  font-normal leading-snug"
            >
              Typing weird symbols that make the computer go beep boop!
            </p>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: 'Display',
            data: fontDisplay,
            weight: 900,
            style: 'normal'
          },
          {
            name: 'Body',
            data: fontBody,
            weight: 400,
            style: 'normal'
          }
        ]
      }
    )
  } catch {}
}
