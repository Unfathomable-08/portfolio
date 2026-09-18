import FAQ from "@/app/(components)/FAQ";
import { webDevFAQs } from "@/data/faqs";

export default function WebDevFAQ(props) {
  return <FAQ data={webDevFAQs} {...props} />;
}
