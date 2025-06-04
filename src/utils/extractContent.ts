interface IReviewContent {
  h1: string;
  p: string;
}

export default function extractContent(htmlString: string) {
  const result: IReviewContent = { h1: "", p: "" };

  const h1Match = htmlString.match(/<h1>(.*?)<\/h1>/);
  const pMatch = htmlString.match(/<p>(.*?)<\/p>/);

  result.h1 = h1Match ? h1Match[1] : "";
  result.p = pMatch ? pMatch[1] : "";

  return result;
}
