import RawHtml from "./RawHtml";

const Html = (props: { children: React.ReactNode }) => (
  <>
    <RawHtml
      html={`<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->`}
    />
    <html>{props.children}</html>
  </>
);

const TestCompoment = () => {
  return (
    <Html>
      <div>TestCompoment</div>
    </Html>
  );
};

export default TestCompoment;
