// 커스텀 스타일
// 메인 색상처럼 반복적으로 사용되는 값을 저장할 수 있습니다.
// 색상코드 없이 변수만 불러서 사용하기 위함임.
// 사용방법 props.theme.(필요한 변수).색 이름
// ex) 폰트 base면 ${(props) => props.theme.fontSizes.small}

// 반응형 사이즈
const deviceSizes = {
  mobile: "(max-width: 640px)",
  tablet: "(max-width: 980px)",
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
}

// 폰트 사이즈
const calcRem = (size) => `${size / 16}rem`;
const fontSizes = {
  small: calcRem(11),
  base: calcRem(12),
  lg: calcRem(13),
  xl: calcRem(14)
};

// 자주 사용하는 스타일 속성
const common = {
  flexCenter: `
  display: flex;
  justify-contents: center;
  align-items: center;
`,
  flexCenterColumn: `
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`,
};

const margin = {
  small: "4px 0 4px 0",
  medium : "15px 0 15px 0", 
  large : "30px 0 4px 0"
}

// theme 객체에 감싸서 반환한다.
const theme = {
  device,
  fontSizes,
  common,
  margin,
};

export default theme;