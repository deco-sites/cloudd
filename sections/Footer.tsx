import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

interface Props {
  href?: string;
  href2?: string;
  href3?: string;
  href4?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;

}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  href2 = "https://deco.cx/",
  href3 = "https://deco.cx/",
  href4 = "https://deco.cx/",
  text = "Made with",
  text2 = "Made with",
  text3 = "Made with",
  text4 = "Made with",

  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props): JSX.Element | null {
  return (
    <div class="py-8 lg:px-0 px-6 ">
      <div
        
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        <a href={href}>
        {text && <p>{text}</p>}
        </a>
        <a href={href2}>

        {text2 && <p>{text2}</p>}
</a>
        <a href={href3}>
        {text3 && <p>{text3}</p>}
        </a>
          <a href={href4}>
        {text4 && <p>{text4}</p>}
        </a>
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </div>
    </div>
  );
}

export default Footer;
