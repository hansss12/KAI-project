const SvgRecolor = ({ svg, color, width, height }: { svg: string, color: string, width: string; height: string }) => {
  let updatedSvg = svg
    .replace(/fill="[^"]*"/g, `fill="${color}"`)
    .replace(/width="[^"]*"/g, `width="${width}"`)
    .replace(/height="[^"]*"/g, `height="${height}"`);

  return <div dangerouslySetInnerHTML={{ __html: updatedSvg }} />;
};

export default SvgRecolor