import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  text2?: string;
  href2?: string;
  text3?: string;
  href3?: string;


}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  text2="",
  text3="",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props): JSX.Element | null {
  return (
    <div class="py-8 lg:px-0 px-6 flex flex-row">
      <a
        href={href}
        class=" gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
            <a
        href={href2}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text2 && <p>{text2}</p>}
        {image && (
         
        )}
      </a>      <a
        href={href3}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text3 && <p>{text3}</p>}
        {image && (
         
        )}
      </a>
    </div>
  );
}

export default Footer;
